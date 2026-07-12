import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
