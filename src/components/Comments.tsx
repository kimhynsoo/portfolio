import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

import SectionTitle from "./SectionTitle";

const UTTERANCES_REPO = "kimhynsoo/portfolio";

const Comments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const utterancesTheme = resolvedTheme === "dark" ? "github-dark" : "github-light";

  useEffect(() => {
    const commentsElement = commentsRef.current;
    if (!commentsElement) return;
    if (commentsElement.querySelector("script, iframe")) return;

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://utteranc.es/client.js";
    scriptElement.async = true;
    scriptElement.crossOrigin = "anonymous";
    scriptElement.setAttribute("repo", UTTERANCES_REPO);
    scriptElement.setAttribute("issue-term", "pathname");
    scriptElement.setAttribute("label", "comment");
    scriptElement.setAttribute("theme", utterancesTheme);

    commentsElement.appendChild(scriptElement);
  }, [utterancesTheme]);

  useEffect(() => {
    const utterancesFrame = commentsRef.current?.querySelector<HTMLIFrameElement>(
      "iframe.utterances-frame",
    );

    utterancesFrame?.contentWindow?.postMessage(
      { type: "set-theme", theme: utterancesTheme },
      "https://utteranc.es",
    );
  }, [utterancesTheme]);

  return (
    <section>
      <SectionTitle>Comments</SectionTitle>
      <div ref={commentsRef} />
    </section>
  );
};

export default Comments;
