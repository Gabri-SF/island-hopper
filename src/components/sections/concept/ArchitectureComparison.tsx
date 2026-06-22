"use client";

import { useState } from "react";
import { architectures } from "@/lib/data/ahp";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function ArchitectureComparison() {
  const { language } = useLanguage();
  // Fetch the AHP dictionary data block
  const dict = dictionaries[language].ahp; 

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {architectures.map((arch) => {
        // Look up the localized textual properties using the architecture's stable ID
        const archText = dict.architectures[arch.id as keyof typeof dict.architectures];

        return (
          <div key={arch.id} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30">
            {/* Header Content */}
            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-zinc-500 block mb-1">
                {arch.shortName}
              </span>
              <h4 className="text-sm font-bold text-zinc-200">
                {archText.name} {/* Driven by localized dictionary */}
              </h4>
            </div>

            {/* Pros List Section */}
            <div className="mb-4">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-bold">
                {dict.prosLabel}
              </span>
              <ul className="flex flex-col gap-1.5">
                {/* FIX: Read from archText instead of arch */}
                {archText.pros.slice(0, 3).map((pro) => (
                  <li key={pro} className="flex gap-2 text-xs text-zinc-400">
                    <span className="text-emerald-500 flex-shrink-0">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons List Section */}
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2 font-bold">
                {dict.consLabel}
              </span>
              <ul className="flex flex-col gap-1.5">
                {/* FIX: Also apply to cons if this component renders them */}
                {archText.cons.slice(0, 3).map((con) => (
                  <li key={con} className="flex gap-2 text-xs text-zinc-400">
                    <span className="text-rose-500 flex-shrink-0">✕</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}