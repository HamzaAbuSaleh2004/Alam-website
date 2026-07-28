# Aalam Drug Store — Website (v1)

Interactive, bilingual (EN/AR + RTL) marketing site for Aalam Drug Store, built to be
a **credibility & publicity** site with a secondary, informational product catalogue.

## Run locally

```bash
cd Website
npm install      # first time only
npm run dev      # http://localhost:3000
```

Build for production: `npm run build && npm start`.

## Stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS v4** — theme wired to the brand tokens (see `src/app/globals.css`)
- **Motion** (`motion/react`) for animation
- **next/font** — IBM Plex Sans / IBM Plex Sans Arabic / IBM Plex Mono (self-hosted at build)

## What's here

| Route | Content |
|---|---|
| `/` | Hero (self-drawing pulse-logo), trust cards, animated stats, services, about teaser, partners marquee, CTA |
| `/about` | Mission, vision, values, licensing/compliance |
| `/products` | Searchable + category-filterable informational catalogue (animated) |
| `/products/[slug]` | Product detail (no ordering/inquiry) + related items |
| `/partners` | Partner grid |
| `/contact` | Validated demo contact form + details + WhatsApp + map placeholder |

## Design / features

- **Bilingual EN ⇄ AR** with full **RTL** (toggle in navbar; logical CSS properties throughout).
- **Light / dark mode** (toggle in navbar; no-flash inline script; system-preference default).
- **Brand identity**: Medical Cyan `#008DD2` + Vibrant Lime `#A5D027`, IBM Plex type,
  a recurring **EKG/pulse-line** motif. All colors follow the accessibility rules in
  `../brand/BRAND_GUIDELINES.md` (blue-600 for links, dark text on lime).
- **Motion, tastefully**: staggered hero reveal, scroll-reveals, count-up stats, cursor
  spotlight cards, magnetic buttons, partner marquee, animated product filtering — all
  gated behind `prefers-reduced-motion`.

### React Bits

The interactive components (`src/components/ui/*`) are **React-Bits-style effects
implemented directly in this repo** (Aurora, Marquee, SpotlightCard, CountUp, shiny text,
magnetic button, pulse line) so the app is self-contained and runs cleanly. The actual
React Bits components (reactbits.dev, MIT + Commons Clause) can be dropped in to replace
any of these — e.g. their Aurora, LogoLoop, CountUp, ShinyText.

## Placeholders — replace before launch

- **Hero video**: ✅ integrated. The real 5s animated logo (source `Logo-animation.mp4`,
  4K HEVC) was transcoded to H.264 MP4 + VP9 WebM at 1080p with a PNG poster, in
  `public/hero/`. It plays once then settles on the final frame. Re-run the transcode from
  the source if the clip changes.
- **Logo (navbar/footer/404)**: `AnimatedLogo` (`src/components/brand/AnimatedLogo.tsx`) is
  still a placeholder "pulse-ring" mark — can be swapped for the real logo mark extracted
  from the video, or a supplied vector.
- **Products** (`src/lib/data.ts`): demo catalogue; replace via the planned admin Excel import.
- **Partners** (`src/lib/data.ts`): generic placeholder names, not real brands.
- **Stats** (`src/lib/i18n.ts`): representative placeholder figures — confirm with management.
- **Contact form**: demo only (no backend) — wire to Aalam's inbox before launch.
- **Company details**: verify against `../docs/COMPANY_PROFILE.md`.
