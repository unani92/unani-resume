/* Portfolio — Footer.jsx · contact CTA + links */
function PfFooter() {
  const links = [
    { icon: 'mail', label: 'yunhwan@example.com', href: '#' },
    { icon: 'code-2', label: 'github.com/yunhwan', href: '#' },
    { icon: 'briefcase', label: 'linkedin.com/in/yunhwan', href: '#' },
  ];
  const sec = { padding: 'clamp(56px,9vw,110px) clamp(20px,6vw,64px) 56px', maxWidth: 1100, margin: '0 auto', textAlign: 'center' };
  const over = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)' };
  return (
    <footer id="contact" style={sec}>
      <div style={over}>Get in touch</div>
      <h2 style={{ font: '800 clamp(30px,4.5vw,52px)/1.1 var(--font-sans)', letterSpacing: '-0.03em', margin: '18px 0 0', color: 'var(--ink)' }}>
        함께 좋은 시스템을<br/>만들어요<span style={{ color: 'var(--accent)' }}>.</span>
      </h2>
      <a href="#" onClick={e => e.preventDefault()} style={{
        display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none', marginTop: 32,
        font: '600 16px/1 var(--font-sans)', padding: '15px 28px', borderRadius: 'var(--r-sm)',
        background: 'var(--accent)', color: 'var(--on-accent)', boxShadow: 'var(--shadow-sm)',
      }}>
        <i data-lucide="send" style={{ width: 17, height: 17 }}></i>연락하기
      </a>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 44, flexWrap: 'wrap' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={e => e.preventDefault()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-3)' }}>
            <i data-lucide={l.icon} style={{ width: 15, height: 15 }}></i>{l.label}
          </a>
        ))}
      </div>
      <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-4)', flexWrap: 'wrap', gap: 10 }}>
        <span>정윤환 · Jeong Yunhwan</span>
        <span>© 2025 · Built with Pretendard</span>
      </div>
    </footer>
  );
}
window.PfFooter = PfFooter;
