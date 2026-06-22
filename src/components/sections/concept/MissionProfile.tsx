"use client";

import { useState } from "react";
import { missionPhases } from "@/lib/data/specs";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed
import TimelineStep from "@/components/ui/TimelineStep";

export default function MissionProfile() {
  const { language } = useLanguage();
  
  // 1. Get the base specs dictionary safely
  const specsDict = dictionaries[language]?.specs as any;
  
  // 2. Extract profileSection with a structural fallback to prevent app crashes
  const dict = specsDict?.profileSection || {
    energyTitle: "Energy",
    energyBreakdown: {},
    summary: {},
    phases: {}
  };

  const [activePhase, setActivePhase] = useState(1);

  const energyItems = [
    { key: "vtol", color: "bg-blue-500", pct: 28 },
    { key: "climb", color: "bg-cyan-500", pct: 30 },
    { key: "cruise", color: "bg-emerald-500", pct: 45 },
    { key: "descent", color: "bg-zinc-600", pct: 2 },
  ];

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Left Column: Interactive Flight Timeline Phases */}
      <div className="lg:col-span-7 flex flex-col gap-0">
        {missionPhases.map((phase) => {
          const keyString = `p${phase.id}`;
          // Safe lookup with an explicit fallback string block if dictionary key isn't populated yet
          const phaseText = dict.phases?.[keyString as keyof typeof dict.phases] || {
            label: `Phase ${phase.id}`,
            type: "Flight Segment"
          };

          return (
            <TimelineStep
              key={phase.id}
              step={phase.id}
              total={missionPhases.length}
              label={phaseText.label}
              type={phaseText.type}
              altitude={phase.altitude}
              velocity={phase.velocity}
              duration={phase.duration}
              range={phase.range}
              active={activePhase === phase.id}
              onClick={() => setActivePhase(phase.id)}
            />
          );
        })}
      </div>

      {/* Right Column: Energy Calculations Summary Pane */}
      <div className="lg:col-span-5">
        <div className="sticky top-28 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm">
          <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
            {dict.energyTitle}
          </span>
          <div className="flex flex-col gap-3">
            {energyItems.map((item) => {
              const energyText = dict.energyBreakdown?.[item.key as keyof typeof dict.energyBreakdown] || {
                label: item.key,
                value: "--"
              };
              return (
                <div key={item.key}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-400">{energyText.label}</span>
                    <span className="text-zinc-300 font-mono">{energyText.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Meta Aggregations Summary */}
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-zinc-400 font-semibold">{dict.summary?.totalLabel || "Total"}</span>
              <span className="text-emerald-400 font-black font-mono">{dict.summary?.totalValue || "--"}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-zinc-600">{dict.summary?.durationLabel || "Duration"}</span>
              <span className="text-zinc-400 font-mono">{dict.summary?.durationValue || "--"}</span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-zinc-600">{dict.summary?.distanceLabel || "Distance"}</span>
              <span className="text-zinc-400 font-mono">{dict.summary?.distanceValue || "--"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}