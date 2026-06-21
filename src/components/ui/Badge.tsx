import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "default" | "success" | "info" | "warning";
}

export default function Badge({ children, variant = "default" }: Props) {
  const styles = {
    default: "text-zinc-400 bg-zinc-800 border-zinc-700",
    success: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    info: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    warning: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
