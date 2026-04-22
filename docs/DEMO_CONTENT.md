# Modulus — Demo Content Recipe

This guide walks through populating a Shopify store to look like the Theme Store preview you'd see for Modulus. Follow it in order on a fresh dev store (or an unpublished draft theme) and the site will look like a production Modulus build by the end.

Budget roughly **2–4 hours** end-to-end, mostly image curation and copywriting.

> **Why this isn't automated:** Products, collections, articles, pages, and menus all live in Shopify's database — not in the theme code. No theme file can create a product. The theme references them at render time, so a fresh store with no content shows empty sections. Run this recipe once on your submission dev store and take screenshots for the Theme Store listing.

---

## Step 1 — Theme settings

Open **Online Store → Themes → Customize**.

### Theme settings → Presets
Pick one: **Modulus Editorial** (light, airy, portrait product cards) or **Modulus Industrial** (dark, square cards, vendor-forward).

### Theme settings → Brand
- **Logo**: upload a 200×60 PNG (or SVG). Monochrome logos read best against the transparent-over-hero header.
- **Favicon**: upload a 64×64 PNG.
- **Default social share image**: 1200×630 JPG/PNG for OG cards.
- **Public email / phone / address**: optional, pulled into the footer + contact page.

### Theme settings → Social media
Fill in whichever apply: Instagram, X, Facebook, TikTok, YouTube, Pinterest, LinkedIn, Threads.

### Theme settings → Typography
Chakra Petch / Manrope / Inter are the Modulus defaults. Swap to your brand fonts if you have them via the font picker.

### Theme settings → Colors
Modulus ships 5 schemes (scheme-1 through scheme-5). The preset set sensible defaults; adjust per-scheme if your brand needs a specific hex.

### Theme settings → Cart behavior
- Cart type: **Slide-in drawer** (default) or Cart page.
- Show cart note field: on.
- **Show free-shipping progress bar**: on if you offer free shipping over some threshold.
- Free shipping threshold: set to your actual threshold (e.g. `100`).

---

## Step 2 — Upload images

You'll need roughly:

| Use | Quantity | Size |
|---|---|---|
| Hero background | 1–2 | 2400×1600 JPG |
| Product photography | 18–30 | 1200×1500 JPG, 4:5 portrait |
| Collection hero / banner | 2–3 | 1800×1000 JPG |
| Editorial (narrative, split, feature-row) | 3–5 | 1600×2000 JPG |
| Partner logos | 6–8 | 200×60 PNG, monochrome |
| Blog article hero | 3–4 | 1600×900 JPG |
| About page imagery | 2–3 | 1600×1200 JPG |
| Testimonial author avatars | 3 | 400×400 JPG (square) |

