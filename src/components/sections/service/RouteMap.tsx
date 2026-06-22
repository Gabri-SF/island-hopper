"use client";

import { useState } from "react";
import { routes } from "@/lib/data/routes";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../../lib/data/dictionaries"; // Adjust path if needed

export default function RouteMap() {
  const { language } = useLanguage();
  const [activeRoute, setActiveRoute] = useState(routes[0].id);

  // Safe dictionary extraction
  const specDict = dictionaries[language]?.specs as Record<string, any> | undefined;
  const dict = specDict?.routeMap || {
    selectedRouteLabel: "Rota Selecionada",
    vtolLabel: "Island Hopper",
    vtolSub: "Voo direto VTOL",
    ferryLabel: "Ferry Convencional",
    ferrySub: "Média estimada",
    savingsPrefix: "O Island Hopper poupa aproximadamente",
    savingsSuffix: "de viagem nesta ligação inter-ilhas.",
    hourUnit: "h",
    minuteUnit: "min",
    minutesOnlyUnit: "minutos",
    translations: {}
  };

  const currentRoute = routes.find((r) => r.id === activeRoute) || routes[0];

  // Dynamic time calculations integrated with locale templates
  const ferryTimeSaved = currentRoute.ferryMinutes - currentRoute.vtolMinutes;
  const hoursS = Math.floor(ferryTimeSaved / 60);
  const minsS = ferryTimeSaved % 60;
  
  const timeSavedText = hoursS > 0 
    ? `${hoursS}${dict.hourUnit} ${minsS}${dict.minuteUnit}` 
    : `${minsS} ${dict.minutesOnlyUnit}`;

  // Fallbacks for data-driven geographical names
  const localizedRouteName = dict.translations?.[currentRoute.name] || currentRoute.name;

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes routeFlow {
          to { stroke-dashoffset: -20; }
        }
        .animate-route-flow {
          stroke-dasharray: 6 4;
          animation: routeFlow 1.5s linear infinite;
        }
        @keyframes pulseRadar {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-pulse-radar {
          animation: pulseRadar 2.5s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
        }
      `}} />
      {/* ── LEFT PANEL: CONFIGURATOR & METRICS ── */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {routes.map((r) => {
            const label = dict.translations?.[r.name] || r.name;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRoute(r.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeRoute === r.id
                    ? "bg-zinc-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] text-zinc-50"
                    : "bg-zinc-950/40 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeRoute === r.id ? "bg-emerald-500" : "bg-zinc-700"
                    }`}
                  />
                  <span className="font-semibold text-sm">{label}</span>
                </div>
                <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                  {r.distanceKm} km
                </span>
              </button>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-xl flex flex-col gap-6">
          <div className="border-b border-zinc-800 pb-4">
            <span className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">
              {dict.selectedRouteLabel}
            </span>
            <h3 className="text-xl font-bold text-zinc-200 mt-1">{localizedRouteName}</h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              {currentRoute.fromCode} → {currentRoute.toCode} · {currentRoute.distanceKm} km
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                {dict.vtolLabel}
              </span>
              <span className="text-2xl font-black text-emerald-400 tracking-tight block mt-1">
                {currentRoute.vtolMinutes} min
              </span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">{dict.vtolSub}</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                {dict.ferryLabel}
              </span>
              <span className="text-2xl font-black text-zinc-500 tracking-tight block mt-1">
                {Math.floor(currentRoute.ferryMinutes / 60)}{dict.hourUnit}{" "}
                {currentRoute.ferryMinutes % 60 > 0 ? `${currentRoute.ferryMinutes % 60}${dict.minuteUnit}` : ""}
              </span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">{dict.ferrySub}</span>
            </div>
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3.5 text-xs text-emerald-400/90 leading-relaxed">
            {dict.savingsPrefix} <strong>{timeSavedText}</strong> {dict.savingsSuffix}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: INTERACTIVE RADAR GRAPHIC ── */}
      <div className="lg:col-span-7 flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-[5/3] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{dict.radar?.online ?? "ATC RADAR: ONLINE"}</span>
            </div>
            <span>{dict.radar?.version ?? "GRID BALEARIC v1.0.2"}</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center">
            <svg viewBox="0 0 500 300" className="w-full h-full relative z-10">
              <circle cx="250" cy="150" r="130" fill="none" stroke="rgba(16,185,129,0.05)" strokeWidth="1" />
              <circle cx="250" cy="150" r="80" fill="none" stroke="rgba(16,185,129,0.03)" strokeWidth="1" strokeDasharray="4 4" />

              {routes.map((r) => {
                const isSelected = activeRoute === r.id;
                return (
                  <g key={r.id}>
                    <line
                      x1={r.coords.x1} y1={r.coords.y1}
                      x2={r.coords.x2} y2={r.coords.y2}
                      stroke={isSelected ? "rgba(16,185,129,0.4)" : "rgba(63,63,70,0.2)"}
                      strokeWidth={isSelected ? "4" : "1.5"}
                      className="transition-all duration-300"
                    />
                    <line
                      x1={r.coords.x1} y1={r.coords.y1}
                      x2={r.coords.x2} y2={r.coords.y2}
                      stroke={isSelected ? "#10b981" : "rgba(63,63,70,0.4)"}
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      className={`transition-all duration-300 ${isSelected ? "animate-route-flow" : ""}`}
                    />
                  </g>
                );
              })}

              <g transform="translate(100, 200)">
                <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16,185,129,0.2)" />
                <circle cx="0" cy="0" r="6" fill="#10b981" />
                <text x="12" y="4" fill="#a1a1aa" fontSize="10" fontFamily="monospace" fontWeight="600">IBIZA</text>
              </g>
              <g transform="translate(90, 240)">
                <circle cx="0" cy="0" r="4" fill="#a1a1aa" />
                <text x="-40" y="-8" fill="#71717a" fontSize="9" fontFamily="monospace">FORMENTERA</text>
              </g>
              <g transform="translate(260, 140)">
                <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16,185,129,0.2)" />
                <circle cx="0" cy="0" r="8" fill="#10b981" />
                <text x="15" y="-5" fill="#a1a1aa" fontSize="10" fontFamily="monospace" fontWeight="600">MALLORCA</text>
                <text x="15" y="6" fill="#71717a" fontSize="8" fontFamily="monospace">(PALMA)</text>
              </g>
              <g transform="translate(410, 90)">
                <circle cx="0" cy="0" r="12" className="animate-pulse-radar" fill="rgba(16,185,129,0.15)" />
                <circle cx="0" cy="0" r="6" fill="#10b981" />
                <text x="-35" y="18" fill="#a1a1aa" fontSize="10" fontFamily="monospace" fontWeight="600">MENORCA</text>
              </g>
            </svg>
          </div>

          <div className="relative z-10 flex justify-between items-center text-[9px] text-zinc-600 font-mono">
            <span>{dict.radar?.simulation ?? "SIMULATION INTERVAL: 1S"}</span>
            <span>{dict.radar?.status ?? "SYSTEM STABLE"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}