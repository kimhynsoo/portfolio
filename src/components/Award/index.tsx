import SectionTitle from "../SectionTitle";
import AwardItem from "./AwardItem";

import { DataProps } from "@/types";

const Award = ({ award }: Pick<DataProps, "award">) => {
  return (
    <div>
      <SectionTitle>Awards</SectionTitle>
      <div className="flex flex-col gap-6">
        {[...award].reverse().map((award) => (
          <AwardItem key={award.id} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Award;
