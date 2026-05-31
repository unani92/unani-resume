# 정윤환 — Developer Résumé / Portfolio Design System

A personal brand system for **정윤환 (Jeong Yunhwan)**, a software developer. It powers his
résumé (이력서), experience write-ups (경력기술서), and portfolio — across web pages, PDF
exports, and presentation decks. The voice is calm and precise; the look is editorial and
restrained, letting the work speak.

> **Design language: "Warm Editorial."** Human and approachable, but still precise.
> Warm cream paper, soft warm-black ink, one friendly **terracotta** accent, and a monospace
> voice for technical metadata (dates, stacks, labels). Clean structure, soft edges — the work
> feels personal and confident, never cold or clinical.

The system supports **both production code and throwaway prototypes/mocks**, and covers two
surfaces:
- **포트폴리오 웹사이트** — a landing + project-showcase site.
- **온라인 이력서** — a structured, readable résumé / experience document (web + PDF).

---

## Sources & provenance

This system was built from a small set of supplied materials — there is **no upstream codebase
or Figma file**. Everything here was authored fresh and should be treated as the canonical source.

- **Typeface:** the full **Pretendard** family (Thin → Black), supplied as `.ttf` and stored in
  `fonts/`. Pretendard is a widely-used open Korean/Latin sans by Kil Hyung-jin — a neutral,
  highly legible system-UI-style face. (Original project: github.com/orioncactus/pretendard)
- **Portrait:** a professional headshot, stored as `assets/portrait.jpeg`.
- **Monospace:** **JetBrains Mono** (Google Fonts CDN) — a *substitution*, since no mono file was
  supplied. See the ⚠️ flag in CONTENT FUNDAMENTALS / fonts. Swap in a preferred mono anytime.

If you have a real résumé draft, brand color preference, or a different mono face, share it and
this system will be tuned to match.

---

## CONTENT FUNDAMENTALS

How copy is written across the résumé, experience docs, and portfolio.

- **Bilingual, Korean-led.** Primary copy is Korean; English appears for technical terms,
  stacks, and proper nouns (React, TypeScript, AWS). Headings often pair a Korean phrase with a
  short English/mono label. Don't translate stack names into Korean.
- **First person, understated.** The voice is "저" / "제가" but kept implicit — résumé bullets
  drop the subject entirely and lead with the action/outcome. No bragging adjectives; let metrics
  carry weight. *"결제 지연을 40% 줄였습니다"* not *"엄청나게 개선했습니다."*
- **Outcome-first bullets.** Each experience line reads `[무엇을] → [어떻게] → [결과/수치]`.
  Numbers are concrete and monospaced (`40%`, `1.2s → 0.3s`, `12k MAU`).
- **Casing.** Korean has no case; English follows natural casing for product/stack names
  (TypeScript, not Typescript). **Mono labels/overlines are UPPERCASE** with wide tracking
  (`EXPERIENCE`, `2021 — NOW`, `STACK`). Section eyebrows are the main place uppercase appears.
- **Punctuation.** Calm. Periods optional on résumé bullets (be consistent within a section).
  Use the em-dash `—` for ranges and asides; the middle dot `·` to separate inline meta
  (`Seoul · Backend · 4 yrs`).
- **No emoji.** Ever, in this brand. Status and emphasis come from type weight, the mono voice,
  and the accent color — not from emoji or decorative icons.
- **Tone vibe:** senior, quiet, exact. Reads like good documentation — confident without
  selling. Whitespace is part of the message.

**Examples**
- Eyebrow: `EXPERIENCE / 2021 — 2024`
- Role line: `백엔드 엔지니어 · 토스페이먼츠` with mono sub `Backend Engineer`
- Bullet: `대규모 정산 배치를 재설계해 처리 시간을 1.2s → 0.3s로 단축`
- CTA: `이력서 PDF` · `깃허브` · `연락하기` (short, lowercase-feel, no exclamation)

---

## VISUAL FOUNDATIONS

- **Color.** Warm and human. Cream **paper** (`#FAF6EF`), soft warm-black **ink**
  (`#2A2420`), a warm neutral ramp for hierarchy, and exactly **one accent** — a friendly
  **terracotta / clay** (`#D2674A`). Accent is used with warmth but restraint: links, the active
  state, one number that matters, a soft tinted highlight. Semantic colors (sage/amber/clay-red)
  are warm-toned and appear rarely.
- **Type.** Pretendard for everything; weight does the work (400 body, 600–700 headings,
  800–900 display). Tight negative tracking on large headings (`-0.02em`→`-0.035em`); Korean body
  runs a relaxed `1.7` line-height for readability. **Monospace (JetBrains Mono)** is the
  signature — every eyebrow, date range, and stack label is mono + uppercase + wide tracking.
- **Spacing.** 4pt base scale (`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`). Generous
  vertical rhythm; sections breathe with `--s-8`/`--s-9` gaps. Content sits on a calm max-width
  measure (~720px for prose, ~1080px for layouts).
