import Image from "next/image";

import Links from "./Links";

import { ProjectProps } from "@/types";

const ProjectItem = ({
  project,
  onSelect,
}: {
  project: ProjectProps;
  onSelect: (project: ProjectProps) => void;
}) => {
  const { name, description, repoUrl, webUrl, period, stack, imgSrc } = project;
  const previewImage = project.images?.[0] ?? imgSrc;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border-2 border-GRAY_LIGHT bg-white shadow-sm transition hover:-translate-y-1 hover:border-PRIMARY hover:shadow-md dark:border-GRAY_EXTRAHEAVY dark:bg-BLACK">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="flex flex-1 flex-col text-left"
        aria-label={`${name} 상세 보기`}
      >
        {previewImage && (
          <div className="flex h-44 items-center justify-center bg-GRAY_LIGHT p-3 dark:bg-GRAY_EXTRAHEAVY">
            <Image
              src={previewImage}
              width={640}
              height={400}
              alt={`${name} 대표 화면`}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-GRAY_HEAVY">
              {`${period[0]} - ${period[1]}`}
            </span>
            <h3 className="text-3xl text-GRAY_EXTRAHEAVY group-hover:text-PRIMARY_HEAVY dark:text-white dark:group-hover:text-PRIMARY">
              {name}
            </h3>
          </div>
          <p className="text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
            {description}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5">
            {stack.slice(0, 5).map((stack) => (
              <span
                key={stack}
                className="rounded-md bg-GRAY_LIGHT px-2 py-1 text-xs font-semibold text-GRAY_EXTRAHEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </button>
      <div className="flex items-center justify-between border-t border-GRAY_LIGHT px-5 py-4 dark:border-GRAY_EXTRAHEAVY">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="text-sm font-semibold text-PRIMARY_HEAVY transition hover:text-PRIMARY dark:text-PRIMARY"
          aria-label={`${name} 상세 보기`}
        >
          자세히 보기
        </button>
        <Links repoUrl={repoUrl} webUrl={webUrl} />
      </div>
    </article>
  );
};

export default ProjectItem;
