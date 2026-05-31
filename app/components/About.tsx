const groups = [
  { k: "Languages", v: ["JavaScript", "TypeScript"] },
  { k: "Frameworks", v: ["React", "Next.js", "Vue", "Nuxt", "React Native"] },
  { k: "Styling", v: ["Tailwind CSS", "SCSS", "Emotion"] },
  { k: "Data / State", v: ["React-Query", "GraphQL", "Zustand", "Redux"] },
  { k: "Backend", v: ["Node.js", "NestJS", "Prisma", "MySQL"] },
  { k: "Infra", v: ["AWS", "Vercel", "Firebase", "Supabase",] },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--paper-sunk)] border-t border-b border-[var(--line)]">
      <div className="about-inner px-fluid">
        <div>
          <div className="overline">About</div>
          <div className="h-0.5 w-11 bg-[var(--line-ink)] mt-3 mb-[18px]" />
          <p className="text-[17px] leading-[1.75] text-[var(--ink-2)] m-0">
            사용자와 가장 가까운 곳에서 일합니다.{" "}
            <b className="text-[var(--ink)]">React/Next.js 기반 스타트업 실서비스</b>를
            다수 경험하며, 기능 개발부터 배포·운영까지 전반을 담당해 왔습니다.
          </p>
          <p className="text-[15px] leading-[1.7] text-[var(--ink-3)] mt-[18px] mb-0">
            좋은 UX는 좋은 코드에서 나온다고 믿습니다. 주말엔 FC서울 팬 커뮤니티
            사이트를 직접 만들고 운영합니다.
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
