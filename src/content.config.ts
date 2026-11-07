import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Field Notes posts: one Markdown file each in src/content/field-notes/. The file name becomes the URL (/field-notes/<file-name>/).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field-notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one or two sentences, used in lists and search results
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    kind: z.enum(['Guide', 'Comparison', 'Carry', 'Test update', 'How-to', 'Notes']),
    image: z.string().optional(), // path under /public to YOUR photo; leave out to show a labelled placeholder
    imageAlt: z.string().optional(),
    photoNote: z.string().optional(), // what the placeholder should become, e.g. "boots on the bench at day 30"
    reviews: z.array(z.string()).default([]), // review URLs this post mentions, e.g. "/edc/leatherman-wave-plus/"
    featured: z.boolean().default(false),
    draft: z.boolean().default(false), // drafts are not published
    sample: z.boolean().default(false), // layout filler; shows a banner
  }),
});

export const collections = { blog };
