import { projects } from '../data/projects';
export function GET() {
  const base = 'https://ayahassan.com';
  const paths = ['/', '/work/', '/about/', '/services/', '/contact/', ...projects.map((p) => `/work/${p.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${base}${p}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
