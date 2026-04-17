"use client";

import { motion } from "framer-motion";
import { Zap, LayoutTemplate, Accessibility, ShieldCheck } from "lucide-react";

const standards = [
  {
    number: "01",
    title: "Performance als Fundament",
    body: "Ein Standard ist keine Bestleistung. Während viele Websites mit unnötigem Ballast kämpfen, setzen wir auf maximale Geschwindigkeit. Unsere Seiten werden nicht nur geladen – sie sind sofort da. Durch sauberen Code und modernste Komprimierung garantieren wir Bestwerte bei den Google Core Web Vitals.",
    advantage:
      "Höhere Verweildauer und ein direktes SEO-Ranking-Plus.",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "02",
    title: "Design mit psychologischer Führung",
    body: "Gutes Design ist heute mehr als nur Ästhetik. Wir definieren Standards neu, indem wir Nutzerführung (UX) und Markenidentität verschmelzen. Jedes Element sitzt dort, wo das Auge des Kunden es erwartet. Wir bauen keine digitalen Visitenkarten, sondern intuitive Erlebnisse, die Vertrauen schaffen.",
    advantage:
      "Besucher werden zu Kunden, weil sie sich blind auf deiner Seite zurechtfinden.",
    icon: LayoutTemplate,
    color: "bg-purple-50 text-purple-600",
  },
  {
    number: "03",
    title: "Barrierefreiheit & Inklusion",
    body: "Das Web ist für alle da. Wir gehen über die gesetzlichen Mindestanforderungen hinaus. Unsere Websites sind von Grund auf so konzipiert, dass sie für jeden zugänglich sind – unabhängig von Gerät oder Einschränkung. Das ist für uns kein Extra, sondern der neue Standard.",
    advantage:
      "Du erreichst 100 % deiner Zielgruppe und zeigst digitale Verantwortung.",
    icon: Accessibility,
    color: "bg-green-50 text-green-600",
  },
  {
    number: "04",
    title: "Sicherheit, die mitwächst",
    body: "In einer Zeit von Datenlecks und Cyber-Angriffen ist \"Standard-Sicherheit\" zu wenig. Wir implementieren Sicherheitsarchitekturen, die proaktiv schützen. Von der DSGVO-Konformität bis zur verschlüsselten Datenübertragung: Deine Seite ist ein Safe für deine Daten und die deiner Kunden.",
    advantage: "Absolute Sorgenfreiheit und ein professionelles Image.",
    icon: ShieldCheck,
    color: "bg-orange-50 text-orange-600",
  },
];

export function Standards() {
  return (
    <section
      id="standards"
      className="py-24 px-6 bg-slate-50/50"
      aria-label="Unsere Standards"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="text-center mb-20"
        >
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Unser Anspruch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">
            Wo andere aufhören,{" "}
            <span className="text-accent">fangen wir erst an.</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Wie unsere Websites die Standards neu definieren.
          </p>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                style={{ willChange: "opacity" }}
                className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col gap-5"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <span className="text-accent font-bold text-sm uppercase tracking-widest block mb-1">
                      {item.number}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">{item.body}</p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="font-bold text-slate-700">Dein Vorteil:</span>{" "}
                    {item.advantage}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
