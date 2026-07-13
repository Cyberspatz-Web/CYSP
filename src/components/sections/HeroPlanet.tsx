import { BrandIcon } from "../layout/Logo";

/**
 * The brand mark now sits directly behind the headline (moved up from
 * its previous position near the buttons, per explicit direction) —
 * softened with blur and moderate opacity so the bold white headline
 * stays legible sitting on top of it, the same way the reference
 * site's glow arc sits behind its headline without hurting readability.
 */
export function HeroPlanet() {
  return (
    <>
      {/* Ambient wash — soft color spanning the section, visible
          immediately on load */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full animate-fade-breathe"
          style={{
            top: "10rem",
            width: "96rem",
            height: "70rem",
            background:
              "radial-gradient(ellipse 55% 48% at 50% 35%, rgba(85,150,234,0.34) 0%, rgba(216,136,37,0.24) 22%, rgba(57,114,194,0.16) 46%, transparent 72%)",
            filter: "blur(24px)",
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full animate-pulse-glow"
          style={{
            top: "21rem",
            width: "72rem",
            height: "52rem",
            background:
              "radial-gradient(ellipse 52% 52% at 50% 50%, rgba(216,136,37,0.20) 0%, rgba(85,150,234,0.16) 35%, transparent 72%)",
            filter: "blur(28px)",
          }}
        />
      </div>

      {/* The brand mark itself — positioned behind the headline, softened
          so bold white text stays legible sitting on top of it */}
      <div
        className="pointer-events-none absolute inset-x-0 flex items-center justify-center"
        style={{ top: "14rem", height: "26rem" }}
        aria-hidden="true"
      >
        <div
          className="absolute animate-spin-slow"
          style={{
            width: "44rem",
            height: "44rem",
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(85,150,234,0.10) 4deg, transparent 12deg, transparent 42deg, rgba(216,136,37,0.10) 47deg, transparent 55deg, transparent 92deg, rgba(85,150,234,0.15) 97deg, transparent 105deg, transparent 152deg, rgba(216,136,37,0.13) 157deg, transparent 165deg, transparent 222deg, rgba(85,150,234,0.15) 227deg, transparent 235deg, transparent 302deg, rgba(216,136,37,0.14) 307deg, transparent 315deg, transparent 360deg)",
            maskImage:
              "radial-gradient(circle at 50% 50%, transparent 24%, black 36%, black 58%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, transparent 24%, black 36%, black 58%, transparent 76%)",
          }}
        />
        <div
          className="animate-spin-slow-reverse opacity-70"
          style={{ width: "22rem", height: "22rem" }}
        >
          <BrandIcon
            className="h-full w-full"
            style={{
              filter:
                "blur(0.4px) drop-shadow(0 0 22px rgba(216,136,37,0.28)) drop-shadow(0 0 18px rgba(85,150,234,0.22))",
            }}
          />
        </div>
      </div>

      {/* Grid overlay with slow-traveling light scans along a couple of
          the grid lines — subtle, not attention-grabbing */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-35 [mask-image:radial-gradient(ellipse_65%_70%_at_50%_25%,black,transparent)]" />
        <div className="absolute left-[18%] top-0 bottom-0 w-px overflow-hidden">
          <div
            className="absolute left-0 w-px animate-scan-vertical"
            style={{
              height: "14rem",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(85,150,234,0.9) 45%, rgba(85,150,234,0.9) 55%, transparent 100%)",
            }}
          />
        </div>
        <div className="absolute right-[22%] top-0 bottom-0 w-px overflow-hidden">
          <div
            className="absolute left-0 w-px animate-scan-vertical-delayed"
            style={{
              height: "10rem",
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(216,136,37,0.8) 45%, rgba(216,136,37,0.8) 55%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
