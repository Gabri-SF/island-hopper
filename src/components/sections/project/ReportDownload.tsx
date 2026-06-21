export default function ReportDownload() {
  return (
    <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <h3 className="text-lg font-bold text-zinc-100">Relatório Técnico Completo</h3>
        <p className="text-zinc-500 text-sm mt-1">96 páginas · PDF · IST 2026 · Grupo 11</p>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-lg">
          Inclui dimensionamento aerodinâmico, propulsão híbrida, análise de estabilidade,
          avaliação de ciclo de vida e estimativas de custos operacionais.
        </p>
      </div>
      <a
        href="/g11_report.pdf"
        download
        className="flex-shrink-0 px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm whitespace-nowrap"
      >
        Download PDF
      </a>
    </div>
  );
}
