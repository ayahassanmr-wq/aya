# Aya Hassan — Portfolio Website

Astro static site. Brand: Brand Guidelines v1.0 (Cormorant Garamond + Jost, Oxblood / Off-white / Warm grey / Charcoal, one gold-foil touch in the hero).

## Run
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content
- Projects, roles, years, contact: `src/data/projects.ts`
  - `TBC` = still to confirm with Aya (shows highlighted on the site).
  - `nda: true` = NEOM / STC / SABIC — use published-portfolio images only.
  - AI-assisted concept images: set `tag: 'Concept exploration'`. Never label them as renders.
- Project images: `src/assets/projects/` (auto-optimised to WebP at build).
- Logo files: `public/brand/` (from Brand/Logo).

## Deploy (Vercel)
Push to GitHub → Vercel → New Project → import repo. Framework preset: Astro. No env vars needed.
