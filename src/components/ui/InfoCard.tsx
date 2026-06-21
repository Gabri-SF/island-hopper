import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
  badge?: string;
  variant?: "default" | "problem" | "solution";
}

export default function InfoCard({ icon, number, title, description, badge, variant = "default" }: Props) {
  const borderHover = {
    default: "hover:border-emerald-500/30",
    problem: "hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)]",
    solution: "hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]",
  };

  return (
    <div
      className={`p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 transition-all flex flex-col ${borderHover[variant]}`}
    >
      {number && (
        <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
          {number}
        </div>
      )}
      {icon && <div className="mb-6">{icon}</div>}
      <h3 className="text-xl font-bold text-zinc-100 mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">{description}</p>
      {badge && (
        <span className="block mt-6 text-xs text-zinc-500 font-semibold tracking-wide">{badge}</span>
      )}
    </div>
  );
}
