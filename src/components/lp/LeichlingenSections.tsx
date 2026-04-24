"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EyeOff, ShieldOff, Gauge, MousePointerClick, Target, Search, Smartphone, Brain, Phone, Palette, Rocket, Headset, ChevronDown, TrendingUp, Clock, ArrowRight, MapPin, Star, UserCheck, Zap, BarChart3, Layout, Globe, Users2 } from "lucide-react";
import Link from "next/link";
import { PHONE_URL } from "@/lib/utils";
import Image from "next/image";

/* ── Problem Section: Why websites fail in Leichlingen ── */
export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <EyeOff size={15} className="text-red-600" />
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Die Realität</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
              Warum die meisten Websites in Leichlingen <span className="text-red-600 underline decoration-red-200 decoration-4 underline-offset-8">unter ihren Möglichkeiten</span> bleiben.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Vielleicht kennst du das: Du hast eine Website, aber die Anfragen über das Kontaktformular bleiben aus. Oder schlimmer noch: Du wirst bei Google gar nicht erst gefunden, wenn potenzielle Kunden nach „Webdesign in Leichlingen“ suchen.
              </p>
              <p>
                Im Jahr 2026 ist die Aufmerksamkeitsspanne kürzer denn je. Wenn deine Seite zu langsam lädt oder keine klare Handlungsaufforderung bietet, verlierst du Kunden an die Konkurrenz in Langenfeld oder Leverkusen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Zu langsam", text: "Besucher springen ab, bevor die Seite geladen ist." },
              { icon: Search, title: "Unsichtbar", text: "Keine Platzierung bei relevanten lokalen Suchen." },
              { icon: Smartphone, title: "Nicht mobil", text: "Schlechte Darstellung auf Handys schreckt Kunden ab." },
              { icon: MousePointerClick, title: "Keine Führung", text: "Besucher wissen nicht, was sie als Nächstes tun sollen." },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                  <item.icon size={24} className="text-slate-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Solution Section: The Funnel Approach ── */
