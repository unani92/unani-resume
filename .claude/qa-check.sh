#!/usr/bin/env bash
# QA 에이전트 — 작업된 TS/TSX 파일에 대해 format → safe-fix → lint → typecheck 순서로 실행
# Stop 훅에서 호출됨. 오류 시 exit 2 → asyncRewake 로 Claude 재기동

set -euo pipefail

cd "$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0

# 루프 방지: 이미 QA 검사가 진행 중이면 스킵
PROJECT_HASH=$(pwd | md5 | cut -c1-8 2>/dev/null || pwd | md5sum | cut -c1-8 2>/dev/null)
LOCK_FILE="/tmp/.claude-qa-${PROJECT_HASH}.lock"
if [ -f "$LOCK_FILE" ]; then
  exit 0
fi
touch "$LOCK_FILE"
trap "rm -f '$LOCK_FILE'" EXIT

# 1. 변경된 파일 수집 (수정 + 신규 미추적)
CHANGED=$(
  git diff --name-only HEAD 2>/dev/null || true
  git ls-files --others --exclude-standard 2>/dev/null || true
)

# TS/TSX 파일만 필터
TSFILES=$(echo "$CHANGED" | grep -E '\.(ts|tsx)$' | grep -v node_modules | sort -u)

if [ -z "$TSFILES" ]; then
  exit 0
fi

echo "🔍 QA 검사 대상:"
echo "$TSFILES"
echo ""

# ── Step 1: format ────────────────────────────────────────────
echo "▶ Step 1/4: biome format"
echo "$TSFILES" | xargs bunx biome format --write 2>&1 || true

# ── Step 2: safe fixes ────────────────────────────────────────
echo "▶ Step 2/4: biome safe-fix"
echo "$TSFILES" | xargs bunx biome check --fix 2>&1 || true

# ── Step 3: lint ──────────────────────────────────────────────
echo "▶ Step 3/4: biome lint"
LINT_OUT=$(echo "$TSFILES" | xargs bunx biome lint --diagnostic-level=error 2>&1)
LINT_EXIT=$?

# ── Step 4: typecheck ─────────────────────────────────────────
echo "▶ Step 4/4: typecheck"
TC_OUT=$(bun run typecheck 2>&1)
TC_EXIT=$?

# ── 결과 판정 ─────────────────────────────────────────────────
if [ "$LINT_EXIT" -ne 0 ] || [ "$TC_EXIT" -ne 0 ]; then
  echo ""
  echo "❌ QA 실패 — 아래 오류를 수정 후 재시도하세요."
  if [ "$LINT_EXIT" -ne 0 ]; then
    echo ""
    echo "=== LINT ERRORS ==="
    echo "$LINT_OUT"
  fi
  if [ "$TC_EXIT" -ne 0 ]; then
    echo ""
    echo "=== TYPE ERRORS ==="
    echo "$TC_OUT"
  fi
  exit 2  # asyncRewake: Claude 재기동
fi

echo ""
echo "✅ QA 통과 — format / safe-fix / lint / typecheck 모두 정상"
exit 0
