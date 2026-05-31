# Résumé UI Kit — 정윤환

A structured, print-ready online résumé (온라인 이력서). Document "sheet" centered on a recessed
background, with a sticky toolbar (인쇄 / PDF 저장) that hides on print.

## Run
Open `index.html`. A `@media print` block strips the toolbar and sheet chrome so Cmd/Ctrl+P
produces a clean PDF.

## Components
- `ResumeHeader.jsx` — `RsHeader` · portrait, name (KR + mono romanization), role, summary, contact meta.
- `Section.jsx` — `RsSection` · shared mono-eyebrow + label heading used across the doc.
- `Experience.jsx` — `RsExperience` · period-rail timeline with accent node, outcome bullets, stack tags.
- `SideRail.jsx` — `RsSideRail` · skills, education, and links (right column).

## Notes
- Bullets follow `[무엇을] → [어떻게] → [결과/수치]`; numbers are mono and accented.
- Two-column body collapses gracefully; layout is calm and document-like (radii kept modest).
- Portrait uses the brightened `portrait-bright.jpeg`.
