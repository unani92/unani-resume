import type { Metadata } from 'next'
import ResumeToolbar from '../resume/components/ResumeToolbar'
import CareerHeader from './components/CareerHeader'
import CareerToc, { type TocCompanyGroup } from './components/CareerToc'
import Project, { type ProjectData } from './components/Project'

export const metadata: Metadata = {
  title: '정윤환 · 경력기술서',
  description: '정윤환 프론트엔드 개발자 경력기술서',
}

const PROJECTS: ProjectData[] = [
  {
    title: '캠페인 리포트 페이지 개선 — 광고주 효능감 강화',
    period: '2026.04 — 2026.05',
    org: '스토어링크 / Pointail',
    role: 'FrontEnd Developer',
    team: '일본 체험단 스쿼드',
    summary:
      '미션 완료 여부만 테이블로 나열하던 기존 캠페인 리포트를, <b>데이터 시각화 + 광고주 인사이트 + 큐텐 랭킹 추적</b>으로 구성된 리포트로 재설계. "광고주가 지불한 비용에 대한 성과를 외부 마켓플레이스 지표로 직접 증명한다"는 컨셉으로 큐텐 랭킹 분석을 킬러 기능으로 도입.',
    stack: [
      'Next.js (API Route)',
      'TypeScript',
      'Chart.js',
      'S3',
      '30분 주기 스냅샷 크롤링 서버',
      '이미지 매칭 기반 상품 식별',
      '지원자 통계 집계',
    ],
    problem: [
      '기존 리포트는 <b>미션 완료 여부만 테이블로 나열</b>하는 수준 — 광고주가 한 번 보고 닫으면 그만인 페이지',
      '광고주는 <b>자기 돈을 들여 우리 서비스를 구매</b>했음에도, "내 비용이 실제 매출/노출 증가로 이어졌는가"를 판단할 도구가 없었음 → <b>서비스 효능감을 체감시켜 재구매를 유도할 킬러 컨텐츠가 부재</b>',
    ],
    approach: [
      '<b>증빙자료 UX 강화</b>: 기존 테이블 유지한 채, Next.js API Route를 프록시로 사용해 S3 CORS를 우회하고 다수 건 증빙 이미지를 일괄 다운로드로 묶음 처리',
      '<b>미션 진행 시각화 (Chart.js)</b>: 미션 완료율 · 미션 참여 시간대 통계 차트화',
      '<b>지원자 인사이트</b>: 성별·연령별·지역별 지원자 통계 추가 — 다음 캠페인 설계에 활용 가능',
      '<b>킬러 컨텐츠 — 큐텐 랭킹 분석 시각화 (ROI 증명 도구)</b>: 30분 주기로 큐텐 랭킹 페이지 스크린샷을 크롤링 서버에 저장, 광고주 입점 제품의 200위권 내 진입 여부를 자동 판별. 캠페인 진행 전/중/후의 랭킹 변화를 시계열로 시각화, 랭킹권 진입 시점의 원본 스크린샷을 광고주에게 제공',
    ],
    results: [
      { metric: '1.1 → 2.5', label: '리포트 1건당 활성 사용자 (약 2.27배)' },
      { metric: '3.3 → 6.6', label: '리포트 1건당 활성 세션 수 (약 2배)' },
      { metric: '30분 / 200위', label: '랭킹 스크린샷 주기 · 자동 판별 범위' },
      { metric: '변조 불가능', label: '외부 증거 기반 ROI 도구' },
    ],
  },
  {
    title: '캠페인 신청 페이지 개선 — 미션 설정 부담 재구조화',
    period: '2026.04 — 2026.05',
    org: '스토어링크 / Pointail',
    role: 'FrontEnd Developer',
    team: '일본 체험단 스쿼드',
    summary:
      '25년 본인이 구축한 캠페인 신청 시스템을 1년 뒤 재설계. 캠페인 신청의 핵심인 <b>미션 설정</b>의 어려움이 이탈의 본질임을 정량 분석으로 짚어내고, <b>이탈의 핵심 단계를 앞으로 당겨 부담을 분산</b>하는 방향으로 폼을 재구조화.',
    stack: [
      'Next.js',
      'TypeScript',
      '큐텐 크롤링/파싱',
      '3-tier 추천 preset',
      'Inline FAQ',
      '퍼널 로깅',
    ],
    problem: [
      '25년 1차 구축 이후 <b>신청 완료 전환율 5.56%에 머묾</b>',
      '캠페인 신청의 본질인 <b>미션 설정</b>이 구 퍼널의 스텝3에 배치 → 마지막 단계에서 큰 의사결정 부담을 한 번에 마주, 스텝3 이탈이 누적 이탈의 핵심',
      '스텝1에서도 상품 정보 수동 입력 부담으로 <b>진입자의 87.24%가 스텝1조차 통과하지 못함</b>',
      '광고주의 근본 페인포인트는 "미션을 무엇으로, 몇 명에게, 어느 강도로 설정해야 효과적인지"에 대한 불확실성',
    ],
    approach: [
      '<b>스텝1 / 사전 빌드업</b>: 신청자의 80%+ 가 큐텐 채널임을 확인 → 수요 1위 채널 큐텐 URL 입력 → 상품 기본정보 자동 채움 크롤링 기능 도입, 초반 입력 부담을 1개 필드로 단축',
      '<b>스텝2 / 미션 설정 전진 배치 + 추천값 사전 채움</b>: 구 스텝3 미션 설정을 앞으로 당기고, 광고주 의사결정을 "무엇을 적을지" → "추천값을 그대로 쓸지/수정할지"로 전환. 추천값은 모집 인원 기준 3-tier preset(라이트/스탠다드/챌린지)',
      '<b>인라인 FAQ</b>: 미션 설정 동선 안에 자주 막히는 지점의 답변 노출',
    ],
    results: [
      { metric: '5.56% → 12.50%', label: '신청 완료 전환율 (약 2.25배)' },
      { metric: '−4.25%p', label: '진입 → 스텝1 이탈률' },
      { metric: '+33%', label: '스텝1 통과율 (약 1.33배)' },
      { metric: '약 2.25배', label: '동일 트래픽 기준 신청 완료 수' },
      { metric: '80%+', label: '큐텐 단일 채널 자동화 커버리지' },
    ],
  },
  {
    title: '일본 체험단 프로덕트 독립화 — 1년 풀 사이클',
    period: '2025.01 — 2025.12',
    org: '스토어링크',
    role: 'FrontEnd Developer',
    team: '일본 체험단 스쿼드',
    summary:
      '일본 체험단 프로덕트를 <b>앱 웹뷰 신설 → 광고주 셀프서비스 채널 신설 → 한·일 코드베이스 분리 → 구 스링 일본 마케팅 기능 이관 → 자생력 강화 편의 기능 구축</b>까지, 조직·코드·파이프라인·기능 모든 차원에서 독립 운영 가능한 상태로 끌어올린 풀 사이클을 FE 단독 또는 주도로 수행.',
    stack: [
      'Next.js',
      'TypeScript',
      'WebView Bridge',
      '멀티 도메인 CI/CD',
      'i18n (KR/JP)',
      'Figma MCP',
      'AI 코드 마이그레이션',
      'Firebase Firestore',
    ],
    phases: [
      {
        label: 'Q1 · 한·일 체험단 앱 웹뷰 동시 런칭',
        problem: [
          '앱 개발자 2인이 <b>한·일 체험단 앱 2개</b>를 1분기 내 런칭해야 하는 일정',
          '구 퍼그샵은 캠페인·미션 유형 확장이 사실상 불가능한 구조 — <b>재발 방지 설계</b>가 동시에 요구됨',
        ],
        approach: [
          '단일 레포지토리 / 2개 도메인 배포 구조 설계 → 한 번 빌드로 한·일 동시 배포',
          '캠페인·미션 유형 확장에 유연한 도메인 모델로 코드베이스 재설계',
        ],
      },
      {
        label: 'Q2 · 일본 광고주 셀프서비스 채널 신설',
        problem: [
          'C레벨 요청 후 <b>1–2개월간 진척 0</b>이던 일본 광고주 마케팅 신청 페이지',
          '회원가입·캠페인 신청·리포트 조회 등 Must-Have 동시 필요',
          'TF가 일본 프로덕트 전담 예정 → 초기 설계 단계에서 유지보수성·다국어 확장성 확보 필요',
        ],
        approach: [
          '디자인/기능 커스텀이 용이한 UI 라이브러리 사전 리서치 후 적용',
          'Figma → AI 에이전트 연동으로 디자인 → 코드 변환 공정 자동화',
          '한·일 다국어 지원을 전제로 한 i18n 구조 선제 도입',
        ],
      },
      {
        label: 'Q3 · 한·일 코드베이스·배포 파이프라인 완전 분리 (자발 기획)',
        problem: [
          '스쿼드 분리로 한·일 핸들링 주체가 갈렸으나 <b>코드·배포 파이프라인은 결합 상태</b>',
          '시간이 지날수록 분리 비용이 기하급수적으로 증가 → 일본 특화 기능 개발 지연 위험',
        ],
        approach: [
          'AI를 활용해 국내/일본 분기 로직 일괄 정리, 일본 기능만 유지',
          '웹뷰 배포 로직 분리, 한·일 독립 배포 가능한 파이프라인으로 재구성',
          '요청 이전에 자발적으로 기획·실행',
        ],
      },
      {
        label: 'Q4 · 구 스링의 일본 마케팅 기능 → 포인테일 이관',
        problem: [
          '퍼그파트너스(국내 전용) 런칭에 맞춰 <b>일본 체험단을 희망하는 국내 광고주</b>의 신청 채널 단절 위기',
          '국내(세금계산서)/일본(적격청구서) 등 광고주 유형별 분기 로직 신규 설계 필요',
          '인플루언서·체험단(쇼핑·리워드) 전 유형 교차 지원 요구',
        ],
        approach: [
          '광고주 유형별 분기 로직 신규 설계',
          '인플루언서·체험단(쇼핑·리워드) 전 유형 교차 지원',
        ],
      },
      {
        label: 'Q4-Plus · BE/디자이너 리소스 0 — 캠페인 편의 기능 단독 구현',
        problem: [
          '신규 사내 서비스 출시로 <b>BE 개발자 가용 공수 0</b>, 디자이너 리소스도 제한',
          '광고주가 지속 호소해 온 캠페인 생성 페인포인트 해결 필요',
        ],
        approach: [
          '임시저장 DB를 <b>Firebase Firestore로 우회 구현</b> → BE 의존성 제거',
          'AI 에이전트로 레이아웃 생성 → 디자이너 공수 대체',
          '기존 캠페인 상세 조회 API를 복사 기능에 재활용 → 신규 API 0건',
        ],
        results: [
          { metric: '2건', label: '임시저장 + 복사 기능 출시' },
          { metric: 'FE 80% · 기획 50%', label: '실질 1인 주도' },
        ],
      },
    ],
    results: [
      { label: '독립화 풀 사이클 완성' },
      { label: '독립 배포 파이프라인' },
      { label: '정체 프로젝트 출시 (16일)' },
      { label: '광고주 채널 단절 (0건)' },
    ],
  },
  {
    title: '퍼그샵 일본 서비스 런칭 & 자발적 UX 개선',
    period: '2024.01 — 2024.12',
    org: '스토어링크',
    role: 'FrontEnd Developer',
    summary:
      '구글 번역 없이는 이용이 어려웠던 퍼그샵을 <b>번역 자동화 파이프라인 구축으로 1분기 내 일본 서비스 런칭</b>. 이후 두 분기 동안은 기획 지원 없이 <b>스스로 이슈를 발굴</b>해 오래 방치된 사용성 문제를 해결했고, 4분기 퍼그샵 전면 리뉴얼에서는 <b>평균 기대치를 상회하는 기여</b>로 관리자페이지·웹뷰 핵심 기능 구현과 개발환경 개선을 함께 주도.',
    stack: [
      '번역사전 자동화 파이프라인',
      'TypeScript',
      '무한스크롤 페이징',
      'GitHub Actions',
      'Bun',
      'Tailwind CSS',
      'Headless UI',
      'React Hook Form',
    ],
    phases: [
      {
        label: 'Q1 · 퍼그샵 일본 서비스 런칭',
        problem: [
          '일본 쇼핑몰 캠페인에 참여하려는 사용자가 <b>구글 번역기 없이 이용 가능한 플랫폼</b>이 필요하다는 전사 요구사항',
          '런칭 이후에도 번역이 계속 추가·수정될 것을 고려한 <b>유지보수 가능한 구조</b>가 선행되어야 함',
        ],
        approach: [
          '번역 담당자(비개발자)는 시트에 일본어 번역만 채우고, 개발자는 명령어 한 줄로 "엑셀 파일 → 번역사전"으로 변환되는 프로세스 구축',
          '변환된 번역사전 파일을 기준으로 서비스 화면 전반에 일본어 적용',
        ],
        results: [
          {
            label: '1분기 내 일본어 서비스 런칭 목표 달성 (2024.3.7 첫 노출)',
          },
          { label: '이후 일본판 기능 추가 요청에도 번역 병목 없이 대응' },
          { label: '동일 프로세스가 퍼그샵 리뉴얼 일본판에도 재사용됨' },
        ],
      },
      {
        label: 'Q2–Q3 · 퍼그샵 사용자 경험 개선 (자발적 문제 발굴)',
        problem: [
          '리뉴얼 방향이 확정되기 전까지 BE·기획 리소스는 우선순위 높은 이슈에 집중 — <b>기존 서비스 개선은 정체</b>',
          '2021년 서비스 출시 이후 아무도 손대지 않고 방치된 반복 CS·사용성 이슈가 다수 존재',
        ],
        approach: [
          '반복적으로 접수되는 CS 요청 중 <b>BE 도움 없이 FE 단독으로 해결 가능한 이슈</b>를 스스로 선별',
          '캠페인 참여자 일괄 선정, 푸시 알림 조회/미전송 삭제 등 운영자가 수작업으로 처리하던 요청을 기능으로 대체',
          '커밋 로그 분석으로 장기 사용자의 "참여 캠페인 전체 로딩" 로직을 원인으로 특정, <b>무한스크롤 페이징</b>으로 리팩터링',
          '홈 화면은 가장 느린 캠페인 로드를 기다려 한 번에 노출하던 방식을 <b>테마 단위 순차 노출 + 캐시 우선 표시</b>로 전환해 체감 대기시간 단축',
        ],
        results: [
          {
            label:
              '해결 건수를 목표치로 정하기 어려운 영역이라, 정량 목표보다 발굴·해결 자체에 집중',
          },
          {
            label:
              '2021년 출시 이후 방치돼 온 사용성 이슈를 자발적으로 다수 발굴·해결',
          },
          { label: '해결한 기능 다수가 이후 리뉴얼 정식 기능으로 반영됨' },
        ],
      },
      {
        label: 'Q4 · 퍼그샵 리뉴얼 (관리자페이지 · 사용자 앱 웹뷰)',
        problem: [
          '2024년 내 리뉴얼 개발 완료라는 전사 목표',
          '단순 기능 구현을 넘어 <b>평균 기대치(FE 4명 중 1인분)를 상회하는 기여</b>가 필요한 상황',
        ],
        approach: [
          '관리자페이지 캠페인 정보관리, 미션인증관리, 미션마감기한관리 페이지 구현',
          '웹뷰 미션 관련 전 페이지 + 일본판 번역 · 휴대전화 인증 구현',
          'GitHub Actions로 <b>배포 전 빌드 실패 여부를 사전 체크</b>하는 테스트 환경 구축',
          '관리자는 yarn → bun 전환으로 빌드 속도 개선, 웹뷰는 antd 대신 <b>Tailwind CSS + Headless UI + React Hook Form</b> 조합으로 대체해 번들 용량과 빌드 시간 단축',
        ],
        results: [
          {
            label:
              '2024년 내 완료 목표는 미달성했지만, 일본판을 포함해 확장 가능하고 안정적인 구조로 리뉴얼 지속 진행',
          },
          {
            label:
              '빌드/배포 시간 단축, 배포 전 자동 검증 도입으로 이후 개발 생산성 개선',
          },
        ],
      },
    ],
    results: [
      {
        label:
          '1분기 일본 서비스 런칭 → 2·3분기 자발적 UX 개선 → 4분기 리뉴얼 착수까지 24년 전 분기 기여',
      },
      {
        label:
          '요청받은 일만 처리하기보다, 방치된 문제를 스스로 찾아 해결하는 방식으로 접근',
      },
    ],
  },
  {
    title: '하이파이브 어드민 · 커머스 웹뷰 개발 — CRM 프로덕트 전반',
    period: '2022.05 — 2023.10',
    org: '슬릭코퍼레이션',
    role: 'FrontEnd Developer',
    summary:
      '피트니스 업장 운영 CRM "하이파이브"의 어드민 웹(Next.js)을 GraphQL(Apollo)·react-query로 백엔드와 연동해 기능이 늘어도 안정적으로 확장되도록 구축하고, 앱 내 신사업 커머스 웹뷰를 <b>Shopify·Firebase 조합으로 착수 2개월 만에 MVP 출시</b>.',
    stack: [
      'Next.js (Page Router)',
      'TypeScript',
      'GraphQL (Apollo)',
      'react-query',
      'Tailwind CSS',
      'Zustand',
      'Shopify API',
      'Firebase Firestore',
    ],
    phases: [
      {
        label:
          '하이파이브 어드민 페이지 기능개발 및 유지보수 (2022.05 — 2023.10)',
        problem: [
          '회원관리 · 강사-회원 일정관리 · 급여정산 · 매출 대시보드 등 <b>기능이 계속 확장되는 CRM 어드민</b>에서 반복 개발 소요와 오류 가능성을 함께 줄여야 하는 상황',
        ],
        approach: [
          '<b>재사용 가능한 컴포넌트화</b>: 페이지네이션 리스트뷰, 모달 · 토스트 · 확인창, 단일/다중 선택 UI, 디바운스 입력 컴포넌트로 반복 로직 흡수',
          '구글 캘린더 UI를 참고해 <b>클릭 기반 일정 등록 · 복사 · 주간 복사</b> UI 구현, 카드 호버로 세부정보 확인 가능하도록 개선',
          '회원 수강권 사용 내역 · 관리자 변경 · 급여 정산방식 변경 등 <b>변경 이력 조회(before/after)</b> 기능 구현',
          'context API 기반 <b>권한 체계</b> 구현 — 관리자/강사 구분 외에도 기능 단위로 커스텀 권한 부여 가능',
          '강사별 기본급 · 수업유형별 · 인센티브 정산 방식을 설정하고 결과 · 산출근거를 조회할 수 있는 <b>급여 정산 보조 기능</b> 구현',
          'Access/Refresh Token 기반 로그인과 30분 단위 토큰 갱신, <b>일간 · 주간 · 월간 · 연간 매출/회원수 시각화 대시보드</b> 구현',
        ],
        results: [
          {
            label:
              '반복되는 비즈니스 로직을 컴포넌트로 흡수해, 기능이 늘어도 개발 소요시간을 지속적으로 단축',
          },
        ],
      },
      {
        label: '신사업 커머스 웹뷰 개발 (2023.08 — 2023.10)',
        problem: [
          '"하이파이브" 이용 강사/회원을 대상으로 한 <b>신규 커머스 서비스</b>를 빠르게 시장 검증해야 하는 상황',
        ],
        approach: [
          '앱에서 전달받은 헤더 정보로 서버와 데이터를 주고받는 <b>웹뷰 통신 로직</b> 구현',
          '판매자 미등록 강사 · 담당 강사 없는 회원을 위한 <b>랜딩/서비스 페이지 분기</b> 로직 구현',
          '장바구니 · 결제 · 회원관리 · 제품관리 등 커머스 핵심 기능을 <b>Shopify API</b>로 구현해 백엔드 개발 소요를 줄임',
          '<b>Firebase Firestore</b>로 주문 정보를 저장하고 쿼리로 조회하는 로직 구현',
        ],
        results: [
          { metric: '2개월', label: '개발 착수부터 MVP 출시까지 소요 기간' },
        ],
      },
    ],
    results: [
      {
        label:
          'GraphQL · react-query 기반 어드민과 Shopify · Firebase 기반 커머스 웹뷰를 모두 단독으로 구현',
      },
    ],
  },
  {
    title: '데이팅 서비스 3개 프로덕트 프론트엔드 개발 — 앱 · 웹뷰 · SSR 전반',
    period: '2021.01 — 2022.05',
    org: '바닐라브릿지',
    role: 'FrontEnd Developer',
    summary:
      'React Native 앱("바닐라브릿지", "반쪽")과 SSR 웹("우주메리")까지, 데이팅 서비스 3개 프로덕트의 프론트엔드를 <b>가입퍼널 개선, 신규 앱 런칭, 뉴스피드형 기능 개발</b> 등 전 영역에서 담당.',
    stack: [
      'Vue.js',
      'React Native',
      'SCSS',
      'REST API',
      'PG 결제 SDK',
      '소셜로그인 SDK',
    ],
    phases: [
      {
        label:
          '모바일 결혼정보 서비스(우주메리) 웹 프론트엔드 및 앱 개발 (2021.10 — 2022.05)',
        problem: [
          '유저 풀 확장을 위한 SSR 홈페이지와, 시장 경쟁력 확인을 위한 프로토타입(가입퍼널 · 앱)을 동시에 준비해야 하는 상황',
        ],
        approach: [
          '상품 소개 SSR 페이지 구현, 본인인증 · PG결제 SDK, 휴대폰 인증번호 로그인, 이벤트 트래킹 모듈 연동',
          '지속적인 신규 기능 개발 · 유지보수를 고려해 컴포넌트와 <b>scss 라이브러리화</b> 진행',
          'React/TypeScript 기반 <b>반응형 가입퍼널</b> 구현 — 나이스 인증으로 휴대전화 · 명문대 이메일 인증 처리',
          'React Native 하이브리드 앱 개발 및 <b>스토어 출시</b> — 로그인, 프로필 입력, 채팅, 푸시알림/이벤트 로깅 개발',
          '앱 내 웹뷰 · 백오피스 관리자페이지로 프로필 노출, 약속잡기 · 채팅, PG결제 핵심 플로우 구현',
        ],
      },
      {
        label: '신규 앱 "반쪽" 프론트엔드 개발 및 유지보수 (2021.07 — 2021.09)',
        problem: [
          '신규 앱 초기 런칭 — 소셜로그인 · 이벤트 로깅 인프라, 안드로이드 백버튼 대응 등 <b>공통 기반이 전무한 상태</b>에서 시작',
        ],
        approach: [
          'Facebook · Kakao · Google · Airbridge SDK 연동으로 소셜로그인/이벤트 로깅 환경 구축',
          '<b>스택라우터 자체 구현</b>: css z-index와 상태관리 패턴으로 안드로이드 하드웨어 백버튼에 대응하는 라우팅 방식 설계',
          '가입퍼널 이터레이션: 사진입력 · 자기소개 · 본인인증을 옵션화해 이탈 개선, <b>A/B 테스트</b>로 자기소개 입력률 개선(프로그레스바, 예시 가이드 UI)',
          '가입 후 72시간 할인 이벤트, 채팅 시작 과금 로직, 메시지 이용권 등 <b>매출 개선 A/B 테스트</b> 환경 구현',
        ],
      },
      {
        label:
          '"바닐라브릿지" 앱 신규 피처 개발 및 유지보수 (2021.01 — 2021.06)',
        problem: [
          '"유저-주선자 1:1 관계"로 경영 방향이 바뀌며 관련 기능 전면 수정이 필요한 상황',
          '가입 퍼널 이탈률(본인인증 단계 약 20%)이 높은 상태',
        ],
        approach: [
          '주선자 퇴사 시 <b>자동 배정</b>, 유저의 주선자 변경 기능, 전 주선자 프리미엄 케어 가능하도록 UI/UX 개편',
          '가입 5분 내 임시 유저도 채팅 가능하게 해 프로필 등록 전 이탈 최소화, <b>본인인증 절차를 가입 이후로 이동</b> + 카카오싱크로 인증 절차 간소화',
          '즉석만남 · 지인소개 · 소셜모임 등 <b>뉴스피드형 기능</b> 개발 (Vue 3 Composition API로 재사용 가능한 메서드 구현)',
          'No ONS 캠페인 참여 로직, 신고 기반 자격 박탈 기능 구현',
          '소개팅권 가격 A/B 테스트, 이벤트 로깅 유지보수, NICE 인증 연동, <b>API 스로틀링</b>으로 중복 · 과다 요청 최소화',
        ],
      },
    ],
    results: [
      {
        label:
          '3개 프로덕트(바닐라브릿지 · 반쪽 · 우주메리)의 앱 · 웹뷰 · SSR 페이지를 전 구간 담당',
      },
    ],
  },
  {
    title: '창업성장 기술개발 — 주가 · 뉴스 분석 웹 서비스',
    period: '2020.10 — 2020.12',
    org: '자이냅스',
    role: 'FrontEnd Developer',
    summary:
      '코스피 200대 기업의 주가 분석 · 뉴스 키워드 분석 결과를 웹과 PDF로 제공하는 창업 기회 분석 서비스의 <b>프론트엔드 전 영역을 입사 직후 단독 구현</b>.',
    stack: ['Vue.js', 'REST API', 'Apex Charts', 'D3.js', 'Docker', 'Nginx'],
    approach: [
      'REST API 연동으로 메인 페이지 · 검색 세부페이지 화면 구현',
      '<b>Apex Chart · D3.js</b>로 캔들차트 · 패턴 분석 결과와 뉴스 키워드 분석 결과 시각화',
      '기업 리포트 형식의 <b>PDF 내보내기</b> 기능 구현',
      '디자이너와 협업해 다크모드 컨셉 스타일링, 태블릿 사이즈 대응 UI 구현',
      '<b>Docker 패키징 + Nginx</b> 연동으로 사내 서버 배포',
    ],
  },
]

