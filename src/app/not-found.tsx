import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(63,63,70,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.2) 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      {/* Crashed plane SVG */}
      <div className="relative z-10 mb-8">
        <svg
          viewBox="0 0 200 120"
          className="w-48 h-28 mx-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground */}
          <line x1="10" y1="100" x2="190" y2="100" stroke="#3f3f46" strokeWidth="2" />

          {/* Smoke puffs */}
          <circle cx="105" cy="55" r="12" fill="#27272a" opacity="0.8" />
          <circle cx="118" cy="44" r="9" fill="#27272a" opacity="0.6" />
          <circle cx="128" cy="36" r="6" fill="#27272a" opacity="0.4" />

          {/* Fuselage — tilted */}
          <rect
            x="60" y="78"
            width="80" height="14"
            rx="7"
            fill="#10b981"
            transform="rotate(-20 100 85)"
          />

          {/* Left wing — bent down */}
          <polygon
            points="85,85 40,105 38,112 88,92"
            fill="#059669"
            transform="rotate(-20 100 85)"
          />

          {/* Right wing */}
          <polygon
            points="115,79 160,65 162,72 117,86"
            fill="#059669"
            transform="rotate(-20 100 85)"
          />

          {/* Nose */}
          <ellipse
            cx="145" cy="76"
            rx="10" ry="6"
            fill="#34d399"
            transform="rotate(-20 100 85)"
          />

          {/* X eyes on the nose */}
          <text
            x="138" y="72"
            fontSize="10"
            fill="#052e16"
            transform="rotate(-20 100 85)"
            fontFamily="monospace"
            fontWeight="bold"
          >✕</text>

          {/* Stars / dizziness */}
          <text x="148" y="30" fontSize="12" fill="#fbbf24">★</text>
          <text x="160" y="20" fontSize="9" fill="#fbbf24">✦</text>
          <text x="140" y="18" fontSize="8" fill="#fbbf24">★</text>
        </svg>
      </div>

      {/* Error code */}
      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-mono mb-3">
          ATC ALERT · ROTA NÃO ENCONTRADA
        </p>

        <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-zinc-800 select-none leading-none">
          404
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-zinc-100">
          Este voo não existe no nosso sistema.
        </h2>

        <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          O Island Hopper opera apenas 2 rotas. Esta não é nenhuma delas.
          Talvez tenhas tentado voar para Formentera? Não fazemos isso.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            Regressar ao Hangar
          </Link>
          <Link
            href="/service"
            className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all"
          >
            Ver Rotas Disponíveis
          </Link>
        </div>

        <p className="mt-12 text-[10px] font-mono text-zinc-700">
          FLIGHT LOG: ERR_ROUTE_NOT_FOUND · IST 2026 · GRUPO 11
        </p>
      </div>
    </div>
  );
}
