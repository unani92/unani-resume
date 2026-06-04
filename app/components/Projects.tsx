'use client'

import { useEffect, useRef, useState } from 'react'

type Feature = {
  title: string
  caption: string
  src: string
  poster?: string
}

type Project = {
  tag: string
  year: string
  title: string
  stack: string[]
  desc: string
  metric: string
  features?: Feature[]
}

const projects: Project[] = [
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
    tag: 'PLATFORM',
    year: '2025.6~',
    title: 'Pointail 광고주 페이지',
    stack: [
      'Next.js',
      'TypeScript',
      'React-Query',
      'Zustand',
      'Tailwind CSS',
      'i18n',
    ],
    desc: '퍼그샵을 일본 현지 시장에 맞춰 리브랜딩한 리뷰 체험단 플랫폼 Pointail의 광고주 페이지를 신규 개발. 광고주가 캠페인을 등록·관리하고 리뷰어 매칭과 성과 리포트를 확인하는 전 과정을 지원.',
    metric: '일본 현지 서비스',
    features: [
      {
        title: '홍보용 랜딩 페이지',
        caption:
          '광고주 유입을 위한 서비스 소개 랜딩. 일본어 카피와 CTA 구성, 스크롤 인터랙션 적용.',
        src: '/videos/pointail/landing.mp4',
        poster: '/videos/pointail/landing.jpg',
      },
      {
        title: '광고주 캠페인 생성 / 임시저장',
        caption:
          '단계별 폼으로 상품 정보·리뷰 조건·예산을 입력해 캠페인을 등록. 입력 단계별 검증과 자동 저장 적용.',
        src: '/videos/pointail/campaign-create.mp4',
        poster: '/videos/pointail/campaign-create.jpg',
      },
      {
        title: '캠페인 조회 및 수정',
        caption:
          '작성 중 이탈해도 입력값을 보존. 임시저장 목록에서 이어서 작성하거나 폐기 가능.',
        src: '/videos/pointail/campaign-draft.mp4',
        poster: '/videos/pointail/campaign-draft.jpg',
      },
      {
        title: '캠페인 복사',
        caption:
          '기존 캠페인 설정을 그대로 복제해 신규 캠페인으로 빠르게 등록. 반복 운영 광고주의 작업 시간 단축.',
        src: '/videos/pointail/campaign-duplicate.mp4',
        poster: '/videos/pointail/campaign-duplicate.jpg',
      },
      {
        title: '캠페인 리포트',
        caption:
          '캠페인 종료 후 리뷰 노출·전환 지표를 시각화. 광고주가 다음 캠페인을 설계할 수 있도록 핵심 KPI 강조.',
        src: '/videos/pointail/campaign-report.mp4',
        poster: '/videos/pointail/campaign-report.jpg',
      },
      {
        title: '일본어 지원',
        caption:
          '캠페인 진행 현황·리뷰어 매칭 상태를 한 화면에서 확인. 진행 단계에 따라 수정 가능한 필드를 동적으로 제어.',
        src: '/videos/pointail/campaign-detail.mp4',
        poster: '/videos/pointail/campaign-detail.jpg',
      },
    ],
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

                  {p.features && isOpen ? (
                    <FeatureShowcase features={p.features} />
                  ) : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function FeatureShowcase({ features }: { features: Feature[] }) {
  const [selected, setSelected] = useState(0)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const active = features[selected]

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.load()
  }, [selected])

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="mt-[24px] pt-[20px] border-t border-[var(--line)] grid grid-cols-[minmax(0,220px)_1fr] gap-[20px] max-md:grid-cols-1"
    >
      <ul className="flex flex-col gap-[4px] max-md:flex-row max-md:overflow-x-auto max-md:gap-[8px]">
        {features.map((f, idx) => {
          const isActive = idx === selected
          return (
            <li key={f.title} className="max-md:shrink-0">
              <button
                type="button"
                onClick={() => setSelected(idx)}
                className={`w-full text-left rounded-[var(--r-xs)] px-[12px] py-[10px] [transition:background_var(--dur)_var(--ease),color_var(--dur)_var(--ease)] cursor-pointer border ${
                  isActive
                    ? 'bg-[var(--accent-soft)] text-[var(--accent-ink)] border-[var(--accent-line)]'
                    : 'bg-transparent text-[var(--ink-3)] border-transparent hover:bg-[var(--surface-2)] hover:text-[var(--ink-2)]'
                }`}
              >
                <span className="block [font-family:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--ink-4)] mb-[2px]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="block text-[13px] font-semibold leading-[1.35] tracking-[-0.01em]">
                  {f.title}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-col gap-[12px] min-w-0">
        <div className="relative w-full aspect-video rounded-[var(--r-sm)] overflow-hidden bg-[var(--paper-sunk)] border border-[var(--line)]">
          <video
            key={active.src}
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover bg-black"
            src={active.src}
            poster={active.poster}
            controls
            muted
            playsInline
            preload="none"
          />
          <PlaceholderOverlay poster={active.poster} />
        </div>
        <p className="m-0 text-[13px] leading-[1.65] text-[var(--ink-3)]">
          <b className="text-[var(--ink-2)]">{active.title}</b>
          {' — '}
          {active.caption}
        </p>
      </div>
    </div>
  )
}

function PlaceholderOverlay({ poster }: { poster?: string }) {
  if (poster) return null
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="[font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-[var(--ink-4)]">
        영상 준비 중
      </span>
    </div>
  )
}
