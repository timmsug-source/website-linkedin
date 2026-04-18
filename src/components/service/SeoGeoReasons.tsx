import { Users, Star, Bot, MapPin, TrendingUp, BarChart2, AlertTriangle } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Potenzielle Kunden landen beim Wettbewerb",
    body: "Jeden Tag suchen Menschen in Google und KI-Tools nach genau deinen Lösungen. Wenn du dort nicht auftauchst, gehen diese wertvollen Leads direkt zu deiner Konkurrenz. Du überlässt das Feld kampflos anderen, während dein eigenes Potenzial ungenutzt bleibt.",
  },
  {
    icon: Star,
    title: "Vertrauensverlust durch fehlende Präsenz",
    body: "Kunden nutzen die Suche heute zur Verifizierung. Finden sie dich nicht auf der ersten Seite oder in lokalen Suchen, wirkt dein Business weniger etabliert oder sogar irrelevant. Eine starke Platzierung ist ein digitales Gütesiegel für deine Expertise.",
  },
  {
    icon: Bot,
    title: "Abgeschlagen in der KI-Revolution",
    body: "Die Suche verändert sich radikal. Wenn deine Website nicht für GEO (Generative Engine Optimization) optimiert ist, werden ChatGPT, Gemini und Co. dich niemals als Empfehlung ausspielen. Du verpasst den Anschluss an die wichtigste Technologie-Wende seit Erfindung der Suchmaschine.",
  },
  {
    icon: MapPin,
    title: "Sinkende Relevanz deines Standorts",
    body: "Ohne lokales SEO wirst du selbst in deiner direkten Nachbarschaft (z. B. in Langenfeld) übersehen. Wenn Mitbewerber ihre Google Business Profile besser pflegen, werden sie bei lokalen Anfragen bevorzugt – und du verlierst Kunden direkt vor deiner Haustür.",
  },
  {
    icon: TrendingUp,
    title: "Langfristig steigende Marketingkosten",
    body: "SEO ist eine Investition, die organisch wächst. Ohne eine saubere organische Strategie bist du dauerhaft von teuren Werbeanzeigen (Ads) abhängig. Sobald du das Budget dort stoppst, versiegen deine Anfragen sofort. SEO baut dir hingegen eine nachhaltige Quelle auf.",
  },
  {
    icon: BarChart2,
    title: "Fehlende Daten für kluge Entscheidungen",
    body: "Ohne professionelles SEO-Monitoring handelst du im Blindflug. Du weißt nicht, wonach deine Kunden wirklich suchen oder warum sie bei der Konkurrenz kaufen. Wer seine Daten nicht versteht, kann sein Business nicht gezielt skalieren.",
  },
];

export function SeoGeoReasons() {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" aria-label="Warum Sichtbarkeit entscheidend ist">
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
            Warum du dir mangelnde Sichtbarkeit{" "}
            <span className="text-red-500">nicht leisten kannst.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wer nicht gefunden wird, existiert für seine Kunden nicht.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-100 rounded-2xl p-7 hover:border-red-500/20 hover:shadow-md transition-[border-color,box-shadow]"
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
