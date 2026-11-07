// Provisional data until menssupplyhouse-build-spec.md arrives (routes + content schema come from there).

export type Verdict = 'KEEP' | 'RETURN' | 'DEPENDS';

export interface Category {
  slug: string;
  code: string; // item-number prefix, e.g. EDC-003
  name: string;
  tile: string; // short label on the image tile
  notes: string;
  image: string; // Higgsfield category scene: generic, unbranded, never a reviewed product
}

const IMG = '/images/brand/v4/web/';
export const categories: Category[] = [
  { slug: 'boots', code: 'BOOT', name: 'Boots', tile: 'Boots', notes: 'Soles, stitching, break-in, and how they feel at hour ten.', image: `${IMG}cat-boots.webp` },
  { slug: 'workwear', code: 'WORK', name: 'Workwear', tile: 'Workwear', notes: 'Seams, knees, cuffs and what the wash does to it.', image: `${IMG}cat-workwear.webp` },
  { slug: 'edc', code: 'EDC', name: 'Everyday Carry', tile: 'Carry', notes: 'Clips, pivots, locks and whether it rides in the pocket every day.', image: `${IMG}cat-edc.webp` },
  { slug: 'tools', code: 'TOOL', name: 'Tools', tile: 'Tools', notes: 'Tolerances, grip and what loosens first.', image: `${IMG}cat-tools.webp` },
  { slug: 'gear', code: 'GEAR', name: 'Gear', tile: 'Gear', notes: 'Zippers, buckles, fabric and the first thing to tear.', image: `${IMG}cat-gear.webp` },
  { slug: 'barware', code: 'BAR', name: 'Barware', tile: 'Barware', notes: 'Weight, finish and what survives the dishwasher.', image: `${IMG}cat-barware.webp` },
  { slug: 'books', code: 'BOOK', name: 'Books', tile: 'Books', notes: 'Read cover to cover. Kept or passed on.', image: `${IMG}cat-books.webp` },
];
export const heroImage = `${IMG}hero-garage.webp`;
const VID = '/videos/';
// Home hero reel: AI atmosphere loops animated from the brand stills (never product proof).
export const heroSlides = [
  { poster: `${IMG}hero-garage.webp`, mp4: `${VID}hero-garage.mp4`, webm: `${VID}hero-garage.webm`, alt: 'New boots, a hard case, a flashlight, a multi-tool and an olive shell jacket on a black workbench in a modern garage' },
  { poster: `${IMG}cat-edc.webp`, mp4: `${VID}hero-edc.mp4`, webm: `${VID}hero-edc.webm`, alt: 'Modern everyday carry laid out on dark slate' },
  { poster: `${IMG}cat-gear.webp`, mp4: `${VID}hero-trailhead.mp4`, webm: `${VID}hero-trailhead.webm`, alt: 'A duffel, a technical backpack and a lantern on a truck tailgate at a mountain trailhead' },
];

export const verdictStyle: Record<Verdict, { pill: string; text: string; line: string }> = {
  KEEP: { pill: 'bg-olive text-paper', text: 'text-olive', line: 'Buy it. It held up.' },
  RETURN: { pill: 'bg-brick text-paper', text: 'text-brick', line: 'Skip it. Something failed or it isn’t worth the money.' },
  DEPENDS: { pill: 'bg-paper text-ink ring-1 ring-ink', text: 'text-muted', line: 'Good for one kind of person. The review says who.' },
};

export interface Item {
  id: string;
  category: string;
  slug: string;
  name: string;
  days: number;
  verdict: Verdict;
  sample?: boolean; // layout filler, not a real review
}

export const items: Item[] = [
  { id: 'EDC-001', category: 'edc', slug: 'leatherman-wave-plus', name: 'Leatherman Wave+', days: 94, verdict: 'KEEP' },
  { id: 'BOOT-001', category: 'boots', slug: '#', name: 'Sample work boot', days: 120, verdict: 'KEEP', sample: true },
  { id: 'EDC-003', category: 'edc', slug: '#', name: 'Sample flashlight', days: 41, verdict: 'RETURN', sample: true },
  { id: 'GEAR-001', category: 'gear', slug: '#', name: 'Sample backpack', days: 52, verdict: 'DEPENDS', sample: true },
  { id: 'EDC-002', category: 'edc', slug: '#', name: 'Sample knife', days: 61, verdict: 'DEPENDS', sample: true },
  { id: 'BOOT-002', category: 'boots', slug: '#', name: 'Sample hiker', days: 38, verdict: 'RETURN', sample: true },
  { id: 'WORK-001', category: 'workwear', slug: '#', name: 'Sample work pant', days: 75, verdict: 'KEEP', sample: true },
  { id: 'TOOL-001', category: 'tools', slug: '#', name: 'Sample pliers', days: 90, verdict: 'KEEP', sample: true },
  { id: 'BAR-001', category: 'barware', slug: '#', name: 'Sample rocks glass', days: 30, verdict: 'KEEP', sample: true },
  { id: 'BOOK-001', category: 'books', slug: '#', name: 'Sample book', days: 14, verdict: 'KEEP', sample: true },
];

export const catBySlug = (s: string) => categories.find((c) => c.slug === s)!;
export const itemHref = (i: Item) => (i.sample ? undefined : `/${i.category}/${i.slug}/`);
