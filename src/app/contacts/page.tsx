"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { teamMembers, supervisors } from "@/lib/data/team";
import { useLanguage } from "@/components/context/LanguageContext"; // Adjust path if needed
import { dictionaries } from "../../lib/data/dictionaries"; // Adjust path if needed

export default function ContactsPage() {
  const { language } = useLanguage();
  const dict = dictionaries[language].contacts;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const recipients = "gabrielsfaria@tecnico.ulisboa.pt,goncalo.pedra.bento.rodrigues@tecnico.ulisboa.pt";
    const body = `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <Badge variant="default">{dict.hero.badge}</Badge>
        <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-zinc-50">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {dict.hero.title}
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          {dict.hero.description}
        </p>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form Column */}
          <div>
            <SectionHeader
              badge={dict.form.header.badge}
              title={dict.form.header.title}
              center={false}
            />
            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{dict.form.success.title}</h3>
                <p className="text-zinc-400 text-sm">
                  {dict.form.success.description}
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 px-5 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-semibold hover:bg-zinc-700 transition-all"
                >
                  {dict.form.success.button}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-2">
                      {dict.form.labels.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder={dict.form.placeholders.name}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-2">
                      {dict.form.labels.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder={dict.form.placeholders.email}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-2">
                    {dict.form.labels.subject}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    placeholder={dict.form.placeholders.subject}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-2">
                    {dict.form.labels.message}
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={dict.form.placeholders.message}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm"
                >
                  {dict.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Team and Info Column */}
          <div className="flex flex-col gap-8">
            <div>
              <SectionHeader badge={dict.team.header.badge} title={dict.team.header.title} center={false} />
              <div className="grid grid-cols-2 gap-3">
                {teamMembers.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/20 transition-all"
                  >
                    <span className="block font-bold text-zinc-200 text-sm">{m.name}</span>
                    <span className="block text-[11px] text-zinc-500 font-mono mt-0.5">
                      {dict.team.numberPrefix} {m.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
                {dict.supervisors.title}
              </h3>
              <div className="flex flex-col gap-3">
                {supervisors.map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between"
                  >
                    <span className="font-bold text-zinc-200 text-sm">{s.name}</span>
                    <span className="text-xs text-emerald-500/80 font-semibold uppercase tracking-wide">
                      {dict.supervisors.roles[s.title as keyof typeof dict.supervisors.roles] || s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
                {dict.institution.title}
              </h3>
              <p className="font-bold text-zinc-200">{dict.institution.name}</p>
              <p className="text-zinc-500 text-sm mt-1">{dict.institution.university}</p>
              <p className="text-zinc-600 text-sm mt-1">{dict.institution.address}</p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/island-hopper/g11_report.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  <span>↓</span> {dict.institution.downloadBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}