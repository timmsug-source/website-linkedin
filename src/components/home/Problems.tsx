"use client";

import { motion } from "framer-motion";
import { Clock, Users, Repeat, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Deine Zeit verpufft",
    description:
      "Stunden für manuelles Follow-up, Onboarding und Copy-Paste-Aufgaben – statt dich auf deine Kunden zu fokussieren.",
  },
  {
    icon: TrendingDown,
    title: "LinkedIn-Anfragen werden nicht zu Kunden",
    description:
      "Du bekommst zwar Kontaktanfragen, aber keine klare Seite, die Vertrauen aufbaut und Termine generiert.",
  },
  {
    icon: Repeat,
    title: "Manuelle Prozesse bremsen dich aus",
    description:
      "Von der Rechnungsstellung bis zur Terminbestätigung: Jeder Handgriff kostet Zeit, die du für dein Coaching brauchst.",
  },
  {
    icon: Users,
    title: "Neukunden-Gewinnung ist unplanbar",
    description:
      "Mal funktioniert es, mal nicht. Ein System, das kontinuierlich Leads generiert, fehlt dir bisher.",
  },
];

export function Problems() {
  return (
    <section
      className="py-24 px-6 bg-slate-900 relative overflow-hidden"
      aria-label="Herausforderungen als Fitness- oder Ernährungscoach"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Das kennt jeder Coach
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
            Dein LinkedIn-Profil bringt{" "}
            <span className="text-accent">keine Kunden?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Du investierst täglich Zeit in LinkedIn – aber die Anfragen landen
            nirgendwo, manuelle Aufgaben fressen deine Energie und echte
            Systeme fehlen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-display font-bold text-white">
            Die gute Nachricht:{" "}
            <span className="text-accent">Das lässt sich lösen.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
