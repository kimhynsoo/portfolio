import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { InformationProps } from "@/types";

const Introduce = ({ markdown }: Pick<InformationProps, "markdown">) => {
  return (
    <ReactMarkdown
      className="markdown text-lg leading-relaxed text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT"
      remarkPlugins={[remarkGfm]}
    >
      {markdown ?? ""}
    </ReactMarkdown>
  );
};

export default Introduce;
