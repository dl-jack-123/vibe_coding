import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "塔羅占卜",
  description: "探索命運的智慧，解答人生的疑惑",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1 pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
