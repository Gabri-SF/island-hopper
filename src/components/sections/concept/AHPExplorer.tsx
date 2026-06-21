"use client";

import { useState } from "react";
import { ahpCriteria, architectures } from "@/lib/data/ahp";

const archColors: Record<string, string> = {
  "tilt-duct": "bg-emerald-500",
  "tilt-rotor": "bg-blue-500",
  "fixed-wing": "bg-zinc-500",
  "tilt-wing": "bg-amber-500",
};

const archTextColors: Record<string, string> = {
  "tilt-duct": "text-emerald-400",
  "tilt-rotor": "text-blue-400",
  "fixed-wing": "text-zinc-400",
  "tilt-wing": "text-amber-400",
};

export default function AHPExplorer() {
  const [hoveredCriterion, setHoveredCriterion] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {architectures.map((arch) => (
          <div
            key={arch.id}
            className={`p-5 rounded-xl border transition-all ${
              arch.winner
                ? "border-emerald-500/40 bg-emerald-500/5"
                : "border-zinc-800 bg-zinc-900/30"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-zinc-500">{arch.shortName}</span>
              {arch.winner && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500 text-zinc-950 uppercase">
                  1º
                </span>
              )}
            </div>
            <p className="text-sm font-bold text-zinc-200 mb-3">{arch.name}</p>
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full rounded-full ${archColors[arch.id] ?? "bg-zinc-500"}`}
                style={{ width: `${(arch.ahpScore / 0.3) * 100}%` }}
              />
            </div>
            <span className={`text-xl font-black ${archTextColors[arch.id] ?? "text-zinc-400"}`}>
              {arch.ahpScore.toFixed(3)}
            </span>
            <span className="text-xs text-zinc-600 ml-1">AHP score</span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          Critérios de Avaliação (9 critérios, pesos AHP)
        </h3>
        <div className="flex flex-col gap-2">
          {ahpCriteria.map((c) => (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCriterion(c.id)}
              onMouseLeave={() => setHoveredCriterion(null)}
              className={`p-4 rounded-xl border transition-all cursor-default ${
                hoveredCriterion === c.id
                  ? "border-emerald-500/30 bg-zinc-900/60"
                  : "border-zinc-800 bg-zinc-900/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-zinc-300">{c.label}</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  {c.weightPct}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${c.weightPct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
