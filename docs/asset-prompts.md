# Asset prompts

> **Repo layout (2026-11-07):** this repo holds only what the site uses. The live brand images are
> `public/images/brand/v4/web/*.webp`. Their full-size masters are `assets-src/brand/v4/*.jpg` (q92 JPEG of the 2048px PNGs).
> The hero loops are in `public/videos/` and the raw clips in `assets-src/videos/`.
> Retired sets (v1 moodboards, v2 warehouse, v3 vintage) are NOT in the repo. Their prompts and job IDs below
> are kept so they can be regenerated, and the originals stay in the Higgsfield account history.
> File paths mentioned below for those sets refer to the original build session.


Every Higgsfield prompt used for a kept asset is logged here. Rules: brand/atmosphere only, never
product proof, no people, no hands.

## Phase 1 moodboards — GENERATED 2026-11-06

Model `gpt_image_2_6` (Higgsfield default; ran at its default "low" quality, 1k). 12 images × 0.25 = ~3 credits.
Output: `public/images/brand/moodboards/<direction>-<n>-<slug>.png`. Moodboards are reference only.
Delete the two losing directions after the pick so they don't ship.

Notes: #7 was first blocked by a false-positive content filter; it was reworded (labels changed to
HINGE / PIVOT / CLIP / SPRING / SCREW / HANDLE), and the text below is the version that ran.
On #12 the model filled the `$XX.XX` placeholders with made-up numbers ($89.00, $0.79). Those are not real.

