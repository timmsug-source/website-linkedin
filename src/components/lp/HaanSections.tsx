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

import { CheckCircle2, MapPin, ShieldCheck, Zap, Quote } from "lucide-react";

export function HaanSolution() {
  const solutionPoints = [
    {
      icon: CheckCircle2,
      title: "Strategisches Webdesign für Haan",
      text: "Wir bauen eine Seite, die nicht nur schick aussieht, sondern deine Besucher gezielt zur Kontaktaufnahme führt."
    },
    {
      icon: MapPin,
      title: "Lokale Dominanz durch SEO",
      text: "Durch die gezielte Optimierung auf Suchbegriffe wie „Webdesign in Haan“ und deine spezifischen Leistungen wirst du in der Region zur ersten Anlaufstelle."
    },
    {
      icon: ShieldCheck,
      title: "Vertrauensvorsprung durch Professionalität",
      text: "Ein moderner, schneller und seriöser Auftritt signalisiert sofort: Hier arbeitet ein Profi. Das schafft Vertrauen, noch bevor der erste Satz gewechselt wurde."
    },
    {
      icon: Zap,
      title: "Technik, die begeistert",
      text: "Maximale Ladegeschwindigkeit und perfekte Darstellung auf allen Endgeräten – vom iPhone bis zum Desktop-Monitor."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
            <CheckCircle2 size={16} /> Die Lösung: Dein Business in Haan – Endlich unübersehbar
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Vom digitalen Blindspot zum lokalen Marktführer.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Schluss mit dem Versteckspiel. Wir sorgen dafür, dass deine Website nicht nur existiert, sondern aktiv für dich arbeitet. Mein Webdesign-Ansatz für Unternehmen in Haan verbindet moderne Ästhetik mit einer glasklaren Strategie, damit du genau dort auftauchst, wo deine Kunden suchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutionPoints.map((point, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-slate-400 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                <point.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-accent/20 blur-[100px] pointer-events-none rounded-full" />
          
          <Quote size={48} className="text-accent/40 mx-auto mb-6 relative z-10" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-8 relative z-10 leading-tight">
            „Design ist erst dann gut, wenn es deine Kasse klingeln lässt.“
          </h3>
          <p className="text-lg text-slate-400 font-medium relative z-10 max-w-2xl mx-auto">
            Mein Ziel ist es, dass deine Website in Haan und Umgebung zum stärksten Vertriebskanal deines Unternehmens wird.
          </p>
        </div>
      </div>
    </section>
  );
}
