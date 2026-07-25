interface Result {
  metric?: string
  label: string
}

interface Phase {
  label: string
  problem?: string[]
  approach: string[]
  results?: Result[]
}

interface ProjectData {
  title: string
  period: string
  org: string
  role: string
  team?: string
  summary: string
  stack: string[]
  problem?: string[]
  approach?: string[]
  phases?: Phase[]
  results?: Result[]
}

function SectionLabel({
  children,
  accent,
}: {
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <div
      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] mb-2 ${
        accent ? 'text-[var(--accent)]' : 'text-[var(--ink-3)]'
      }`}
    >
      {children}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 p-0 list-none grid gap-2">
      {items.map((t, i) => (
        <li
          key={i}
          className="flex gap-2.5 text-[14.5px] leading-[1.65] text-[var(--ink-2)] font-normal"
        >
          <span className="text-[var(--accent)] mt-px flex-shrink-0">—</span>
          {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <span dangerouslySetInnerHTML={{ __html: t }} />
        </li>
      ))}
    </ul>
  )
}

function Block({
  label,
  items,
  accent,
}: {
  label: string
  items: string[]
  accent?: boolean
}) {
  return (
    <div className="mt-4">
      <SectionLabel accent={accent}>{label}</SectionLabel>
      <BulletList items={items} />
    </div>
  )
}

function ResultGrid({ results }: { results: Result[] }) {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-2.5">
      {results.map((r, i) =>
        r.metric ? (
          <div key={i} className="min-w-[120px]">
            <div className="font-sans font-extrabold text-[22px] leading-none tracking-[-0.02em] text-[var(--accent-ink)]">
              {r.metric}
            </div>
            <div className="text-[12.5px] text-[var(--ink-2)] mt-1">
              {r.label}
            </div>
          </div>
        ) : (
          <div key={i} className="w-full flex items-center">
            <div className="font-sans font-semibold text-[14px] leading-[1.4] text-[var(--ink-2)]">
              {r.label}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

function ResultsCard({
  results,
  title = '성과 · Result',
}: {
  results?: Result[]
  title?: string
}) {
  if (!results || results.length === 0) return null
  return (
    <div className="mt-[18px] px-[18px] py-4 bg-[var(--accent-soft)] rounded-[var(--r-sm)] border border-[var(--accent-line)]">
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-ink)] mb-2">
        {title}
      </div>
      <ResultGrid results={results} />
    </div>
  )
}

function PhaseBlock({ phase, index }: { phase: Phase; index: number }) {
  return (
    <div className="mt-7 pt-5 border-t border-dashed border-[var(--line)]">
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <span className="font-mono text-[12px] font-semibold text-[var(--accent)] tracking-[0.04em]">
          PHASE {String(index).padStart(2, '0')}
        </span>
        <h3 className="m-0 font-sans font-bold text-[16.5px] leading-[1.35] text-[var(--ink)] tracking-[-0.01em]">
          {phase.label}
        </h3>
      </div>
      {phase.problem && phase.problem.length > 0 && (
        <Block label="문제 · Problem" items={phase.problem} />
      )}
      <Block label="해결 · Approach" items={phase.approach} accent />
      <ResultsCard results={phase.results} />
    </div>
  )
}

export default function Project({
  p,
  index,
}: {
  p: ProjectData
  index: number
}) {
  return (
    <article className="py-[30px] border-t border-[var(--line)]">
      <div className="flex justify-between items-baseline gap-4 flex-wrap">
        <div className="flex items-baseline gap-3.5 flex-wrap">
          <span className="font-mono text-[13px] font-semibold text-[var(--accent)]">
            {String(index).padStart(2, '0')}
          </span>
          <h2 className="m-0 font-sans font-bold text-[23px] leading-[1.25] tracking-[-0.015em] text-[var(--ink)]">
            {p.title}
          </h2>
        </div>
        <span className="font-mono text-[12.5px] text-[var(--ink-4)]">
          {p.period}
        </span>
      </div>

      <div className="flex gap-3.5 flex-wrap mt-2 font-mono text-[12.5px] text-[var(--ink-3)]">
        <span>{p.org}</span>
        <span className="text-[var(--ink-4)]">·</span>
        <span>{p.role}</span>
        {p.team ? (
          <>
            <span className="text-[var(--ink-4)]">·</span>
            <span>{p.team}</span>
          </>
        ) : null}
      </div>

      <p
        className="mt-3.5 mb-1 font-sans font-medium text-[16px] leading-[1.6] text-[var(--ink)]"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: p.summary }}
      />

      <div className="flex flex-wrap gap-1.5 my-3.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[12px] font-medium px-2.5 py-1 rounded-[var(--r-xs)] bg-[var(--surface-2)] text-[var(--ink-2)] border border-[var(--line)]"
          >
            {s}
          </span>
        ))}
      </div>

      {p.problem && p.problem.length > 0 ? (
        <Block label="문제 · Problem" items={p.problem} />
      ) : null}
      {p.approach && p.approach.length > 0 ? (
        <Block label="해결 · Approach" items={p.approach} accent />
      ) : null}

      {p.phases?.map((phase, i) => (
        <PhaseBlock key={i} phase={phase} index={i + 1} />
      ))}

      <ResultsCard
        results={p.results}
        title={
          p.phases && p.phases.length > 0
            ? '종합 성과 · Highlights'
            : '성과 · Result'
        }
      />
    </article>
  )
}

export type { ProjectData }
