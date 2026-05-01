"use client";

import { motion } from "framer-motion";
import { MessageCircle, Target, Palette, Code2, CheckCircle2, Rocket, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_URL } from "@/lib/utils";

const langenfeldSteps = [
  {
    number: "01",
    title: "Die Analyse-Phase",
    body: "Wir setzen uns zusammen (gerne auch persönlich in Langenfeld) und besprechen deine Ziele. Wer ist dein Idealkunde? Was soll die Website primär erreichen?",
    icon: MessageCircle,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Die Funnel-Strategie",
    body: "Ich entwerfe die Struktur. Wir legen fest, welche Inhalte der Besucher sehen muss, um überzeugt zu werden. Hier planen wir bereits die SEO-Keywords für den lokalen Markt ein.",
    icon: Target,
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "03",
    title: "Kreative Umsetzung",
    body: "Jetzt entsteht das Design. Modern, schnell und natürlich „Mobile First“ optimiert. Du erhältst regelmäßige Updates zum Stand der Dinge.",
    icon: Palette,
    color: "bg-pink-50 text-pink-600",
  },
  {
    number: "04",
    title: "Technisches SEO-Finish",
    body: "Ich optimiere die Seite für Suchmaschinen, damit du in Langenfeld ganz oben landest. Schnelle Ladezeiten und saubere Metadaten sind hier Pflicht.",
    icon: Code2,
    color: "bg-orange-50 text-orange-600",
  },
  {
    number: "05",
    title: "Launch & Optimierung",
    body: "Nach deiner Abnahme geht die Seite live. Aber damit hört es nicht auf: Ich überwache die ersten Ergebnisse und stelle sicher, dass der Funnel perfekt funktioniert.",
    icon: CheckCircle2,
    color: "bg-green-50 text-green-600",
  },
];

