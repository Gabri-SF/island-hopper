"use client";

import { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function EmissionsCalculator() {
  const { language } = useLanguage();
  const [active, setActive] = useState<"green" | "grey">("green");

  const dict = dictionaries[language]?.emissionsCalculator || {
    comparisonTitle: "Comparação com Modos Convencionais (por voo, 7 pax)",
    perPassengerLabel: "Por passageiro",
    perFlightUnit: "kg CO₂-eq / voo",
    perPaxSubtitle: "kg/pax · Zero emissões diretas",
    airplaneLabel: "✈ Avião Convencional",
    ferryLabel: "⛴ Ferry Rápido",
    scenarios: {
      green: {
        label: "Hidrogénio Verde",
        total: 14.974,
        note: "Hidrogénio produzido por electrólise com energia renovável (solar/eólica Baleares).",
        badge: "Cenário A — Recomendado",
        breakdown: [
          { label: "Produção H₂ (electrólise renovável)", value: 6.32, unit: "kg CO₂-eq" },
          { label: "Produção de eletricidade (bateria)", value: 5.89, unit: "kg CO₂-eq" },
          { label: "Fabrico e manutenção (amortizado)", value: 2.76, unit: "kg CO₂-eq" },
        ]
      },
      grey: {
        label: "Hidrogénio Cinzento",
        total: 30.505,
        note: "Hidrogénio obtido por reforma de gás natural — tecnologia atual predominante.",
        badge: "Cenário B — Transição",
        breakdown: [
          { label: "Produção H₂ (reforma de gás natural)", value: 19.65, unit: "kg CO₂-eq" },
          { label: "Produção de eletricidade (bateria)", value: 7.84, unit: "kg CO₂-eq" },
          { label: "Fabrico e manutenção (amortizado)", value: 3.02, unit: "kg CO₂-eq" },
        ]
      }
    },
    reference: {
      airplane: { value: "18–20", perFlight: "~126–140" },
      ferry: { value: "2–4", perFlight: "~14–28" }
    }
  };

  const scenario = dict.scenarios[active];
  const colorClass = active === "green" ? "emerald" : "amber";

  const colorMap = {
    emerald: { bar: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
    amber: { bar: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/5", badge: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
  };
  const c = colorMap[colorClass];

  return (
    <div className="flex flex-col gap-8">
      {/* ── SCENARIO TABS ── */}
      <div className="flex gap-3">
        {(["green", "grey"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex-1 px-5 py-4 rounded-xl border text-sm font-bold transition-all text-left ${
              active === key
                ? key === "green"
                  ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-400"
                  : "border-amber-500/40 bg-amber-500/5 text-amber-400"
                : "border-zinc-800 bg-zinc-900/30 text-zinc-500 hover:border-zinc-700"
            }`}
          >
            <span className="block text-[10px] uppercase tracking-widest font-bold mb-1 opacity-70">
              {dict.scenarios[key].badge}
            </span>
            {dict.scenarios[key].label}
          </button>
        ))}
      </div>

      {/* ── ACTIVE SCENARIO PANEL ── */}
      <div className={`p-6 rounded-2xl border ${c.border} ${c.bg}`}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider mb-2 ${c.badge}`}>
              {scenario.badge}
            </span>
            <h3 className="text-2xl font-black text-zinc-100">
              {scenario.total} <span className="text-base font-bold text-zinc-400">{dict.perFlightUnit}</span>
            </h3>
            <p className="text-xs text-zinc-500 mt-1">{scenario.note}</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-zinc-600 block">{dict.perPassengerLabel}</span>
            <span className={`text-xl font-black ${c.text}`}>
              {(scenario.total / 7).toFixed(2)} kg
            </span>
          </div>
        </div>

        {/* ── COMPONENT LCA BREAKDOWN PROGRESS BARS ── */}
        <div className="flex flex-col gap-4">
          {scenario.breakdown.map((item: { label: string; value: number; unit: string }) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-zinc-400">{item.label}</span>
                <span className="text-zinc-300 font-mono font-bold">{item.value} {item.unit}</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${c.bar}`}
                  style={{ width: `${(item.value / scenario.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BENCHMARK MARKET COMPARISON LIST ── */}
      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          {dict.comparisonTitle}
        </h3>
        <div className="flex flex-col gap-3">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-300">{dict.airplaneLabel}</span>
            <div className="text-right">
              <span className="text-sm font-bold text-red-400 font-mono">
                {dict.reference.airplane.perFlight} kg CO₂
              </span>
              <span className="block text-[10px] text-zinc-500">{dict.reference.airplane.value} kg/pax</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-300">{dict.ferryLabel}</span>
            <div className="text-right">
              <span className="text-sm font-bold text-zinc-400 font-mono">
                {dict.reference.ferry.perFlight} kg CO₂
              </span>
              <span className="block text-[10px] text-zinc-500">{dict.reference.ferry.value} kg/pax</span>
            </div>
          </div>
          <div className={`p-4 rounded-xl border ${c.border} ${c.bg} flex items-center justify-between`}>
            <span className={`text-sm font-bold ${c.text}`}>✦ Island Hopper ({scenario.label})</span>
            <div className="text-right">
              <span className={`text-sm font-bold font-mono ${c.text}`}>
                {scenario.total} kg CO₂-eq
              </span>
              <span className="block text-[10px] text-zinc-500">
                {(scenario.total / 7).toFixed(2)} {dict.perPaxSubtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}