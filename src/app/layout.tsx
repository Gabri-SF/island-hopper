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
  title: "Island Hopper — Mobilidade Aérea Urbana nas Baleares",
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
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
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