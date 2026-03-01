import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agora - Agent Marketplace",
  description: "Find the perfect AI agent for any task. Search-first marketplace for specialized AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}