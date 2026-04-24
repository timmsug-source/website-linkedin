"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EyeOff, ShieldOff, Gauge, MousePointerClick, Target, Search, Smartphone, Brain, Phone, Palette, Rocket, Headset, ChevronDown, TrendingUp, Clock, ArrowRight, MapPin, Star } from "lucide-react";
import { PHONE_URL } from "@/lib/utils";
import Image from "next/image";

/* ── Problem Section ── */
const problems = [
  { icon: EyeOff, title: "Unsichtbarkeit", text: "Du wirst bei Suchen nach Dienstleistung + Leichlingen nicht gefunden." },
  { icon: ShieldOff, title: "Vertrauensverlust", text: "Veraltetes Design schreckt potenzielle Kunden ab." },
  { icon: Gauge, title: "Ladezeiten", text: "Deine Seite ist langsamer als der Feierabendverkehr auf der L294." },
  { icon: MousePointerClick, title: "Keine Strategie", text: "Besucher kommen auf die Seite, verlassen sie aber ohne Handlung." },
];

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <EyeOff size={15} className="text-red-400" />
            <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Das Problem</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-5">
            Warum Deine Website aktuell <span className="text-red-500">Geld kostet</span>, statt welches zu verdienen.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Viele Unternehmen in der Blütenstadt verlassen sich auf veraltete digitale Visitenkarten. Eine Website ohne klare Nutzerführung ist wie ein Ladenlokal in der Leichlinger Innenstadt ohne Eingangstür.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-red-500/30 transition-[border-color]">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-red-400" />
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Solution Section ── */
const solutions = [
  { icon: Target, n: "01", title: "Zielgruppenanalyse", text: "Wir sprechen genau die Sprache Deiner Kunden im Rheinisch-Bergischen Kreis.", gradient: "from-accent/20 to-accent/5" },
  { icon: Search, n: "02", title: "SEO & GEO-Targeting", text: "Durch lokale Optimierung dominierst du die Suchergebnisse in Leichlingen und Umgebung (Witzhelden, Burscheid, Langenfeld).", gradient: "from-blue-500/20 to-blue-500/5" },
  { icon: Smartphone, n: "03", title: "Mobile First", text: "Perfekte Darstellung auf allen Endgeräten - Standard im Jahr 2026.", gradient: "from-purple-500/20 to-purple-500/5" },
  { icon: Brain, n: "04", title: "Psychologische Nutzerführung", text: "Wir leiten den Besucher gezielt von der ersten Information bis zum Abschluss.", gradient: "from-amber-500/20 to-amber-500/5" },
];

