"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqItems = [
  {
    question: "Für wen sind deine Dienstleistungen geeignet?",
    answer:
      "Meine Lösungen sind speziell für Fitness- und Ernährungscoaches konzipiert, die bereits Kunden über LinkedIn gewinnen oder gewinnen wollen und ihre Prozesse professionalisieren oder automatisieren möchten. Ideal bist du, wenn du bereits erste Kunden hast und jetzt planbar skalieren willst.",
  },
  {
    question: "Muss ich technisch versiert sein?",
    answer:
      "Nein, absolut nicht. Ich kümmere mich um die gesamte technische Umsetzung. Du erhältst von mir schlüsselfertige Systeme, die einfach zu bedienen sind. Ich erkläre dir alles verständlich und stehe bei Fragen immer zur Verfügung.",
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Das hängt vom Umfang ab. Eine Landingpage ist meist innerhalb von 1–2 Wochen live. Komplexe Automatisierungen und KI-Chatbots dauern in der Regel 3–4 Wochen. Wir besprechen das im kostenlosen Erstgespräch und ich gebe dir eine realistische Zeitplanung.",
  },
  {
    question: "Welche Tools nutzt du?",
    answer:
      "Ich arbeite primär mit modernen No-Code und Low-Code Tools wie Zapier, Make, sowie spezialisierten KI-Frameworks. Für Websites nutze ich performante Technologien (Next.js, React) für maximale Geschwindigkeit und SEO. Die Tool-Auswahl richte ich immer nach deinem Budget und deinen Anforderungen.",
  },
  {
    question: "Bietest du auch laufende Betreuung an?",
    answer:
      "Ja, nach dem Projektstart stehe ich dir für Wartung, Updates und weitere Optimierungen zur Verfügung. Wir können das individuell als Retainer vereinbaren, damit dein System immer aktuell und optimal performt.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Die Preise hängen vom Umfang des Projekts ab. Ich biete keine Einheitslösungen, sondern maßgeschneiderte Pakete. Im kostenlosen Erstgespräch analysieren wir gemeinsam deine Situation und ich mache dir ein transparentes Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Warum LinkedIn und nicht Instagram oder TikTok?",
    answer:
      "LinkedIn-Nutzer sind im Durchschnitt zahlungsbereiter, sind oft in B2B-Kontexten tätig (betriebliche Gesundheitsförderung, Unternehmenskunden) und die organische Reichweite ist noch deutlich höher als auf anderen Plattformen. Ich bin darauf spezialisiert, weil es die beste Plattform für Premium-Coaches ist.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 px-6 bg-slate-50/50"
      aria-label="Häufig gestellte Fragen"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-extrabold text-slate-900">
            Häufig gestellte{" "}
            <span className="text-accent">Fragen</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Alles, was du über die Zusammenarbeit wissen musst.
          </p>
        </motion.div>

        <div className="space-y-4" role="list">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              role="listitem"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-6 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-bold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-600 px-6 pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
