"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Search, Target, Zap } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/utils";

const differentiators = [
  {
    icon: Globe,
    title: "Webdesign & Technik aus einer Hand",
    description:
      "Kein Design-Ping-Pong zwischen Agenturen. Ich übernehme Design, Entwicklung und Technik komplett – schlüsselfertig.",
  },
  {
    icon: Zap,
    title: "Vollständige Systemintegration",
    description:
      "Website + Automatisierungen + SEO – alle drei Leistungen greifen nahtlos ineinander. Das ist ein Vorteil, den klassische Agenturen nicht bieten.",
  },
  {
    icon: Target,
    title: "Lokaler Fokus, globales Know-how",
    description:
      "Ich kenne den lokalen Markt und kombiniere das mit modernstem Web-Know-how. Das Ergebnis: Sichtbarkeit genau dort, wo deine Kunden suchen.",
  },
];

export function AboutPreview() {
  return (
    <section
      className="py-24 px-6 bg-white"
      aria-label="Über Timm Schurig"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0, margin: "-50px" }}
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Über mich
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
              Ich bin Timm Schurig.{" "}
              <span className="text-accent">Dein Webdesign- & Digital-Partner.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Als Webdesigner und Digital-Stratege helfe ich Unternehmen dabei, ihre Online-Präsenz in eine echte Wachstumsmaschine zu verwandeln – mit professionellen Websites, smarten Automatisierungen und einer SEO-Strategie, die wirkt.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              Was mich von klassischen Agenturen unterscheidet: Ich denke nicht in Einzellösungen, sondern in Systemen. Design, SEO und Automatisierung gibt es bei mir immer aufeinander abgestimmt.
            </p>
            <div className="flex gap-4">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-3 font-bold transition-all"
              >
                Mehr über mich <ArrowRight size={18} />
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-6 py-3 font-semibold text-slate-700 hover:border-accent hover:text-accent transition-all"
                aria-label="Timm Schurig auf LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0, margin: "-50px" }}
            className="space-y-6"
          >
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-md transition-[box-shadow,border-color] bg-slate-50/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
