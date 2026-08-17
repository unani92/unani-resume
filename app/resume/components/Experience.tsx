type Bullet = string | { text: string; sub: string[] }

const roles: {
  company: string
  role: string
  period: string
  desc: string
  stack: string[]
  bullets: Bullet[]
}[] = [
  {
    company: '스토어링크',
    role: 'FrontEnd Developer',
    period: '2024.01 — 현재',
    desc: '리뷰 체험단 플랫폼 퍼그샵(한국·일본) 운영 이커머스 마케팅 에이전시',
    stack: [
      'Next.js',
      'TypeScript',
      'React-Query',
      'Tailwind CSS',
      'Zustand',
      'i18n',
      'Kotlin',
    ],
    bullets: [
      {
        text: '백엔드 개발자 출산휴가 공백 기간, AI 에이전트를 활용해 퍼그샵 일본 사용자/관리자 백엔드(Kotlin/Spring WebFlux, R2DBC) 업무 대체 수행',
        sub: [
          '서비스별 경계·업무 규칙을 문서로 구조화한 하네스로 세션 시작마다 AI가 해당 서비스에서 하면 안 되는 것과 규칙을 먼저 로드하도록 강제 — 국가·프로덕트가 얽힌 모노레포에서 다른 서비스 코드를 오염시키는 실수 차단',
          '설계(Architect) → 도메인 검증(Domain Expert) → 구현(Backend Developer) → 리뷰(Reviewer) → QA로 역할이 분리된 서브에이전트 워크플로우로, 판단하기 어려운 영역(도메인 규칙, 코드 리뷰 기준)을 서로 검증',
        ],
      },
      {
        text: '프론트엔드 설계, 구현 역할이 분리된 서브에이전트 워크플로우로 개발',
        sub: [
          '기존 비즈니스 로직이 정리된 문서들과 새로운 기획 문서/디자인 목업을 스캔해 구현 범위를 분석하고 구현해야 하는 작업이 기존 구현에 미칠 영향 범위를 분석(분석 에이전트)',
          '상기한 설계 문서를 포함해 기존의 컨벤션 스캔 및 정의된 업무 순서를 바탕으로 구현 플랜 문서화(플랜 에이전트)',
          '플랜 문서에서 확정된 내용만을 바탕으로 코딩을 수행(구현 에이전트) — 분석·플랜 단계에서 논의되지 않은 내용의 임의 구현(할루시네이션)을 금지해 설계 의도와 어긋난 결과물 발생 가능성 줄임',
        ],
      },
      {
        text: '기존 기능·엣지케이스 기반 Playwright e2e 테스트 설계·구현을 AI 에이전트 워크플로우로 편입',
        sub: [
          'data-testid 명명 규칙, 테스트 코드 구현 패턴, 값 주입이 어려운 UI에 한정된 우회 방법을 스킬로 문서화해 AI가 일관된 구조로 테스트 코드를 설계·작성하도록 강제',
          '핵심 비즈니스 로직을 한국어/일본어 서비스 동시 검증하도록 설계 — 리팩터링 시 기존 기능 누락 방지 및 QA 핑퐁으로 인한 시간 소요 절감',
        ],
      },
      '퍼그샵 한국·일본 사용자/관리자 페이지 리뉴얼 프론트엔드 개발',
      'i18n 다국어 처리로 KO/JP 동시 운영 효율화 및 공통 컴포넌트 설계',
      '기능 개발 및 유지보수 전반 담당',
    ],
  },
  {
    company: '슬릭코퍼레이션',
    role: 'FrontEnd Developer',
    period: '2022.05 — 2023.10',
    desc: "피트니스 CRM '하이파이브' 및 강사-회원 커머스 플랫폼 운영 스타트업",
    stack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Emotion',
      'React-Query',
      'Firebase',
      'Vercel',
    ],
    bullets: [
      '하이파이브 어드민 페이지 기능 개발 및 유지보수',
      '하이파이브 마켓 앱 내 웹뷰 커머스 플랫폼 MVP 단독 개발 완료',
    ],
  },
  {
    company: '바닐라브릿지',
    role: 'FrontEnd Developer',
    period: '2021.01 — 2022.05',
    desc: "소개팅 서비스 '바닐라브릿지', 4050 전용 앱 '반쪽' 운영 스타트업",
    stack: [
      'Vue',
      'Nuxt.js',
      'React Native',
      'JavaScript',
      'SCSS',
      'Firebase',
      'AWS S3',
    ],
    bullets: [
      '바닐라브릿지 앱 내 웹뷰 및 주선자 PC/모바일 클라이언트 비즈니스 로직 구현',
      "신규 앱 '반쪽' React Native + 웹뷰 개발 및 실서비스 배포",
      'AWS CLI를 통한 SPA 빌드 배포 자동화',
      'Firebase BigQuery 이벤트 로깅 및 Hackle A/B 테스트 환경 구축',
      'Airbridge SDK 연동을 통한 마케팅 성과 측정 환경 구성',
    ],
  },
  {
    company: '자이냅스',
    role: 'FrontEnd Developer',
    period: '2020.10 — 2020.12',
    desc: '텍스트 NLU·음성합성 등 AI 기술 기반 챗봇 스타트업',
    stack: ['Vue', 'JavaScript', 'SCSS', 'Docker'],
    bullets: [
      "정부과제 '창성' 프론트엔드 전반 — 코스피 200 주가정보 분석 웹서비스 개발",
      'Docker 패키징, Nginx 연동을 통한 사내 서버 배포',
    ],
  },
]

