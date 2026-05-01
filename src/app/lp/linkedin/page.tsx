import {
  ArrowRight,
  Globe,
  Search,
  MapPin,
  MessageCircle,
  Zap,
  TrendingUp,
  ShieldAlert,
  MousePointerClick,
  Activity,
} from "lucide-react";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/utils";
import { ContactForm } from "@/components/ui/ContactForm";

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    title: "Vom Kontakt zum Kunden",
    description: "Wir verwandeln deine LinkedIn-Kontakte durch psychologisch optimierte Funnels in zahlende Kunden.",
    icon: TrendingUp,
  },
  {
    title: "Sichtbarkeit bei Google",
    description: "Dein Expertenstatus wird durch SEO & GEO-Optimierung auch außerhalb von LinkedIn zementiert.",
    icon: Search,
  },
  {
    title: "Automatisierte Leads",
    description: "Deine Website arbeitet 24/7 als deine beste Vertriebskraft und generiert passiv Anfragen.",
    icon: Zap,
  },
  {
    title: "Messbare Ergebnisse",
    description: "Schluss mit Hoffnungs-Marketing. Wir liefern Daten, PageSpeed und echte Conversions.",
    icon: Globe,
  },
];

const problems = [
  {
    icon: TrendingUp,
    title: "Viel Lärm, kein Ertrag",
    description:
      "Likes zahlen keine Rechnungen; ohne Conversion-Strategie verpufft dein Aufwand.",
  },
  {
    icon: MousePointerClick,
    title: "Die digitale Sackgasse",
    description:
      "Interessenten finden keinen klaren Weg zum Erstgespräch und verlassen deine Seite frustriert.",
  },
  {
    icon: Search,
    title: "Unsichtbar bei der Suche",
    description:
      "Du bist vom Algorithmus abhängig, weil du für aktiv Suchende auf Google nicht existierst.",
  },
];

const solutions = [
  {
    icon: Globe,
    tag: "Design",
    title: "Strategisches Webdesign",
    description:
      "Wir bauen Seiten, die nicht nur gut aussehen, sondern durch klare Führung und messbare PageSpeed die Conversion-Rate massiv steigern.",
    accent: "border-blue-500/30 hover:border-blue-400/50",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Search,
    tag: "SEO",
    title: "SEO-Dominanz",
    description:
      "Wir sorgen dafür, dass du nicht nur im Feed auftauchst, sondern bei den entscheidenden Suchanfragen deiner Zielgruppe ganz oben stehst.",
    accent: "border-emerald-500/30 hover:border-emerald-400/50",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Zap,
    tag: "Funnel",
    title: "Automatisierte Qualifizierung",
    description:
      "Durch gezielte Funnel-Logik landen nur noch die Leads in deinem Kalender, die wirklich zu deinem Angebot passen und kaufbereit sind.",
    accent: "border-orange-500/30 hover:border-orange-400/50",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "Wir analysieren deinen aktuellen LinkedIn-Auftritt und deine Conversion-Sackgassen. Keine Floskeln – klare Diagnose.",
  },
  {
    number: "02",
    title: "Transformation",
    description:
      "Ich baue deine Website und optimiere deine SEO/GEO-Präsenz für maximale Sichtbarkeit. Handwerk statt Baukasten.",
  },
  {
    number: "03",
    title: "Monetarisierung",
    description:
      "Wir schalten die Verbindung zwischen LinkedIn und deiner Website scharf. Deine Interaktionen werden zu Terminen.",
  },
];

const stats = [
  { stat: "100%", label: "PageSpeed Score" },
  { stat: "< 24h", label: "Antwortzeit" },
  { stat: "3-in-1", label: "Website + SEO + GEO" },
];

// ─── Page (Server Component) ─────────────────────────────────────────────────

