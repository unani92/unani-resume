const skills = [
  { k: 'Languages', v: 'JavaScript · TypeScript' },
  { k: 'Frameworks', v: 'React · Next.js · Vue · Nuxt · React Native' },
  { k: 'Styling', v: 'Tailwind CSS · SCSS · Emotion' },
  { k: 'Data / State', v: 'React-Query · GraphQL · Zustand · Redux' },
  { k: 'Backend', v: 'Node.js · NestJS · Prisma · MySQL' },
  { k: 'Infra', v: 'AWS · Vercel · Firebase · Supabase' },
]

const edu = [
  {
    d: '2013.03 — 2017.02',
    t: '건국대학교(서울) 기술경영학과',
    s: '학사 졸업',
  },
  {
    d: '2020.01 — 2020.10',
    t: '삼성청년소프트웨어아카데미',
    s: 'SSAFY 3기 수료',
  },
]

const projects = [
  {
    t: 'FC서울 수호신 커뮤니티',
    v: 'fcseoul12.com',
    href: 'https://www.fcseoul12.com',
    s: 'Next.js 14 · Tailwind · Prisma · Redis',
    m: 'DAU 최다 2,300',
  },
]

const links = [
  { v: 'github.com/unani92', href: 'https://github.com/unani92' },
  { v: 'unani9292@gmail.com', href: 'mailto:unani9292@gmail.com' },
]

const labelStyle = {
  font: '700 12px/1 var(--font-mono)',
  letterSpacing: '.16em',
  textTransform: 'uppercase' as const,
  color: 'var(--accent)',
  marginBottom: 12,
}

export default function SideRail() {
  return (
    <aside style={{ display: 'grid', gap: 28, alignContent: 'start' }}>
      <div>
        <div style={labelStyle}>Skills</div>
        <div style={{ display: 'grid', gap: 10 }}>
          {skills.map((s) => (
            <div key={s.k}>
              <div
                style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)' }}
              >
                {s.k}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--ink-3)',
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={labelStyle}>Education</div>
        <div style={{ display: 'grid', gap: 14 }}>
          {edu.map((e) => (
            <div key={e.t}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11.5,
                  color: 'var(--ink-4)',
                }}
              >
                {e.d}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginTop: 3,
                }}
              >
                {e.t}
              </div>
              <div
                style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}
              >
                {e.s}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={labelStyle}>Side Project</div>
        <div style={{ display: 'grid', gap: 12 }}>
          {projects.map((p) => (
            <div key={p.t}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                {p.t}
              </a>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--accent)',
                  marginTop: 2,
                }}
              >
                {p.m}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11.5,
                  color: 'var(--ink-4)',
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                {p.s}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={labelStyle}>Links</div>
        <div style={{ display: 'grid', gap: 9 }}>
          {links.map((l) => (
            <a
              key={l.v}
              href={l.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 12.5,
                color: 'var(--ink-2)',
              }}
            >
              {l.v}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
