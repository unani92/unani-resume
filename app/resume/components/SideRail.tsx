const skills = [
  { k: "Languages", v: "Kotlin · Go · TypeScript · Java" },
  { k: "Backend", v: "Spring · Node.js · gRPC · GraphQL" },
  { k: "Data", v: "PostgreSQL · Redis · Kafka" },
  { k: "Infra", v: "AWS · Kubernetes · Terraform" },
];

const edu = [
  {
    d: "2016 — 2020",
    t: "한국대학교 컴퓨터공학",
    s: "학사 · GPA 3.8 / 4.5",
  },
];

const links = [
  { v: "github.com/yunhwan" },
  { v: "yunhwan.dev" },
  { v: "blog.yunhwan.dev" },
];

const labelStyle = {
  font: "700 12px/1 var(--font-mono)",
  letterSpacing: ".16em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
  marginBottom: 12,
};

export default function SideRail() {
  return (
    <aside style={{ display: "grid", gap: 28, alignContent: "start" }}>
      <div>
        <div style={labelStyle}>Skills</div>
        <div style={{ display: "grid", gap: 12 }}>
          {skills.map((s) => (
            <div key={s.k}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink)" }}>
                {s.k}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--ink-3)",
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={labelStyle}>Education</div>
        {edu.map((e) => (
          <div key={e.t}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11.5,
                color: "var(--ink-4)",
              }}
            >
              {e.d}
            </div>
            <div
              style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginTop: 3 }}
            >
              {e.t}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 2 }}>
              {e.s}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={labelStyle}>Links</div>
        <div style={{ display: "grid", gap: 9 }}>
          {links.map((l) => (
            <a
              key={l.v}
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
                color: "var(--ink-2)",
              }}
            >
              {l.v}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
