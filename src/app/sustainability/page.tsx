import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import EmissionsCalculator from "@/components/sections/sustainability/EmissionsCalculator";
import NoiseProfile from "@/components/sections/sustainability/NoiseProfile";

export default function SustainabilityPage() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="success">Impacto Ambiental</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          Sustentabilidade
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          O Island Hopper foi concebido com sustentabilidade no centro do design — zero emissões
          diretas em voo, emissões de ciclo de vida drasticamente inferiores ao avião convencional,
          e uma assinatura sonora compatível com operações urbanas.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge="Missão Ambiental"
          title="Zero Emissões Diretas em Voo"
          subtitle="A propulsão híbrida garante zero emissões de CO₂, NOx e partículas durante toda a operação."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
            <div className="text-4xl font-black text-emerald-400 mb-2">0 g</div>
            <div className="font-bold text-zinc-200 text-sm mb-1">CO₂ Direto em Voo</div>
            <p className="text-zinc-500 text-xs">Propulsão elétrica pura — sem combustão</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
            <div className="text-4xl font-black text-emerald-400 mb-2">0 g</div>
            <div className="font-bold text-zinc-200 text-sm mb-1">NOx / Partículas</div>
            <p className="text-zinc-500 text-xs">Sem emissões poluentes locais</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
            <div className="text-4xl font-black text-emerald-400 mb-2">15 kg</div>
            <div className="font-bold text-zinc-200 text-sm mb-1">CO₂-eq / Voo (LCA)</div>
            <p className="text-zinc-500 text-xs">Com H₂ verde · vs. 126 kg avião</p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge="Análise LCA"
            title="Calculadora de Emissões de Ciclo de Vida"
            subtitle="Compare o impacto de carbono do Island Hopper com H₂ verde versus H₂ cinzento e transportes convencionais."
          />
          <EmissionsCalculator />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge="Ruído"
          title="Perfil Acústico"
          subtitle="Os ducted fans reduzem o ruído em 8–10 dB comparado a rotores abertos equivalentes."
        />
        <NoiseProfile />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge="Visão Futura"
          title="Caminho para a Descarbonização Total"
          subtitle="A viabilidade ambiental do Island Hopper melhora com a expansão das redes de H₂ verde e energias renováveis."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">Horizonte 2030</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Expansão da rede de produção de H₂ verde nas Baleares",
                "Integração com grid renovável (solar + eólica offshore)",
                "Certificação EASA para operações comerciais UAM",
                "Redução do custo do H₂ verde para <€3/kg",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">Impacto Regional</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Substituição gradual das rotas de ferry de curta distância",
                "Redução do tráfego aéreo convencional inter-ilhas",
                "Preservação da biodiversidade marinha e terrestre",
                "Modelo replicável para outros arquipélagos europeus",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-cyan-500 flex-shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
