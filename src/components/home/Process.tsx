"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Globe, Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    title: "Analyse & Strategie",
    description:
      "Wir analysieren dein aktuelles Setup – Website, SEO und Prozesse – und identifizieren gemeinsam die größten Hebel für Wachstum.",
    icon: Search,
  },
  {
    title: "Konzeption & Design",
    description:
      "Individuelles Design und klares Konzept für deine Website, Automatisierungen oder SEO-Strategie – maßgeschneidert für dein Business.",
    icon: Globe,
  },
  {
    title: "Umsetzung",
    description:
      "Ich baue alles – von der Website über Automatisierungen bis zu SEO-Inhalten – technisch sauber und auf dich zugeschnitten.",
    icon: Cpu,
  },
  {
    title: "Launch & Optimierung",
    description:
      "Wir gehen live. Ich optimiere kontinuierlich basierend auf echten Daten – damit du dauerhaft wächst.",
    icon: Rocket,
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="prozess"
      className="py-24 px-6 overflow-hidden"
      aria-label="Der Ablauf der Zusammenarbeit"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Der Ablauf
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Der Weg zu deinem{" "}
            <span className="text-accent">System</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            In vier klaren Schritten zu mehr Sichtbarkeit und besseren Ergebnissen.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated progress line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Icon Circle */}
                  <div
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center z-10 shadow-lg"
                    aria-hidden="true"
                  >
                    <Icon size={24} className="text-accent" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-20 md:text-right" : "md:ml-auto md:pl-20"
                      }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
                      transition={{ duration: 0.6 }}
                      style={{ willChange: "transform, opacity" }}
                      className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <span className="text-accent font-bold text-sm uppercase tracking-widest mb-2 block">
                        Schritt 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
