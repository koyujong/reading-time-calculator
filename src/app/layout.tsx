import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://reading.4kdrivewalk.com"),
  title: "Speech & Presentation Reading Time Calculator",
  description: "블로그, 기사 등의 텍스트를 읽는 데 걸리는 시간을 한국어 평균 읽기 속도 기준으로 직관적으로 산출해 주는 도구입니다.",
  keywords: "읽기시간계산, reading time calculator, 글자수세기, 평균읽기속도, 블로그체류시간",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Speech & Presentation Reading Time Calculator",
    description: "블로그 체류 시간을 늘리기 위한 직관적인 읽기 시간 계산 툴",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "47z3uMVzsCyw66vTGaSLLtCKy3vebHH5QOU4H3yCDR8", // Inheriting from project 1
    other: {
      "naver-site-verification": "886e6d1e832734015781cbbdd53f9613bf16233d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3844FCWG6G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3844FCWG6G');
          `}
        </Script>
        {/* Google AdSense 자동 광고 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3488637908196788"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