**Sources (royalty-free):**
- [unsplash.com](https://unsplash.com) — landscape / lifestyle / industrial
- [pexels.com](https://pexels.com) — similar
- Your own product photography — the more bespoke, the stronger the demo

Bulk upload via **Content → Files** in the Shopify admin. You don't need to name them carefully — they're linked by URL from the editor.

---

## Step 3 — Products

Create 18–24 products. Shopify admin → **Products → Add product**. For each:

- **Title** — one of the samples below (or your own)
- **Description** — 2–3 paragraphs, plus a bulleted feature list
- **Media** — 2–4 images per product, the first becomes the featured image
- **Price** — pick prices that produce realistic totals (e.g. $45, $120, $280, not round tens)
- **Compare-at price** (optional) — for 2–3 products, so the Sale badge appears
- **Type / Vendor** — populate both, they render on cards and product pages
- **Collections** — assign after you create collections in step 4
- **Tags** — 2–4 per product (e.g. `steel`, `desk`, `minimal`)
- **Variants** — for 3–4 products, add a **Color** option and a **Size** option so swatches render and the variant picker shows
- **SEO preview** — custom title + description per product

### Sample product titles for the Modulus aesthetic

Tools, objects, apparel, home goods — pick a lane and stick to it. Consistency matters more than variety for Theme Store demos.

```
Counterweight Desk Lamp
Field Notebook, A6
Industrial Shelf Bracket, pair
Cotton Canvas Apron
Graphite Pencil, pack of 12
Linen Pillow Cover, 20"
Carbon Steel Paring Knife
Ceramic Water Carafe
Oiled Oak Cutting Board
Modular Storage Crate
Brass Wall Hook, pair
Wool Felt Coaster, set of 4
Workshop Glove, leather
Solid Brass Door Pull
Enamel Mug, 12 oz
Jute Floor Runner
Beeswax Candle, pillar
Tin Storage Box, medium
Hand Broom with Dustpan
Cast Iron Trivet
Selvedge Denim Apron
Rolled Steel Shelf, 36"
```

Descriptions should be 2–3 sentences of product-specific narrative + a bulleted spec list (materials, dimensions, care). Modulus's aesthetic rewards restraint — don't over-describe.

### Sample product description template

```
A considered piece for the everyday. [One sentence about craft / materials.] 
[One sentence about intended use or feel.]

- Materials: [e.g. solid oak, hand-finished]
- Dimensions: [W × H × D]
- Weight: [amount]
- Care: [e.g. wipe clean with a damp cloth]
- Made in [country]
```

---

## Step 4 — Collections

Create 4–6 collections. **Products → Collections → Create collection**.

Suggested structure (adjust to your catalogue):

| Collection | Type | Conditions (if smart) |
|---|---|---|
| All products | Smart | `Product price > $0` |
| New arrivals | Smart | Tag is `new` OR `Product created in the last 30 days` |
| Best sellers | Manual | Pick your 6–8 best-looking products |
| Desk | Smart | Tag is `desk` |
| Kitchen | Smart | Tag is `kitchen` |
| Workshop | Smart | Tag is `workshop` |

For each collection:
- **Image** — assign a feature image (1800×1000 lifestyle shot). Populates the `modulus-collection-hero`.
- **Description** — 1–2 sentences. Populates the collection hero's description (unless the section-level override is set).
- **SEO preview** — custom title + description.

After collections are created, go back to each product and assign it to the right collections under **Product organization → Collections**.

---

## Step 5 — Pages

Shopify admin → **Online Store → Pages → Add page**.

Modulus ships three pre-filled page templates you can just assign:

| Template | Assign in admin as | Pre-filled with |
|---|---|---|
| `page.about` | About page template | `modulus-page` + `modulus-narrative` + `modulus-stats` + `modulus-team` placeholder sections |
| `page.faq` | FAQ page template | `modulus-page` + `modulus-faq` with ~6 Q&As ready to edit |
| `page.shipping` | Shipping / Policies template | `modulus-page` renders the merchant-authored policy text |

To use: create the Page in admin, then in the theme editor's template picker for that page, switch from "Default page" to one of the alternate templates above.

### Pages you should create

| Page | URL handle | Content |
|---|---|---|
| About | `/pages/about` | Company story, philosophy, team |
| FAQ | `/pages/faq` | Shopping, shipping, returns, products |
| Shipping & returns | `/pages/shipping` | Rates, zones, lead times, return window |
| Privacy policy | `/pages/privacy-policy` | Shopify provides a generator |
| Terms of service | `/pages/terms-of-service` | Shopify provides a generator |
| Contact | `/pages/contact` | Assign the existing `page.contact` template |

### Sample About page content

```
At [Brand Name] we design everyday tools to outlast the trends they sit against. 
Every piece leaves our bench only when it meets three tests: does the material 
reward use, does the function read at a glance, and does the form still hold 
after a decade of looking at it.

Our studio is a 60-square-metre bench in [City], bordered by a hardware store 
on one side and a fish market on the other — a location we chose for its 
proximity to noise, not its charm.
```

### Sample FAQ Q&As

```
What's your shipping window?
We ship within 2 business days of order confirmation. Domestic orders arrive 
in 3–5 days; international in 7–14.

What's your return policy?
30 days from delivery, in original condition. Return shipping is on us for 
domestic orders, at cost for international. We don't accept returns on 
final-sale items.

Do you offer gift wrapping?
Every order ships in a recycled kraft box with a twine tie, suitable for 
gifting as-is. We don't offer separate gift wrapping.

Are your products dishwasher safe?
Check the product page's care section — most are not, to extend their life. 
Hand-wash the wood, ceramic, and brass items; machine-wash the textiles.

Do you wholesale?
We do. Email wholesale@[brand].com with your store details and we'll send 
our trade sheet.

Where are you based?
[City, Country]. See our About page.
```

---

## Step 6 — Blog articles

Create **2–3 articles** in the default "News" blog. Shopify admin → **Online Store → Blog posts**.

Each article needs:
- **Title** — editorial, not clickbait
- **Hero image** — 1600×900 JPG
- **Excerpt** — 1 sentence (shown on the blog listing page)
- **Body** — 600–1200 words with H2 sub-heads, 1–2 inline images, and at least one blockquote
- **Author** — fill in
- **Tags** — 1–2 per article
- **Featured image** — same as hero

### Sample article titles

- `How we chose the brass` — story about a material sourcing decision
- `Field notes from a Tuesday` — a slice-of-studio piece
- `On quiet design` — opinion / philosophy essay
- `The case for the cheaper knife` — contrarian product thinking

---

## Step 7 — Navigation menus

Shopify admin → **Online Store → Navigation**.

### Main menu (assigned to the header's `Main menu` setting by default)

```
Shop
  ├── All products        → /collections/all
  ├── New arrivals        → /collections/new-arrivals
  ├── Best sellers        → /collections/best-sellers
  ├── Desk                → /collections/desk
  ├── Kitchen             → /collections/kitchen
  └── Workshop            → /collections/workshop
Journal                   → /blogs/news
About                     → /pages/about
Contact                   → /pages/contact
```

### Footer menu (optional — footer uses theme settings for its copy)

```
Shop             → /collections/all
About            → /pages/about
Journal          → /blogs/news
Shipping         → /pages/shipping
Privacy          → /pages/privacy-policy
Terms            → /pages/terms-of-service
Contact          → /pages/contact
```

---

## Step 8 — Homepage composition

The default `index.json` template renders: **hero → logos → narrative → product-cards → testimonials → banner**. After populating products and collections, open the customizer and tune each section:

### Modulus Hero
- Background image: upload your wide hero shot
- Heading: brand-level, not product-specific (e.g. "Objects for the considered everyday")
- Body: 1 sentence max
- CTA label + link: "Shop the collection" → `/collections/all`
- Transparent header: ON (for the overlap effect)

### Modulus Logos
Add 6 partner/press logo blocks. Upload monochrome PNGs (200×60).

### Modulus Narrative
A brand-statement paragraph. Keep it to 2–3 sentences.

### Modulus Product Cards
Source: set to a curated collection (e.g. "Best sellers").

### Modulus Testimonials
Replace the default 3 blocks with real quotes from press, customers, or partners. Add avatars.

### Modulus Banner
Secondary CTA — can point to a specific collection or a story.

---

## Step 9 — Preferences

### Customer accounts
Shopify admin → **Settings → Customer accounts**. Enable classic accounts or new customer accounts (classic gives a richer theme-level experience).

### Localization
Shopify admin → **Settings → Markets**. Enable a secondary market (e.g. EU) to showcase the locale/currency selector in the footer.

### Customer privacy
Shopify admin → **Settings → Customer privacy**. Enable tracking consent so the `Cookie preferences` link in the footer actually opens the consent dialog.

### Search & discovery
Shopify admin → **Apps → Search & discovery → Filters**. Enable a few filter groups (vendor, price, tag, variant option) so the collection filter bar populates.

---

## Step 10 — Preview, screenshot, iterate

Walk every template:

| URL | What to check |
|---|---|
| `/` | Hero, logos, narrative, product-cards, testimonials, banner |
| `/collections/all` | Filter bar, sort, grid, pagination |
| `/products/:any` | Hero, gallery, variant picker, express checkout, recommendations, feature-row, specs, banner |
| `/cart` | Full cart page with line items, note, summary |
| Cart drawer | Open via header cart icon |
| `/search?q=desk` | Type tabs, results grouped by type |
| `/blogs/news` | Featured article + grid |
| `/blogs/news/:any` | Article detail with comments, share, prev/next |
| `/pages/about` | Full About layout |
| `/pages/faq` | Accordion |
| `/account/login` | Sign in form |
| `/account/register` | Create account |
| `/404` | Not found |
| `/password` | Pre-launch landing (only when password protected) |

For the Theme Store submission, take **at least 10 desktop screenshots + 4 mobile screenshots** at 1920×1080 and 375×812 respectively. The 1200×900 hero shot goes in `assets/theme-preview.png`.

---

## Shortcut — import demo content via CSV

Shopify admin supports CSV import for products, customers, and blog posts. This is faster than hand-entering if you already have content in a spreadsheet.

- **Products**: Shopify admin → Products → Import → download the template CSV
- **Pages / articles**: no native CSV import; use the admin UI or the Shopify Admin API
- **Menus**: built via the UI only

For CSV product imports, the image column accepts public URLs — bulk-upload your images first, copy their CDN URLs into the CSV, then import.

---

## Checklist before submitting to the Theme Store

- [ ] Hero has a real (non-placeholder) background image
- [ ] Logo + favicon set
- [ ] ≥18 products with ≥2 images each
- [ ] ≥4 collections
- [ ] All 6 core pages (About, FAQ, Shipping, Privacy, Terms, Contact) filled
- [ ] ≥2 blog articles with hero images
- [ ] Main menu + footer menu wired
- [ ] Customer accounts enabled
- [ ] A second market enabled (so locale selector renders)
- [ ] `assets/theme-preview.png` added (1200×900 hero screenshot)
- [ ] `listings/default.json` reviewed against Shopify's current category/industry slug vocabulary
- [ ] `shopify theme check` returns 0 offenses
- [ ] Lighthouse mobile performance ≥ 60 on homepage, product, collection
- [ ] axe-core reports no critical issues
