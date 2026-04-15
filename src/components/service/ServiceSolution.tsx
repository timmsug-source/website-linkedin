"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceSolution({ service }: { service: Service }) {
  return (
    <section
      className="py-24 px-6 bg-white relative overflow-hidden"
      aria-label="Die Lösung"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-accent/3 -skew-x-12 translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-8">
                Schritt für Schritt
              </p>
              <ol className="space-y-6" aria-label="Ablauf der Zusammenarbeit">
                {service.process.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-8 h-8 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-sm font-extrabold shrink-0 shadow-sm"
                      aria-label={`Schritt ${i + 1}`}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{step.title}</p>
                      {step.desc && (
                        <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-2xl px-5 py-3 mb-8">
              <CheckCircle2 size={20} className="text-accent" aria-hidden="true" />
              <span className="text-accent font-bold text-sm uppercase tracking-widest">
                Die Lösung
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
              {service.solutionHeadline}
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {service.solution}
            </p>

            <div className="space-y-3 mb-10">
              {service.solutionPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              Jetzt kostenlos besprechen <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
