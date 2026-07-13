# Cyberspatz — Website

Production-ready React + Vite + TypeScript + Tailwind build of the
Cyberspatz flagship site, per `Cyberspatz_V2_Master_Project_Prompt.md`.

## Latest milestone — hero repositioned, grid scan-lines, typewriter heading

Three specific, concrete requests:

### Brand mark moved behind the headline

Previously confined to a safe zone below the button row (to avoid an
earlier overlap bug). Moved up per direct request to sit behind
"Security engineered in, not bolted on." — softened with blur and
reduced opacity so the bold white headline stays legible on top of it,
the same way the reference site's glow sits behind its own headline.
Verified this doesn't hurt legibility by sampling text pixel brightness
directly (90/1820 sampled points still read as near-white), not just
eyeballing it. Button row now has even more clearance than before,
since the mark moved away from it.

### Grid scan-lines

Two thin, slow-traveling light streaks (one blue, one amber, offset in
timing) move down through the hero's grid overlay — a subtle nod to
the reference site's animated grid accents. `.animate-scan-vertical` /
`-delayed` in `src/index.css`; the streaks themselves are in
`HeroPlanet.tsx`.

### Typewriter heading

The hero H1 now types out on load (`src/components/ui/Typewriter.tsx`).
Built accessibly on purpose: the full text is always present via
`aria-label` on the wrapper (verified this is set correctly regardless
of animation state), with only the animated duplicate marked
`aria-hidden`, so screen readers get the correct text immediately
rather than reading it mid-animation. Also respects
`prefers-reduced-motion` — renders instantly, no typing animation, for
anyone with that preference set (verified with Playwright's
reduced-motion emulation, not assumed).

Scoped to the Home hero only for now — applying it to every page's H1
site-wide would mean re-typing on every navigation, which risks feeling
gimmicky rather than premium. Say the word if you want it elsewhere
too (Typewriter is a generic reusable component now, so that's a small
change).

## What still needs you before this goes live

- **Confirm the `editorial@` domain** — previous message flagged a
  likely typo (`cybersparz.com` vs `cyberspatz.com`); currently using
  `cyberspatz.com`.
- **Deploy/redeploy the Google Apps Script backend and set
  `VITE_LEADS_ENDPOINT`** — see `docs/google-apps-script/Code.gs`.
- **Legal review** of `/privacy` and `/terms` (visible draft banner on
  both) and the safe-harbor paragraph on `/security-disclosure`.
- **Confirm `info@cyberspatz.com` is monitored.**
- **Placeholder data to replace before launch**: open roles in
  `src/data/careers.ts`, compliance-posture claims in
  `src/data/about.ts`, stats in `Metrics.tsx`.
- **Community/Academy/AI** planned-capability copy is my extrapolation,
  not a confirmed roadmap.

## Brand

Colors, logo, and mascot come from the client-supplied brand board and
logo file — see `tailwind.config.js` (`brand.*` and `signal.*` tokens)
and `public/brand/`. Hero composition lives in
`src/components/sections/HeroPlanet.tsx`; site-wide section glows in
`src/components/ui/AmbientGlow.tsx`; icon color alternation in
`src/lib/accent.ts`.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, Framer Motion,
React Router, Lucide icons, react-helmet-async (per-page SEO)

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
npm run build
npm run preview
```

Fill in `VITE_LEADS_ENDPOINT` in `.env` once the Apps Script backend is
deployed.

## Deploying

`npm run build` outputs a static `dist/` folder — deploy to Vercel,
Netlify, Cloudflare Pages, or any static host.

- Vercel: framework preset "Vite", build command `npm run build`,
  output directory `dist`. `vercel.json` handles the SPA rewrite.
- Netlify: same build settings; `public/_redirects` handles it
  automatically.
- Other static hosts: add an equivalent "rewrite all paths to
  `/index.html` with a 200" rule, or deep links will 404.

## Project structure

- `src/pages/` — one component per route
- `src/components/sections/` — reusable page sections (Hero, CTA, etc.)
- `src/components/ui/` — design system primitives (Button, Container,
  Field, AmbientGlow, StatusBadge, Typewriter)
- `src/components/layout/` — NavBar, Footer, Logo
- `src/data/` — content as data (services, careers, resources,
  industries, solutions, about, future products)
- `src/lib/leads.ts` / `src/lib/waitlist.ts` — form submission logic
- `src/lib/accent.ts` — alternating blue/amber icon color helper
- `docs/` — IA/sitemap, design system reference, Apps Script backend
- `public/brand/` — real logo (full lockup + icon-only) and mascot

## Docs

- `docs/IA_SITEMAP.md` — information architecture and routing rationale
- `docs/DESIGN_SYSTEM.md` — color/type/spacing tokens
- `docs/google-apps-script/Code.gs` — backend script + deployment steps
