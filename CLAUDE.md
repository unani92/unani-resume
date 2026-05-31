@AGENTS.md

# 스타일링 지침

## 인라인 스타일 금지

`style={{ }}` 프롭 사용 금지. Tailwind CSS class를 우선 사용할 것.

- CSS 변수 참조: `bg-[var(--accent)]`, `text-[var(--ink-2)]`
- clamp() 값: `text-[clamp(38px,5.5vw,68px)]`
- 복잡한 값: `shadow-[var(--shadow-md)]`, `rounded-[var(--r-sm)]`
- 동적 스타일도 조건부 className으로 처리

## Tailwind v4 — CSS 캐스케이드 레이어 주의사항

Tailwind v4는 유틸리티 클래스를 `@layer utilities`에 배치한다.
`globals.css`에 레이어 바깥(unlayered)으로 `* { padding: 0; margin: 0 }` 같은 리셋을 쓰면
unlayered 스타일이 `@layer utilities`보다 cascade 우선순위가 높아
**모든 Tailwind 패딩·마진 클래스가 무효화**된다.

**규칙**: 커스텀 전역 리셋은 반드시 `@layer base { }` 안에 작성하거나, 중복이면 제거할 것.
Tailwind v4의 `@import "tailwindcss"`가 이미 preflight를 `@layer base`에 포함한다.

## Tailwind v4 — 논리 속성(Logical Properties)

Tailwind v4는 `px-*` → `padding-inline`, `py-*` → `padding-block` 등 CSS 논리 속성을 생성한다.
위의 cascade 레이어 문제가 해결되면 정상 동작한다.

## 레이아웃 유틸리티 클래스

fluid 스페이싱처럼 Tailwind arbitrary value로 표현하기 어려운 레이아웃은
`globals.css`에 CSS 클래스로 정의하고 사용한다.

```css
.px-fluid   { padding-left: clamp(20px,6vw,64px); padding-right: clamp(20px,6vw,64px); }
.hero-section { display: grid; grid-template-columns: 1.5fr 1fr; ... }
```

---

# Next.js / React 지침

## vercel-react-best-practices 스킬 사용

React 컴포넌트 작성·리팩터링 시 `.agents/skills/vercel-react-best-practices` 스킬을 참조할 것.
주요 적용 규칙:

- `rendering-hoist-jsx`: 정적 배열·JSX는 컴포넌트 외부로 호이스팅
- `rerender-no-inline-components`: 컴포넌트 안에 컴포넌트 정의 금지
- `rendering-conditional-render`: 조건부 렌더링은 `&&` 대신 삼항 연산자 사용
- `bundle-dynamic-imports`: 무거운 컴포넌트는 `next/dynamic`으로 지연 로드
- `server-*` 규칙: 서버 컴포넌트에서 데이터 페칭 최적화

## Next.js 버전 확인

코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 확인할 것.
현재 버전의 API와 파일 구조가 training data와 다를 수 있다.

---

# 디자인 시스템

`design-system/ui_kits/portfolio/` — 포트폴리오 페이지 컴포넌트 레퍼런스 JSX
`design-system/colors_and_type.css` — 색상, 타이포그래피, 스페이싱 토큰 정의
