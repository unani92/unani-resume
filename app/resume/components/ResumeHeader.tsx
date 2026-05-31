import Image from 'next/image'

const meta = [
  { label: 'unani9292@gmail.com', href: 'mailto:unani9292@gmail.com' },
  { label: 'Seoul, KR' },
  { label: 'github.com/unani92', href: 'https://github.com/unani92' },
]

export default function ResumeHeader() {
  return (
    <header
      style={{
        display: 'flex',
        gap: 28,
        alignItems: 'flex-start',
        paddingBottom: 28,
        borderBottom: '2px solid var(--line-ink)',
      }}
    >
      <Image
        src="/images/portrait-bright.jpeg"
        alt="정윤환"
        width={96}
        height={116}
        style={{
          objectFit: 'cover',
          borderRadius: 'var(--r-sm)',
          border: '1px solid var(--line)',
          flexShrink: 0,
          filter: 'grayscale(.15) contrast(1.0)',
        }}
      />
      <div style={{ flex: 1 }}>
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
          FrontEnd Developer
        </div>
        <h1
          style={{
            margin: '6px 0 2px',
            font: '800 38px/1 var(--font-sans)',
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
          }}
        >
          정윤환{' '}
          <span
            style={{
              fontWeight: 500,
              fontSize: 20,
              color: 'var(--ink-4)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: 0,
            }}
          >
            Yoonhwan Jung
          </span>
        </h1>
        <p
          style={{
            margin: '12px 0 16px',
            font: '400 15px/1.65 var(--font-sans)',
            color: 'var(--ink-2)',
            maxWidth: 560,
          }}
        >
          React/Next.js 기반 스타트업 실서비스를 다수 경험한 5년 차 프론트엔드
          개발자입니다. 사용자와 가장 가까운 곳에서 실제로 쓰이는 서비스를
          만드는 것을 좋아합니다.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
          {meta.map((m) =>
            m.href ? (
              <a
                key={m.label}
                href={m.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  color: 'var(--ink-3)',
                  textDecoration: 'none',
                }}
              >
                {m.label}
              </a>
            ) : (
              <span
                key={m.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  color: 'var(--ink-3)',
                }}
              >
                {m.label}
              </span>
            ),
          )}
        </div>
      </div>
    </header>
  )
}
