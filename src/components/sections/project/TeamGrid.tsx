"use client";

import { teamMembers, supervisors } from "@/lib/data/team";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function TeamGrid() {
  const { language } = useLanguage();

  // Safe dictionary data extraction with hard-coded safety fallbacks
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.teamGrid || {
    membersTitle: "Membros — Grupo 11",
    supervisorsTitle: "Orientadores",
    numberPrefix: "nº"
  };

  return (
    <div className="flex flex-col gap-12">
      {/* ── TEAM MEMBERS GRID ── */}
      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          {dict.membersTitle}
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all"
            >
              <span className="block font-bold text-zinc-200 text-sm">{member.name}</span>
              <span className="block text-[11px] text-zinc-500 font-mono mt-1">
                {dict.numberPrefix} {member.number}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUPERVISORS GRID ── */}
      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          {dict.supervisorsTitle}
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {supervisors.map((sup) => (
            <div
              key={sup.name}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all"
            >
              <span className="block font-bold text-zinc-200 text-sm">{sup.name}</span>
              <span className="block text-[11px] text-emerald-500/80 font-semibold mt-1 uppercase tracking-wide">
                {/* Dynamically fallback to raw supervisor title if locale key is not declared */}
                {dict.titles?.[sup.title] || sup.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}