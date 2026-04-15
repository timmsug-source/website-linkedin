"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceProblem({ service }: { service: Service }) {
  return (
    <section
      className="py-24 px-6 bg-slate-900 relative overflow-hidden"
      aria-label="Die Herausforderung"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Label + Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-5 py-3 mb-8">
              <AlertCircle size={20} className="text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-bold text-sm uppercase tracking-widest">
                Das Problem
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
              {service.problemHeadline}
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              {service.problemSubline}
            </p>
          </motion.div>

          {/* Right: Pain points list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {service.problemPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-red-500/20 transition-colors"
              >
                <div
                  className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-red-400 text-xs font-bold">✗</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
