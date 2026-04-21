"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { PHONE_URL } from "@/lib/utils";
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
          {/* Left side – second on mobile, first on desktop */}
          {service.solutionIntro ? (
            /* Rich intro text */
            <div className="space-y-6 order-2 lg:order-1">
              {service.solutionIntro.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-2xl font-display font-bold text-slate-900 leading-snug"
                      : "text-lg text-slate-600 leading-relaxed"
                  }
                >
                  {para}
                </p>
              ))}
              <div className="flex gap-8 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-display font-extrabold text-accent">100%</p>
                  <p className="text-sm text-slate-500 mt-1">PageSpeed garantiert</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-extrabold text-accent">1–2 Wo.</p>
                  <p className="text-sm text-slate-500 mt-1">bis zum Launch</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-extrabold text-accent">KI-ready</p>
                  <p className="text-sm text-slate-500 mt-1">von Anfang an</p>
                </div>
              </div>
            </div>
          ) : (
            /* Process steps card (other services) */
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-8">
                  Schritt für Schritt zum Erfolg
                </p>
                <ol className="space-y-6" aria-label="Ablauf der Zusammenarbeit">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-sm font-extrabold shrink-0 shadow-sm border border-accent/20"
                        aria-label={`Schritt ${i + 1}`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{step.title}</p>
                        {step.desc && (
                          <p className="text-slate-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* Right: Text Side – first on mobile, second on desktop */}
          <div className="order-1 lg:order-2">
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
                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-accent/20 transition-[border-color]">
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
              href={PHONE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-[background-color] shadow-lg"
            >
              Jetzt Beratung anfordern <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Feature grid – when solutionFeatures present */}
        {service.solutionFeatures && (
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.solutionFeatures!.map((f) => (
                <div
                  key={f.number}
                  className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-[box-shadow]"
                >
                  <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-3">
                    {f.number}
                  </span>
                  <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
