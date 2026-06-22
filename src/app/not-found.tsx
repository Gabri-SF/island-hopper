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
        {/* Airplane illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 100"
          className="w-56 h-auto mx-auto mb-6 opacity-75"
          aria-hidden="true"
        >
          {/* Fuselage */}
          <ellipse cx="148" cy="48" rx="118" ry="13" fill="#10b981" />
          {/* Nose cone */}
          <path d="M262,40 Q292,44 298,48 Q292,52 262,56 Z" fill="#34d399" />
          {/* Tail cone */}
          <path d="M34,40 Q10,44 4,48 Q10,52 34,56 Z" fill="#059669" />
          {/* Vertical tail fin */}
          <path d="M44,40 L36,16 L72,40 Z" fill="#059669" />
          {/* Main swept wings */}
          <path d="M108,48 L188,48 L228,84 L68,84 Z" fill="#059669" />
          {/* Horizontal stabilizer */}
          <path d="M18,48 L52,48 L40,62 L6,59 Z" fill="#10b981" />
          {/* Cockpit window */}
          <path d="M208,38 Q238,34 254,43 Q238,48 208,46 Z" fill="rgba(167,243,208,0.45)" />
        </svg>
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
