interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, center = true }: Props) {
  return (
    <div className={`mb-16 ${center ? "text-center max-w-3xl mx-auto" : ""}`}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-50">{title}</h2>
      {subtitle && <p className="text-zinc-400 mt-3 text-sm sm:text-base">{subtitle}</p>}
    </div>
  );
}
