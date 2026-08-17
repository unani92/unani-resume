---
name: yoonhwan-profile
description: 정윤환의 실제 이력 및 프로필 컨텍스트. 포트폴리오 컴포넌트 내용 수정, 이력서 업데이트, 자기소개 문구 작성 시 이 스킬을 참조할 것.
---

# 동기화 규칙 ⚠️

**컴포넌트(Hero / About / Projects / Footer)의 내용을 수정할 때는 반드시 이 스킬 파일도 함께 업데이트해야 한다.**

변경 대상:
- 프로젝트 수치(DAU, metric 등) 변경 → `## 포트폴리오 컴포넌트 작성 가이드 > Projects 섹션` 업데이트
- 기술스택 추가/제거 → `## Skills` + `포트폴리오 컴포넌트 작성 가이드 > About 섹션` 업데이트
- 경력사항 추가/변경 → `## Work Experience` 업데이트
- 자기소개 문구 변경 → `## 한 줄 소개` + `Hero 섹션` 업데이트

---

# 정윤환 (Yoonhwan Jung) — FrontEnd Developer

## Contact
- Email: unani9292@gmail.com / unani92@naver.com
- Phone: +82) 010-4906-3273
- GitHub: https://github.com/unani92

## 한 줄 소개
5년+ 경력의 프론트엔드 개발자. React/Next.js 기반 스타트업 실서비스를 다수 경험했으며, 사용자와 가장 가까운 곳에서 실제로 쓰이는 서비스를 만드는 것을 좋아합니다.

---

## Skills

### Frontend
- **Languages**: JavaScript, TypeScript
- **Frameworks**: React (Next.js v12~15), Vue (v2/v3, Nuxt), React Native
- **Styling**: Tailwind CSS, SCSS, CSS-in-JS (Emotion)
- **State/Data**: React-Query, Zustand, Redux, GraphQL

### Backend / Infra
- **Backend**: Node.js (Express, NestJS), Python (Django, Flask)
- **DB**: MySQL, PostgreSQL
- **Infra**: AWS (EC2, S3, CloudFront), Firebase, Vercel, Supabase
- **Tools**: Prisma, GitHub Copilot

### Analytics
- Firebase BigQuery, Airbridge (AB180), Hackle

---

## Work Experience

### 스토어링크 — FrontEnd Developer
**기간**: 2024.1.8 ~ 현재
**서비스**: 리뷰 체험단 플랫폼 퍼그샵(한국/일본), Pointail(일본 현지 리브랜딩) — 이커머스 마케팅 에이전시
**기술**: React (Next.js), TypeScript, react-query, Tailwind CSS, zustand, i18n
**주요 업무**:
- 퍼그샵 사용자/관리자 페이지 기능 개발 및 유지보수
- [AX] 백엔드 개발자 출산휴가 공백 기간(26.7~) 중 에이전트를 활용한 워크플로우를 통해 포인테일 백엔드(Kotlin/Spring Boot) 업무 대체 수행
  - 서비스별 경계·업무 규칙을 문서로 구조화한 하네스로 세션 시작마다 AI가 해당 서비스에서 하면 안 되는 것과 규칙을 먼저 로드하도록 강제 — 국가·프로덕트가 얽힌 모노레포에서 다른 서비스 코드를 오염시키는 실수 차단
  - 설계(Architect) → 도메인 검증(Domain Expert) → 구현(Backend Developer) → 리뷰(Reviewer) → QA로 역할이 분리된 서브에이전트 워크플로우로, 판단하기 어려운 영역(도메인 규칙, 코드 리뷰 기준)을 서로 검증
- [AX] 기존 프론트엔드 업무 워크플로우를 에이전트 기반으로 재설계해 구현·테스트·배포 전반을 담당
  - 기존 비즈니스 로직을 구조화한 문서들과 새로운 기획 문서/디자인 목업을 스캔해 구현 범위를 분석하고 구현해야 하는 작업이 기존 구현에 미칠 영향 범위를 분석(분석 에이전트)
  - 상기한 설계 문서를 포함해 기존의 컨벤션 스캔 및 정의된 업무 순서를 바탕으로 구현 플랜 문서화(플랜 에이전트)
  - 플랜 문서에서 확정된 내용만을 바탕으로 코딩을 수행(구현 에이전트) — 분석·플랜 단계에서 논의되지 않은 내용의 임의 구현(할루시네이션)을 금지해 설계 의도와 어긋난 결과물 발생 가능성 줄임
- [AX] 핵심 비즈니스 로직과 엣지케이스 대상 Playwright e2e 테스트 설계 · 구현을 담당하는 워크플로우 에이전트 개발
  - data-testid 명명 규칙, 테스트 코드 구현 패턴, 값 주입이 어려운 UI에 한정된 우회 방법을 스킬로 문서화해 AI가 일관된 구조로 테스트 코드를 설계·작성하도록 강제
  - 핵심 비즈니스 로직을 한국어/일본어 서비스 동시 검증하도록 설계 — 리팩터링 시 기존 기능 누락 방지 및 QA 핑퐁으로 인한 시간 소요 절감
- 한국·일본 서비스 리뉴얼 프론트엔드 개발 (다국어 i18n 포함)
- Pointail 광고주 페이지 신규 개발 (2025.6~, Next.js, 퍼그샵과 동일 스택)
  - 일본 현지 리뷰 체험단 모집을 위한 광고주용 페이지
  - 홍보용 랜딩, 캠페인 생성/복사/임시저장, 상세·수정, 리포트 등 광고주 운영 전 과정 구현

