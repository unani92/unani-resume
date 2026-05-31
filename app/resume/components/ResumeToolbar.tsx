"use client";

import Link from "next/link";

export default function ResumeToolbar() {
  return (
    <div
      className="no-print"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px clamp(16px, 5vw, 40px)",
        background: "color-mix(in srgb, var(--paper) 80%, transparent)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
        }}
      >
        Résumé · 정윤환
      </span>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            font: "600 13px/1 var(--font-sans)",
            padding: "9px 15px",
            borderRadius: "var(--r-sm)",
            border: "1px solid var(--line-strong)",
            background: "var(--surface)",
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          포트폴리오
        </Link>
        <Link
          href="/career"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            font: "600 13px/1 var(--font-sans)",
            padding: "9px 15px",
            borderRadius: "var(--r-sm)",
            border: "1px solid var(--line-strong)",
            background: "var(--surface)",
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          경력기술서
        </Link>
        <button
          onClick={() => window.print()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            font: "600 13px/1 var(--font-sans)",
            cursor: "pointer",
            padding: "9px 15px",
            borderRadius: "var(--r-sm)",
            border: "1px solid var(--line-strong)",
            background: "var(--surface)",
            color: "var(--ink)",
          }}
        >
          인쇄 / PDF
        </button>
      </div>
    </div>
  );
}
