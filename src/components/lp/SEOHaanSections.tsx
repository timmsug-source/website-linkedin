"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  SearchX, 
  EyeOff, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Quote,
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  Users,
  Compass,
  Sliders,
  ArrowRight,
  MessageCircle,
  Star,
  BarChart3,
  Search
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/utils";

export function SEOHaanHero() {
  const checklist = [
    <><strong>Top-Platzierungen:</strong> Werde gefunden, wenn Kunden in Haan nach deinem Angebot suchen.</>,
    <><strong>Lokale Dominanz:</strong> Setze dich gegen die Konkurrenz in Haan und Umgebung durch.</>,
    <><strong>Mehr qualifizierte Leads:</strong> Erhalte Anfragen von Kunden, die bereits kaufbereit sind.</>,
    <><strong>Nachhaltiger Erfolg:</strong> Baue dir eine digitale Präsenz auf, die langfristig für dich arbeitet.</>
  ];

  return (
    <section className="relative pt-32 lg:pt-40 pb-24 px-6 overflow-hidden bg-slate-900" aria-label="SEO Agentur Haan – Hero">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" />
              Deine SEO Agentur in Haan
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              SEO Agentur Haan: <span className="text-accent">Sichtbar werden.</span> Kunden gewinnen.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              Wir bringen dein Unternehmen in Haan und dem Kreis Mettmann auf die erste Seite bei Google. Strategisches SEO für messbares Wachstum und planbare Neukundenanfragen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
              >
                Jetzt Analyse sichern
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-lg font-semibold border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400 font-medium">
              Kostenlos & unverbindlich · SEO-Check für dein Business
            </p>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
              <div className="aspect-square relative">
                <Image
                  src="/images/seo_haan_hero_1777364289018.png"
                  alt="SEO Erfolg in Haan Visualisierung"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 z-10 hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingDown className="text-green-600 rotate-180" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">+145%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Sichtbarkeit</p>
                </div>
              </div>
            </div>

            <div className="absolute top-12 -right-6 bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/10 z-10 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Search size={18} className="text-white" />
                </div>
                <p className="text-sm font-bold text-white">Top 3 Ranking in Haan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SEOHaanProblem() {
  const problems = [
    {
      icon: SearchX,
      title: "Unsichtbarkeit bei Google",
      text: "Wenn Kunden in Haan nach deinem Service suchen, finden sie deine Mitbewerber, aber nicht dich."
    },
    {
      icon: EyeOff,
      title: "Geringe Klickraten",
      text: "Deine Website existiert zwar, aber sie zieht keine qualifizierten Besucher an, die wirklich kaufen wollen."
    },
    {
      icon: TrendingDown,
      title: "Teure Fehl-Investitionen",
      text: "Du schaltest Werbung, aber die Kosten pro Lead sind zu hoch, weil deine Seite nicht für Suchmaschinen optimiert ist."
    },
    {
      icon: AlertCircle,
      title: "Vertrauensverlust",
      text: "Wer bei Google nicht auf der ersten Seite steht, wird von vielen Kunden als weniger relevant wahrgenommen."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" aria-label="SEO Haan – Das Problem">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6">
              <AlertCircle size={14} /> Die Herausforderung
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              Gutes Angebot, aber <span className="text-red-600">keine Sichtbarkeit?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              In der heutigen digitalen Welt entscheidet die erste Seite bei Google über Erfolg oder Misserfolg. Wenn du in Haan nicht gefunden wirst, überlässt du den Markt kampflos deiner Konkurrenz. Ohne eine professionelle SEO-Strategie bleibt dein Unternehmen für potenzielle Neukunden unsichtbar.
            </p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-red-500 group-hover:bg-red-50 transition-all">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 blur-[80px] rounded-full opacity-50" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 aspect-square">
               <Image 
                src="/images/haan_problem_invisible_1777134076526.png"
                alt="Problem der Unsichtbarkeit in Haan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SEOHaanSolution() {
  const solutions = [
    {
      icon: MapPin,
      title: "Lokales SEO Haan",
      text: "Wir optimieren deinen Auftritt gezielt für die Region Haan, Hilden und Erkrath."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Approach",
      text: "Kein Raten, sondern klare Daten. Wir analysieren Suchvolumen und Wettbewerb präzise."
    },
    {
      icon: ShieldCheck,
      title: "Content Excellence",
      text: "Texte, die nicht nur Google gefallen, sondern auch deine Kunden von dir überzeugen."
    },
    {
      icon: Zap,
      title: "Technical SEO",
      text: "Blitzschnelle Ladezeiten und perfekte Technik als Basis für Top-Rankings."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white" aria-label="SEO Haan – Die Lösung">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full opacity-50" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-square">
              <Image 
                src="/images/haan_solution_growth_1777134777822.png"
                alt="SEO Lösung für Wachstum in Haan"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
              <CheckCircle2 size={14} /> Die Lösung
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              Deine Strategie für <span className="text-accent">digitale Marktführerschaft.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Als SEO Agentur für Haan entwickeln wir maßgeschneiderte Konzepte, die dich an die Spitze bringen. Wir setzen auf nachhaltige Strategien, die nicht nur für kurzfristige Klicks sorgen, sondern dein Unternehmen langfristig als Autorität in deiner Branche etablieren.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-slate-400 group-hover:text-accent group-hover:bg-accent/5 transition-all">
                    <s.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SEOHaanProcess() {
  const steps = [
    {
      icon: Search,
      title: "Keyword & Wettbewerb",
      text: "Wir finden heraus, wonach deine Kunden in Haan wirklich suchen und was deine Konkurrenz tut."
    },
    {
      icon: Sliders,
      title: "On-Page Optimierung",
      text: "Wir passen Technik, Struktur und Inhalte deiner Seite perfekt an die Anforderungen von Google an."
    },
    {
      icon: Users,
      title: "Autorität & Backlinks",
      text: "Wir stärken deine digitale Relevanz durch hochwertigen Linkaufbau und lokale Verweise."
    },
    {
      icon: BarChart3,
      title: "Reporting & Skalierung",
      text: "Wir überwachen den Erfolg und passen die Strategie laufend an, um deine Position zu festigen."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white" aria-label="SEO Haan – Der Ablauf">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Dein Weg zu Top-Rankings</h2>
          <p className="text-lg text-slate-400">Ein strukturierter Prozess für messbare Ergebnisse. Wir überlassen beim SEO nichts dem Zufall.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-accent/30 transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SEOHaanRegional() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" aria-label="SEO Haan – Regionaler Fokus">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-bold mb-6">
              <MapPin size={14} className="text-accent" /> Haan & Umgebung
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              Die Nr. 1 <span className="text-accent">in der Gartenstadt Haan</span> werden.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Haan ist ein dynamischer Wirtschaftsstandort. Doch wer lokal nicht gefunden wird, existiert für viele Kunden nicht mehr. Als deine SEO Agentur für Haan sorgen wir dafür, dass du nicht nur eine schöne Website hast, sondern dass diese Website auch neue Kunden generiert. Wir kennen die Besonderheiten des Marktes im Kreis Mettmann und nutzen dieses Wissen für deinen Erfolg.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-base">Lokale Vernetzung</h4>
                  <p className="text-sm text-slate-500">Wir stärken deine Relevanz in Haan und dem Bergischen Land.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent shrink-0">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-base">Zielgerichtetes Wachstum</h4>
                  <p className="text-sm text-slate-500">Mehr Reichweite, mehr Sichtbarkeit, mehr Umsatz für dein Business.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
              <Image 
                src="/images/haan_regional_focus_1777145308484.png"
                alt="SEO Agentur Haan Fokus"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SEOHaanCTA() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
          Bereit für mehr Sichtbarkeit in Haan?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Lass uns gemeinsam analysieren, wie wir dein Unternehmen bei Google auf Platz 1 bringen können. Sicher dir jetzt dein kostenloses Erstgespräch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={CONTACT_URL}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold w-full sm:w-auto shadow-xl shadow-accent/20 transition-all hover:-translate-y-1"
          >
            Jetzt Strategie-Check buchen
            <ArrowRight className="ml-2" size={24} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full px-10 h-16 text-xl font-bold w-full sm:w-auto border border-slate-200 bg-white text-slate-900 hover:border-accent hover:text-accent transition-all"
          >
            <MessageCircle size={24} />
            WhatsApp Chat
          </a>
        </div>
        <p className="mt-6 text-slate-500 font-medium">Kostenlos · Unverbindlich · 100 % Fokus auf dein Wachstum</p>
      </div>
    </section>
  );
}
