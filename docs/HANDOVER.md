# Aya Hassan — Master Handover (v3)

**Last updated:** 11 Nov 2026 (23:10) · **Supersedes:** Handover v1 (brand) and v2 (website). Where they disagree, this file wins.
**Lives at:** `G:\Portfolio\Portfolio Projects\Aya_Hassan_Handover_v3.md`

> **Rule for everyone (people, Claude chat, Claude Code):** read this file first. When you finish a session, update the sections you touched — Status board, Decisions log, Changelog — and bump the date. Never keep project knowledge only in a chat. One file, one truth.

---

## ▶ RESUME HERE — state at 11 Nov 2026, 23:10 (new session starts here)

**Repo:** GitHub `ayahassanmr-wq/aya` (Astro 7). **Live:** ayahassan.com = Vercel project `aya-hassan` (team `aya-d9cd`), builds from `main`.
**Branches:** `main` = live at **07659d5** (8 Nov). `rebrand-on-update` = everything since (10 Nov brief Parts 1–3, 24-project cleanup, all PDF work below) — **NOT live**. Push live only when Aya says so: check fast-forward, `git push origin rebrand-on-update:main`, confirm Vercel production READY. On push live also **add a Selected Works download link** on the site (/cv/ + About + Contact; CV PDF already links to `ayahassan.com/Aya_Hassan_Selected_Works.pdf`).
**Rules:** `CLAUDE.md` + `BRAND_VOICE.md` + this file. Brand = "Built as designed", motto "Bold on paper. Solid on ground." First person. Mid-senior everywhere. No 24-hour promise, nothing eager ("open to", hire buttons). STC in capitals. Never invent facts. No real-tower STC/SABIC photos. Misk Schools drawings confidential (text card). Phone only on CV.
**How Aya works:** one round of changes → rebuild → previews (screenshots) + PDFs → she replies. Keep replies short.

**Current deliverables (branch, `public/`):** `Aya_Hassan_Selected_Works.pdf` (97 pp, ~14 MB), `Aya_Hassan_Portfolio.pdf` (~46 MB), `Aya_Hassan_CV.pdf` (2 pp).

