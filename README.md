# House of Thiraa Homepage

# Lovable Prompt — House of Thiraa Homepage

Copy everything below into Lovable as your initial prompt. Attach the logo and plumeria artwork files when it asks for images (noted inline below).

---

Build a homepage for **House of Thiraa**, a women's everyday ethnic clothing brand (kurtas, kurta sets, co-ords) based in South India, selling both online and through physical stores. The brand feels warm, heritage-inspired, and hand-crafted — not a mass-market fast-fashion look. Use React + Tailwind CSS.

## Build constraints (important)

- Keep the stack minimal: plain React + Tailwind CSS (standard Vite + React setup). No backend, no database, no auth, no CMS, no payment integration, no Supabase — this is a static frontend/UI build only. Those can be added later in a separate pass.
- Do not add extra libraries unless essential (no component kits, animation libraries, or state-management libraries needed for a homepage like this — plain React state is enough for things like the carousel and mobile menu).
- Keep components simple and readable (plain functional components, minimal abstraction) — this project will be exported and continued in a different code editor afterward, so prioritize clean, conventional file structure over cleverness.
- Build the full homepage in as few generation passes as possible — plan the whole page structure up front in one prompt response rather than building section-by-section across many follow-up messages, since this is on a free-trial token budget. Avoid unnecessary regenerations of sections that are already working; make small, targeted edits instead of full rebuilds when iterating.

## Design system

**Colors**
- Cream background: `#F6F0E6`
- Paper/card background: `#FBF8F2`
- Primary maroon (brand color, from logo): `#7A2333`
- Deep maroon (hover/dark accents): `#551723`
- Gold accent (jewelry-tone, sparing use): `#AD8A55`
- Ink (body text): `#2A211F`
- Soft ink (secondary text): `#7A6E68`
- Hairline borders: `#E3D9C8`

**Typography**
- Headings: `Fraunces` (Google Font, serif, weights 300–600, include italic) — elegant, editorial, not a generic serif.
- Body/UI/nav: `Work Sans` (Google Font, weights 300–600).
- Nav links and buttons: uppercase, letter-spacing ~0.08em, small (12–13px).
- Headings: no letter-spacing, sentence case (not all-caps), sizes 28–46px depending on section.

**General aesthetic rules**
- Generous whitespace, editorial/boutique feel, not a dense e-commerce grid.
- Avoid harsh drop shadows; use thin hairline borders and soft tonal blocks instead.
- Avoid rounded "bubbly" buttons — use sharp/minimal corners (0–2px radius), uppercase small-caps labels, thin underline hover states rather than filled hover backgrounds where appropriate.
- Use a thin decorative divider motif sparingly (not on every section) rather than eyebrow labels on every heading.

## Global elements

**Announcement bar**: thin maroon-deep strip, centered white text, small font: "Complimentary shipping on orders above ₹2,999"

**Header** (sticky, cream/paper background, bottom hairline border):
- Left: logo lockup — [ATTACH: woman-silhouette.png] placed beside two-line wordmark text "HOUSE OF" (small tracked caps, maroon) / "Thiraa" (large serif, maroon). Logo and text sit side by side horizontally, NOT stacked.
- Right: icon row — search, store-locator (map pin), account, wishlist (heart), bag — simple line icons, no filled backgrounds.
- No hamburger/sidebar menu.

**Category nav bar** (below header, thin hairline border, centered links, uppercase small text):
New Arrivals · Kurtas · Kurta Sets · Co-ords · Dresses · Bottoms · Dupattas & Stoles · Sale (Sale link in maroon, rest in ink color)

## Page sections, in order

1. **Hero carousel** — full-width image slide (~560px tall) with left-aligned overlay text box: small maroon kicker label ("Festive Edit — New In"), large serif headline ("Everyday elegance, stitched with heritage"), short subtext, one primary maroon button ("Shop New Arrivals"). Include carousel dot indicators at the bottom center, clickable to switch slides (3 slides).

2. **USP strip** — full-width maroon band, 4 items in a row with small line icons + short text: Free shipping over ₹2,999 · Easy 15-day returns · Handcrafted details · Cash on delivery.

3. **Shop by Category** — asymmetric grid (not uniform cards): one large tall tile + several smaller tiles, each with a background image and a bottom-left overlay label in serif type over a dark gradient scrim. Categories: Kurtas, Kurta Sets, Co-ord Sets, Dupattas & Stoles, Bottoms.

4. **Bestsellers** — horizontal scrolling product row (scroll-snap), each card: image, optional small "New" or discount tag, product name, price (with strikethrough original price where discounted).

5. **Our Craft** (brand story, editorial split layout — image left, text right on desktop, stacked on mobile): heading "Made for the everyday, rooted in tradition", two short paragraphs about small-batch production, natural fabrics, and craft traditions, plus a ghost-outline button "Our Story".

6. **Testimonials** — 3-column layout, each with a top hairline border, an italic serif pull-quote, and a name + city credit below in small uppercase text.

7. **Instagram section** — centered heading "Follow along" + handle "@houseofthiraa on Instagram", 6-image grid below (2 rows x 3 or 1 row x 6 on desktop, 3 columns on mobile).

8. **Store locator** ("Visit us in person") — 4-column grid of store cards (storefront image, city name, address line, "Visit Store" text link with underline). Cities: Coimbatore, Chennai, Bengaluru, Kochi.

9. **Newsletter strip** — full-width maroon band, centered: heading "Get 10% off your first order", short subtext, inline email input + "Subscribe" button (underline style, transparent background, light-colored text/border on maroon).

10. **Footer**:
    - Top area: light cream background fading into a soft blush/pink tone toward the bottom.
    - 4-column layout: (1) Brand column with small circular logo mark [ATTACH: full-logo.png] + short description text, (2) "About Thiraa" links (About Us, Our Stores), (3) "Policies" links (Privacy Policy, Shipping Policy, Cancellation Policy, Return & Exchange Policy), (4) "Contact Us" (phone, email) + "Find Us On" social icons (Instagram, Facebook, Pinterest) as small filled maroon circles.
    - Column headings in bold maroon uppercase, links in soft ink-gray.
    - Below the columns: a decorative horizontal band using a hand-drawn maroon-line floral illustration of plumeria flowers [ATTACH: plumeria-maroon-band.png], tiled/repeated horizontally along the full width, roughly 200px tall, sitting at the very bottom of the footer as a decorative border (background-image, repeat-x, background-size auto 200px).
    - A floating WhatsApp chat button, fixed to the bottom-right corner of the viewport (circular, green, white icon), visible on all pages.

## Responsive behavior
- Collapse the category nav to a horizontal scroll on mobile (no hidden hamburger — keep it visible and scrollable).
- Stack the "Our Craft" section vertically on mobile.
- Store locator and testimonials collapse to 1–2 columns on mobile.
- Footer columns stack 2x2 on mobile.
- Reduce the plumeria footer band height on mobile (~130px).

## Content notes
- Use realistic placeholder kurta/ethnic-wear product names and INR pricing.
- All imagery can be placeholder/stock for now — structure and styling matter more than final photography at this stage.

---

### After the free trial

Once you've exported this from Lovable, the code should already be a standard Vite + React + Tailwind project (no Lovable-specific lock-in), which drops straight into Antigravity or any other editor for you to keep building on.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cecc71d5-2535-4d37-930f-c9a58dd9209e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
