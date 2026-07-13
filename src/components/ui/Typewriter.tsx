import { useEffect, useState } from "react";

/**
 * Reveals text character-by-character on mount, with a blinking cursor.
 * Accessible by construction: the full text is always present via
 * aria-label on the wrapper, and the animated characters are
 * aria-hidden, so screen readers get the correct final text
 * immediately rather than reading it out mid-animation.
 *
 * Respects prefers-reduced-motion — renders the full text instantly
 * for anyone who has that preference set, matching the rest of the
 * site's motion handling.
 */
export function Typewriter({
  text,
  speed = 32,
  startDelay = 150,
  className,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        <span
          className={`inline-block w-[0.08em] -mb-[0.05em] ml-[0.04em] h-[0.85em] bg-current ${
            done ? "animate-cursor-blink" : "opacity-100"
          }`}
        />
      </span>
    </span>
  );
}
