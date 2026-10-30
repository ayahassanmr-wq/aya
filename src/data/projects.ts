import type { ImageMetadata } from 'astro';
import stc from '../assets/projects/stc1.jpg';
import sabic from '../assets/projects/sabic.jpg';
import neom from '../assets/projects/neom.jpg';
import mall from '../assets/projects/mall1.jpg';
import fifth from '../assets/projects/fifth.jpg';
import sphinx from '../assets/projects/sphinx2.jpg';
import tech from '../assets/projects/tech1.jpg';
import res from '../assets/projects/res.jpg';

/** TBC = placeholder still to be confirmed by Aya; rendered with a visible highlight. */
export const TBC = 'TBC';

export type Category = 'architecture' | 'interiors';

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: Category;
  /** Label shown on the image. Use "Concept exploration" for AI-assisted concept imagery. */
  tag: string;
  image: ImageMetadata;
  alt: string;
  role: string;
  year: string;
  scale?: string;
  practice?: string;
  /** NDA-sensitive: only images already in her published portfolio. */
  nda?: boolean;
  wide?: boolean;
  /** Free-text notes still to confirm with Aya (shown highlighted). */
  confirm?: string;
}

export const projects: Project[] = [
  { slug: 'stc-hq', title: 'STC HQ Office Tower', location: 'Riyadh, Saudi Arabia', category: 'interiors', tag: 'Interiors', image: stc, alt: 'STC headquarters office corridor with violet upholstered niche', role: 'Concept design, 3D modelling, visualization, FF&E selection', year: '2024', scale: TBC, practice: 'ZFP', nda: true, wide: true, confirm: 'exact role and year' },
  { slug: 'sabic-hq', title: 'SABIC HQ Tower Renovation', location: 'Riyadh, Saudi Arabia', category: 'interiors', tag: 'Interiors', image: sabic, alt: 'SABIC headquarters lobby atrium with yellow planter bridges', role: 'Concept, 3D, material and FF&E sourcing', year: TBC, practice: 'ZFP', nda: true },
  { slug: 'neom-oxagon', title: 'NEOM Oxagon Public Service Buildings', location: 'NEOM, Saudi Arabia', category: 'architecture', tag: 'Architecture', image: neom, alt: 'Courtyard of a NEOM Oxagon public service building with brick volumes and glazing', role: '3D modelling, animation and promotional content; BIM lead on NEOM PSB interiors; design review on Misk Schools', year: TBC, practice: 'Cosmos Studio', nda: true },
  { slug: 'commercial-mall', title: 'Commercial Mall', location: 'Saudi Arabia', category: 'architecture', tag: 'Architecture', image: mall, alt: 'Aerial view of a commercial mall with a wave-form lattice roof', role: 'Concept design, modelling, rendering', year: TBC, scale: TBC, wide: true, confirm: 'city and role' },
  { slug: 'fifth-square', title: 'Fifth Square Commercial Complex', location: 'New Cairo, Egypt', category: 'architecture', tag: 'Architecture', image: fifth, alt: 'Fifth Square commercial complex at night with canopy terraces', role: '3D modelling, rendering, post-production, concept studies', year: TBC, practice: 'Cosmos Studio' },
  { slug: 'sphinx', title: 'Sphinx Business Building', location: 'Giza, Egypt', category: 'interiors', tag: 'Interiors', image: sphinx, alt: 'Formal reception salon with marble floor and leather armchairs', role: 'Interior concept, 3D, schematic and IFC drawing packages', year: '2022', practice: 'Cosmos Studio' },
  { slug: 'tech-park', title: 'Tech Park Office Building', location: 'Egypt · confidential client', category: 'interiors', tag: 'Interiors', image: tech, alt: 'Tech Park office lobby with white stair and orange accent walls', role: 'Concept, 3D, schematic package, material selection', year: TBC, practice: 'Cosmos Studio' },
  { slug: 'jeddah-residence', title: 'Jeddah Residence', location: 'Jeddah, Saudi Arabia', category: 'interiors', tag: 'Concept exploration', image: res, alt: 'Living room in a Jeddah residence with curved sofas and backlit stone wall', role: 'Interior design, visualization', year: TBC, confirm: 'render vs. concept exploration' },
];

export const contact = {
  email: 'ayahassanm@outlook.com',
  linkedin: 'https://www.linkedin.com/in/ayahassanm',
  linkedinLabel: 'linkedin.com/in/ayahassanm',
  basedIn: TBC,
};
