"use client";

import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

interface NoiseDataItem {
  label: string;
  spl: number;
  note: string;
  isVTOL?: boolean;
  isCruise?: boolean;
}

export default function NoiseProfile() {
  const { language } = useLanguage();

  // Safe dictionary extraction with fallback structures
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.noiseProfile || {
    advantageTitle: "Vantagem dos Ducted Fans",
    noteText: "Nota: Valores de SPL aproximados baseados em literatura técnica e análise de referências equivalentes (Cap. 10 do Relatório Técnico). Medições em condições padronizadas ISO 3745.",
    cards: {
      reduction: {
        value: "−8 a −10 dB",
        desc: "Redução de ruído proporcionada pelos ducted fans em relação a rotores abertos equivalentes. As condutas aerodinâmicas atuam como barreiras acústicas naturais."
      },
      loudness: {
        value: "3× menos",
        desc: "Em termos de percepção humana de loudness (escala A-weighted), o Island Hopper é percepcionado como significativamente mais silencioso que um helicóptero urbano."
      }
    },
    noiseData: [
      { label: "Avião Comercial (descolagem)", spl: 140, note: "Perto da pista" },
      { label: "Helicóptero (100 m)", spl: 100, note: "Operação urbana típica" },
      { label: "Island Hopper — VTOL (100 m)", spl: 85, note: "Pico durante descolagem vertical", isVTOL: true },
      { label: "Tráfego automóvel intenso", spl: 80, note: "Referência urbana" },
      { label: "Island Hopper — Cruzeiro (300 m)", spl: 62, note: "Em altitude de cruzeiro", isVTOL: true, isCruise: true },
      { label: "Conversa normal", spl: 60, note: "Referência quotidiana" },
      { label: "Residencial tranquilo", spl: 40, note: "Referência noturna" },
    ]
  };

  const maxSPL = 140;

  return (
    <div className="flex flex-col gap-8">
      {/* ── SPL DECIBEL PROGRESS LIST ── */}
      <div className="flex flex-col gap-3">
        {(dict.noiseData as NoiseDataItem[]).map((item) => {
          const pct = (item.spl / maxSPL) * 100;
          const barColor = item.isVTOL
            ? item.isCruise
              ? "bg-emerald-500"
              : "bg-cyan-500"
            : "bg-zinc-600";

          return (
            <div
              key={item.label}
              className={`p-4 rounded-xl border transition-all ${
                item.isVTOL ? "border-emerald-500/20 bg-emerald-500/5" : "border-zinc-800 bg-zinc-900/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-semibold ${item.isVTOL ? "text-emerald-300" : "text-zinc-300"}`}>
                  {item.label}
                </span>
                <div className="text-right">
                  <span className={`text-base font-black font-mono ${item.isVTOL ? "text-emerald-400" : "text-zinc-400"}`}>
                    {item.spl}
                  </span>
                  <span className="text-xs text-zinc-600 ml-1">dB(A)</span>
                </div>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden mb-1">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-[11px] text-zinc-600">{item.note}</span>
            </div>
          );
        })}
      </div>

      {/* ── ADVANTAGE INFOBAR HIGHLIGHTS ── */}
      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          {dict.advantageTitle}
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="text-2xl font-black text-emerald-400 mb-1">{dict.cards.reduction.value}</div>
            <p className="text-xs text-zinc-400 leading-relaxed">{dict.cards.reduction.desc}</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-2xl font-black text-zinc-300 mb-1">{dict.cards.loudness.value}</div>
            <p className="text-xs text-zinc-400 leading-relaxed">{dict.cards.loudness.desc}</p>
          </div>
        </div>
        <div className="mt-4 bg-zinc-950/50 rounded-lg p-4 text-xs text-zinc-500 border border-zinc-800/50">
          {dict.noteText}
        </div>
      </div>
    </div>
  );
}