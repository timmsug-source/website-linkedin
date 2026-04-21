"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2, MonitorSmartphone, Rocket, Clock, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/lib/utils";
import Image from "next/image";

const portfolioItems = [
  { img: "/images/portfolio/fitness-1.webp", cat: "Personal Training", title: "Bestform Coaching" },
  { img: "/images/portfolio/strength-1.webp", cat: "Kraftsport", title: "Iron Performance" },
  { img: "/images/portfolio/yoga-1.webp", cat: "Yoga & Mindset", title: "Innere Ruhe" },
  { img: "/images/portfolio/transformation-1.webp", cat: "Online Coaching", title: "Transformation Pro" },
  { img: "/images/portfolio/yoga-2.webp", cat: "Vinyasa Flow", title: "Yoga & Energie" },
  { img: "/images/portfolio/premium-fitness-1.webp", cat: "High-End Coaching", title: "Elite Vitality" }
];

export default function LinkedInFunnelPage() {
  return (
    <main className="min-h-screen bg-white pb-20 overflow-x-hidden">
      {/* Top Offer Bar (Replaces Navbar) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-900 py-3 px-6 text-white fixed top-0 w-full z-50 border-b border-white/10"
        style={{ willChange: "transform" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-sm font-medium opacity-90 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Timm Schurig · Exklusives LinkedIn-Angebot
          </span>
          <div className="bg-accent/20 border border-accent/40 text-accent font-bold px-4 py-1.5 rounded-full text-sm inline-flex items-center gap-2 shadow-lg shadow-accent/10">
            Sonderpreis: 150€ (statt 450€)
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lp/hero-bg-dark.webp"
            alt="Premium Fitness Hub"
            fill
            className="object-cover opacity-60"
            priority
            quality={85}
          />
          {/* Dark Gradients for drama and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-slate-300 text-sm font-bold mb-8 border border-white/10">
                Speziell für LinkedIn Outbound
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
                Verwandle dein LinkedIn Profil in eine <span className="text-accent">Meeting-Maschine</span>.
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl font-medium">
                Du machst Akquise, aber die Leute buchen nicht? Wir bauen dir eine Landingpage, die aus "Profilbesuchern" zahlende Coaching-Kunden macht.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-3 text-white font-bold">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg shadow-accent/20">
                    <ShieldCheck size={22} className="text-accent" />
                  </div>
                  Premium Branding
                </div>
                <div className="flex items-center gap-3 text-white font-bold">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30 shadow-lg shadow-accent/20">
                    <Rocket size={22} className="text-accent" />
                  </div>
                  High-Speed Sales-Hub
                </div>
              </div>
            </motion.div>

            {/* Right: Offer Card (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-[3rem] opacity-30"></div>

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-8 md:p-12 shadow-2xl group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10"></div>

                <div className="absolute top-8 right-10">
                  <div className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full animate-pulse shadow-lg shadow-accent/30">
                    Limitiert
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2">LinkedIn Special</h3>
                  <p className="text-slate-400 text-sm">Gültig für deine heutige Akquise</p>
                </div>

                <div className="space-y-4 mb-12">
                  <div className="flex items-center justify-between text-slate-500 line-through text-sm font-bold">
                    <span>Regulärer Preis</span>
                    <span>450€</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 p-6 rounded-[2rem] shadow-inner">
                    <span className="text-white font-bold">Dein Sonderpreis</span>
                    <span className="text-5xl font-black text-accent tracking-tighter">150€</span>
                  </div>
                </div>

                <div className="space-y-5 mb-12">
                  {[
                    "Individuelles Design & Copy",
                    "Optimiert für LinkedIn Conversions",
                    "Inkl. Domain & Hosting Setup",
                    "Live in max. 7 Tagen"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm text-slate-200 font-semibold">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/20">
                        <CheckCircle2 size={14} className="text-accent" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href={PHONE_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white rounded-full h-16 text-lg font-bold transition-all shadow-xl shadow-accent/40 group-hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Platz sichern <ArrowRight size={22} />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 text-slate-400 text-sm font-bold hover:text-white transition-colors"
                  >
                    Fragen? WhatsApp schreiben
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "-50px" }}
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl opacity-50 rounded-full"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-2 rounded-xl text-red-500">
                <AlertCircle size={28} />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-slate-900">Das unsichtbare Problem</h2>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                Du verbringst Stunden damit, auf LinkedIn Kontakte zu knüpfen. Du schreibst tolle DMs, pflegst dein Netzwerk und teilst deine Expertise.
              </p>
              <p>
                Doch in dem Moment, in dem ein Interessent dein Profil verlässt, um mehr über dich zu erfahren, <span className="text-slate-900 font-bold underline decoration-red-300 underline-offset-4 decoration-2">verlierst du ihn</span>.
              </p>
              <p className="bg-slate-50 border-l-4 border-slate-900 p-6 italic text-slate-900">
                Warum? Weil du keinen "Sales-Hub" hast, der innerhalb von 3 Sekunden beweist, dass du die Lösung für sein Problem hast.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lösung Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">Die "Conversion-Falle" für deine Leads</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">Wir bauen dir eine Landingpage, von der man sich nicht mehr abwenden kann, sobald man darauf gelandet ist.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MonitorSmartphone size={32} />, title: "Premium Design", desc: "Kein generischer Baukasten-Look. Wir bauen ein Design, das deine Expertise widerspiegelt." },
              { icon: <Rocket size={32} />, title: "Lead Fokus", desc: "Jedes Wort und jedes Element ist darauf ausgerichtet, das Erstgespräch zu verkaufen." },
              { icon: <Clock size={32} />, title: "Blitzschnell Live", desc: "Vom Erstgespräch bis zur fertigen Seite vergehen in der Regel weniger als 7 Tage." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:border-accent/30 transition-all hover:shadow-xl group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Referenzen Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">Ergebnisse statt Versprechen</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 font-display">Webdesign-Referenzen unserer Agentur</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-100"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Label */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 shadow-lg">
                    {item.cat}
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="text-center p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">Projekt ansehen</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-20 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">In 3 Schritten live gehen</h2>
            <p className="text-slate-400">Transparenter Prozess für schnelle Ergebnisse.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              { n: "01", t: "Stategie Call", d: "Wir klären dein Angebot und deine Zielgruppe." },
              { n: "02", t: "Umsetzung", d: "Wir bauen das Design und schreiben die Texte." },
              { n: "03", t: "Go-Live", d: "Deine LinkedIn Meeting-Maschine geht online." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent text-white font-display font-black text-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Offer CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0, margin: "-50px" }}
          className="max-w-3xl mx-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex justify-center mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" className="text-amber-400" />)}
            </div>
            <span className="ml-3 font-bold text-slate-900">5.0 von unseren Coaches</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">
            Bereit für mehr <span className="text-accent">Meetings?</span>
          </h2>

          <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Sichere dir jetzt deinen Platz für den LinkedIn-Sonderpreis von 150€. Das Angebot ist auf die nächsten 3 Plätze limitiert.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <a
              href={PHONE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-20 text-xl font-bold w-full max-w-md shadow-2xl shadow-accent/30 transition-all hover:scale-[1.02]"
            >
              Jetzt für 150€ sichern
              <ArrowRight className="ml-2" size={24} />
            </a>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <Clock size={16} /> Nur noch für kurze Zeit verfügbar
            </div>
          </div>
        </motion.div>
      </section>

      {/* Minimalest Footer */}
      <footer className="py-10 text-center border-t border-slate-100">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Timm Schurig · <a href="/impressum" className="hover:text-accent">Impressum</a> · <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
        </p>
      </footer>
    </main>
  );
}
