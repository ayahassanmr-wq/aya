import { projects, type Project } from './projects';

/** Drawing-set sheet code: A-01 for architecture, I-01 for interiors, in list order. */
export function sheetCode(p: Project): string {
  const same = projects.filter((x) => x.category === p.category);
  const n = same.findIndex((x) => x.slug === p.slug) + 1;
  return `${p.category === 'architecture' ? 'A' : 'I'}-${String(n).padStart(2, '0')}`;
}
