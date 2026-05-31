'use client'

import { useState } from 'react'

const projects = [
  {
    tag: 'SIDE',
    year: '2023~',
    title: 'FC서울 수호신 커뮤니티',
    stack: [
      'Next.js 14',
      'Tailwind CSS',
      'React-Query',
      'Prisma',
      'MySQL',
      'Redis',
    ],
    desc: "FC서울 팬 모임 '수호신'의 커뮤니티·굿즈·원정버스 예약 플랫폼. Next.js App Router 기반 풀스택으로 직접 개발·운영 중. 카카오 OAuth, SEO 최적화, Redis 캐싱 적용.",
    metric: 'DAU 최다 2,300',
  },
  {
    tag: 'PLATFORM',
    year: '2024~',
    title: '퍼그샵 KO/JP 리뉴얼',
    stack: [
      'Next.js',
      'TypeScript',
      'React-Query',
      'Zustand',
      'Tailwind CSS',
      'i18n',
    ],
    desc: '한국·일본 이커머스 리뷰 체험단 플랫폼 퍼그샵 사용자/관리자 페이지 리뉴얼. 다국어(i18n) 지원 및 공통 컴포넌트 설계로 KO/JP 동시 운영 효율화.',
    metric: 'KO · JP 다국어',
  },
  {
    tag: 'STARTUP',
    year: '2023',
    title: '하이파이브 마켓 MVP',
    stack: [
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Emotion',
      'Firebase',
      'Vercel',
    ],
    desc: '피트니스 강사가 회원에게 상품을 판매하는 인앱 커머스 웹뷰 MVP 개발 완료. GraphQL API 연동 및 Emotion 기반 디자인 시스템으로 빠른 프로토타이핑 달성.',
    metric: 'MVP 단독 개발',
  },
  {
    tag: 'APP',
    year: '2021~2022',
    title: '반쪽 앱 — React Native',
    stack: ['React Native', 'Vue', 'Nuxt.js', 'SCSS', 'Firebase', 'AWS S3'],
    desc: "4050 전용 소개팅 앱 '반쪽' React Native + 웹뷰 신규 개발 및 실서비스 배포. 바닐라브릿지 앱 로깅 환경(Firebase BigQuery)·A/B 테스트(Hackle) 구축 병행.",
    metric: '실서비스 배포',
  },
]

export default function Projects() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="work" className="section-wrap px-fluid">
      <div className="overline">Selected Work</div>
      <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-1" />
      <h2 className="text-[clamp(26px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] mt-[14px] mb-[30px]">
        프로젝트
      </h2>
      <div className="grid gap-[14px]">
        {projects.map((p, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`bg-[var(--surface)] border border-[var(--line)] rounded-[var(--r-md)] p-[22px_24px] cursor-pointer [transition:box-shadow_var(--dur)_var(--ease)] ${
                isOpen
                  ? 'shadow-[var(--shadow-md)]'
                  : 'shadow-[var(--shadow-xs)]'
              }`}
            >
              <div className="flex justify-between items-baseline gap-4">
                <div className="flex items-baseline gap-[14px] flex-wrap">
                  <span className="overline text-[11px] text-[var(--accent)]">
                    {p.tag}
                  </span>
                  <h3 className="m-0 text-[21px] font-bold leading-[1.3] tracking-[-0.01em]">
                    {p.title}
                  </h3>
                </div>
                <span className="[font-family:var(--font-mono)] text-[13px] text-[var(--ink-4)] shrink-0">
                  {p.year}
                </span>
              </div>
              <div
                className={`grid [transition:grid-template-rows_var(--dur-slow)_var(--ease)] ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="my-[14px] text-[15px] leading-[1.65] text-[var(--ink-2)] max-w-[620px]">
                    {p.desc}
                  </p>
                  <div className="flex gap-2 items-center flex-wrap">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="[font-family:var(--font-mono)] text-[12px] font-medium px-[10px] py-1 rounded-[var(--r-xs)] bg-[var(--surface-2)] text-[var(--ink-2)] border border-[var(--line)]"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="ml-auto [font-family:var(--font-mono)] font-semibold text-[13px] text-[var(--accent)]">
                      {p.metric}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
