import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import ArchitectureComparison from "@/components/sections/concept/ArchitectureComparison";
import AHPExplorer from "@/components/sections/concept/AHPExplorer";
import AircraftSpecs from "@/components/sections/concept/AircraftSpecs";
import PropulsionSystem from "@/components/sections/concept/PropulsionSystem";
import PowertrainDiagram from "@/components/sections/concept/PowertrainDiagram";
import MissionProfile from "@/components/sections/concept/MissionProfile";

export default function ConceptPage() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="info">Engenharia Técnica</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          O{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Conceito
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          Do processo de seleção de arquitetura via AHP até ao dimensionamento completo do
          "Mega-Duct" — a aeronave Tilt-Duct com 6 motores distribuídos e propulsão híbrida
          Li-S + PEMFC H₂.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge="Arquiteturas"
          title="As 4 Configurações Estudadas"
          subtitle="Analisámos quatro arquiteturas distintas de eVTOL antes de selecionar o Tilt-Duct como arquitetura vencedora."
        />
        <ArchitectureComparison />
      </section>

      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge="AHP"
            title="Seleção por Analytic Hierarchy Process"
            subtitle="9 critérios ponderados por stakeholders: autonomia, velocidade, estabilidade, ruído, emissões, custos e manutenção."
          />
          <AHPExplorer />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge="Especificações"
          title="Dimensionamento do Mega-Duct"
          subtitle="Parâmetros técnicos chave do Island Hopper: geometria da asa, propulsão, desempenho e balanço de massa."
        />
        <AircraftSpecs />
      </section>

      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge="Propulsão"
            title="Sistema de Propulsão Híbrido"
            subtitle="Combinação inovadora de bateria Li-S para VTOL e célula de combustível PEMFC H₂ para cruzeiro."
          />
          <PropulsionSystem />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge="Arquitetura de Powertrain"
          title="Vista Superior — Sistema de Propulsão"
          subtitle="Distribuição dos componentes de potência na fuselagem e fiação de alta tensão para os 6 motores EMRAX 348."
        />
        <PowertrainDiagram />
      </section>

      <section className="bg-zinc-900/20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <SectionHeader
          badge="Perfil de Missão"
          title="As 7 Fases de Voo"
          subtitle="Da descolagem vertical em Ibiza até à aterragem em Palma de Mallorca — 140 km em ~34 minutos."
        />
        <MissionProfile />
        </div>
      </section>
    </div>
  );
}
