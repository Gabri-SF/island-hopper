import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import TeamGrid from "@/components/sections/project/TeamGrid";
import ReportDownload from "@/components/sections/project/ReportDownload";

export default function ProjectPage() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="success">IST 2026 · Grupo 11</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          O Projeto{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Island Hopper
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          Projeto Integrado de 1.º Ciclo em Engenharia Aeroespacial no Instituto Superior Técnico,
          Universidade de Lisboa. Concebemos e dimensionamos um eVTOL inter-ilhas com arquitetura
          Tilt-Duct para servir as Ilhas Baleares.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge="Motivação"
          title="Porquê as Baleares?"
          subtitle="As ilhas Baleares enfrentam desafios únicos de mobilidade que a aviação tradicional não resolve de forma sustentável."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              value: "1,26M",
              label: "Residentes",
              desc: "Mais de 1,26 milhões de residentes dependem das ligações inter-ilhas para trabalho, saúde e mobilidade quotidiana.",
            },
            {
              value: "19M",
              label: "Turistas/Ano",
              desc: "Em 2025, as Baleares receberam cerca de 19 milhões de turistas, criando uma procura massiva de transporte premium inter-ilhas.",
            },
            {
              value: "0g",
              label: "CO₂ em Voo",
              desc: "O Island Hopper opera com zero emissões diretas de carbono, essencial para proteger o ecossistema Mediterrânico.",
            },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all">
              <div className="text-3xl font-black text-emerald-400 mb-1">{stat.value}</div>
              <div className="font-bold text-zinc-200 text-sm mb-3">{stat.label}</div>
              <p className="text-zinc-500 text-xs leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge="Objetivos"
            title="O Que Queremos Alcançar"
            subtitle="Três objetivos fundamentais guiam todo o processo de design e engenharia do Island Hopper."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Eletrificação Total",
                desc: "Desenvolver uma aeronave de propulsão 100% elétrica, eliminando dependência de combustíveis fósseis e reduzindo custos operacionais.",
              },
              {
                num: "02",
                title: "Alternativa Limpa aos Ferries",
                desc: "Oferecer uma solução 5× mais rápida que os ferries convencionais, com menor impacto ambiental e custos competitivos.",
              },
              {
                num: "03",
                title: "Zero Emissões Diretas",
                desc: "Garantir operações com zero emissões diretas de CO₂ em voo, utilizando hidrogénio verde e baterias Li-S de nova geração.",
              },
            ].map((obj) => (
              <div key={obj.num} className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-sm mb-6">
                  {obj.num}
                </div>
                <h3 className="font-bold text-zinc-100 text-lg mb-3">{obj.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge="Contexto Académico"
          title="Instituto Superior Técnico"
          subtitle="Projeto desenvolvido no âmbito da unidade curricular de Projeto Integrado de 1.º Ciclo em Engenharia Aeroespacial."
        />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-3">Unidade Curricular</span>
            <p className="font-bold text-zinc-200">Projeto Integrado de 1.º Ciclo</p>
            <p className="text-zinc-500 text-sm mt-1">Engenharia Aeroespacial · IST</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-3">Ano Letivo</span>
            <p className="font-bold text-zinc-200">2025/2026</p>
            <p className="text-zinc-500 text-sm mt-1">Junho 2026 · Grupo 11</p>
          </div>
        </div>
        <TeamGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge="Relatório"
          title="Download do Relatório Técnico"
          subtitle="96 páginas de engenharia aeroespacial, com dimensionamento, simulações e análise de viabilidade."
        />
        <ReportDownload />
      </section>
    </div>
  );
}
