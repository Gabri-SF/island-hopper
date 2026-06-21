"use client";

import { useState } from "react";
import { missionPhases } from "@/lib/data/specs";
import TimelineStep from "@/components/ui/TimelineStep";

export default function MissionProfile() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 flex flex-col gap-0">
        {missionPhases.map((phase) => (
          <TimelineStep
            key={phase.id}
            step={phase.id}
            total={missionPhases.length}
            label={phase.label}
            type={phase.type}
            altitude={phase.altitude}
            velocity={phase.velocity}
            duration={phase.duration}
            range={phase.range}
            active={activePhase === phase.id}
            onClick={() => setActivePhase(phase.id)}
          />
        ))}
      </div>

      <div className="lg:col-span-5">
        <div className="sticky top-28 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm">
          <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
            Energia por Fase de Missão
          </span>
          <div className="flex flex-col gap-3">
            {[
              { label: "VTOL + Hover", energy: "20,20 kWh", pct: 28, color: "bg-blue-500" },
              { label: "Subida", energy: "21,60 kWh", pct: 30, color: "bg-cyan-500" },
              { label: "Cruzeiro", energy: "32,30 kWh", pct: 45, color: "bg-emerald-500" },
              { label: "Descida + Aterragem", energy: "~0 kWh (regenerativo)", pct: 2, color: "bg-zinc-600" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-400">{item.label}</span>
                  <span className="text-zinc-300 font-mono">{item.energy}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-zinc-400 font-semibold">Total da Missão</span>
              <span className="text-emerald-400 font-black font-mono">71,66 kWh</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-zinc-600">Duração total</span>
              <span className="text-zinc-400 font-mono">≈34 min</span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-zinc-600">Distância total</span>
              <span className="text-zinc-400 font-mono">140 km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
