// import type { LucideIcon } from "lucide-react";

// const VARIANTS = [
//   "from-ink-overlay via-ink-raised to-ink",
//   "from-ink-raised via-ink to-ink-overlay",
//   "from-ink via-ink-overlay to-ink-raised",
// ];

// export function ArticleThumb({
//   icon: Icon,
//   index = 0,
// }: {
//   icon: LucideIcon;
//   index?: number;
// }) {
//   const variant = VARIANTS[index % VARIANTS.length];
//   return (
//     <div
//       className={`relative aspect-[16/10] w-full bg-gradient-to-br ${variant} border-b border-border overflow-hidden`}
//       aria-hidden="true"
//     >
//       <div className="absolute inset-0 bg-grid-lines bg-[length:28px_28px] opacity-40" />
//       <Icon
//         size={32}
//         strokeWidth={1.3}
//         className="absolute bottom-5 left-5 text-signal"
//       />
//     </div>
//   );
// }
import type { LucideIcon } from "lucide-react";

const VARIANTS = [
  "from-ink-overlay via-ink-raised to-ink",
  "from-ink-raised via-ink to-ink-overlay",
  "from-ink via-ink-overlay to-ink-raised",
];

interface ArticleThumbProps {
  icon: LucideIcon;
  thumbnail?: string;
  index?: number;
}

export function ArticleThumb({
  icon: Icon,
  thumbnail,
  index = 0,
}: ArticleThumbProps) {
  const variant = VARIANTS[index % VARIANTS.length];

  if (thumbnail) {
    return (
      <div
        className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-ink"
        aria-hidden="true"
      >
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          className="
          absolute inset-0
          h-full w-full
          object-cover object-center
          transition-transform duration-500
          group-hover:scale-[1.03]
        "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floating icon */}
        <div
          className="
          absolute
          bottom-4
          left-4
          z-20
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-black/60
          backdrop-blur-md
          shadow-lg
        "
        >
          <Icon size={22} strokeWidth={1.8} className="text-signal" />
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative aspect-[16/10] w-full bg-gradient-to-br ${variant} border-b border-border overflow-hidden`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[length:28px_28px] opacity-40" />

      <Icon
        size={32}
        strokeWidth={1.3}
        className="absolute bottom-5 left-5 text-signal"
      />
    </div>
  );
}