**PDF layout (all in `src/components/PrintBook.astro`, prop `full`):**
- Front: cover (Travco beach chalet render under heavy dark overlay; AYA | HASSAN; "{Selected Works|Portfolio} · month year"; big "Architect · Interior designer"; tagline; email · web · LinkedIn — no Instagram) → About (bio + employment list + 3 numbers) → Clients (logos) → Index (both PDFs; chosen order, sector per line) → Contents → section dividers.
- Sections: 01 Architecture, 02 Interiors, 03 BIM delivery (`bimSlugs` = NOATUM, Linah, Chery, Dry Port). Numbers restart 01→ in each section, in page order (no longer the site's projectNo).
- Selected Works architecture order (`selArch`): Travco, East Vale, Ogami, Staff Housing, DHIFAF, Misr Italia, O West, Fifth Square, Mazeej, Oxagon. Full Portfolio = same order, then the other architecture projects.
- Per project: **opener** (full-bleed cover render, strong faded overlay; big number + title bottom-left; right column: section · sector · role tag, Client = logo only, Location/Year/Status/Practice, Brief role line + summary + numbered points (`think` map), Scope) → each **study** full page (`studyNos`) → **plans** (`pack`: ONE scale per project, shelf-packed; `stackDef` Mazeej before-above-redesign pairs; `rowDef` Staff Housing d04+d05 side by side; `corr` fixes drawings exported at another scale — Chery d06 ×0.33) → remaining **renders** uncropped in justified rows (`jr`).
- Multi-building projects (`partsDef`): Travco = Chalet (renders 01–03, plans d01 GF, d02 upper) + Townhome (renders 04–06, plan d03), each with its own full render page, render rows and plans.
- Image quality: Selected Works widths bleed 1400 / half 950 / sheet 1400, JPEG q55 in `grade-print.py`; full Portfolio larger. Raise only if Aya accepts a bigger file.

**Open / waiting on Aya:**
- Push live (and Selected Works download link).
- Study boards: text inside them can't be retyped in Archivo without text-free exports (her source files). A recolour to house palette was tried and **reverted** at her request — keep originals.
- Missing logo: Suits Workspaces only (name shows instead). NOATUM logo added 11 Nov.
- Arabic copy/role lines need a native check. BIM sheets reminder 16 Nov. Design System preview branch `preview-design-system` undecided. Built-projects list (for "built" claims). Which Vercel project to keep.
- ✅ Closed 11 Nov 23:00: Travco keeps 6 renders; STC + Tech Park regraded from the git originals (burn/over-exposure fixed); no approval stamp anywhere.

### Tools/scripts in the repo
- PDFs: `npx astro build && python3 scripts/grade-print.py && (npx astro preview --port 4321 &) && node scripts/make-pdfs.mjs` → writes `public/Aya_Hassan_CV.pdf` + `public/Aya_Hassan_Portfolio.pdf` (from hidden pages `/print/cv/`, `/print/portfolio/`). Needs Chrome (`/usr/bin/google-chrome` or env CHROME) and `puppeteer-core` (devDependency).
- Project order + numbers: `ordered` / `projectNo` / `sectorGroups` in `src/data/projects.ts` (Architecture → Interiors; categories Masterplan first then by size; featured first, newest). Work page, project pages and portfolio all use it.
- Composite grids / brand recolour of studies were made with Python (PIL) in the session — results are committed as images; no script kept. Recolour rule: bone paper #F3EDE3, ink lines, oxblood #5E1A24 key layer, taupe open space; photos keep colour.

### History — 3 Nov (live then; partly superseded by 6–11 Nov decisions: no hero hire buttons, no 24-hour line)
- BRAND_VOICE items 5–10: "Ways to work with me" (Home + Services), contact Topic dropdown (pre-fills email subject), Studio support "Tight deadline?" callout, closing line "Have a concept, or a role to fill?", "About me" links, Arabic mirror checked.
- DHIFAF (Sallan Creek) third render replaced (district aerial). Modern Residence drawing set (4 plans, one grid).
- Bold project numbers on cards; distinct oxblood category headings on Work; portfolio uses same order + category headers in index.
- Hero buttons: Start a project · View the work · Hiring? See CV. New page `/cv/` (+ `/ar/cv/`): view/download CV and portfolio. Contact page rows for CV + Portfolio.
- PDFs regenerated with the new order (in `public/`).

### Aya's 3 Nov evening requests — ✅ LIVE (main = ff9e16f, 3 Nov 23:10)
1. Hero: "View the work" = oxblood with a soft pulse ring; "Start a project" + "Hiring? See CV" = identical bone buttons.
2. `/cv/` page has a "Get in touch" block (email with Job-opportunity subject, WhatsApp/LinkedIn/Instagram icons); contact page already has all contact info + CV & Portfolio rows.
3. Homepage project thumbnail strip (Reel) = drag/scroll, each tile clickable with its title (Reel `links` prop).
4. About hero: "Studio" removed; "Since 2019".
5. Project page order: cover render → studies (`studies: [n]` per project: Staff Housing [1,2], Sallan Creek [2], East Vale [1]) → other renders → drawings.
6. Juba scope = Modelling + Rendering (no Design).
7. New favicon / apple-touch-icon: "AH" Archivo 800 wide, bone on oxblood tile (public/favicon.svg|.ico, apple-touch-icon.png).
8. "Sheet A-000" removed from website hero and portfolio cover.
9. In numbers: Countries image = Travco render.
10. Practice since 2019 (freelance) → 7 years: home stat, hero "2019 —", About, portfolio, CV ("seven years", freelance 2019 — now), BRAND_VOICE.
11. Homepage typology marquee ("Tech campus" bar) removed.
12. CV + portfolio regenerated.
13. (22:48 batch) Hero buttons blend: Start + Hiring = translucent bone glass, View the work = translucent oxblood. Contact: 'What is it about?' + hint 'Pick one — it becomes the subject of your email.' New `HireNotes` component (3 highlights + Tools line) on /cv/ and /contact/; 'I typically reply within 24 hours.' under email. Jotun film live on project (public/video/jotun-office.mp4, 5 MB). Numbers restart per section (Architecture 01–16, Interiors 01–12, BIM section 01–04 on work page); portfolio matches.
**Push-live recipe: `git push origin rebrand-on-update:main` (fast-forward) → confirm Vercel production READY.**

### Parked / next after that
- BRAND_VOICE item 6 (My role / Team size) → one "Role" field = position · team size; code ready, hidden until filled; sheet `docs/ROLES_TODO.md`.
- Real contact form (e.g. Formspree) using the Topic dropdown.
- Two portfolio PDFs: freelance/collaboration vs full-time studio roles (proposed split in chat: ~12 projects each, built from site data).
- Shorter "Selected works" PDF (~15 projects) and a lighter (<25 MB) email version.
- Arabic copy needs a native-reader check (BRAND_VOICE Arabic, new labels).
- Reminders set: 4 Nov 11:00 (push live/PDFs) and 4 Nov 19:00 (pick close-up shots) — in the old account only.

---

## 0. How to use this file

| Section | What it holds | Who updates |
|---|---|---|
| 1 Profile | Who Aya is, career, contact | Rarely |
| 2 Brand | The decided identity and its rules | Only after a logged decision |
| 3 Image system | How every image must look | Only after a logged decision |
| 4 Website | Tech, structure, content rules | Claude Code / dev |
| 5 Projects | Project list with all metadata | Whoever edits projects |
| 6 Assets & files | Where things are on the G: drive | Whoever moves files |
| 7 Status board | DECIDED / NEEDS DECISION / ON HOLD / TO DO | Everyone, every session |
| 8 Decisions log | Dated record of choices and why | Everyone |
| 9 Strategy & business | Positioning, services, pricing, marketing | Strategy chat |
| 10 Roles & workflow | Who does what (chat vs Claude Code) | Aya |
| 11 Claude Code brief | Paste-ready instructions for the website | Aya / Claude Code |
| 12 Project instructions | Paste-ready instructions for the Claude Project | Aya |
| 13 Changelog | One line per session | Everyone |

Status tags used throughout: **✅ DECIDED · ❓ NEEDS DECISION · ⏸ ON HOLD · 🔧 TO DO**

---

## 1. Profile

- **Name:** Aya Hassan — architect & interior designer. **Based in Cairo, Egypt.**
- **Disciplines:** concept design, 3D modelling, rendering, animation, BIM (Revit), interiors, FF&E.
- **Work:** luxury homes, coastal developments and corporate headquarters across Egypt and the Gulf. Most projects are built.
- **Career (✅ final wording):**

| Years | Role | Studio |
|---|---|---|
| 2019 – now | Freelance architect & interior designer | Freelance (selected commissions) |
| 2020 – 2023 | Design Architect / Interior Designer | Cosmos Studio |
| 2024 | Design Architect / Interior Designer | ZFP (Zuhair Fayez Partnership) |
| 2025 | Mid-senior Design Architect / Interior Designer | Cosmos Studio |
| 2026 – now | Mid-senior Design Architect | Innovation Design Studio |

- Education: B.Sc. Architectural Engineering, Future University in Egypt (2014–2019).
- Contact: ayahassanm@outlook.com · Instagram @ayahassanmr · LinkedIn /in/ayahassanm · WhatsApp +20 111 531 8509.
- Computer: Windows; work files on the **G:** drive. Prefers static images over interactive canvases unless asked. Keep it efficient.

---

## 2. Brand — "Built as designed" (✅ DECIDED, 5 Nov 2026; evolved from "Approved" the same day)

> "One Hand" and "From concept to conviction" are **retired** (5 Nov). The blue "Architecture, cut open" concept is also retired. The visual identity below (§2.1–2.3) and the image system (§3) are unchanged. Full strategy: Claude Doc "Aya Hassan — Brand Strategy".

**Core idea:** an idea only counts once it stands on real ground. Aya carries it from the first sketch through approval to a built place, without losing what made it original. Approval is the step in between; the built place is the result.

- **Motto:** *Bold on paper. Solid on ground.* · جريئة على الورق، راسخة على الأرض
- **Short line:** *Designed to be built.* · صُمّم ليُبنى
- **Positioning:** Architect and interior designer for luxury homes, coastal developments and corporate headquarters across Egypt and the Gulf. Original ideas, built as designed.
- **Emphasis:** the coast leads (named first, leads Work/portfolio/social); inland luxury homes and corporate HQs are named alongside. Not "early stage" / "concept architect".
- **About (final):** I design architecture and interiors that begin as an original idea and end as a built place. Concepts that surprise, details that work on site: homes on Egypt's coast, luxury residences inland, and corporate headquarters from Cairo to Riyadh.
- **Two doors:** *Hire me* (studios/employers → CV) and *Work with me* (developers, private clients, studios → projects/support). Never mixed in one sentence. Freelance shown as "selected commissions". Studio support = "concept and design support for studios".
- **Personality:** assured, precise, calm luxury, generous with credit. Reserved in public, warm one-to-one.
- **Voice:** polished restraint, backed by precise fact. Art + precision: one sensory line, then one exact line. Headlines restrained; body copy natural and slightly soft; numbers kept; no "I love"; no hedging (quite, a bit, super) in public. First person everywhere.
- **Convictions (all six ✅):** form and function in agreement · buildable is part of beautiful · the route to yes · honest images with atmosphere · luxury is everything agreeing · on the coast, the site writes the brief.
- **Marketing words** (unique, stunning, luxury, reimagined…): developer-facing marketing only (Instagram captions, launch posts); never on site, CV, portfolio.
- **Arabic:** simple modern Fusha for written materials (site, CV, portfolio, LinkedIn); light Egyptian touch OK on Instagram stories and WhatsApp.
- **Closing CTA:** Every good project starts with a conversation. Send me yours. · كل مشروع جيد يبدأ بحديث. أرسل لي فكرتك. (No reply-time promise — ✅ 11 Nov.)

### 2.1 Typography
- **One typeface only: Archivo** (variable, with width axis) for Latin. Contrast comes from weight and width, never a second font.
  - Headlines: Archivo 800–900, width 112–125%, tight tracking (−0.02 to −0.035em).
  - Accent words: Archivo 200–300 *italic*, width 100%.
  - Labels: Archivo 400–500, 10–12px, uppercase, tracking 0.18–0.24em.
- **Arabic: Alexandria.**
- Retired: Cormorant Garamond, Jost, Syne, Instrument Serif, JetBrains Mono.

### 2.2 Colour
| Token | Hex | Use |
|---|---|---|
| Off-white (bone) | `#F3EDE3` | Base background |
| Ink | `#2B2826` | Text |
| Night | `#201C1B` | Dark sections |
| Oxblood | `#5E1A24` | Primary accent |
| Oxblood light | `#B8394A` | Small marks (logo dot) |
| Sand | `#D6CBBE` | Accent on dark |
No gold anywhere.

### 2.3 Identity elements
- **Wordmark (nav/header):** `AYA | HASSAN` — Archivo 800, width 125%, one line, thin vertical divider.
- **Hero name:** "AYA HASSAN" on one line: the intro's dimension ruler (end ticks, draws out from centre) labelled "Architect · Interior designer" above, the name, then an unruled info row: motto · Based: Cairo, EG · Practice: 2019 —. No stamp, no table lines (✅ 3 Nov); dimension ruler kept, same as intro.
- **Approval stamp:** ❌ retired everywhere — hero, intro, PDFs, footer (✅ 11 Nov).
- **Intro screen:** dimension line draws out → name rises → title block wipes in → screen parts onto the hero (~3 s, skippable, off with reduced motion).
- **Footer:** big `AYA | HASSAN` wordmark (Archivo 800/125%) fades in — old AYA sprite logo retired (✅ 3 Nov).
- **Recurring devices:** sheet numbers (A-001…), project codes (01.01, 01.02), hairline rules, dimension strings.
- ❌ Rejected: sketch-to-render drag slider (looked bad), scribbled underline through the name, two-line AYA/*Hassan* stacked wordmark.

---

## 3. Image system — the "house look" (✅ DECIDED)

**Goal:** every project looks like it came from the same brain.

- **Renders:** one grade on the site — `sepia(.14) saturate(.86) contrast(1.05) brightness(1.01)`: warm sand highlights, slightly matte blacks, quieter greens/blues.
- **Drawings, plans, elevations, BIM captures, diagrams (✅ 3 Nov):** recoloured *in the files* to the brand palette — gradient map: near-black ink `#1A1615` linework → warm graphite → sand fills → bone `#F3EDE3` background (no white). Shown at natural proportions on a bone sheet with soft shadow against the night section, oxblood hairline + sheet number (A-001…). New drawings must get the same gradient map before upload (script in the 3 Nov commit / ask Claude).
- **Shaded BIM/3D model views:** soft ink→bone duotone with lifted shadows (not the line-drawing map). **Presentation boards with renders** (Fifth Square, Linah concept, Ogami, Travco boards): full colour, only white paper swapped to bone.
- **Project page extras (✅ 3 Nov):** cover render repeated uncropped at the top of Visuals. Auto close-up Details section ❌ removed — Aya will hand-pick close-ups (see TO DO).
- **For future renders (guidance):** one signature light hour (warm late-afternoon "Cairo 5 pm"), camera height ~1.2 m, 35 mm interiors, verticals always corrected, consistent entourage (neutral, slightly blurred people; one plant family), fine grain at fixed strength, crops 4:5 and 21:9 only.
- **Coloured diagrams/studies (✅ 3 Nov):** recoloured to brand — bone paper, ink lines, oxblood key layer, taupe open space (Staff Housing studies). Photos/renders keep colour. Several related sheets are combined into one labelled grid (Archivo labels) instead of many full pages.
- **Old/dated renders:** regrade (muted water, olive greens, haze, S-curve, vignette) — done for Sallan Creek.
- **Exclusions:** STC and SABIC folders contain photos of the real towers — never on the site.
- **STC + Tech Park (✅ 11 Nov):** regraded from the pre-edit originals (git `efc315b^`): burnt corners lifted, highlights held, neutral colour, slightly less saturation. Juba removed from the site.

---

## 4. Website

### 4.1 Tech
- **Repo:** GitHub `ayahassanmr-wq/aya` · **Astro 7** · fonts via `@fontsource-variable/archivo`.
- **Hosting:** Vercel team "AYA". Three Vercel projects (`aya`, `aya-hassan`, `ayahassan`) build the same repo → 🔧 keep one, delete two.
- **Domain:** ayahassan.com · bilingual EN + AR (`/ar/`, RTL).
- **Branches:**
  - `main` — live site (07659d5, 8 Nov).
  - **`rebrand-on-update` — work/preview branch**, ahead of main since 8 Nov (see RESUME HERE).
  - `preview-design-system` — undecided.
  - `update-projects-from-folder`, `rebrand-one-hand` — obsolete, delete.
- **Latest preview:** https://aya-hassan-hqfj52wzr-aya-d9cd.vercel.app (Vercel login). Newer builds appear per push.

### 4.2 Where things are edited
| What | File |
|---|---|
| Projects data (title, client, year, scope, category, sector) | `src/data/projects.ts` |
| Arabic project text | `src/data/projects-ar.ts` |
| Project images | `src/assets/projects/<slug>/` — `01.jpg` cover, `NN.jpg` renders, `dNN.jpg` drawings |
| Global styles, tokens, house grade | `src/styles/global.css` |
| Homepage (hero title block, sections) | `src/pages/index.astro` |
| Work page (3 disciplines → type groups) | `src/pages/work/index.astro` |
| Project page (title block, client row, drawing sheets) | `src/pages/work/[slug].astro` |
| Intro animation | `src/components/Intro.astro` |
| Nav logo | `src/components/Header.astro` |
| About/timeline | `src/pages/about.astro` |

### 4.3 Site structure (✅ DECIDED)
- **Home:** intro → hero → **client logo strip** → intro statement → numbers → selected work → services → contact. Client wall (✅ 3 Nov, reverses the earlier 'no client names on homepage' rule): two scrollable rows directly under the hero, drifting in opposite directions ("Trusted by"): official full-colour logos (`public/clients/<id>.png`, cut from Aya's logo sheet 3 Nov), always drifting (keeps moving on hover; pauses ~2.5 s only after a manual scroll), drag/wheel/swipe/arrow keys to scroll, each links to its project. Suits has no logo yet → typed name (NOATUM logo added 11 Nov). Confidential and private clients excluded.
- **Work:** Masterplan group always first (Sallan Creek, Staff Housing); project numbers also start with masterplans. Opens on **three disciplines** — *Architectural design*, *Interior design*, *BIM & technical*. Choosing one shows its projects grouped by type (Residential, Workplace, Commercial…), numbered 01.01, 01.02…
- **Project page:** big project number (01–28, same as the PDF portfolio; order = Architecture then Interiors, featured first, newest first — `ordered`/`projectNo` in projects.ts) above the title; title block with Location · Discipline · Practice · **Client (with logo)** · **Year** · Scope (+ optional scope note) → renders → drawing sheets → client links.
- **About:** timeline (section 1), bio, tools.
- Client names: allowed on project pages (Client row + links) and in the homepage client wall.

### 4.3b PDFs (✅ 3 Nov; superseded 11 Nov — see RESUME HERE for the current layout)
- **Portfolio** `public/Aya_Hassan_Portfolio.pdf` — A4 landscape, ~71 pages, ~28 MB: cover (title block), about + timeline + numbers, client logos, index with page numbers, Architecture / Interiors dividers, per project: opener (cover + title block), renders page, drawings page; contact back cover.
- **CV** `public/Aya_Hassan_CV.pdf` — A4 portrait, 2 pages. ✅ 5 Nov: new copy + Archivo layout approved (preview `cv-reference.html`); brief `CLAUDE_CODE_BRIEF_CV.md` to rebuild `/print/cv/`. Phone/WhatsApp IS shown on the CV (overrides rule below).
- Both are generated from hidden pages `/print/portfolio/` and `/print/cv/` (noindex) using the site data, so they update with the site. Rebuild: `npx astro build && python3 scripts/grade-print.py && (npx astro preview --port 4321 &) && node scripts/make-pdfs.mjs`, then commit the PDFs.
- Downloads: both buttons on the About page.
- Portfolio cover carries a clickable contact row (email, website, LinkedIn, Instagram).
- All links clickable in both PDFs (contacts, website, project pages, client links; portfolio index jumps to each project).
- CV-only project scopes are assumed from the old CV — ❓ confirm: Um Qasr (Modelling, Animation), Zamalek Club (✅ Modelling, Rendering, Animation), Sharm El Sheikh Tower Hotel (Design, Modelling, Rendering), Estadat / SIAC / One 90 / NEOM PSB interiors (BIM), Misk Schools (Review).
- Phone/WhatsApp: shown on the CV (Aya, 5 Nov); not printed on the portfolio.
- Portfolio project openers: big project number + client logo. CV: experience grouped by employer, in a senior/leadership voice (led, authored, delivered, coordinated) naming each project and Aya's role — ✅ 'Introduced AI-assisted post-production' confirmed (10 Nov) (project names link to the site; no tables or scope chips), incl. CV-only projects from the old CV: Zamalek Club, Sharm El Sheikh Tower Hotel, Um Qasr Logistic City, Estadat City Club Complexes, SIAC Office Building, One 90 Retail, Misk Schools (NEOM) — Cosmos 2020–23. Freelance start year ✅ 2019 (5 Nov).

### 4.4 Content rules
- Every project must have **client** and **year** (no "—").
- Fifth Square scope note: *"Design: the canopy. Modelling and rendering: the whole building."*
- Max **5 renders** per project, best first (cover). Drawings/plans/BIM sheets are extra. Exception: Travco West Island = 6 (Chalet 3 + Townhome 3, ✅ 11 Nov).
- Images on site are capped at 2400 px (displayed ≤2000 px); larger originals are not needed.
- Videos must be compressed (≈10–25 MB, 1080p) or embedded from YouTube/Vimeo.
- Project text: tell the decision (art + precision), e.g. "The land falls toward the sea, so we let the villas fall with it. Each one steps down eleven metres, and every terrace keeps the horizon." Never invent facts.

---

## 5. Projects (current list on `rebrand-on-update`)

| Slug | Title | Discipline | Practice | Client | Year | Notes |
|---|---|---|---|---|---|---|
| misr-italia-hilltop | Misr Italia Hilltop | Arch | Innovation | Misr Italia Properties | 2026 | Featured, hero slide 1 |
| sodic-ogami | SODIC Ogami | Arch | Innovation | SODIC | 2026 | + ground floor plan |
| sodic-east-vale | SODIC East Vale · Premium Home | Arch | Innovation | SODIC | 2026 | Aya designed the premium home only (two stacked units). MADA City, New Cairo. 3 renders + form generation + GF 202.6 / FF 194.3 / roof 184 m² plans |
| travco-west-island | Travco West Island | Arch | Innovation | Travco Properties | 2026 | Chalet + Townhome; 6 renders (exception) |
| sallan-creek | Sallan Creek (DHIFAF) | Arch / Masterplan | Cosmos | North Al Batinah Governor’s Office | 2025 | Oman; Aya: masterplan refinement, 3D model, renders, presentation; 4 regraded aerials + masterplan strip + look & feel grid |
| staff-housing | Staff Housing Community | Arch / Masterplan | Innovation | Confidential developer | 2026 | From the Orascom Workers Housing (El Gouna) proposal — client & location anonymised (shown as Egypt); featured (No. 02); Option 01 only; 3 renders + 11 sheets |
| orascom-o-west | Orascom O West Midyard | Arch | Innovation | Orascom Development | 2026 | 2 images only |
| stc-hq | STC HQ Office Tower | Interior | ZFP | STC | 2024 | NDA; no real-tower photos |
| sabic-hq | SABIC HQ Renovation | Interior | ZFP | SABIC | 2024 | NDA; no real-tower photos |
| neom-oxagon | NEOM Oxagon Public Service | Arch | Cosmos | NEOM | 2023 | |
| fifth-square | Fifth Square Commercial Complex | Arch | Cosmos | Al Marasem | 2025 | Canopy-design note |
| chery-showroom | Chery Showroom & Admin | Arch/BIM | Cosmos | Chery Egypt | 2025 | |
| noatum-terminal | NOATUM Automotive Terminal | Arch/BIM | Cosmos | NOATUM | 2025 | Logo added 11 Nov |
| linah-farms | Linah Farms | Arch/BIM | Cosmos | Linah Farms | 2025 | Keep even though not in folder; renders need upscale |
| mazeej | Mazeej Hotel & Housing | Arch | Cosmos | Guira Developments | 2025 | |
| dry-port | Dry Port Buildings | Arch/BIM | Cosmos | Egyptian Government | 2021 | |
| tech-park | Tech Park Office Building | Interior | Cosmos | Confidential | 2023 | Renders regraded 11 Nov |
| jotun-office | Jotun Office Building | Interior | Cosmos | Jotun | 2023 | Animation live on project page |
| hb-fuller | HB Fuller Office | Interior | Cosmos | H.B. Fuller | 2022 | |
| sphinx | Sphinx Business Building | Interior | Cosmos | Confidential | 2022 | |
| conference-room | Formal Conference Room | Interior | Cosmos | Confidential | 2022 | |
| bmw-showroom | BMW Showroom | Interior | Cosmos | BMW Egypt | 2022 | |
| suits-workspaces | Suits Workspaces | Interior | Freelance | Suits Workspaces | 2025 | |
| modern-residence-new-cairo | Modern Residence | Interior | Freelance | Private client | 2025 | |

**Removed (✅):** Juba Resort, Minimal Villa, Arches Restaurant, Zayed Residence (11 Nov), Mediterranean House (3 Nov), Blue Villa (3 Nov), Classic House (folder deleted 2 Nov), Modern Villa, Apartment Building, Concept Sketches, Jeddah Residence (+ earlier: Studio K, HK Inc, Commercial Mall, Modern Villa I, Majlis, Jubail, Sea Residence, Neo-Classical Residence, Modern Residence II).

---

## 6. Assets & files (G: drive)

- **Master archive:** `G:\Portfolio\Portfolio Projects\<Employer>\<Project (Location)>\` — project PDF + `Images\` (`Project (Location) - 01.ext`). Jotun folder is spelled "Juton".
- **Master portfolio PDF:** `G:\Portfolio\Portfolio Projects\Arch Portfolio.pdf` (InDesign source in `G:\Portfolio\Final Portfolio\`).
- **Brand concepts (old blue direction, archived):** `G:\Portfolio\Portfolio Projects\_Brand Concepts\`.
- **Videos folder:** `G:\Portfolio\Portfolio Projects\_Videos\` — created, **empty** (copy pending, see 7).
- **Video sources:**

| File | Project | Size |
|---|---|---|
| `G:\Portfolio\ANIM\Juba Animation.mp4` | Juba | 158 MB |
| `G:\Portfolio\ANIM\FULL ANIMATION\JOTUN ANIMATION.mp4` | Jotun | 402 MB |
| `G:\Portfolio\ANIM\FULL ANIMATION\20221114-JOTUN ANIMATION_Update.mp4` | Jotun (newer) | 401 MB |
| `G:\Portfolio\Cosmos\Interior\Sphinx Airport\Animation\01-New Classic 4K.mp4` | Sphinx Airport | 810 MB |
| `G:\Portfolio\Cosmos\Interior\Sphinx Airport\Animation\02-New Pharonic 4K.mp4` | Sphinx Airport | 753 MB |
| `G:\Portfolio\Cosmos\Exterior\01_shebeen\city club_1.mp4` | City Club (Shebeen) | 357 MB |
| `G:\Portfolio\ANIM\Render 01.mp4` | Unknown | 217 MB |
| Dry Port | only After Effects projects (`G:\Portfolio\ANIM\DRY\*.aep`), no export | — |

- **PowerShell to copy videos into `_Videos`** (Aya runs it; copies, does not move):
```powershell
$dst = "G:\Portfolio\Portfolio Projects\_Videos"
New-Item -ItemType Directory -Force $dst | Out-Null
$files = @{
 "G:\Portfolio\ANIM\Juba Animation.mp4" = "Juba Resort - Animation.mp4"
 "G:\Portfolio\ANIM\FULL ANIMATION\JOTUN ANIMATION.mp4" = "Jotun Office - Animation.mp4"
 "G:\Portfolio\ANIM\FULL ANIMATION\20221114-JOTUN ANIMATION_Update.mp4" = "Jotun Office - Animation (2022 update).mp4"
 "G:\Portfolio\Cosmos\Interior\Sphinx Airport\Animation\01-New Classic 4K.mp4" = "Sphinx Airport - New Classic 4K.mp4"
 "G:\Portfolio\Cosmos\Interior\Sphinx Airport\Animation\02-New Pharonic 4K.mp4" = "Sphinx Airport - New Pharaonic 4K.mp4"
 "G:\Portfolio\Cosmos\Exterior\01_shebeen\city club_1.mp4" = "City Club (Shebeen) - Animation.mp4"
 "G:\Portfolio\ANIM\Render 01.mp4" = "Unnamed - Render 01.mp4"
}
foreach ($f in $files.Keys) { Copy-Item -LiteralPath $f -Destination (Join-Path $dst $files[$f]) }
```
- **Technical limits learned:** Claude's link to the PC can pull files ≤400 MB and write files ≤30 MB; large videos time out — run local commands (PowerShell / Claude Code on the PC) for big files. File Explorer control is click-only.

---

## 7. Status board

### ✅ DECIDED
- **Brand "Built as designed" (5 Nov; evolved from "Approved")** replaces "One Hand": motto "Bold on paper. Solid on ground.", short line "Designed to be built.", positioning, two doors, personality, voice, six convictions, About copy, messaging — see §2 and the Brand Strategy doc.
- Markets: Egypt + Gulf; coast leads, inland luxury homes and corporate HQs named alongside. Known for original ideas, approved and built as designed.
- Freelance shown publicly as "selected commissions"; studio support = "concept and design support for studios".
- Public voice: headlines restrained, body copy natural; numbers kept; no "I love"; no hedging. Marketing words only in developer-facing marketing.
- Arabic: Fusha for written materials; light Egyptian touch on stories/WhatsApp.
- Practice since 2019 (freelance) — 7 years.
- One typeface: Archivo (+ Alexandria for Arabic).
- Hero = one-line name as drawing title block; new title-block intro; `AYA | HASSAN` nav logo.
- House grade for renders; drawing-sheet treatment for drawings/BIM.
- Work page = 3 disciplines → grouped by type.
- Every project shows Client + Year.
- Based in Cairo, Egypt. Career timeline per section 1.
- Removed projects per section 5.
- STC/SABIC real-tower photos never on site.
- Modern Villa 02 (KSA) stays off the site even though its folder remains on G:.
- Max 5 renders per project (best picks; first = cover). Drawings/plans not counted. Travco = 6 (exception).
- No approval stamp anywhere (11 Nov).
- Title Mid-senior everywhere; no reply-time promise anywhere; no "open to / available" lines.
- Hero: no stamp, no table lines.
- Drawings recoloured to brand palette (ink lines, bone background); BIM model shots light duotone; cover shown uncropped; client wall in client brand colours; footer = AYA | HASSAN wordmark.
- Project Scope strip shows only the disciplines actually done (no greyed-out ones).

### ❓ NEEDS DECISION (Aya)
00c. **Built projects list:** which projects are built / under construction (for accurate "built" claims in case studies)?
0. **Missing logo:** Suits Workspaces (send file). NOATUM ✅ added 11 Nov. STC/SABIC/NEOM logos are shown — Aya supplied them, treated as approved.
1. **Push live** `rebrand-on-update` → `main` (+ Selected Works download link on /cv/, About, Contact).
2. **Which Vercel project to keep** (`aya`, `aya-hassan`, `ayahassan`) and delete the other two.
3. **Video edits wanted:** web cuts (30–60 s) / Instagram reels / one showreel / logo & titles / compression only?
4. **Sphinx Airport & City Club animations:** add as new projects, attach to existing Sphinx page, or keep off site?
5. **"Render 01.mp4":** what project is it?
6. **Jotun animation:** use original or 2022 update?
9. **Project page client links:** add official Instagram/Facebook for all clients (partly done in v2).
9b. **Ogami plan source** — the supplied export is a flat colour fill with no walls/furniture; Aya to send the original plan (PDF/CAD/hi-res).
10. **Missing views:** export more renders for Orascom O West (2), Misr Italia (4), SODIC East Vale (3)?

### ⏸ ON HOLD
- **Video editing** — blocked until videos are reachable (PC on & awake, or uploaded to Google Drive + connector, or Claude Code run locally on the PC).
- **Copying videos into `_Videos`** — Aya to run the PowerShell above.
- **Linah Farms re-render / upscale.**

### 🔧 TO DO (next actions, in order)
000. 🟡 (11 Nov: Parts 1–4 done on `rebrand-on-update` incl. Selected Works; awaiting Aya's 'push live') **Claude Code: apply `CLAUDE_CODE_BRIEF_NOV10.md`** (brand copy EN+AR, role/tag/status fields, CV rebuild per `cv-reference.html`, portfolio fixes, new Selected Works PDF). Supersedes 00, 02, 0c and 6a below.
01. **Rewrite BRAND_VOICE.md** from the Brand Strategy doc (strategy chat), then copy into the repo.
03. **Instagram / LinkedIn bios** → short and 25-word versions from the doc.
0e. **Two portfolio PDFs** — one for freelance/collaboration (Door B) and one for full-time studio jobs (Door A). Scope to agree with Aya.
0d. **Contact form** — add a real form (e.g. Formspree free tier) using the existing Topic dropdown (Job opportunity / Project / Studio support).
0b. Aya: review the three PDFs (CV, Selected Works, Portfolio), then say "push live".
0. Aya: hand-pick close-up/detail crops per project (auto Details section removed 3 Nov) — send picks, Claude builds the section.
2. Aya: run PowerShell to fill `_Videos`; keep PC awake or upload to Drive.
4. Claude Code: delete two duplicate Vercel projects (after decision #2).
5. Strategy chat: service menu & pricing, launch plan (section 9). Brand strategy, design system and brand book ✅ done 5 Nov.
6a. Reminder 16 Nov: collect BIM sheets for the 03 BIM delivery section.
6b. Aya: check ZFP contract for SABIC/STC NDA limits.
6. Aya: review the Brand Book; export a PDF for collaborators/printers; Arabic slide needs a native-reader check.
7. Social profiles (Instagram/LinkedIn) re-skin to the brand.

---

## 8. Decisions log

| Date | Decision | Why / note |
|---|---|---|
| 2026-11-02 | Brand = "One Hand" (oxblood/bone, Archivo) replaces blue "cut open" | Aya chose the chat concept |
| 2026-11-02 | Based in Cairo (not Riyadh) | Fact correction |
| 2026-11-02 | Single typeface | "Too many fonts" |
| 2026-11-02 | Name hero = title block, one line | Two-line stack looked random |
| 2026-11-02 | Drop sketch-to-render slider | Looked bad |
| 2026-11-02 | Work page opens on 3 disciplines | Aya request |
| 2026-11-02 | Remove Modern Villa, Apartment Bldg, Sketches, Jeddah Residence | Aya request |
| 2026-11-02 | Client + year on all projects; Fifth Square canopy note | Aya request |
| 2026-11-02 | Don't swap in larger originals | Site caps at 2400 px; no visible gain, slower |
| 2026-11-03 | BRAND_VOICE checklist items 1–5, 7–10 done (item 6 parked); studio support = 'Tight deadline?' callout, no fixed turnaround | Aya |
| 2026-11-03 | First person in all copy (EN + AR); BRAND_VOICE.md is the copy rulebook | Aya |
| 2026-11-03 | Sallan Creek (DHIFAF) added; masterplan group first; Sphinx out of BIM; Mediterranean House removed | Aya request |
| 2026-11-03 | Staff Housing Community published (anonymised El Gouna workers housing), featured No. 02 | Aya approved preview |
| 2026-11-03 | East Vale = premium home only; no interiors | Aya: only designed the premium home |
| 2026-11-03 | Wide drawings span full width on project pages | Fix dark gaps |
| 2026-11-03 | NOATUM = team collaboration; Fifth Square wording generic; no animation for NEOM Oxagon (scope fixed site-wide); Zamalek Club = modelling, rendering, animation | Aya correction |
| 2026-11-03 | CV tone: senior, leadership and teamwork language; profile rewritten | Aya request |
| 2026-11-03 | CV experience rewritten as human sentences; contact row on portfolio cover | Aya: tables looked robotic |
| 2026-11-03 | Remove Blue Villa | Aya request |
| 2026-11-03 | CV projects as tables with scope; all PDF links clickable | Aya: list looked random |
| 2026-11-03 | Big project numbers + client logos on project pages and PDF; CV grouped by employer with old-CV projects added | Aya request |
| 2026-11-03 | PDF portfolio + CV generated from the site, downloadable on About | Aya: for offline clients |
| 2026-11-03 | Client strip → two rows, opposite drift; motion fixed for scaled displays / reduced-motion | Aya: bar wasn't moving |
| 2026-11-03 | Hero keeps the intro's dimension ruler | Aya request |
| 2026-11-03 | Remove cursor 'A' monogram spotlight | Old brand pattern |
| 2026-11-03 | Official client logos; strip moved under hero, scrollable | Aya supplied logos; wants clients prominent |
| 2026-11-03 | Go live: `rebrand-on-update` → `main` | Aya approved |
| 2026-11-03 | Remove auto close-up Details; Aya picks manually | Aya request |
| 2026-11-03 | Scope shows done disciplines only | Aya request |
| 2026-11-03 | Client wall in client brand colours | Aya request |
| 2026-11-03 | BIM model shots: light duotone; colour boards kept in colour | Line-map made them very dark |
| 2026-11-03 | Drawings recoloured to palette in the image files; bone background, ink lines | Aya: drawings must blend with brand |
| 2026-11-03 | Client wall on homepage | Aya request (reopens typologies-only rule) |
| 2026-11-03 | Cover repeated uncropped; Details close-up section | Aya request — avant-garde detail shots |
| 2026-11-03 | Footer logo → AYA \| HASSAN wordmark | Old sprite logo off-brand |
| 2026-11-03 | Remove stamp + title-block lines from hero (and intro) | Aya: weird / unneeded |
| 2026-11-03 | Max renders per project 4 → 5 | Aya request |
| 2026-11-03 | Drawings: full-colour bone presentation sheets, replacing grayscale multiply | Old look was washed-out and out of place |
| 2026-11-02 | Homepage uses typologies; client names on project pages | Aya: don't headline clients under her name |
| 2026-11-05 | Brand idea "Approved" replaces "One Hand"; motto "From first idea to approved design." (superseded same day, see below) | "One Hand" read as working alone and undersold her to employers; "conviction" was abstract |
| 2026-11-05 | Positioning: luxury homes, coastal developments and corporate HQs across Egypt and the Gulf; coast leads, others named | Aya: coastal focus, but much non-coastal residential and HQ work |
| 2026-11-05 | Emphasis = original ideas, built as designed (most projects built); not "early stage" / "concept architect" | Aya: early stage limited her |
| 2026-11-05 | Two doors (Hire me / Work with me); freelance public as "selected commissions"; studio support = concept and design support | Serve employers and clients without conflict |
| 2026-11-05 | Personality reserved in public, warm one-to-one; voice = polished restraint + precise fact; art + precision formula | Voice Q&A + two real emails |
| 2026-11-05 | Public body copy ~softer and natural; headlines restrained; no "I love"; numbers kept ("24 hours"); no hedging | Aya: "I love" childish; numbers more affirmative |
| 2026-11-05 | Six convictions approved | Aya |
| 2026-11-05 | About final: "begin as an original idea and end as a built place…" (EN + AR) | Aya: concise, art + precision, wow + built |
| 2026-11-05 | Arabic: Fusha for written materials; light Egyptian touch on stories/WhatsApp | Aya |
| 2026-11-05 | Marketing words allowed only in developer-facing marketing | Aya |
| 2026-11-05 | Freelance practice since 2019 | Fact confirmed |
| 2026-11-05 | Brand idea evolved: "Approved" → "Built as designed"; motto "Bold on paper. Solid on ground."; short line "Designed to be built." Updated in strategy doc, design system, brand book, CV | Aya: built is the stronger story; approval is only a step |
| 2026-11-05 | Motto → "Bold on paper. Solid on ground." · «جريئة على الورق، راسخة على الأرض» (brand idea "Built as designed" and short line "Designed to be built." stay) | Aya: more creative and catchy; art + precision in one line |
| 2026-11-10 | Project roles corrected and recorded (Project Stories doc): Misk Schools = led team of 5 (BIM LOD 300); Oxagon PSB = modelling/renders/code review (CV had wrongly credited PSB BIM lead); Misr Italia & Sallan Creek = visualisation (+ design development / masterplan refinement); Travco, East Vale sole designer; Staff Housing lead, team of 3; SABIC led concept; STC originated concept. Title = Mid-senior. Juba removed. Cosmos 2025 = rejoined. No Gulf requirements on CV for now | Recruiter/design-manager review, Aya's answers |
| 2026-11-10 | CV final pass: HB Fuller, Sphinx, Jotun = BUILT (site visits, construction support); Skills line replaces Key focus areas (design development, BIM LOD 300, code compliance, consultant coordination, site visits…); 2020–23 tightened; AI post-production confirmed; STC in capitals | Aya answers |
| 2026-11-06 | Homepage: no availability line, no 'Start a project' / 'Hiring?' buttons, no 'Ways to work with me' (Services only) | Aya: don't look eager for work |
| 2026-11-07 | About: no Experience & education section, no Education in header; homepage cards unnumbered; footer button 'Get in touch'; footer line 'Architect & Interior Designer · Cairo'; no 'open to / available' lines anywhere | Aya: confident, not desperate |
| 2026-11-11 | Title Mid-senior everywhere (site, portfolio, CV) — reverses 8 Nov 'Senior on site' | Aya, answering the 10 Nov brief |
| 2026-11-11 | Project opener = one page: full-bleed cover under strong overlay; number + title left, all info right; client shown by logo only | Aya |
| 2026-11-11 | Drawings: one scale per project; plans combined where they fit; Chery 3 elevations one sheet; Mazeej before above redesign; Staff Housing plans side by side | Aya |
| 2026-11-11 | 03 BIM delivery = NOATUM, Linah, Chery, Dry Port, numbered 01–04 on its own; Misk Schools text card follows | Aya |
| 2026-11-11 | Travco = Chalet + Townhome (Aya designed both); CV + role line updated; client 'Travco Properties' | Aya |
| 2026-11-11 | Renders in PDFs never cropped (justified rows); BMW led by the hanging-unit render (site cover too) | Aya |
| 2026-11-11 | Study boards keep original colours (house-palette recolour rejected) | Aya |
| 2026-11-11 | No Instagram in PDFs; employment list back on About; index in both PDFs; Selected Works may be ~14 MB for sharper images | Aya |
| 2026-11-11 | Mazeej: all 5 renders cropped to remove 'DRAFT'; Vanilla centre watermark kept as credit; role line names Vanilla Studio | All five carried DRAFT, not one |
| 2026-11-11 | Removed Juba Resort, Minimal Villa, Arches Restaurant, Zayed Residence (site, portfolio, images, Juba film) → 24 projects | Aya request |
| 2026-11-11 | Countries stat = all work on the CV, not just site projects: Egypt, Saudi Arabia, Oman, India, Iraq (Um Qasr) = 5; fixed list in `countries` (projects.ts) | Aya request |
| 2026-11-11 | Plans and studies come before renders everywhere (project pages, portfolio, Selected Works); every drawing shown in both PDFs (4 per page, no cap); Mazeej keeps only render 01 | Aya: managers care most about plans and studies |
| 2026-11-11 | Selected Works: studies on their own large pages; plans trimmed and laid out at one scale per project; renders as a mosaic on each opener (no separate renders pages); no Masterplans divider; STC step 03 = curved-window render; '24 hours' removed from PDF back covers | Aya feedback |
| 2026-11-11 | No reply-time promise anywhere: '24 hours' removed from site CTA, Contact, CV page, Services (resolves ❓00) | Aya |
| 2026-11-11 | Full portfolio uses the Selected Works layout (studies pages, shared-scale plans, render mosaics, thinking spreads for the 6 featured) + index + timeline | Aya |
| 2026-11-11 | PDFs redesigned (one shared layout, `src/components/PrintBook.astro`): minimal cover (wordmark, tagline, date, contact); calmer About (no timeline); Contents page; per project: cover (full-bleed render + title-block overlay) → full-screen render → how it was decided (2×2, featured only) → each study full page → each plan full page → remaining renders grid | Aya feedback |
| 2026-11-11 | Travco client logo = new Travco Properties wordmark; client name 'Travco Properties' | Aya supplied logo |
| 2026-11-11 | PDFs: no 'How it was decided' page (its points sit on a Brief page next to a render); minimal project covers (soft gradient, big number); cover = 'Portfolio · month year' + Architect · Interior designer + full contact row; plans packed several per page; Mazeej before → after redesign; Linah + NOATUM moved to 03 BIM delivery; Ogami townhouse plans (GF/FF) + 2 renders replace old flat plan | Aya feedback |
| 2026-11-11 | Travco keeps 6 renders (exception to max 5); no approval stamp anywhere; STC + Tech Park regraded from originals (no burn, no extra exposure); NOATUM official logo added; Project instructions = handover §12 | Aya |
| 2026-11-05 | Identity kit = Design System (for tools) + Brand Book deck (for people); dark-theme oxblood lifted to #D9768A for contrast; square corners except buttons | Aya: “give me everything for my identity” — chose both |
| 2026-11-05 | CV rewritten to the new brand; set in Archivo with hairline title-block layout; phone shown; some marketing words allowed sparingly | Aya approved preview |

---

## 9. Strategy & business (owned by the Claude Project chat)

Fill and maintain these; mark each ✅/❓.
- **Positioning ✅ (5 Nov):** Architect and interior designer for luxury homes, coastal developments and corporate headquarters across Egypt and the Gulf. Original ideas, built as designed. Full detail: Brand Strategy doc.
- **Target clients ✅:** developers (SODIC/Orascom/Misr Italia tier), corporate HQs and fit-outs, private luxury homes, studios needing concept/design support; plus employers (Door A).
- **Offer / services:** Concept design · Visualization & animation · BIM & design packages · Materials & FF&E. ❓ packages and price ranges (EGP / SAR / USD).
- **Freelance vs employment ✅:** both — full-time senior roles and selected commissions (two doors).
- **Proposal & fee templates:** ❓ (bilingual fee proposal skill available).
- **Marketing:** Instagram grid in house look (coastal work leads), LinkedIn case studies, reels from animations. ❓ cadence.
- **Legal/NDA:** STC, SABIC flagged NDA — only already-published imagery; confirm permissions for others.
- **Metrics:** Vercel Analytics — ❓ enable.

---

## 10. Roles & workflow

| Who | Responsible for |
|---|---|
| **Claude Project chat** | Strategy, brand guardianship, business, copywriting, image/video editing direction & processing, portfolio/CV, keeping this handover current |
| **Claude Code** (on the PC, in the repo) | All website code, builds, Vercel, compressing/adding videos & images, git |
| **Aya** | Decisions (section 7 ❓), approving previews, running local file operations, final say |

**Session protocol (everyone):**
1. Read this file.
2. Work.
3. Update: Status board (move items), Decisions log (add rows), Projects table if changed, Changelog (one line).
4. Save back to `G:\Portfolio\Portfolio Projects\Aya_Hassan_Handover_v3.md` (and commit a copy to the repo at `docs/HANDOVER.md` when Claude Code works).

---

## 11. Claude Code brief (paste into `CLAUDE.md` at the repo root)

```markdown
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
```

---

## 12. Claude Project instructions (paste into the Project's "Instructions")

```
You are Aya Hassan's creative director, strategist and studio manager for her architecture & interior design practice (Cairo, Egypt). You own brand, strategy, business, copywriting, portfolio/CV, and image & video editing direction. Website code is handled by Claude Code; you write its briefs.

Source of truth: the file "Aya_Hassan_Handover_v3.md" (project knowledge, and G:\Portfolio\Portfolio Projects\) plus the Claude Doc "Aya Hassan — Brand Strategy". Read the handover at the start of every conversation. Never contradict a ✅ DECIDED item without Aya reopening it.

Brand: "Built as designed" — Bold on paper. Solid on ground. Positioning: architect and interior designer for luxury homes, coastal developments (lead) and corporate headquarters across Egypt and the Gulf; original ideas, built as designed. Voice: polished restraint backed by precise fact; reserved in public, warm one-to-one; first person; Arabic in simple modern Fusha. Visuals: Archivo only (Arabic: Alexandria). Bone #F3EDE3, ink #2B2826, night #201C1B, oxblood #5E1A24, sand #D6CBBE. Title-block hero, AYA | HASSAN wordmark. House grade on renders; drawing-sheet style on drawings. "One Hand" and the blue "cut open" concept are retired.

How to work:
- Be concise and decisive; give a recommendation, not a menu, unless the choice is genuinely Aya's.
- Separate clearly: what's decided, what needs her decision (ask with options), what's on hold.
- Prefer finished, usable outputs (images, docs, decks, briefs) over descriptions.
- Her files are on the G: drive on Windows; large files (videos) must be handled locally — give her ready-to-run PowerShell, or a Claude Code brief.
- Never put real-tower STC/SABIC photos in outputs. Respect NDA projects. Never invent facts.

End of every session: produce the updated sections of the handover (Status board, Decisions log, Projects if changed, Changelog line) so Aya can paste/replace them in the file. Anyone working on the project must update the same document.
```

**Also upload to Project knowledge:** this handover file, the latest portfolio PDF, the CV.

---

## 13. Changelog

| Date | Who | Change |
|---|---|---|
| 2026-11-11 | Claude (chat + repo) | 23:10: NOATUM logo (site wall + PDF clients page); STC + Tech Park renders regraded from pre-edit originals (`efc315b^`) — burnt corners lifted, highlights held, neutral colour; Travco 6 renders kept; stamp retired; handover cleaned (stale TO DOs, branches, stamp, timestamps). All three PDFs regenerated. On `rebrand-on-update`, not live. |
| 2026-11-11 | Claude Code | PDF round 3 (evening): Travco chalet/townhome split; opener page (cover + brief, overlay, info right, logo-only client); one drawing scale per project; Chery + Dry Port to BIM, BIM numbered separately; Mazeej/Staff Housing plan pairing; BMW hanging unit first; STC + Tech Park re-exposed (site too); new Selected Works order + index; uncropped render rows; sharper images (Selected Works ~14 MB); About employment list; no Instagram; CV Travco/links updated. All on `rebrand-on-update`, not live. |
| 2026-11-11 | Claude Code | PDF revamp round 2 (see decision). Selected Works 108 pp 8.7 MB; Portfolio 113 pp 39 MB. Open: Travco chalet vs townhome split (needs Aya); study-board text can't be re-typeset without source files. Not live. |
| 2026-11-11 | Claude Code | PDFs rebuilt on shared PrintBook layout: Selected Works 107 pp ≈10.6 MB, Portfolio 129 pp 43 MB. Travco Properties logo. Ogami plan flagged (source lacks detail). Not live. |
| 2026-11-11 | Claude Code | 24-hour promise removed from site. Full portfolio regenerated on the new layout (`portfolio.astro` now mirrors `selected.astro`): 64 pp, 28 MB, index with page numbers. Not live. |
| 2026-11-11 | Claude Code | Selected Works rebuilt: 55 pp, 9.9 MB. New `scripts/trim-drawings.py` → `src/assets/print/<slug>/dNN.jpg` (+ .scale) — rerun after adding drawings. Study list per project = `studyNos` in selected.astro. Back-cover CTA without 24 h in both PDFs. |
| 2026-11-11 | Claude Code | Drawings before renders on site + both PDFs; all drawings shown (Mazeej 8, Chery 6, NOATUM 7, Staff Housing 5); supporting projects in Selected Works now get drawings pages; Mazeej renders 02–05 deleted. Portfolio 70 pp / 27 MB; Selected Works 57 pp / 9.9 MB (lighter JPEGs for that file only). Not live. |
| 2026-11-11 | Claude Code | Selected Works: diagram overlays drawn for East Vale (public sand / private oxblood on the GF plan, from its room labels) and STC (curve zones on the published plan); wide drawings span two columns; 48 pp, 9.5 MB. Travco wind/view arrows wait on Aya (north + lagoon direction). |
| 2026-11-11 | Claude Code | Selected Works PDF built (`/print/selected/` → public/Aya_Hassan_Selected_Works.pdf): 48 pp, 9.3 MB, Archivo only; 21 projects (11 arch, 10 int) + Misk Schools LEAD card; thinking spreads for Travco, Misr Italia, Staff Housing, East Vale, SABIC, STC (images only, SVG overlay diagrams not yet drawn); BIM sheet slots pending Aya (16 Nov). Not live, not linked on site yet. |
| 2026-11-11 | Claude Code | Juba, Minimal Villa, Arches, Zayed removed everywhere (data, images, Juba video, page reels); now 24 projects; countries stat = 5 (all CV work: Egypt, KSA, Oman, India, Iraq); portfolio 67 pp, 26 MB. Not live. |
| 2026-11-11 | Claude Code | 10 Nov brief Parts 1–3 on `rebrand-on-update`: role tag + bold role line + status on every project page and portfolio opener (EN + AR; Arabic role lines by Claude, need native check); STC in capitals; Services 'Concept and design support for studios' copy; BRAND_VOICE header; Mid-senior everywhere; portfolio timeline 'Rejoined' + 2019 independent practice row; Mazeej DRAFT cropped; CV rebuilt to 10 Nov reference (2 pp, Archivo only, ATS labels). Full portfolio + CV regenerated. Not live. |
| 2026-11-05 | Claude (chat) | Brand strategy session (no code): "Approved" replaces "One Hand"; positioning (luxury homes, coast-led, corporate HQs; Egypt + Gulf; built as designed), two doors, personality, voice calibrated from Q&A + real emails, public softness rule, six convictions, About + bios + pitches + CTA (EN + AR). Brand Strategy Claude Doc created; handover §1, §2, §7, §8, §9, §11, §12 updated. CV rewritten + Archivo preview approved; Claude Code brief written. Design System + 16-slide Brand Book created. Brand idea evolved to "Built as designed" across all files; motto set to "Bold on paper. Solid on ground." |
| 2026-11-10 | Claude (chat) | CV + portfolio reviewed as recruiter/design manager (CV 7/6.5, portfolio 7.5/6). Project Stories doc created; CV corrected (roles, Misk Schools, leadership line, rejoined Cosmos, Juba out, ATS-safe labels); Selected Works plan set. |
| 2026-11-03 | Claude | Live: BRAND_VOICE items 1–4 (availability line, Hiring? See CV button, 5 countries, new About bio), About timeline edits, first person on About + portfolio; CV + portfolio regenerated. Remaining checklist items 5–10 pending. |
| 2026-11-03 | Claude | Sallan Creek live; Staff Housing condensed + brand-recoloured studies; masterplans first; Sphinx not BIM; Mediterranean removed; CV + portfolio regenerated. |
| 2026-11-03 | Claude | Staff Housing added; East Vale rebuilt around the premium home; CV + portfolio regenerated. Live. |
| 2026-11-03 | Claude | CV facts corrected (NOATUM team, Fifth Square, NEOM no animation, Zamalek animation); NEOM Oxagon scope + About timeline fixed. Live. |
| 2026-11-03 | Claude | CV rewritten in leadership voice (claims kept to old-CV facts). Live. |
| 2026-11-03 | Claude | CV projects rewritten as prose per employer; portfolio cover contact links. Live. |
| 2026-11-03 | Claude | Blue Villa removed; Ogami plan re-mapped from purple export to sand/ink; clickable links in PDFs; CV project tables. Live. |
| 2026-11-03 | Claude | Project numbers + client logos (site & PDF); CV restructured with 7 extra projects. Live. |
| 2026-11-03 | Claude | Built PDF portfolio (71 pp, A4 landscape) and 2-page CV from the site; About page download buttons. Live. |
| 2026-11-03 | Claude | Client strip: two rows, float-based drift (works at 125% Windows scaling and with animations off). Live. |
| 2026-11-03 | Claude | Hero ruler restored; client strip moves on hover; old A-pattern cursor spotlight removed. Live. |
| 2026-11-03 | Claude | 14 official logos in a scrollable strip under the hero; site merged to main (live). |
| 2026-11-03 | Claude | Client brand colours on wall; Details section removed; scope = done only; 6 BIM shots re-toned light, 4 boards restored to colour. |
| 2026-11-03 | Claude | Modern Residence wrong 5th image replaced; 40 drawings recoloured; cover uncropped + Details section; client wall; new footer wordmark. |
| 2026-11-03 | Claude | Hero: stamp + table lines removed; 15 projects back to 5 renders (5th from previous set); new colour drawing-sheet style. |
| 2026-11-03 | Claude (chat) | Curated every project to its best 4 renders (15 projects trimmed); drawings unchanged. |
| 2026-11-02 | Claude (chat) | Synced site to folder: + Minimal Villa, − Classic House, Juba → 14 renders (2021 set), East Vale + 3 plans, Ogami + ground plan. Video web versions done in `_Videos\Web` (Jotun 71 MB, Juba 74 MB, Render 01 132 MB, Sphinx 4K ~470–480 MB each). |
| 2026-11-02 | Claude (chat) | Brand concepts → One Hand chosen; site rebranded on `rebrand-on-update` (Archivo, title-block hero, intro, nav logo, house grade, drawing sheets, 3-discipline work page, client/year everywhere, removed 4 projects, Arches→KSA, Fifth Square note, timeline fix, East Vale +1 image). Video inventory done; `_Videos` folder created (empty). Handover v3 written. |

| 2026-11-13 | Claude Code | CV variant without NEOM Misk Schools: docs/pdf/Aya_Hassan_CV_no_Misk.pdf (bullet removed, page 2 reflowed; NEOM stays in clients via Oxagon). Main CV unchanged. |
| 2026-11-13 | Claude Code | Portfolio + all BIM: /print/selected-bim/ (`allBim`) = Selected Works with NOATUM, Linah, Chery, Dry Port in 03 → docs/pdf/Aya_Hassan_Portfolio_BIM.pdf (75 pp, ~8 MB). Not on the site. |
| 2026-11-13 | Claude Code | Interiors-only portfolio: /print/interiors/ (PrintBook `only="interiors"`), all 10 interior projects, no BIM/Misk card → docs/pdf/Aya_Hassan_Interiors.pdf (32 pp). Zayed Residence + Arches Restaurant restored for this PDF only (`pdfOnlyProjects` in projects.ts; assets back; not on the site). |
| 2026-11-12 | Claude Code | Site: O West, Fifth Square, Conference Room, HB Fuller, Dry Port, Linah back on the website (24 projects); PDFs still leave them out (`dropped` in PrintBook). Key decisions moved to src/data/decisions.ts and shown on project pages (EN) as in the portfolio. About bio = CV About. On branch, awaiting 'push live'. |
| 2026-11-12 | Claude Code | Unlisted page ayahassan.com/portfolio/ (noindex, not in nav/sitemap): PDF viewer + Download + Open full screen. CV 'Portfolio · View & download' bar → /portfolio/. Pushed live. |
| 2026-11-12 | Claude Code | No CV/portfolio on the site (Aya): /cv/ page, About download buttons, footer CV link and Contact CV/Portfolio rows removed; 'Full-time role' links go to Contact (job). Only unlinked file: ayahassan.com/portfolio.pdf (= Selected Works, noindex) — the CV's 'Portfolio · PDF' bar points there. CV + print Portfolio PDFs now live in docs/pdf/ (not published). make-pdfs writes docs/pdf/Aya_Hassan_Portfolio.pdf + public/portfolio.pdf. Pushed live. |
| 2026-11-12 | Claude Code | CV = Aya's own new layout (her PDF, 12 Nov). Portfolio bars edited in the PDF: 'Portfolio · Download page' → ayahassan.com/cv/, 'Selected work · Online' → ayahassan.com/work/. make-pdfs.mjs no longer regenerates the CV (print/cv.astro is now stale). Pushed live. |
| 2026-11-12 | Claude Code | Website matched to the final portfolio: O West, Fifth Square, Conference Room, HB Fuller, Dry Port, Linah removed from the site (18 projects); Travco = chalet only (renders 01–04, plans d01–d02, concept board now d03; townhome renders/plan deleted); home/about/contact/services/work reels re-pointed; client strip links to /work/ for clients without a project; CV page lists Selected Works (~7 MB) + print Portfolio (~29 MB), About button = Selected Works. On branch, awaiting 'push live'. |
| 2026-11-12 | Claude Code | 83→68 pp (7 MB): O West, Fifth Square, Conference Room, HB Fuller, Dry Port, Linah left out of both PDFs (`dropped`; still on the site). 18 projects: 8 architecture, 8 interiors, 2 BIM. Clients page keeps all logos. Not live. |
| 2026-11-12 | Claude Code | 86→83 pp: Linah plan beside Revit model + elevation (one sheet, `colDef`); NOATUM drawings on 2 sheets (plans + model, then 4 elevations; `freeDef` now multi-page). Not live. |
| 2026-11-12 | Claude Code | PDFs 92→86 pp: Travco townhome removed from portfolio (chalet only); Ogami townhome renders stacked on one page; Staff Housing design-strategy study beside its plans (`colDef`); Mazeej 4 plans per page, before | redesign (`gridDef`); sheet numbers (A-0xx) removed; **body text now Inter, titles Archivo — Aya's call for the portfolio PDFs only (overrides the one-typeface rule there; site unchanged)**; Aya's artifact tweaks applied (East Vale render zooms, FF plan ×1.06). Not live. Editable portfolio artifact exists (claude.ai artifact, private) — rebuild it from dist when the layout changes. |
| 2026-11-12 | Claude Code | InDesign export: `scripts/idml-extract.mjs` (reads /print/* in Chrome) + `scripts/make-idml.py` (writes IDML + Links/, zipped). Live Archivo text frames, linked images, fills/rules; gradient overlays approximated as flat tints. Aya confirmed Selected Works opens correctly (12 Nov); full Portfolio package made the same way. |
| 2026-11-12 | Claude Code | One scale per building: East Vale ground floor export corrected ×1.09 to match first floor/roof (`corr`); BIM pair pages share one scale per project. Slide 15 = East Vale pool render (`renderDef` [[0],[2]]). Not live. |
| 2026-11-12 | Claude Code | Selected Works 97→92 pp: Travco chalet + townhome full-render pages removed (`noHero`); Staff Housing single full render page removed; each building's plans on one page at max size (`packOne`); BIM drawings two per page (`packPairs`, Chery keeps its 3-elevation sheet); Travco chalet sea render shifted right in grid (`xpos`); East Vale 01 = Aya's 3055 px TIFF. Not live. InDesign export blocked (Adobe upload not allowed from workspace; her InDesign lacks PDF open) — offered PDF2DTP or a hand-built IDML. |
| 2026-11-12 | Claude Code | New renders from Aya's source PDFs: East Vale 01–03 (premium home, 3000 px), Travco 01–04 chalet + 05–08 townhome (site now shows 8 Travco renders — over the 5 max, Aya to pick). `renderDef` (East Vale: each render full page; Staff Housing: render 03 full page + 01/02 stacked filling a page); `freeDef` (East Vale massing study above its plans, one sheet); Staff Housing plans top-aligned side by side. Not live. |
| 2026-11-12 | Claude Code | All client logos on project openers keep their own colours (bone chip). Waiting on Aya: original full-size East Vale render 03 (repo copy is a 1177×1661 portrait crop). Travco sea view already = her original (1448×1086), shown whole. |
| 2026-11-12 | Claude Code | Ogami split into Twin villa (renders 01–02) + Townhome (03–04, plans d02–d03); duplicate Ogami renders 05–06 deleted. East Vale renders each on a full page (`solo`). Part heroes + solo pages show the whole render (contain on night, no crop) — Travco chalet sea view now uncropped. Jotun + BMW logos keep their colours on a bone chip. Staff Housing pair aligned (manual skyline overrides). Not live. |
| 2026-11-12 | Claude Code | Aya's baseline = X.pdf (layout of 7e3e914, 11 Nov 19:28). PrintBook + grade-print restored to it (edge-to-edge render grid, ~9 MB Selected Works), NOATUM logo kept; then: client logo 7.5 mm; About employment list; side-by-side renders aligned at the building top (`scripts/skyline.py` → `src/data/skyline.json`, rerun after changing renders; manual overrides in the script); Travco chalet sea view (01) gets its own full page. Not live. |
| 2026-11-12 | Claude Code | Reverted 7cc81de (Mazeej/Travco render swap): Travco back to the 6 chalet/townhome renders (01–03 chalet, 04–06 townhome), Mazeej back to render 01 only (DRAFT-cropped). NOATUM logo + STC/Tech Park regrade (c217a1f) kept. Not live. |