export function LangenfeldFlow() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Der Ablauf in Langenfeld">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Der Ablauf</p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Dein Weg zur neuen <span className="text-accent">Performance-Website</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Der Prozess ist für dich denkbar einfach und transparent gestaltet, damit du dich voll auf dein Kerngeschäft konzentrieren kannst.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {langenfeldSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-accent/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-slate-100 font-display font-bold text-5xl group-hover:text-accent/20 transition-colors duration-300 -mt-2 -mr-2">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">{step.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-4 font-bold transition-all shadow-xl"
          >
            Projekt jetzt starten <ArrowRight size={18} className="text-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function LangenfeldAbout() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Über Timm Schurig - Webdesign Langenfeld">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image src="/images/timm-portrait.jpeg" alt="Timm Schurig – Dein Partner für Webdesign in Langenfeld" fill className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 lg:left-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Region</p>
                <p className="font-bold text-slate-900 text-sm">Langenfeld & Umland</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">Dein Partner vor Ort</p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
              Dein Partner für <span className="text-accent">digitalen Erfolg</span> vor Ort.
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-lg text-slate-600 leading-relaxed">
                Ich bin dein Experte für digitales Wachstum direkt aus der Region. Für mich ist Webdesign in Langenfeld eine Herzensangelegenheit, denn ich kenne den lokalen Markt und die Bedürfnisse der mittelständischen Unternehmen hier genau.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Statt anonymem Agentur-Flair bekommst du bei mir eine persönliche Beratung auf Augenhöhe. Ich verstehe mich nicht nur als dein Designer, sondern als dein strategischer Partner. Gemeinsam sorgen wir dafür, dass dein Unternehmen nicht nur online präsent ist, sondern die digitale Landschaft in Langenfeld aktiv mitgestaltet.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Clock, label: "5+ Jahre Erfahrung" },
                { icon: Star, label: "Lokale Expertise" },
                { icon: MapPin, label: "Langenfeld & Umgebung" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                  <Icon size={15} className="text-accent" />
                  {label}
                </div>
              ))}
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold transition-[background-color] shadow-lg shadow-accent/20"
            >
              Kostenloses Erstgespräch anfordern <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LangenfeldSolution() {
  const features = [
    {
      title: "Lokale Dominanz durch SEO & GEO Optimierung",
      body: "Wir sorgen dafür, dass die „Unsichtbarkeit“ ein Ende hat. Durch gezielte lokale Suchmaschinenoptimierung wirst du genau dann gefunden, wenn Langenfelder nach deiner Expertise suchen. Wir besetzen die Top-Positionen für Webdesign in Langenfeld und deine spezifischen Leistungen, damit du die erste Wahl in der Region bist.",
      colSpan: "lg:col-span-1",
      icon: Target,
    },
    {
      title: "Intuitive Nutzerführung (Der Funnel-Effekt)",
      body: "Schluss mit dem Informations-Chaos. Wir strukturieren deine Seite so, dass der Besucher sanft von seinem Problem zu deiner individuellen Lösung geleitet wird. Jeder Text und jeder Button hat ein Ziel: Den Nutzer ohne Umwege zur Anfrage zu führen.",
      colSpan: "lg:col-span-1",
      icon: ArrowRight,
    },
    {
      title: "Modernes Design mit Vertrauensgarantie",
      body: "Wir ersetzen veraltete Optik durch ein frisches, zeitgemäßes Design, das deine Professionalität widerspiegelt. Ein ästhetischer Auftritt sorgt innerhalb der ersten Sekunde für das nötige Vertrauen, das die Basis für jede Geschäftsbeziehung bildet.",
      colSpan: "lg:col-span-1",
      icon: Palette,
    },
    {
      title: "High-Speed Performance",
      body: "Während andere noch im „digitalen Stau“ auf der A542 stehen, schaltet deine Website in den Express-Modus. Wir optimieren Ladezeiten auf ein Minimum, da im Jahr 2026 jede Millisekunde über den Verbleib eines Nutzers entscheidet. Eine schnelle Seite ist nicht nur nutzerfreundlich, sondern wird auch von Google mit besseren Rankings belohnt.",
      colSpan: "lg:col-span-1",
      icon: Rocket,
    },
    {
      title: "Konversionsstarke Strategie",
      body: "Besucher sind gut, Kunden sind besser. Wir implementieren klare Call-to-Actions und automatisierte Prozesse, die dafür sorgen, dass aus einem bloßen „Vorbeischauen“ eine konkrete Handlung wird. Deine Website arbeitet 24/7 als dein bester Verkäufer.",
      colSpan: "lg:col-span-2",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" aria-label="Die Lösung für Langenfeld">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
              Die Lösung: Dein <span className="text-accent">digitaler Maßanzug</span> mit Funnel-Strategie
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Es reicht heute nicht mehr aus, einfach nur „online“ zu sein. Um im Wettbewerb im Kreis Mettmann zu bestehen, muss deine Website ein aktiver Mitarbeiter deines Unternehmens werden. Mein Ansatz für Webdesign in Langenfeld löst die oben genannten Probleme nicht nur oberflächlich, sondern schafft ein technisches Fundament, das Besucher emotional bindet und rational überzeugt.
              </p>
              <p>
                Wir verwandeln deine digitale Sackgasse in eine Schnellstraße zum Erfolg. Anstatt den Nutzer mit wahllosen Informationen zu überfordern, setzen wir auf eine psychologisch fundierte Führung. So eliminieren wir die Reibungspunkte, die bisher dafür gesorgt haben, dass potenzielle Kunden kurz vor dem Klick auf „Senden“ doch noch abgesprungen sind.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image
              src="/images/mockups-grid.jpg"
              alt="Webdesign Langenfeld Mockups"
              fill
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        {/* Tiles / Kacheln */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">
            Wie wir dein Business in Langenfeld nach vorne bringen:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100 overflow-hidden flex flex-col ${feature.colSpan}`}
              >
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <feature.icon size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-4 font-bold transition-all shadow-xl"
          >
            Lösung jetzt anfragen <ArrowRight size={18} className="text-accent" />
          </a>
        </div>

        {/* Outro */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-slate-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-[80px] rounded-full" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
            Mit dieser Kombination aus lokaler Relevanz und technischer Exzellenz machen wir dein Unternehmen zur <strong className="font-extrabold text-accent">digitalen Benchmark in Langenfeld</strong>. Wir bauen keine Seite, die nur gut aussieht – wir bauen ein System, das dein Wachstum nachhaltig sichert.
          </p>
        </div>

      </div>
    </section>
  );
}

export function LangenfeldWhyNow() {
  const points = [
    {
      title: "Top-Platzierungen auf Google: Wer nicht scrollt, findet dich.",
      body: "Was bringt die schönste Website, wenn sie auf Seite 10 der Suchergebnisse verstaubt? Durch gezielte lokale Optimierung sorgen wir dafür, dass du bei Suchanfragen wie „[Deine Dienstleistung] in Langenfeld“ oder „Reusrath“ ganz oben auftauchst. Ein durchdachtes Webdesign in Langenfeld bringt dich genau dorthin, wo deine Kunden suchen – direkt auf die erste Seite von Google.",
      image: "/images/langenfeld/google-ranking.png",
      reverse: false
    },
    {
      title: "Dein entscheidender Wettbewerbsvorteil: Der erste Eindruck zählt.",
      body: "Viele Unternehmen in Langenfeld und dem angrenzenden Umland verlassen sich noch auf veraltete Webauftritte. Mit modernem Webdesign in Langenfeld hebst du dich sofort von der Konkurrenz ab. Du zeigst Professionalität und sicherst dir das Vertrauen der Kunden, während andere noch mit Ladezeiten und unleserlichen Texten auf dem Smartphone kämpfen.",
      image: "/images/langenfeld/design-comparison.png",
      reverse: true
    },
    {
      title: "Messbare Ergebnisse: Daten statt Bauchgefühl.",
      body: "Gutes Design ist kein Selbstzweck. Wir bauen deine Website so auf, dass Erfolg messbar wird. Durch klares Tracking siehst du genau, wie viele Anfragen über dein Kontaktformular kommen und welche Inhalte deine Kunden wirklich interessieren. So wird dein Webdesign in Langenfeld zu einer Investition, die sich durch echte Neukunden und steigende Umsätze in der Posthornstadt bezahlt macht.",
      image: "/images/langenfeld/analytics.png",
      reverse: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
            Warum optimiertes Webdesign in Langenfeld <br className="hidden md:block" />
            heutzutage ein <span className="text-accent">absolutes Muss</span> ist
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Werde in Langenfeld und Umgebung zum digitalen Vorreiter. In einer Stadt, die für ihre Dynamik und Wirtschaftskraft bekannt ist, entscheiden sich Kunden heute digital.
          </p>
        </motion.div>

        <div className="space-y-32">
          {points.map((point, index) => (
            <div 
              key={index}
              className={`flex flex-col ${point.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, x: point.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-tight">
                  {point.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {point.body}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image 
                    src={point.image} 
                    alt={point.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-3xl bg-slate-50 border border-slate-100">
            <p className="text-2xl font-display font-bold text-slate-900 italic">
              „Lokal verwurzelt, digital unschlagbar.“
            </p>
          </div>
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto">
            Nutze den Heimvorteil in der Posthornstadt. Gemeinsam verwandeln wir deine Website in ein Werkzeug, das nicht nur gut aussieht, sondern dein Business in Langenfeld nachhaltig wachsen lässt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
