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

export default function Projects() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="work" className="section-wrap px-fluid">
      <div className="overline">Selected Work</div>
      <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-1" />
      <h2 className="text-[clamp(26px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] mt-[14px] mb-[30px]">
        프로젝트
      </h2>
      <div className="grid gap-[14px]">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`bg-[var(--surface)] border border-[var(--line)] rounded-[var(--r-md)] p-[22px_24px] cursor-pointer [transition:box-shadow_var(--dur)_var(--ease)] ${
                isOpen ? "shadow-[var(--shadow-md)]" : "shadow-[var(--shadow-xs)]"
              }`}
            >
              <div className="flex justify-between items-baseline gap-4">
                <div className="flex items-baseline gap-[14px] flex-wrap">
                  <span className="overline text-[11px] text-[var(--accent)]">{p.tag}</span>
                  <h3 className="m-0 text-[21px] font-bold leading-[1.3] tracking-[-0.01em]">
                    {p.title}
                  </h3>
                </div>
                <span className="[font-family:var(--font-mono)] text-[13px] text-[var(--ink-4)] shrink-0">
                  {p.year}
                </span>
              </div>
              <div
                className={`grid [transition:grid-template-rows_var(--dur-slow)_var(--ease)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="my-[14px] text-[15px] leading-[1.65] text-[var(--ink-2)] max-w-[620px]">
                    {p.desc}
                  </p>
                  <div className="flex gap-2 items-center flex-wrap">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="[font-family:var(--font-mono)] text-[12px] font-medium px-[10px] py-1 rounded-[var(--r-xs)] bg-[var(--surface-2)] text-[var(--ink-2)] border border-[var(--line)]"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="ml-auto [font-family:var(--font-mono)] font-semibold text-[13px] text-[var(--accent)]">
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
