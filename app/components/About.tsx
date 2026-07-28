const groups = [
  { k: 'Languages', v: ['JavaScript', 'TypeScript'] },
  { k: 'Frameworks', v: ['React', 'Next.js', 'Vue', 'React Native'] },
  { k: 'Styling', v: ['Tailwind CSS', 'SCSS', 'Emotion'] },
  { k: 'Data / State', v: ['React-Query', 'GraphQL', 'Zustand'] },
  { k: 'Infra', v: ['AWS', 'Vercel', 'Firebase', 'Supabase'] },
  {
    k: 'AI Tools',
    v: [
      'Claude Code',
      'MCP',
      'Claude Skills',
      'sub-agents',
      'Harness Engineering',
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--paper-sunk)] border-t border-b border-[var(--line)]"
    >
      <div className="about-inner px-fluid">
        <div>
          <div className="overline">About</div>
          <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-[18px]" />
          <p className="text-[17px] leading-[1.75] text-[var(--ink-2)] m-0">
            사용자와 가장 가까운 곳에서 일합니다.{' '}
            <b className="text-[var(--ink)]">
              React/Next.js 기반 스타트업 실서비스
            </b>
            를 다수 경험하며, 기능 개발부터 배포·운영까지 전반을 담당해
            왔습니다.
          </p>
          <p className="text-[15px] leading-[1.7] text-[var(--ink-3)] mt-[18px] mb-0">
            단순한 코딩 능력보다{' '}
            <b className="text-[var(--ink-2)]">
              AI 에이전트를 설계하고 운용하는 능력
            </b>
            이 중요해진 시대. MCP 연동·스킬 기반 컨텍스트 관리·에이전트
            워크플로우(Agentic Workflow)를 실무에 접목하며 계속 성장하려 합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[22px]">
          {groups.map((g) => (
            <div key={g.k}>
              <div className="overline text-[11px] text-[var(--accent)] mb-[10px]">
                {g.k}
              </div>
              <div className="flex flex-wrap gap-[7px]">
                {g.v.map((s) => (
                  <span
                    key={s}
                    className="[font-family:var(--font-mono)] text-[12.5px] font-medium px-[11px] py-[5px] rounded-[var(--r-xs)] bg-[var(--surface)] text-[var(--ink-2)] border border-[var(--line)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
