import { AlertTriangle, Eye, Search, TrendingDown, Zap, ShieldX, Clock } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Eye,
    title: "Der erste Eindruck ist unbestechlich",
    body: "Innerhalb von Millisekunden entscheiden Besucher, ob sie dir vertrauen. Eine veraltete oder unprofessionelle Website suggeriert mangelnde Qualität in deiner Arbeit. Wer online nicht überzeugt, bekommt oft gar nicht erst die Chance auf ein Gespräch.",
  },
  {
    number: "02",
    icon: Search,
    title: "Unsichtbarkeit bei Google & KI",
    body: "Eine Website ohne saubere SEO-Struktur und KI-Ready-Architektur existiert für moderne Suchalgorithmen schlichtweg nicht. Wenn deine Konkurrenz gefunden wird und du nicht, verlierst du jeden Tag aktiv Marktanteile an die Wettbewerber.",
  },
  {
    number: "03",
    icon: TrendingDown,
    title: "Verbranntes Marketing-Budget",
    body: "Du schaltest Anzeigen oder machst Social Media, aber deine Website konvertiert nicht? Dann wirfst du Geld aus dem Fenster. Eine schlechte User Experience (UX) ist wie ein Eimer voller Löcher – egal wie viel Traffic du oben reinkippst, unten kommt kein Kunde raus.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Vertrauensverlust durch langsame Ladezeiten",
    body: "In der Ära von High-Speed-Internet ist Geduld ein Fremdwort. Jede Sekunde Ladezeit erhöht die Absprungrate massiv. Kunden assoziieren eine langsame Website mit einem unzuverlässigen Service. Geschwindigkeit ist heute ein hartes Vertrauensmerkmal.",
  },
  {
    number: "05",
    icon: ShieldX,
    title: "Sicherheitsrisiken & Abmahnfallen",
    body: "Veraltete Systeme und lückenhafter Datenschutz (DSGVO) sind ein Spiel mit dem Feuer. Eine schlechte Website ist nicht nur ein Ziel für Hacker, sondern auch für teure Abmahnungen. Ein professioneller Standard schützt dich vor finanziellen und rechtlichen Schäden.",
  },
  {
    number: "06",
    icon: Clock,
    title: "Hoher manueller Zeitaufwand",
    body: "Eine minderwertige Website klärt keine Fragen und qualifiziert keine Leads. Das Ergebnis: Du verbringst Stunden mit unqualifizierten Anfragen und erklärst Grundlagen, die deine Website längst hätte erledigen können. Eine schlechte Website raubt dir deine wertvollste Ressource: Zeit.",
  },
];

export function WebdesignReasons() {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" aria-label="Warum du eine professionelle Website brauchst">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-5 py-3 mb-8">
            <AlertTriangle size={18} className="text-red-500" aria-hidden="true" />
            <span className="text-red-500 font-bold text-sm uppercase tracking-widest">
              Das Risiko
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-6">
            Warum du dir eine mittelmäßige Website{" "}
            <span className="text-red-500">nicht leisten kannst.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Dein digitaler Auftritt ist entweder dein härtester Mitarbeiter oder dein größtes Hindernis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white border border-slate-100 rounded-2xl p-7 hover:border-red-500/20 hover:shadow-md transition-[border-color,box-shadow] group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-red-500" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
