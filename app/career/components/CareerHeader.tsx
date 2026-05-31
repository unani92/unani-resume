const skills = [
  { k: 'Languages', v: 'Kotlin · Go · TypeScript' },
  { k: 'Backend', v: 'Spring · gRPC · Kafka' },
  { k: 'Data / Infra', v: 'PostgreSQL · Redis · AWS · K8s' },
]

const meta = [
  { v: 'unani9292@gmail.com' },
  { v: 'github.com/yunhwan' },
  { v: 'yunhwan.dev' },
]

export default function CareerHeader() {
  return (
    <header>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            경력기술서 · Career Description
          </div>
          <h1
            style={{
              margin: '8px 0 0',
              font: '800 34px/1 var(--font-sans)',
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
            }}
          >
            정윤환{' '}
            <span
              style={{
                fontWeight: 500,
                fontSize: 17,
                color: 'var(--ink-4)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Backend Engineer · 4 yrs
            </span>
          </h1>
        </div>
        <div style={{ display: 'grid', gap: 5, textAlign: 'right' }}>
          {meta.map((m) => (
            <span
              key={m.v}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 7,
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-3)',
              }}
            >
              {m.v}
            </span>
          ))}
        </div>
      </div>

      <p
        style={{
          margin: '18px 0 20px',
          font: '400 15.5px/1.7 var(--font-sans)',
          color: 'var(--ink-2)',
          maxWidth: 680,
        }}
      >
        결제·정산 도메인에서 대용량 트래픽을 다루는 분산 시스템을 설계하고
        운영해 왔습니다. 단순한 설계와 관측 가능성을 통해 장애를 빠르게
        복구하고, 팀이 안정적으로 제품을 출시할 수 있도록 만드는 일에
        집중합니다.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          padding: '16px 0',
          borderTop: '1px solid var(--line)',
          borderBottom: '2px solid var(--line-ink)',
        }}
      >
        {skills.map((s) => (
          <div key={s.k}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 5,
              }}
            >
              {s.k}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                color: 'var(--ink-2)',
                lineHeight: 1.5,
              }}
            >
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}
