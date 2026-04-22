# Modulus Theme

An industrial-editorial Shopify theme for precision manufacturers, design-led brands, and B2B catalogues. Built on [Shopify Skeleton Theme](https://github.com/Shopify/skeleton-theme) (MIT).

> Pre-v1. In active development. Not yet listed on the Shopify Theme Store.

## Philosophy

Modulus merges industrial precision with Scandinavian restraint. Every element pulls its weight. Sections are composable, typography is opinionated, colour is scheme-based, and motion is purposeful.

## Design system

- **Typography:** Chakra Petch (headings, by default) · Manrope (body) · Inter (labels). Each is merchant-configurable via admin → Theme settings → Typography.
- **Colours:** 5 preset schemes (Light, Off-white, Sage, Pale blue, Dark) — each section picks its own. Every scheme is independently editable in admin.
- **Motion:** subtle scroll-reveals; respects `prefers-reduced-motion`.
- **Components:** ghost buttons, section labels (ticker-style), inner containers.

## Project structure

```
assets/        CSS, JS, images, icons
blocks/        Reusable, nestable UI blocks
config/        Global settings schema & data
docs/          Merchant guide, customizations log
layout/        Page wrappers (theme.liquid, password.liquid)
listings/      Shopify Theme Store listing metadata
locales/       i18n translation files
sections/      Full-width modular page sections
snippets/      Reusable Liquid fragments
templates/     JSON templates composing sections into pages
```

## Before publishing to the Theme Store

1. Add `assets/theme-preview.png` (1200×900 minimum, JPG or PNG). This is the hero image shown on the theme's Theme Store detail page.
2. Verify `listings/default.json` — the current values are illustrative; confirm `categories` and `industries` against Shopify's current slug vocabulary before submission.
3. Set `theme_documentation_url` + `theme_support_url` in `config/settings_schema.json` to the real URLs you want merchants to hit.
4. Populate demo content in the connected dev store — products, collections, blog posts, pages, menus. The full walkthrough is in [`docs/DEMO_CONTENT.md`](docs/DEMO_CONTENT.md). Shopify takes a snapshot for the Theme Store preview after submission.
5. Run `shopify theme check` locally — the bar is zero errors + zero warnings.

## Pre-built page templates

Beyond the standard templates, Modulus ships ready-made layouts merchants can assign directly to pages they create in the Shopify admin:

- `page.about` — narrative + philosophy + stats + values + banner
- `page.faq` — 6-item Q&A accordion, pre-filled with edit-in-place defaults
- `page.shipping` — shipping / returns policy page with expandable sub-answers
- `page.contact` — contact form paired with the standard page section

## Development

```bash
# Authenticate once
shopify auth login

# Push to a dev store as an unpublished preview theme
shopify theme push --unpublished --theme "Modulus (dev)" --store YOUR-STORE.myshopify.com

# Or run live dev mode with hot reload
shopify theme dev --store YOUR-STORE.myshopify.com
```

## License

MIT. See `LICENSE.md`.

"Modulus" as a theme name is reserved for this project. The codebase is freely usable under MIT; the brand name + published listing is not.

## Roadmap

- **Phase 1** ✅ Design token system, colour schemes, typography.
- **Phase 2** — generic icon set.
- **Phase 3** — 23 core sections (hero, footer, product hero, collection grid, specs, testimonials, etc.).
- **Phase 4** — snippets + JS (filter bar, reveal, drawer).
- **Phase 5** — Skeleton scaffolding (cart, account, blog, search).
- **Phase 6** — header, navigation, mobile drawer.
- **Phase 7** — full i18n across sections + locales.
- **Phase 8** — theme editor UX polish + merchant settings.
- **Phase 9** — demo data + presets for Theme Store preview.
- **Phase 10** — Theme Store requirements pass (WCAG, Lighthouse, theme-check).
- **Phase 11** — Theme Store submission (pending Shopify reopening submissions).
