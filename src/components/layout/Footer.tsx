"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers, supervisors } from "@/lib/data/team";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

const navLinks = [
  { href: "/", key: "home" },
  { href: "/project", key: "project" },
  { href: "/concept", key: "concept" },
  { href: "/service", key: "service" },
  { href: "/sustainability", key: "sustainability" },
  { href: "/contacts", key: "contacts" },
] as const;

export default function Footer() {
  const { language } = useLanguage();
  const dict = dictionaries[language].footer;
  const navDict = dictionaries[language].navFooter;

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-sm text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/island-hopper/logo.png" alt="Island Hopper" width={32} height={32} className="rounded" />
              <span className="font-extrabold tracking-wider text-sm text-zinc-300">ISLAND HOPPER</span>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              {dict.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
              {dict.titles.navigation}
            </span>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {navDict[key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Institutional Info */}
          <div>
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
              {dict.titles.institution}
            </span>
            <p className="text-zinc-400 font-semibold">{dict.institution.name}</p>
            <p className="text-zinc-500 mt-1">{dict.institution.university}</p>
            <p className="text-zinc-600 mt-1">{dict.institution.dateGroup}</p>
            <div className="mt-3 flex flex-col gap-1">
              {supervisors.map((s) => (
                <span key={s.name} className="text-zinc-600">
                  {dict.supervisors[s.title as keyof typeof dict.supervisors] || s.title}: {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-zinc-900 pt-8">
          <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
            {dict.titles.team}
          </span>
          <div className="flex flex-wrap gap-2 font-mono">
            {teamMembers.map((m) => (
              <span
                key={m.id}
                className="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all hover:text-zinc-200 text-zinc-400"
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
          <span>{dict.copyright}</span>
          <span className="font-mono">Next.js 16 + Tailwind v4</span>
        </div>
      </div>
    </footer>
  );
}