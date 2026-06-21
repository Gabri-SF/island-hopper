import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import RouteMap from "@/components/sections/service/RouteMap";
import MarketComparison from "@/components/sections/service/MarketComparison";

export default function ServicePage() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="info">Operações Inter-Ilhas</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          O{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Serviço
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          O Island Hopper opera dois corredores estratégicos nas Ilhas Baleares, servindo
          residentes e turistas com uma alternativa 5× mais rápida que o ferry, com zero
          emissões diretas em voo.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge="Mercado-Alvo"
          title="Baleares: Um Mercado Único"
          subtitle="Arquipélago com elevada procura de transporte inter-ilhas, especialmente no segmento turístico premium."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { value: "1,26M", label: "Residentes", desc: "Mercado base anual" },
            { value: "19M", label: "Turistas/Ano", desc: "2025 — procura sazonal" },
            { value: "~€136", label: "Preço / Pax", desc: "Com margem de 50%" },
            { value: "Premium", label: "Segmento", desc: "Turismo de alto valor" },
          ].map((s) => (
            <div key={s.label} className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all">
              <div className="text-2xl font-black text-emerald-400 mb-1">{s.value}</div>
              <div className="text-sm font-bold text-zinc-200 mb-1">{s.label}</div>
              <div className="text-xs text-zinc-500">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge="Rotas"
            title="Mapa de Operação Inter-Ilhas"
            subtitle="Dois corredores estratégicos ligando as principais ilhas em menos de 35 minutos."
          />
          <RouteMap />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge="Condições de Operação"
          title="Conops — Conceito de Operações"
          subtitle="O Island Hopper opera em condições VMC com vento médio típico das Baleares."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "☀️",
              title: "Condições Meteorológicas",
              items: [
                "Operação VFR diurna (Verão)",
                "Vento médio: 11,6 km/h",
                "Alta visibilidade",
                "Temperatura: 22–30°C",
              ],
            },
            {
              icon: "🛫",
              title: "Operação VTOL",
              items: [
                "Descolagem vertical de veriports",
                "Altitude cruzeiro: 2.286 m (7.500 ft)",
                "1 piloto + 6 passageiros",
                "Sem pista convencional necessária",
              ],
            },
            {
              icon: "⚡",
              title: "Reabastecimento",
              items: [
                "Recarga rápida de bateria Li-S",
                "Reabastecimento de H₂ no veriport",
                "Turnaround: ~20 minutos",
                "Infraestrutura de H₂ verde",
              ],
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-zinc-200 mb-4">{item.title}</h3>
              <ul className="flex flex-col gap-2">
                {item.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400">
                    <span className="text-emerald-500 flex-shrink-0">·</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionHeader
          badge="Comparação"
          title="Island Hopper vs. Modos Convencionais"
          subtitle="Análise comparativa de tempo, custo e impacto ambiental nas rotas inter-ilhas Baleares."
        />
        <MarketComparison />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge="Estimativa de Preço"
          title="Viabilidade Económica"
          subtitle="Preço por passageiro calculado para cobrir custos operacionais com margem de lucro de 50%."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">Custo Operacional por Voo</h3>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { label: "Energia (71,66 kWh × tarifa H₂/elétrica)", value: "~€42" },
                { label: "Manutenção (amortizada por voo)", value: "~€45" },
                { label: "Seguro e regulação", value: "~€18" },
                { label: "Operações & handling", value: "~€15" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-zinc-300 font-mono font-bold">{item.value}</span>
                </div>
              ))}
              <div className="border-t border-zinc-800 pt-3 mt-1 flex justify-between">
                <span className="font-bold text-zinc-300">Total por voo (6 pax)</span>
                <span className="font-black text-emerald-400 font-mono">~€120</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h3 className="text-sm font-bold text-emerald-400/70 uppercase tracking-widest mb-6">Preço por Passageiro</h3>
            <div className="text-5xl font-black text-emerald-400 mb-2">≈€136</div>
            <p className="text-zinc-400 text-sm mb-4">por passageiro · com margem de 50%</p>
            <ul className="flex flex-col gap-2 text-xs text-zinc-500">
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Competitivo vs. helicóptero (€1.800+)</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Premium justificado pela velocidade</li>
              <li className="flex gap-2"><span className="text-emerald-500">✓</span> Inclui zero emissões diretas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
