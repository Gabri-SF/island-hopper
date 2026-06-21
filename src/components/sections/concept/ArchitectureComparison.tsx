import { architectures } from "@/lib/data/ahp";

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  emerald: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/5",
    text: "text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  zinc: {
    border: "border-zinc-600/40",
    bg: "bg-zinc-900/30",
    text: "text-zinc-300",
    badge: "bg-zinc-800 border-zinc-700 text-zinc-400",
  },
  amber: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/5",
    text: "text-amber-400",
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
};

export default function ArchitectureComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {architectures.map((arch) => {
        const c = colorMap[arch.color] ?? colorMap.zinc;
        return (
          <div
            key={arch.id}
            className={`p-6 rounded-2xl border transition-all ${
              arch.winner
                ? `${c.border} ${c.bg}`
                : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded font-mono border ${c.badge}`}
                  >
                    {arch.shortName}
                  </span>
                  {arch.winner && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-zinc-950 uppercase tracking-wider">
                      Selecionada
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-zinc-100">{arch.name}</h3>
              </div>
              <div className={`text-2xl font-black ${c.text}`}>
                {arch.ahpScore.toFixed(3)}
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5">{arch.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-2">
                  Vantagens
                </span>
                <ul className="flex flex-col gap-1.5">
                  {arch.pros.slice(0, 3).map((pro) => (
                    <li key={pro} className="flex gap-2 text-xs text-zinc-400">
                      <span className="text-emerald-500 flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-2">
                  Limitações
                </span>
                <ul className="flex flex-col gap-1.5">
                  {arch.cons.slice(0, 3).map((con) => (
                    <li key={con} className="flex gap-2 text-xs text-zinc-400">
                      <span className="text-red-500 flex-shrink-0">✕</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {arch.examples.length > 0 && (
              <div className="mt-4 pt-4 border-t border-zinc-800/60">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mr-2">
                  Exemplos reais:
                </span>
                {arch.examples.map((ex) => (
                  <span
                    key={ex}
                    className="inline-block text-[11px] text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded mr-1 font-mono"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
