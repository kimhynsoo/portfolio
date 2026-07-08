import { useEffect } from "react";

import Links from "./Links";
import ProjectGallery from "./ProjectGallery";

import { ProjectProps } from "@/types";

type Detail = {
  headline: string;
  role: string;
  features: string[];
  problem: string;
  decision: string;
  solution: {
    title: string;
    action: string;
    reason: string;
  }[];
  impact: { label: string; value: string }[];
  retrospective: string;
};

const detailsByProjectId: Record<number, Detail> = {
  0: {
    headline:
      "WebSocket의 실시간성과 Redis Stream의 처리 보장 구조를 분리해, 멀티플레이 상태 정합성 문제를 해결했습니다.",
    role: "팀장 · Backend · 6인 팀",
    features: [
      "PDF 기반 퀴즈 자동 생성",
      "실시간 멀티플레이 보드게임",
      "게임방 생성, 입장, 턴 진행, 응답 처리 API",
      "WebSocket 기반 사용자별 진행 상태 전달",
    ],
    problem:
      "1차 MVP 배포 후 사용자마다 게임 진행 화면이 다르게 보였습니다. 실시간 전달은 되고 있었지만, 사용자 응답 처리 완료 여부와 라운드 전환 기준은 보장되지 않았습니다.",
    decision:
      "WebSocket은 빠르지만 메시지 처리 여부를 보장하지 못한다고 판단했고, 실시간 연결과 상태 일관성의 책임을 분리했습니다.",
    solution: [
      {
        title: "Redis Stream + ACK",
        action: "Consumer Group과 ACK로 사용자 응답 이벤트의 처리 완료 여부를 추적했습니다.",
        reason:
          "WebSocket은 빠른 전달에는 적합하지만 서버가 메시지를 실제로 처리했는지까지 보장하지 못하기 때문입니다.",
      },
      {
        title: "Pending 재처리 + ACK Timeout",
        action: "처리되지 않은 메시지를 다시 확인하고 미응답 사용자는 제한 시간 후 자동 처리했습니다.",
        reason:
          "한 사용자의 네트워크 지연이나 이탈 때문에 전체 게임 진행이 멈추는 상황을 막기 위해서입니다.",
      },
      {
        title: "명시적인 라운드 전환 조건",
        action: "모든 응답 도착 또는 제한 시간 종료를 다음 라운드 전환 기준으로 설정했습니다.",
        reason:
          "클라이언트마다 다른 시점에 화면을 바꾸지 않고 서버 상태를 단일 기준으로 사용하기 위해서입니다.",
      },
    ],
    impact: [
      { label: "피드백 반영", value: "92%" },
      { label: "화면 불일치 불만", value: "0건" },
      { label: "공통 프로젝트", value: "1위" },
    ],
    retrospective:
      "실시간 서비스는 빠른 이벤트 전달보다 일관된 상태 전환 기준이 중요하다는 점을 배웠습니다. 이후에는 연결, 지연, 이탈, 미응답 상황을 초기 설계 단계에서 함께 고려하려고 합니다.",
  },
  1: {
    headline:
      "단일 모델의 범용성보다 객체별 탐지 안정성을 우선해 House, Tree, Person 3개 모델로 분리했습니다.",
    role: "팀장 · AI / Infra · 6인 팀",
    features: [
      "HTP 검사 기반 드로잉 분석",
      "데일리 감정 기록",
      "별자리 시각화",
      "AI 분석 리포트 생성",
    ],
    problem:
      "집, 나무, 사람 그림은 시각적 특징과 해석 기준이 달라 단일 모델로 처리하면 탐지 편차가 커질 수 있었습니다. AI 결과가 사용자 리포트로 이어지는 서비스였기 때문에 추론 흐름의 안정성이 중요했습니다.",
    decision:
      "AI 결과가 사용자에게 직접 전달되는 서비스라면 모델 정확도만큼 입력 도메인 분리와 결과 신뢰성이 중요하다고 판단했습니다.",
    solution: [
      {
        title: "객체별 YOLO 모델 분리",
        action: "집, 나무, 사람을 각각 담당하는 3개의 독립 모델로 나누어 추론했습니다.",
        reason:
          "세 객체의 형태와 판단 기준이 달라 단일 모델에서는 클래스별 탐지 편차가 커졌기 때문입니다.",
      },
      {
        title: "OpenCV 보조 특징 추출",
        action: "면적, 중심 위치, 밀도, 배치 정보처럼 해석에 필요한 수치 특징을 별도로 계산했습니다.",
        reason:
          "객체 탐지 결과만으로는 그림의 크기와 위치 관계를 안정적으로 설명하기 어려웠기 때문입니다.",
      },
      {
        title: "근거 기반 RAG 분석",
        action: "논문과 해석 가이드를 검색해 LLM 분석 결과에 참고 근거를 제공했습니다.",
        reason:
          "심리 분석 문장을 모델의 일반 지식에만 맡기지 않고 서비스가 허용한 자료 범위 안에서 생성하기 위해서입니다.",
      },
    ],
    impact: [
      { label: "모델 구조", value: "3분리" },
      { label: "학습 데이터", value: "5만 장" },
      { label: "특화 프로젝트", value: "2위" },
    ],
    retrospective:
      "AI 모델을 붙이는 것보다 모델 결과가 서비스 흐름에서 안정적으로 사용되도록 입력, 추론, API, 배포 경계를 분리하는 일이 중요하다는 점을 배웠습니다.",
  },
  2: {
    headline:
      "LLM이 생성한 SQL을 그대로 실행하지 않고, AST 검증과 whitelist, 회사 ID 서버 주입으로 실행 범위를 통제했습니다.",
    role: "Backend / AI Service · ERP 기업연계 프로젝트",
    features: [
      "ERP 메타데이터 기반 자연어 질의",
      "AI Assistant Orchestrator",
      "Workflow Engine",
      "NLQ SQL 검증 및 실행 제한",
    ],
    problem:
      "LLM이 생성한 SQL을 그대로 실행하면 다른 회사 데이터 조회, 허용되지 않은 테이블 접근, 삭제·수정 쿼리 실행 위험이 생길 수 있었습니다. ERP에서는 편의성만큼 데이터 안전성이 중요했습니다.",
    decision:
      "ERP 환경에서는 자연어 질의의 편의성보다 회사 데이터 분리와 쿼리 안전성이 우선이라고 판단했습니다.",
    solution: [
      {
        title: "Intent Router",
        action: "자연어 요청 유형을 먼저 분류하고 서비스가 허용한 intent만 다음 단계로 전달했습니다.",
        reason:
          "모든 요청을 곧바로 SQL 생성으로 연결하면 업무 범위를 벗어난 질의까지 실행될 수 있기 때문입니다.",
      },
      {
        title: "Whitelist + AST 검증",
        action: "허용 테이블과 컬럼을 제한하고 SQL 구조를 검사해 SELECT 쿼리만 실행했습니다.",
        reason:
          "문자열 검사만으로는 우회된 수정·삭제 쿼리나 허용되지 않은 데이터 접근을 정확히 차단하기 어렵기 때문입니다.",
      },
      {
        title: "회사 ID 서버 강제 주입",
        action: "회사 ID와 soft delete 조건을 클라이언트 입력이 아닌 서버에서 쿼리에 추가했습니다.",
        reason:
          "LLM이나 사용자가 회사 식별 조건을 누락하거나 변경해 다른 회사 데이터에 접근하는 것을 막기 위해서입니다.",
      },
      {
        title: "단계형 Workflow Engine",
        action: "요청 해석, SQL 생성, 검증, 실행을 독립된 단계로 분리해 관리했습니다.",
        reason:
          "각 단계의 실패 원인을 추적하고 검증 실패 시 실행 전에 안전하게 중단하기 위해서입니다.",
      },
    ],
    impact: [
      { label: "SQL 실행", value: "SELECT 제한" },
      { label: "보안 기준", value: "서버 주입" },
      { label: "AI 결과", value: "검증 후 실행" },
    ],
    retrospective:
      "AI 기능은 구현 자체보다 결과를 어디까지 믿고 어떻게 검증할지의 기준이 더 중요했습니다. AI가 만든 결과를 서비스가 통제하는 구조를 설계하는 경험이었습니다.",
  },
};

