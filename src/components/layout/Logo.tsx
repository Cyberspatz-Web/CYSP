import type { CSSProperties } from "react";

// Real Cyberspatz brand mark, supplied by the client and cropped from the
// original upload. The full lockup's wordmark uses a custom typeface baked
// into the artwork, so it's used as an image rather than recreated in a
// web font (which would drift from the real brand).

export function BrandLogo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src="/brand/logo-full.png"
      alt="Cyberspatz"
      className={`${className} w-auto object-contain`}
    />
  );
}

export function BrandIcon({
  className = "h-8 w-8",
  decorative = true,
  style,
}: {
  className?: string;
  decorative?: boolean;
  style?: CSSProperties;
}) {
  return (
    <img
      src="/brand/logo-icon.png"
      alt={decorative ? "" : "Cyberspatz"}
      aria-hidden={decorative}
      className={`${className} object-contain`}
      style={style}
    />
  );
}
