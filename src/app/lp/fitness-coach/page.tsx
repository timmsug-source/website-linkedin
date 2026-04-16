"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2, MonitorSmartphone, Rocket, Clock, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/utils";
import Image from "next/image";

const portfolioItems = [
  { img: "/images/portfolio/fitness-1.png", cat: "Fitness", title: "Personal Training" },
  { img: "/images/portfolio/lifestyle-1.png", cat: "Lifestyle", title: "Mindset Coaching" },
  { img: "/images/portfolio/business-1.png", cat: "Business", title: "Strategie-Beratung" },
  { img: "/images/portfolio/nutrition-1.png", cat: "Ernährung", title: "Nutrition Pro" },
  { img: "/images/portfolio/yoga-1.png", cat: "Yoga", title: "Elite Studios" },
  { img: "/images/portfolio/personal-training-1.png", cat: "Training", title: "Transformation" }
];

export default function LinkedInFunnelPage() {
  return (
    <main className="min-h-screen bg-white pb-20 overflow-x-hidden">
      {/* Top Offer Bar (Replaces Navbar) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-slate-900 py-3 px-6 text-white fixed top-0 w-full z-50 border-b border-white/10"
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
      <section className="pt-48 pb-20 px-6 relative">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-50"></div>
          <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-400/5 blur-[120px] rounded-full opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-8">
                Speziell für LinkedIn Outbound
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8">
                Verwandle dein LinkedIn Profil in eine <span className="text-accent">Meeting-Maschine</span>.
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Du machst Akquise, aber die Leute buchen nicht? Wir bauen dir eine Landingpage, die aus "Profilbesuchern" zahlende Coaching-Kunden macht.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <ShieldCheck size={20} className="text-accent" /> Professionelles Branding
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <ShieldCheck size={20} className="text-accent" /> High-Speed Ladezeiten
                </div>
              </div>
            </motion.div>

            {/* Right: Offer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-[3rem] opacity-50"></div>

              <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-2xl hover:shadow-accent/10 transition-shadow duration-500 group">
                <div className="absolute top-6 right-8">
                  <div className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full animate-bounce">
                    Limited
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">LinkedIn Special</h3>
                  <p className="text-slate-500 text-sm">Valid today for your outreach</p>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-between text-slate-400 line-through text-sm font-bold">
                    <span>Regulärer Preis</span>
                    <span>450€</span>
                  </div>
                  <div className="flex items-center justify-between bg-accent/5 border border-accent/10 p-4 rounded-2xl">
                    <span className="text-slate-900 font-bold">Dein Sonderpreis</span>
                    <span className="text-3xl font-black text-accent">150€</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {[
                    "Custom Design & Copy",
                    "Optimiert für LinkedIn Conversions",
                    "Inkl. Domain & Hosting Setup",
                    "Ready in max. 7 Tagen"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full h-14 font-bold transition-all shadow-lg shadow-accent/20 group-hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Platz sichern <ArrowRight size={18} />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center gap-2 text-slate-500 text-sm font-bold hover:text-slate-900 transition-colors"
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
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 relative overflow-hidden"
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:border-accent/30 transition-all hover:shadow-xl group"
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-100"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
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
                  <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">Case Study ansehen</p>
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
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
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-12 h-20 text-xl font-bold w-full max-w-md shadow-2xl shadow-accent/30 transition-all hover:scale-[1.03]"
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
