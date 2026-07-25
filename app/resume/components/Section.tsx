import type { ReactNode } from 'react'

interface SectionProps {
  label: string
  sub?: string
  children: ReactNode
}

export default function Section({ label, sub, children }: SectionProps) {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}
      >
        <h2
          style={{
            margin: 0,
            font: '700 13px/1 var(--font-mono)',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
          }}
        >
          {label}
        </h2>
        {sub && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--ink-4)',
            }}
          >
            {sub}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}
