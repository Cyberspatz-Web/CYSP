/**
 * Returns an alternating accent color class for items in a grid —
 * mostly brand blue with brand amber in the mix, so grids of icons
 * read as "the logo's two colors," not a single monochrome accent.
 * Used across capability/service/principle/benefit grids site-wide.
 */
export function accentClass(index: number): string {
  return index % 3 === 2 ? "text-brand-amber" : "text-signal";
}
