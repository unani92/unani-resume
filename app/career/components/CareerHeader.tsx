const skills = [
  { k: 'Languages', v: 'TypeScript · JavaScript' },
  { k: 'Frontend', v: 'React · Next.js · React Native · Vue/Nuxt' },
  { k: 'Styling / State', v: 'Tailwind · Emotion · React-Query · Zustand' },
]

const meta = [
  { v: 'unani9292@gmail.com' },
  { v: 'github.com/unani92' },
  { v: '+82 10-4906-3273' },
]

export default function CareerHeader() {
  return (
    <header>
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <div className="font-mono text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
            경력기술서 · Career Description
          </div>
          <h1 className="mt-2 mb-0 font-sans font-extrabold text-[34px] leading-none tracking-[-0.025em] text-[var(--ink)]">
            정윤환{' '}
            <span className="font-medium text-[17px] text-[var(--ink-4)] font-mono">
              AI Native FrontEnd Developer · 5+ yrs
            </span>
          </h1>
        </div>
        <div className="grid gap-[5px] text-right">
          {meta.map((m) => (
            <span
              key={m.v}
              className="inline-flex items-center justify-end gap-[7px] font-mono text-[12px] text-[var(--ink-3)]"
            >
              {m.v}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-[18px] mb-5 font-sans font-normal text-[15.5px] leading-[1.7] text-[var(--ink-2)] max-w-[680px]">
        React·Next.js 기반 스타트업 실서비스를 다수 운영해 온 5년차 프론트엔드
        개발자입니다. 사용자와 가장 가까운 곳에서 비즈니스 임팩트로 이어지는 UX
        개선을 만드는 일에 집중합니다. 최근에는 일본 체험단 마케팅 플랫폼
        Pointail의 광고주 페이지를 도메인 단일 책임자로서 처음부터 끝까지
        설계·운영하고 있습니다.
      </p>

      <div className="grid grid-cols-3 gap-4 py-4 border-t border-[var(--line)] border-b-2 border-b-[var(--line-ink)]">
        {skills.map((s) => (
          <div key={s.k}>
            <div className="font-mono text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[var(--accent)] mb-[5px]">
              {s.k}
            </div>
            <div className="font-mono text-[12.5px] text-[var(--ink-2)] leading-[1.5]">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}
