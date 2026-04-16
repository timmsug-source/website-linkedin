"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { serviceData } from "@/lib/serviceData";

type Service = (typeof serviceData)[keyof typeof serviceData];

export function ServiceProblem({ service }: { service: Service }) {
  const isLandingPage = service.id === "landingpage-erstellung";
  const isAutomation = service.id === "automatisierungen" || service.id === "automatisiertes-onboarding";
  const isWhatsApp = service.id === "whatsapp-marketing";
  const isChatbot = service.id === "ki-chatbot";

  return (
    <section
      className={cn(
        "py-24 px-6 relative overflow-hidden",
        isLandingPage ? "bg-slate-50" :
          isWhatsApp ? "bg-emerald-950" :
            isChatbot ? "bg-[#0a0c10]" :
              "bg-slate-900"
      )}
      aria-label="Die Herausforderung"
    >
      {/* Decorative Elements based on service type */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {isLandingPage && (
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        )}

        {isAutomation && (
          <>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </>
        )}

        {isWhatsApp && (
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
          />
        )}

        {isChatbot && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
        )}

        {/* Global Glows */}
        {!isLandingPage && (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
          </>
        )}
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
            <div className={cn(
              "inline-flex items-center gap-3 border rounded-2xl px-5 py-3 mb-8",
              isLandingPage ? "bg-red-50 border-red-100" : "bg-red-500/10 border-red-500/20"
            )}>
              <AlertCircle size={20} className={isLandingPage ? "text-red-500" : "text-red-400"} aria-hidden="true" />
              <span className={cn(
                "font-bold text-sm uppercase tracking-widest",
                isLandingPage ? "text-red-600" : "text-red-400"
              )}>
                Das Problem
              </span>
            </div>

            <h2 className={cn(
              "text-4xl md:text-5xl font-display font-extrabold leading-tight mb-6",
              isLandingPage ? "text-slate-900" : "text-white"
            )}>
              {service.problemHeadline}
            </h2>

            <p className={cn(
              "text-xl leading-relaxed",
              isLandingPage ? "text-slate-600" : "text-slate-400"
            )}>
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
                className={cn(
                  "flex items-start gap-4 border rounded-2xl px-6 py-5 transition-all duration-300",
                  isLandingPage
                    ? "bg-white border-slate-200 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 text-slate-700"
                    : "bg-white/5 border-white/10 hover:border-red-500/20 text-slate-300"
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                    isLandingPage ? "bg-red-50 text-red-500" : "bg-red-500/10 text-red-400"
                  )}
                  aria-hidden="true"
                >
                  <span className="text-xs font-bold">✗</span>
                </div>
                <p className="leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
