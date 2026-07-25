import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section px-fluid">
      <div>
        <div className="overline">FrontEnd Developer · Seoul</div>
        <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-[14px] mb-[22px]" />
        <h2 className="m-0 text-[clamp(38px,4vw,44px)] font-extrabold leading-15 tracking-[-0.03em] text-[var(--ink)]">
          사용자와 가장 가까운 곳에서,
          <br />
          <span className="text-[var(--accent)]">좋은 경험</span>을 만듭니다.
        </h2>
        <p className="mt-6 mb-0 max-w-[460px] text-[18px] leading-[1.7] text-[var(--ink-2)]">
          React/Next.js 기반 스타트업 실서비스를 다수 경험한 프론트엔드
          개발자입니다. 사용자 경험을 중심으로 한 UI 개발과 실서비스 운영에
          집중합니다.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap">
          <a
            href="#work"
            className="inline-flex items-center gap-2 no-underline text-[15px] font-semibold leading-none px-[22px] py-[13px] rounded-[var(--r-sm)] bg-[var(--accent)] text-[var(--on-accent)]"
          >
            프로젝트 보기
          </a>
          <a
            href="https://github.com/unani92"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 no-underline text-[15px] font-semibold leading-none px-[22px] py-[13px] rounded-[var(--r-sm)] bg-[var(--surface)] text-[var(--ink)] border border-[var(--line-strong)]"
          >
            깃허브
          </a>
        </div>
        <div className="flex gap-[22px] mt-9 [font-family:var(--font-mono)] text-[13px] text-[var(--ink-3)]">
          <span>
            <b className="text-[var(--accent)] text-[17px]">5</b>+ yrs
          </span>
          <span>
            <b className="text-[var(--accent)] text-[17px]">4</b> companies
          </span>
          <span>
            <b className="text-[var(--accent)] text-[17px]">10</b>+ projects
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-[14px] right-[-14px] bottom-[-14px] left-[14px] rounded-[var(--r-xl)] bg-[var(--accent-soft)]" />
        <Image
          src="/images/mimoji.jpg"
          alt="정윤환"
          width={320}
          height={363}
          priority
          className="relative w-full max-w-[320px] h-auto [aspect-ratio:3/3.4] object-cover rounded-[var(--r-xl)] border border-[var(--line)] shadow-[var(--shadow-md)] [filter:grayscale(.12)_contrast(1.0)]"
        />
        <span className="inline-flex items-center gap-[7px] absolute bottom-[-10px] left-[18px] rounded-[var(--r-pill)] px-[13px] py-[5px] text-[12px] font-semibold [font-family:var(--font-mono)] bg-[var(--surface)] text-[var(--success)] border border-[var(--line)] shadow-[var(--shadow-sm)]">
          <span className="w-[7px] h-[7px] rounded-full bg-[var(--success)]" />
          구직 중
        </span>
      </div>
    </section>
  )
}
