/* Résumé — ResumeHeader.jsx · masthead with portrait, contact, summary */
function RsHeader() {
  const meta = [
    { icon: 'mail', v: 'yunhwan@example.com' },
    { icon: 'phone', v: '010-1234-5678' },
    { icon: 'map-pin', v: 'Seoul, KR' },
    { icon: 'code-2', v: 'github.com/yunhwan' },
  ];
  return (
    <header style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: 28, borderBottom: '2px solid var(--line-ink)' }}>
      <img src="../../assets/portrait-bright.jpeg" alt="정윤환"
           style={{ width: 96, height: 116, objectFit: 'cover', borderRadius: 'var(--r-sm)', border: '1px solid var(--line)', flex: 'none', filter: 'grayscale(.15) contrast(1.0)' }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>Backend Engineer</div>
        <h1 style={{ margin: '6px 0 2px', font: '800 38px/1 var(--font-sans)', letterSpacing: '-0.025em', color: 'var(--ink)' }}>
          정윤환 <span style={{ fontWeight: 500, fontSize: 20, color: 'var(--ink-4)', fontFamily: 'var(--font-mono)', letterSpacing: '0' }}>Jeong Yunhwan</span>
        </h1>
        <p style={{ margin: '12px 0 16px', font: '400 15px/1.65 var(--font-sans)', color: 'var(--ink-2)', maxWidth: 560 }}>
          결제·정산 도메인에서 안정적인 분산 시스템을 설계해 온 4년 차 백엔드 개발자입니다.
          단순한 설계와 관측 가능성으로 운영 부담을 줄이는 일을 좋아합니다.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
          {meta.map(m => (
            <span key={m.v} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-3)' }}>
              <i data-lucide={m.icon} style={{ width: 14, height: 14, color: 'var(--ink-4)' }}></i>{m.v}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
window.RsHeader = RsHeader;
