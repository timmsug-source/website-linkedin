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
  Hammer,
  Wrench,
  HardHat,
  PhoneCall
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/utils";

export function HandwerkerHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-24 px-6 overflow-hidden bg-slate-900" aria-label="SEO für Handwerker – Hero">
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
              <HardHat size={14} fill="currentColor" />
              SEO für Handwerksbetriebe
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Mehr Aufträge für <span className="text-accent">dein Handwerk.</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
              Schluss mit der Suche nach Aufträgen. Wir sorgen dafür, dass Kunden dich finden, wenn sie einen Profi in ihrer Nähe suchen. Lokal, digital, erfolgreich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-1"
              >
                Jetzt mehr Anfragen sichern
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
                  src="/images/seo_handwerker_hero_new_1777364515686.png"
                  alt="SEO Erfolg für Handwerker Visualisierung"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 z-10 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">+350%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Mehr Kundenanfragen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function HandwerkerProblem() {
  const points = [
    {
      icon: SearchX,
      title: "Keine Sichtbarkeit",
      text: "Kunden finden dich nicht bei Google, wenn sie nach einem Handwerker in ihrer Stadt suchen."
    },
    {
      icon: TrendingDown,
      title: "Teure Lead-Portale",
      text: "Du zahlst hohe Gebühren an Portale für Leads, die oft unqualifiziert oder bereits vergeben sind."
    },
    {
      icon: EyeOff,
      title: "Konkurrenz zieht vorbei",
      text: "Andere Betriebe schnappen dir die lukrativen Aufträge weg, weil sie online präsenter sind."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Das Problem vieler <span className="text-red-600">Handwerksbetriebe.</span></h2>
          <p className="text-lg text-slate-600">Harte Arbeit, exzellente Ergebnisse – aber kaum jemand erfährt davon. Wir machen dein Handwerk online sichtbar.</p>
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

export function HandwerkerSolution() {
  const items = [
    { icon: MapPin, title: "Regionales SEO", text: "Wir platzieren dich ganz oben für deine Stadt und Region." },
    { icon: Star, title: "Reputations-Management", text: "Deine guten Bewertungen werden für jeden sichtbar." },
    { icon: Zap, title: "Schnelle Ergebnisse", text: "Gezielte Maßnahmen für spürbar mehr Anfragen." },
    { icon: ShieldCheck, title: "Exklusivität", text: "Deine Website gehört dir. Keine Abhängigkeit von Portalen." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-square">
             <Image 
                src="/images/haan_solution_growth_1777134777822.png" 
                alt="SEO Lösung für Handwerker"
                fill
                className="object-cover"
              />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Deine digitale <span className="text-accent">Auftrags-Maschine.</span></h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-slate-400 group-hover:text-accent group-hover:bg-accent/5 transition-all">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HandwerkerCTA() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">Mehr Aufträge durch besseres Ranking?</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Sicher dir jetzt dein kostenloses Beratungsgespräch und lass uns dein Handwerk nach vorne bringen.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={CONTACT_URL} className="bg-accent text-white px-10 h-16 rounded-full flex items-center justify-center text-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-accent/20 w-full sm:w-auto">
            Kostenlos beraten lassen
          </a>
          <a href={WHATSAPP_URL} className="bg-white text-slate-900 border border-slate-200 px-10 h-16 rounded-full flex items-center justify-center text-xl font-bold hover:bg-slate-50 transition-all w-full sm:w-auto">
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
