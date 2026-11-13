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
  /** Aya's role on the project, in her words (TODO: Aya to fill per project). */
  role?: string;
  roleAr?: string;
  /** Team size, e.g. '4' or '6–8' (TODO: Aya to fill per project). */
  team?: string;
  /** Role tag shown next to the project number (10 Nov brief). */
  roleTag?: 'DESIGN' | 'CO-DESIGN' | 'LEAD' | 'VISUALISATION' | 'REVIEW' | 'BIM';
  /** Project status, omitted when unknown. */
  status?: 'Built' | 'Under construction' | 'Approved' | 'Concept' | 'Proposal';
  /** Drawing numbers (1-based) that are studies/inspiration: shown right after the cover render, before the other renders. */
  studies?: number[];
  /** Drawing numbers (1-based) shown full width at natural height, e.g. composite grids. */
  fullSheets?: number[];
  /** Concept → model → render strip: [label, image file name without .jpg]. */
  process?: [string, string][];
}

const D = 'Design', M = '3D modelling', R = 'Rendering', P = 'Post-production', B = 'BIM package', AI = 'AI enhancement';

export const projects: Project[] = [
  // ---------- Interiors · Workplace
  { slug: 'stc-hq', client: 'STC · Saudi Telecom Company', year: '2024', title: 'STC HQ Office Tower', location: 'Riyadh', country: 'Saudi Arabia', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P, 'FF&E selection'], practice: 'ZFP', nda: true, featured: true,
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
  { slug: 'suits-workspaces', year: '2025', client: 'Suits Workspaces', title: 'Suits Workspaces Office Building', location: 'India', country: 'India', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P],
    summary: 'Executive offices, meeting rooms and lounges for a flexible-workspace operator.' },
  { slug: 'sphinx', client: 'Confidential', title: 'Sphinx Business Building', location: 'Giza', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, 'Schematic & issued-for-construction drawing sets'], practice: 'Cosmos Studio', year: '2022',
    summary: 'Formal reception salons and executive suites, delivered through to issued-for-construction drawings.' },
  { slug: 'neom-oxagon', year: '2023', client: 'NEOM', title: 'NEOM Oxagon Public Service Buildings', location: 'Oxagon, NEOM', country: 'Saudi Arabia', category: 'architecture', sector: 'Public', scope: [D, M, R, P], practice: 'Cosmos Studio', nda: true, featured: true,
    summary: 'Public service buildings for Oxagon, NEOM’s port city: brick volumes, shaded courtyards and planted roofs.' },
  { slug: 'sallan-creek', studies: [2], fullSheets: [1, 2], client: 'North Al Batinah Governor’s Office', year: '2025', title: 'Sallan Creek (DHIFAF)', location: 'Oman', country: 'Oman', category: 'architecture', sector: 'Masterplan', scope: ['Masterplan refinement', M, R, P, 'Presentation'], practice: 'Cosmos Studio', featured: true,
    summary: 'A strategic masterplan for sustainable growth and heritage integration: a new waterway district of nineteen zones, from expo grounds and an education hub to agri-tourism, a marina and waterfront living.',
    overview: [
      'Sallan Creek reimagines a coastal creek in North Al Batinah as the spine of a new mixed-use district. A navigable waterway — DHIFAF — threads through nineteen zones, binding economic hubs, tourism and community life into one walkable landscape.',
      'The programme balances growth with heritage: an international expo and pavilions, an education hub, twin luxury towers, an office and business hub and a logistics area tied to Sohar Port sit alongside an agri-touristic village, farm-to-table harvest tourism, boutique hotels, a family park, a sports arena and a coastal wellness centre, ending at a marina and waterfront bungalows.',
      'An urban mobility network of main, secondary and service roads is layered with golf-cart promenades, shaded pedestrian paths and cycle lanes, so every zone is reachable without a car.',
      'I refined the concept masterplan, built the 3D model of the entire district and produced the aerial renders and presentation that carried it to the client.',
    ],
    deliverables: ['Masterplan refinement and zoning', 'Area program across 19 zones', 'District-wide 3D model', 'Aerial renders', 'Client presentation and look & feel'],
    captions: ['Masterplan · figure-ground, zoning and site', 'Look & feel · one image for every zone'] },
  { slug: 'chery-showroom', client: 'Chery Egypt', year: '2025', title: 'Chery Showroom & Admin', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'A brand showroom and admin building with a sculpted, illuminated entrance canopy.' },
  { slug: 'noatum-terminal', client: 'NOATUM', year: '2025', title: 'NOATUM Automotive Terminal', location: 'Ain Sokhna', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'Terminal and admin buildings for a port operator, in crisp white and deep blue.' },
  { slug: 'mazeej', captions: ['Plan 1 · redesign', 'Plan 1 · before redesign', 'Plan 2 · redesign', 'Plan 2 · before redesign', 'Plan 3 · redesign', 'Plan 3 · before redesign', 'Plan 4 · redesign', 'Plan 4 · before redesign'], client: 'Guira Developments', year: '2025', title: 'Mazeej Hotel & Housing Complex', location: 'Giza', country: 'Egypt', category: 'architecture', sector: 'Hospitality', scope: ['Design review', 'Redesign to code'], practice: 'Cosmos Studio',
    summary: 'Design review and redesign of a hotel and housing complex to code and architectural standards.' },
  { slug: 'misr-italia-hilltop', client: 'Misr Italia Properties', year: '2026', title: 'Misr Italia Hilltop', location: 'Ras El Hekma', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: [M, R, P, AI], practice: 'Innovation Design Studio', featured: true,
    summary: 'Three apartment-building prototypes for a North Coast community, set around lagoons and beach-front pools.' },
  { slug: 'sodic-ogami', captions: ['Concept board', 'Townhouse · ground floor', 'Townhouse · first floor'], client: 'SODIC', year: '2026', title: 'SODIC Ogami', location: 'Ras El Hekma', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'A twin villa and a town home for a coastal community, in warm terracotta render with deep, shaded terraces.' },
  { slug: 'travco-west-island', captions: ['Chalet · ground floor', 'Chalet · upper floor', 'Concept board · Coastal Harmony'], client: 'Travco Properties', year: '2026', title: 'Travco West Island', location: 'Almaza Bay', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'A coastal chalet on the lagoon at Almaza Bay.' },
  { slug: 'sodic-east-vale', studies: [1], client: 'SODIC', year: '2026', title: 'SODIC East Vale · Premium Home', location: 'MADA City, New Cairo', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    captions: ['Form generation · area program, zoning mass, conceptual form', 'Ground floor · lower unit, 202.6 m²', 'First floor · upper unit, 194.3 m²', 'Roof terrace · 184 m²'],
    summary: 'Two homes in one villa: a garden unit with its own pool below, and an upper unit crowned by a 184 m² roof terrace.',
    overview: [
      'Positioned within MADA City at the heart of New Cairo’s eastern expansion, East Vale balances accessibility with retreat — minutes from major roads and destinations, yet grounded in calm, landscaped surroundings.',
      'The premium home stacks two independent residences into a single villa. The lower unit opens onto a private garden and pool; the upper unit rises through its own entrance porch and stair to a first floor of living and bedrooms, and a roof terrace almost the size of its floor plate.',
      'The massing is generated from the area program: a solid ground-floor base, a lighter first-floor volume set back to form terraces and shade, and a pergola-crowned roof — warm stone tones, vertical fins and planted edges that soften the street.',
    ],
    deliverables: ['Form generation', 'Ground, first floor and roof plans', 'Facade design', '3D model and renders'] },
  { slug: 'staff-housing', studies: [1, 2], fullSheets: [1, 2], client: 'Confidential developer', year: '2026', title: 'Staff Housing Community', location: 'Egypt', country: 'Egypt', category: 'architecture', sector: 'Masterplan', scope: ['Masterplanning', 'Concept design', M, R, P, AI], practice: 'Innovation Design Studio', featured: true,
    summary: 'A walkable town for nearly 7,000 resort staff: clustered courtyards, two repeatable prototypes and a refined Nubian language of arches, shade and earth.',
    overview: [
      'A secluded desert plot transformed into a self-sufficient community for close to seven thousand employees of a coastal resort town. The brief asked for dignity at scale: 130,000 m² of built area, a central amenities hub with dining, kitchen, laundry and retail, and a landscape that makes the whole livable.',
      'The masterplan is built from clusters. Residential blocks rotate and shift around shared courtyards, so every turn opens a new view and every cluster holds its own semi-private garden. A continuous pedestrian spine links clusters, open spaces and amenities, while service roads stay on the perimeter.',
      'Two prototypes — an L-shaped and a linear block — carry the entire programme: compact units, stacked service shafts and efficient central circulation, repeated with rhythm rather than monotony.',
      'The elevations reinterpret Nubian heritage for everyday living: the traditional arch simplified for the ground floor, solid masses carved by recesses and voids, and timber pergolas and screens that answer the climate with shade, privacy and depth.',
    ],
    deliverables: ['Masterplan and cluster strategy', 'Zoning, open-space and accessibility studies', 'L-shaped and linear residential prototypes', 'Elevation design and visual approach', '3D model and renders'],
    captions: ['Inspiration, approach and elements', 'Masterplan studies · masterplan, solid & void, open spaces, accessibility, concept', 'L-shaped prototype · design strategy', 'L-shaped prototype · ground floor plan', 'Linear prototype · ground floor plan'] },

  // ---------- Residential architecture (concept exploration)
  // ---------- Interiors · Residential & hospitality
  { slug: 'modern-residence-new-cairo', fullSheets: [1], captions: ['Drawing set · architectural, furniture, ceiling and power plans'], year: '2025', client: 'Private client', title: 'Modern Residence', location: 'New Cairo', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A full residence in warm timber, stone and soft neutrals: living, dining, bedrooms and baths.' },
  { slug: 'bmw-showroom', year: '2022', client: 'BMW Egypt', title: 'BMW Showroom', location: 'Cairo–Alex Road', country: 'Egypt', category: 'interiors', sector: 'Retail', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'A brand showroom with a textured feature wall and bright display bays.' },
  { slug: 'orascom-o-west', client: 'Orascom Development', year: '2026', title: 'Orascom O West Midyard', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Residential', scope: ['Concept design', M, R, P, AI], practice: 'Innovation Design Studio',
    summary: 'Mid-rise apartment blocks for the Midyard district of O West.' },

  { slug: 'fifth-square', client: 'Al Marasem', year: '2025', title: 'Fifth Square Commercial Complex', location: 'New Cairo', country: 'Egypt', category: 'architecture', sector: 'Commercial', scope: ['Canopy design', M, R, P], scopeNote: 'Design: the canopy. Modelling and rendering: the whole building.', scopeNoteAr: 'التصميم: المظلة. النمذجة والإظهار: المبنى بالكامل.', practice: 'Cosmos Studio', featured: true,
    summary: 'A terraced commercial complex whose canopy “trees” become the landmark at night.' },
  { slug: 'conference-room', client: 'Confidential', year: '2022', title: 'Formal Conference Room', location: 'New Capital', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'A formal boardroom in warm timber and soft light for the New Administrative Capital.' },

  // ---------- Architecture
  { slug: 'hb-fuller', year: '2022', client: 'H.B. Fuller', title: 'HB Fuller Office Building', location: '6th of October', country: 'Egypt', category: 'interiors', sector: 'Workplace', scope: [D, M, R, P], practice: 'Cosmos Studio',
    summary: 'An energetic, budget-conscious HQ built from simple materials and the client’s brand colours.',
    overview: [
      'The interior design for the HB Fuller HQ admin building aimed to bring energy and vibrancy to the space on a budget. Simple materials, the client’s brand colours and creative paint techniques create a lively, engaging atmosphere.',
    ],
    deliverables: ['Conceptual design presentation', 'Detailed design plans', 'Material samples', 'Implementation guidelines'] },
  { slug: 'dry-port', client: 'Egyptian Government', year: '2021', title: 'Dry Port Buildings', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, B], practice: 'Cosmos Studio',
    summary: 'A Revit (BIM) sample: plans and 3D for a dry port’s buildings.' },

  // ---------- Residential developments (Innovation Design Studio)
  { slug: 'linah-farms', client: 'Linah Farms', year: '2025', title: 'Linah Farms Industrial & Admin Building', location: '6th of October', country: 'Egypt', category: 'architecture', sector: 'Industrial', scope: [D, M, R, P, B], practice: 'Cosmos Studio',
    summary: 'An industrial facade whose green framework is inspired by palm leaves.',
    overview: [
      'A long, solid industrial shed for a date producer, given a face. The mass is carved with vertical slots, and a green framework drawn from palm leaves runs across it, so the building carries the client’s product on its skin.',
      'The design was taken from concept to a full Revit package: a coordinated 3D model, elevations and the phase 1 site and ground-floor plan.',
    ],
    captions: ['Concept: solid mass, carved slots, palm-leaf framework', 'Revit model', 'Revit elevation, main facade', 'Site and ground-floor plan, phase 1'],
    process: [['Concept', 'd01'], ['Revit model', 'd02'], ['Render', '01']] },
];

