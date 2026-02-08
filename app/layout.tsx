import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Zaid | AI Engineer",
  description:
    "AI Engineer specializing in Deep Learning, Generative AI and LLM-powered applications. Building scalable ML systems and AI-powered products.",
  keywords: [
    "AI Engineer",
    "Deep Learning",
    "Machine Learning",
    "MLOps",
    "Generative AI",
    "LLM",
    "Portfolio",
    "Muhammad Zaid",
  ],
  openGraph: {
    title: "Muhammad Zaid | AI Engineer",
    description:
      "AI Engineer specializing in Deep Learning, Generative AI and LLM-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
