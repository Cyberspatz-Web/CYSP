import { cn } from "../../lib/utils";

/**
 * A soft, blurred radial glow used behind key sections to add depth —
 * the same visual language as the hero's planet glow, scaled down.
 * Purely decorative; always aria-hidden.
 */
export function AmbientGlow({
  className,
  tone = "blue",
}: {
  className?: string;
  tone?: "blue" | "amber" | "mixed";
}) {
  const gradient =
    tone === "amber"
      ? "radial-gradient(circle, rgba(215,136,37,0.48) 0%, rgba(215,136,37,0.18) 40%, transparent 72%)"
      : tone === "mixed"
        ? "radial-gradient(circle, rgba(85,150,234,0.44) 0%, rgba(215,136,37,0.26) 38%, transparent 72%)"
        : "radial-gradient(circle, rgba(85,150,234,0.46) 0%, rgba(85,150,234,0.16) 40%, transparent 72%)";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-2xl", className)}
      style={{ background: gradient }}
    />
  );
}
