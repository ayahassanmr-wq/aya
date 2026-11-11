# Aya Hassan website — Claude Code instructions

Read `docs/HANDOVER.md` (copy of G:\Portfolio\Portfolio Projects\Aya_Hassan_Handover_v3.md) before any work. It is the single source of truth for brand, projects and status.

## Stack
- Astro 7, Archivo variable (@fontsource-variable/archivo) + Alexandria (Arabic). EN + AR (/ar/, RTL).
- Deployed on Vercel from GitHub ayahassanmr-wq/aya. Work branch: `rebrand-on-update`. `main` = live.

## Rules
- Brand: "Built as designed" (see handover §2) — motto "Bold on paper. Solid on ground." Visual identity unchanged: one typeface only, no new fonts, no gold, no blue.
- Copy: follow BRAND_VOICE.md (being rewritten from the Brand Strategy doc — until then handover §2 wins). First person, EN + AR in sync, never invent facts.
- Images: renders get the house grade (global.css); drawings get the drawing-sheet style ([slug].astro). Never add STC/SABIC real-tower photos.
- Project data lives in src/data/projects.ts (+ projects-ar.ts). Every project needs client + year.
- Images ≤2400 px wide JPG in src/assets/projects/<slug>/ (01 = cover, dNN = drawings).
- Videos: compress with ffmpeg to ~1080p H.264, CRF 26–28, -preset veryfast, ≤25 MB, plus a poster JPG; put in public/video/<slug>.mp4 and register in the `films` map.
- Use font longhands (font-family/font-weight/…) not the `font:` shorthand when setting font-stretch (Astro minifier drops it).
- Build (`npx astro build`) must pass before committing. Work on a branch; never push to main without Aya's OK.
- Commit messages: plain English, what changed for the visitor.

## After every session
Update docs/HANDOVER.md (Status board, Decisions log, Changelog) and tell Aya to copy it back to G:\Portfolio\Portfolio Projects\ (or write it there directly if running on her PC).

## Open tasks
See handover RESUME HERE and §7 TO DO.
