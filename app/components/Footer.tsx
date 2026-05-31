const links = [
  { label: "unani9292@gmail.com", href: "mailto:unani9292@gmail.com" },
  { label: "github.com/yunhwan", href: "https://github.com" },
  { label: "linkedin.com/in/yunhwan", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer-wrap px-fluid text-center">
      <div className="overline">Get in touch</div>
      <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em] mt-[18px] mb-0 text-[var(--ink)]">
        함께 좋은 시스템을
        <br />
        만들어요<span className="text-[var(--accent)]">.</span>
      </h2>
      <a
        href="mailto:unani9292@gmail.com"
        className="inline-flex items-center gap-[9px] no-underline mt-8 text-[16px] font-semibold leading-none px-[28px] py-[15px] rounded-[var(--r-sm)] bg-[var(--accent)] text-[var(--on-accent)] shadow-[var(--shadow-sm)]"
      >
        연락하기
      </a>
      <div className="flex justify-center gap-6 mt-[44px] flex-wrap">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="inline-flex items-center gap-2 no-underline [font-family:var(--font-mono)] text-[13px] text-[var(--ink-3)]"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="mt-[56px] pt-6 border-t border-[var(--line)] flex justify-between items-center [font-family:var(--font-mono)] text-[12px] text-[var(--ink-4)] flex-wrap gap-[10px]">
        <span>정윤환 · Jeong Yunhwan</span>
        <span>© 2025 · Built with Pretendard</span>
      </div>
    </footer>
  );
}
