import type { ImageMetadata } from 'astro';

export type Category = 'architecture' | 'interiors';

export interface Project {
  slug: string;
  title: string;
  location: string;
  country: string;
  category: Category;
  sector: string;
  scope: string[];
  practice?: 'ZFP' | 'Cosmos Studio' | 'Innovation Design Studio';
  /** NDA-sensitive: only images already in her published portfolio. */
  nda?: boolean;
  /** AI-assisted concept imagery, or provenance not yet confirmed by Aya. Never presented as a render. */
  concept?: boolean;
  featured?: boolean;
  summary?: string;
  overview?: string[];
  deliverables?: string[];
  /** Year still to be confirmed by Aya. */
  year?: string;
  /** Who the project was for. */
  client?: string;
  /** One line clarifying who did what, shown under Scope. */
  scopeNote?: string;
  scopeNoteAr?: string;
  /** External references (client / programme sites). Filled from `links` below. */
  links?: { label: string; url: string }[];
  /** Project film: a file in /public/video, or a YouTube / Vimeo id. Filled from `films` below. */
  video?: { file?: string; youtube?: string; vimeo?: string; poster?: string; title?: string };
  /** Captions for the drawings (d01, d02 …), in order. */
  captions?: string[];
  /** Concept → model → render strip: [label, image file name without .jpg]. */
  process?: [string, string][];
}

const D = 'Design', M = '3D modelling', R = 'Rendering', P = 'Post-production', B = 'BIM package', AI = 'AI enhancement';

