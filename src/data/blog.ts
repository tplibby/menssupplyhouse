import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readMinutes = (p: Post) => Math.max(1, Math.round((p.body ?? '').split(/\s+/).filter(Boolean).length / 230));
export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
export const postHref = (p: Post) => `/field-notes/${p.id}/`;
