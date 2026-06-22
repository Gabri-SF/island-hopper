"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import TeamGrid from "@/components/sections/project/TeamGrid";
import ReportDownload from "@/components/sections/project/ReportDownload";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

export default function ProjectPage() {
  const { language } = useLanguage();
  const dict = dictionaries[language].project;

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="success">{dict.hero.badge}</Badge>
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

      {/* Motivation Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <SectionHeader
          badge={dict.motivation.header.badge}
          title={dict.motivation.header.title}
          subtitle={dict.motivation.header.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {dict.motivation.stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/30 transition-all">
              <div className="text-3xl font-black text-emerald-400 mb-1">{stat.value}</div>
              <div className="font-bold text-zinc-200 text-sm mb-3">{stat.label}</div>
              <p className="text-zinc-500 text-xs leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-zinc-900/20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            badge={dict.objectives.header.badge}
            title={dict.objectives.header.title}
            subtitle={dict.objectives.header.subtitle}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {dict.objectives.items.map((obj) => (
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

      {/* Academic Context Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader
          badge={dict.context.header.badge}
          title={dict.context.header.title}
          subtitle={dict.context.header.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-3">
              {dict.context.course.label}
            </span>
            <p className="font-bold text-zinc-200">{dict.context.course.title}</p>
            <p className="text-zinc-500 text-sm mt-1">{dict.context.course.subtitle}</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <span className="block text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-3">
              {dict.context.year.label}
            </span>
            <p className="font-bold text-zinc-200">{dict.context.year.title}</p>
            <p className="text-zinc-500 text-sm mt-1">{dict.context.year.subtitle}</p>
          </div>
        </div>
        <TeamGrid />
      </section>

      {/* Report Download Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeader
          badge={dict.report.header.badge}
          title={dict.report.header.title}
          subtitle={dict.report.header.subtitle}
        />
        <ReportDownload />
      </section>
    </div>
  );
}