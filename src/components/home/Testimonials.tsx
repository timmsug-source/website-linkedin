"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Markus R.",
    role: "Personal Trainer, München",
    content:
      "Seit Timm meine Landingpage und WhatsApp-Automatisierung aufgebaut hat, kommen wöchentlich 3–5 qualifizierte Anfragen über LinkedIn. Vorher war es eine pro Monat.",
    result: "+12 qualifizierte Leads/Monat",
    initials: "MR",
  },
  {
    name: "Jana K.",
    role: "Ernährungscoach, Hamburg",
    content:
      "Das automatisierte Onboarding hat mir buchstäblich Stunden zurückgegeben. Neue Kunden bekommen alles automatisch – Vertrag, Zugang, Willkommens-Video. Ich muss nichts mehr manuell machen.",
    result: "Onboarding-Zeit: 3h → 20 Min.",
    initials: "JK",
  },
  {
    name: "Stefan B.",
    role: "Fitness- & Ernährungscoach, Berlin",
    content:
      "Der KI-Chatbot auf meiner Website beantwortet Fragen 24/7 und bucht direkt Termine. Ich wache morgens auf und habe neue Erstgespräche im Kalender – ohne selbst geschrieben zu haben.",
    result: "8 Neukunden im ersten Monat",
    initials: "SB",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-24 px-6 bg-white"
      aria-label="Erfahrungsberichte von Fitness- und Ernährungscoaches"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Das sagen meine Kunden
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Ergebnisse, die <span className="text-accent">überzeugen</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Keine leeren Versprechen – echte Ergebnisse von echten Coaches aus
            dem DACH-Raum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:border-accent/20 transition-all group"
            >
              <Quote
                size={32}
                className="text-accent/20 mb-4 group-hover:text-accent/40 transition-colors"
                aria-hidden="true"
              />

              <div className="flex mb-4" aria-label="5 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote>
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-6 bg-accent/5 border border-accent/10 rounded-2xl px-4 py-3">
                <p className="text-sm font-bold text-accent">
                  ✓ {testimonial.result}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
