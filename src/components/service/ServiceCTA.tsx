"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL, cn } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Jetzt starten">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center shadow-2xl border border-red-500/20 shadow-red-500/5"
        >
          {/* Decorative Elements */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Bereit loszulegen?
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
              {service.ctaHeadline}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              {service.ctaSubline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold w-full sm:w-auto shadow-lg shadow-accent/20 transition-all border-b-4 border-accent-dark/30 active:border-b-0 active:translate-y-1"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2" size={22} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-white font-bold text-lg hover:text-accent transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
                  aria-hidden="true"
                >
                  <MessageCircle size={24} />
                </div>
                Oder per WhatsApp
              </a>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              Kostenlos & unverbindlich · 30 Minuten · Kein Verkaufsdruck
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
