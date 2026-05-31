const groups = [
  { k: "Languages", v: ["Kotlin", "Go", "TypeScript", "Java", "Python"] },
  { k: "Backend", v: ["Spring", "Node.js", "gRPC", "GraphQL"] },
  { k: "Data", v: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch"] },
  { k: "Infra", v: ["AWS", "Kubernetes", "Terraform", "Grafana"] },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--paper-sunk)] border-t border-b border-[var(--line)]">
      <div className="about-inner px-fluid">
        <div>
          <div className="overline">About</div>
          <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-[18px]" />
          <p className="text-[17px] leading-[1.75] text-[var(--ink-2)] m-0">
            장애가 나지 않는 시스템보다,{" "}
            <b className="text-[var(--ink)]">장애에서 빠르게 회복하는</b>{" "}
            시스템을 믿습니다. 관측 가능성과 단순한 설계로 팀이 밤에 잘 자게
            만드는 일을 합니다.
          </p>
          <p className="text-[15px] leading-[1.7] text-[var(--ink-3)] mt-[18px] mb-0">
            주말에는 작은 사이드 프로젝트를 만들고, 좋은 개발 문화에 대한 글을
            씁니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[22px]">
          {groups.map((g) => (
            <div key={g.k}>
              <div className="overline text-[11px] text-[var(--accent)] mb-[10px]">{g.k}</div>
              <div className="flex flex-wrap gap-[7px]">
                {g.v.map((s) => (
                  <span
                    key={s}
                    className="[font-family:var(--font-mono)] text-[12.5px] font-medium px-[11px] py-[5px] rounded-[var(--r-xs)] bg-[var(--surface)] text-[var(--ink-2)] border border-[var(--line)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
