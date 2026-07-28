# Aalam Drug Store — Website Implementation Plan

**مستودع العلم للأدوية** · Public website + lightweight product catalog & admin

> **Version:** 1.0 · 2026-07-24
> **Status:** Plan approved in principle; awaiting assets before build (see §10).
> This document is the authoritative implementation plan and **supersedes the stack
> recommendation** in [`WEBSITE_BLUEPRINT.md §4`](./WEBSITE_BLUEPRINT.md#4-recommended-technical-stack).
> Brand tokens are the source of truth: [`../brand/tokens.css`](../brand/tokens.css).

---

## 0. Decisions locked

| # | Decision | Choice |
|---|---|---|
| 1 | Architecture | **All-in-one Next.js full-stack** (no separate backend; `System/` is out of scope for now) |
| 2 | Homepage hero | **Cinematic intro → settle** — 5s animated-logo clip plays once, then settles into a static hero |
| 3 | Bulk data | **Excel (.xlsx) import + export only** |
| 4 | Site purpose | **Brand / publicity primary**; product catalog is a **secondary, purely informational feature** — no e-commerce, no ordering, no B2B/inquiry |

The guiding principle: this is a **credibility and visibility site** first. Every choice
optimizes for "who we are," professional polish, SEO, and easy contact. The product menu
is a supporting feature, not a store.

---

## 1. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSR/ISR for SEO; one codebase for public site + `/admin` |
| Styling | **Tailwind CSS** | Theme mapped to [`brand/tokens.css`](../brand/tokens.css) → `#008DD2` / `#A5D027` everywhere |
| Interactivity | **React Bits** (reactbits.dev) | TS + Tailwind variant; installed via shadcn / jsrepo CLI |
| i18n | **next-intl** | EN + AR with full **RTL**; per-locale routes (`/en`, `/ar`) |
| Database | **PostgreSQL** | Small catalog; Cloud SQL (or Neon) — room to grow |
| ORM | **Prisma** | Type-safe schema + migrations |
| Auth (admin) | **Auth.js (NextAuth)** | Credentials provider, hashed passwords; protects `/admin` |
| Excel I/O | **SheetJS (`xlsx`)** + **Zod** | Parse/generate .xlsx in a Server Action / Route Handler with validation |
| Media | **Google Cloud Storage** | Product images via signed uploads; served through `next/image` |
| Hosting | **Cloud Run** (primary) or **Vercel** (zero-config alt) | Containerized Next.js `standalone` output |

## 2. Sitemap & page-by-page

Bilingual EN/AR (RTL) throughout. React Bits used deliberately — **one heavy WebGL
background per page maximum**, all gated behind `prefers-reduced-motion` and downgraded
on mobile.

| Page | Purpose | Interactive treatment (React Bits) |
|---|---|---|
| **Home** | First impression, trust | Animated-logo hero (§3) · `Count Up` trust stats · `Scroll Reveal` / `Animated Content` section entrances · subtle brand-blue `Aurora`/`Silk` accent |
| **About** | Credibility | `Scroll Float` milestones timeline · `Shiny Text` mission/vision · MoH/JFDA compliance badges |
| **Products** *(secondary)* | Show the range | `Spotlight Card` / `Chroma Grid` cards · animated category filter · search · **informational** detail page (no ordering, no inquiry) |
| **Partners** | Trust by association | `Logo Loop` infinite marquee of brand logos · `Bounce Cards` hover |
| **Contact** | Get contacted | Map (Rabieh) · magnetic CTA buttons · `Click Spark` · animated form validation · **WhatsApp click-to-chat** |

Global: RTL-aware language toggle, optional dark mode (neutral scale), magnetic/spark
micro-interactions reserved for primary CTAs only.

## 3. Homepage hero — animated-logo video (intro → settle)

**Behavior:** On load, the 5s animated-logo clip plays **once** (muted, `playsinline`,
`autoPlay`), then cross-fades / freezes into a static hero where the resting logo,
headline, and primary CTA remain. Content below scroll-reveals as the user scrolls.

**Spec & fallbacks:**
- Deliver the clip as **MP4 (H.264)** + **WebM (VP9)**; target < ~3 MB, 1080p.
- **Poster image** (final frame) shows instantly and on reduced-motion / autoplay-blocked.
- Skip/replay control; hero content is real DOM text (never baked into the video) for SEO + a11y.
- `prefers-reduced-motion: reduce` → show poster only, no playback.
- Creative option: the resting hero can hand off to an **SVG self-drawing** of the blue
  swoosh so the mark feels alive without re-looping the video.

## 4. Product catalog (secondary feature)

**Public side:** clean, searchable grid → category filter → **informational** product detail
page. **No prices, no cart, no checkout, no ordering, and no B2B/inquiry flow** — the catalog
simply showcases the range Aalam carries, to reinforce credibility. Fully bilingual.

**Data model (Prisma):**

```
Category   { id, slug, name_en, name_ar, order }
Partner    { id, name, logo, url, description_en, description_ar }
Product    { id, slug, sku, name_en, name_ar,
             description_en, description_ar,
             categoryId, partnerId?, images[], attributes(JSON),
             isActive, createdAt, updatedAt }
AdminUser  { id, email, passwordHash, role }
```

## 5. Admin portal (`/admin`, authenticated)

- **Dashboard** — product counts by category, recent changes.
- **Single-item CRUD** — bilingual form (EN/AR), image upload, live preview, activate/deactivate.
- **Bulk Excel import**:
  1. Drag-drop / upload `.xlsx`.
  2. **Column-mapping step** (map sheet columns → product fields; template download provided).
  3. **Validation + dry-run preview** — "12 new · 3 updated · 2 errors" with per-row errors, *before* any write.
  4. Commit (upsert by SKU) with a summary + undo/rollback of the last import.
- **Bulk Excel export** — download the full catalog (or a filtered/selected subset) as a
  formatted `.xlsx`, matching the import template so exports round-trip cleanly.
- **Bulk edit/remove** — multi-select rows → activate/deactivate/delete/reassign category.

> A **downloadable .xlsx template** with the exact columns and an example row removes all
> guesswork for staff and keeps imports clean.

## 6. Cross-cutting

- **Publicity/SEO (priority):** SSR/ISR, per-locale metadata, OpenGraph/Twitter cards,
  bilingual `sitemap.xml` + `hreflang`, JSON-LD (`Organization` / `LocalBusiness` with the
  Rabieh address & hours), links to Google Business Profile and social accounts.
- **Contact-first:** sticky WhatsApp click-to-chat and a clear phone/email CTA on every
  page — the primary conversion goal is "get contacted."
- **Accessibility:** WCAG AA. Follow the contrast rules in the brand guide (blue-600 for
  links, dark text on lime, never lime text). A global reduced-motion toggle disables all
  animations.
- **Performance:** lazy-load WebGL backgrounds, ≤1 heavy effect per page, `next/image`,
  route-level code splitting, video preloaded with a lightweight poster.

## 7. Deployment

Containerized Next.js (`output: 'standalone'`) → **Cloud Run**; **Cloud SQL** (Postgres);
**Cloud Storage** for media; brand domain + managed SSL. Vercel is a valid zero-config
alternative if GCP ops overhead isn't wanted.

## 8. Phased roadmap

1. Scaffold Next.js + Tailwind (tokens wired) + next-intl (EN/AR/RTL) + Prisma/Postgres.
2. Build public pages (Home, About, Partners, Contact) with React Bits + placeholder content.
3. Integrate the 5s hero video (intro → settle) once the clip arrives.
4. Product catalog (public grid + detail + "contact about this").
5. Admin auth + single-item CRUD.
6. Excel bulk import (mapping + dry-run) & export.
7. Real content, SEO/JSON-LD, WhatsApp, deploy to Cloud Run.

## 9. Creative ideas (carried forward)

- **Self-drawing logo swoosh** as the hero settles (SVG path animation).
- **Animated supply-chain strip** — warehouse → pharmacy — showing distribution reliability.
- **Interactive Jordan coverage map** on Contact.
- **WhatsApp click-to-chat** everywhere (high-conversion for B2B in Jordan).
- **"Download our catalog"** button that reuses the admin's Excel/PDF export.

## 10. Open items — needed before/at build

- [ ] The **5-second animated-logo video** (source file; ideally with alpha or on white).
- [ ] Original **vector logo** (SVG/AI) + white monochrome — into `brand/logo/`.
- [ ] A **sample product list in Excel** (real columns) to finalize the import template & schema.
- [ ] The **WhatsApp / phone number** and official **email** for contact routing.
- [ ] Confirm hosting target: **Cloud Run** (GCP) vs **Vercel**.
- [ ] Verify company details in [`COMPANY_PROFILE.md`](./COMPANY_PROFILE.md).

## 11. Licensing note

React Bits is **MIT + Commons Clause** — free for commercial use inside this website; the
only restriction is that we can't resell the component library itself as a product. Using
the components to build Aalam's site is fully permitted.

---

*Living document — will be refined as assets arrive and details firm up.*