export const projects: Project[] = [
  // ---------- Interiors · Workplace
  { slug: 'stc-hq', client: 'stc · Saudi Telecom Company', year: '2024', title: 'STC HQ Office Tower', location: 'Riyadh', country: 'Saudi Arabia', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'FF&E selection'], practice: 'ZFP', nda: true, featured: true,
    summary: 'Headquarters workplace interiors for Saudi Telecom: executive floors, open offices and focus rooms in a calm palette of stone, oak and the brand violet.' },
  { slug: 'sabic-hq', client: 'SABIC', year: '2024', title: 'SABIC HQ Office Tower Renovation', location: 'Riyadh', country: 'Saudi Arabia', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'Material & FF&E sourcing'], practice: 'ZFP', nda: true, featured: true,
    summary: 'Renovation of SABIC’s headquarters tower: a planted atrium lobby, collaborative floors and training rooms built around the corporate yellow and blue.' },
  { slug: 'tech-park', year: '2023', client: 'Confidential', title: 'Tech Park Office Building', location: 'Confidential client', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio', featured: true,
    summary: 'A high-tech workplace for a young, visionary client, built on a colour code assigned to each space.',
    overview: [
      'We were tasked with designing a high-tech building embodying innovation and futuristic aesthetics, tailored to the dynamic needs of a young and visionary client. With a pre-established colour code system for each space, we created a truly avant-garde environment.',
      'The client’s colour code runs through every space, tailored to each function. Glass elements bring openness, mounted screens offer interactive displays, LED strips trace the architecture, and metal meshes act as both texture and partition.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines'] },
  { slug: 'jotun-office', year: '2023', client: 'Jotun', title: 'Jotun Office Building', location: '6th of October', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'Animation'], practice: 'Cosmos Studio',
    summary: 'Admin offices that carry Jotun’s bold colours into calm, productive workspaces.',
    overview: [
      'We were tasked with revitalising the interior of Jotun’s new admin building, blending the company’s bold colours with neutral tones to create dynamic offices that reflect its identity while supporting productivity and creativity.',
      'Wooden strips add warmth and texture, ergonomic furniture reflects the brand’s commitment to comfort, and a carefully planned layout supports collaboration and future adaptability. Branding is integrated subtly from the entrance onward.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines', 'Promotional animation'] },
  { slug: 'hb-fuller', year: '2022', client: 'H.B. Fuller', title: 'HB Fuller Office Building', location: '6th of October', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'An energetic, budget-conscious HQ built from simple materials and the client’s brand colours.',
    overview: [
      'The interior design for the HB Fuller HQ admin building aimed to bring energy and vibrancy to the space on a budget. Simple materials, the client’s brand colours and creative paint techniques create a lively, engaging atmosphere.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines'] },
  { slug: 'suits-workspaces', year: '2025', client: 'Suits Workspaces', title: 'Suits Workspaces Office Building', location: 'India', country: 'India', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P],
    summary: 'Executive offices, meeting rooms and lounges for a flexible-workspace operator.' },
  { slug: 'sphinx', client: 'Confidential', title: 'Sphinx Business Building', location: 'Giza', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, 'Schematic & IFC drawing packages'], practice: 'Cosmos Studio', year: '2022',
    summary: 'Formal reception salons and executive suites, delivered through to issued-for-construction drawings.' },
  { slug: 'conference-room', client: 'Confidential', year: '2022', title: 'Formal Conference Room', location: 'New Capital', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'A formal boardroom in warm timber and soft light for the New Administrative Capital.' },

  // ---------- Architecture
  { slug: 'neom-oxagon', year: '2023', client: 'NEOM', title: 'NEOM Oxagon Public Service Buildings', location: 'Oxagon, NEOM', country: 'Saudi Arabia', category: 'architecture', sector: 'Public', scope: [D, M, R, P, 'Animation'], practice: 'Cosmos Studio', nda: true, featured: true,
    summary: 'Public service buildings for Oxagon, NEOM’s port city: brick volumes, shaded courtyards and planted roofs.' },
  { slug: 'fifth-square', client: 'Al Marasem', year: '2025', title: 'Fifth Square Commercial Complex', location: 'New Cairo', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: ['Canopy design', M, R, P], scopeNote: 'Design: the canopy. Modelling and rendering: the whole building.', scopeNoteAr: 'التصميم: المظلة. النمذجة والإظهار: المبنى بالكامل.', practice: 'Cosmos Studio', featured: true,
    summary: 'A terraced commercial complex whose canopy “trees” become the landmark at night.' },
  { slug: 'chery-showroom', client: 'Chery Egypt', year: '2025', title: 'Chery Showroom & Admin', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'A brand showroom and admin building with a sculpted, illuminated entrance canopy.' },
  { slug: 'noatum-terminal', client: 'NOATUM', year: '2025', title: 'NOATUM Automotive Terminal', location: 'Ain Sokhna', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'Terminal and admin buildings for a port operator, in crisp white and deep blue.' },
  { slug: 'linah-farms', client: 'Linah Farms', year: '2025', title: 'Linah Farms Industrial & Admin Building', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'An industrial facade whose green framework is inspired by palm leaves.',
    overview: [
      'A long, solid industrial shed for a date producer, given a face. The mass is carved with vertical slots, and a green framework drawn from palm leaves runs across it, so the building carries the client’s product on its skin.',
      'The design was taken from concept to a full Revit package: a coordinated 3D model, elevations and the phase 1 site and ground-floor plan.',
    ],
    captions: ['Concept: solid mass, carved slots, palm-leaf framework', 'Revit model', 'Revit elevation, main facade', 'Site and ground-floor plan, phase 1'],
    process: [['Concept', 'd01'], ['Revit model', 'd02'], ['Render', '01']] },
  { slug: 'mazeej', client: 'Guira Developments', year: '2025', title: 'Mazeej Hotel & Housing Complex', location: 'Giza', country: 'Egypt', category: 'architecture', sector: 'Hospitality', scope: ['Design review', 'Redesign to code'], practice: 'Cosmos Studio',
    summary: 'Design review and redesign of a hotel and housing complex to code and architectural standards.' },
  { slug: 'dry-port', client: 'Egyptian Government', year: '2021', title: 'Dry Port Buildings', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, B], practice: 'Cosmos Studio',
    summary: 'A Revit (BIM) sample: plans and 3D for a dry port’s buildings.' },
  { slug: 'juba-resort', year: '2023', client: 'Confidential', title: 'Juba Resort Complex', location: 'Juba', country: 'South Sudan', category: 'architecture', sector: 'Hospitality', scope: [D, M, R], practice: 'Cosmos Studio',
    summary: 'A resort complex arranged around a landscaped pool garden.' },

  // ---------- Residential developments (Innovation Design Studio)
  { slug: 'misr-italia-hilltop', client: 'Misr Italia Properties', year: '2026', title: 'Misr Italia Hilltop', location: 'Ras El Hekma', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: [M, R, P, AI], practice: 'Innovation Design Studio', featured: true,
    summary: 'Three apartment-building prototypes for a North Coast community, set around lagoons and beach-front pools.' },
  { slug: 'sodic-ogami', client: 'SODIC', year: '2026', title: 'SODIC Ogami', location: 'Ras El Hekma', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'A twin villa and a town home for a coastal community, in warm terracotta render with deep, shaded terraces.' },
  { slug: 'travco-west-island', client: 'Travco · Almaza Bay', year: '2026', title: 'Travco West Island', location: 'Almaza Bay', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'A coastal chalet and a coastal town home on the lagoon at Almaza Bay.' },
  { slug: 'sodic-east-vale', client: 'SODIC', year: '2026', title: 'SODIC East Vale', location: 'New Cairo', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio', captions: ['Ground floor plan', 'First floor plan', 'Roof plan'],
    summary: 'A premium family home with planted roof terraces and a garden pool.' },
  { slug: 'orascom-o-west', client: 'Orascom Development', year: '2026', title: 'Orascom O West Midyard', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'Mid-rise apartment blocks for the Midyard district of O West.' },

  // ---------- Residential architecture (concept exploration)
  { slug: 'minimal-villa', year: '2026', client: 'Private client', title: 'Minimal Villa', location: 'Egypt', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A two-storey villa in pale stone and dark glazing: one carved volume, a deep garden terrace and a quiet street face.' },
  { slug: 'mediterranean-house', year: '2025', client: 'Private client', title: 'Mediterranean House', location: 'Lebanon', country: 'Lebanon', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  // ---------- Interiors · Residential & hospitality
  { slug: 'modern-residence-new-cairo', year: '2025', client: 'Private client', title: 'Modern Residence', location: 'New Cairo', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A full residence in warm timber, stone and soft neutrals: living, dining, bedrooms and baths.' },
  { slug: 'zayed-residence', year: '2024', client: 'Private client', title: 'Zayed Residence', location: 'Sheikh Zayed, Giza', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A bold residence of dark timber, marble and sculptural lighting.' },
  { slug: 'arches-restaurant', client: 'Private client', year: '2022', title: 'Arches Restaurant', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'interiors', sector: 'Hospitality', scope: [D, M, R, P],
    summary: 'A restaurant of timber arches, hanging greenery and halo lights.' },
  { slug: 'bmw-showroom', year: '2022', client: 'BMW Egypt', title: 'BMW Showroom', location: 'Cairo–Alex Road', country: 'Egypt', category: 'interiors', sector: 'Retail', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'A brand showroom with a textured feature wall and bright display bays.' },
];

/* ---------- external links (official sites only) */
// Verified 2026-11-01: each website loads, and every Instagram/Facebook URL is the one
// linked from that client's own site (no guessed handles).
const ig = (url: string) => ({ label: 'Instagram', url });
const fb = (url: string) => ({ label: 'Facebook', url });
const links: Record<string, Project['links']> = {
  'stc-hq': [{ label: 'stc', url: 'https://www.stc.com.sa' }, ig('https://www.instagram.com/stc_ksa'), fb('https://www.facebook.com/stc.ksa')],
  'sabic-hq': [{ label: 'SABIC', url: 'https://www.sabic.com' }, ig('https://www.instagram.com/sabic/'), fb('https://www.facebook.com/sabiccorp')],
  'neom-oxagon': [{ label: 'NEOM · Oxagon', url: 'https://www.neom.com/en-us/regions/oxagon' }, ig('https://www.instagram.com/neom/'), fb('https://www.facebook.com/NEOM')],
  'jotun-office': [{ label: 'Jotun Egypt', url: 'https://www.jotun.com/eg-en' }, fb('https://www.facebook.com/JotunGroup/')],
  'hb-fuller': [{ label: 'H.B. Fuller', url: 'https://www.hbfuller.com' }, ig('https://www.instagram.com/hb_fuller/'), fb('https://www.facebook.com/hbfullercompany')],
  // noatum.com now serves a blank server page; the ports business lives at noatumports.com (no IG/FB linked there)
  'noatum-terminal': [{ label: 'Noatum Ports', url: 'https://www.noatumports.com' }],
  'linah-farms': [{ label: 'Linah Farms', url: 'https://linahfarms.com' }, ig('https://www.instagram.com/linahfarms/'), fb('https://www.facebook.com/LinahFarms')],
  'chery-showroom': [{ label: 'Chery Egypt', url: 'https://chery-eg.com' }, ig('https://www.instagram.com/cheryegypt/'), fb('https://www.facebook.com/CheryEgypt')],
  'fifth-square': [{ label: 'Al Marasem', url: 'https://almarasem.com' }, fb('https://www.facebook.com/almarasemdevelopment')],
  'misr-italia-hilltop': [{ label: 'Misr Italia Properties', url: 'https://www.misritaliaproperties.com' }, ig('https://www.instagram.com/misritaliaproperties/'), fb('https://www.facebook.com/misritaliaproperties/')],
  'sodic-ogami': [{ label: 'SODIC · Ogami', url: 'https://www.sodic.com/our-developments/ogami' }, ig('https://www.instagram.com/sodicrealestate/'), fb('https://www.facebook.com/SODICRealEstate')],
  'sodic-east-vale': [{ label: 'SODIC · EastVale', url: 'https://www.sodic.com/our-developments/eastvale' }, ig('https://www.instagram.com/sodicrealestate/'), fb('https://www.facebook.com/SODICRealEstate')],
  // orascomdevelopment.com redirects to orascomdh.com; link straight to the O West page
  'orascom-o-west': [{ label: 'Orascom · O West', url: 'https://www.orascomdh.com/destinations/owest' }, ig('https://www.instagram.com/orascomdevelopment/'), fb('https://www.facebook.com/OrascomDevelopment')],
  'travco-west-island': [{ label: 'Almaza Bay · Travco', url: 'https://www.almazabay.com' }, ig('https://www.instagram.com/almazabay/'), fb('https://www.facebook.com/AlmazaBayEG/')],
  'bmw-showroom': [{ label: 'BMW Egypt', url: 'https://www.bmw-egypt.com' }, ig('https://www.instagram.com/bmwegypt/'), fb('https://www.facebook.com/BMWEgypt')],
};
/* ---------- films: drop a compressed mp4 in /public/video/<slug>.mp4, or add a YouTube/Vimeo id */
const films: Record<string, Project['video']> = {
  // 'jotun-office': { file: '/video/jotun-office.mp4', title: 'Promotional animation' },
  'juba-resort': { file: '/video/juba-resort.mp4', poster: '/video/juba-resort.jpg', title: 'Walkthrough animation · 1:55' },
};
for (const p of projects) { p.links ??= links[p.slug]; p.video ??= films[p.slug]; }

/* ---------- images: src/assets/projects/<slug>/NN.jpg are renders (01 = cover); dNN.jpg are drawings & diagrams */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*/*.jpg', { eager: true });
const pick = (slug: string, drawing: boolean) => Object.keys(files)
  .filter((p) => p.includes(`/projects/${slug}/`) && /\/d\d+\.jpg$/.test(p) === drawing).sort().map((p) => files[p].default);
export const imagesFor = (slug: string) => pick(slug, false);
export const drawingsFor = (slug: string) => pick(slug, true);
export const cover = (slug: string) => imagesFor(slug)[0];

export const featured = projects.filter((p) => p.featured);

/* ---------- scope widget: the five disciplines, read from each project's scope */
export const DISCIPLINES = ['Design', 'Modelling', 'Rendering', 'Animation', 'BIM'] as const;
export type Discipline = (typeof DISCIPLINES)[number];
const DESIGN = /design|concept|review|redesign|FF&E|material/i;
export const disciplinesFor = (p: Project) => {
  const on = new Set<Discipline>();
  if (p.scope.some((x) => DESIGN.test(x) && !/BIM/.test(x))) on.add('Design');
  if (p.scope.includes(M)) on.add('Modelling');
  if (p.scope.includes(R) || p.scope.includes(P)) on.add('Rendering');
  if (p.scope.some((x) => /animation/i.test(x)) || p.video) on.add('Animation');
  if (p.scope.some((x) => /BIM|IFC|Revit/i.test(x))) on.add('BIM');
  return on;
};
/* a project image by file name (e.g. 'd02', '01') */
export const fileFor = (slug: string, name: string) => { const k = Object.keys(files).find((f) => f.endsWith(`/projects/${slug}/${name}.jpg`)); return k ? files[k].default : undefined; };
export const countries = [...new Set(projects.map((p) => p.country).filter((c) => c !== '—'))];

export const contact = {
  email: 'ayahassanm@outlook.com',
  linkedin: 'https://www.linkedin.com/in/ayahassanm',
  linkedinLabel: 'linkedin.com/in/ayahassanm',
  instagram: 'https://www.instagram.com/ayahassanmr/',
  facebook: 'https://www.facebook.com/share/1CLSC4gxvc/',
  whatsapp: 'https://wa.me/201115318509', // the number is never printed on the site
};

/* ---------- project number: one canonical number per project, used on the site and in the PDF portfolio.
   Order = Architecture then Interiors, featured first, then newest. */
const byOrder = (a: Project, b: Project) => +!!b.featured - +!!a.featured || +(b.year ?? 0) - +(a.year ?? 0);
export const ordered: Project[] = [
  ...projects.filter((p) => p.category === 'architecture').sort(byOrder),
  ...projects.filter((p) => p.category === 'interiors').sort(byOrder),
];
export const projectNo = (slug: string) => String(ordered.findIndex((p) => p.slug === slug) + 1).padStart(2, '0');

/* ---------- client logos (public/clients/<id>.png, official files supplied by Aya) */
const logoBySlug: Record<string, string> = {
  'sodic-ogami': 'sodic', 'sodic-east-vale': 'sodic', 'orascom-o-west': 'orascom', 'misr-italia-hilltop': 'misr-italia',
  'travco-west-island': 'travco', 'neom-oxagon': 'neom', 'stc-hq': 'stc', 'sabic-hq': 'sabic', 'jotun-office': 'jotun',
  'bmw-showroom': 'bmw', 'chery-showroom': 'chery', 'hb-fuller': 'hb-fuller', 'fifth-square': 'al-marasem',
  'mazeej': 'guira', 'linah-farms': 'linah',
};
export const clientLogo = (slug: string) => (logoBySlug[slug] ? `/clients/${logoBySlug[slug]}.png` : undefined);
