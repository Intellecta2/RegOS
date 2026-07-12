import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RegOS — AI-Powered Regulatory Compliance OS",
  description:
    "Transform regulatory circulars into actionable compliance workflows with AI agents. Upload SEBI PDFs and get instant obligation extraction, risk assessment, and task generation.",
  keywords: [
    "RegOS",
    "regulatory compliance",
    "SEBI",
    "AI agents",
    "compliance automation",
    "risk assessment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>{children}</body>
    </html>
  );
}