---

### 슬릭코퍼레이션 — FrontEnd Developer
**기간**: 2022.5.16 ~ 2023.10.31
**서비스**: 피트니스 CRM 플랫폼 "하이파이브", 강사-회원 커머스 "하이파이브 마켓"
**기술**: React (Next.js), TypeScript, Emotion (CSS-in-JS), GraphQL, react-query, Firebase, Vercel
**주요 업무**:
- 하이파이브 어드민 페이지 기능 개발 및 유지보수
- 하이파이브 마켓 앱 내 웹뷰 MVP 개발 및 완료

---

### 바닐라브릿지 — FrontEnd Developer
**기간**: 2021.1.4 ~ 2022.5.14
**서비스**: 소개팅 서비스 "바닐라브릿지", 4050 전용 앱 "반쪽"
**기술**: Vue (Nuxt.js), React, JavaScript, SCSS, React Native, AWS S3, Firebase
**주요 업무**:
- 바닐라브릿지 앱 내 웹뷰 비즈니스 로직 구현
- 주선자 PC/모바일 클라이언트 개발
- React Native 앱 유지보수 및 신기능 추가
- 신규 앱 "반쪽" React Native + 웹뷰 개발 및 실서비스 배포
- AWS CLI를 통한 SPA 배포 자동화
- Firebase BigQuery 이벤트 로깅 및 Hackle A/B 테스트 환경 구축
- Airbridge SDK 연동 (마케팅 성과 측정)

---

### 자이냅스 — FrontEnd Developer
**기간**: 2020.10 ~ 2020.12
**서비스**: AI 챗봇 스타트업 (텍스트 NLU, 음성합성 등)
**기술**: Vue, JavaScript, SCSS, REST API, Docker
**주요 업무**:
- 정부과제 "창성" 프론트엔드 전반 (코스피 200 주가 분석 웹서비스)
- Docker 패키징, Nginx 연동, 사내 서버 배포

---

## 개인 프로젝트

### FC서울 수호신 커뮤니티
**기간**: 2023.12 ~ 현재
**URL**: https://www.fcseoul12.com/
**규모**: 월 평균 DAU 200명, **최다 DAU 2,300명**
**기술**:
- FE: Next.js 14 (App Router), Tailwind CSS, react-query, zustand
- BE: Next.js API Routes, Prisma, MySQL, Redis
- 인프라: Vercel
**주요 기능**:
- 카카오 OAuth 간편 로그인
- 게시판, 원정응원 버스 예약, 굿즈 판매
- Redis 캐싱 전략으로 서버 부하 감소
- SEO 최적화 (구글·네이버 검색 노출)
- 회원 권한별 접근 범위 관리

---

## Education
- 2013.3 ~ 2017.2: 건국대학교(서울) 기술경영학과 졸업
- 2020.1 ~ 2020.10: 삼성청년소프트웨어아카데미(SSAFY) 3기 수료

---

## 포트폴리오 컴포넌트 작성 가이드

### Hero 섹션
- 역할: FrontEnd Developer · Seoul
- H1 헤드라인: "사용자와 가장 가까운 곳에서, **좋은 경험**을 만듭니다."
- 서브텍스트: React/Next.js 기반 스타트업 실서비스를 다수 경험한 프론트엔드 개발자입니다. 사용자 경험을 중심으로 한 UI 개발과 실서비스 운영에 집중합니다.
- 통계: 5+ yrs / 4 companies / 10+ projects

### Projects 섹션 (3개)
1. **수호신 커뮤니티** (SIDE, 2023~) — Next.js 14 풀스택, metric: "DAU 최다 2,300"
2. **퍼그샵 KO/JP 리뉴얼** (PLATFORM, 2024~) — 한·일 다국어 이커머스 플랫폼, metric: "KO · JP 다국어"
3. **Pointail 광고주 페이지** (PLATFORM, 2025.6~) — 퍼그샵을 일본 현지 시장용으로 리브랜딩한 리뷰 체험단 플랫폼의 광고주 페이지 신규 개발, metric: "일본 현지 서비스"
   - 기능별 영상 갤러리(A안: 좌측 기능 리스트 + 우측 영상) 형태로 노출
   - 표시 기능: 홍보용 랜딩 페이지, 캠페인 생성, 캠페인 복사, 캠페인 임시저장, 캠페인 상세/수정, 캠페인 리포트
   - 영상은 `public/videos/pointail/{slug}.mp4` + 포스터 `{slug}.jpg` 사용, video-editing-expert 에이전트로 압축
   - 기술 스택은 퍼그샵과 동일 (Next.js / TypeScript / React-Query / Zustand / Tailwind / i18n)

**포트폴리오 카드에서 제외된 과거 프로젝트** (이력 자체는 Work Experience에 보존):
- 하이파이브 마켓 MVP (2023, 슬릭코퍼레이션 재직 중)
- 반쪽 앱 React Native (2021~2022, 바닐라브릿지 재직 중)

### About 섹션 기술스택 그룹 (6개)
- **Languages**: JavaScript, TypeScript
- **Frameworks**: React, Next.js, Vue, Nuxt, React Native
- **Styling**: Tailwind CSS, SCSS, Emotion
- **Data / State**: React-Query, GraphQL, Zustand, Redux
- **Backend**: Node.js, NestJS, Prisma, MySQL
- **Infra**: AWS, Vercel, Firebase, Supabase
