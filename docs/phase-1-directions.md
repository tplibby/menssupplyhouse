# Phase 1 — Three directions

Rules applied: no two directions share a page structure or a color family. Every direction keeps the
verdict + buy link in the first screen on a 390px phone, a disclosure line, lazy YouTube, JSON-LD, and
44px+ touch targets. Fonts are all Google Fonts (self-hostable via Fontsource).

One idea runs through all three, whichever you pick: **cost per day of use** as the site's signature
number. It's a metric only someone who actually used the thing can publish.

---

## A. SPEC SHEET — "Every product gets an engineering drawing."

**Idea:** The review is a technical drawing sheet. You don't read a story; you read the drawing, the
parts list and the revision table.

| Role | Hex | Use |
|---|---|---|
| Blueprint cobalt | `#0F2A8C` | Page ground |
| Deep cobalt | `#081A5E` | Table bands, footer |
| Line white | `#EAF0FF` | Text, rules, grid |
| Cyan line | `#8FB4FF` | Secondary rules, labels |
| Hi-vis yellow | `#F2E205` | Verdict stamp, buy button, margin notes. Nothing else. |

**Type:** Archivo ExtraCondensed 800 (headlines, uppercase) + IBM Plex Mono (data, labels, body).

**Review page structure (top to bottom, phone):**
1. **Title block.** Engineering title block: part name, part no. (SKU), date bought, price paid `[VERIFY]`,
   days tested, sheet rev. The yellow verdict stamp (BUY / SKIP / ONLY IF…) and the buy button sit inside it.
2. **Score columns.** Stamped table: Durability · Daily Carry · Value · Fit & Finish. Each column is a ruled
   gauge, not a star row.
3. **Parts list.** One row per component (pliers, blades, lock, clip…): spec, what I found, PASS/FAIL.
   Margin notes become yellow tape annotations inline on mobile and live in a real right margin on desktop.
4. **Figures.** Video is "FIG. 1". Real photos are FIG. 2–n in a single column with dimension-line captions.
   No grid.
5. **Revision table.** Update log: "REV B — Day 90: pivot loosened, tightened with T8."

**Risk:** dense. Long parts lists need careful phone typography.

---

## B. TEARDOWN — "One photo. Every part numbered. My call on each."

**Idea:** The page *is* one overhead layout photo of the product, laid out on concrete. Numbered
callouts are the review.

| Role | Hex | Use |
|---|---|---|
| Concrete | `#8E9192` | Page ground |
| Wet concrete | `#4A4D4F` | Panels, callout list |
| Chalk | `#E3E3DE` | Text on dark, chalk-line rules |
| Marker black | `#111111` | Text on concrete |
| Blaze orange | `#FF4F00` | Pins, spray verdict mark, buy bar. Fluorescent, not burnt. |

**Type:** Big Shoulders Stencil Display 800 (headlines, numbers) + Overpass Mono (labels, body).

**Review page structure (phone):**
1. **The layout photo.** Your real overhead shot fills the top ~55vh with orange numbered pins on it.
   The verdict is sprayed over the corner as a painted circle ("KEEP" / "SKIP").
2. **Sticky buy bar.** A blaze-orange bar fixed to the bottom of the screen: price `[VERIFY]` + retailer.
3. **Callout list.** As you scroll, the photo stays pinned in a shrunken form and the active pin lights up.
   Each callout: part name, spray grade (✓ / ✗ / ~), one short paragraph, an optional close-up real photo.
4. **Failure zone.** Things that broke get a barricade-tape divider and their own callouts.
5. **Callout 0 — the video.** "Watch it get used." Loads on tap.

**Risk:** needs a strong overhead photo of every product. Books and barware lay out less well than tools.

---

## C. RECEIPT — "What I paid, how long I used it, what it cost per day."

**Idea:** Every review is a field receipt. The total at the bottom isn't the price; it's the
cost per day of use. The receipt renders as a shareable image.

| Role | Hex | Use |
|---|---|---|
| Ink | `#000000` | Text, rules, the page ground on desktop |
| Paper | `#FFFFFF` | Receipt body |
| Faded ink | `#6B6B6B` | Secondary lines (thermal fade) |
| — | — | **No accent color.** Your product photos are the only color on the site. |

**Type:** Martian Mono (all receipt text) + Schibsted Grotesk 900 (huge numerals and the verdict only).

**Review page structure (phone):**
1. **Header.** MEN'S SUPPLY HOUSE / FIELD RECEIPT / product / date bought.
2. **VERDICT line.** Huge: "KEEP IT" / "SKIP IT" / "BUY THE CHEAPER ONE". Directly under it, the buy link
   is the "PAY" line: a full-width black button.
3. **Line items.** Paid `[VERIFY]` · days carried · uses logged · things that broke (each a dated debit
   line) · repair cost · **COST PER DAY** (big total).
4. **Photos stapled in.** Full-bleed, full-color real photos break out of the narrow receipt column. They're
   the only color on the page.
5. **"Notes on the back."** The written review, short paragraphs, verdict-first.
6. **Tear line → share.** "Save this receipt" exports the receipt as a PNG (built at deploy with Satori).
   The same image is the OG card.

On desktop the receipt stays narrow (~440px) on a black page, and photos spill wide into the margins.

**Risk:** narrow column on desktop; fixed by letting photos and the video break out wide.

---

## My recommendation

**C, Receipt.** It works for all seven categories (a book is "cost per hour read"; a boot is "cost per
mile"). The share image gives every review a built-in social asset. And since the site has no accent
color, nobody can confuse it with the heritage look. It could also take A's revision table as its
update log ("REPRINTED — Day 180").
