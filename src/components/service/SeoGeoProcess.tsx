import { Search, Wrench, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Keyword-Strategie",
    body: "Zuerst führen wir eine Bestandsaufnahme durch. Ich analysiere die technische Basis deiner Website und identifiziere die Suchbegriffe, mit denen du deine Zielgruppe wirklich erreichst. Wir schauen uns nicht nur das klassische Suchvolumen an, sondern prüfen auch, wie wir dein Business optimal für lokale Anfragen in Langenfeld und spezifische Nutzerfragen positionieren.",
    result: "Eine glasklare Roadmap für deine organische Reichweite.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Onpage- & GEO-Optimierung",
    body: "In der aktiven Phase optimieren wir die Struktur und den Content deiner Seite. Wir setzen auf semantisches HTML und strukturierte Daten, damit deine Inhalte sowohl von Google als auch von KI-Modellen wie ChatGPT oder Gemini perfekt verstanden werden. Wir bauen deine Autorität als Expertenquelle auf, um in den generativen Antworten der KIs als Top-Empfehlung zu erscheinen.",
    result: "Eine technisch perfekte Website, die Menschen und Bots überzeugt.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Monitoring & Kontinuierliche Anpassung",
    body: "Suchmaschinen und KI-Algorithmen entwickeln sich rasant weiter. Nach der ersten Optimierung behalte ich deine Rankings und die Sichtbarkeit in KI-Antworten genau im Auge. Durch monatliche Reportings machen wir Erfolge messbar und passen die Strategie laufend an neue Trends und Updates an, damit dein digitaler Vorsprung dauerhaft gesichert bleibt.",
    result: "Nachhaltige Sichtbarkeit und messbares Wachstum.",
  },
];

export function SeoGeoProcess() {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" aria-label="In 3 Schritten zu maximaler Sichtbarkeit">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Der Ablauf
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-4">
            In 3 Schritten zu{" "}
            <span className="text-accent">maximaler Sichtbarkeit.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Mein strategischer Fahrplan für Top-Platzierungen in Google und KI-Systemen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col gap-5 hover:border-accent/30 transition-[border-color]"
              >
                {/* Icon + number */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20">
                    <Icon size={26} className="text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-4xl font-display font-extrabold text-white/10 leading-none select-none">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-snug">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {step.body}
                </p>

                {/* Result */}
                <div className="mt-auto pt-5 border-t border-white/10">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                    Ergebnis
                  </p>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {step.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
