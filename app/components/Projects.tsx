"use client";

import { useState } from "react";

const projects = [
  {
    tag: "PAYMENTS",
    year: "2024",
    title: "정산 배치 엔진 재설계",
    stack: ["Kotlin", "Spring", "Kafka"],
    desc: "일 단위 대량 정산 배치를 스트리밍 구조로 재설계해 처리 시간을 1.2s → 0.3s로 단축.",
    metric: "−75% 처리시간",
  },
  {
    tag: "PLATFORM",
    year: "2023",
    title: "사내 API 게이트웨이",
    stack: ["Go", "gRPC", "Redis"],
    desc: "12개 서비스 공통 인증·레이트리밋을 단일 게이트웨이로 통합, 운영 부담을 절반으로.",
    metric: "12 services",
  },
  {
    tag: "SIDE",
    year: "2023",
    title: '코드리뷰 봇 "리비"',
    stack: ["TypeScript", "Node", "LLM"],
    desc: "PR 변경점을 요약하고 컨벤션을 점검하는 GitHub 봇. 사내 2팀에서 사용 중.",
    metric: "2 teams",
  },
  {
    tag: "INFRA",
    year: "2022",
    title: "관측성 파이프라인",
    stack: ["OpenTelemetry", "Grafana"],
    desc: "분산 트레이싱을 표준화해 장애 원인 추적 시간을 평균 35분 → 8분으로 단축.",
    metric: "−77% MTTR",
  },
];

const overlineStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: ".14em",
  textTransform: "uppercase" as const,
  color: "var(--ink-3)",
};

export default function Projects() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="work"
      style={{
        padding: "clamp(40px,7vw,80px) clamp(20px,6vw,64px)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={overlineStyle}>Selected Work</div>
      <div
        style={{
          height: 2,
          width: 44,
          background: "var(--line-ink)",
          margin: "12px 0 4px",
        }}
      />
      <h2
        style={{
          font: "700 clamp(26px,3vw,36px)/1.15 var(--font-sans)",
          letterSpacing: "-0.02em",
          margin: "14px 0 30px",
        }}
      >
        프로젝트
      </h2>
      <div style={{ display: "grid", gap: 14 }}>
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-md)",
                padding: "22px 24px",
                cursor: "pointer",
                boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-xs)",
                transition: "box-shadow var(--dur) var(--ease)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      ...overlineStyle,
                      color: "var(--accent)",
                      fontSize: 11,
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      font: "700 21px/1.3 var(--font-sans)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "var(--ink-4)",
                    flex: "none",
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows var(--dur-slow) var(--ease)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      margin: "14px 0 14px",
                      font: "400 15px/1.65 var(--font-sans)",
                      color: "var(--ink-2)",
                      maxWidth: 620,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          fontWeight: 500,
                          padding: "4px 10px",
                          borderRadius: "var(--r-xs)",
                          background: "var(--surface-2)",
                          color: "var(--ink-2)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "var(--accent)",
                      }}
                    >
                      {p.metric}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
