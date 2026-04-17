"use client";

import { motion } from "framer-motion";
import { Clock, Globe, TrendingDown, Search } from "lucide-react";

const problems = [
  {
    icon: Globe,
    title: "Deine Website bringt keine Kunden",
    description:
      "Du hast eine Website, aber kaum Anfragen? Ohne klare Conversion-Optimierung und professionelles Design bleibt sie unsichtbar.",
  },
  {
    icon: TrendingDown,
    title: "Du wirst bei Google nicht gefunden",
    description:
      "95 % aller Klicks gehen an die ersten 3 Ergebnisse. Ohne SEO-Strategie existierst du für potenzielle Kunden schlicht nicht.",
  },
  {
    icon: Clock,
    title: "Manuelle Prozesse fressen deine Zeit",
    description:
      "Follow-ups, Datenpflege, Terminbestätigungen – alles manuell. Das kostet Stunden, die du besser in dein Business investieren könntest.",
  },
  {
    icon: Search,
    title: "KI-Suchen empfehlen dich nicht",
    description:
      "ChatGPT, Perplexity & Co. verändern die Suche grundlegend. Wer nicht für GEO optimiert ist, verliert schon heute Kunden an die Konkurrenz.",
  },
];

export function Problems() {
  return (
    <section
      className="py-24 px-6 bg-slate-50 relative overflow-hidden"
      aria-label="Herausforderungen für Unternehmen"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="text-center mb-16"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Das kennen viele Unternehmer
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight">
            Deine Online-Präsenz{" "}
            <span className="text-accent">kostet dich Kunden.</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Fast jedes Unternehmen hat diese Probleme – und fast keines löst sie systematisch.
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
                viewport={{ once: true, amount: 0, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:border-accent/30 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-display font-bold text-slate-900">
            Die gute Nachricht:{" "}
            <span className="text-accent">Das lässt sich lösen.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
