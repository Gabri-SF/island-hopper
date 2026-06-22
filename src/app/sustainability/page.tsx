"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import EmissionsCalculator from "@/components/sections/sustainability/EmissionsCalculator";
import NoiseProfile from "@/components/sections/sustainability/NoiseProfile";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

export default function SustainabilityPage() {
  const { language } = useLanguage();
  const dict = dictionaries[language].sustainability;

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="success">{dict.hero.badge}</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          {dict.hero.title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          {dict.hero.description}
        </p>
      </section>

      {/* Environmental Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge={dict.mission.header.badge}
          title={dict.mission.header.title}
          subtitle={dict.mission.header.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {dict.mission.stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
              <div className="text-4xl font-black text-emerald-400 mb-2">{stat.value}</div>
              <div className="font-bold text-zinc-200 text-sm mb-1">{stat.label}</div>
              <p className="text-zinc-500 text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LCA Analysis Section */}
      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge={dict.lca.badge}
            title={dict.lca.title}
            subtitle={dict.lca.subtitle}
          />
          <EmissionsCalculator />
        </div>
      </section>

      {/* Noise Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge={dict.noise.badge}
          title={dict.noise.title}
          subtitle={dict.noise.subtitle}
        />
        <NoiseProfile />
      </section>

      {/* Future Vision Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge={dict.future.header.badge}
          title={dict.future.header.title}
          subtitle={dict.future.header.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {/* Horizon Column */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">{dict.future.horizon.title}</h3>
            <ul className="flex flex-col gap-3">
              {dict.future.horizon.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Regional Impact Column */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-lg font-bold text-zinc-100 mb-4">{dict.future.regional.title}</h3>
            <ul className="flex flex-col gap-3">
              {dict.future.regional.items.map((item) => (
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