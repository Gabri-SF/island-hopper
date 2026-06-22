"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import ArchitectureComparison from "@/components/sections/concept/ArchitectureComparison";
import AHPExplorer from "@/components/sections/concept/AHPExplorer";
import AircraftSpecs from "@/components/sections/concept/AircraftSpecs";
import PropulsionSystem from "@/components/sections/concept/PropulsionSystem";
import PowertrainDiagram from "@/components/sections/concept/PowertrainDiagram";
import MissionProfile from "@/components/sections/concept/MissionProfile";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

export default function ConceptPage() {
  const { language } = useLanguage();
  const dict = dictionaries[language].concept;

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="info">{dict.hero.badge}</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          {dict.hero.titleP1}{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {dict.hero.titleP2}
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          {dict.hero.description}
        </p>
      </section>

      {/* Architectures Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge={dict.architectures.badge}
          title={dict.architectures.title}
          subtitle={dict.architectures.subtitle}
        />
        <ArchitectureComparison />
      </section>

      {/* AHP Section */}
      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge={dict.ahp.badge}
            title={dict.ahp.title}
            subtitle={dict.ahp.subtitle}
          />
          <AHPExplorer />
        </div>
      </section>

      {/* Specs Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge={dict.specs.badge}
          title={dict.specs.title}
          subtitle={dict.specs.subtitle}
        />
        <AircraftSpecs />
      </section>

      {/* Propulsion Section */}
      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge={dict.propulsion.badge}
            title={dict.propulsion.title}
            subtitle={dict.propulsion.subtitle}
          />
          <PropulsionSystem />
        </div>
      </section>

      {/* Powertrain Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge={dict.powertrain.badge}
          title={dict.powertrain.title}
          subtitle={dict.powertrain.subtitle}
        />
        <PowertrainDiagram />
      </section>

      {/* Mission Profile Section */}
      <section className="bg-zinc-900/20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16 pb-24">
          <SectionHeader
            badge={dict.mission.badge}
            title={dict.mission.title}
            subtitle={dict.mission.subtitle}
          />
          <MissionProfile />
        </div>
      </section>
    </div>
  );
}