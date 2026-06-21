export default function PropulsionSystem() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-blue-500/30 transition-all">
          <div className="w-10 h-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-bold text-zinc-100 mb-1">Bateria Li-S</h3>
          <p className="text-xs text-blue-400 font-semibold mb-3">VTOL + Transientes</p>
          <div className="flex flex-col gap-2 text-xs text-zinc-400">
            <div className="flex justify-between">
              <span>Massa</span>
              <span className="font-mono text-zinc-200">58,37 kg</span>
            </div>
            <div className="flex justify-between">
              <span>Energia</span>
              <span className="font-mono text-zinc-200">26,26 kWh</span>
            </div>
            <div className="flex justify-between">
              <span>Densidade</span>
              <span className="font-mono text-zinc-200">0,45 kWh/kg</span>
            </div>
            <div className="flex justify-between">
              <span>Missões</span>
              <span className="font-mono text-zinc-200">Descolagem + Hover</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all">
          <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <h3 className="font-bold text-zinc-100 mb-1">Célula de Combustível (PEMFC)</h3>
          <p className="text-xs text-emerald-400 font-semibold mb-3">Cruzeiro + Subida</p>
          <div className="flex flex-col gap-2 text-xs text-zinc-400">
            <div className="flex justify-between">
              <span>Potência</span>
              <span className="font-mono text-zinc-200">200 kW</span>
            </div>
            <div className="flex justify-between">
              <span>Massa PEMFC</span>
              <span className="font-mono text-zinc-200">100 kg</span>
            </div>
            <div className="flex justify-between">
              <span>Armazenamento H₂</span>
              <span className="font-mono text-zinc-200">39,36 kg</span>
            </div>
            <div className="flex justify-between">
              <span>Missões</span>
              <span className="font-mono text-zinc-200">Subida + Cruzeiro</span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/30 transition-all">
          <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-zinc-100 mb-1">6× Motores EMRAX 348</h3>
          <p className="text-xs text-cyan-400 font-semibold mb-3">Propulsão Distribuída (DEP)</p>
          <div className="flex flex-col gap-2 text-xs text-zinc-400">
            <div className="flex justify-between">
              <span>Potência/Motor</span>
              <span className="font-mono text-zinc-200">260 kW</span>
            </div>
            <div className="flex justify-between">
              <span>Potência Total</span>
              <span className="font-mono text-zinc-200">1.560 kW</span>
            </div>
            <div className="flex justify-between">
              <span>Massa/Motor</span>
              <span className="font-mono text-zinc-200">41,5 kg</span>
            </div>
            <div className="flex justify-between">
              <span>Tensão DC</span>
              <span className="font-mono text-zinc-200">800 V</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
          Comparação: Híbrido vs. Totalmente Elétrico
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-bold text-zinc-200 text-sm">Sistema Híbrido (selecionado)</span>
            </div>
            <div className="text-3xl font-black text-emerald-400 mb-1">197,73 kg</div>
            <p className="text-zinc-500 text-xs">Li-S (58,37) + PEMFC (100) + H₂ (39,36)</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-zinc-500" />
              <span className="font-bold text-zinc-400 text-sm">Totalmente Elétrico</span>
            </div>
            <div className="text-3xl font-black text-zinc-500 mb-1">329,89 kg</div>
            <p className="text-zinc-600 text-xs">Apenas baterias — 67% mais pesado</p>
          </div>
        </div>
        <div className="mt-6 bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4 text-xs text-emerald-400/90">
          Poupança de <strong>132,16 kg</strong> com a arquitetura híbrida — equivale a mais de um passageiro adicional de payload.
        </div>
      </div>
    </div>
  );
}
