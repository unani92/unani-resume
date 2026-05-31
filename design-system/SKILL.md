---
name: jeong-yunhwan-design
description: Use this skill to generate well-branded interfaces and assets for 정윤환's developer résumé / portfolio brand ("Warm Editorial" — warm cream paper, soft warm-black ink, terracotta accent, Pretendard + mono metadata), either for production or throwaway prototypes/mocks. Contains design guidelines, color + type tokens, fonts, the portrait asset, and portfolio + résumé UI kit components.
user-invocable: true
---

Read the `README.md` file within this skill first — it covers context, CONTENT FUNDAMENTALS
(how copy is written), VISUAL FOUNDATIONS (color, type, spacing, motion, etc.), and ICONOGRAPHY.
Then explore the other available files:

- `colors_and_type.css` — all design tokens (fonts, color scale, terracotta accent, radii,
  spacing, shadows, motion, semantic type). Import this in every artifact.
- `fonts/` — Pretendard (100–900). Mono is JetBrains Mono via Google Fonts CDN (a substitution).
- `assets/` — `portrait.jpeg` (original) and `portrait-bright.jpeg` (brightened, preferred).
- `preview/` — token/specimen cards for reference.
- `ui_kits/portfolio/`, `ui_kits/resume/`, and `ui_kits/career/` — high-fidelity React/Babel
  recreations to reuse (landing site, online résumé, and 경력기술서 career-description doc).

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create
static HTML files for the user to view. If working on production code, copy assets and apply the
rules here to design as an expert in this brand.

If the user invokes this skill without other guidance, ask what they want to build, ask a few
focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code
depending on the need. Keep the voice warm, human, and precise; never use emoji; lead copy in
Korean with mono English labels; use the terracotta accent sparingly.
