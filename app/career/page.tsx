import type { Metadata } from "next";
import CareerHeader from "./components/CareerHeader";
import Project, { type ProjectData } from "./components/Project";
import ResumeToolbar from "../resume/components/ResumeToolbar";

export const metadata: Metadata = {
  title: "정윤환 · 경력기술서",
  description: "정윤환 백엔드 엔지니어 경력기술서",
};

const PROJECTS: ProjectData[] = [
  {
    title: "정산 배치 엔진 재설계",
    period: "2023.05 — 2024.02",
    org: "토스페이먼츠",
    role: "Backend Engineer",
    team: "결제정산팀 (5인)",
    summary:
      "일 단위 대량 정산 배치를 스트리밍 구조로 재설계해 처리 시간과 운영 부담을 동시에 줄였습니다.",
    stack: ["Kotlin", "Spring Batch", "Kafka", "PostgreSQL", "Redis"],
    problem: [
      "가맹점 증가로 일일 정산 데이터가 3배 늘며 배치가 마감 시간을 초과하기 시작",
      "단일 트랜잭션 기반 구조라 중간 실패 시 전체 재처리가 필요해 운영 리스크가 컸음",
    ],
    approach: [
      "정산 단계를 <b>읽기 → 집계 → 검증 → 적재</b>로 분리하고 Kafka 기반 스트리밍 파이프라인으로 재구성",
      "멱등 키(idempotency key)를 도입해 부분 실패 지점부터 재처리가 가능하도록 설계",
      "집계 쿼리를 윈도우 함수로 최적화하고 Redis 캐시로 중복 조회를 제거",
    ],
    results: [
      { metric: "1.2s → 0.3s", label: "건당 처리 시간" },
      { metric: "−75%", label: "배치 총 소요" },
      { metric: "주 8h → 1h", label: "수기 점검 시간" },
    ],
  },
  {
    title: "사내 API 게이트웨이 통합",
    period: "2021.02 — 2022.12",
    org: "카카오",
    role: "Software Engineer",
    team: "API 플랫폼팀 (7인)",
    summary:
      "12개 서비스에 흩어진 인증·레이트리밋을 단일 게이트웨이로 통합해 운영 일관성을 확보했습니다.",
    stack: ["Go", "gRPC", "Redis", "Kubernetes", "OpenTelemetry"],
    problem: [
      "서비스마다 인증 로직이 제각각이라 보안 정책 변경 시 12곳을 일일이 수정해야 했음",
      "레이트리밋 기준이 통일되지 않아 트래픽 급증 시 장애 대응이 늦어짐",
    ],
    approach: [
      "공통 인증·레이트리밋·로깅을 처리하는 Go 기반 게이트웨이를 설계하고 단계적으로 마이그레이션",
      "gRPC 인터셉터로 횡단 관심사를 표준화하고, OpenTelemetry로 분산 트레이싱을 도입",
      "점진적 롤아웃과 섀도 트래픽 비교로 무중단 전환을 보장",
    ],
    results: [
      { metric: "12 → 1", label: "인증 구현 지점" },
      { metric: "35m → 8m", label: "장애 추적 시간" },
      { metric: "−50%", label: "운영 공수" },
    ],
  },
];

export default function CareerPage() {
  return (
    <div style={{ background: "var(--paper-sunk)", minHeight: "100vh" }}>
      <ResumeToolbar />
      <div
        style={{
          background: "var(--surface)",
          maxWidth: 900,
          margin: "28px auto 56px",
          padding: "48px clamp(28px, 5vw, 60px) 52px",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-md)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <CareerHeader />
        {PROJECTS.map((p, i) => (
          <Project key={i} p={p} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
