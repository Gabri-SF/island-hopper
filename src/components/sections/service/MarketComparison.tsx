import { transportModes } from "@/lib/data/routes";

export default function MarketComparison() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              Modo
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              Tempo de Viagem
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              Custo / Pax
            </th>
            <th className="px-6 py-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
              Emissões CO₂
            </th>
          </tr>
        </thead>
        <tbody>
          {transportModes.map((mode, i) => {
            const isVTOL = mode.mode.includes("Island Hopper");
            return (
              <tr
                key={i}
                className={`border-b border-zinc-800/50 last:border-0 transition-all ${
                  isVTOL
                    ? "bg-emerald-500/5 hover:bg-emerald-500/8"
                    : "hover:bg-zinc-900/50"
                }`}
              >
                <td className="px-6 py-4">
                  <span
                    className={`font-bold text-sm ${
                      isVTOL ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {mode.mode}
                  </span>
                  {mode.notes && (
                    <span className="block text-[11px] text-zinc-500 mt-0.5">{mode.notes}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-zinc-300 font-mono text-xs">{mode.travelTime}</td>
                <td className="px-6 py-4">
                  <span
                    className={`font-bold font-mono text-xs ${
                      isVTOL ? "text-emerald-400" : "text-zinc-300"
                    }`}
                  >
                    {mode.costPerPax}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-300 font-mono text-xs">
                  {mode.emissionsPerPax}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
