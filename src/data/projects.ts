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
  practice?: 'ZFP' | 'Cosmos Studio';
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
  /** External references (client / programme sites). Filled from `links` below. */
  links?: { label: string; url: string }[];
  /** Project film: a file in /public/video, or a YouTube / Vimeo id. Filled from `films` below. */
  video?: { file?: string; youtube?: string; vimeo?: string; poster?: string; title?: string };
}

const D = 'Design', M = '3D modelling', R = 'Rendering', P = 'Post-production', B = 'BIM package';

export const projects: Project[] = [
  // ---------- Interiors · Workplace
  { slug: 'stc-hq', title: 'STC HQ Office Tower', location: 'Riyadh', country: 'Saudi Arabia', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'FF&E selection'], practice: 'ZFP', nda: true, featured: true,
    summary: 'Headquarters workplace interiors for Saudi Telecom: executive floors, open offices and focus rooms in a calm palette of stone, oak and the brand violet.' },
  { slug: 'sabic-hq', title: 'SABIC HQ Office Tower Renovation', location: 'Riyadh', country: 'Saudi Arabia', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'Material & FF&E sourcing'], practice: 'ZFP', nda: true, featured: true,
    summary: 'Renovation of SABIC’s headquarters tower: a planted atrium lobby, collaborative floors and training rooms built around the corporate yellow and blue.' },
  { slug: 'tech-park', title: 'Tech Park Office Building', location: 'Confidential client', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio', featured: true,
    summary: 'A high-tech workplace for a young, visionary client, built on a colour code assigned to each space.',
    overview: [
      'We were tasked with designing a high-tech building embodying innovation and futuristic aesthetics, tailored to the dynamic needs of a young and visionary client. With a pre-established colour code system for each space, we created a truly avant-garde environment.',
      'The client’s colour code runs through every space, tailored to each function. Glass elements bring openness, mounted screens offer interactive displays, LED strips trace the architecture, and metal meshes act as both texture and partition.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines'] },
  { slug: 'jotun-office', title: 'Jotun Office Building', location: '6th of October', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'Animation'], practice: 'Cosmos Studio',
    summary: 'Admin offices that carry Jotun’s bold colours into calm, productive workspaces.',
    overview: [
      'We were tasked with revitalising the interior of Jotun’s new admin building, blending the company’s bold colours with neutral tones to create dynamic offices that reflect its identity while supporting productivity and creativity.',
      'Wooden strips add warmth and texture, ergonomic furniture reflects the brand’s commitment to comfort, and a carefully planned layout supports collaboration and future adaptability. Branding is integrated subtly from the entrance onward.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines', 'Promotional animation'] },
  { slug: 'hb-fuller', title: 'HB Fuller Office Building', location: '6th of October', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'An energetic, budget-conscious HQ built from simple materials and the client’s brand colours.',
    overview: [
      'The interior design for the HB Fuller HQ admin building aimed to bring energy and vibrancy to the space on a budget. Simple materials, the client’s brand colours and creative paint techniques create a lively, engaging atmosphere.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines'] },
  { slug: 'suits-workspaces', title: 'Suits Workspaces Office Building', location: 'India', country: 'India', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P],
    summary: 'Executive offices, meeting rooms and lounges for a flexible-workspace operator.' },
  { slug: 'sphinx', title: 'Sphinx Business Building', location: 'Giza', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, 'Schematic & IFC drawing packages'], practice: 'Cosmos Studio', year: '2022',
    summary: 'Formal reception salons and executive suites, delivered through to issued-for-construction drawings.' },
  { slug: 'conference-room', title: 'Formal Conference Room', location: 'New Capital', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P],
    summary: 'A formal boardroom in warm timber and soft light for the New Administrative Capital.' },

  // ---------- Architecture
  { slug: 'neom-oxagon', title: 'NEOM Oxagon Public Service Buildings', location: 'Oxagon, NEOM', country: 'Saudi Arabia', category: 'architecture', sector: 'Public', scope: [D, M, R, P, 'Animation'], practice: 'Cosmos Studio', nda: true, featured: true,
    summary: 'Public service buildings for Oxagon, NEOM’s port city: brick volumes, shaded courtyards and planted roofs.' },
  { slug: 'commercial-mall', title: 'Commercial Mall', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Retail', scope: [D, M, R, P], featured: true,
    summary: 'A four-level retail mall under a woven lattice roof that filters the desert light into the atrium.' },
  { slug: 'fifth-square', title: 'Fifth Square Commercial Complex', location: 'New Cairo', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: [M, R, P, 'Concept studies'], practice: 'Cosmos Studio', featured: true,
    summary: 'A terraced commercial complex whose canopy “trees” become the landmark at night.' },
  { slug: 'chery-showroom', title: 'Chery Showroom & Admin', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'A brand showroom and admin building with a sculpted, illuminated entrance canopy.' },
  { slug: 'noatum-terminal', title: 'NOATUM Automotive Terminal', location: 'Ain Sokhna', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'Terminal and admin buildings for a port operator, in crisp white and deep blue.' },
  { slug: 'linah-farms', title: 'Linah Farms Industrial & Admin Building', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'An industrial facade whose green framework is inspired by palm leaves.' },
  { slug: 'mazeej', title: 'Mazeej Hotel & Housing Complex', location: 'Giza', country: 'Egypt', category: 'architecture', sector: 'Hospitality', scope: ['Design review', 'Redesign to code'], practice: 'Cosmos Studio',
    summary: 'Design review and redesign of a hotel and housing complex to code and architectural standards.' },
  { slug: 'dry-port', title: 'Dry Port Buildings', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, B], practice: 'Cosmos Studio',
    summary: 'A Revit (BIM) sample: plans and 3D for a dry port’s buildings.' },
  { slug: 'juba-resort', title: 'Juba Resort Complex', location: 'Juba', country: 'South Sudan', category: 'architecture', sector: 'Hospitality', scope: [D, M, R], practice: 'Cosmos Studio',
    summary: 'A resort complex arranged around a landscaped pool garden.' },
  { slug: 'studio-k', title: 'Studio K. Office Building', location: 'Cairo', country: 'Egypt', category: 'architecture', sector: 'Workplace', scope: [D, M, R],
    summary: 'A compact office building with a gridded glass facade and yellow accents.' },
  { slug: 'hk-inc', title: 'HK Inc. Office Building', location: 'Belgium', country: 'Belgium', category: 'architecture', sector: 'Workplace', scope: [D, M, R],
    summary: 'An office building of stacked, shifted volumes.' },

  // ---------- Residential architecture (concept exploration)
  { slug: 'classic-house', title: 'Classic House', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  { slug: 'modern-villa-a', title: 'Modern Villa I', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  { slug: 'modern-villa-b', title: 'Modern Villa II', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  { slug: 'mediterranean-house', title: 'Mediterranean House', location: 'Lebanon', country: 'Lebanon', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  { slug: 'blue-villa', title: 'Blue Villa', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Residential', scope: [D], concept: true },
  { slug: 'apartment-building', title: 'Apartment Building', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'architecture', sector: 'Residential', scope: [D], concept: true },

  // ---------- Interiors · Residential & hospitality
  { slug: 'modern-residence-new-cairo', title: 'Modern Residence', location: 'New Cairo', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A full residence in warm timber, stone and soft neutrals: living, dining, bedrooms and baths.' },
  { slug: 'zayed-residence', title: 'Zayed Residence', location: 'Sheikh Zayed, Giza', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A bold residence of dark timber, marble and sculptural lighting.' },
  { slug: 'arches-restaurant', title: 'Arches Restaurant', location: 'Sheikh Zayed, Giza', country: 'Egypt', category: 'interiors', sector: 'Hospitality', scope: [D, M, R, P],
    summary: 'A restaurant of timber arches, hanging greenery and halo lights.' },
  { slug: 'bmw-showroom', title: 'BMW Showroom', location: 'Cairo–Alex Road', country: 'Egypt', category: 'interiors', sector: 'Retail', scope: [D, M, R, P],
    summary: 'A brand showroom with a textured feature wall and bright display bays.' },
  { slug: 'jeddah-residence', title: 'Jeddah Residence', location: 'Jeddah', country: 'Saudi Arabia', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'majlis', title: 'Majlis', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'jubail-residence', title: 'Jubail Residence', location: 'Jubail', country: 'Saudi Arabia', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'sea-residence', title: 'Sea Residence', location: 'Al-Alamein', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'neoclassical-residence', title: 'Neo-Classical Residence', location: 'New Cairo', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'modern-residence-bedroom', title: 'Modern Residence II', location: 'New Cairo', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D], concept: true },
  { slug: 'concept-sketches', title: 'Concept Sketches', location: 'Various', country: '—', category: 'interiors', sector: 'Sketches', scope: ['Concept exploration'], concept: true,
    summary: 'Hand-drawn-style studies used to explore mood, light and material before modelling.' },
];

/* ---------- external links (official sites only) */
const links: Record<string, Project['links']> = {
  'stc-hq': [{ label: 'stc', url: 'https://www.stc.com.sa' }],
  'sabic-hq': [{ label: 'SABIC', url: 'https://www.sabic.com' }],
  'neom-oxagon': [{ label: 'NEOM · Oxagon', url: 'https://www.neom.com/en-us/regions/oxagon' }],
  'jotun-office': [{ label: 'Jotun', url: 'https://www.jotun.com' }],
  'hb-fuller': [{ label: 'H.B. Fuller', url: 'https://www.hbfuller.com' }],
  'noatum-terminal': [{ label: 'Noatum', url: 'https://www.noatum.com' }],
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
export const countries = [...new Set(projects.map((p) => p.country).filter((c) => c !== '—'))];

export const contact = {
  email: 'ayahassanm@outlook.com',
  linkedin: 'https://www.linkedin.com/in/ayahassanm',
  linkedinLabel: 'linkedin.com/in/ayahassanm',
  instagram: 'https://www.instagram.com/ayahassanmr/',
  facebook: 'https://www.facebook.com/share/1CLSC4gxvc/',
  whatsapp: 'https://wa.me/201115318509', // the number is never printed on the site
};