export function SolutionSection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Die Lösung</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8">
            Der Funnel-Ansatz – Webdesign mit <span className="text-accent">psychologischer Tiefe.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Mein Ansatz für Webdesign in Leichlingen geht weit über das Visuelle hinaus. Ich kombiniere modernes Design mit Verkaufspsychologie und modernster Technik.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              icon: Target, 
              title: "Anziehung", 
              desc: "Zuerst ziehen wir durch präzises lokales SEO genau die Menschen an, die in Leichlingen nach deiner Expertise suchen." 
            },
            { 
              icon: Brain, 
              title: "Überzeugung", 
              desc: "Sobald sie auf deiner Seite landen, sorgt ein klarer Informationsaufbau dafür, dass ihre spezifischen Probleme adressiert werden." 
            },
            { 
              icon: Zap, 
              title: "Abschluss", 
              desc: "Durch strategische Nutzerführung führen wir den Kunden sanft zum Ziel – sei es ein Anruf, eine Buchung oder eine Anfrage." 
            }
          ].map((item, i) => (
            <div key={item.title} className="relative group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-8 right-8 text-6xl font-black text-slate-200/50 group-hover:text-accent/10 transition-colors">0{i+1}</div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={PHONE_URL} className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all group">
            Jetzt Strategiegespräch anfragen
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── About Section: Personal Local Partner ── */
export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#3b82f6,transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl border border-white/10">
              <Image src="/images/timm-portrait.jpeg" alt="Timm Schurig – Dein Partner für Webdesign in Leichlingen" fill className="object-cover transition-all duration-700" priority={true} sizes="(max-width: 768px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl shadow-2xl rotate-3 hidden md:block">
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest font-black mb-1 opacity-80">Erfahrung</p>
                <p className="text-3xl font-black">5+ Jahre</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <UserCheck size={14} /> Dein Partner vor Ort
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight mb-8">
              Kurz zu mir: Dein Partner für <span className="text-accent">digitalen Erfolg</span> in der Region.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12">
              <p>
                Ich bin dein Experte für digitales Wachstum direkt aus der Region. Für mich ist Webdesign in Leichlingen eine Herzensangelegenheit, denn ich kenne den lokalen Markt und die Bedürfnisse der mittelständischen Unternehmen hier genau.
              </p>
              <p>
                Statt anonymem Agentur-Flair bekommst du bei mir eine persönliche Beratung auf Augenhöhe. Ich verstehe mich nicht nur als dein Designer, sondern als dein strategischer Partner. Gemeinsam gestalten wir die digitale Landschaft in Leichlingen aktiv mit.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href={PHONE_URL} className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all group">
                Lass uns sprechen
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full px-8 h-14 text-lg font-semibold border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all">
                Ergebnisse sehen
              </a>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Lokale Expertise", value: "Leichlingen & Umland" },
                { label: "Fokus", value: "Performance Funnels" },
              ].map(item => (
                <div key={item.label} className="border-l-2 border-accent pl-6 py-2">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Steps Section: The Process ── */
const steps = [
  { 
    title: "Die Analyse-Phase", 
    desc: "Wir setzen uns zusammen (gerne auch persönlich in Leichlingen) und besprechen deine Ziele. Wer ist dein Idealkunde? Was soll die Website primär erreichen?",
    icon: BarChart3
  },
  { 
    title: "Die Funnel-Strategie", 
    desc: "Ich entwerfe die Struktur. Wir legen fest, welche Inhalte der Besucher sehen muss, um überzeugt zu werden. Inklusive lokaler SEO-Planung.",
    icon: Target
  },
  { 
    title: "Kreative Umsetzung", 
    desc: "Jetzt entsteht das Design. Modern, schnell und natürlich „Mobile First“ optimiert. Du erhältst regelmäßige Updates zum Stand der Dinge.",
    icon: Palette
  },
  { 
    title: "Technisches SEO-Finish", 
    desc: "Ich optimiere die Seite für Suchmaschinen, damit du in Leichlingen ganz oben landest. Schnelle Ladezeiten sind hier Pflicht.",
    icon: Search
  },
  { 
    title: "Launch & Optimierung", 
    desc: "Nach deiner Abnahme geht die Seite live. Ich überwache die ersten Ergebnisse und stelle sicher, dass der Funnel perfekt funktioniert.",
    icon: Rocket
  }
];

export function StepsSection() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Der Ablauf</p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Dein Weg zur neuen <span className="text-accent">Performance-Website.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.title} className="group relative flex flex-col md:flex-row gap-8 items-start p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                <step.icon size={28} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent font-black font-display text-lg">0{i+1}</span>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio Preview Section ── */
export function PortfolioSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Beispiel-Seiten</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
              Sichtbare Ergebnisse <span className="text-accent">aus der Praxis.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            In meinem Portfolio findest du eine Vielzahl an Projekten, die zeigen, was modernes Webdesign in Leichlingen bewirken kann.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Zahnarztpraxis", type: "Funnel & Buchung", stat: "Anfragen verdoppelt", icon: Zap },
            { title: "Industriebetrieb", type: "SEO & Recruiting", stat: "Konstante Fachkraft-Anfragen", icon: Users2 }
          ].map((item, i) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[2.5rem] aspect-video bg-slate-900 border border-slate-800">
              <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-accent/40 to-blue-600/40" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">{item.type}</p>
                <h3 className="text-3xl font-display font-extrabold text-white mb-4">{item.title}</h3>
                <div className="flex items-center gap-2 text-white/80 font-bold bg-white/10 backdrop-blur-md self-start px-4 py-2 rounded-full border border-white/10">
                  <TrendingUp size={16} className="text-accent" /> {item.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/ergebnisse" className="inline-flex items-center justify-center rounded-full px-8 h-14 text-lg font-semibold border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 hover:border-accent hover:text-accent transition-all">
            Alle Projekte ansehen
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">
          Starte jetzt dein <span className="text-accent">digitales Upgrade!</span>
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Lass uns gemeinsam dafür sorgen, dass dein Webdesign in Leichlingen zum echten Wettbewerbsvorteil wird.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a href={PHONE_URL} className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-16 md:h-20 text-xl md:text-2xl font-black w-full max-w-lg shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-all group">
            Jetzt Projekt anfragen <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
          </a>
          <p className="text-slate-400 font-bold flex items-center gap-2">
            <Clock size={18} className="text-accent" /> Kostenlos & unverbindlich
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
const faqs = [
  { 
    q: "Was unterscheidet einen Funnel von einer normalen Website?", 
    a: "Eine normale Website ist oft ein reines Informationsarchiv. Ein Funnel hingegen ist ein geführter Prozess. Er ist darauf optimiert, den Besucher zu einer bestimmten Handlung zu bewegen. Das erhöht die Conversion-Rate (Anfragenquote) im Vergleich zu herkömmlichen Seiten drastisch." 
  },
  { 
    q: "Wie wichtig ist lokales SEO für mein Unternehmen in Leichlingen?", 
    a: "Extrem wichtig! Wenn jemand nach „Webdesign in Leichlingen“ oder deiner Dienstleistung sucht, entscheidet oft die Platzierung unter den ersten drei Ergebnissen über den Auftrag. Ich sorge dafür, dass du lokal gefunden wirst." 
  },
  { 
    q: "Kann ich die Inhalte meiner Website später selbst ändern?", 
    a: "Natürlich. Ich baue deine Seite auf einem benutzerfreundlichen System auf, mit dem du Texte und Bilder ganz einfach selbst pflegen kannst, ohne programmieren zu lernen. Eine Einweisung von mir ist immer inklusive." 
  },
  { 
    q: "Was passiert, wenn sich SEO-Trends im Jahr 2026 ändern?", 
    a: "Die digitale Welt ist im stetigen Wandel. Deshalb sind meine Seiten so konzipiert, dass sie flexibel an neue Algorithmen angepasst werden können. Zudem biete ich laufende Betreuung an, um deine Rankings langfristig zu sichern." 
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 leading-tight">Alles, was du über Webdesign in Leichlingen <span className="text-accent">wissen musst.</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-8 py-7 text-left group" aria-expanded={open === i}>
                <span className="font-bold text-slate-900 text-lg pr-6 group-hover:text-accent transition-colors">{f.q}</span>
                <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-accent border-accent text-white" : "text-slate-400 group-hover:border-accent group-hover:text-accent"}`}>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-slate-600 px-8 pb-8 leading-relaxed text-lg">{f.a}</p>
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
