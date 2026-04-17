"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const faqItems = [
  {
    question: "Für wen sind deine Leistungen geeignet?",
    answer:
      "Meine Leistungen richten sich an Selbstständige, Freiberufler und kleine bis mittelständische Unternehmen, die ihre Online-Präsenz professionalisieren, mehr Kunden über Google gewinnen oder wiederkehrende Prozesse automatisieren möchten.",
  },
  {
    question: "Muss ich technisch versiert sein?",
    answer:
      "Nein, absolut nicht. Ich kümmere mich um die gesamte technische Umsetzung. Du bekommst schlüsselfertige Lösungen mit verständlicher Dokumentation – ganz ohne Vorkenntnisse.",
  },
  {
    question: "Wie lange dauert die Umsetzung einer Website?",
    answer:
      "Eine einfache Landingpage ist meist in 1–2 Wochen live. Eine vollständige Unternehmenswebsite dauert je nach Umfang 2–4 Wochen. Automatisierungen und SEO-Pakete staffeln sich entsprechend.",
  },
  {
    question: "Welche Tools nutzt du für Automatisierungen?",
    answer:
      "Ich arbeite primär mit Zapier, Make, n8n und spezialisierten CRM-Integrationen. Für Websites nutze ich Next.js und React für maximale Performance (100 PageSpeed). Die Tool-Auswahl richte ich immer nach deinen Anforderungen.",
  },
  {
    question: "Bietest du auch laufende Betreuung an?",
    answer:
      "Ja. Nach dem Projektstart stehe ich für Wartung, Updates und Optimierungen zur Verfügung. Wir können das individuell als Retainer vereinbaren, damit dein System immer aktuell performt.",
  },
  {
    question: "Was kostet eine Website / SEO / Automatisierung?",
    answer:
      "Die Preise hängen vom Umfang ab. Websites starten ab 500€, SEO-Pakete ab 400€/Monat, Automatisierungen ab 300€. Im kostenlosen Erstgespräch mache ich dir ein transparentes Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Was ist GEO, und warum ist das wichtig?",
    answer:
      "GEO steht für Generative Engine Optimization – die Optimierung deiner Inhalte für KI-basierte Suchen wie ChatGPT, Perplexity oder Google Gemini. Da immer mehr Menschen dort suchen, ist GEO die SEO der Zukunft.",
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
          viewport={{ once: true, amount: 0.1 }}
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
              viewport={{ once: true, amount: 0.1 }}
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
                  className={`shrink-0 text-accent transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
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
