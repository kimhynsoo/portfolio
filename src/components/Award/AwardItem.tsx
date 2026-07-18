import { AwardProps } from "@/types";

const AwardItem = ({ name, date, organizer, description }: AwardProps) => {
  const [projectLine, ...detailLines] = description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const projectName = projectLine?.startsWith("프로젝트명")
    ? projectLine.replace(/^프로젝트명\s*:\s*/, "")
    : undefined;
  const details = projectName ? detailLines : [projectLine, ...detailLines].filter(Boolean);

  return (
    <article className="rounded-lg border-2 border-GRAY_LIGHT bg-white p-6 shadow-sm dark:border-GRAY_EXTRAHEAVY dark:bg-BLACK">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-md bg-PRIMARY_LIGHT px-2 py-1 text-xs font-semibold text-PRIMARY_HEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-PRIMARY">
              {date}
            </span>
            <h3 className="text-2xl text-GRAY_EXTRAHEAVY dark:text-white">{name}</h3>
            <span className="text-sm font-medium text-GRAY_HEAVY dark:text-GRAY">
              {organizer}
            </span>
          </div>
          {projectName && (
            <div className="w-fit rounded-lg border border-GRAY_LIGHT px-3 py-2 text-sm font-semibold text-GRAY_EXTRAHEAVY dark:border-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
              {projectName}
            </div>
          )}
        </div>
        <ul className="flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
          {details.map((detail) => (
            <li key={detail} className="pl-1">
              {detail.replace(/^-\s*/, "")}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default AwardItem;
