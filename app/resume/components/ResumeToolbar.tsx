'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: '포트폴리오' },
  { href: '/resume', label: '이력서' },
  { href: '/career', label: '경력기술서' },
] as const

export default function ResumeToolbar() {
  const pathname = usePathname()

  return (
    <div className="no-print sticky top-0 z-20 flex items-center justify-between gap-4 py-3 px-[clamp(16px,5vw,40px)] border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_80%,transparent)] [backdrop-filter:saturate(180%)_blur(12px)] [-webkit-backdrop-filter:saturate(180%)_blur(12px)]">
      <nav className="flex items-center gap-4 flex-wrap">
        <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-[var(--ink-3)]">
          Résumé
        </span>
        {NAV_LINKS.map((l) =>
          l.href === pathname ? (
            <span
              key={l.href}
              className="font-mono text-[12px] tracking-[0.02em] text-[var(--accent)]"
            >
              {l.label}
            </span>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-[0.02em] text-[var(--ink-3)] hover:text-[var(--ink)] underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          ),
        )}
      </nav>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-[7px] font-sans font-semibold text-[13px] leading-none cursor-pointer px-[15px] py-[9px] rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)]"
      >
        인쇄 / PDF
      </button>
    </div>
  )
}