/* ---------- external links (official sites only) */
// Verified 2026-11-01: each website loads, and every Instagram/Facebook URL is the one
// linked from that client's own site (no guessed handles).
const ig = (url: string) => ({ label: 'Instagram', url });
const fb = (url: string) => ({ label: 'Facebook', url });
const links: Record<string, Project['links']> = {
  'stc-hq': [{ label: 'STC', url: 'https://www.stc.com.sa' }, ig('https://www.instagram.com/stc_ksa'), fb('https://www.facebook.com/stc.ksa')],
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
  'jotun-office': { file: '/video/jotun-office.mp4', poster: '/video/jotun-office.jpg', title: 'Office film · 0:51' },
};
for (const p of projects) { p.links ??= links[p.slug]; p.video ??= films[p.slug]; }

/* ---------- images: src/assets/projects/<slug>/NN.jpg are renders (01 = cover); dNN.jpg are drawings & diagrams */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*/*.jpg', { eager: true });
const pick = (slug: string, drawing: boolean) => Object.keys(files)
  .filter((p) => p.includes(`/projects/${slug}/`) && /\/d\d+\.jpg$/.test(p) === drawing).sort().map((p) => files[p].default);

// Roles, tags and status per project (10 Nov brief, Project Stories doc). Never claim more than this.
const roles: Record<string, [Project['roleTag'], string, string, Project['status'] | null]> = {
  "travco-west-island": ["DESIGN", "Sole designer of the chalet prototype, from an empty plot to approval", "المصممة الوحيدة لنموذج الشاليه، من أرض فارغة حتى الاعتماد", "Under construction"],
  "misr-italia-hilltop": ["VISUALISATION", "Sole visualiser and design development — refined materials, details and façade · 3 prototypes", "المسؤولة الوحيدة عن الإظهار وتطوير التصميم — تحسين المواد والتفاصيل والواجهة · 3 نماذج", "Under construction"],
  "staff-housing": ["DESIGN", "Project lead, team of 3 · masterplan for ~7,000 residents", "قائدة المشروع، فريق من 3 · مخطط عام لنحو 7,000 ساكن", "Proposal"],
  "sallan-creek": ["VISUALISATION", "Turned a hand-sketched masterplan into an accurate 19-zone plan, then modelled and rendered the district", "حوّلت مخططًا عامًا مرسومًا باليد إلى مخطط دقيق من 19 منطقة، ثم نمذجت الحي وأظهرته", null],
  "sodic-east-vale": ["DESIGN", "Sole designer of the premium-home prototype · 2 stacked units", "المصممة الوحيدة لنموذج المنزل المميّز · وحدتان متراكبتان", "Under construction"],
  "sodic-ogami": ["CO-DESIGN", "Massing and façade of a new prototype, within the scheme's established language", "الكتلة والواجهة لنموذج جديد ضمن اللغة المعمارية المعتمدة للمشروع", "Under construction"],
  "orascom-o-west": ["CO-DESIGN", "Massing and façade of a new prototype, within the scheme's established language", "الكتلة والواجهة لنموذج جديد ضمن اللغة المعمارية المعتمدة للمشروع", null],
  "neom-oxagon": ["VISUALISATION", "Modelling, rendering, design review and code corrections", "النمذجة والإظهار ومراجعة التصميم وتصحيحات الكود", null],
  "chery-showroom": ["BIM", "Concept through design development; coordinated Revit BIM package", "من الفكرة حتى تطوير التصميم؛ حزمة Revit BIM منسّقة", null],
  "linah-farms": ["BIM", "Concept through design development; coordinated Revit BIM package", "من الفكرة حتى تطوير التصميم؛ حزمة Revit BIM منسّقة", null],
  "noatum-terminal": ["BIM", "With the design team: design development, BIM package, visuals and animation", "ضمن فريق التصميم: تطوير التصميم وحزمة BIM والإظهار والأنيميشن", null],
  "dry-port": ["BIM", "Revit model and design-development drawing set", "نموذج Revit ومجموعة رسومات تطوير التصميم", null],
  "fifth-square": ["DESIGN", "Canopy design; modelling and rendering of the whole complex", "تصميم المظلة؛ نمذجة وإظهار المجمع بالكامل", null],
  "mazeej": ["REVIEW", "Design review and redesign for code compliance · renders by Vanilla Studio", "مراجعة التصميم وإعادة التصميم للامتثال للكود · الإظهار من Vanilla Studio", null],
  "sabic-hq": ["DESIGN", "Led the interior concept — lobby, corridors, training rooms, amenities", "قدت الفكرة التصميمية الداخلية — الردهة والممرات وقاعات التدريب والمرافق", "Under construction"],
  "stc-hq": ["DESIGN", "Originated the executive-floor concept that set the design for the tower", "صاحبة فكرة الطابق التنفيذي التي حدّدت تصميم البرج", "Concept"],
  "suits-workspaces": ["DESIGN", "Sole designer · full design and schematic package", "المصممة الوحيدة · حزمة التصميم والحزمة التخطيطية كاملة", null],
  "modern-residence-new-cairo": ["DESIGN", "Sole designer · full design and schematic package", "المصممة الوحيدة · حزمة التصميم والحزمة التخطيطية كاملة", null],
  "conference-room": ["DESIGN", "Design", "التصميم", null],
  "hb-fuller": ["CO-DESIGN", "With the team, concept to design development · direct client contact; selected materials and fixtures with the client; site visits", "مع الفريق، من الفكرة حتى تطوير التصميم · تواصل مباشر مع العميل؛ اختيار المواد والتجهيزات معه؛ زيارات موقع", "Built"],
  "sphinx": ["CO-DESIGN", "With the team, concept to design development · led material selection; animation film; site visits", "مع الفريق، من الفكرة حتى تطوير التصميم · قدت اختيار المواد؛ فيلم أنيميشن؛ زيارات موقع", "Built"],
  "jotun-office": ["CO-DESIGN", "With the team, concept to design development · animation film; site visits", "مع الفريق، من الفكرة حتى تطوير التصميم · فيلم أنيميشن؛ زيارات موقع", "Built"],
  "tech-park": ["CO-DESIGN", "With the team, concept to design development", "مع الفريق، من الفكرة حتى تطوير التصميم", null],
  "bmw-showroom": ["CO-DESIGN", "With the team, design and rendering", "مع الفريق، التصميم والإظهار", null]
};
for (const p of projects) { const r = roles[p.slug]; if (r) { p.roleTag = r[0]; p.role = r[1]; p.roleAr = r[2]; if (r[3]) p.status = r[3]; } }
export const tagAr: Record<string, string> = { DESIGN: 'تصميم', 'CO-DESIGN': 'تصميم مشترك', LEAD: 'قيادة', VISUALISATION: 'إظهار', REVIEW: 'مراجعة', BIM: 'BIM' };
export const statusAr: Record<string, string> = { Built: 'مُنفَّذ', 'Under construction': 'قيد الإنشاء', Approved: 'معتمد', Concept: 'تصميم مبدئي', Proposal: 'مقترح' };

/** Interior projects kept off the website, shown only in the interiors-only portfolio PDF. */
export const pdfOnlyProjects: Project[] = [
  { slug: 'zayed-residence', year: '2024', client: 'Private client', title: 'Zayed Residence', location: 'Sheikh Zayed, Giza', country: 'Egypt', category: 'interiors', sector: 'Residential', scope: [D, M, R, P],
    summary: 'A bold residence of dark timber, marble and sculptural lighting.' },
  { slug: 'arches-restaurant', client: 'Private client', year: '2022', title: 'Arches Restaurant', location: 'Saudi Arabia', country: 'Saudi Arabia', category: 'interiors', sector: 'Hospitality', scope: [D, M, R, P],
    summary: 'A restaurant of timber arches, hanging greenery and halo lights.' },
];

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
/** Countries across all my work on the CV, not only the projects on this site (Aya, 11 Nov): Iraq = Um Qasr Logistic City. */
export const countries = ['Egypt', 'Saudi Arabia', 'Oman', 'India', 'Iraq'];

