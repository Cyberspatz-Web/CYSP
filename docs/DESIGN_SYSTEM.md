# Cyberspatz — Design System (v1)

## Concept: brand-driven, restrained

The original concept here was an invented "one disciplined accent
color" system, built before real brand assets existed. The client
later supplied a real logo and brand board — colors and mascot below
are now the official ones, not an invented placeholder palette. The
underlying restraint principle still holds: brand color present and
recognizable, not blasted across every element. Balance was a specific
piece of client feedback — an earlier pass overcorrected into being too
bright/saturated, and was dialed back (see `HeroPlanet.tsx` and
`AmbientGlow.tsx` for where the intensity actually lives).

## Color tokens (`tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#080B14` | Base background (deep navy-black, not neutral black) |
| `ink-raised` | `#111A2C` | Panel surface |
| `ink-overlay` | `#182540` | Elevated surface (modals, menus) |
| `border` | `#232E45` | Hairline dividers |
| `border-strong` | `#2F3D5C` | Card / input borders |
| `paper` | `#F5F7FA` | Primary text |
| `paper-dim` | `#C6CCD6` | Secondary text |
| `steel` | `#8992A3` | Captions, labels, tertiary text |
| `signal` | `#3972C2` | Primary accent (brand blue) — CTAs, active states, key numerals |
| `signal-bright` | `#5596EA` | Lighter blue for hover states, glow highlights |
| `brand-amber` | `#D78825` | Secondary accent — used sparingly, not as a competing primary |
| `brand-amber-bright` | `#E89F22` | Lighter amber for highlights |
| `live` | `#5FA37A` | Muted status-positive green for the "monitoring" indicator only |

These are the official values from the client's brand board — don't
resample or invent new ones without updating this table.

## Type system

- **Display** — `Inter Tight`, 600–800 weight, tight tracking
  (`-0.02` to `-0.03em`), used for H1–H3 only.
- **Body** — `Inter`, 400–500 weight, relaxed line-height, for paragraphs.
- **Mono** — `JetBrains Mono`, used only for labels, eyebrows, status
  badges, stats, and timestamps — signals "system output" without going
  full terminal pastiche.
- Scale is fluid (`clamp()`-based) in `tailwind.config.js` under
  `fontSize.display-*` — do not hardcode pixel headline sizes in
  components.

## Layout rules

- Max content width: `1280px` (`max-w-content`), horizontal padding via
  `.container-content`.
- Section rhythm: `py-section` (`clamp(5rem, 10vw, 9rem)`), separated by
  1px hairlines (`.hairline`) — no drop shadows, no card elevation. Flat,
  gridded, precise.
- Grids use shared borders (border-collapse-style: top+left on the grid,
  right+bottom on each cell) rather than gapped cards with individual
  borders — reinforces the "instrument panel" feel.

## Components (`src/components/ui`)

- `Button` — `primary` (signal fill), `secondary` (outline), `ghost`.
- `Container`, `Section` — layout primitives, always reused rather than
  raw divs with ad hoc padding.
- `StatusBadge` — the signature element: a small live/pulsing dot +
  mono label. Use at most once per section, only where it's earned
  (hero, and optionally a dashboard-style page later). Do not scatter it
  decoratively.

## Motion principles

- Entrance: fade + 12–18px rise, `ease: [0.16, 1, 0.3, 1]`, staggered
  ~80ms — used on hero and on scroll-into-view for grids
  (`whileInView`, `viewport={{ once: true }}` — plays once, doesn't
  re-trigger on re-scroll).
- No parallax, no scroll-jacking, no looping ambient animation beyond the
  single status-dot pulse. Motion should read as "the interface responding
  to you," not "the page performing."
- `prefers-reduced-motion` is respected globally in `index.css`.

## Accessibility floor (already implemented)

- Visible `:focus-visible` outline in signal color on every interactive
  element.
- Semantic landmarks: `header`, `nav[aria-label]`, `main`, `footer`.
- Mobile nav toggle has `aria-expanded` and accessible labels.
- Color contrast: body text (`paper` / `paper-dim`) against `ink` exceeds
  WCAG AA at all sizes used.

## Extending the system

When building the next milestone (About, Services, etc.):
1. Reuse `Section` + `Container` + the existing type scale — don't
   introduce new spacing or font values ad hoc.
2. New section components live in `src/components/sections/`, named for
   what they contain, not the page they're on (so `Approach.tsx`, not
   `HomeApproach.tsx`) — sections should be composable across pages.
3. If a new pattern is needed (e.g. a pricing table), define its tokens
   here first, then build it — keeps the system from drifting per-page.
