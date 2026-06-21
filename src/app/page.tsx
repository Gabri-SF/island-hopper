"use client";

import { useState } from "react";
import Image from "next/image";

// Route data for interactive map
interface Route {
  id: string;
  name: string;
  distance: string;
  timeVTOL: string;
  timeFerry: string;
  coords: { x1: number; y1: number; x2: number; y2: number };
}

const routes: Route[] = [
  { 
    id: "ibiza-mallorca", 
    name: "Ibiza ↔ Mallorca", 
    distance: "130 km", 
    timeVTOL: "25 min", 
    timeFerry: "2h 30m",
    coords: { x1: 100, y1: 200, x2: 260, y2: 140 }
  },
  { 
    id: "mallorca-menorca", 
    name: "Mallorca ↔ Menorca", 
    distance: "80 km", 
    timeVTOL: "16 min", 
    timeFerry: "1h 45m",
    coords: { x1: 260, y1: 140, x2: 410, y2: 90 }
  },
  { 
    id: "ibiza-formentera", 
    name: "Ibiza ↔ Formentera", 
    distance: "20 km", 
    timeVTOL: "5 min", 
    timeFerry: "35 min",
    coords: { x1: 100, y1: 200, x2: 90, y2: 240 }
  },
];

// KPI data
interface KPI {
  id: string;
  value: string;
  label: string;
  desc: string;
}

const kpis: KPI[] = [
  { id: "range", value: "120 km", label: "Autonomia", desc: "Densidade energética otimizada para voos inter-ilhas rápidos e eficientes, sem escalas intermédias." },
  { id: "speed", value: "306 km/h", label: "Velocidade Cruzeiro", desc: "Velocidade de cruzeiro excecional proporcionada pela aerodinâmica avançada e propulsão distribuída." },
  { id: "noise", value: "< 35 dB", label: "Nível de Ruído", desc: "Operação ultra-silenciosa, inferior ao ruído de fundo residencial, ideal para a conservação ecológica." },
  { id: "emissions", value: "0 g", label: "Emissões CO₂/km", desc: "Propulsão 100% sustentável com emissões diretas nulas de carbono para proteger o ecossistema regional." },
  { id: "weight", value: "2 595 kg", label: "MTOW (Peso Máx.)", desc: "Peso máximo de descolagem otimizado para descolagem vertical estável e máxima eficiência estrutural." },
];