const Section = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`flex flex-col gap-3 ${className}`}>
    <h4 className="text-xl text-GRAY_EXTRAHEAVY dark:text-white">{title}</h4>
    {children}
  </section>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectProps;
  onClose: () => void;
}) => {
  const detail = detailsByProjectId[project.id];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-BLACK/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} 상세 정보`}
      onMouseDown={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl dark:bg-BLACK md:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 border-b border-GRAY_LIGHT pb-6 dark:border-GRAY_EXTRAHEAVY md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-PRIMARY_HEAVY dark:text-PRIMARY">
                {`${project.period[0]} - ${project.period[1]}`}
              </span>
              <h3 className="text-4xl text-GRAY_EXTRAHEAVY dark:text-white">{project.name}</h3>
              <p className="max-w-3xl text-2xl font-bold leading-snug text-GRAY_EXTRAHEAVY dark:text-white md:text-3xl">
                {detail.headline}
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-GRAY_HEAVY dark:text-GRAY_LIGHT">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-md bg-GRAY_LIGHT px-2 py-1 text-xs font-semibold text-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="self-start rounded-md border border-GRAY_LIGHT px-3 py-2 text-sm font-semibold text-GRAY_EXTRAHEAVY hover:border-PRIMARY hover:text-PRIMARY_HEAVY dark:border-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT dark:hover:text-PRIMARY"
            >
              닫기
            </button>
          </div>

          {project.images && project.images.length > 0 && (
            <ProjectGallery
              projectName={project.name}
              images={project.images}
              architectureImages={project.architectureImages}
            />
          )}

          <div className="grid gap-4 md:grid-cols-3">
            {detail.impact.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-GRAY_LIGHT bg-GRAY_LIGHT p-4 dark:border-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY"
              >
                <span className="text-sm font-medium text-GRAY_HEAVY dark:text-GRAY">
                  {item.label}
                </span>
                <strong className="mt-1 block text-3xl text-PRIMARY_HEAVY dark:text-PRIMARY">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-6">
              <Section title="담당 역할">
                <p className="rounded-lg border border-GRAY_LIGHT bg-GRAY_LIGHT p-4 text-base font-semibold leading-relaxed text-GRAY_EXTRAHEAVY dark:border-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
                  {detail.role}
                </p>
              </Section>
              <Section title="핵심 기능">
                <ul className="m-0 flex list-disc flex-col gap-2 py-0 pl-5 text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
                  {detail.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Section>
              <Section title="GitHub">
                <Links repoUrl={project.repoUrl} webUrl={project.webUrl} />
              </Section>
            </div>

            <div className="flex flex-col gap-7">
              <Section title="문제 정의">
                <p className="rounded-lg border-l-4 border-PRIMARY bg-GRAY_LIGHT p-4 text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
                  {detail.problem}
                </p>
              </Section>
              <Section title="왜 이 방식을 선택했는가">
                <p className="rounded-lg border border-PRIMARY/40 bg-PRIMARY/10 p-4 text-lg font-bold leading-relaxed text-PRIMARY_HEAVY dark:text-PRIMARY">
                  {detail.decision}
                </p>
              </Section>
              <Section title="해결 과정">
                <div className="grid gap-3">
                  {detail.solution.map((solution) => (
                    <article
                      key={solution.title}
                      className="rounded-lg border border-GRAY_LIGHT p-4 dark:border-GRAY_EXTRAHEAVY"
                    >
                      <h5 className="text-lg font-bold text-GRAY_EXTRAHEAVY dark:text-white">
                        {solution.title}
                      </h5>
                      <p className="mt-2 text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
                        {solution.action}
                      </p>
                      <div className="mt-3 border-t border-GRAY_LIGHT pt-3 dark:border-GRAY_EXTRAHEAVY">
                        <span className="text-xs font-bold text-PRIMARY_HEAVY dark:text-PRIMARY">
                          선택 이유
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-GRAY_HEAVY dark:text-GRAY_LIGHT">
                          {solution.reason}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </Section>
              <Section title="회고">
                <p className="text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
                  {detail.retrospective}
                </p>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
