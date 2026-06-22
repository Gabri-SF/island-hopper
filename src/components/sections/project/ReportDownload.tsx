"use client";

import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function ReportDownload() {
  const { language } = useLanguage();

  // Safe dictionary data extraction with clear defaults
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.reportDownload || {
    title: "Relatório Técnico Completo",
    meta: "96 páginas · PDF · IST 2026 · Grupo 11",
    description: "Inclui dimensionamento aerodinâmico, propulsão híbrida, análise de estabilidade, avaliação de ciclo de vida e estimativas de custos operacionais.",
    buttonText: "Download PDF"
  };

  return (
    <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-bold text-zinc-100">{dict.title}</h3>
        <p className="text-zinc-500 text-sm mt-1">{dict.meta}</p>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-lg">
          {dict.description}
        </p>
      </div>
      <a
        href="/g11_report.pdf"
        download
        className="flex-shrink-0 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm whitespace-nowrap"
      >
        {dict.buttonText}
      </a>
    </div>
  );
}