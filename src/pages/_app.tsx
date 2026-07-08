import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "김현수 | Developer",
  description: "AI 기능을 안정적으로 서비스화하는 백엔드 개발자 김현수입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "김현수 | Developer",
    site_name: "김현수 | Developer",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "김현수 | Developer",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      href: "/images/information/profile.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/images/information/profile.png",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "김현수 | Developer",
    },
    {
      name: "msapplication-tooltip",
      content: "김현수 | Developer",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
