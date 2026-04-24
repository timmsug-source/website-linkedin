"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section
      className="relative pt-24 lg:pt-32 pb-24 px-6 overflow-hidden bg-white"
      aria-label={`${service.title} – Hero`}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
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
                href={PHONE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-[box-shadow,background-color]"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-14 text-lg font-semibold border border-slate-200 bg-white text-slate-700 hover:border-accent hover:text-accent transition-[border-color,color]"
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
          <div className="relative">
            {service.heroFeatures ? (
              /* Visual metrics card (e.g. Webdesign) */
              <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 space-y-5">
                {/* Header bar */}
                <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    deine-neue-website.de
                  </span>
                </div>

                {/* PageSpeed Score */}
                <div className="flex items-center justify-between bg-slate-50 rounded-2xl px-5 py-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">PageSpeed Score</p>
                    <p className="text-4xl font-display font-extrabold text-emerald-500">100</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                    <span className="text-emerald-500 font-extrabold text-lg">A+</span>
                  </div>
                </div>

                {/* Core Web Vitals */}
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Core Web Vitals</p>
                  <div className="space-y-2">
                    {[
                      { label: "LCP – Largest Contentful Paint", value: "0.8s", pct: 90 },
                      { label: "CLS – Layout Stability", value: "0.01", pct: 95 },
                      { label: "INP – Interactivity", value: "48ms", pct: 85 },
                    ].map((v) => (
                      <div key={v.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-500">{v.label}</span>
                          <span className="font-bold text-emerald-600">{v.value}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${v.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Mobile-First", "DSGVO-konform", "KI-Ready", "SEO-optimiert"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* Simple checklist card (other services) */
              <div className="bg-slate-50 rounded-[3rem] p-8 border border-slate-100 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
                  Was du bekommst
                </p>
                <ul className="space-y-5">
                  {service.heroChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div
                        className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {service.heroStat && (
                  <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-6">
                    {service.heroStat.map((stat, i) => (
                      <div key={i}>
                        <p className="text-3xl font-display font-extrabold text-accent">{stat.value}</p>
                        <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Floating badge */}
            <div
              className="absolute -top-5 -right-5 z-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-bold text-slate-900">
                {service.floatingBadge ?? "Fertig in 1–2 Wochen"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
