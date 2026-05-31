import type { Metadata } from "next";
import ResumeToolbar from "./components/ResumeToolbar";
import ResumeHeader from "./components/ResumeHeader";
import Section from "./components/Section";
import Experience from "./components/Experience";
import SideRail from "./components/SideRail";

export const metadata: Metadata = {
  title: "정윤환 · 이력서",
  description: "정윤환 프론트엔드 개발자 이력서 — React/Next.js 5년 경력",
};

export default function ResumePage() {
  return (
    <div style={{ background: "var(--paper-sunk)", minHeight: "100vh" }}>
      <ResumeToolbar />
      <div
        style={{
          background: "var(--surface)",
          maxWidth: 880,
          margin: "28px auto 56px",
          padding: "48px clamp(28px, 5vw, 56px) 52px",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-md)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <ResumeHeader />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 256px",
            gap: "clamp(28px, 5vw, 52px)",
            marginTop: 8,
          }}
        >
          <div>
            <Section label="Experience" sub="5+ yrs">
              <Experience />
            </Section>
          </div>
          <div>
            <SideRail />
          </div>
        </div>
      </div>
    </div>
  );
}
