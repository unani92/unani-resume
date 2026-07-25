'use client'

interface TocLeaf {
  id: string
  title: string
}

interface TocYearGroup {
  year: string
  items: TocLeaf[]
}

interface TocCompanyGroup {
  company: string
  years: TocYearGroup[]
}

export default function CareerToc({ toc }: { toc: TocCompanyGroup[] }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.pushState(null, '', `#${id}`)
  }

  return (
    <nav className="hidden xl:block fixed top-[88px] right-6 z-30 w-[180px] max-h-[calc(100vh-104px)] overflow-y-auto rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-md)] p-3.5">
      {toc.map((group) => (
        <div key={group.company} className="mb-3.5 last:mb-0">
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">
            {group.company}
          </div>
          <div className="grid gap-2">
            {group.years.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="font-mono text-[10px] text-[var(--ink-4)] mb-1">
                  {yearGroup.year}
                </div>
                <div className="grid gap-0.5 pl-2.5 border-l border-[var(--line)]">
                  {yearGroup.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleClick(e, item.id)}
                      title={item.title}
                      className="block truncate text-[12px] leading-[1.4] text-[var(--ink-2)] hover:text-[var(--accent)] py-0.5"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}

export type { TocCompanyGroup }
