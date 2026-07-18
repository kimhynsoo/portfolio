# KIM Hyeon-Su Portfolio

Backend / AI Engineer 김현수의 웹 포트폴리오입니다.

AI 기능을 서비스에 붙이는 데서 끝내지 않고, 실시간 상태 정합성, 데이터 접근 제어, 배포/운영 흐름까지 안정적으로 설계한 경험을 중심으로 정리했습니다.

## Overview

이 포트폴리오는 Next.js 기반 정적 웹 페이지로 구성되어 있습니다.

- 자기소개, 프로젝트, 수상, 기술 경험, 교육, 자격 정보를 한 페이지에서 확인할 수 있습니다.
- 프로젝트 카드는 상세 모달을 제공하며, 문제 정의부터 선택한 방식, 선택 이유, 해결 과정, 회고까지 이어지는 서사를 담았습니다.
- Vercel Analytics로 방문 통계를 확인할 수 있습니다.
- utterances 기반 GitHub 댓글 기능을 제공합니다.
- 프로필 사진 기반 favicon과 반응형 레이아웃을 적용했습니다.

## Featured Projects

### DocQ

PDF 문서를 AI 퀴즈로 변환하고, 실시간 멀티플레이 보드게임 방식으로 학습하는 플랫폼입니다.

- Spring Boot, WebSocket, Redis Stream, PostgreSQL
- WebSocket의 실시간 전달과 Redis Stream의 처리 보장 책임을 분리
- Consumer Group, ACK, Pending Entries List를 활용해 메시지 처리 여부와 미처리 이벤트를 관리
- SSAFY 공통프로젝트 우수상, 구미 2반 1위

### 우주드로우

사용자 그림을 AI로 분석하고 감정 기록을 별자리 형태로 시각화하는 미술치료 기반 기록 서비스입니다.

- FastAPI, YOLO, OpenCV, Docker Compose, Nginx, Amazon S3
- 집, 나무, 사람 객체별 YOLO 모델을 분리해 탐지 안정성 확보
- OpenCV 기반 특징 추출과 근거 기반 분석 흐름 구성
- SSAFY 특화프로젝트 우수상, 구미 2반 2위

### Y-ECOUNT

ERP 메타데이터와 자연어 질의를 연결하되, LLM 생성 SQL을 안전하게 통제하는 AI ERP 서비스입니다.

- NestJS, TypeScript, PostgreSQL, LLM, AST Validation, Workflow Engine
- Intent Router, whitelist, AST 검증, 회사 ID 서버 주입으로 SQL 실행 범위 제한
- Docker Compose 기반 Jenkins CI/CD 설계
- 백엔드/프론트엔드 테스트 병렬 처리로 CI 대기 시간 단축

## Tech Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- next-seo
- react-markdown
- Vercel Analytics
- utterances

## Project Structure

```text
src/
  components/        UI sections and reusable components
  pages/             Next.js pages router entry points
  styles/            Global Tailwind styles
  types/             Portfolio data types
public/
  images/            Profile and project images
  markdown/          Section markdown content
data.json            Portfolio content data
```

## Getting Started

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## Scripts

```bash
npm run dev       # start local dev server
npm run build     # create production build
npm run start     # start production server
npm run tsc -- --noEmit
```

## Configuration

### Site URL

배포 도메인이 확정되면 Vercel 환경변수에 아래 값을 추가합니다.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

이 값은 canonical URL, Open Graph URL, 공유 이미지 경로에 사용됩니다.

### Comments

댓글은 utterances를 사용합니다.

- GitHub App: https://github.com/apps/utterances
- Repository: `kimhynsoo/portfolio`
- Issue mapping: `pathname`

댓글이 보이지 않으면 repository가 public인지, utterances 앱이 해당 repository에 설치되어 있는지 확인합니다.

### Analytics

Vercel Web Analytics를 사용합니다.

- `@vercel/analytics/react`를 `_app.tsx`에 연결했습니다.
- Vercel Dashboard에서 프로젝트 Analytics를 활성화해야 집계됩니다.

## Content Editing

주요 포트폴리오 내용은 `data.json`에서 관리합니다.

- `information`: 이름과 연락처
- `project`: 프로젝트 카드 기본 정보
- `award`: 수상 내역
- `activity`: 기술 경험
- `education`: 교육
- `certificate`: 자격증

프로젝트 상세 모달의 서사는 `src/components/Project/ProjectModal.tsx`의 `detailsByProjectId`에서 관리합니다.

## License

This project is based on the MIT-licensed very-simple-portfolio template.
