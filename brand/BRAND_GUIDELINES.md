# Aalam Drug Store — Brand Guidelines

**مستودع العلم للأدوية**
Aalam Drug Store · Pharmaceutical Distribution · Amman, Jordan

> **Version:** 1.0 (draft) — 2026-07-24
> **Scope:** Visual identity for all digital, print, and development platforms. These
> tokens are the single source of truth for the `Website/` and `System/` apps in this
> repository. Consume them via [`tokens.css`](./tokens.css) or [`tokens.json`](./tokens.json).

---

## 1. Brand at a glance

| | |
|---|---|
| **Name (EN)** | Aalam Drug Store |
| **Name (AR)** | مستودع العلم للأدوية |
| **Industry** | Pharmaceutical distribution / drug store |
| **Personality** | Clean, clinical, trustworthy, modern, approachable |
| **Primary market** | Jordanian pharmacies, clinics, and healthcare providers |

The identity is built around two signals: **medical trust** (the cyan-blue) and
**vitality / health** (the lime-green), set on generous white space to read as sterile
and professional.

---

## 2. Color palette

### 2.1 Core colors (from the logo)

These four values are the brand's foundation. The two brand hues were sampled from the
official logo; confirm the exact values against the vector source when it is available
(see [action items](../docs/WEBSITE_BLUEPRINT.md#3-content-gathering-requirements)).

| Role | Name | HEX | RGB | Notes |
|---|---|---|---|---|
| Primary | Medical Cyan | `#008DD2` | `0, 141, 210` | Headers, primary CTAs, active states |
| Secondary | Vibrant Lime | `#A5D027` | `165, 208, 39` | Accents, success, category highlights |
| Text | Charcoal | `#2D3748` | `45, 55, 72` | Body copy, paragraphs |
| Surface | Clean White | `#FFFFFF` | `255, 255, 255` | Primary background |

### 2.2 Extended scales (derived)

Real interfaces need hover, active, disabled, and background variants. The scales below
are **derived by lightness stepping** from the two base colors — they are not sampled
from the logo, so treat them as a starting palette and tune as the UI matures. Steps
`500` are the exact brand colors above.

**Primary (Medical Cyan)**

| Step | HEX | Typical use |
|---|---|---|
| 50 | `#E6F4FB` | Tinted backgrounds, hover fills |
| 100 | `#CCE8F6` | Subtle surfaces, badges |
| 200 | `#99D1ED` | Borders, dividers |
| 300 | `#66BAE4` | Disabled controls |
| 400 | `#33A3DB` | Secondary hover |
| **500** | **`#008DD2`** | **Brand primary** |
| 600 | `#0071A8` | Accessible link/text on white, button hover |
| 700 | `#00557E` | Pressed/active states |
| 800 | `#003954` | Dark UI accents |
| 900 | `#001C2A` | Deep contrast |

**Secondary (Vibrant Lime)**

| Step | HEX | Typical use |
|---|---|---|
| 50 | `#F6FBE9` | Success backgrounds |
| 100 | `#EDF6D4` | Tinted surfaces |
| 200 | `#DBEDA9` | Borders |
| 300 | `#C9E47E` | Disabled |
| 400 | `#B7DB53` | Hover |
| **500** | **`#A5D027`** | **Brand accent** |
| 600 | `#84A61F` | Button hover |
| 700 | `#637D17` | Accessible green text on white |
| 800 | `#42530F` | Dark accents |
| 900 | `#212A08` | Deep contrast |

**Neutrals (charcoal-based gray scale)**

| Step | HEX | Use |
|---|---|---|
| 0 | `#FFFFFF` | Page background |
| 50 | `#F7FAFC` | Section background |
| 100 | `#EDF2F7` | Cards, wells |
| 200 | `#E2E8F0` | Borders, dividers |
| 300 | `#CBD5E0` | Disabled text/borders |
| 400 | `#A0AEC0` | Placeholder text |
| 500 | `#718096` | Muted text |
| 600 | `#4A5568` | Secondary text |
| 700 | `#2D3748` | **Body text (Charcoal)** |
| 800 | `#1A202C` | Headings |
| 900 | `#171923` | Max contrast |

### 2.3 Semantic colors

| Meaning | HEX | Note |
|---|---|---|
| Success | `#84A61F` | Uses secondary-600 for readable text; lime-500 for icons/fills |
| Warning | `#DD8800` | Amber, distinct from brand hues |
| Error | `#D64545` | Reserved strictly for errors/destructive actions |
| Info | `#0071A8` | Primary-600 |

### 2.4 Accessibility (WCAG 2.1)

Contrast ratios are approximate and **must be re-checked** whenever a color is used for
text. Key results for the core palette:

| Foreground / Background | Ratio | Verdict |
|---|---|---|
| Charcoal `#2D3748` on White | ~12:1 | ✅ Passes AA & AAA (all text) |
| Charcoal on Lime `#A5D027` | ~6.6:1 | ✅ Passes AA (normal text) |
| **Primary `#008DD2` on White** | **~3.7:1** | ⚠️ Large text / UI only — **fails AA for body text** |
| **White on Primary `#008DD2`** | **~3.7:1** | ⚠️ Large text / UI only — button labels are borderline |
| **Lime `#A5D027` on White** | **~1.8:1** | ❌ Never use lime for text on white |

**Rules of thumb:**
- For blue **text or links** on white, use **primary-600 `#0071A8`** (~5.4:1 ✅), not the 500.
- For green **text** on white, use **secondary-700 `#637D17`** (~4.7:1 ✅). Reserve lime-500
  for fills, icons, and large graphic elements only.
- On lime backgrounds, always use **charcoal text**, never white.
- For primary-blue buttons with white labels, prefer a slightly deeper fill (600/700) or
  bump the label to ≥18.66px bold / ≥24px to clear the large-text threshold.

---

## 3. Typography

The **IBM Plex** family is the brand typeface — engineered, legible, and with matched
Latin and Arabic designs for balanced bilingual layouts. Both are open source (SIL OFL).

| Script | Typeface | Use |
|---|---|---|
| Latin | **IBM Plex Sans** | English headings, nav, body |
| Arabic | **IBM Plex Sans Arabic** | Arabic headings, nav, body |
| Mono (optional) | IBM Plex Mono | Codes, SKUs, lot/batch numbers |

### 3.1 Weights

| Role | Weight |
|---|---|
| Headings (H1–H3) | Bold 700 / Semi-Bold 600 |
| Subheadings & buttons | Medium 500 |
| Body | Regular 400 |

### 3.2 Type scale (suggested, `rem` @ 16px base)

| Token | Size | Line height | Use |
|---|---|---|---|
| display | 3.052rem (48.8px) | 1.1 | Hero |
| h1 | 2.441rem (39px) | 1.15 | Page title |
| h2 | 1.953rem (31.25px) | 1.2 | Section |
| h3 | 1.563rem (25px) | 1.25 | Sub-section |
| h4 | 1.25rem (20px) | 1.3 | Card title |
| body-lg | 1.125rem (18px) | 1.6 | Lead paragraph |
| body | 1rem (16px) | 1.6 | Default |
| small | 0.875rem (14px) | 1.5 | Captions, meta |

### 3.3 Loading the fonts

**Google Fonts (quick start):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
```
For production, **self-host** the WOFF2 files (via `@fontsource/ibm-plex-sans` and
`@fontsource/ibm-plex-sans-arabic`) for privacy, performance, and offline builds.

---

## 4. Bilingual & RTL

- Arabic is a **right-to-left** language. Set `dir="rtl"` and `lang="ar"` on Arabic pages/
  regions; use CSS **logical properties** (`margin-inline-start`, `padding-inline-end`,
  `text-align: start`) so a single stylesheet serves both directions.
- Mirror directional UI (arrows, chevrons, progress) in RTL; do **not** mirror the logo,
  brand marks, phone numbers, or Latin/numeric content.
- Keep English and Arabic type visually balanced — IBM Plex Sans Arabic is tuned to sit at
  a similar weight and height to its Latin counterpart at the same point size.

---

## 5. Logo usage

- **Clear space:** Maintain padding on all sides equal to the cap-height of the Arabic word
  **"العلم"** in the mark. Never crowd the logo with text or graphics.
- **Backgrounds:** Full-color logo on **white or very light** backgrounds only. On dark
  backgrounds or photography, use a **solid white (monochrome)** version.
- **Minimum size:** Keep the Arabic and English wordmarks legible; do not render the full
  lockup below ~120px wide on screen.
- **Don't:**
  - ❌ Stretch, compress, or change the aspect ratio.
  - ❌ Recolor the blue or green.
  - ❌ Add drop shadows, bevels, gradients, or 3D effects to the flat mark.
  - ❌ Place the full-color logo on busy or low-contrast backgrounds.

> ⚠️ **Asset gap:** No vector logo is in the repo yet. Request the original **SVG / AI**
> plus high-res PNG and a white monochrome version, and drop them in `brand/logo/`.

---

## 6. Using the tokens in code

- **CSS / any framework:** import [`brand/tokens.css`](./tokens.css) — exposes every color,
  font, size, and spacing value as a CSS custom property (`--color-primary-500`, etc.).
- **JS / TS / build tools (Tailwind, styled-components):** import
  [`brand/tokens.json`](./tokens.json).
- Keep both files in sync. When a value changes, update the JSON, regenerate/edit the CSS,
  and bump the version at the top of this document.

---

*This is a living document. Values marked "derived" or "suggested" are engineering
defaults, not brand law — refine them against the real logo and stakeholder feedback.*
