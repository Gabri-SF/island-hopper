import { teamMembers, supervisors } from "@/lib/data/team";

export default function TeamGrid() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          Membros — Grupo 11
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all"
            >
              <span className="block font-bold text-zinc-200 text-sm">{member.name}</span>
              <span className="block text-[11px] text-zinc-500 font-mono mt-1">
                nº {member.number}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          Orientadores
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {supervisors.map((sup) => (
            <div
              key={sup.name}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all"
            >
              <span className="block font-bold text-zinc-200 text-sm">{sup.name}</span>
              <span className="block text-[11px] text-emerald-500/80 font-semibold mt-1 uppercase tracking-wide">
                {sup.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
