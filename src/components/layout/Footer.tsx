import Link from "next/link";
import { teamMembers, supervisors } from "@/lib/data/team";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/project", label: "Projeto" },
  { href: "/concept", label: "Conceito" },
  { href: "/service", label: "Serviço" },
  { href: "/sustainability", label: "Sustentabilidade" },
  { href: "/contacts", label: "Contactos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-sm text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center font-bold text-zinc-950 text-sm">
                IH
              </div>
              <span className="font-extrabold tracking-wider text-sm text-zinc-300">ISLAND HOPPER</span>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Projeto académico de mobilidade aérea urbana inter-ilhas nas Ilhas Baleares.
            </p>
          </div>

          <div>
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">Navegação</span>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">Instituição</span>
            <p className="text-zinc-400 font-semibold">Instituto Superior Técnico</p>
            <p className="text-zinc-500 mt-1">Universidade de Lisboa</p>
            <p className="text-zinc-600 mt-1">Junho 2026 · Grupo 11</p>
            <div className="mt-3 flex flex-col gap-1">
              {supervisors.map((s) => (
                <span key={s.name} className="text-zinc-600">
                  {s.title}: {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8">
          <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-4">
            Membros da Equipa
          </span>
          <div className="flex flex-wrap gap-2 font-mono">
            {teamMembers.map((m) => (
              <span
                key={m.id}
                className="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all hover:text-zinc-200 text-zinc-400"
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
          <span>&copy; 2026 Island Hopper. Todos os direitos reservados.</span>
          <span className="font-mono">Next.js 16 + Tailwind v4</span>
        </div>
      </div>
    </footer>
  );
}
