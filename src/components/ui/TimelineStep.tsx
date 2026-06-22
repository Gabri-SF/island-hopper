interface Props {
  step: number;
  total: number;
  label: string;
  type: string;
  altitude: string;
  velocity: string;
  duration: string;
  range: string;
  labels?: { altitude: string; velocity: string; duration: string; distance: string };
  active?: boolean;
  onClick?: () => void;
}

export default function TimelineStep({
  step,
  total,
  label,
  type,
  altitude,
  velocity,
  duration,
  range,
  labels,
  active,
  onClick,
}: Props) {
  return (
    <div
      className={`relative flex gap-4 ${step < total ? "pb-8" : ""} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {step < total && (
        <div className="absolute left-4 top-10 bottom-0 w-px bg-zinc-800" />
      )}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 transition-all ${
          active
            ? "bg-emerald-500 border-emerald-500 text-zinc-950"
            : "bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-600"
        }`}
      >
        {step}
      </div>
      <div
        className={`flex-1 p-4 rounded-xl border transition-all ${
          active
            ? "border-emerald-500/30 bg-emerald-500/5"
            : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-zinc-200 text-sm">{label}</span>
          <span className="text-[10px] text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded font-mono">
            {type}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
          <div>
            <span className="block text-zinc-600 uppercase tracking-wide mb-0.5">{labels?.altitude ?? "Altitude"}</span>
            <span className="text-zinc-400 font-mono">{altitude}</span>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase tracking-wide mb-0.5">{labels?.velocity ?? "Velocidade"}</span>
            <span className="text-zinc-400 font-mono">{velocity}</span>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase tracking-wide mb-0.5">{labels?.duration ?? "Duração"}</span>
            <span className="text-zinc-400 font-mono">{duration}</span>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase tracking-wide mb-0.5">{labels?.distance ?? "Distância"}</span>
            <span className="text-zinc-400 font-mono">{range}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
