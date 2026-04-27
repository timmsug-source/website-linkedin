"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, SearchX, Euro, Users, AlertTriangle, TrendingDown, Globe, ShieldCheck, BarChart3, Unlock } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils";

export function MaklerHero() {
  const checklist = [
    <><strong>Top-Platzierungen:</strong> Werde gefunden, wenn Kunden nach „Immobilienmakler + [Deine Stadt]“ suchen.</>,
    <><strong>Mehr Alleinaufträge:</strong> Gewinne das Vertrauen von Eigentümern, bevor sie die Konkurrenz kontaktieren.</>,
    <><strong>Nachhaltiges Wachstum:</strong> Baue dir eine digitale Präsenz auf, die dir monatlich planbar neue Leads liefert.</>,
    <><strong>Geringere Lead-Kosten:</strong> Senke deine Ausgaben für Portale und bezahlte Werbung langfristig.</>
  ];

  return (
    <section
      className="relative pt-32 lg:pt-40 pb-24 px-6 overflow-hidden bg-transparent"
      aria-label="SEO für Immobilienmakler – Hero"
    >
      {/* Background Image with horizontal gradient */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero_makler_exterior.png"
          alt="Atemberaubende moderne Luxusvilla mit Pool"
          fill
          className="object-cover object-[70%_50%]"
          priority
        />
        {/* Gradient: Solid white on the left for text readability, fading to clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 lg:to-transparent" />
        {/* Subtle bottom gradient to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" />
              Spezialisiert auf Immobilienmakler
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6 drop-shadow-sm">
              SEO für Immobilienmakler: Mehr Alleinaufträge gewinnen.
            </h1>

            <p className="text-xl text-slate-800 font-medium leading-relaxed max-w-xl mb-10">
              Schluss mit der totalen Abhängigkeit von teuren Immobilienportalen. Wir optimieren deine Website so, dass Eigentümer direkt bei dir landen, wenn sie einen Experten für den Verkauf ihrer Immobilie suchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-[box-shadow,background-color]"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-lg font-semibold border border-slate-200 bg-white/70 backdrop-blur-md text-slate-800 hover:border-accent hover:text-accent transition-[border-color,color]"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-600 font-medium drop-shadow-sm">
              Kostenlos & unverbindlich · 30 Min. Strategie-Check
            </p>
          </div>

          {/* Right: Quick-Benefits Card */}
          <div className="relative">
            {/* Elegant frosted glass card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 border border-white shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
                Was du erreichst
              </p>
              <ul className="space-y-6">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 12 12" fill="none" className="w-4 h-4" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-slate-800 text-lg leading-snug drop-shadow-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-5 -right-5 z-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-bold text-slate-900">
                Mehr Eigentümer-Leads
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaklerProblem() {
  const problems = [
    {
      title: 'Der "Portal-Fluch"',
      desc: "Du zahlst monatlich horrende Gebühren an ImmoScout24 & Co., um überhaupt wahrgenommen zu werden. Die Kontakte, die du dort generierst, gehören dir nicht exklusiv und vergleichen dich sofort mit der gesamten Konkurrenz.",
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      title: "Unsichtbarkeit bei Google",
      desc: "Wenn ein Eigentümer in deiner Region nach „Haus verkaufen [Deine Stadt]“ sucht, tauchen deine Mitbewerber auf den ersten Plätzen auf. Du bleibst unsichtbar und verlierst wertvolle Mandate, noch bevor das erste Telefonat geführt wurde.",
      icon: <SearchX className="w-6 h-6" />
    },
    {
      title: "Teure Lead-Zukäufe",
      desc: "Du kaufst Leads für viel Geld bei Drittanbietern ein, nur um festzustellen, dass diese Daten gleichzeitig an drei andere Makler verkauft wurden. Ein frustrierender Preiskampf beginnt.",
      icon: <Euro className="w-6 h-6" />
    },
    {
      title: "Kein Experten-Status",
      desc: "Wer bei Google nicht oben steht, existiert für viele Eigentümer schlichtweg nicht. Ohne professionelles SEO für Immobilienmakler verschenkst du den Vertrauensvorschuss, den die Top-Platzierungen automatisch mit sich bringen.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text & Problems */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6">
              <AlertTriangle size={14} />
              Die harte Realität
            </div>
            
            <h2 id="problem-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              Deine Website sieht gut aus – aber generiert sie auch Alleinaufträge?
            </h2>
            
            <p className="text-lg text-slate-600 mb-12">
              Die meisten Makler-Websites sind leider nur digitale Visitenkarten. Sie existieren zwar, werden aber von potenziellen Verkäufern niemals gefunden. Ohne eine gezielte Strategie für SEO für Immobilienmakler entstehen typische Probleme, die dein Wachstum bremsen:
            </p>

            <div className="space-y-8">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300 shadow-sm border border-red-100">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <p className="text-lg font-medium text-slate-800 italic">
                „Solange du nur darauf wartest, dass Eigentümer dich zufällig finden, steuerst du dein Business im Blindflug. Wer heute die digitale Suche dominiert, sichert sich die Objekte von morgen.“
              </p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-100/50 to-orange-50/50 rounded-full blur-3xl opacity-70 animate-pulse" />
            
            <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-full lg:max-h-[600px] hover:scale-105 transition-transform duration-700 ease-out">
              <Image
                src="/images/makler_problem.png"
                alt="Illustration von Problemen bei der Makler-Sichtbarkeit"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaklerSolution() {
  const solutions = [
    {
      title: "Lokale Dominanz",
      desc: "Wir bringen dich auf Platz 1 für die wichtigsten Suchbegriffe in deiner Stadt. Wenn Eigentümer suchen, finden sie dich.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Eigentümer-Psychologie",
      desc: "Wir optimieren deine Inhalte so, dass sie echtes Vertrauen bei Verkäufern aufbauen und sie zur Kontaktaufnahme bewegen.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Unabhängigkeit",
      desc: "Reduziere deine Marketingkosten und befreie dich vom Diktat der großen Portale durch eine eigene, starke Präsenz.",
      icon: <Unlock className="w-6 h-6" />
    },
    {
      title: "Messbare Ergebnisse",
      desc: "Transparente Reportings zeigen dir genau, wie viele neue Leads wir generieren und wie dein Business wächst.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Illustration */}
          <div className="relative order-2 lg:order-1 lg:h-[700px] flex items-center justify-center">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100/50 to-blue-50/50 rounded-full blur-3xl opacity-70 animate-pulse" />
            
            <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-full lg:max-h-[600px] hover:scale-105 transition-transform duration-700 ease-out">
              <Image
                src="/images/makler_solution.png"
                alt="Illustration von SEO-Erfolg für Immobilienmakler"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Text & Solutions */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" />
              Die Lösung: Strategisches SEO
            </div>
            
            <h2 id="solution-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
              SEO-Strategie für Immobilienmakler: Deine Abkürzung zu Alleinaufträgen.
            </h2>
            
            <p className="text-lg text-slate-600 mb-12">
              Wir verwandeln deine Website von einer passiven Visitenkarte in eine aktive Lead-Maschine. Mit unserer spezialisierten SEO-Optimierung sorgen wir dafür, dass Eigentümer dich genau dann finden, wenn sie ihre Verkaufsentscheidung treffen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {solutions.map((solution, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white text-accent flex items-center justify-center mb-4 shadow-sm">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all"
              >
                Jetzt Strategie planen
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
