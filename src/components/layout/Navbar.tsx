"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext"; // Adjust import path
import { dictionaries } from "../../lib//data/dictionaries"; // Adjust import path

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  // Bring in the hook
  const { language, toggleLanguage } = useLanguage();
  
  // Get the correct links based on current language state
  const links = dictionaries[language].nav;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/island-hopper/logo.png" alt="Island Hopper" width={32} height={32} className="rounded" />
          <div>
            <span className="font-extrabold tracking-wider text-lg bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              ISLAND HOPPER
            </span>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
              Urban Air Mobility
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          
          {/* Desktop Language Toggle */}
          <div className="border-l border-zinc-800 pl-4">
            <button
              onClick={toggleLanguage}
              className="w-12 py-1.5 rounded-md text-xs font-bold tracking-wider transition-colors border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
              aria-label="Toggle language"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </div>

        {/* Mobile controls: Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="w-10 py-1 rounded-md text-xs font-bold tracking-wider transition-colors border border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
            aria-label="Toggle language"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>

          <button
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-all"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}