const roles = [
  {
    company: "토스페이먼츠",
    role: "Backend Engineer · 결제 정산",
    period: "2022.03 — 현재",
    stack: ["Kotlin", "Spring", "Kafka", "PostgreSQL"],
    bullets: [
      "대규모 정산 배치를 스트리밍 구조로 재설계해 처리 시간을 1.2s → 0.3s로 단축",
      "정산 불일치 자동 감지 파이프라인을 구축해 수기 점검 시간을 주 8h → 1h로 절감",
      "온콜 알림 노이즈를 40% 줄여 팀의 야간 대응 부담을 완화",
    ],
  },
  {
    company: "카카오 (플랫폼)",
    role: "Software Engineer · API Platform",
    period: "2020.01 — 2022.02",
    stack: ["Go", "gRPC", "Redis", "Kubernetes"],
    bullets: [
      "12개 서비스 공통 인증·레이트리밋을 단일 게이트웨이로 통합",
      "분산 트레이싱을 표준화해 장애 원인 추적 시간을 평균 35분 → 8분으로 단축",
    ],
  },
];

export default function Experience() {
  return (
    <div style={{ display: "grid", gap: 26 }}>
      {roles.map((r, i) => (
        <div
          key={i}
          style={{ display: "grid", gridTemplateColumns: "146px 1fr", gap: 20 }}
        >
          <div style={{ paddingTop: 2 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              {r.period}
            </div>
          </div>
          <div
            style={{
              borderLeft: "2px solid var(--line)",
              paddingLeft: 20,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -6,
                top: 5,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--accent)",
                border: "2px solid var(--surface)",
              }}
            />
            <h3
              style={{
                margin: 0,
                font: "700 19px/1.3 var(--font-sans)",
                letterSpacing: "-0.01em",
                color: "var(--ink)",
              }}
            >
              {r.company}
            </h3>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--ink-3)",
                marginTop: 3,
              }}
            >
              {r.role}
            </div>
            <ul
              style={{
                margin: "12px 0 0",
                padding: 0,
                listStyle: "none",
                display: "grid",
                gap: 7,
              }}
            >
              {r.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    gap: 10,
                    font: "400 14.5px/1.6 var(--font-sans)",
                    color: "var(--ink-2)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      marginTop: 1,
                      flexShrink: 0,
                    }}
                  >
                    —
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 13,
              }}
            >
              {r.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11.5,
                    fontWeight: 500,
                    padding: "3px 9px",
                    borderRadius: "var(--r-xs)",
                    background: "var(--surface-2)",
                    color: "var(--ink-3)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