export const contact = {
  email: 'ayahassanm@outlook.com',
  linkedin: 'https://www.linkedin.com/in/ayahassanm',
  linkedinLabel: 'linkedin.com/in/ayahassanm',
  instagram: 'https://www.instagram.com/ayahassanmr/',
  facebook: 'https://www.facebook.com/share/1CLSC4gxvc/',
  whatsapp: 'https://wa.me/201115318509', // the number is never printed on the site
};

/* ---------- project number: one canonical order, used by the work page, project pages and the PDF portfolio.
   Discipline (Architecture, Interiors) → category (Masterplan first, then by size) → featured first → newest. */
const byOrder = (a: Project, b: Project) => +!!b.featured - +!!a.featured || +(b.year ?? 0) - +(a.year ?? 0);
export const sectorGroups = (list: Project[]) => {
  const m = new Map<string, Project[]>();
  list.forEach((p) => m.set(p.sector, [...(m.get(p.sector) ?? []), p]));
  return [...m.entries()]
    .sort((a, b) => (+(b[0] === 'Masterplan') - +(a[0] === 'Masterplan')) || b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([sector, l]) => ({ sector, list: [...l].sort(byOrder) }));
};
export const disciplineOrder: Project['category'][] = ['architecture', 'interiors'];
export const ordered: Project[] = disciplineOrder.flatMap((c) => sectorGroups(projects.filter((p) => p.category === c)).flatMap((g) => g.list));
/* numbers restart per section: Architecture 01…, Interiors 01… (BIM section on the work page numbers its own list) */
const inSection = (slug: string) => { const p = projects.find((x) => x.slug === slug)!; return ordered.filter((x) => x.category === p.category); };
export const projectNo = (slug: string) => String(inSection(slug).findIndex((p) => p.slug === slug) + 1).padStart(2, '0');
export const sectionTotal = (slug: string) => String(inSection(slug).length).padStart(2, '0');

/* ---------- client logos (public/clients/<id>.png, official files supplied by Aya) */
const logoBySlug: Record<string, string> = {
  'sodic-ogami': 'sodic', 'sodic-east-vale': 'sodic', 'orascom-o-west': 'orascom', 'misr-italia-hilltop': 'misr-italia',
  'travco-west-island': 'travco', 'neom-oxagon': 'neom', 'stc-hq': 'stc', 'sabic-hq': 'sabic', 'jotun-office': 'jotun',
  'bmw-showroom': 'bmw', 'chery-showroom': 'chery', 'hb-fuller': 'hb-fuller', 'fifth-square': 'al-marasem',
  'mazeej': 'guira', 'linah-farms': 'linah', 'noatum-terminal': 'noatum',
};
export const clientLogo = (slug: string) => (logoBySlug[slug] ? `/clients/${logoBySlug[slug]}.png` : undefined);
