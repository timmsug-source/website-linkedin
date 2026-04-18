import { Search, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Prozess-Analyse & Strategie",
    body: 'Zuerst identifizieren wir die \u201eZeitfresser\u201c in deinem Alltag. Ich schaue mir deine aktuellen Workflows an \u2013 von der ersten Kundenanfrage bis zum Projektabschluss. Gemeinsam legen wir fest, welche Tools (CRM, E-Mail, Kalender) wir wie verkn\u00fcpfen, um die maximale Effizienz f\u00fcr dein Business herauszuholen.',
    result: "Ein klarer Plan für deine automatisierte Infrastruktur.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Entwicklung & Integration",
    body: "Jetzt baue ich die Brücken zwischen deinen Tools. Mit Experten-Setups in Zapier oder Make erstelle ich Workflows, die Daten fehlerfrei übertragen und Aufgaben selbstständig erledigen. Dabei achte ich auf eine saubere Logik und integriere intelligente Filter, damit dein System auch bei komplexen Anforderungen stabil läuft.",
    result: "Ein voll funktionsfähiges, vernetztes Ökosystem.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Testlauf & Full-Service Monitoring",
    body: "Bevor das System in den Live-Betrieb geht, testen wir jeden Workflow auf Herz und Nieren. Nach dem Go-Live lasse ich dich nicht allein: Ich überwache die Prozesse im Hintergrund und sorge dafür, dass alles reibungslos läuft. Sobald sich dein Business weiterentwickelt, passen wir die Automatisierungen flexibel an.",
    result: "Dauerhafte Zeitersparnis und technische Sicherheit.",
  },
];

export function AutomatisierungenProcess() {
  return (
    <section className="py-24 px-6 bg-slate-900 overflow-hidden" aria-label="In 3 Schritten zum automatisierten Business">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Der Ablauf
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
            In 3 Schritten zu deinem{" "}
            <span className="text-accent">automatisierten Business.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Weg von manuellen Prozessen, hin zu einem System, das für dich arbeitet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

          {/* Connecting line (desktop only) */}
          <div
            className="absolute hidden lg:block top-14 left-[calc(33.33%-1px)] right-[calc(33.33%-1px)] h-px border-t-2 border-dashed border-accent/30"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3" aria-hidden="true">
                    <ArrowRight size={20} className="text-accent/40 rotate-90" />
                  </div>
                )}

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-5 h-full hover:border-accent/30 transition-[border-color]">

                  {/* Step indicator + icon */}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
