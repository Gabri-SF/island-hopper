interface Props {
  label: string;
  value: string;
  unit?: string;
  description?: string;
  accent?: "emerald" | "cyan" | "zinc";
}

export default function StatCard({ label, value, unit, description, accent = "emerald" }: Props) {
  const colors = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    zinc: "text-zinc-300",
  };

  return (
    <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all">
      <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-black tracking-tight ${colors[accent]}`}>{value}</span>
        {unit && <span className="text-sm text-zinc-500">{unit}</span>}
      </div>
      {description && <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{description}</p>}
    </div>
  );
}
