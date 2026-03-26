import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "九星八字排盘 - 专业命理分析工具",
  description: "传承千年智慧，解读命理玄机。提供专业的八字排盘、大运分析、五行分析等功能。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif">
        {children}
      </body>
    </html>
  );
}
