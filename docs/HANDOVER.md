# Aya Hassan — Master Handover (v3)

**Last updated:** 3 Nov 2026 · **Supersedes:** Handover v1 (brand) and v2 (website). Where they disagree, this file wins.
**Lives at:** `G:\Portfolio\Portfolio Projects\Aya_Hassan_Handover_v3.md`

> **Rule for everyone (people, Claude chat, Claude Code):** read this file first. When you finish a session, update the sections you touched — Status board, Decisions log, Changelog — and bump the date. Never keep project knowledge only in a chat. One file, one truth.

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

- **Name:** Aya Hassan — architect & interior designer, concept design. **Based in Cairo, Egypt.**
- **Disciplines:** concept design, 3D modelling, rendering, animation, BIM (Revit), interiors, FF&E.
- **Career (✅ final wording):**

| Years | Role | Studio |
|---|---|---|
| 2020 – 2023 | Design Architect / Interior Designer | Cosmos Studio |
| 2024 | Design Architect / Interior Designer | ZFP (Zuhair Fayez Partnership) |
| 2025 | Mid-senior Design Architect / Interior Designer | Cosmos Studio |
| 2026 – now | Mid-senior Design Architect | Innovation Design Studio |

- Education: B.Sc. Architectural Engineering, Future University in Egypt (2014–2019).
- Contact: ayahassanm@outlook.com · Instagram @ayahassanmr · LinkedIn /in/ayahassanm · WhatsApp +20 111 531 8509.
- Computer: Windows; work files on the **G:** drive. Prefers static images over interactive canvases unless asked. Keep it efficient.

---

## 2. Brand — "One Hand" (✅ DECIDED, 2 Nov 2026)

> The blue "Architecture, cut open" concept in Handover v1/v2 is **retired**. Do not use Hassan Blue, the section-cut wordmark or the AH monogram unless Aya reopens it.

**Core idea:** one person carries a project from idea to model to image to drawing set. Tagline: **"From concept to *conviction*."** Supporting line: *"Idea, model, image and drawing set — carried by one hand."*

**Tone:** confident, precise, quiet luxury; architectural vocabulary (sheets, title blocks, dimensions); never salesy. **First person everywhere** (site EN + AR, CV, portfolio) — decided 3 Nov. Full rules: `BRAND_VOICE.md` in the repo root.

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
| Stamp pink | `#D7A0A6` | The approval stamp on dark |
No gold anywhere.

### 2.3 Identity elements
- **Wordmark (nav/header):** `AYA | HASSAN` — Archivo 800, width 125%, one line, thin vertical divider.
- **Hero name:** "AYA HASSAN" on one line: the intro's dimension ruler (end ticks, draws out from centre) labelled "Architect · Interior designer" above, the name, then an unruled info row: motto · Based: Cairo, EG · Practice: 2020 — · Sheet: A-000. No stamp, no table lines (✅ 3 Nov); dimension ruler kept, same as intro.
- **Approval stamp:** ❌ removed from hero and intro (3 Nov).
- **Intro screen:** dimension line draws out → name rises → title block wipes in → stamp lands → screen parts onto the hero (~3 s, skippable, off with reduced motion).
- **Footer:** big `AYA | HASSAN` wordmark (Archivo 800/125%) fades in — old AYA sprite logo retired (✅ 3 Nov).
- **Recurring devices:** sheet numbers (A-000, A-001…), project codes (01.01, 01.02), hairline rules, dimension strings.
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
- **Juba renders look dated (⏸):** fix without re-rendering — AI upscale at low creativity (Magnific / Krea Enhance / Topaz), Photoshop sky + foliage + people replacement, then house grade. 21 more 2021 Juba renders exist in `G:\Portfolio\pot\Juba Render`.

---

## 4. Website

