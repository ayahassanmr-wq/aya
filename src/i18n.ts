import type { Project } from './data/projects';
import { projectsAr, placeAr, sectorAr, scopeAr } from './data/projects-ar';

export type Lang = 'en' | 'ar';

/** Language comes from the URL: everything under /ar/ is Arabic. */
export const isAr = (url: URL) => url.pathname === '/ar' || url.pathname.startsWith('/ar/');

export function i18n(url: URL) {
  const ar = isAr(url);
  const bare = ar ? url.pathname.replace(/^\/ar/, '') || '/' : url.pathname;
  return {
    ar,
    lang: (ar ? 'ar' : 'en') as Lang,
    dir: ar ? 'rtl' : 'ltr',
    /** pick the English or Arabic string */
    t: (en: string, arabic: string) => (ar ? arabic : en),
    /** an internal link in the current language */
    u: (path: string) => (ar && path.startsWith('/') && !/\.\w+$/.test(path) ? `/ar${path}` : path),
    /** the same page in the other language */
    other: ar ? bare : `/ar${bare === '/' ? '/' : bare}`,
    enPath: bare,
    arPath: `/ar${bare}`,
    /** forward arrow: points left in Arabic */
    next: ar ? '←' : '→',
    back: ar ? '→' : '←',
  };
}

/** A project with its Arabic text swapped in (falls back to English where no translation exists). */
export function localize(p: Project, ar: boolean): Project {
  if (!ar) return p;
  const a = projectsAr[p.slug] ?? {};
  return {
    ...p,
    title: a.title ?? p.title,
    location: placeAr[p.location] ?? p.location,
    country: placeAr[p.country] ?? p.country,
    sector: sectorAr[p.sector] ?? p.sector,
    summary: a.summary ?? p.summary,
    overview: a.overview ?? p.overview,
    deliverables: p.deliverables?.map((d) => scopeAr[d] ?? d),
    captions: a.captions ?? p.captions,
    process: p.process?.map(([l, f]) => [scopeAr[l] ?? l, f] as [string, string]),
    video: p.video && { ...p.video, title: a.video ?? p.video.title },
  };
}

export const place = (p: Project) => `${p.location}${p.country !== p.location && p.country !== '—' ? (p.location.match(/[؀-ۿ]/) ? '، ' : ', ') + p.country : ''}`;