export default function Home() {
  const [activeRoute, setActiveRoute] = useState<string>("ibiza-mallorca");
  const [activeKPI, setActiveKPI] = useState<string>("range");

  const currentRoute = routes.find(r => r.id === activeRoute) || routes[0];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes routeFlow {
          to {
            stroke-dashoffset: -20;
          }
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Em Fase de Desenvolvimento
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
            A Revolução da Mobilidade nas{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ilhas Baleares
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Estamos a desenvolver o futuro da aviação regional sustentável. O <strong>Island Hopper</strong> é uma solução de mobilidade elétrica inovadora com arquitetura <em>tilt-duct</em>, desenhada para descolar verticalmente e efetuar ligações inter-ilhas ultrarrápidas com zero emissões diretas de carbono.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a 
              href="#mapa" 
              className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-center w-full sm:w-auto"
            >
              Explorar Rotas
            </a>
            <a 
              href="#conceito" 
              className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all text-center w-full sm:w-auto"
            >
              Conceito Técnico
            </a>
          </div>

          {/* Quick Technical Specs bar */}
          <div className="grid grid-cols-3 gap-4 p-4 mt-6 rounded-lg bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-sm max-w-xl">
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Propulsão</span>
              <span className="text-sm font-semibold text-zinc-300">Elétrica (DEP)</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Arquitetura</span>
              <span className="text-sm font-semibold text-zinc-300">Tilt-Duct VTOL</span>
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Combustível</span>
              <span className="text-sm font-semibold text-zinc-300">Híbrido Bateria + H₂</span>
            </div>
          </div>
        </div>

        {/* Right Content - eVTOL Concept Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-[480px]">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-all duration-700" />
            
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl animate-float">
              <Image 
                src="/island_hopper_vtol.jpg"
                alt="Conceito do eVTOL Island Hopper em voo pelas Ilhas Baleares"
                width={800}
                height={450}
                className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase text-emerald-400 font-semibold tracking-widest block mb-1">
                  Render 3D Conceptual
                </span>
                <p className="text-xs text-zinc-300">
                  Arquitetura de asa com 6 rotores elétricos inclináveis (Tilt-Duct).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Main Interactive Sections Wrapper */}
      <section id="mapa" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Mapa de Operação Inter-Ilhas
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Selecione uma rota para simular a drástica redução nos tempos de viagem em comparação com os ferries marítimos tradicionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left panel - Route Selector & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {routes.map(r => (
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
                    <div className={`w-2 h-2 rounded-full ${
                      activeRoute === r.id ? "bg-emerald-500" : "bg-zinc-700"
                    }`} />
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
                <span className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Rota Selecionada</span>
                <h3 className="text-xl font-bold text-zinc-200 mt-1">{currentRoute.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Duração (VTOL)</span>
                  <span className="text-2xl font-black text-emerald-400 tracking-tight block mt-1">
                    {currentRoute.timeVTOL}
                  </span>
                  <span className="text-[10px] text-zinc-400 block mt-0.5">Voo Direto</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Ferries Convencionais</span>
                  <span className="text-2xl font-black text-zinc-500 tracking-tight block mt-1">
                    {currentRoute.timeFerry}
                  </span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Média estimada</span>
                </div>
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3.5 text-xs text-emerald-400/90 leading-relaxed">
                🚀 O <strong>Island Hopper</strong> poupa aproximadamente{" "}
                <span className="font-bold underline">
                  {activeRoute === "ibiza-mallorca" ? "2 horas e 5 minutos" : activeRoute === "mallorca-menorca" ? "1 hora e 29 minutos" : "30 minutos"}
                </span>{" "}
                de viagem nesta ligação inter-ilhas.
              </div>
            </div>
          </div>

          {/* Right panel - Dynamic Air Traffic Radar Control Screen (SVG) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[5/3] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
              {/* Radar Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

              {/* Header inside radar */}
              <div className="relative z-10 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>ATC RADAR: ONLINE</span>
                </div>
                <span>GRID BALEARIC v1.0.2</span>
              </div>

              {/* Main SVG Map */}
              <div className="relative flex-1 flex items-center justify-center">
                <svg viewBox="0 0 500 300" className="w-full h-full relative z-10">
                  {/* Outer Radar Rings */}
                  <circle cx="250" cy="150" r="130" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1" />
                  <circle cx="250" cy="150" r="80" fill="none" stroke="rgba(16, 185, 129, 0.03)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Air Route Lines */}
                  {routes.map(r => {
                    const isSelected = activeRoute === r.id;
                    return (
                      <g key={r.id}>
                        {/* Background line glow */}
                        <line
                          x1={r.coords.x1}
                          y1={r.coords.y1}
                          x2={r.coords.x2}
                          y2={r.coords.y2}
                          stroke={isSelected ? "rgba(16, 185, 129, 0.4)" : "rgba(63, 63, 70, 0.2)"}
                          strokeWidth={isSelected ? "4" : "1.5"}
                          className="transition-all duration-300"
                        />
                        {/* Animated flowing line */}
                        <line
                          x1={r.coords.x1}
                          y1={r.coords.y1}
                          x2={r.coords.x2}
                          y2={r.coords.y2}
                          stroke={isSelected ? "#10b981" : "rgba(63, 63, 70, 0.4)"}
                          strokeWidth={isSelected ? "2.5" : "1.5"}
                          className={`transition-all duration-300 ${isSelected ? "animate-route-flow" : ""}`}
                        />
                      </g>
                    );
                  })}

                  {/* Island Nodes */}
                  {/* Ibiza */}
                  <g transform="translate(100, 200)">
                    <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.2)" />
                    <circle cx="0" cy="0" r="6" fill="#10b981" />
                    <text x="12" y="4" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">IBIZA</text>
                  </g>

                  {/* Formentera */}
                  <g transform="translate(90, 240)">
                    <circle cx="0" cy="0" r="4" fill="#a1a1aa" />
                    <text x="-40" y="-8" fill="#71717a" fontSize="9" className="font-mono select-none">FORMENTERA</text>
                  </g>

                  {/* Mallorca */}
                  <g transform="translate(260, 140)">
                    <circle cx="0" cy="0" r="16" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.2)" />
                    <circle cx="0" cy="0" r="8" fill="#10b981" />
                    <text x="15" y="-5" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">MALLORCA</text>
                    <text x="15" y="6" fill="#71717a" fontSize="8" className="font-mono select-none">(PALMA)</text>
                  </g>

                  {/* Menorca */}
                  <g transform="translate(410, 90)">
                    <circle cx="0" cy="0" r="12" className="animate-pulse-radar" fill="rgba(16, 185, 129, 0.15)" />
                    <circle cx="0" cy="0" r="6" fill="#10b981" />
                    <text x="-35" y="18" fill="#a1a1aa" fontSize="10" className="font-mono font-semibold select-none">MENORCA</text>
                  </g>
                </svg>
              </div>

              {/* Footer info inside radar */}
              <div className="relative z-10 flex justify-between items-center text-[9px] text-zinc-600 font-mono">
                <span>SIMULATION INTERVAL: 1S</span>
                <span>SYSTEM STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 bg-zinc-900/30 border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left panel - O Problema */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] transition-all">
            <div className="w-10 h-10 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-100">O Problema</h3>
            <p className="text-zinc-500 text-xs mt-1">Obstáculos nas viagens insulares atuais</p>

            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Procura Altamente Sazonal</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">As ligações inter-ilhas enfrentam sobrecarga massiva e picos de tráfego, complicando a logística regional.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Infraestruturas Marítimas Saturadas</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">As viagens de ferry prolongam-se por horas, provocando longos atrasos no embarque e desconforto aos passageiros.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Pegada de Carbono e Impacto Sonoro</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">Os transportes aéreos e marítimos atuais emitem poluentes e criam elevados níveis de ruído em ecossistemas de elevada sensibilidade ambiental.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right panel - A Solução Sustentável */}
          <div className="p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all">
            <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-100">A Solução Sustentável</h3>
            <p className="text-zinc-500 text-xs mt-1">Conectividade e inovação regional verde</p>

            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Eletrificação e Tecnologia Limpa</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">Operações com zero emissões diretas propiciadas por propulsão elétrica distribuída de alta eficiência.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Mobilidade Ponto a Ponto Rápida</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">Descolagem e aterragem vertical (VTOL) que dispensa aeroportos extensos e liga diretamente portos urbanos em minutos.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-zinc-300 text-sm sm:text-base">Respeito pela Biodiversidade Insular</h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">Uma assinatura sonora reduzida garantida pelo projeto acústico dos ducted-fans elétricos, protegendo a fauna das ilhas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conceito Inovador / Features */}
      <section id="conceito" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            O Conceito Inovador
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Equilíbrio perfeito entre eficiência mecânica, autonomia energética e segurança operacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Tilt-Duct */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Arquitetura "Tilt-Duct"</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Asas integradas com condutas inclináveis. Combina a flexibilidade de descolagem vertical de um helicóptero com a velocidade e eficiência de voo sustentado de uma asa fixa.
              </p>
            </div>
            <span className="block mt-6 text-xs text-zinc-500 font-semibold tracking-wide">CAPACIDADE VTOL</span>
          </div>

          {/* Card 2 - Hybrid Power */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Bateria Híbrida + Pilha H₂</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sistema avançado que combina densidade energética superior de células de combustível a hidrogénio de alto desempenho com o poder imediato de resposta de baterias de iões de lítio.
              </p>
            </div>
            <span className="block mt-6 text-xs text-zinc-500 font-semibold tracking-wide">ENERGIA EFICIENTE</span>
          </div>

          {/* Card 3 - DEP */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">Propulsão DEP (6 Motores)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Propulsão Elétrica Distribuída estruturada em 6 motores independentes. Garante redundância extrema, aumentando exponencialmente a segurança em caso de falha mecânica.
              </p>
            </div>
            <span className="block mt-6 text-xs text-zinc-500 font-semibold tracking-wide">REDUNDÂNCIA TOTAL</span>
          </div>
        </div>
      </section>

      {/* Interactive KPIs explorer */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 bg-zinc-900/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Especificações Chave e Desempenho
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base">
            Métricas de desenho obtidas através da simulação estrutural e ensaios virtuais do projeto Island Hopper.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* KPI Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {kpis.map(k => (
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
                  Detalhes
                </span>
              </button>
            ))}
          </div>

          {/* KPI Details Display Panel */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm min-h-[300px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute right-4 top-4 text-zinc-800/30 text-8xl font-black select-none pointer-events-none uppercase">
                {kpis.find(k => k.id === activeKPI)?.id.slice(0, 3)}
              </div>
              
              <div className="relative z-10">
                <span className="text-xs uppercase text-emerald-400 font-bold tracking-widest">Métrica Técnico-Operacional</span>
                
                <div className="mt-8 flex flex-col gap-2">
                  <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-100">
                    {kpis.find(k => k.id === activeKPI)?.value}
                  </h3>
                  <span className="text-lg font-bold text-zinc-300 mt-1">
                    {kpis.find(k => k.id === activeKPI)?.label}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
                  {kpis.find(k => k.id === activeKPI)?.desc}
                </p>
              </div>

              {/* Progress meter visual detail */}
              <div className="mt-12 relative z-10 border-t border-zinc-800/60 pt-6">
                <div className="flex justify-between text-xs text-zinc-500 mb-2">
                  <span>NÍVEL DE OTIMIZAÇÃO</span>
                  <span className="font-mono text-emerald-400">98.5% STABLE</span>
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
