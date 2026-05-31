# Portfolio UI Kit — 정윤환

A warm, editorial personal landing/portfolio site. Single-page, scroll-based, with a sticky
header and four sections.

## Run
Open `index.html`. React + Babel are loaded from CDN; icons from Lucide; tokens from
`../../colors_and_type.css`; portrait from `../../assets/portrait-bright.jpeg`.

## Components
- `Header.jsx` — `PfHeader` · sticky blurred top bar, monogram, nav, 이력서 CTA.
- `Hero.jsx` — `PfHero` · name, tagline, portrait with accent backdrop, status pill, stats.
- `Projects.jsx` — `PfProjects` · click-to-expand project list (accordion), stack tags, metric.
- `About.jsx` — `PfAbout` · short bio + skills grid on a recessed `--paper-sunk` band.
- `Footer.jsx` — `PfFooter` · contact CTA + mono links.

## Notes
- All copy is Korean-led with mono English labels — matches CONTENT FUNDAMENTALS.
- One accent (terracotta) used for the active nav, one hero word, metrics, and links.
- Brand icons (github/linkedin) are substituted with `code-2` / `briefcase` since Lucide
  dropped brand glyphs. Swap for a brand icon set if needed.
