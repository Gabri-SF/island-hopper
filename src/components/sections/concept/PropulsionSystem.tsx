"use client";

import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

interface LocalizedCard {
  title: string;
  sub: string;
  metrics: { label: string; value: string }[];
}

export default function PropulsionSystem() {
  const { language } = useLanguage();

  // Safe dictionary data extraction with hard-coded safety fallbacks
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.propulsionSystem || {
    comparisonTitle: "Comparação: Híbrido vs. Totalmente Elétrico",
    selectedLabel: "Sistema Híbrido (selecionado)",
    hybridValue: "197,73 kg",
    hybridSub: "Li-S (58,37) + PEMFC (100) + H₂ (39,36)",
    electricLabel: "Totalmente Elétrico",
    electricValue: "329,89 kg",
    electricSub: "Apenas baterias — 67% mais pesado",
    savingsText: "Poupança de 132,16 kg com a arquitetura híbrida — equivale a mais de um passageiro adicional de payload.",
    cards: [
      {
        title: "Bateria Li-S",
        sub: "VTOL + Transientes",
        metrics: [
          { label: "Massa", value: "58,37 kg" },
          { label: "Energia", value: "26,26 kWh" },
          { label: "Densidade", value: "0,45 kWh/kg" },
          { label: "Missões", value: "Descolagem + Hover" }
        ]
      },
      {
        title: "Célula de Combustível (PEMFC)",
        sub: "Cruzeiro + Subida",
        metrics: [
          { label: "Potência", value: "200 kW" },
          { label: "Massa PEMFC", value: "100 kg" },
          { label: "Armazenamento H₂", value: "39,36 kg" },
          { label: "Missões", value: "Subida + Cruzeiro" }
        ]
      },
      {
        title: "6× Motores EMRAX 348",
        sub: "Propulsão Distribuída (DEP)",
        metrics: [
          { label: "Potência/Motor", value: "260 kW" },
          { label: "Potência Total", value: "1.560 kW" },
          { label: "Massa/Motor", value: "41,5 kg" },
          { label: "Tensão DC", value: "800 V" }
        ]
      }
    ]
  };

  // Color dynamic definitions for mapping index items cleanly
  const styles = [
    { border: "hover:border-blue-500/30", bg: "bg-blue-500/10", borderIcon: "border-blue-500/20", iconColor: "text-blue-400" },
    { border: "hover:border-emerald-500/30", bg: "bg-emerald-500/10", borderIcon: "border-emerald-500/20", iconColor: "text-emerald-400" },
    { border: "hover:border-cyan-500/30", bg: "bg-cyan-500/10", borderIcon: "border-cyan-500/20", iconColor: "text-cyan-400" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* ── PROPULSION TECH COMPONENT CARDS ── */}
      <div className="grid md:grid-cols-3 gap-6">
        {(dict.cards as LocalizedCard[]).map((card, i) => (
          <div key={card.title} className={`p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-all ${styles[i].border}`}>
            <div className={`w-10 h-10 rounded border flex items-center justify-center mb-4 ${styles[i].bg} ${styles[i].borderIcon}`}>
              {i === 0 && (
                <svg className={`w-5 h-5 ${styles[i].iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              {i === 1 && (
                <svg className={`w-5 h-5 ${styles[i].iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              )}
              {i === 2 && (
                <svg className={`w-5 h-5 ${styles[i].iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <h3 className="font-bold text-zinc-100 mb-1">{card.title}</h3>
            <p className={`text-xs font-semibold mb-3 ${styles[i].iconColor}`}>{card.sub}</p>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              {card.metrics.map((m) => (
                <div key={m.label} className="flex justify-between">
                  <span>{m.label}</span>
                  <span className="font-mono text-zinc-200">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── ARCHITECTURE COMPARISON PANE ── */}
      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          {dict.comparisonTitle}
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-bold text-zinc-200 text-sm">{dict.selectedLabel}</span>
            </div>
            <div className="text-3xl font-black text-emerald-400 mb-1">{dict.hybridValue}</div>
            <p className="text-zinc-500 text-xs">{dict.hybridSub}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-zinc-500" />
              <span className="font-bold text-zinc-400 text-sm">{dict.electricLabel}</span>
            </div>
            <div className="text-3xl font-black text-zinc-500 mb-1">{dict.electricValue}</div>
            <p className="text-zinc-600 text-xs">{dict.electricSub}</p>
          </div>
        </div>
        <div className="mt-6 bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4 text-xs text-emerald-400/90" dangerouslySetInnerHTML={{ __html: dict.savingsText }} />
      </div>
    </div>
  );
}