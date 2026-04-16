"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, MessageCircle, Star } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section
      className="relative pt-12 pb-24 px-6 overflow-hidden bg-white transition-colors duration-700"
      aria-label={`${service.title} – Hero`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Alle Leistungen
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
              <Star size={14} fill="currentColor" />
              {service.badge ?? "Speziell für Fitness- & Ernährungscoaches"}
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
              {service.heroHeadline}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
              {service.heroSubline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-lg font-semibold border border-slate-200 bg-white text-slate-700 hover:border-accent hover:text-accent transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Kostenlos & unverbindlich · 30 Min. Strategie-Check
            </p>
          </div>

          {/* Right: Stats / Visual card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-xl transition-all duration-500">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-8">
                Was du bekommst
              </p>
              <ul className="space-y-5">
                {service.heroChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="w-3 h-3"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {service.heroStat && (
                <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 gap-6">
                  {service.heroStat.map((stat, i) => (
                    <div key={i}>
                      <p className="text-3xl font-display font-extrabold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-5 -right-5 z-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-bold text-slate-900">
                {service.floatingBadge ?? "Fertig in 1–2 Wochen"}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
