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
  MessageSquare,
  BarChart3,
  Search,
  ArrowRight,
  MessageCircle,
  Star,
  Globe,
  Layout
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/utils";

export function SEOHildenHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-24 px-6 overflow-hidden bg-slate-900" aria-label="SEO Hilden – Hero">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
              <MapPin size={14} fill="currentColor" />
              SEO in Hilden
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              SEO Hilden: <span className="text-accent">Lokale Dominanz</span> für dein Business.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              Werden Sie zur ersten Wahl in Hilden. Wir optimieren Ihre Website so, dass Sie genau dann auftauchen, wenn Kunden in der Region nach Ihren Leistungen suchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
              >
                Kostenlose Analyse anfordern
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-800 aspect-square">
                <Image
                  src="/images/seo_hilden_hero_1777364403435.png"
                  alt="SEO Hilden Erfolg Visualisierung"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 z-10 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">Platz 1</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">für Hilden-Keywords</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SEOHildenProblem() {
  const points = [
    {
      icon: SearchX,
      title: "Unsichtbarkeit",
      text: "Ihre Konkurrenz in Hilden steht oben, Sie sind auf Seite 2 oder 3."
    },
    {
      icon: TrendingDown,
      title: "Lead-Mangel",
      text: "Ihre Website ist schick, aber es kommen keine Anfragen rein."
    },
    {
      icon: Layout,
      title: "Veraltete Technik",
      text: "Langsame Ladezeiten schrecken potenzielle Kunden in Hilden ab."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Warum Ihre Website in Hilden <span className="text-red-600">nicht funktioniert.</span></h2>
          <p className="text-lg text-slate-600">Viele Unternehmen in Hilden verschenken Potenzial, weil sie digital nicht präsent sind. Wir ändern das.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:text-red-500 group-hover:bg-red-50 transition-all">
                <p.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SEOHildenSolution() {
  const steps = [
    { title: "Local SEO Strategie", text: "Gezielte Optimierung für Hilden und die Itterregion." },
    { title: "Content Marketing", text: "Inhalte, die Vertrauen aufbauen und verkaufen." },
    { title: "Technical Excellence", text: "Maximale Geschwindigkeit und Google-Konformität." },
    { title: "Transparenz", text: "Regelmäßige Reportings über Ihre Fortschritte." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Gezieltes SEO für <span className="text-accent">nachhaltiges Wachstum</span> in Hilden.</h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-slate-600">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video">
             <Image 
                src="/images/haan_solution_growth_1777134777822.png" 
                alt="Wachstum durch SEO in Hilden"
                fill
                className="object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SEOHildenCTA() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Bereit für Platz 1 in Hilden?</h2>
        <p className="text-xl text-slate-400 mb-10">Lassen Sie uns gemeinsam Ihre digitale Sichtbarkeit in Hilden maximieren.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={CONTACT_URL} className="bg-accent text-white px-10 h-16 rounded-full flex items-center justify-center text-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-accent/20">
            Jetzt Gespräch buchen
          </a>
          <a href={WHATSAPP_URL} className="bg-white/10 text-white border border-white/20 px-10 h-16 rounded-full flex items-center justify-center text-xl font-bold hover:bg-white/20 transition-all">
            WhatsApp Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
