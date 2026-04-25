"use client";

import Image from "next/image";
import { AlertCircle, EyeOff, SearchX, TrendingDown } from "lucide-react";

export function HaanProblem() {
  const painPoints = [
    {
      icon: SearchX,
      title: "Keine lokale Sichtbarkeit",
      text: "Wenn jemand in Haan nach deinen Leistungen sucht, finden sie nur die Konkurrenz."
    },
    {
      icon: EyeOff,
      title: "Schlechter Ersteindruck",
      text: "Eine veraltete Website lässt selbst das beste Angebot unprofessionell wirken."
    },
    {
      icon: TrendingDown,
      title: "Verschenktes Potenzial",
      text: "Besucher verlassen die Seite schnell wieder, weil die Führung fehlt."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-8">
              <AlertCircle size={16} /> Das Problem
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
              Unsichtbar in Haan? Warum deine Website keine Kunden bringt.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 mb-12">
              <p>
                Du bist Experte in deinem Fach, aber bei der Suche nach „[Deine Branche] in Haan“ tauchen nur deine Mitbewerber auf? 
                Eine Website ohne Strategie ist wie ein Flyer im Briefkasten eines leerstehenden Hauses: Niemand sieht ihn.
              </p>
              <p className="font-medium text-slate-800 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <span className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-2xl"></span>
                Ohne gezieltes Webdesign und lokales SEO bleibt dein Business für Neukunden in der Region unsichtbar. 
                Du verschenkst wertvolles Potenzial an Unternehmen, die online einfach präsenter sind – 
                auch wenn sie vielleicht weniger Erfahrung haben als du.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-red-500 group-hover:border-red-100 group-hover:bg-red-50 transition-all">
                    <point.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{point.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-12 lg:mt-0">
            {/* Background elements */}
            <div className="absolute -inset-4 bg-slate-200/50 rounded-[3rem] transform rotate-3" />
            <div className="absolute -inset-4 bg-white rounded-[3rem] transform -rotate-2 shadow-xl border border-slate-100" />
            
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 aspect-square shadow-2xl">
              <Image 
                src="/images/haan-problem.png"
                alt="Unsichtbar in Haan Suchergebnissen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-[240px] z-10 hidden sm:block">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-3">
                <AlertCircle size={20} className="text-red-600" />
              </div>
              <p className="text-sm font-bold text-slate-900">
                Verlierst du Kunden?
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Deine Konkurrenz schläft nicht. Wer online nicht gefunden wird, existiert für Neukunden nicht.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
