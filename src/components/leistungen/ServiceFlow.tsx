"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Target,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Anfrage und kostenloses Erstgespräch",
    body: "Wir starten ganz entspannt: Du schickst mir eine Anfrage über das interaktive Formular und wir führen ein kurzes, 15-minütiges Erstgespräch. Darin finden wir heraus, ob die Chemie stimmt und wie ich deine Website auf das nächste Level heben kann.",
    icon: MessageCircle,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Strategie & Kickoff-Termin",
    body: "In einem intensiven Kickoff-Termin (per Video-Call oder vor Ort in Langenfeld) definieren wir deine Zielgruppe und die strategische Ausrichtung. Wir legen fest, welche KI-Optimierungen und SEO-Keywords für deinen Erfolg entscheidend sind. Du lieferst das WAS – ich kümmere mich um das WIE.",
    icon: Target,
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "03",
    title: "Konzeption & Designphase",
    body: "Jetzt wird es kreativ. Ich erstelle ein individuelles Design-Konzept, das deine Marke perfekt widerspiegelt. Hierbei achte ich nicht nur auf Ästhetik, sondern auf eine Nutzerführung, die Besucher in Kunden verwandelt. Du bekommst einen ersten Entwurf und wir verfeinern ihn gemeinsam.",
    icon: Palette,
    color: "bg-pink-50 text-pink-600",
  },
  {
    number: "04",
    title: "Technische Umsetzung & KI-Optimierung",
    body: 'Nach deiner Design-Freigabe erwecke ich die Seite zum Leben. Ich entwickle ein performantes System mit sauberen Strukturen. Dabei implementiere ich die \u201eKI-Ready\u201c-Architektur, damit deine Website auch von modernen Algorithmen und Sprachmodellen optimal verstanden wird.',
    icon: Code2,
    color: "bg-orange-50 text-orange-600",
  },
  {
    number: "05",
    title: "Finalisierung & Quality Check",
    body: "Bevor wir live gehen, wird jedes Detail geprüft. Ich teste die Geschwindigkeit, die mobile Darstellung auf allen Endgeräten und die SEO-Metadaten. Wir gehen gemeinsam durch die Seite, nehmen den letzten Feinschliff vor und stellen sicher, dass alles deinen neuen Standard definiert.",
    icon: CheckCircle2,
    color: "bg-green-50 text-green-600",
  },
  {
    number: "06",
    title: "Launch & Betreuung",
    body: "Der große Moment: Deine neue Website geht live! Aber ich lasse dich danach nicht allein. Ob Wartung, SEO-Monitoring oder die Anpassung an neue KI-Trends – ich stehe dir als langfristiger Partner zur Seite, damit deine digitale Präsenz dauerhaft erfolgreich bleibt.",
    icon: Rocket,
    color: "bg-teal-50 text-teal-600",
  },
];

export function ServiceFlow() {
  return (
    <section
      className="py-24 px-6 bg-white"
      aria-label="Ablauf der Zusammenarbeit"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Der Ablauf
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Ablauf der{" "}
            <span className="text-accent">Zusammenarbeit</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Von der ersten Anfrage bis zum Launch – transparent, klar und auf
            dich zugeschnitten.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px bg-slate-100 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex items-start gap-6 md:items-center"
                >
                  {/* Icon – desktop: centered on line */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2`}
                    aria-hidden="true"
                  >
                    <Icon size={24} />
                  </div>

                  {/* Card – alternates left/right on desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: "transform, opacity" }}
                    className={`flex-1 bg-slate-50 border border-slate-100 rounded-3xl p-7 md:w-[44%] md:flex-none ${
                      isEven
                        ? "md:mr-auto md:pr-10"
                        : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <span className="text-accent font-bold text-sm uppercase tracking-widest block mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.body}
                    </p>
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
