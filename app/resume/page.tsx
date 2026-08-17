import type { Metadata } from 'next'
import Experience from './components/Experience'
import ResumeHeader from './components/ResumeHeader'
import ResumeToolbar from './components/ResumeToolbar'
import Section from './components/Section'
import SideRail from './components/SideRail'

export const metadata: Metadata = {
  title: '정윤환 · 이력서',
  description: '정윤환 프론트엔드 개발자 이력서 — React/Next.js 5년 경력',
}

export default function ResumePage() {
  return (
    <div
      style={{
        background: 'var(--paper-sunk)',
        minHeight: '100vh',
        paddingBottom: '28px',
      }}
    >
      <ResumeToolbar />
      <div
        style={{
          background: 'var(--surface)',
          maxWidth: 880,
          margin: '28px auto 0 auto',
          padding: '48px clamp(28px, 5vw, 56px) 52px',
          border: '1px solid var(--line)',
          borderRadius: 'var(--r-md)',
          boxShadow: 'var(--shadow-md)',
        }}
        // className=""
      >
        <ResumeHeader />
        <div
          style={{
            paddingTop: 28,
            paddingBottom: 28,
            borderBottom: '1px solid var(--line)',
          }}
        >
          <SideRail />
        </div>
        <div style={{ paddingTop: 28 }}>
          <Section label="Experience" sub="5+ yrs">
            <Experience />
          </Section>
        </div>
      </div>
    </div>
  )
}
