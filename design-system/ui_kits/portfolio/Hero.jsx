/* Portfolio — Hero.jsx · name, tagline, portrait, CTAs */
function PfHero() {
  const wrap = {
    display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(32px, 6vw, 80px)',
    alignItems: 'center', padding: 'clamp(48px, 9vw, 110px) clamp(20px, 6vw, 64px) clamp(40px, 7vw, 88px)',
    maxWidth: 1100, margin: '0 auto',
  };
  const over = {
    fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600,
    letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)',
  };
  const rule = { height: 2, width: 44, background: 'var(--line-ink)', margin: '14px 0 22px' };
  const tag = {
    display: 'inline-flex', alignItems: 'center', gap: 7, borderRadius: 'var(--r-pill)',
    padding: '5px 13px', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)',
    background: 'var(--accent-soft)', color: 'var(--accent-ink)',
  };
  return (
    <section style={wrap}>
      <div>
        <div style={over}>Backend Engineer · Seoul</div>
        <div style={rule}></div>
        <h1 style={{ margin: 0, font: '800 clamp(38px,5.5vw,68px)/1.05 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          복잡함을 단순하게,<br/>
          <span style={{ color: 'var(--accent)' }}>안정적인</span> 시스템을 만듭니다.
        </h1>
        <p style={{ margin: '24px 0 0', maxWidth: 460, font: '400 18px/1.7 var(--font-sans)', color: 'var(--ink-2)' }}>
          결제와 분산 시스템을 다루는 백엔드 개발자 정윤환입니다. 눈에 보이지 않는 곳에서
          제품을 단단하게 받치는 일을 좋아합니다.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
          <a href="#" onClick={e => e.preventDefault()} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
            font: '600 15px/1 var(--font-sans)', padding: '13px 22px', borderRadius: 'var(--r-sm)',
            background: 'var(--accent)', color: 'var(--on-accent)',
          }}>
            <i data-lucide="folder-open" style={{ width: 16, height: 16 }}></i>프로젝트 보기
          </a>
          <a href="#" onClick={e => e.preventDefault()} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none',
            font: '600 15px/1 var(--font-sans)', padding: '13px 22px', borderRadius: 'var(--r-sm)',
            background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line-strong)',
          }}>
            <i data-lucide="code-2" style={{ width: 16, height: 16 }}></i>깃허브
          </a>
        </div>
        <div style={{ display: 'flex', gap: 22, marginTop: 36, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-3)' }}>
          <span><b style={{ color: 'var(--accent)', fontSize: 17 }}>4</b>+ yrs</span>
          <span><b style={{ color: 'var(--accent)', fontSize: 17 }}>12</b> projects</span>
          <span><b style={{ color: 'var(--accent)', fontSize: 17 }}>3</b> teams</span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '14px -14px -14px 14px', borderRadius: 'var(--r-xl)', background: 'var(--accent-soft)' }}></div>
        <img src="../../assets/portrait-bright.jpeg" alt="정윤환"
             style={{ position: 'relative', width: '100%', maxWidth: 320, aspectRatio: '3/3.4', objectFit: 'cover',
            borderRadius: 'var(--r-xl)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-md)', filter: 'grayscale(.12) contrast(1.0)' }} />
        <span style={{ ...tag, position: 'absolute', bottom: -10, left: 18, background: 'var(--surface)', color: 'var(--success)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)' }}></span>구직 중
        </span>
      </div>
    </section>
  );
}
window.PfHero = PfHero;
