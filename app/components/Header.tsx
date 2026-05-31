'use client'

import Link from 'next/link'

interface HeaderProps {
  active: string
  onNav: (id: string) => void
}

const NAV_LINKS = [
  { id: 'work', label: '프로젝트' },
  { id: 'about', label: '소개' },
  { id: 'contact', label: '연락처' },
] as const

export default function Header({ active, onNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-[14px] px-fluid border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_78%,transparent)] [backdrop-filter:saturate(180%)_blur(12px)] [-webkit-backdrop-filter:saturate(180%)_blur(12px)]">
      <div className="flex items-center gap-3">
        <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[var(--r-sm)] bg-[var(--ink)] text-[var(--paper)] [font-family:var(--font-mono)] font-semibold text-[14px] tracking-[0.02em]">
          YH
        </div>
        <span className="font-extrabold text-[17px] tracking-[-0.02em]">
          정윤환<span className="text-[var(--accent)]">.</span>
        </span>
      </div>

      <nav className="flex gap-1 items-center">
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => onNav(l.id)}
            className={`cursor-pointer text-[14px] font-semibold leading-none px-[14px] py-2 rounded-[var(--r-sm)] border-none [transition:all_var(--dur)_var(--ease)] ${
              active === l.id
                ? 'bg-[var(--surface-2)] text-[var(--ink)]'
                : 'bg-transparent text-[var(--ink-3)]'
            }`}
          >
            {l.label}
          </button>
        ))}
        <Link
          href="/resume"
          className="inline-flex items-center gap-[7px] ml-2 no-underline text-[14px] font-semibold leading-none px-[16px] py-[9px] rounded-[var(--r-sm)] bg-[var(--ink)] text-[var(--paper)]"
        >
          이력서
        </Link>
      </nav>
    </header>
  )
}
