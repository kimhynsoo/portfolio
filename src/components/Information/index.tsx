import Image from "next/image";

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const getContactDisplayValue = ({ href, isEmail }: { href: string; isEmail?: boolean }) => {
  if (isEmail) return href;
  return href.replace(/^https?:\/\//, "").replace(/^tel:/, "");
};

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14 lg:gap-20">
        {information.imgSrc && (
          <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#eaf7ff] shadow-sm dark:border-GRAY_LIGHT w-44 h-44 md:w-60 md:h-60 lg:w-64 lg:h-64">
            <Image
              src={information.imgSrc}
              width="320"
              height="320"
              alt={information.name}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div className="flex flex-col gap-5">
          <h1 className="leading-[1.12] text-4xl md:text-5xl lg:text-6xl">
            <span className="block">안녕하세요,</span>
            <span className="block">
              백엔드 개발자 <span className="text-PRIMARY font-semibold">{information.name}</span>입니다.
            </span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY">
            사용자 피드백에서 문제를 찾고,{" "}
            <span className="text-PRIMARY font-semibold">AI 기능을 안정적인 서비스 구조로</span>{" "}
            연결합니다.
          </p>
          <div className="flex gap-5 flex-wrap">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-base font-semibold text-GRAY_HEAVY hover:text-PRIMARY_HEAVY dark:text-GRAY dark:hover:text-PRIMARY"
                {...contact}
              >
                <span className="text-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
                  {contact.name}
                </span>
                <span className="ml-1 text-BLACK dark:text-white">
                  {getContactDisplayValue(contact)}
                </span>
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