export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Die Lösung</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
              Der Funnel-Ansatz &ndash; <span className="text-accent">Webdesign mit System.</span>
            </h2>
          </div>
          <div className="space-y-5 text-slate-600 leading-relaxed lg:pt-12">
            <p>Webdesign in Leichlingen bedeutet für mich nicht nur Ästhetik, sondern Konversions-Optimierung. Ich baue keine statischen Seiten, sondern automatisierte Verkaufs-Funnel, die Deine Zielgruppe abholen.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-7 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display font-extrabold text-4xl text-slate-200 group-hover:text-accent/20 transition-colors select-none">{s.n}</span>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Icon size={20} className="text-accent" /></div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Über mich">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image src="/images/timm-portrait.jpeg" alt="Timm Schurig - Webdesigner in Leichlingen" fill className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 lg:left-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><MapPin size={18} className="text-accent" /></div>
              <div><p className="text-xs text-slate-400 font-medium">Dein Partner</p><p className="font-bold text-slate-900 text-sm">Leichlingen &amp; Umgebung</p></div>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Kurz zu mir</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">Dein Partner <span className="text-accent">vor Ort.</span></h2>
            <div className="space-y-5 mb-10">
              <p className="text-lg text-slate-600 leading-relaxed">Hallo, ich bin Dein Experte für Webdesign in Leichlingen. Ich verbinde technisches Know-how mit lokalem Marktverständnis.</p>
              <p className="text-slate-600 leading-relaxed">Während andere Agenturen nur anonyme Nummern verwalten, schätze ich den persönlichen Austausch hier in der Region. Mein Ziel ist es, den Mittelstand in Leichlingen digital an die Spitze zu bringen - mit messbaren Ergebnissen statt leerer Floskeln.</p>
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              {[{ icon: Clock, label: "5+ Jahre Erfahrung" }, { icon: Star, label: "100% PageSpeed" }, { icon: MapPin, label: "Lokal & remote" }].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                  <Icon size={15} className="text-accent" />{label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Steps Section ── */
const steps = [
  { n: "01", icon: Phone, t: "Strategie-Call", d: "Wir analysieren Dein Business und Deine Ziele in Leichlingen." },
  { n: "02", icon: Target, t: "Konzept & Funnel-Plan", d: "Wir legen fest, wie wir Besucher zu Anfragen konvertieren." },
  { n: "03", icon: Palette, t: "Design & Entwicklung", d: "Ich erstelle ein modernes Design, das Deine Marke widerspiegelt." },
  { n: "04", icon: Rocket, t: "SEO-Turbo", d: "Wir optimieren alle Inhalte für maximale Sichtbarkeit bei Google." },
  { n: "05", icon: Headset, t: "Go-Live & Support", d: "Deine Seite geht online und ich bleibe Dein Ansprechpartner." },
];

export function StepsSection() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-10 overflow-hidden relative shadow-2xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Der Ablauf</p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">In 5 Schritten zu Deiner neuen Website</h2>
          <p className="text-slate-400">Transparent, effizient und immer an deiner Seite.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-12">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="flex gap-6 md:gap-10 items-start relative">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-accent text-white font-display font-black text-xl flex items-center justify-center shrink-0 shadow-xl shadow-accent/20">{s.n}</div>
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={18} className="text-accent" />
                      <h3 className="text-lg font-bold">{s.t}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md">{s.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Social Proof Section ── */
const cases = [
  { icon: TrendingUp, title: "Handwerksbetrieb", stat: "+40%", desc: "mehr Anfragen über das neue Kontaktformular." },
  { icon: Search, title: "Kanzlei", stat: "Top 1", desc: "Ranking für lokale Fachbegriffe in Leichlingen." },
  { icon: Clock, title: "Einzelhandel", stat: "5h/Woche", desc: "weniger Büroarbeit durch automatisierte Terminbuchung." },
];

export function SocialProofSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Ergebnisse</p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 leading-tight">Erfolgsgeschichten <span className="text-accent">aus der Region</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5"><Icon size={22} className="text-accent" /></div>
                <p className="text-3xl font-display font-extrabold text-accent mb-1">{c.stat}</p>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
export function CTASection() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
          Lass uns Dein Projekt in Leichlingen <span className="text-accent">starten!</span>
        </h2>
        <p className="text-xl text-slate-500 mb-4 max-w-xl mx-auto leading-relaxed">
          Bist Du bereit für eine Website, die wirklich für Dich arbeitet? Warte nicht, bis die Konkurrenz an Dir vorbeizieht.
        </p>
        <p className="text-slate-400 text-sm mb-10">Unverbindlich, kompetent und direkt aus der Nachbarschaft.</p>
        <div className="flex flex-col gap-4 items-center">
          <a href={PHONE_URL} className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-16 text-xl font-bold w-full max-w-md shadow-2xl shadow-accent/30 transition-all hover:scale-[1.02]">
            Jetzt Strategie-Check vereinbaren<ArrowRight className="ml-2" size={22} />
          </a>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium"><Clock size={16} /> Antwort in &lt; 2 Stunden</div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
const faqs = [
  { q: "Wie lange dauert die Erstellung einer Website?", a: "In der Regel steht Dein neues System innerhalb von 4 bis 6 Wochen, je nach Umfang und Zuarbeit." },
  { q: "Warum ist lokales SEO für Leichlingen so wichtig?", a: "Die meisten Menschen suchen heute nach Dienstleistung + Ort. Wenn wir Dein Webdesign in Leichlingen gezielt darauf ausrichten, landest Du genau vor den Augen der Leute, die jetzt bereit sind zu kaufen." },
  { q: "Betreust du die Website auch nach dem Launch?", a: "Ja, ich biete Wartungspakete an, damit Deine Seite sicher, schnell und technisch auf dem neuesten Stand bleibt - inklusive regelmäßiger SEO-Anpassungen." },
  { q: "Was kostet ein professionelles Webdesign?", a: "Jedes Projekt ist individuell. Nach unserem ersten Gespräch erhältst Du ein transparentes Festpreisangebot ohne versteckte Kosten." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">Häufige Fragen zum <span className="text-accent">Webdesign in Leichlingen</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-6 text-left" aria-expanded={open === i}>
                <span className="font-bold text-slate-900 pr-4">{f.q}</span>
                <ChevronDown size={20} className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-slate-600 px-6 pb-6 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
