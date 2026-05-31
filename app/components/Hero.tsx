import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section px-fluid">
      <div>
        <div className="overline">Backend Engineer · Seoul</div>
        <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-[14px] mb-[22px]" />
        <h1 className="m-0 text-[clamp(38px,5.5vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--ink)]">
          복잡함을 단순하게,
          <br />
          <span className="text-[var(--accent)]">안정적인</span> 시스템을 만듭니다.
        </h1>
        <p className="mt-6 mb-0 max-w-[460px] text-[18px] leading-[1.7] text-[var(--ink-2)]">
          결제와 분산 시스템을 다루는 백엔드 개발자 정윤환입니다. 눈에 보이지 않는
          곳에서 제품을 단단하게 받치는 일을 좋아합니다.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap">
          <a
            href="#work"
            className="inline-flex items-center gap-2 no-underline text-[15px] font-semibold leading-none px-[22px] py-[13px] rounded-[var(--r-sm)] bg-[var(--accent)] text-[var(--on-accent)]"
          >
            프로젝트 보기
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 no-underline text-[15px] font-semibold leading-none px-[22px] py-[13px] rounded-[var(--r-sm)] bg-[var(--surface)] text-[var(--ink)] border border-[var(--line-strong)]"
          >
            깃허브
          </a>
        </div>
        <div className="flex gap-[22px] mt-9 [font-family:var(--font-mono)] text-[13px] text-[var(--ink-3)]">
          <span><b className="text-[var(--accent)] text-[17px]">4</b>+ yrs</span>
          <span><b className="text-[var(--accent)] text-[17px]">12</b> projects</span>
          <span><b className="text-[var(--accent)] text-[17px]">3</b> teams</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-[14px] right-[-14px] bottom-[-14px] left-[14px] rounded-[var(--r-xl)] bg-[var(--accent-soft)]" />
        <Image
          src="/images/portrait-bright.jpeg"
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
  );
}