### 4.1 Tech
- **Repo:** GitHub `ayahassanmr-wq/aya` · **Astro 7** · fonts via `@fontsource-variable/archivo`.
- **Hosting:** Vercel team "AYA". Three Vercel projects (`aya`, `aya-hassan`, `ayahassan`) build the same repo → 🔧 keep one, delete two.
- **Domain:** ayahassan.com · bilingual EN + AR (`/ar/`, RTL).
- **Branches:**
  - `main` — live site (One Hand brand since 3 Nov).
  - `update-projects-from-folder` — project/content update (superseded by below).
  - **`rebrand-on-update` — CURRENT WORK. Contains everything: project update + One Hand rebrand + all fixes below.** Not live yet.
  - `rebrand-one-hand` — early experiment, ignore/delete.
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
- **Home:** intro → hero → **client logo strip** → intro statement → numbers → selected work → typology marquee → services → contact. Client wall (✅ 3 Nov, reverses the earlier 'no client names on homepage' rule): two scrollable rows directly under the hero, drifting in opposite directions ("Trusted by"): official full-colour logos (`public/clients/<id>.png`, cut from Aya's logo sheet 3 Nov), always drifting (keeps moving on hover; pauses ~2.5 s only after a manual scroll), drag/wheel/swipe/arrow keys to scroll, each links to its project. NOATUM and Suits have no logo yet → typed names. Confidential and private clients excluded.
- **Work:** Masterplan group always first (Sallan Creek, Staff Housing); project numbers also start with masterplans. Opens on **three disciplines** — *Architectural design*, *Interior design*, *BIM & technical*. Choosing one shows its projects grouped by type (Residential, Workplace, Commercial…), numbered 01.01, 01.02…
- **Project page:** big project number (01–28, same as the PDF portfolio; order = Architecture then Interiors, featured first, newest first — `ordered`/`projectNo` in projects.ts) above the title; title block with Location · Discipline · Practice · **Client (with logo)** · **Year** · Scope (+ optional scope note) → renders → drawing sheets → client links.
- **About:** timeline (section 1), bio, tools.
- Client names: allowed on project pages (Client row + links); homepage uses typologies.

### 4.3b PDFs (✅ 3 Nov)
- **Portfolio** `public/Aya_Hassan_Portfolio.pdf` — A4 landscape, ~71 pages, ~28 MB: cover (title block), about + timeline + numbers, client logos, index with page numbers, Architecture / Interiors dividers, per project: opener (cover + title block), renders page, drawings page; contact back cover.
- **CV** `public/Aya_Hassan_CV.pdf` — A4 portrait, 2 pages, One Hand style.
- Both are generated from hidden pages `/print/portfolio/` and `/print/cv/` (noindex) using the site data, so they update with the site. Rebuild: `npx astro build && python3 scripts/grade-print.py && (npx astro preview --port 4321 &) && node scripts/make-pdfs.mjs`, then commit the PDFs.
- Downloads: both buttons on the About page.
- Portfolio cover carries a clickable contact row (email, website, LinkedIn, Instagram).
- All links clickable in both PDFs (contacts, website, project pages, client links; portfolio index jumps to each project).
- CV-only project scopes are assumed from the old CV — ❓ confirm: Um Qasr (Modelling, Animation), Zamalek Club (✅ Modelling, Rendering, Animation), Sharm El Sheikh Tower Hotel (Design, Modelling, Rendering), Estadat / SIAC / One 90 / NEOM PSB interiors (BIM), Misk Schools (Review).
- Phone/WhatsApp number deliberately not printed (same rule as the site).
- Portfolio project openers: big project number + client logo. CV: experience grouped by employer, in a senior/leadership voice (led, authored, delivered, coordinated) naming each project and Aya's role — ❓ confirm 'Introduced AI-assisted post-production into the studio’s workflow' (Innovation) is accurate (project names link to the site; no tables or scope chips), incl. CV-only projects from the old CV: Zamalek Club, Sharm El Sheikh Tower Hotel, Um Qasr Logistic City, Estadat City Club Complexes, SIAC Office Building, One 90 Retail, Misk Schools (NEOM) — Cosmos 2020–23. Freelance listed as "2022 — now" (❓ confirm start year).

### 4.4 Content rules
- Every project must have **client** and **year** (no "—").
- Fifth Square scope note: *"Design: the canopy. Modelling and rendering: the whole building."*
- Max **5 renders** per project, best first (cover). Drawings/plans/BIM sheets are extra.
- Images on site are capped at 2400 px (displayed ≤2000 px); larger originals are not needed.
- Videos must be compressed (≈10–25 MB, 1080p) or embedded from YouTube/Vimeo.

---

## 5. Projects (current list on `rebrand-on-update`)

| Slug | Title | Discipline | Practice | Client | Year | Notes |
|---|---|---|---|---|---|---|
| misr-italia-hilltop | Misr Italia Hilltop | Arch | Innovation | Misr Italia Properties | 2026 | Featured, hero slide 1 |
| sodic-ogami | SODIC Ogami | Arch | Innovation | SODIC | 2026 | + ground floor plan |
| sodic-east-vale | SODIC East Vale · Premium Home | Arch | Innovation | SODIC | 2026 | Aya designed the premium home only (two stacked units). MADA City, New Cairo. 3 renders + form generation + GF 202.6 / FF 194.3 / roof 184 m² plans |
| travco-west-island | Travco West Island | Arch | Innovation | Travco · Almaza Bay | 2026 | |
| sallan-creek | Sallan Creek (DHIFAF) | Arch / Masterplan | Cosmos | North Al Batinah Governor’s Office | 2025 | Oman; Aya: masterplan refinement, 3D model, renders, presentation; 4 regraded aerials + masterplan strip + look & feel grid |
| staff-housing | Staff Housing Community | Arch / Masterplan | Innovation | Confidential developer | 2026 | From the Orascom Workers Housing (El Gouna) proposal — client & location anonymised (shown as Egypt); featured (No. 02); Option 01 only; 3 renders + 11 sheets |
| orascom-o-west | Orascom O West Midyard | Arch | Innovation | Orascom Development | 2026 | 2 images only |
| stc-hq | STC HQ Office Tower | Interior | ZFP | stc | 2024 | NDA; no real-tower photos |
| sabic-hq | SABIC HQ Renovation | Interior | ZFP | SABIC | 2024 | NDA; no real-tower photos |
| neom-oxagon | NEOM Oxagon Public Service | Arch | Cosmos | NEOM | 2023 | |
| fifth-square | Fifth Square Commercial Complex | Arch | Cosmos | Al Marasem | 2025 | Canopy-design note |
| chery-showroom | Chery Showroom & Admin | Arch/BIM | Cosmos | Chery Egypt | 2025 | |
| noatum-terminal | NOATUM Automotive Terminal | Arch/BIM | Cosmos | NOATUM | 2025 | |
| linah-farms | Linah Farms | Arch/BIM | Cosmos | Linah Farms | 2025 | Keep even though not in folder; renders need upscale |
| mazeej | Mazeej Hotel & Housing | Arch | Cosmos | Guira Developments | 2025 | |
| dry-port | Dry Port Buildings | Arch/BIM | Cosmos | Egyptian Government | 2021 | |
| juba-resort | Juba Resort Complex | Arch | Cosmos | Confidential | 2023 | 4 best renders from the 2021 set; walkthrough video live |
| tech-park | Tech Park Office Building | Interior | Cosmos | Confidential | 2023 | |
| jotun-office | Jotun Office Building | Interior | Cosmos | Jotun | 2023 | Animation available, not yet on site |
| hb-fuller | HB Fuller Office | Interior | Cosmos | H.B. Fuller | 2022 | |
| sphinx | Sphinx Business Building | Interior | Cosmos | Confidential | 2022 | |
| conference-room | Formal Conference Room | Interior | Cosmos | Confidential | 2022 | |
| bmw-showroom | BMW Showroom | Interior | Cosmos | BMW Egypt | 2022 | |
| suits-workspaces | Suits Workspaces | Interior | Freelance | Suits Workspaces | 2025 | |
| arches-restaurant | Arches Restaurant | Interior | Freelance | Private client | 2022 | Location: Saudi Arabia |
| minimal-villa | Minimal Villa | Arch | Freelance | Private client | 2026 | NEW · 2 renders; full scope (design, modelling, rendering) |
| modern-residence-new-cairo | Modern Residence | Interior | Freelance | Private client | 2025 | |
| zayed-residence | Zayed Residence | Interior | Freelance | Private client | 2024 | |

**Removed (✅):** Mediterranean House (3 Nov), Blue Villa (3 Nov), Classic House (folder deleted 2 Nov), Modern Villa, Apartment Building, Concept Sketches, Jeddah Residence (+ earlier: Studio K, HK Inc, Commercial Mall, Modern Villa I, Majlis, Jubail, Sea Residence, Neo-Classical Residence, Modern Residence II).

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
- One Hand brand (section 2) replaces blue concept.
- One typeface: Archivo (+ Alexandria for Arabic).
- Hero = one-line name as drawing title block; new title-block intro; `AYA | HASSAN` nav logo.
- House grade for renders; drawing-sheet treatment for drawings/BIM.
- Work page = 3 disciplines → grouped by type.
- Every project shows Client + Year.
- Based in Cairo, Egypt. Career timeline per section 1.
- Removed projects per section 5. Arches Restaurant location = KSA.
- STC/SABIC real-tower photos never on site.
- Modern Villa 02 (KSA) stays off the site even though its folder remains on G:.
- Minimal Villa: 2026, full scope.
- Max 5 renders per project (best picks; first = cover). Drawings/plans not counted.
- Hero: no stamp, no table lines.
- Drawings recoloured to brand palette (ink lines, bone background); BIM model shots light duotone; cover shown uncropped; client wall in client brand colours; footer = AYA | HASSAN wordmark.
- Project Scope strip shows only the disciplines actually done (no greyed-out ones).

### ❓ NEEDS DECISION (Aya)
0. **Missing logos:** NOATUM and Suits Workspaces (send files). STC/SABIC/NEOM logos are shown — Aya supplied them, treated as approved.
1. ✅ Merged to `main` and live 3 Nov.
2. **Which Vercel project to keep** (`aya`, `aya-hassan`, `ayahassan`) and delete the other two.
3. **Video edits wanted:** web cuts (30–60 s) / Instagram reels / one showreel / logo & titles / compression only?
4. **Sphinx Airport & City Club animations:** add as new projects, attach to existing Sphinx page, or keep off site?
5. **"Render 01.mp4":** what project is it?
6. **Jotun animation:** use original or 2022 update?
7. **Arches client label:** "Private client" (current) or "Freelance"?
8. **Juba:** upscale existing 3 renders, swap in some of the 21 older renders, or both?
9. **Project page client links:** add official Instagram/Facebook for all clients (partly done in v2).
10. **Missing views:** export more renders for Orascom O West (2), Misr Italia (4), SODIC East Vale (3)?

### ⏸ ON HOLD
- **Video editing** — blocked until videos are reachable (PC on & awake, or uploaded to Google Drive + connector, or Claude Code run locally on the PC).
- **Copying videos into `_Videos`** — Aya to run the PowerShell above.
- **Juba render upgrade** — needs AI upscaler (outside Claude) or Aya's Photoshop pass.
- **Linah Farms re-render / upscale.**

### 🔧 TO DO (next actions, in order)
0b. Aya: review PDFs; decide whether to add phone number to CV; Mazeej cover render shows a 'VANILLA' watermark — replace image.
0. Aya: hand-pick close-up/detail crops per project (auto Details section removed 3 Nov) — send picks, Claude builds the section.
1. Aya: review preview → decide #1.
2. Aya: run PowerShell to fill `_Videos`; keep PC awake or upload to Drive.
3. Claude Code: compress Jotun animation → `public/video/jotun-office.mp4` + poster; enable in `films` in `projects.ts`.
4. Claude Code: delete two duplicate Vercel projects (after #2).
5. Strategy chat: write brand guideline PDF/Doc, service menu & pricing, launch plan (section 9).
6. Update portfolio PDF and CV to One Hand brand + corrected timeline.
7. Social profiles (Instagram/LinkedIn) re-skin to One Hand.

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

---

## 9. Strategy & business (owned by the Claude Project chat)

Fill and maintain these; mark each ✅/❓.
- **Positioning:** Cairo-based design architect delivering Gulf-scale concept work end-to-end (idea → model → image → drawing set). ❓ confirm target clients: developers (SODIC/Orascom tier), corporate fit-out, private villas, studios needing freelance viz/BIM.
- **Offer / services:** Concept design · Visualization & animation · BIM & design packages · Materials & FF&E. ❓ packages and price ranges (EGP / SAR / USD).
- **Freelance vs employment:** ❓ is the site for commissions, job offers, or both? (Contact page currently says Roles · Collaborations · Commissions.)
- **Proposal & fee templates:** ❓ (bilingual fee proposal skill available).
- **Marketing:** Instagram grid in house look, LinkedIn case studies, reels from animations. ❓ cadence.
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
- Brand: One Hand (see handover §2). One typeface only. No new fonts, no gold, no blue.
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
See handover §7 TO DO.
```

---

## 12. Claude Project instructions (paste into the Project's "Instructions")

```
You are Aya Hassan's creative director, strategist and studio manager for her architecture & interior design practice (Cairo, Egypt). You own brand, strategy, business, copywriting, portfolio/CV, and image & video editing direction. Website code is handled by Claude Code; you write its briefs.

Source of truth: the file "Aya_Hassan_Handover_v3.md" (project knowledge, and G:\Portfolio\Portfolio Projects\). Read it at the start of every conversation. Never contradict a ✅ DECIDED item without Aya reopening it.

Brand: "One Hand" — From concept to conviction. Archivo only (Arabic: Alexandria). Bone #F3EDE3, ink #2B2826, night #201C1B, oxblood #5E1A24, sand #D6CBBE. Title-block hero, AYA | HASSAN wordmark, approval stamp. House grade on renders; drawing-sheet style on drawings. The blue "cut open" concept is retired.

How to work:
- Be concise and decisive; give a recommendation, not a menu, unless the choice is genuinely Aya's.
- Separate clearly: what's decided, what needs her decision (ask with options), what's on hold.
- Prefer finished, usable outputs (images, docs, decks, briefs) over descriptions.
- Her files are on the G: drive on Windows; large files (videos) must be handled locally — give her ready-to-run PowerShell, or a Claude Code brief.
- Never put real-tower STC/SABIC photos in outputs. Respect NDA projects.

End of every session: produce the updated sections of the handover (Status board, Decisions log, Projects if changed, Changelog line) so Aya can paste/replace them in the file. Anyone working on the project must update the same document.
```

**Also upload to Project knowledge:** this handover file, the latest portfolio PDF, the CV.

---

## 13. Changelog

| Date | Who | Change |
|---|---|---|
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
