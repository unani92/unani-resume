const phases = [
  {
    no: "01",
    title: "첫 걸음 — 그냥 해줘",
    desc: "단순 지시로 의도와 맞지 않는 결과물을 받으며 AI 도구의 한계를 체감. 불필요한 파일까지 context에 로드해 토큰을 낭비하는 패턴을 경험.",
    tags: ["GitHub Copilot", "ChatGPT"],
    current: false,
  },
  {
    no: "02",
    title: "레퍼런스 주도 프롬프팅",
    desc: "기존 코드·디자인 레퍼런스를 먼저 제공하고 \"이대로 적용\" 방식으로 일관성 확보. 프롬프트 품질이 결과물 품질을 결정한다는 것을 학습.",
    tags: ["Claude", "Prompt Engineering"],
    current: false,
  },
  {
    no: "03",
    title: "MCP 연동 자동화",
    desc: "Jira·GitHub·Notion·Figma MCP를 연동해 컨텍스트 수집을 자동화. Figma selection의 레이어 스타일 누락 이슈는 HTML 결과물 기반 지시 방식으로 해결.",
    tags: ["MCP", "Figma", "Notion", "GitHub"],
    current: false,
  },
  {
    no: "04",
    title: "스킬 기반 컨텍스트 최적화",
    desc: "CLAUDE.md에 집중된 컨텍스트를 업무별 스킬 파일로 분산. 대화가 초기화돼도 스킬 로드로 일관성 유지. MCP → Connector 표준 전환에도 빠르게 적응.",
    tags: ["Claude Code", "Skills", "Token 최적화"],
    current: false,
  },
  {
    no: "05",
    title: "Harness Engineering",
    desc: "프롬프트 엔지니어링에 하네스 엔지니어링을 접목. 린트·타입체크를 훅으로 연결해 빌드 안전성을 보장하고, 중요 비즈니스 로직엔 e2e 테스트로 자동 검증 플로우 구축.",
    tags: ["ESLint", "TypeScript", "Playwright", "CI Hook"],
    current: false,
  },
  {
    no: "06",
    title: "멀티 에이전트 아키텍처",
    desc: "TDD 에이전트가 테스트코드를 작성하고 FE 구현 에이전트가 이를 받아 개발을 진행하는 서브 에이전트 협업 구조 운용. AI 에이전트의 발전 속도에 발맞춰 워크플로우도 계속 진화 중.",
    tags: ["Sub-agent", "TDD", "Multi-agent", "Claude Code"],
    current: true,
  },
];

export default function AiEvolution() {
  return (
    <section className="bg-[var(--paper-sunk)] border-t border-b border-[var(--line)]">
      <div className="section-wrap px-fluid">
        <div className="overline">AI Workflow</div>
        <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-1" />
        <h2 className="m-0 text-[clamp(26px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] mt-[14px] mb-[24px]">
          AI와 함께 진화하는 개발 방식
        </h2>

        {/* 부연설명 */}
        <div className="grid grid-cols-2 gap-[clamp(24px,4vw,52px)] mb-[30px] pb-[28px] border-b border-[var(--line)]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="text-[13px] font-bold text-[var(--ink)] tracking-[-0.01em]">
                AI로 높아진 개발 생산성
              </span>
            </div>
            <p className="m-0 text-[14px] leading-[1.7] text-[var(--ink-3)] pl-[18px]">
              AI 워크플로우를 실무에 내재화해 기획·설계·구현·검증 사이클을 빠르게 반복합니다.
              린트·타입체크·e2e 훅으로 빌드 안전성을 자동 보장하기 때문에
              <b className="text-[var(--ink-2)]"> 개발 속도와 코드 품질을 함께 끌어올릴 수 있습니다.</b>
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="text-[13px] font-bold text-[var(--ink)] tracking-[-0.01em]">
                기술 변화에 발맞춘 성장
              </span>
            </div>
            <p className="m-0 text-[14px] leading-[1.7] text-[var(--ink-3)] pl-[18px]">
              특정 스택에 안주하지 않고 AI 에이전트·MCP·멀티 에이전트 아키텍처 등
              새로운 패러다임을 실무에 직접 접목해 왔습니다.
              <b className="text-[var(--ink-2)]"> 도구와 생태계가 빠르게 바뀌는 지금,</b> 그 변화를
              가장 빠르게 흡수하는 개발자가 되고자 합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[14px]">
          {phases.map((p) => (
            <div
              key={p.no}
              className={`relative rounded-[var(--r-md)] p-[22px_20px] border flex flex-col gap-3 ${
                p.current
                  ? "bg-[var(--surface)] border-[var(--accent-line)] shadow-[var(--shadow-md)]"
                  : "bg-[var(--surface)] border-[var(--line)] shadow-[var(--shadow-xs)]"
              }`}
            >
              {p.current && (
                <span className="absolute top-[-1px] right-[-1px] rounded-bl-[var(--r-xs)] rounded-tr-[var(--r-md)] px-[10px] py-[4px] text-[11px] font-semibold [font-family:var(--font-mono)] bg-[var(--accent)] text-[var(--on-accent)]">
                  현재 진행형
                </span>
              )}

              <span className="[font-family:var(--font-mono)] text-[28px] font-bold leading-none text-[var(--line-strong)]">
                {p.no}
              </span>

              <h3 className="m-0 text-[15px] font-bold leading-[1.3] tracking-[-0.01em] text-[var(--ink)]">
                {p.title}
              </h3>

              <p className="m-0 text-[13px] leading-[1.65] text-[var(--ink-3)] flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-[6px] mt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`[font-family:var(--font-mono)] text-[11px] font-medium px-[8px] py-[3px] rounded-[var(--r-xs)] border ${
                      p.current
                        ? "bg-[var(--accent-soft)] text-[var(--accent-ink)] border-[var(--accent-line)]"
                        : "bg-[var(--surface-2)] text-[var(--ink-3)] border-[var(--line)]"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
