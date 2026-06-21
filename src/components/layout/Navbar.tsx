"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/project", label: "Projeto" },
  { href: "/concept", label: "Conceito" },
  { href: "/service", label: "Serviço" },
  { href: "/sustainability", label: "Sustentabilidade" },
  { href: "/contacts", label: "Contactos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold text-zinc-950 text-sm">
            IH
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-lg bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
              ISLAND HOPPER
            </span>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
              Urban Air Mobility
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
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

        <button
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-all"
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
