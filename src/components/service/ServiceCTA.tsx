"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL, cn } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="pt-12 pb-20 px-6 bg-white" aria-label="Jetzt starten">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="relative bg-slate-900 rounded-[3rem] p-8 md:p-14 lg:py-16 lg:px-20 overflow-hidden text-center shadow-2xl"
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

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-center text-left">
              <div>
                <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
                  Bereit loszulegen?
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-4">
                  {service.ctaHeadline}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                  {service.ctaSubline}
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-center gap-6">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6 w-full">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold w-full sm:w-auto shadow-lg shadow-accent/20 transition-[background-color,box-shadow]"
                  >
                    Kostenloses Erstgespräch
                    <ArrowRight className="ml-2" size={22} />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 text-white font-bold text-lg hover:text-accent transition-all group shrink-0"
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

                <p className="text-slate-400 text-sm">
                  Kostenlos & unverbindlich · 30 Minuten · Kein Verkaufsdruck
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
