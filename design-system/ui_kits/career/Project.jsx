/* 경력기술서 — Project.jsx · detailed per-project write-up block */
function CrBlock({ label, items, accent }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: accent ? 'var(--accent)' : 'var(--ink-3)', marginBottom: 8 }}>{label}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
        {items.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, font: '400 14.5px/1.65 var(--font-sans)', color: 'var(--ink-2)' }}>
            <span style={{ color: 'var(--accent)', marginTop: 1, flex: 'none' }}>—</span>
            <span dangerouslySetInnerHTML={{ __html: t }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CrProject({ p, index }) {
  return (
    <article style={{ padding: '30px 0', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>{String(index).padStart(2, '0')}</span>
          <h2 style={{ margin: 0, font: '700 23px/1.25 var(--font-sans)', letterSpacing: '-0.015em', color: 'var(--ink)' }}>{p.title}</h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-4)' }}>{p.period}</span>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-3)' }}>
        <span>{p.org}</span>
        <span style={{ color: 'var(--ink-4)' }}>·</span>
        <span>{p.role}</span>
        {p.team && (<><span style={{ color: 'var(--ink-4)' }}>·</span><span>{p.team}</span></>)}
      </div>

      <p style={{ margin: '14px 0 4px', font: '500 16px/1.6 var(--font-sans)', color: 'var(--ink)' }}>{p.summary}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '14px 0 4px' }}>
        {p.stack.map(s => (
          <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, padding: '4px 10px', borderRadius: 'var(--r-xs)', background: 'var(--surface-2)', color: 'var(--ink-2)', border: '1px solid var(--line)' }}>{s}</span>
        ))}
      </div>

      <CrBlock label="문제 · Problem" items={p.problem} />
      <CrBlock label="해결 · Approach" items={p.approach} accent />
      <div style={{ marginTop: 18, padding: '16px 18px', background: 'var(--accent-soft)', borderRadius: 'var(--r-sm)', border: '1px solid var(--accent-line)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent-ink)', marginBottom: 8 }}>성과 · Result</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px' }}>
          {p.results.map((r, i) => (
            <div key={i} style={{ minWidth: 120 }}>
              <div style={{ font: '800 22px/1 var(--font-sans)', color: 'var(--accent-ink)', letterSpacing: '-0.02em' }}>{r.metric}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 4 }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
window.CrProject = CrProject;
window.CrBlock = CrBlock;
