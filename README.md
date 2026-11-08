# Men's Supply House

Hands-on gear reviews: used until it shows wear, judged straight, and clear about where each product came from.

## Run it
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live
- `docs/SPEC.md`: the working spec (stack, palette, fonts, routes, review page rules). Start here.
- `docs/direction-v3.md`: design direction and the reference it came from.
- `docs/asset-prompts.md`: every Higgsfield prompt and job ID, for regenerating images and videos.
- `src/`: Astro pages, layouts, components and data (`src/data/site.ts`).
- `public/images/brand/v4/web/`, `public/videos/`: the brand images and hero loops the site uses.
- `assets-src/`: full-size masters and raw video clips (not deployed).

AI images are brand atmosphere only. Every image of a reviewed product is my own photo.

## Writing a Field Note
1. Copy any file in `src/content/field-notes/` and rename it. The file name becomes the URL, e.g. `best-work-pants.md` → `/field-notes/best-work-pants/`.
2. Edit the top block (title, description, date, kind). `kind` is one of: Guide, Comparison, Carry, Test update, How-to, Notes.
3. Add your photo under `public/images/notes/` and set `image: /images/notes/your-photo.jpg` plus `imageAlt`.
   Without an image, a labelled placeholder shows (`photoNote`).
4. List any reviews you mention under `reviews:` (e.g. `- /edc/leatherman-wave-plus/`) to show them as cards under the post.
5. `featured: true` puts it at the top of `/field-notes/`. `draft: true` keeps it off the site. Remove `sample: true` on real posts.
6. Push to `main`. It's live in about a minute.
