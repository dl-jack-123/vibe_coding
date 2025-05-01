import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "塔羅牌占卜 | 探索你的命運",
  description: "專業的線上塔羅牌占卜服務，幫助你探索生活中的問題與機遇",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
