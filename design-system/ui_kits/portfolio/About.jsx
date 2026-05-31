/* Portfolio — About.jsx · skills grid + short bio */
function PfAbout() {
  const groups = [
    { k: 'Languages', v: ['Kotlin', 'Go', 'TypeScript', 'Java', 'Python'] },
    { k: 'Backend', v: ['Spring', 'Node.js', 'gRPC', 'GraphQL'] },
    { k: 'Data', v: ['PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch'] },
    { k: 'Infra', v: ['AWS', 'Kubernetes', 'Terraform', 'Grafana'] },
  ];
  const sec = { background: 'var(--paper-sunk)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' };
  const inner = { padding: 'clamp(40px,7vw,80px) clamp(20px,6vw,64px)', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 'clamp(32px,6vw,72px)' };
  const over = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)' };
  return (
    <section id="about" style={sec}>
      <div style={inner}>
        <div>
          <div style={over}>About</div>
          <div style={{ height: 2, width: 44, background: 'var(--line-ink)', margin: '12px 0 18px' }}></div>
          <p style={{ font: '400 17px/1.75 var(--font-sans)', color: 'var(--ink-2)', margin: 0 }}>
            장애가 나지 않는 시스템보다, <b style={{ color: 'var(--ink)' }}>장애에서 빠르게 회복하는</b> 시스템을 믿습니다.
            관측 가능성과 단순한 설계로 팀이 밤에 잘 자게 만드는 일을 합니다.
          </p>
          <p style={{ font: '400 15px/1.7 var(--font-sans)', color: 'var(--ink-3)', marginTop: 18 }}>
            주말에는 작은 사이드 프로젝트를 만들고, 좋은 개발 문화에 대한 글을 씁니다.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {groups.map(g => (
            <div key={g.k}>
              <div style={{ ...over, fontSize: 11, color: 'var(--accent)', marginBottom: 10 }}>{g.k}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.v.map(s => (
                  <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 500, padding: '5px 11px', borderRadius: 'var(--r-xs)', background: 'var(--surface)', color: 'var(--ink-2)', border: '1px solid var(--line)' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PfAbout = PfAbout;
