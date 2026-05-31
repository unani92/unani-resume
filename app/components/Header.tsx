"use client";

import Link from "next/link";

interface HeaderProps {
  active: string;
  onNav: (id: string) => void;
}

export default function Header({ active, onNav }: HeaderProps) {
  const links = [
    { id: "work", label: "프로젝트" },
    { id: "about", label: "소개" },
    { id: "contact", label: "연락처" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px clamp(20px, 6vw, 64px)",
        background: "color-mix(in srgb, var(--paper) 78%, transparent)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "var(--r-sm)",
            background: "var(--ink)",
            color: "var(--paper)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: ".02em",
          }}
        >
          YH
        </div>
        <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>
          정윤환<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </div>

      <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => onNav(l.id)}
            style={{
              font: "600 14px/1 var(--font-sans)",
              cursor: "pointer",
              padding: "8px 14px",
              borderRadius: "var(--r-sm)",
              border: "none",
              background: active === l.id ? "var(--surface-2)" : "transparent",
              color: active === l.id ? "var(--ink)" : "var(--ink-3)",
              transition: "all var(--dur) var(--ease)",
            }}
          >
            {l.label}
          </button>
        ))}
        <Link
          href="/resume"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginLeft: 8,
            font: "600 14px/1 var(--font-sans)",
            textDecoration: "none",
            padding: "9px 16px",
            borderRadius: "var(--r-sm)",
            background: "var(--ink)",
            color: "var(--paper)",
          }}
        >
          이력서
        </Link>
      </nav>
    </header>
  );
}
