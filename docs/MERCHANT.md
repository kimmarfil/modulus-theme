# Modulus — Merchant Guide

Welcome to Modulus, an editorial-industrial Shopify theme built on Shopify Skeleton. This guide walks through what's included, how to configure it, and how to compose pages in the theme editor.

---

## Quick-start checklist

After installing Modulus on a store, work through this list in order:

1. **Choose a preset** — open *Online Store → Themes → Customize → Theme settings → Presets* and pick **Modulus Editorial** (light) or **Modulus Industrial** (dark). Each is a complete snapshot of colours, spacing, cart behaviour, and product-card defaults.
2. **Upload your logo** — *Theme settings → Brand → Logo*. Also set *Favicon* and *Default social share image* while you're there.
3. **Wire up your social accounts** — *Theme settings → Social media*. Populated here once, these URLs are read by the password page, footer, and sharing meta tags.
4. **Check typography** — *Theme settings → Typography*. Modulus ships with Chakra Petch (headings), Manrope (body), Inter (labels). All are replaceable via the Shopify font picker.
5. **Build your header** — *Theme customizer → Header group*. The group contains three sections in order: **Announcement bar** (disabled by default), **Header**, **Cart drawer**. Enable the announcement bar if you want a marquee above the header.
6. **Compose your homepage** — *Templates → Default homepage*. The out-of-the-box arrangement is: Hero → Logos → Narrative → Product cards → Testimonials → Banner. Remove, reorder, or add any of the Modulus body sections.
7. **Set up a contact page** — create a page in *Pages* and assign the **Contact** template (`page.contact`). The template pairs the page-content section with the contact-form section.
8. **Ship it** — preview on desktop and mobile, then publish.

---

## Section library

Modulus ships with 28+ custom sections grouped by intent:

### Homepage & marketing

- **Modulus Hero** — full-viewport hero. Background image/video, overlay, headline, body, CTA. Includes a "transparent header" toggle that makes the site header render transparent over the hero until the user scrolls.
- **Modulus Logos** — partner / trusted-by logo grid. Monochrome or colour, 3–6 columns, optional outline.
- **Modulus Banner** — full-width promo banner with headline, body, and CTA.
- **Modulus Testimonials** — 3 layouts (grid, vertical stack, single feature quote). Avatar + author + role per block.
- **Modulus Slider** — horizontal scroll-snap carousel of editorial cards. Configurable card width, aspect ratio, arrow controls.
- **Modulus Process** — numbered steps (horizontal with connector line, or vertical timeline). Per-step icon *or* auto-number.
- **Modulus Capabilities** — service / capability cards with icons, tags, and links. Three card styles: bordered, divided, plain.
- **Modulus FAQ** — native `<details>` accordion with split or stacked layout. Optional exclusive-open mode.

### Editorial body

- **Modulus About** · **Narrative** · **Split** · **Stats** · **Stats (inline)** · **Values** · **Benefits** — a set of editorial layouts for long-form pages.

### Product pages

- **Modulus Product Hero** — main product section with gallery, variant picker, quantity, and add-to-cart.
- **Modulus Product Cards** — manually-curated or collection-driven featured products.
- **Modulus Specs** — technical specification tables / attribute grids.
- **Modulus Feature Row** — alternating image+text storytelling rows.

### Commerce

- **Modulus Cart** — full cart page with qty stepper, note field, discounts, totals.
- **Modulus Cart drawer** — slide-in cart panel. Intercepts any add-to-cart submission and opens with live updates.
- **Modulus Collection Hero** + **Collection Grid** — collection page with hero + filter bar + grid + async filter swaps via Shopify's Section Rendering API.
- **Modulus Search** — search page with type tabs (products / articles / pages) and pagination.

### Content

- **Modulus Blog** — listing with featured-first article on page 1.
- **Modulus Article** — single article detail: breadcrumb, hero image (normal or full-bleed), body, tags, share, comments, prev/next nav.
- **Modulus Page** — richtext page renderer with editorial typography.
- **Modulus Contact** — two-column form with optional contact-details panel.

### Header / footer / static

- **Modulus Header** — logo + nav + search/account/cart icons + mobile hamburger drawer.
- **Modulus Footer** — multi-column link groups, newsletter, social, payment icons, legal strip.
- **Modulus Announcement bar** — auto-rotating messages above the header.
- **Modulus 404** · **Modulus Password** — styled landings for missing pages and pre-launch stores.

### Customer accounts (Theme Store required)

- **Modulus Login / Register / Reset password / Activate account** — auth flows.
- **Modulus Account** — overview with sidebar nav + paginated order history.
- **Modulus Addresses** — inline add / edit / delete with country-province selector.
- **Modulus Order** — order detail with line items, fulfillments, totals, addresses.

---

## Theme-level settings

Every setting lives under *Customize → Theme settings*.

| Group | Highlights |
|---|---|
| **Brand** | Logo, favicon, social share image, public email / phone / address. |
| **Social media** | Instagram, X, Facebook, TikTok, YouTube, Pinterest, LinkedIn, Threads, Snapchat. |
| **Typography** | Heading, body, and label fonts (each selectable via Shopify's font picker). |
| **Layout** | Max page width (narrow / standard / wide), page margin, default section spacing (tight / normal / loose). |
| **Colors** | 5 configurable colour schemes assignable per-section. |
| **Product cards** | Show vendor, sale / sold-out badges, image aspect ratio. |
| **Cart behavior** | Drawer vs. page, note field toggle. |
| **Currency & checkout** | Payment icons in footer, currency code with prices. |
| **Presets** | Modulus Editorial (light, loose, portrait cards) · Modulus Industrial (dark, square cards, vendor visible). |

---

## Color schemes

Modulus exposes five native Shopify colour schemes. Assign any scheme to any section via *Section settings → Colors → Color scheme*. The schemes are:

- **scheme-1** — primary / light
- **scheme-2** — secondary / warm off-white
- **scheme-3** — accent (sage)
- **scheme-4** — accent (blue)
- **scheme-5** — inverse / dark

Per-scheme colours are editable under *Theme settings → Colors*. The Modulus Industrial preset flips scheme-1 to dark while keeping the same structure — sections don't need to change.

---

## Translations

Modulus ships English (`locales/en.default.json`) and stub files for French, German, Spanish, Italian, Dutch, Japanese, Brazilian Portuguese, Simplified Chinese, and Traditional Chinese. Stub files start as copies of English; community or machine translations can replace strings in each file independently.

---

## Customization log

If you or a developer edits any native theme file (rather than adding new custom sections), record the edit in `CUSTOMIZATIONS.md` at the repo root. This survives theme updates — any edits to shipped files otherwise get overwritten when Modulus publishes a new version.

---

## Support

- Docs & source: [kimmarfil/modulus-theme](https://github.com/kimmarfil/modulus-theme)
- Issues: [github.com/kimmarfil/modulus-theme/issues](https://github.com/kimmarfil/modulus-theme/issues)
