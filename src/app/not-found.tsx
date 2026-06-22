"use client";

import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import { dictionaries } from "@/lib/data/dictionaries";

export default function NotFound() {
  const { language } = useLanguage();
  const dict = dictionaries[language].notFound;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(63,63,70,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.2) 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      {/* Error code */}
      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-mono mb-3">
          {dict.alertLabel}
        </p>

        <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-zinc-800 select-none leading-none">
          404
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-zinc-100">
          {dict.title}
        </h2>

        <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          {dict.desc}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            {dict.btnHome}
          </Link>
          <Link
            href="/service"
            className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all"
          >
            {dict.btnRoutes}
          </Link>
        </div>

        <p className="mt-12 text-[10px] font-mono text-zinc-700">
          {dict.log}
        </p>
      </div>
    </div>
  );
}
