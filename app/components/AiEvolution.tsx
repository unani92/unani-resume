type Phase = {
  no: string
  title: string
  desc: string
  example?: string
  tags: string[]
  current: boolean
}

const phases: Phase[] = [
  {
    no: '01',
    title: '첫 걸음 — 그냥 해줘',
    desc: '단순 지시로 의도와 맞지 않는 결과물을 받으며 AI 도구의 한계를 체감. 불필요한 파일까지 context에 로드해 토큰을 낭비하는 패턴을 경험.',
    tags: ['GitHub Copilot', 'ChatGPT'],
    current: false,
  },
  {
    no: '02',
    title: '레퍼런스 주도 프롬프팅',
    desc: '기존 코드·디자인 레퍼런스를 먼저 제공하고 "이대로 적용" 방식으로 일관성 확보. 프롬프트 품질이 결과물 품질을 결정한다는 것을 학습.',
    example:
      '\'A.tsx\' 의 구조를 참고해서 "../../page/B.tsx" 를 구현해줘. 함수가 필요하면 새로 만들지 말고 utils.ts 에 기존에 만들어져 있는 함수가 있는지 먼저 확인하고 없는 경우에만 만들어줘.',
    tags: ['Claude', 'Prompt Engineering'],
    current: false,
  },
  {
    no: '03',
    title: 'MCP 연동 자동화',
    desc: 'Jira·GitHub·Notion·Figma MCP를 연동해 컨텍스트 수집을 자동화. Figma selection의 레이어 스타일 누락 이슈는 HTML 결과물 기반 지시 방식으로 해결.',
    example:
      '(Figma copy selection 이후) 해당 링크를 바탕으로 공통으로 사용 가능한 입력창 만들어줘. 지금까지 작업물 dev 브랜치로 머지하고 description 작성해줘. 작성된 내용은 노션으로 만들어줘.',
    tags: ['MCP', 'Figma', 'Notion', 'GitHub'],
    current: false,
  },
  {
    no: '04',
    title: '스킬 기반 컨텍스트 최적화',
    desc: 'CLAUDE.md에 집중된 컨텍스트를 업무별 스킬 파일로 분산. 대화가 초기화돼도 스킬 로드로 일관성 유지. MCP → Connector 표준 전환에도 빠르게 적응.',
    example:
      '"/ga-analyzer" 스킬을 사용해서 성과측정 보고서를 출력하는 스크립트 만들어줘.',
    tags: ['Claude Code', 'Skills', 'Token 최적화'],
    current: false,
  },
  {
    no: '05',
    title: 'Harness Engineering',
    desc: 'LLM이 생성한 코드는 양이 많아 사람이 전수 리뷰하기 어렵다는 한계에서 출발. FE는 PostToolUse 훅과 전용 스킬로 포맷·i18n을 자동 재검증하고, BE는 규칙 문서를 룰 단위로 강제해 존재하지 않는 코드를 지어내거나 운영 데이터를 건드리는 실수를 원천 차단하는 안전망을 구축.',
    example:
      '(FE) PostToolUse 훅으로 Write/Edit 직후 Biome 자동 포맷. 컴포넌트 구현이 끝나면 check-translations 스킬이 자동 트리거돼 번역 누락(하드코딩 문구)을 스캔·자동 wrap, 중요 로직은 e2e로 기존 기능 동작 여부까지 검증.\n(BE) safety.md 룰로 존재하지 않는 클래스·테이블 생성과 운영 설정 파일 직접 수정을 원천 차단하고, testing.md 룰로 코루틴 테스트는 반드시 coEvery/coVerify를 쓰도록 강제해 잘못된 스텁이 그대로 통과되는 걸 막습니다.',
    tags: [
      'Biome',
      'TypeScript',
      'Playwright',
      'PostToolUse Hook',
      'Rule-driven Guardrail',
    ],
    current: false,
  },
  {
    no: '06',
    title: '멀티 에이전트 아키텍처',
    desc: '백엔드 모노레포에는 Architect·Domain Expert·Backend Developer·Reviewer·QA로 역할을 나눈 서브에이전트 파이프라인을, 프론트엔드에는 API 연동·번역 검증·E2E 작성처럼 공정별로 특화된 스킬을 배치해 하나의 요청이 여러 전문 에이전트/스킬을 순서대로 거치도록 설계. AI 에이전트의 발전 속도에 발맞춰 워크플로우도 계속 진화 중.',
    example:
      '(FE) 신규 API 연동은 api-hook-workflow 스킬이 스펙 동기화 → 엔드포인트 정의 → TanStack Query 훅 구현 → typecheck/lint 순서를 강제.\n(BE) Architect가 설계하면 Backend Developer가 구현하고, Reviewer가 APPROVE/REQUEST_CHANGES로 독립 검증한 뒤 QA가 회귀 범위를 확정.',
    tags: ['Sub-agent', 'Skill Orchestration', 'TDD', 'Multi-agent'],
    current: true,
  },
]

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
              AI 워크플로우를 실무에 내재화해 기획·설계·구현·검증 사이클을
              빠르게 수행합니다. 이를 통해
              <b className="text-[var(--ink-2)]">
                {' '}
                개발 속도와 코드 품질을 함께 끌어올릴 수 있습니다.
              </b>
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
              특정 스택에 안주하지 않고 AI 에이전트·MCP·멀티 에이전트 아키텍처
              등 새로운 패러다임을 실무에 직접 접목해 왔습니다.
              <b className="text-[var(--ink-2)]">
                {' '}
                도구와 생태계가 빠르게 바뀌는 지금,
              </b>{' '}
              그 변화를 가장 빠르게 흡수하는 개발자가 되고자 합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[14px]">
          {phases.map((p) => (
            <div
              key={p.no}
              className={`relative rounded-[var(--r-md)] p-[22px_20px] border flex flex-col gap-3 ${
                p.current
                  ? 'bg-[var(--surface)] border-[var(--accent-line)] shadow-[var(--shadow-md)]'
                  : 'bg-[var(--surface)] border-[var(--line)] shadow-[var(--shadow-xs)]'
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

              <p
                className={`m-0 text-[13px] leading-[1.65] text-[var(--ink-3)] ${p.example ? 'min-h-[90px]' : ''}`}
              >
                {p.desc}
              </p>

              {p.example ? (
                <div className="rounded-[var(--r-xs)] bg-[var(--paper-sunk)] border border-[var(--line)] px-[12px] py-[10px] flex-1">
                  <span className="block text-[10px] font-semibold [font-family:var(--font-mono)] text-[var(--ink-4)] mb-[6px] uppercase tracking-[0.06em]">
                    사용 예시
                  </span>
                  <p className="m-0 whitespace-pre-line text-[12px] leading-[1.6] [font-family:var(--font-mono)] text-[var(--ink-2)]">
                    {p.example}
                  </p>
                </div>
              ) : (
                <div className="flex-1" />
              )}

              <div className="flex flex-wrap gap-[6px] mt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`[font-family:var(--font-mono)] text-[11px] font-medium px-[8px] py-[3px] rounded-[var(--r-xs)] border ${
                      p.current
                        ? 'bg-[var(--accent-soft)] text-[var(--accent-ink)] border-[var(--accent-line)]'
                        : 'bg-[var(--surface-2)] text-[var(--ink-3)] border-[var(--line)]'
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
  )
}
