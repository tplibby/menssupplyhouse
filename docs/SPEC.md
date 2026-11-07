# Men's Supply House: working spec

The original `menssupplyhouse-build-spec.md` is discarded (user, 2026-11-06). This build is the spec.
Update this file when a decision changes.

## Stack
Astro 5 (static) + Tailwind 4 (`@tailwindcss/vite`). Target host: Cloudflare Pages. No repo yet (user's call).

## Design
- Direction: `docs/direction-v3.md` (layout inspired by brigadeoverland.com). Imagery: v4 "modern technical" (`docs/asset-prompts.md`).
- Palette: stone #E4E2DB, paper #EFEDE7, line #CFCCC3, ink #1C1C1A, muted #5F5E58, olive #2E3A2C, brick #B23A2B, night #1F201D.
- Type: Special Gothic Condensed One (display, uppercase), Geist (body).
- Tokens: `src/styles/global.css`.

## Routes (current)
- `/`: split hero (rotating stills, video-ready), category image rail, latest calls, story band
- `/{category}/`: footwear, workwear, edc, tools, gear, barware, books
- `/{category}/{sub}/`: subcategory pages (list in `src/data/site.ts`)
  - footwear: boots, shoes
  - workwear: pants, shirts, jackets
  - edc: knives, flashlights, multi-tools, wallets, watches
  - tools: hand-tools, power-tools, measuring, storage
  - gear, barware, books: none yet
- `/{category}/{slug}/`: review (sample: `/edc/leatherman-wave-plus/`). Review URLs skip the subcategory so they don't break if an item moves.
  The build fails if a review slug matches a subcategory slug in the same category.
- Navigation: desktop category nav opens a dropdown of subcategories on hover/focus. Category and subcategory pages show a row of subcategory chips (the phone navigation).
- `/how-we-test/`, `/about/`, `/disclosure/`
- `/go/{slug}/`: affiliate redirects (not built yet)

## Review page contract (`src/layouts/ReviewLayout.astro`)
- The call (KEEP / RETURN / DEPENDS) and the buy link sit in the first screen on a phone, with the disclosure line under the buy link.
- Wear clock: dated entries, each with the reviewer's REAL photo. Then still works / failed, specs, a closing buy bar, and more from the category.
- Lazy YouTube (click to load), Product + Review JSON-LD, 44px touch targets.

## Content rules
- Every review photo is the reviewer's own. AI images are brand atmosphere only (hero, category tiles), never on review pages.
- Tag unverified prices, specs and commission rates with `[VERIFY]`.
- Voice: plain, verdict-first, short sentences.

## Open items
- Content schema (Astro content collections) and real reviews.
- `/go/` redirects, sitemap, RSS.
- Hero videos (modern), finals swap.
- Deploy to Cloudflare Pages.
