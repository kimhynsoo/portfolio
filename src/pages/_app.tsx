import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const DEFAULT_SEO = {
  title: "김현수 | Developer",
  description: "AI 기능을 안정적으로 서비스화하는 백엔드 개발자 김현수입니다.",
  ...(SITE_URL ? { canonical: SITE_URL } : {}),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    title: "김현수 | Developer",
    site_name: "김현수 | Developer",
    images: [
      {
        url: SITE_URL ? `${SITE_URL}/share.png` : "/share.png",
        width: 285,
        height: 167,
        alt: "김현수 | Developer",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
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
      <Analytics />
    </>
  );
};

export default App;
