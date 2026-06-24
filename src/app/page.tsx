"use client";

import { useState } from "react";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../lib/data/dictionaries"; // Adjust path if needed

const basePath = "/island-hopper";

export default function Home() {
  const { language } = useLanguage();
  const dict = dictionaries[language].home;

  const [activeRoute, setActiveRoute] = useState<string>("ibiza-mallorca");
  const [activeKPI, setActiveKPI] = useState<string>("range");

  const currentRoute = dict.map.routes.find((r) => r.id === activeRoute) || dict.map.routes[0];
  const currentKPI = dict.kpisSection.kpis.find((k) => k.id === activeKPI) || dict.kpisSection.kpis[0];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* CSS Animations */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .grid-bg {
          background-image: 
            linear-gradient(to right, rgba(63, 63, 70, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(63, 63, 70, 0.15) 1px, transparent 1px);
          background-size: 3rem 3rem;
        }
      `}} />

      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-80" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none z-0" />
      
      {/* Top ambient glows */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none z-0" />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
            {dict.hero.titleP1}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {dict.hero.titleP2}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {dict.hero.desc1} <strong>Island Hopper</strong> {dict.hero.desc2} <em>tilt-duct</em> {dict.hero.desc3}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#mapa" className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-center w-full sm:w-auto">
              {dict.hero.btnExplore}
            </a>
            <a href="#conceito" className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all text-center w-full sm:w-auto">
              {dict.hero.btnConcept}
            </a>
          </div>

          {/* Quick Technical Specs bar */}
          <div className="grid grid-cols-3 gap-4 p-4 mt-6 rounded-lg bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm max-w-xl">
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">{dict.hero.specs.propulsion.label}</span>
              <span className="text-sm font-semibold text-zinc-300">{dict.hero.specs.propulsion.value}</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">{dict.hero.specs.architecture.label}</span>
              <span className="text-sm font-semibold text-zinc-300">{dict.hero.specs.architecture.value}</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">{dict.hero.specs.fuel.label}</span>
              <span className="text-sm font-semibold text-zinc-300">{dict.hero.specs.fuel.value}</span>
            </div>
          </div>
        </div>

        {/* Right Content - eVTOL Concept Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-[580px]">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700" />
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/island_hopper_vtol.png`}
                alt="Conceito do eVTOL Island Hopper em voo"
                width={800}
                height={450}
                className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase text-emerald-400 font-semibold tracking-widest block mb-1">
                  {dict.hero.image.badge}
                </span>
                <p className="text-xs text-zinc-300">
                  {dict.hero.image.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Main Interactive Sections Wrapper */}
      <section id="mapa" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{dict.map.title}</h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">{dict.map.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left panel - Route Selector & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {dict.map.routes.map(r => (
                <button
                  key={r.id}
                  onClick={() => setActiveRoute(r.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    activeRoute === r.id 
                      ? "bg-zinc-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] text-zinc-50" 
                      : "bg-zinc-950/40 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${activeRoute === r.id ? "bg-emerald-500" : "bg-zinc-700"}`} />
                    <span className="font-semibold text-sm sm:text-base">{r.name}</span>
                  </div>
                  <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded">
                    {r.distance}
                  </span>
                </button>
              ))}
            </div>

            {/* Route Stats Dashboard */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-xl flex flex-col gap-6">
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">{dict.map.ui.selectedRoute}</span>
                <h3 className="text-xl font-bold text-zinc-200 mt-1">{currentRoute.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">{dict.map.ui.durationVTOL}</span>
                  <span className="text-2xl font-black text-emerald-400 tracking-tight block mt-1">{currentRoute.timeVTOL}</span>
                  <span className="text-[10px] text-zinc-400 block mt-0.5">{dict.map.ui.directFlight}</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">{dict.map.ui.durationFerry}</span>
                  <span className="text-2xl font-black text-zinc-500 tracking-tight block mt-1">{currentRoute.timeFerry}</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">{dict.map.ui.estimatedAvg}</span>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3.5 text-xs text-emerald-400/90 leading-relaxed">
                🚀 {dict.map.ui.savingsPrefix} <strong>Island Hopper</strong> {dict.map.ui.savingsMid}{" "}
                <span className="font-bold underline">{currentRoute.savingsTime}</span>{" "}
                {dict.map.ui.savingsSuffix}
              </div>
            </div>
          </div>

          {/* Right panel - Dynamic Air Traffic Radar Control Screen (SVG) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[5/3] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>{dict.map.radar.online}</span>
                </div>
                <span>{dict.map.radar.version}</span>
              </div>

              {/* Main SVG Map */}
              <div className="relative flex-1 flex items-center justify-center">
                <svg viewBox="0 0 500 300" className="w-full h-full relative z-10">
                  <circle cx="250" cy="150" r="130" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1" />
                  <circle cx="250" cy="150" r="80" fill="none" stroke="rgba(16, 185, 129, 0.03)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {dict.map.routes.map(r => {
                    const isSelected = activeRoute === r.id;
                    return (
                      <g key={r.id}>
                        <line x1={r.coords.x1} y1={r.coords.y1} x2={r.coords.x2} y2={r.coords.y2} stroke={isSelected ? "rgba(16, 185, 129, 0.4)" : "rgba(63, 63, 70, 0.2)"} strokeWidth={isSelected ? "4" : "1.5"} className="transition-all duration-300" />
                        <line x1={r.coords.x1} y1={r.coords.y1} x2={r.coords.x2} y2={r.coords.y2} stroke={isSelected ? "#10b981" : "rgba(63, 63, 70, 0.4)"} strokeWidth={isSelected ? "2.5" : "1.5"} className={`transition-all duration-300 ${isSelected ? "animate-route-flow" : ""}`} />
                      </g>
                    );
                  })}

                  <g transform="translate(100, 200)">
                    <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.2)" />
                    <circle cx="0" cy="0" r="6" fill="#10b981" />
                    <text x="12" y="4" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">IBIZA</text>
                  </g>
                  <g transform="translate(90, 240)">
                    <circle cx="0" cy="0" r="4" fill="#a1a1aa" />
                    <text x="-40" y="-8" fill="#71717a" fontSize="9" className="font-mono select-none">FORMENTERA</text>
                  </g>
                  <g transform="translate(260, 140)">
                    <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.2)" />
                    <circle cx="0" cy="0" r="8" fill="#10b981" />
                    <text x="15" y="-5" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">MALLORCA</text>
                    <text x="15" y="6" fill="#71717a" fontSize="8" className="font-mono select-none">(PALMA)</text>
                  </g>
                  <g transform="translate(410, 90)">
                    <circle cx="0" cy="0" r="12" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.15)" />
                    <circle cx="0" cy="0" r="6" fill="#10b981" />
                    <text x="-35" y="18" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">MENORCA</text>
                  </g>
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-center text-[9px] text-zinc-600 font-mono">
                <span>{dict.map.radar.simulation}</span>
                <span>{dict.map.radar.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 bg-zinc-900/30 border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left panel - The Problem */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all">
            <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-100">{dict.problemSolution.problem.title}</h3>
            <p className="text-zinc-500 text-xs mt-1">{dict.problemSolution.problem.subtitle}</p>

            <ul className="mt-6 flex flex-col gap-4">
              {dict.problemSolution.problem.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <div>
                    <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel - The Solution */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all">
            <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-100">{dict.problemSolution.solution.title}</h3>
            <p className="text-zinc-500 text-xs mt-1">{dict.problemSolution.solution.subtitle}</p>

            <ul className="mt-6 flex flex-col gap-4">
               {dict.problemSolution.solution.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <div>
                    <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conceito Inovador / Features */}
      <section id="conceito" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{dict.concept.title}</h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">{dict.concept.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dict.concept.cards.map((card, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
              <span className="block mt-6 text-xs text-zinc-500 font-semibold tracking-wide">{card.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive KPIs explorer */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 bg-zinc-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{dict.kpisSection.title}</h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">{dict.kpisSection.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* KPI Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {dict.kpisSection.kpis.map(k => (
              <button
                key={k.id}
                onClick={() => setActiveKPI(k.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                  activeKPI === k.id
                    ? "bg-zinc-900 border-emerald-500 text-zinc-50"
                    : "bg-zinc-950/40 border-zinc-800 hover:border-zinc-700 text-zinc-400"
                }`}
              >
                <div>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">{k.label}</span>
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight">{k.value}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                  activeKPI === k.id ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                }`}>
                  {dict.kpisSection.ui.details}
                </span>
              </button>
            ))}
          </div>

          {/* KPI Details Display Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm min-h-[300px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute right-4 top-4 text-zinc-800/30 text-8xl font-black select-none pointer-events-none uppercase">
                {currentKPI.id.slice(0, 3)}
              </div>
              
              <div className="relative z-10">
                <span className="text-xs uppercase text-emerald-400 font-bold tracking-widest">{dict.kpisSection.ui.metricLabel}</span>
                
                <div className="mt-8 flex flex-col gap-2">
                  <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-100">{currentKPI.value}</h3>
                  <span className="text-lg font-bold text-zinc-300 mt-1">{currentKPI.label}</span>
                </div>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
                  {currentKPI.desc}
                </p>
              </div>

              {/* Progress meter visual detail */}
              <div className="mt-12 relative z-10 border-t border-zinc-800/60 pt-6">
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>{dict.kpisSection.ui.optimization}</span>
                  <span className="font-mono text-emerald-400">{dict.kpisSection.ui.stable}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-[92%] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}