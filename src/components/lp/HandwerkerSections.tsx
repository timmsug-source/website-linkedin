"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, SearchX, Euro, Users, AlertTriangle, TrendingDown, Globe, ShieldCheck, BarChart3, Unlock, ChevronDown, Hammer, Zap, MapPin, TrendingUp } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL, CONTACT_URL } from "@/lib/utils";
import { motion } from "framer-motion";

export function HandwerkerHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_handwerker_bg.png"
          alt="Handwerker bei der Arbeit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm mb-8 backdrop-blur-md">
              <Star size={16} fill="currentColor" />
              SEO für Handwerker & Betriebe
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              SEO für Handwerker: Mehr <span className="text-accent italic">Aufträge</span> und Mitarbeiter.
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed mb-12 max-w-xl font-light">
              Schluss mit der Abhängigkeit von teuren Lead-Portalen. Wir sorgen dafür, dass Kunden dich direkt finden, wenn sie einen Profi suchen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href={CONTACT_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-accent/40 transition-all hover:-translate-y-1 active:scale-95"
              >
                Kostenlose Analyse
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 h-16 text-lg font-bold border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={22} className="text-accent" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glassmorphism Benefits Card */}
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-white rounded-full px-6 py-2 shadow-xl border border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold text-slate-900 whitespace-nowrap">Mehr qualifizierte Anfragen</span>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl border border-white/40 max-w-md ml-auto">
                <p className="text-accent font-bold text-sm tracking-[0.2em] mb-8">WAS DU ERREICHST</p>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Top-Platzierungen",
                      desc: "Werde direkt in deiner Region gefunden, wenn Kunden nach deinen Leistungen suchen."
                    },
                    {
                      title: "Mehr Direktaufträge",
                      desc: "Gewinne lukrative Anfragen direkt über deine Website – ohne teure Portale."
                    },
                    {
                      title: "Regionale Dominanz",
                      desc: "Werde zur Nummer 1 in deiner Stadt und sichere dir die besten Projekte."
                    },
                    {
                      title: "Höhere Planbarkeit",
                      desc: "Baue dir einen konstanten Strom an Neukunden auf, der deinen Betrieb wachsen lässt."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                        >
                          <ShieldCheck size={14} className="text-accent" />
                        </motion.div>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 mb-1">{item.title}:</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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
  const problems = [
    {
      title: "Die Konkurrenz zieht vorbei",
      desc: "Während du exzellente Arbeit leistest, sichern sich digital präsentere Betriebe die lukrativen Aufträge, nur weil sie oben stehen. Wer nicht auf Seite 1 erscheint, existiert für Neukunden schlichtweg nicht.",
      icon: TrendingDown
    },
    {
      title: "Abhängigkeit von Portalen",
      desc: "Du zahlst hohe Gebühren an Portale wie MyHammer oder Check24? Diese Leads sind oft hart umkämpft und führen häufig zu einem ruinösen Preiskampf, statt zu fairen Margen.",
      icon: SearchX
    },
    {
      title: "Falsche Anfragen fressen Zeit",
      desc: "Dein Telefon steht zwar nicht still, aber oft sind es Kunden für Kleinstaufträge oder reine Preisauskünfte. Ohne SEO-Filter ziehst du nicht die Wunschprojekte an, die dein Team voranbringen.",
      icon: Users
    },
    {
      title: "Veralteter Online-Auftritt",
      desc: "Eine langsame oder veraltete Website schreckt besonders junge Hausbesitzer ab. Sie assoziieren eine schwache Website sofort mit mangelnder Professionalität und Unzuverlässigkeit.",
      icon: Globe
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm mb-8">
              <AlertTriangle size={16} />
              Unsichtbarkeit kostet Geld
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-[1.1] mb-8">
              Du bist Profi auf der Baustelle – aber ein <span className="text-red-500 italic">digitaler Geist</span> bei Google?
            </h2>
            
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Viele Handwerksbetriebe in der Region verlassen sich seit Jahren auf Mundpropaganda. Das funktioniert, solange die Stammkundschaft reicht. Doch wer heute nach einem Elektriker, Dachdecker oder Installateur sucht, schaut zuerst aufs Smartphone. Ohne eine gezielte Strategie für SEO für Handwerker entstehen Hürden, die deinen Betrieb Zeit und Geld kosten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <p.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Reality Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 shrink-0 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <Hammer size={40} className="text-white" />
              </div>
              <div>
                <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] mb-4 text-sm">Die Realität im Handwerk</h4>
                <p className="text-2xl md:text-3xl text-white font-display font-light leading-relaxed">
                  "Eine Website ohne <span className="font-bold text-white">SEO für Handwerker</span> ist wie eine Werkstatt ohne Firmenschild im tiefsten Wald. Du weißt, dass du gute Arbeit machst – aber deine potenziellen Kunden finden den Weg zu dir einfach nicht."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HandwerkerSolution() {
  const points = [
    {
      title: "Dominanz in der lokalen Suche",
      desc: "Wir optimieren deinen Google Business Eintrag und deine Website so, dass du bei Suchanfragen wie „Dachdecker in der Nähe“ oder „Sanitär Notdienst [Stadt]“ ganz oben im Map-Pack erscheinst.",
      icon: MapPin
    },
    {
      title: "Anfragen, die sich lohnen",
      desc: "Durch gezieltes SEO für Handwerker ziehen wir genau die Kunden an, die nach deinen lukrativsten Leistungen suchen. Ob Badsanierung oder Photovoltaik-Montage – du entscheidest.",
      icon: BarChart3
    },
    {
      title: "Vertrauen ab dem ersten Klick",
      desc: "Ein moderner, schneller Auftritt mit klaren Referenzen zeigt sofort: Hier arbeitet ein Profi. Das schafft Sicherheit bei Neukunden und sorgt für die richtigen Anrufe.",
      icon: ShieldCheck
    },
    {
      title: "Unabhängigkeit von Portalen",
      desc: "Baue dir dein eigenes digitales Standbein auf. Deine Website wird zur autarken Lead-Maschine, sodass du nicht mehr auf externe Vermittler angewiesen bist.",
      icon: Unlock
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5]">
              <Image 
                src="/images/haan-solution.png" 
                alt="SEO Erfolg für Handwerksbetriebe"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-200">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div className="text-2xl font-black text-slate-900 leading-none">
                  +240%
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Durchschnittlicher Zuwachs an exklusiven Kundenanfragen.
              </p>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-8">
                Die Lösung für deinen Betrieb
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
                Werde zum gefragtesten <span className="text-accent">Fachbetrieb</span> in deiner Region.
              </h2>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                Wir machen Schluss mit der Unsichtbarkeit. Mein Ansatz für SEO für Handwerker sorgt dafür, dass deine Website nicht nur im Netz steht, sondern aktiv für deinen Betrieb arbeitet. Wir positionieren dich genau dort, wo deine Kunden nach Expertise suchen – ganz ohne teure Vermittlungsgebühren.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {points.map((p, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <p.icon size={18} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{p.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href={CONTACT_URL}
                className="inline-flex items-center gap-3 text-slate-900 font-bold hover:text-accent transition-all group py-4 px-6 rounded-2xl hover:bg-accent/5"
              >
                Jetzt Strategiegespräch buchen
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 px-8 rounded-[3rem] bg-slate-50 border border-slate-100"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-display font-medium text-slate-900 mb-8 leading-tight italic">
              "Qualität setzt sich durch – <span className="text-accent font-bold not-italic underline decoration-accent/30 underline-offset-8">wenn man sie findet.</span>"
            </p>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Ein solides SEO-Fundament sorgt dafür, dass dein Handwerksbetrieb die Anerkennung und die Aufträge bekommt, die deiner Arbeitsqualität entsprechen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HandwerkerProcess() {
  const steps = [
    {
      title: "1. Markt- & Keyword-Check",
      desc: "Wir analysieren, wonach Kunden in deiner Region wirklich suchen (z.B. „Badsanierung [Stadt]“)."
    },
    {
      title: "2. Lokale Optimierung",
      desc: "Deine Website und dein Google Business Profil werden technisch und inhaltlich auf Hochglanz gebracht."
    },
    {
      title: "3. Autorität & Vertrauen",
      desc: "Wir sorgen für Experten-Content und Bewertungen, die dich als Profi in deiner Region positionieren."
    },
    {
      title: "4. Monitoring & Wachstum",
      desc: "In monatlichen Reports zeigen wir dir den Erfolg und passen die Strategie laufend an."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 text-slate-700 text-sm font-bold mb-6">
            Der Ablauf: In 4 Schritten zum Erfolg
          </div>
          
          <h2 id="process-heading" className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-6">
            Dein Weg zu mehr Aufträgen – strukturiert & transparent.
          </h2>
          
          <p className="text-lg text-slate-600">
            Ein erfolgreiches SEO für Handwerker ist ein strategischer Prozess. Wir lassen nichts dem Zufall überlassen und sorgen für nachhaltige Ergebnisse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-200 z-0">
                  <div className="w-0 h-full bg-accent group-hover:w-full transition-all duration-700 delay-100"></div>
                </div>
              )}
              
              <div className="relative z-10 p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-slate-200 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-bold mb-4 uppercase tracking-wider text-sm">
                <div className="w-8 h-[2px] bg-accent"></div>
                Nachhaltiges Wachstum
              </div>
              <h3 className="text-3xl font-bold mb-6">Keine Theorie, sondern echte Aufträge.</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Mein Ansatz beim SEO für Handwerker ist direkt auf messbare Anfragen von Kunden ausgelegt. Wir bauen keine Klicks auf – wir bauen deine Marktposition auf.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 h-14 font-bold transition-all shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Chat
              </a>
              <a
                href={CONTACT_URL}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 font-bold transition-all shadow-lg shadow-accent/20"
              >
                Kostenlose Analyse
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HandwerkerFAQ() {
  const faqs = [
    {
      q: "Was genau ist SEO für Handwerker und brauche ich das wirklich?",
      a: "SEO für Handwerker sorgt dafür, dass dein Betrieb bei Google ganz oben erscheint, wenn potenzielle Kunden in deiner Region nach deinen Leistungen suchen (z. B. „Fliesenleger in der Nähe“). Wenn du dich nicht nur auf Mundpropaganda verlassen willst oder merkst, dass die Konkurrenz dir die lukrativen Aufträge wegschnappt, ist eine gezielte Optimierung der einzige Weg zu digitaler Unabhängigkeit."
    },
    {
      q: "Wie schnell sehe ich erste Ergebnisse durch SEO?",
      a: "Handwerk braucht Zeit – SEO auch. In der Regel dauert es 3 bis 6 Monate, bis nachhaltige Verbesserungen in den Suchergebnissen sichtbar werden. Der Vorteil: Einmal oben platziert, wirkt die Optimierung wie eine permanente digitale Werbetafel, die Tag und Nacht für dich arbeitet, ohne dass du pro Klick bezahlen musst."
    },
    {
      q: "Sind Portale wie MyHammer oder Check24 nicht einfacher?",
      a: "Einfacher vielleicht, aber auf Dauer teurer und anstrengender. Dort konkurrierst du oft nur über den Preis. Mit einer eigenen Strategie für SEO für Handwerker baust du deine eigene Marke auf. Kunden fragen direkt bei dir an, weil sie dich als Experten wahrnehmen – das führt zu besseren Margen und weniger Preisdiskussionen."
    },
    {
      q: "Wie viel Zeit muss ich als Chef investieren?",
      a: "Fast gar keine. Ich weiß, dass du auf der Baustelle oder bei Kunden gebraucht wirst. Nach einem kurzen Strategiegespräch übernehme ich das Ruder. Du kümmerst dich um dein Handwerk, ich sorge dafür, dass die Anfragen im Postfach landen."
    },
    {
      q: "Hilft mir SEO auch dabei, neue Mitarbeiter zu finden?",
      a: "Absolut! Fachkräfte suchen heute genau wie Kunden bei Google nach attraktiven Arbeitgebern in ihrer Nähe. Wenn dein Betrieb online professionell und modern auftritt, steigt deine Attraktivität als Arbeitgeber massiv. SEO ist also gleichzeitig auch Recruiting-Unterstützung."
    },
    {
      q: "Was ist der Unterschied zwischen Google Ads und SEO?",
      a: "Google Ads sind bezahlte Anzeigen: Du zahlst für jeden Klick. Hörst du auf zu zahlen, bist du sofort wieder unsichtbar. SEO für Handwerker ist eine langfristige Investition in deine eigene Website. Du baust eine organische Sichtbarkeit auf, die bleibt und dir dauerhaft kostenlose Anfragen liefert."
    },
    {
      q: "Wie wichtig ist mein Google Maps Eintrag für den Erfolg?",
      a: "Enorm wichtig! Besonders im Handwerk schauen Kunden zuerst auf die Karte. Ein optimiertes Google-Unternehmensprofil ist ein Kernbestandteil meiner Arbeit. Wir sorgen dafür, dass du im „Local Pack“ (den obersten drei Einträgen auf der Karte) landest, wo die meisten Klicks passieren."
    },
    {
      q: "Lohnt sich SEO auch für kleine Spezialbetriebe?",
      a: "Gerade für Spezialisten ist es ein Goldesel. Wenn du etwas anbietest, das nicht jeder kann (z. B. ökologische Dämmung oder spezielle Altbausanierung), suchen Kunden oft gezielt danach. Mit SEO für Handwerker positionieren wir dich als den Experten für genau diese Nische in deiner Region."
    }
  ];

  return (
    <section className="py-32 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 leading-tight">
            FAQ – Alles, was du über <span className="text-accent">SEO für Handwerker</span> wissen musst
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Häufig gestellte Fragen und klare Antworten für deinen nachhaltigen Erfolg als Fachbetrieb.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group rounded-3xl border border-slate-100 bg-slate-50/50 transition-all duration-500 open:bg-white open:shadow-2xl open:border-accent/10"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none select-none">
                <h3 className="text-xl font-bold text-slate-900 pr-8 group-open:text-accent transition-colors duration-300">
                  {faq.q}
                </h3>
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-open:bg-accent group-open:text-white group-open:border-accent group-open:rotate-180 transition-all duration-500 shadow-sm">
                  <ChevronDown size={20} />
                </div>
              </summary>
              <div className="px-8 pb-8 text-slate-600 leading-relaxed font-light text-lg">
                <div className="pt-4 border-t border-slate-100">
                  {faq.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