export default function Experience() {
  return (
    <div style={{ display: 'grid', gap: 32 }}>
      {roles.map((r, i) => (
        <div
          key={i}
          style={{ display: 'grid', gridTemplateColumns: '146px 1fr', gap: 20 }}
        >
          <div style={{ paddingTop: 2 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent)',
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              {r.period}
            </div>
          </div>
          <div
            style={{
              borderLeft: '2px solid var(--line)',
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: -6,
                top: 5,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '2px solid var(--surface)',
              }}
            />
            <h3
              style={{
                margin: 0,
                font: '700 19px/1.3 var(--font-sans)',
                letterSpacing: '-0.01em',
                color: 'var(--ink)',
              }}
            >
              {r.company}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--ink-3)',
                marginTop: 3,
              }}
            >
              {r.role}
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'var(--ink-4)',
                marginTop: 5,
                lineHeight: 1.5,
              }}
            >
              {r.desc}
            </div>
            <ul
              style={{
                margin: '12px 0 0',
                padding: 0,
                listStyle: 'none',
                display: 'grid',
                gap: 7,
              }}
            >
              {r.bullets.map((b, j) => {
                const text = typeof b === 'string' ? b : b.text
                const sub = typeof b === 'string' ? undefined : b.sub
                return (
                  <li key={j}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 10,
                        font: '400 14.5px/1.6 var(--font-sans)',
                        color: 'var(--ink-2)',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          marginTop: 1,
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      <span>{text}</span>
                    </div>
                    {sub && (
                      <ul
                        style={{
                          margin: '7px 0 0',
                          padding: 0,
                          listStyle: 'none',
                          display: 'grid',
                          gap: 6,
                          paddingLeft: 20,
                        }}
                      >
                        {sub.map((s, k) => (
                          <li
                            key={k}
                            style={{
                              display: 'flex',
                              gap: 8,
                              font: '400 13.5px/1.6 var(--font-sans)',
                              color: 'var(--ink-3)',
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--ink-4)',
                                marginTop: 1,
                                flexShrink: 0,
                              }}
                            >
                              ·
                            </span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 6,
                marginTop: 13,
              }}
            >
              {r.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11.5,
                    fontWeight: 500,
                    padding: '3px 9px',
                    borderRadius: 'var(--r-xs)',
                    background: 'var(--surface-2)',
                    color: 'var(--ink-3)',
                    border: '1px solid var(--line)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
