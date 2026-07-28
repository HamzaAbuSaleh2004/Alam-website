# Aalam Drug Store — Website Blueprint

**مستودع العلم للأدوية**

Foundational strategy and content structure for the official website. Aalam
currently has a minimal digital footprint, so this blueprint both organizes the
available information and frames the full site architecture.

---

## 1. Goals

- Establish a credible, professional digital presence in the Jordanian pharmaceutical
  market.
- Communicate reliability, regulatory compliance, and the breadth of the product range.
- Provide an easy contact path for pharmacies, clinics, and partners.
- Lay groundwork for a future inventory/client portal (the `System/` app).

## 2. Site architecture (sitemap)

| Page | Purpose | Key content |
|---|---|---|
| **Home** | First impression | Hero (reliability in the Jordanian market), key services, trust signals, CTA to contact |
| **About Us** | Credibility | History, mission, vision, MoH/JFDA licensing & compliance |
| **Products & Services** | Range | Categories: pharmaceuticals, medical supplies, cosmetics |
| **Our Partners** | Trust | Logos + short descriptions of local/international brands represented |
| **Contact Us** | Conversion | Google Maps (Rabieh), contact form, phone, email, hours |

Bilingual from day one: **English + Arabic (RTL)**. Language toggle in the header;
Arabic routes render with `dir="rtl"` `lang="ar"`.

## 3. Content-gathering requirements (action items)

Request these from Aalam management (tracked in
[`COMPANY_PROFILE.md`](./COMPANY_PROFILE.md)):

- [ ] High-resolution / **vector logo** (SVG, AI, or high-res PNG) + white monochrome version
- [ ] Confirmed brand colors & typography preferences (validate against
      [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md))
- [ ] Product portfolio & exclusive distributorships
- [ ] Company history: establishment year, founders' vision, milestones
- [ ] Professional photography (interior, delivery fleet, team)
- [ ] Official domain email (e.g. `info@…`) for contact-form routing
- [ ] MoH / JFDA license details to display

## 4. Recommended technical stack

> **Superseded:** the finalized stack now lives in [`WEBSITE_PLAN.md`](./WEBSITE_PLAN.md).
> After scoping, we chose an **all-in-one Next.js full-stack app** (no separate FastAPI
> backend, no CMS) with Excel-only bulk import. The table below is kept for historical
> context only.

| Layer | Choice | Why |
|---|---|---|
| Frontend | **Next.js** (React) | SEO/SSR, i18n routing for EN/AR, image optimization |
| Backend | **FastAPI** (Python) | Fast, typed, ready for the future client/inventory API |
| Database | **PostgreSQL** | Relational; supports future inventory/client portal |
| Hosting | **Google Cloud Platform** (Cloud Run) | Serverless containers, scales to zero |
| CMS | **Sanity** or **Strapi** | Non-technical staff can edit products & partners |

> These are recommendations, not commitments — confirm before scaffolding. The
> `Website/` and `System/` folders in this repo are reserved for the public site and
> the internal system respectively; both consume the shared `brand/` tokens.

## 5. Suggested first milestones

1. Confirm brand assets (logo vector, colors) → finalize `brand/` tokens.
2. Gather core content (About, Products, Partners, Contact) in EN + AR.
3. Scaffold `Website/` (Next.js + i18n) wired to `brand/tokens.css`.
4. Build the 5 pages with placeholder content, then swap in real copy/photos.
5. Set up the contact form → official email; add Google Maps embed.
6. Deploy to Cloud Run; configure the brand domain and SSL.

---

*Living document — revise as the project scope firms up.*
