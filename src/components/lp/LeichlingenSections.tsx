"use client";

import { motion } from "framer-motion";
import { MessageCircle, Target, Palette, Code2, CheckCircle2, Rocket, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PHONE_URL } from "@/lib/utils";

const leichlingenSteps = [
  {
    number: "01",
    title: "Die Analyse-Phase",
    body: "Wir setzen uns zusammen (gerne auch persönlich in Leichlingen) und besprechen deine Ziele. Wer ist dein Idealkunde? Was soll die Website primär erreichen?",
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
    body: "Ich optimiere die Seite für Suchmaschinen, damit du in Leichlingen ganz oben landest. Schnelle Ladezeiten und saubere Metadaten sind hier Pflicht.",
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

export function LeichlingenFlow() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Der Ablauf in Leichlingen">
      <div className="max-w-5xl mx-auto">
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

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-100 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {leichlingenSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={step.number} className="relative flex items-start gap-6 md:items-center">
                  <div className={`relative z-10 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2`}>
                    <Icon size={24} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-7 md:w-[44%] md:flex-none ${isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}
                  >
                    <span className="text-accent font-bold text-sm uppercase tracking-widest block mb-2">{step.number}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.body}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeichlingenAbout() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Über Timm Schurig - Webdesign Leichlingen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image src="/images/timm-portrait.jpeg" alt="Timm Schurig – Dein Partner für Webdesign in Leichlingen" fill className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 lg:left-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Region</p>
                <p className="font-bold text-slate-900 text-sm">Leichlingen & Umland</p>
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
                Ich bin dein Experte für digitales Wachstum direkt aus der Region. Für mich ist Webdesign in Leichlingen eine Herzensangelegenheit, denn ich kenne den lokalen Markt und die Bedürfnisse der mittelständischen Unternehmen hier genau.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Statt anonymem Agentur-Flair bekommst du bei mir eine persönliche Beratung auf Augenhöhe. Ich verstehe mich nicht nur als dein Designer, sondern als dein strategischer Partner. Gemeinsam sorgen wir dafür, dass dein Unternehmen nicht nur online präsent ist, sondern die digitale Landschaft in Leichlingen aktiv mitgestaltet.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Clock, label: "5+ Jahre Erfahrung" },
                { icon: Star, label: "Lokale Expertise" },
                { icon: MapPin, label: "Leichlingen & Witzhelden" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm font-semibold text-slate-700">
                  <Icon size={15} className="text-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
