import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Import the LanguageProvider
import { LanguageProvider } from "@/components/context/LanguageContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Island Hopper — Urban Air Mobility eVTOL",
  description:
    "Projeto académico de eVTOL inter-ilhas com arquitetura Tilt-Duct. IST 2026, Grupo 11.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-80" />
        <div className="fixed top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-0" />
        {/* Wrap the layout components with the Provider */}
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}