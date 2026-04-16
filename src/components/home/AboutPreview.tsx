"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Target, Zap } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/utils";

const differentiators = [
  {
    icon: Linkedin,
    title: "LinkedIn-First Ansatz",
    description:
      "Der einzige Anbieter im DACH-Raum, der explizit LinkedIn als Kundengewinnungskanal für Fitness- & Ernährungscoaches bedient.",
  },
  {
    icon: Zap,
    title: "Komplettes Backend aus einer Hand",
    description:
      "Landingpage + WhatsApp + E-Mail + KI-Chatbot + Onboarding – kein Wettbewerber bietet dieses Paket gebündelt für diese Nische an.",
  },
  {
    icon: Target,
    title: "Doppelter ROI",
    description:
      "Ich spare dir Zeit durch Automatisierung UND generiere dir mehr Leads – das ist ein Argument, das klassische Ads-Agenturen nicht bieten können.",
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
            viewport={{ once: true, amount: 0.1 }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Über mich
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
              Ich bin Timm Schurig.{" "}
              <span className="text-accent">Dein technischer Partner</span> für
              dein Coaching-Business.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Als Spezialist für LinkedIn-Kundengewinnung und Marketing-Technologie
              helfe ich Fitness- und Ernährungscoaches im DACH-Raum dabei, ihre
              manuellen Prozesse durch smarte Systeme zu ersetzen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              Was mich von klassischen Marketing-Agenturen unterscheidet: Ich
              kombiniere tiefes technisches Know-how mit einem echten Verständnis
              für die spezifischen Herausforderungen von Coaches auf LinkedIn.
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
                aria-label="Timm Schurig auf LinkedIn folgen"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all bg-slate-50/50"
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
