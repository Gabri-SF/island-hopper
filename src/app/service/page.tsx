"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import RouteMap from "@/components/sections/service/RouteMap";
import MarketComparison from "@/components/sections/service/MarketComparison";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

export default function ServicePage() {
  const { language } = useLanguage();
  const dict = dictionaries[language].service;

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

      {/* Target Market Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge={dict.market.header.badge}
          title={dict.market.header.title}
          subtitle={dict.market.header.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {dict.market.stats.map((s) => (
            <div key={s.label} className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all">
              <div className="text-2xl font-black text-emerald-400 mb-1">{s.value}</div>
              <div className="text-sm font-bold text-zinc-200 mb-1">{s.label}</div>
              <div className="text-xs text-zinc-500">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Routes Section */}
      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge={dict.routes.header.badge}
            title={dict.routes.header.title}
            subtitle={dict.routes.header.subtitle}
          />
          <RouteMap />
        </div>
      </section>

      {/* Conops Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge={dict.conops.header.badge}
          title={dict.conops.header.title}
          subtitle={dict.conops.header.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {dict.conops.conditions.map((item) => (
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
          badge={dict.comparison.header.badge}
          title={dict.comparison.header.title}
          subtitle={dict.comparison.header.subtitle}
        />
        <MarketComparison />
      </section>

      {/* Economics Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge={dict.economics.header.badge}
          title={dict.economics.header.title}
          subtitle={dict.economics.header.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
              {dict.economics.costBreakdown.title}
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              {dict.economics.costBreakdown.items.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-zinc-300 font-mono font-bold">{item.value}</span>
                </div>
              ))}
              <div className="border-t border-zinc-800 pt-3 mt-1 flex justify-between">
                <span className="font-bold text-zinc-300">{dict.economics.costBreakdown.total.label}</span>
                <span className="font-black text-emerald-400 font-mono">{dict.economics.costBreakdown.total.value}</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h3 className="text-sm font-bold text-emerald-400/70 uppercase tracking-widest mb-6">
              {dict.economics.pricing.title}
            </h3>
            <div className="text-5xl font-black text-emerald-400 mb-2">{dict.economics.pricing.price}</div>
            <p className="text-zinc-400 text-sm mb-4">{dict.economics.pricing.subtitle}</p>
            <ul className="flex flex-col gap-2 text-xs text-zinc-500">
              {dict.economics.pricing.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-emerald-500">✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}