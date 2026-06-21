const noiseData = [
  { label: "Avião Comercial (descolagem)", spl: 140, note: "Perto da pista" },
  { label: "Helicóptero (100 m)", spl: 100, note: "Operação urbana típica" },
  { label: "Island Hopper — VTOL (100 m)", spl: 85, note: "Pico durante descolagem vertical" },
  { label: "Tráfego automóvel intenso", spl: 80, note: "Referência urbana" },
  { label: "Island Hopper — Cruzeiro (300 m)", spl: 62, note: "Em altitude de cruzeiro" },
  { label: "Conversa normal", spl: 60, note: "Referência quotidiana" },
  { label: "Residencial tranquilo", spl: 40, note: "Referência noturna" },
];

const maxSPL = 140;

export default function NoiseProfile() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        {noiseData.map((item) => {
          const isVTOL = item.label.includes("Island Hopper");
          const pct = (item.spl / maxSPL) * 100;
          const barColor = isVTOL
            ? item.label.includes("Cruzeiro")
              ? "bg-emerald-500"
              : "bg-cyan-500"
            : "bg-zinc-600";

          return (
            <div key={item.label} className={`p-4 rounded-xl border transition-all ${
              isVTOL ? "border-emerald-500/20 bg-emerald-500/5" : "border-zinc-800 bg-zinc-900/20"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-semibold ${isVTOL ? "text-emerald-300" : "text-zinc-300"}`}>
                  {item.label}
                </span>
                <div className="text-right">
                  <span className={`text-base font-black font-mono ${isVTOL ? "text-emerald-400" : "text-zinc-400"}`}>
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

      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
          Vantagem dos Ducted Fans
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="text-2xl font-black text-emerald-400 mb-1">−8 a −10 dB</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Redução de ruído proporcionada pelos ducted fans em relação a rotores abertos equivalentes.
              As condutas aerodinâmicas atuam como barreiras acústicas naturais.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-2xl font-black text-zinc-300 mb-1">3× menos</div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Em termos de percepção humana de loudness (escala A-weighted), o Island Hopper
              é percepcionado como significativamente mais silencioso que um helicóptero urbano.
            </p>
          </div>
        </div>
        <div className="mt-4 bg-zinc-950/50 rounded-lg p-4 text-xs text-zinc-500 border border-zinc-800/50">
          Nota: Valores de SPL aproximados baseados em literatura técnica e análise de referências
          equivalentes (Cap. 10 do Relatório Técnico). Medições em condições padronizadas ISO 3745.
        </div>
      </div>
    </div>
  );
}
