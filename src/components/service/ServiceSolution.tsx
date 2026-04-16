"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { CALENDLY_URL } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceSolution({ service }: { service: Service }) {
  return (
    <section
      className="py-24 px-6 bg-slate-50 relative overflow-hidden"
      aria-label="Die Lösung"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-accent/3 -skew-x-12 translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl transition-all duration-500">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-8">
                Schritt für Schritt zum Erfolg
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
                      className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-sm font-extrabold shrink-0 shadow-sm border border-accent/20"
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

            {/* Optional badge for consistent high-touch feel */}
            <motion.div
              animate={{ rotate: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Quality First</p>
                  <p className="text-white font-bold">100% Fokus</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
              {service.solutionPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-accent/20 transition-all">
                  <CheckCircle2
                    size={20}
                    className="text-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700 font-semibold text-sm">{point}</span>
                </div>
              ))}
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-slate-200"
            >
              Jetzt Beratung anfordern <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