- **Backgrounds.** Flat warm paper. **No gradients, no photographic hero washes, no textures.**
  The one permitted background device is a faint **hairline grid / baseline rule** and recessed
  alt-sections in `--paper-sunk`. The portrait is the only photographic element — duotone-neutral,
  never filtered with color.
- **Borders & rules.** Hairlines are warm and quiet (`#E7E4DC`). The signature divider is a
  **full-contrast 1–2px ink rule** sitting directly under a section eyebrow — a hard editorial
  line, not a soft gray box. Cards use a 1px warm border, not a heavy shadow.
- **Corner radii.** Gently rounded for a friendly, human feel. `14px` for cards, `10px` for
  inputs, `6px` for code chips, `999px` pills for status tags. Soft but not bubbly — the brand
  stays document-like and precise underneath the warmth.
- **Cards.** Quiet: `--surface` (white) on paper, 1px `--line` border, `--r-md` radius, and at
  most `--shadow-sm`. Elevation is earned, never default. Hover lifts subtly to `--shadow-md`.
- **Shadows.** Soft, low, warm-tinted (`rgba(42,36,32,…)`), never blue or black-heavy. A 4-step
  ramp (xs→lg). Focus uses a terracotta **ring** (`--shadow-ring`), not a glow.
- **Animation.** Minimal and quick. `120–200ms`, gentle ease-out (`cubic-bezier(.22,.61,.36,1)`).
  Fades and 2–4px translateY lifts. **No bounce, no spring, no parallax.** Motion confirms an
  action; it never performs.
- **Hover / press.** Links: ink → accent, underline thickens. Buttons hover **darker** (not
  lighter glow); press shifts to `--accent-ink` and nudges `translateY(1px)`. Ghost/secondary
  elements hover with a faint `--surface-2` fill.
- **Transparency / blur.** Used sparingly — a sticky header gets a paper backdrop blur
  (`saturate(180%) blur(12px)`) so content scrolls under it; otherwise surfaces are opaque.
- **Imagery vibe.** Neutral and cool-calm. The portrait stays close to its natural neutral grade;
  no warm Instagram filter, no heavy grain. If screenshots appear, they sit in a bordered card
  with the same radius as everything else.
- **Layout rules.** Left-aligned, editorial, single strong column for reading; asymmetric
  two-column (label rail + content) for the résumé. The mono eyebrow + ink rule pattern repeats
  to anchor every section. Fixed elements: a slim sticky top bar; nothing else floats.

---

## ICONOGRAPHY

- **Approach: nearly icon-free.** This brand leans on the **mono type voice** and the **ink rule**
  instead of decorative icons. Where an icon is genuinely useful (external link, github, mail,
  arrow, download), use a **single line-icon set** at a consistent 1.5px stroke.
- **Icon set — SUBSTITUTION:** **Lucide** (lucide.dev) via CDN — clean 1.5px line icons that match
  the restrained, precise tone. No icon font or SVG sprite was supplied, so Lucide is the chosen
  default. Keep icons single-color (`currentColor`), small (16–18px), and aligned to the text
  baseline. Never fill them with the accent unless they represent an active state.
- **No emoji. No unicode glyph-as-icon** beyond the typographic `→`, `·`, and `—` which are part
  of the copy voice, not icons.
- **Logo / mark.** The personal mark is a **monospace wordmark**: `정윤환` set in Pretendard
  Bold, optionally paired with a mono tagline `JEONG YUNHWAN · DEVELOPER`. A compact monogram
  `YH` in mono can stand in for a favicon/avatar. (No supplied logo — these are authored here.)

---

## Index — what's in this system

Root files:
- `README.md` — this file (context, content + visual foundations, iconography, index).
- `colors_and_type.css` — all design tokens: fonts, color scale, accent, radii, spacing,
  shadows, motion, and semantic type scale. **Import this in every artifact.**
- `SKILL.md` — Agent-Skill manifest for reuse in Claude Code.

Folders:
- `fonts/` — Pretendard `.ttf`, weights 100–900.
- `assets/` — `portrait.jpeg` (headshot) and any future logos/imagery.
- `preview/` — small specimen cards that populate the Design System tab.
- `ui_kits/portfolio/` — the portfolio/landing UI kit: `index.html` + JSX components
  (header, hero, project cards, skill grid, contact footer).
- `ui_kits/resume/` — the online résumé UI kit: `index.html` + JSX components
  (résumé header, experience timeline, skill rails, education/links rail).
- `ui_kits/career/` — the 경력기술서 (career-description) UI kit: `index.html` + JSX components
  (career header, detailed per-project block with 문제·해결·성과 structure).

UI kits:
- **portfolio** — the personal portfolio/landing site. Start at `ui_kits/portfolio/index.html`.
- **resume** — the structured online résumé / experience document. Start at
  `ui_kits/resume/index.html`.
- **career** — the 경력기술서 (career-description) document with per-project deep-dives. Start at
  `ui_kits/career/index.html`.