### A. Spec Sheet
1. `spec-1-blueprint-paper` (1:1): Macro texture photograph of an old cyanotype engineering blueprint sheet, deep saturated cobalt blue (#0F2A8C) paper with fine pale cyan-white grid lines and faint technical line drawings of hex bolts and a hinge pin, slight paper fold creases, crisp detail, flat even lighting, no text legible, no people, no hands
2. `spec-2-hivis-tape` (1:1): Close-up of a strip of hi-vis safety yellow (#F2E205) vinyl tape stuck diagonally across deep cobalt blueprint paper, tape edge slightly lifted, a few black marker tally marks on the tape, hard raking light, graphic and minimal, no people, no hands
3. `spec-3-drafting-table` (4:5): Moody overhead photo of a drafting table at night under a single cool white task lamp, cobalt blueprint sheets, a steel engineer's scale ruler, a mechanical pencil and a brass compass, deep blue shadows, one hi-vis yellow clipboard edge in frame, cinematic, shallow depth of field, no people, no hands, no brand logos
4. `spec-4-title-block` (4:3): Flat graphic design: an engineering drawing title block in the bottom right corner of a cobalt blue (#0F2A8C) sheet, thin white ruled lines, condensed uppercase labels reading 'MEN'S SUPPLY HOUSE', 'PART: MULTI-TOOL', 'SHEET 1 OF 1', 'REV C', and a hi-vis yellow (#F2E205) rubber-stamp style verdict box reading 'BUY' with a score '8.6 / 10', clean vector style, crisp typography, no people

### B. Teardown
5. `teardown-1-concrete` (1:1): Macro texture photograph of poured concrete slab on a job site, medium cool gray (#8E9192), fine aggregate, trowel marks, a few chalk line snaps in pale white, flat overcast light, high detail, no text, no people, no hands
6. `teardown-2-spray-mark` (1:1): Fluorescent blaze orange (#FF4F00) survey marking paint sprayed on gray concrete: a bold circled number '3' and an arrow, overspray speckle, top-down view, harsh daylight, graphic, no people, no hands
7. `teardown-3-warehouse` (4:5): Atmospheric photo of an empty concrete warehouse bay at dawn, gray tones, a single fluorescent orange barricade tape line across the frame, dust floating in a shaft of light, wet floor reflections, cinematic, no people, no vehicles, no logos
8. `teardown-4-callouts` (4:3): Flat graphic design element: numbered callout system for a product teardown diagram on a concrete gray (#4A4D4F) background, (ran as) Flat infographic design element: a numbered label system for a technical parts diagram on a flat concrete gray (#4A4D4F) background, bold stencil-style fluorescent orange (#FF4F00) circles containing black numbers 1 through 6, thin orange leader lines with right-angle elbows ending in short condensed uppercase labels 'HINGE', 'PIVOT', 'CLIP', 'SPRING', 'SCREW', 'HANDLE', clean vector style, empty center area, nothing else in frame

### C. Receipt
9. `receipt-1-thermal-paper` (1:1): Macro photograph of white thermal receipt paper, high contrast black and white, curled edge, faint fading print, fine paper grain, torn serrated edge at top, studio light, strictly monochrome, no color, no people, no hands
10. `receipt-2-receipt-pile` (1:1): Strictly black and white photograph of a pile of crumpled and flat paper receipts on a matte black surface, harsh flash from above, deep blacks, bright whites, graphic grain like a photocopy, no legible brand names, no people, no hands
11. `receipt-3-date-stamp` (4:5): Strictly black and white high-contrast photocopy-style image of a rubber date stamp and an ink pad on a bare steel workbench, heavy toner grain, xerox texture, stark shadows, monochrome, no people, no hands, no logos
12. `receipt-4-receipt-graphic` (9:16): Flat graphic design: a long narrow thermal store receipt, pure black monospaced text on pure white, header 'MEN'S SUPPLY HOUSE / FIELD RECEIPT', a large line 'VERDICT: KEEP IT', then line items 'PAID ....... $XX.XX', 'DAYS CARRIED ....... 112', 'THINGS THAT BROKE ....... 1', 'COST PER DAY ....... $0.XX', dashed separators, a barcode at the bottom, strictly black and white, crisp, no people

---

## Brand assets v2 (parts-bin system): DRAFTS, 2026-11-06

Model `gpt_image_2_6`, quality low, 1k: 0.25 credits each, 13 images, about 3.25 credits.
Originals: `public/images/brand/drafts/*.png`. Web copies: `public/images/brand/drafts/web/*.webp`.
Every prompt ends with this suffix (from the brief):
> photographic, shot on 35mm, hard cool overhead fluorescent light, crisp shadows, neutral-cool color grade, true whites, saturated flat bin colors, no people, no hands, no text, no logos, no brand names.

The C and D prompts start with: "Same supply house, same galvanized shelving, bins and lighting as the reference." and pass
A-hero-aisle-v1 (job aa807bf6-5e80-4698-a5d4-983aaa6548fd) as an `image_references` input so the set stays consistent.

| File | Job | Prompt (before suffix) | Used on |
|---|---|---|---|
| A-hero-aisle-v1 | aa807bf6 | Long aisle of galvanized steel shelving in a working supply house, stacked plastic parts bins in cobalt blue, signal red, safety yellow and green, each bin with a blank white label strip, straight-on symmetrical view down the aisle, concrete floor with a yellow safety-tape line, a few fluorescent tubes overhead, clean and organized, slight dust in the light. | Home hero (phone uses a center 4:5 crop; the final will be outpainted) |
| C-{cat}-v1 ×7 | f8d9d87e, 3ee2fab4, 39836b99, d01792e8, 0cbbf6db, 4aa9e278, 59dbfcec | Single plastic parts bin in [signal red / cobalt blue / safety yellow / green / matte black / smoke-gray translucent / stone-white off-white] pulled halfway out of a galvanized steel shelf, empty interior, blank white label strip on the front, shot dead-on at bin height, neighboring bins slightly out of focus. | Category page bands |
| D-counter-v1 | 8fa218c0 | Long worn steel-topped service counter in an old supply house, empty, a pen on a beaded chain, a receipt spike with blank tickets, a small brass service bell, walls of colored parts bins behind it, shot from the customer's side at eye level. | How We Test header |
| E1-galvanized-v1 | 67323743 | Seamless tileable texture: macro of galvanized steel sheet with visible zinc spangle crystal pattern, flat and evenly lit, fills the entire frame edge to edge, no objects. | Shelf rails |
| E2-pegboard-v1 | 577e061e | Seamless tileable texture: perforated galvanized steel pegboard, evenly spaced round holes in a regular grid, shot perfectly flat-on, evenly lit, fills the entire frame edge to edge, no objects. | Aisle uprights |
| E3-concrete-tape-v1 | 811e5f1e | Overhead view of a smooth gray concrete shop floor with one straight strip of worn yellow-and-black diagonal safety tape running horizontally across the frame, scuffs and fine aggregate, fills the frame edge to edge. | Floor strip above footer |
| E4-label-strip-v1 | ebda02f6 | Macro of a blank white printed label strip inserted in the label holder of a cobalt blue plastic parts bin, flat-on, the label is completely blank, slight plastic texture and molded edges visible. | Not placed. It's a close-up, not a tile. Candidate for the social/OG background (H). |

Known misses: the smoke bin came out opaque gray, not translucent. The hero reads slightly CGI.

---

## Direction v3 (image-led, reference-inspired): DRAFTS, 2026-11-06

Model `gpt_image_2_6`, quality low, 1k: 8 images, about 2 credits. Originals in `public/images/brand/v3/*.png`, web copies in `public/images/brand/v3/web/`.
These show generic, unbranded items by user decision. Use them only for category navigation and the home hero, never on review pages.
Every prompt ends with this suffix:
> Editorial (outdoor) photograph, natural light, muted warm-neutral color grade with olive and stone tones, shallow depth of field, no people, no hands, no faces, no text, no logos, no brand names, all items generic and unbranded.

| File | Job | Prompt (before suffix) |
|---|---|---|
| hero-tailgate (3:2) | 9aab4211 | Open tailgate of an old unbranded pickup truck at dusk in the high desert, a simple gear layout on the tailgate: worn leather work boots, a canvas bag, a steel thermos, a closed folding knife and a paperback book, soft low sun, dust in the air, distant mesas. |
| cat-boots (1:1) | 6162deda | A pair of well-worn generic leather work boots with dried mud, standing on a weathered wooden porch step, late afternoon side light. |
| cat-workwear (1:1) | 3be43c58 | A faded canvas work jacket hanging on an iron hook on a weathered board wall, worn cuffs, a leather work glove on the shelf below, soft window light. |
| cat-edc (1:1) | e077721b | Everyday carry laid out on a flat river stone: a closed generic folding pocket knife, a small plain metal flashlight, a brass key ring and a simple field watch, overhead view, soft natural light. |
| cat-tools (1:1) | d9300755 | Well-used generic hand tools on a scarred wooden workbench: a claw hammer, a combination square, a chisel and a pair of pliers, sawdust, morning light through a shop window. |
| cat-gear (1:1) | c4b990d3 | A rugged waxed-canvas duffel bag and a camp lantern on a roof rack, mountain ridgeline and pine forest behind, overcast morning, the vehicle body is not visible. |
| cat-barware (1:1) | ec3cd608 | An empty heavy crystal rocks glass and a brushed steel cocktail shaker on a dark soapstone bar top, a single clear ice cube in the glass, no liquid, low warm side light, dark background. (Adds: no alcohol bottles.) |
| cat-books (1:1) | a52a966b | A small stack of worn cloth-bound hardcover books with completely blank spines on a wooden side table beside a reading lamp, a pair of reading glasses on top, evening light. (Adds: no text or titles anywhere.) |

The v2 warehouse drafts in `public/images/brand/drafts/` are retired. Delete them before launch.

### v3 FINALS, 2026-11-06
These are the same 8 prompts, re-run at quality high and resolution 2k (2.75 credits each, about 22 credits). Each prompt starts with
"Recreate the reference image's composition and subject faithfully at higher detail and realism." and passes its draft job as `image_references`.
Final jobs: hero 46e27d3a, boots c021a355, workwear 7f254ebb, edc 05f8152f, tools ca6ffda0, gear b3a2cd62, barware b3354121, books 9e55e834.
Files: `public/images/brand/v3/final/*.png` (2048px masters), `web/*.webp` (site copies). Drafts were moved to `v3/drafts/`.

---

## Hero video loops: TEST ROUND, 2026-11-06

Model `seedance_2_0_mini`, 720p, 5 s, silent, 16:9, start_image = the final still. 5 credits each, 15 total.
Post-processing (ffmpeg): each clip plays forward then reversed for a seamless 10 s loop, encoded as H.264 MP4 (crf 27, faststart) plus VP9 WebM, no audio.
Raw downloads: `assets-src/videos-test/`. Site files: `public/videos/hero-*.{mp4,webm}` (0.8 to 1.6 MB each).

| File | Job | Start image | Prompt |
|---|---|---|---|
| hero-tailgate | 18edf88f | final hero 46e27d3a | Very slow cinematic push-in toward the gear on the truck tailgate at dusk. Fine dust drifts slowly through the low golden sun, a light breeze moves the desert brush in the background. Everything on the tailgate stays perfectly still. Smooth, steady camera, no cuts, no people, no hands, no text. |
| hero-workbench | 771f484c | final tools ca6ffda0 | Locked-off camera with a barely perceptible slow drift. Morning sunlight through the shop window slowly brightens across the workbench, a few specks of sawdust float in the light beam. The tools do not move. Calm, quiet, no cuts, no people, no hands, no text. |
| hero-boots | fc48b60f | final boots c021a355 | Nearly still camera with a very slow sideways glide. Late afternoon light flickers softly through moving leaves onto the worn boots on the porch step, the plants in the background sway gently in the breeze. The boots do not move. Calm, no cuts, no people, no hands, no text. |

To upgrade: re-run the keepers on `minimax_hailuo` at 1080p, 6 s (10 credits each), with the same start image and prompt.

---

## Direction v4: MODERN TECHNICAL imagery, DRAFTS, 2026-11-06

User feedback on v3: "Everything looks so old. This is supposed to be modern new stuff and new gear."
v3 (rusty truck, worn boots, barn wood, golden hour) is retired. The v3 test videos are archived in `assets-src/videos-test/` and removed from the site.
Model `gpt_image_2_6`, low quality, 1k: 8 images, about 2 credits. Files: `public/images/brand/v4/drafts/*.png`, `web/*.webp`.
Every prompt ends with this suffix:
> Modern premium product editorial photograph, brand-new items, crisp clean studio-style lighting, neutral to slightly cool color grade, sharp focus, minimalist composition, no rust, no dirt, no wear, no vintage, no people, no hands, no faces, no text, no logos, no brand names, all items generic and unbranded.

| File | Job | Prompt (before suffix) |
|---|---|---|
| hero-garage (3:2) | fb7c3a9d | Wide shot of a modern minimalist garage with a polished concrete floor and a long matte black steel workbench under clean linear LED light, brand-new gear neatly arranged on the bench: technical hiking boots, a black hard-shell case, a titanium flashlight, a matte black multi-tool and an olive technical shell jacket folded beside them, large window with soft daylight on one side. |
| cat-boots | dd006b7d | A pair of brand-new modern technical leather boots with crisp stitching and grippy lug soles standing on a polished concrete floor against a smooth light-gray wall, low angle, clean soft-box light with a gentle shadow. |
| cat-workwear | d4e43723 | A brand-new olive technical work jacket with taped seams hanging on a matte black steel wall hook in a minimalist mudroom, light concrete wall, a pair of new work gloves on a floating oak shelf below, soft daylight from the side. |
| cat-edc | 670c17ec | Overhead knolling flat lay of modern everyday carry on a smooth dark slate surface: a matte black folding knife (closed), a titanium flashlight, a minimalist black wallet, a modern field watch with a black dial, and a carabiner key clip, items perfectly aligned with even spacing. |
| cat-tools | eb850dc5 | A modern workshop wall with a matte black pegboard and brand-new hand tools hung in neat rows: pliers, a hex key set, a precision screwdriver set, a compact hammer and a digital caliper, a clean steel work surface below, cool white LED strip light. |
| cat-gear | e627e70f | Brand-new modern outdoor gear on the tailgate of a new matte gray pickup truck parked at a granite trailhead: a black waterproof duffel, an olive technical backpack and a modern LED camp lantern, crisp clear morning light, mountains softly out of focus behind. (Adds: no badges; truck unbranded.) |
| cat-barware | 65e601b0 | A modern minimalist home bar: a smoked-glass rocks glass with one clear ice cube and no liquid, a matte black stainless cocktail shaker and a brushed steel jigger on a dark honed stone counter, a smooth light-gray wall behind, clean soft side light. (Adds: no alcohol, no bottles.) |
| cat-books | 77467314 | A modern reading corner: a short stack of new hardcover books with plain matte covers and completely blank spines on a sleek black metal side table beside a minimalist black floor lamp and the arm of a modern olive lounge chair, smooth light concrete wall, soft natural daylight. |

### v4 FINALS, 2026-11-06
These are the same 8 v4 prompts at quality high and resolution 2k (about 22 credits). Each prompt starts with "Recreate the reference image's composition and subject faithfully at higher detail and photographic realism." and passes its draft job as `image_references`.
Final jobs: hero 479434ae, boots 8ed10121, workwear 4badc3fb, edc 55ef18a7, tools 93a6f015, gear 74ef67e0, barware 4847a1be, books f1747ba6.
Files: `public/images/brand/v4/final/*.png` (2048px masters), `web/*.webp` (site copies).

---

## Hero video loops v4 (modern): TEST ROUND, 2026-11-06

Model `seedance_2_0_mini`, 720p, 5 s, silent, 16:9, start_image = the v4 final still. 15 credits total.
Each clip plays forward then reversed for a seamless 10 s loop: H.264 MP4 (crf 27) plus VP9 WebM, no audio. Raw: `assets-src/videos-v4/`. Site: `public/videos/`.

| File | Job | Start image | Prompt |
|---|---|---|---|
| hero-garage | d04bdfec | hero 479434ae | Very slow, smooth lateral camera glide along the black workbench in the modern garage. Soft daylight from the window shifts gently across the polished concrete floor, leaves move slightly outside the window. All gear on the bench stays perfectly still and unchanged. Steady motion-controlled camera, no cuts, no people, no hands, no text. |
| hero-edc | 3f813c40 | edc 55ef18a7 | Overhead locked camera with a very slow push-in on the everyday carry layout on dark slate. A soft band of studio light slowly sweeps across the items, catching the titanium and steel edges. The items do not move or change. Clean, precise, no cuts, no people, no hands, no text. (Note: the knife shape wobbles slightly mid-clip.) |
| hero-trailhead | c9218dde | gear 74ef67e0 | Nearly still camera with a slow gentle push-in toward the gear on the truck tailgate at the mountain trailhead. Clouds drift slowly over the peaks, pine branches sway slightly in the breeze, crisp morning light. The truck and gear stay perfectly still and unchanged. No cuts, no people, no hands, no text. |

### 1080p upgrades (Minimax Hailuo 2.3, 1080, 6 s, 10 credits each)
- hero-garage: job c06c39ca, start = hero final 479434ae, same prompt as the test. USED on the site (1626x1080, ping-pong loop, crf 26).
- hero-trailhead: job 74fdaf8b, start = a 16:9 crop of cat-gear uploaded as media 92c6b7ff. NOT used: the crop cut too low and lost the mountains, so it's a tight tailgate close-up. The site keeps the 720p Seedance trailhead loop. The file is saved at `assets-src/videos-v4/hero-trailhead-1080.mp4`. For a redo, crop from the top of the square (keep the peaks).
