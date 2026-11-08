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

## Tagline
"Equipped for Excellence" (from the logo kit, 2026-11-08). It replaced "Bought. Used. Judged." site-wide.

## Logo
Owner's MSH monogram kit (serif wordmark, olive/cream circle monogram, tagline "Equipped for Excellence").
The source sheet is `assets-src/logo/kit/logo-kit-sheet.png` (1124x2048, all lockups on one image).
Web pieces were cut from it into `public/images/logo/`: `mark.png` (258px circle, transparent), `wordmark-{ink,cream}.png`,
`wordmark-tagline-{ink,cream}.png`, `mark-{32,64,192,512}.png`, `apple-touch-icon.png`, and `/favicon.ico`.
These are raster cut-outs. Replace them with the original vector/large files when available (same file names).

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
- `/field-notes/`: the blog (Field Notes). Posts are Markdown files in `src/content/field-notes/`, and the file name is the URL slug.
  Front matter: title, description, date, kind (Guide | Comparison | Carry | Test update | How-to | Notes), optional image/imageAlt (YOUR photo),
  photoNote (placeholder label), reviews (review URLs it mentions), featured, draft, sample. Schema: `src/content.config.ts`.
- `/how-we-test/`, `/about/`, `/disclosure/`
- `/go/{slug}/`: affiliate redirects (not built yet)

## Review page contract (`src/layouts/ReviewLayout.astro`)
- The call (KEEP / RETURN / DEPENDS) and the buy link sit in the first screen on a phone, with the disclosure line under the buy link.
- Wear clock: dated entries, each with the reviewer's REAL photo. Then still works / failed, specs, a closing buy bar, and more from the category.
- Lazy YouTube (click to load), Product + Review JSON-LD, 44px touch targets.

## Content rules
- Never claim every product was bought. The promise is hands-on use. Each review declares its `source`:
  `bought` (optionally `paid`, `acquired`), `sent` (free from `from`), or `loaned` (from `from`, returned).
  The line shows under the buy button. Brands never preview reviews, and free gear never changes the call.
- Every review photo is the reviewer's own. AI images are brand atmosphere only (hero, category tiles), never on review pages.
- Tag unverified prices, specs and commission rates with `[VERIFY]`.
- Voice: plain, verdict-first, short sentences.

## Hosting
Cloudflare Pages project `menssupplyhouse` (https://menssupplyhouse.pages.dev), created as a direct-upload project.
Deploys run from GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. Needs the repo secret `CLOUDFLARE_API_TOKEN`.
Build command `npm run build`, output `dist`, Node 22 (`.node-version`).
Pre-launch: `PRELAUNCH = true` in `src/data/site.ts` adds `noindex` to every page. Flip it to false at launch.

## Open items
- Content schema (Astro content collections) and real reviews.
- `/go/` redirects, sitemap, RSS.
- Hero videos (modern), finals swap.
- Deploy to Cloudflare Pages.
