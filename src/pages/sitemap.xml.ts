/* XML sitemap with priorities, last-modified dates and an image entry for every project picture (Google image sitemap). */
import { getImage } from 'astro:assets';
import { projects, imagesFor } from '../data/projects';

const base = 'https://ayahassan.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const pages: { loc: string; pr: string; freq: string; imgs?: { loc: string; title: string }[] }[] = [
    { loc: '/', pr: '1.0', freq: 'monthly' },
    { loc: '/work/', pr: '0.9', freq: 'monthly' },
    { loc: '/about/', pr: '0.8', freq: 'yearly' },
    { loc: '/services/', pr: '0.7', freq: 'yearly' },
    { loc: '/contact/', pr: '0.6', freq: 'yearly' },
    { loc: '/cv/', pr: '0.7', freq: 'monthly' },
  ];
  for (const p of projects) {
    const imgs = await Promise.all(imagesFor(p.slug).map(async (src, i) => ({
      loc: base + (await getImage({ src, width: 1600, format: 'webp' })).src,
      title: `${p.title}, ${p.location}${p.concept ? ' (concept exploration)' : ''} — image ${i + 1}`,
    })));
    pages.push({ loc: `/work/${p.slug}/`, pr: p.featured ? '0.8' : '0.6', freq: 'yearly', imgs });
  }
  // the Arabic version mirrors every page under /ar/
  pages.push(...pages.map((x) => ({ ...x, loc: `/ar${x.loc}`, imgs: undefined })));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map((u) => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pr}</priority>${(u.imgs ?? []).map((im) => `
    <image:image><image:loc>${esc(im.loc)}</image:loc><image:title>${esc(im.title)}</image:title></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
