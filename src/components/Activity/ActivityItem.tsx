import { ActivityProps } from "@/types";

const SkillIcon = ({
  icon,
  badge,
}: {
  icon: NonNullable<NonNullable<ActivityProps["items"]>[number]["icon"]> | undefined;
  badge: string;
}) => {
  const iconClass = "h-9 w-9";

  switch (icon) {
    case "java":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <path
            fill="#ef4444"
            d="M27.5 5c-5.5 3.6-2.8 6.2-.4 8.5 2.2 2.1 4.1 4 .2 7.4 6.2-2.4 6.7-6.2 3.1-9.5-2.5-2.2-4.7-3.9-2.9-6.4Z"
          />
          <path
            fill="#2563eb"
            d="M15.4 29.1c-4.9 1.4-3.6 4.3 6.8 4.3 8.3 0 13.4-1.7 15.1-4.1-2.6 1.4-7.6 2-13.2 2-6.1 0-9.9-.9-8.7-2.2Zm1.4 7.1c-3.4 1.2-2.1 3.8 6.7 3.8 6.5 0 11.4-1 13.8-2.9-3.3.9-7.1 1.4-11.8 1.4-5.2 0-8.9-.7-8.7-2.3Z"
          />
          <path
            fill="#2563eb"
            d="M37.9 23.8c1.2 1.5-1.3 2.9-1.3 2.9s4.6-.4 4.9-2.6c.3-2-2.8-2.8-2.8-2.8s.8 1 .2 1.8c-1.8 2.4-15.5 2.8-22.1 1-1.2.9-1.1 1.8-.1 2.5 4.3 2.8 18.6 1.6 21.2-2.8Z"
          />
        </svg>
      );
    case "typescript":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <rect width="36" height="36" x="6" y="6" rx="3" fill="#3178c6" />
          <path
            fill="white"
            d="M17 20h-5v-4h14v4h-5v15h-4V20Zm11.5 15c-2.1 0-3.8-.5-5-1.5v-4.1c1.2 1 2.8 1.8 4.9 1.8 1.5 0 2.3-.5 2.3-1.4 0-.8-.5-1.2-2.9-2.2-3-1.2-4.4-2.8-4.4-5.4 0-3.2 2.4-5.4 6.4-5.4 1.8 0 3.3.4 4.5 1.1v3.9c-1.3-.8-2.7-1.3-4.3-1.3-1.3 0-2 .5-2 1.3 0 .8.6 1.1 3 2.1 3.2 1.3 4.4 3 4.4 5.6 0 3.4-2.5 5.5-6.9 5.5Z"
          />
        </svg>
      );
    case "redis":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#dc2626" d="m24 8 16 7-16 7-16-7 16-7Z" />
          <path fill="#ef4444" d="m8 22 16 7 16-7v5L24 34 8 27v-5Z" />
          <path fill="#b91c1c" d="m8 31 16 7 16-7v5l-16 7-16-7v-5Z" />
          <path fill="white" d="m19 14 5-2 5 2-5 2-5-2Zm8 5 4-1.8 4 1.8-4 1.8-4-1.8Z" opacity=".8" />
        </svg>
      );
    case "database":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <ellipse cx="24" cy="12" rx="14" ry="6" fill="#0ea5e9" />
          <path fill="#0284c7" d="M10 12v20c0 3.3 6.3 6 14 6s14-2.7 14-6V12c0 3.3-6.3 6-14 6s-14-2.7-14-6Z" />
          <path fill="#38bdf8" d="M10 22c0 3.3 6.3 6 14 6s14-2.7 14-6v4c0 3.3-6.3 6-14 6s-14-2.7-14-6v-4Z" />
        </svg>
      );
    case "docker":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#2496ed" d="M9 24h28c-.6 8-6.4 13-15.2 13C14.7 37 10.5 33.9 9 28H5c-.7 0-1.2-.8-.8-1.4L6 24h3Z" />
          <path fill="#2496ed" d="M14 14h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 0h5v5h-5v-5ZM20 8h5v5h-5V8Zm-6 12h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 0h5v5h-5v-5Z" />
          <path fill="#0f172a" d="M39 20c2.5 0 4.2 1.4 5 3.3-1.7.8-3.4.8-5.2 0-.7-1.1-.6-2.2.2-3.3Z" opacity=".35" />
        </svg>
      );
    case "ai":
      return (
        <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="18" cy="18" r="10" fill="#312e81" />
          <circle cx="30" cy="30" r="12" fill="#06b6d4" opacity=".9" />
          <path fill="#0f766e" d="M18 31c8.8 0 16-7.2 16-16 4.8 2.2 8 7 8 12.5C42 35.5 35.5 42 27.5 42 22 42 17.2 38.8 15 34c1 .7 2 1 3 1Z" opacity=".75" />
        </svg>
      );
    default:
      return <span>{badge}</span>;
  }
};

const ActivityItem = ({ name, period, description, items }: ActivityProps) => {
  if (items?.length) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <h3 className="shrink-0 text-2xl text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT">
            {name}
          </h3>
          <div className="h-[2px] flex-1 bg-GRAY_LIGHT dark:bg-GRAY_EXTRAHEAVY" />
        </div>
        <div className="flex flex-col gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[150px] gap-5 rounded-lg border-2 border-GRAY_LIGHT bg-white p-5 text-GRAY_EXTRAHEAVY shadow-sm dark:border-GRAY_EXTRAHEAVY dark:bg-BLACK dark:text-GRAY_LIGHT"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-GRAY_LIGHT text-xl font-bold text-PRIMARY_HEAVY dark:bg-GRAY_EXTRAHEAVY dark:text-PRIMARY">
                <SkillIcon icon={item.icon} badge={item.badge} />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl text-GRAY_EXTRAHEAVY dark:text-white">{item.title}</h4>
                <ul className="m-0 flex list-disc flex-col gap-1 py-0 pl-4 text-sm leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
