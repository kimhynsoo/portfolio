import SectionTitle from "../SectionTitle";
import ActivityItem from "./ActivityItem";

import { DataProps } from "@/types";

const Activity = ({ activity }: Pick<DataProps, "activity">) => {
  if (!activity.length) return null;

  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <p className="mb-12 text-xl font-medium leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT md:text-2xl">
        기술 숙련도보다, 실제 문제 해결에 사용한 기술을 중심으로 정리했습니다.
      </p>
      <div className="grid gap-8 lg:grid-cols-3">
        {activity.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
