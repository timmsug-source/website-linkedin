import {
  ArrowRight,
  Globe,
  Search,
  MapPin,
  MessageCircle,
  Zap,
  TrendingUp,
  Eye,
  AlertCircle,
} from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/utils";
import { HeroForm } from "./HeroForm";

// ─── Data ────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: TrendingUp,
    title: "Viel Lärm, kein Ertrag",
    description:
      "Du postest regelmäßig, bekommst Applaus – aber keine Buchungen. Likes zahlen keine Rechnungen.",
  },
  {
    icon: AlertCircle,
    title: "Die Sackgasse",
    description:
      "Interessenten klicken auf dein Profil, landen auf einer veralteten Website oder gar keiner – und springen sofort wieder ab.",
  },
  {
    icon: Eye,
    title: "Unsichtbar bei der Suche",
    description:
      "Wenn jemand nach deiner Lösung googelt, findet er deine Konkurrenz, aber nicht dich. Google kennt dich nicht.",
  },
];

const solutions = [
  {
    icon: Globe,
    tag: "Website",
    title: "Conversion-Websites",
    description:
      "Deine Website ist kein digitales Visitenkarten-Museum. Wir bauen einen Funnel, der Besucher psychologisch führt und genau eine Handlung provoziert: Die Anfrage.",
    accent: "border-blue-500/30 hover:border-blue-400/50",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Search,
    tag: "SEO",
    title: "SEO-Strategie",
    description:
      "LinkedIn ist nur ein Kanal. Wir sorgen dafür, dass dein Expertenstatus auch bei Google zementiert wird – damit du passiv Leads generierst, auch wenn du mal nicht postest.",
    accent: "border-emerald-500/30 hover:border-emerald-400/50",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: MapPin,
    tag: "GEO",
    title: "GEO-Optimierung",
    description:
      "Gerade für lokale oder regional spezifische Kunden ist GEO-Marketing der Hebel. Wir platzieren dich dort, wo Kunden in deiner Nähe nach deiner Expertise suchen.",
    accent: "border-orange-500/30 hover:border-orange-400/50",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Wir analysieren deinen aktuellen LinkedIn-Auftritt und deine Conversion-Sackgassen. Keine Floskeln – klare Diagnose.",
  },
  {
    number: "02",
    title: "Transformation",
    description:
      "Ich baue deine Website und optimiere deine SEO/GEO-Präsenz für maximale Sichtbarkeit. Handwerk statt Baukasten.",
  },
  {
    number: "03",
    title: "Monetarisierung",
    description:
      "Wir schalten die Verbindung zwischen LinkedIn und deiner Website scharf. Deine Interaktionen werden zu Terminen.",
  },
];

const stats = [
  { stat: "100%", label: "PageSpeed Score" },
  { stat: "< 24h", label: "Antwortzeit" },
  { stat: "3-in-1", label: "Website + SEO + GEO" },
];

// ─── Page (Server Component) ─────────────────────────────────────────────────

export default function LinkedInLP() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
                <Zap size={12} /> LinkedIn × Website × SEO
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] mb-7">
                Mach aus deinen LinkedIn-Likes{" "}
                <span className="text-accent">endlich echte Anfragen.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                Du investierst Stunden in Content und Interaktionen, aber dein
                Postfach bleibt leer? Wir bauen das digitale Fundament, das
                deine Reichweite in messbare Leads verwandelt – durch
                Conversion-Websites und gezieltes SEO&nbsp;&amp;&nbsp;GEO.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
              >
                <MessageCircle size={20} /> Melde dich auf WhatsApp
              </a>
              <p className="text-slate-500 text-sm mt-4">
                Kostenlos &amp; unverbindlich · Antwort innerhalb von 2 Stunden
              </p>
            </div>

            {/* Right – Client Form */}
            <HeroForm />
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Das Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              Die Reichweiten-Falle:{" "}
              <span className="text-slate-400">
                Warum dein Content bisher nicht verkauft.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group bg-slate-800 border border-slate-700 hover:border-accent/30 rounded-3xl p-8 transition-[border-color,box-shadow] hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-3">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. LÖSUNG ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Die Lösung
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              Dein LinkedIn-Erfolg braucht{" "}
              <span className="text-accent">
                ein Zuhause, das konvertiert.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`group bg-slate-800/80 border ${s.accent} rounded-3xl p-8 transition-[border-color,box-shadow] hover:shadow-xl`}
                >
                  <div className="inline-flex items-center gap-2 bg-slate-700 rounded-full px-3 py-1 text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
                    <Icon size={11} className={s.iconBg.split(" ")[1]} />
                    {s.tag}
                  </div>
                  <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-4">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PROZESS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Wie wir zusammenarbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              In 3 Schritten zur{" "}
              <span className="text-accent">Lead-Maschine.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-accent/30 to-accent/10" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-slate-800 border-2 border-accent/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent font-black text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VISION / ERGEBNIS ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
            Das Ergebnis
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-10">
            Schluss mit{" "}
            <span className="text-slate-500">Hoffnungs-Marketing.</span>
          </h2>

          <div className="relative bg-slate-800 border border-slate-700 rounded-[2rem] p-10 md:p-14 text-left overflow-hidden mb-12">
            <div className="absolute top-4 right-8 text-8xl font-serif text-accent/10 leading-none select-none" aria-hidden="true">
              "
            </div>
            <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-medium relative z-10">
              Stell dir vor, du wachst auf und hast{" "}
              <span className="text-white font-bold">
                Anfragen im Postfach
              </span>{" "}
              von Leuten, die deinen Content gesehen haben{" "}
              <span className="text-accent font-bold">und</span> durch deine
              Website davon überzeugt wurden, dass du die einzige logische
              Lösung für ihr Problem bist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-2xl py-6 px-4"
              >
                <p className="text-3xl font-black text-accent mb-1">
                  {item.stat}
                </p>
                <p className="text-slate-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINALER CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
            Bereit?
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            Bereit, das Spiel{" "}
            <span className="text-accent">umzudrehen?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Hör auf, Zeit in Reichweite zu investieren, die sich nicht
            auszahlt. Lass uns deine Maschine bauen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
            >
              Kostenloses Erstgespräch buchen <ArrowRight size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 border border-slate-600 hover:border-accent/60 text-slate-300 hover:text-white rounded-full px-8 py-4 font-semibold text-base transition-all"
            >
              <MessageCircle size={18} /> WhatsApp schreiben
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-8">
            Kein Risiko. Kein Vertrag. Nur ein ehrliches Gespräch.
          </p>
        </div>
      </section>
    </div>
  );
}
