# 경력기술서 UI Kit — 정윤환

A detailed developer career-description document (경력기술서). Unlike the résumé (which is a
year-based summary), this expands each project into a structured deep-dive.

## Run
Open `index.html`. Sticky toolbar (인쇄 / PDF 저장) hides on print; each project block avoids
page breaks (`break-inside: avoid`).

## Components
- `CareerHeader.jsx` — `CrHeader` · compact masthead, summary paragraph, 3-column skill summary.
- `Project.jsx` — `CrProject` (and helper `CrBlock`) · one detailed project block:
  number + title + period, org · role · team, one-line summary, stack tags, then
  **문제 · Problem → 해결 · Approach → 성과 · Result**. Results render as large accented metrics
  in a tinted box.

## Data shape (per project)
```
{ title, period, org, role, team, summary, stack: [],
  problem: [html…], approach: [html…],
  results: [{ metric, label }] }
```
`problem`/`approach` items accept inline `<b>…</b>` for emphasis (rendered via dangerouslySetInnerHTML).

## Notes
- Structure follows CONTENT FUNDAMENTALS: outcome-first, concrete mono numbers, no emoji.
- Pairs with the résumé kit — résumé = scannable timeline, 경력기술서 = narrative depth.
