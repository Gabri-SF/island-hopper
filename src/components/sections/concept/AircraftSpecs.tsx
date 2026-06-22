"use client";

import { useState } from "react";
import { specGroups, massComponents } from "@/lib/data/specs";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function AircraftSpecs() {
  const { language } = useLanguage();
  const dict = dictionaries[language].specs;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    ...specGroups.map((g, i) => ({
      id: `spec-${g.id}`,
      label: `${g.icon} ${dict.categories[g.id as keyof typeof dict.categories]}`,
      type: "specs" as const,
      index: i
    })),
    { id: "mass", label: dict.massTabLabel, type: "mass" as const, index: 0 },
  ];

  const activeGroup = specGroups[activeTab];

  return (
    <div className="flex flex-col gap-6">
      {/* Navigation Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === i
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                : "bg-zinc-900/40 border border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Specification Sheets / Mass Balance Matrix Viewports */}
      {activeTab < specGroups.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeGroup.specs.map((spec) => {
            const specItem = dict.items[spec.id as keyof typeof dict.items];
            return (
              <div
                key={spec.id}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all"
              >
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2">
                  {specItem.label}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-zinc-100">{specItem.value}</span>
                  {specItem.unit && <span className="text-xs text-zinc-500">{specItem.unit}</span>}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                  {dict.tableHeaders.component}
                </th>
                <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                  {dict.tableHeaders.mass}
                </th>
                <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                  {dict.tableHeaders.details}
                </th>
              </tr>
            </thead>
            <tbody>
              {massComponents.map((mc) => {
                const componentData = dict.massBreakdown[mc.id as keyof typeof dict.massBreakdown];
                return (
                  <tr
                    key={mc.id}
                    className="border-b border-zinc-800/50 last:border-0 hover:bg-zinc-900/50 transition-all"
                  >
                    <td className="px-6 py-4 font-semibold text-zinc-200">{componentData.name}</td>
                    <td className="px-6 py-4 text-emerald-400 font-mono font-bold">{componentData.mass}</td>
                    <td className="px-6 py-4 text-zinc-500 text-xs">{componentData.details}</td>
                  </tr>
                );
              })}
              <tr className="bg-zinc-900/60">
                <td className="px-6 py-4 font-bold text-zinc-100">{dict.mtowRow.label}</td>
                <td className="px-6 py-4 font-black text-emerald-400 font-mono text-base">{dict.mtowRow.value}</td>
                <td className="px-6 py-4 text-zinc-500 text-xs">{dict.mtowRow.details}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}