const PROJECTS_WITH_ID = PROJECTS.map((p, i) => ({ ...p, id: `proj-${i}` }))

function canonicalCompany(org: string) {
  return org.split(' / ')[0].trim()
}

function yearLabel(period: string) {
  const [start, end] = period.split('—').map((s) => s.trim().slice(0, 4))
  return start === end ? start : `${start}–${end}`
}

function buildToc(
  projects: (ProjectData & { id: string })[],
): TocCompanyGroup[] {
  const companyMap = new Map<
    string,
    Map<string, { id: string; title: string }[]>
  >()

  for (const p of projects) {
    const company = canonicalCompany(p.org)
    const year = yearLabel(p.period)
    const yearMap = companyMap.get(company) ?? new Map()
    companyMap.set(company, yearMap)
    const items = yearMap.get(year) ?? []
    yearMap.set(year, items)
    items.push({ id: p.id, title: p.title })
  }

  return Array.from(companyMap.entries()).map(([company, yearMap]) => ({
    company,
    years: Array.from(yearMap.entries()).map(([year, items]) => ({
      year,
      items,
    })),
  }))
}

const TOC = buildToc(PROJECTS_WITH_ID)

export default function CareerPage() {
  return (
    <div className="bg-[var(--paper-sunk)] min-h-screen">
      <ResumeToolbar />
      <CareerToc toc={TOC} />
      <div className="bg-[var(--surface)] max-w-[900px] mx-auto mt-7 mb-14 px-[clamp(28px,5vw,60px)] pt-12 pb-[52px] border border-[var(--line)] rounded-[var(--r-md)] shadow-[var(--shadow-md)]">
        <CareerHeader />
        {PROJECTS_WITH_ID.map((p, i) => (
          <Project key={p.id} p={p} index={i + 1} id={p.id} />
        ))}
      </div>
    </div>
  )
}
