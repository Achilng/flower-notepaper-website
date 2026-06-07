import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "花笺 — 轻量优雅的本地便签工具",
  description: "花笺是一款基于 Tauri 2 + React 构建的现代化本地便签工具，支持 Markdown 编辑、桌面磁贴、快捷便签等功能。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
