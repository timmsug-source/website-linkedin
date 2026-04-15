"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Zap,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL, CALENDLY_URL } from "@/lib/utils";

const socialProofAvatars = [1, 2, 3, 4];

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center"
      aria-label="Hero-Sektion"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
            <Linkedin size={16} />
            <span>Exklusiv für LinkedIn-Coaches im DACH-Raum</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Skaliere dein{" "}
            <span className="text-accent">Coaching-Business</span> durch
            technische Exzellenz.
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
            Ich befreie Fitness- und Ernährungscoaches von manuellem Chaos.
            Landingpages, Automatisierungen und KI-Chatbots, die für dich
            arbeiten – <strong>24/7</strong>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-full px-8 h-14 text-lg font-semibold border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-900 hover:border-accent hover:text-accent transition-all"
            >
              Meine Leistungen
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {socialProofAvatars.map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-accent/30 to-accent/60 shadow-sm flex items-center justify-center text-white font-bold text-sm"
                  aria-hidden="true"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-bold text-slate-900">15+ Coaches</span>{" "}
              vertrauen bereits auf meine Lösungen
            </div>
          </div>
        </motion.div>

        {/* Right: WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100 overflow-hidden group">
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#25D366]/10 transition-colors"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle size={40} fill="currentColor" />
              </div>

              <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4">
                Lass uns direkt <br />
                <span className="text-[#25D366]">WhatsAppen.</span>
              </h2>

              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Keine Lust auf Formulare? Schreib mir einfach kurz bei WhatsApp
                und wir klären deine Fragen direkt auf dem kurzen Dienstweg.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-[#25D366]/20 text-lg gap-3"
                aria-label="WhatsApp Chat mit Timm Schurig starten"
              >
                <MessageCircle size={24} fill="currentColor" />
                Chat starten
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400 font-medium">
                <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                Online & erreichbar – Antwort in &lt; 2 Stunden
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            aria-hidden="true"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Antwortzeit</p>
              <p className="text-sm font-bold text-slate-900">&lt; 2 Stunden</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            aria-hidden="true"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Support</p>
              <p className="text-sm font-bold text-slate-900">Persönlich & Direkt</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
