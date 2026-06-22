"use client";

import { transportModes } from "@/lib/data/routes";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function MarketComparison() {
  const { language } = useLanguage();

  // Safe dictionary data extraction with defaults
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.marketComparison || {
    headers: {
      mode: "Modo",
      time: "Tempo de Viagem",
      cost: "Custo / Pax",
      emissions: "Emissões CO₂"
    },
    translations: {} // Holds optional map overrides for data objects if needed
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {dict.headers.mode}
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {dict.headers.time}
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {dict.headers.cost}
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              {dict.headers.emissions}
            </th>
          </tr>
        </thead>
        <tbody>
          {transportModes.map((mode, i) => {
            const isVTOL = mode.mode.toLowerCase().includes("island hopper");
            
            // Look up localized text using item names as keys, or fallback to original data fields
            const localizedMode = dict.translations?.[mode.mode] || mode.mode;
            const localizedNotes = mode.notes ? (dict.translations?.[mode.notes] || mode.notes) : null;
            const localizedTime = dict.translations?.[mode.travelTime] || mode.travelTime;
            const localizedEmissions = dict.translations?.[mode.emissionsPerPax] || mode.emissionsPerPax;

            return (
              <tr
                key={i}
                className={`border-b border-zinc-800/50 last:border-0 transition-all ${
                  isVTOL
                    ? "bg-emerald-500/5 hover:bg-emerald-500/8"
                    : "hover:bg-zinc-900/50"
                }`}
              >
                <td className="px-6 py-4">
                  <span
                    className={`font-bold text-sm ${
                      isVTOL ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {localizedMode}
                  </span>
                  {localizedNotes && (
                    <span className="block text-[11px] text-zinc-500 mt-0.5">{localizedNotes}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-zinc-300 font-mono text-xs">{localizedTime}</td>
                <td className="px-6 py-4">
                  <span
                    className={`font-bold font-mono text-xs ${
                      isVTOL ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {mode.costPerPax}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-300 font-mono text-xs">
                  {localizedEmissions}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}