"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
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