export default function LinkedInLP() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
                <Zap size={12} /> LinkedIn × Website × SEO
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] mb-7">
                Mach aus deinen LinkedIn-Likes{" "}
                <span className="text-accent">endlich echte Anfragen.</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                Du investierst Stunden in Content und Interaktionen, aber dein
                Postfach bleibt leer? Wir bauen das digitale Fundament, das
                deine Reichweite in messbare Leads verwandelt – durch
                Conversion-Websites und gezieltes SEO&nbsp;&amp;&nbsp;GEO.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
              >
                <MessageCircle size={20} /> Melde dich auf WhatsApp
              </a>
              <p className="text-slate-500 text-sm mt-4">
                Kostenlos &amp; unverbindlich · Antwort innerhalb von 2 Stunden
              </p>
            </div>

            {/* Right – Benefits */}
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-accent/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">
                        {b.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left – Content */}
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
                Das Problem
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-8">
                Die Reichweiten-Falle:{" "}
                <span className="text-slate-400">
                  Warum dein Content bisher nicht verkauft
                </span>
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                <p>
                  Du investierst Stunden in Content, erhältst Applaus und Likes – doch am Ende des Monats bleibt dein Postfach leer. Das Problem ist nicht deine Sichtbarkeit, sondern der Bruch in deiner Verkaufsstrategie. Wenn potenzielle Kunden von deinem Profil auf deine Website klicken, landen sie in einer Sackgasse. Statt Vertrauen aufzubauen und den Verkauf abzuschließen, sorgt ein unklarer Webauftritt für sofortige Absprünge.
                </p>
                <p>
                  Du verbrennst wertvolle Leads, weil deine Website nicht die Autorität ausstrahlt, die dein Content verspricht. Ohne einen optimierten Funnel und eine klare Positionierung bleibt dein Marketing ein teures Hobby statt ein berechenbarer Umsatzmotor.
                </p>
              </div>

              {/* Vertical List of Problems */}
              <div className="space-y-6">
                {problems.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-5 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                        <Icon size={20} className="text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base mb-1">
                          {p.title}:
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-12">
                <a
                  href={CONTACT_URL}
                  className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-accent hover:text-white rounded-full px-10 py-4 font-bold transition-all shadow-xl shadow-white/5"
                >
                  <Search size={20} /> Kostenloser Website-Check
                </a>
              </div>
            </div>

            {/* Right – Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-[2.5rem] blur-2xl opacity-30" />
              <div className="relative bg-slate-800 border border-slate-700 rounded-[2.5rem] p-2 overflow-hidden shadow-2xl">
                <img
                  src="/images/reach_trap.png"
                  alt="LinkedIn Reach Trap Visual"
                  className="w-full h-auto rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950 overflow-hidden border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          {/* Top part: Text & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-8">
                Vom Content-Creator zum Experten-Business:{" "}
                <span className="text-accent">
                  Deine Website als Conversion-Maschine
                </span>
              </h2>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Schluss mit Hoffnungs-Marketing. Wir verwandeln deine flüchtige Reichweite in eine digitale Verkaufspsychologie, die Besucher nicht nur informiert, sondern überzeugt. Die Lösung liegt in einem nahtlosen Übergang: Deine Website wird zur logischen Fortsetzung deiner Expertise, die das Vertrauen aus Social Media validiert und direkt in qualifizierte Anfragen übersetzt.
                </p>
                <p>
                  Statt blindem Posting setzen wir auf ein technisches und inhaltliches Fundament, das für dich arbeitet – auch wenn du gerade nicht online bist. Wir optimieren die User Journey so, dass jeder Klick ein Ziel hat. So machst du dich unabhängig von launischen Algorithmen und baust einen planbaren Kanal für Neukunden auf.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-30" />
              <img
                src="/images/lead_machine.png"
                alt="Lead Machine Solution Visual"
                className="w-full h-auto rounded-[2rem] object-cover relative z-10 border border-slate-800 shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom part: Solution Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-start gap-6 group p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-accent/50 transition-all hover:translate-y-[-4px]"
                >
                  <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-black/20`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-white text-xl">
                        {s.title}
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-800 px-2 py-0.5 rounded">
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA for this section */}
          <div className="text-center">
            <a
              href={CONTACT_URL}
              className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-accent hover:text-white rounded-full px-12 py-5 font-extrabold text-lg transition-all shadow-2xl shadow-white/5"
            >
              <Search size={24} /> Kostenloser Website-Check
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. PROZESS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Wie wir zusammenarbeiten
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              In 3 Schritten zur{" "}
              <span className="text-accent">Lead-Maschine.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-accent/30 to-accent/10" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-slate-800 border-2 border-accent/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent font-black text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── 4.5 KONTAKT-FORMULAR ────────────────────────────────────────── */}
      <ContactForm pageName="LinkedIn Landingpage" />

      {/* ── 5. VISION / ERGEBNIS ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
            Das Ergebnis
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-10">
            Schluss mit{" "}
            <span className="text-slate-500">Hoffnungs-Marketing.</span>
          </h2>

          <div className="relative bg-slate-800 border border-slate-700 rounded-[2rem] p-10 md:p-14 text-left overflow-hidden mb-12">
            <div className="absolute top-4 right-8 text-8xl font-serif text-accent/10 leading-none select-none" aria-hidden="true">
              "
            </div>
            <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-medium relative z-10">
              Stell dir vor, du wachst auf und hast{" "}
              <span className="text-white font-bold">
                Anfragen im Postfach
              </span>{" "}
              von Leuten, die deinen Content gesehen haben{" "}
              <span className="text-accent font-bold">und</span> durch deine
              Website davon überzeugt wurden, dass du die einzige logische
              Lösung für ihr Problem bist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-2xl py-6 px-4"
              >
                <p className="text-3xl font-black text-accent mb-1">
                  {item.stat}
                </p>
                <p className="text-slate-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINALER CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-6">
            Bereit?
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-6">
            Bereit, das Spiel{" "}
            <span className="text-accent">umzudrehen?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Hör auf, Zeit in Reichweite zu investieren, die sich nicht
            auszahlt. Lass uns deine Maschine bauen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_URL}
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-4 font-bold text-base transition-[background-color] shadow-lg shadow-accent/20"
            >
              Kostenloses Erstgespräch buchen <ArrowRight size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 border border-slate-600 hover:border-accent/60 text-slate-300 hover:text-white rounded-full px-8 py-4 font-semibold text-base transition-all"
            >
              <MessageCircle size={18} /> WhatsApp schreiben
            </a>
          </div>
          <p className="text-slate-600 text-sm mt-8">
            Kein Risiko. Kein Vertrag. Nur ein ehrliches Gespräch.
          </p>
        </div>
      </section>

      {/* ── 7. FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Timm Schurig. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-8 text-slate-500 text-sm">
            <Link href="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
