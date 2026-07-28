# Aalam Drug Store — مستودع العلم للأدوية

Project workspace for Aalam Drug Store, a licensed pharmaceutical distributor based in
Amman, Jordan. This repository holds the public **website** and (later) the internal
**system**, both built on a shared brand identity.

> **English brand name:** "Aalam Drug Store" (matching the official logo). Arabic:
> مستودع العلم للأدوية.

## Structure

```
Al-Alam/                     # workspace folder (path name kept as-is)
├── brand/                   # Shared brand identity — single source of truth
│   ├── BRAND_GUIDELINES.md  # Colors, typography, logo usage, accessibility, RTL
│   ├── tokens.css           # Design tokens as CSS custom properties
│   └── tokens.json          # Design tokens for JS/TS build tools
├── docs/
│   ├── COMPANY_PROFILE.md   # Business details (client-provided; needs verification)
│   ├── WEBSITE_BLUEPRINT.md # Sitemap, action items, milestones
│   └── WEBSITE_PLAN.md      # Authoritative implementation plan
├── Website/                 # ✅ Public website — Next.js app (v1 built & running)
├── System/                  # Internal system / portal (not started)
└── Logo-animation.mp4       # Source animated logo (4K HEVC)
```

## Brand snapshot

| | |
|---|---|
| Name (EN) | Aalam Drug Store |
| Name (AR) | مستودع العلم للأدوية |
| Primary (Medical Cyan) | `#008DD2` |
| Secondary (Vibrant Lime) | `#A5D027` |
| Text (Charcoal) | `#2D3748` |
| Surface | `#FFFFFF` |
| Typeface | IBM Plex Sans / IBM Plex Sans Arabic |

Full details in [`brand/BRAND_GUIDELINES.md`](./brand/BRAND_GUIDELINES.md).

## Website (v1)

Interactive, bilingual (EN/AR + RTL) marketing site with the real animated-logo hero.
To run it:

```bash
cd Website
npm install
npm run dev      # http://localhost:3000
```

See [`Website/README.md`](./Website/README.md) for details and the list of placeholders
to replace before launch.

## Status

- ✅ Branding foundation (v1) — see `brand/`.
- ✅ Website v1 built and running (Next.js, EN/AR, animated-logo hero).
- ⏳ Open items: real product data (admin Excel import), wire contact form to a live
  inbox, verify company details in [`docs/COMPANY_PROFILE.md`](./docs/COMPANY_PROFILE.md).
