"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, PHONE_URL } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-24 px-6" aria-label="Jetzt starten">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center"
        >
          {/* Background Accents */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
              Bereit für dein{" "}
              <span className="text-accent">Upgrade?</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-relaxed">
              Lass uns gemeinsam schauen, wie wir deine Prozesse automatisieren
              können, damit du dich wieder voll auf deine Kunden konzentrieren
              kannst.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={PHONE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-16 text-xl font-bold w-full sm:w-auto shadow-lg shadow-accent/20 transition-all"
              >
                Jetzt Termin buchen
                <ArrowRight className="ml-2" size={22} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-white font-bold text-lg hover:text-accent transition-colors"
                aria-label="Oder direkt per WhatsApp kontaktieren"
              >
                <div
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <MessageCircle size={24} />
                </div>
                Oder per WhatsApp
              </a>
            </div>

            <p className="mt-10 text-slate-400 text-sm">
              Kostenlos & unverbindlich · 30 Minuten Strategie-Check · Keine
              langen Verträge
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
