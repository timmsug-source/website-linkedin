import type { Metadata } from "next";
import Image from "next/image";
import { PHONE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Test-Seite",
  robots: { index: false, follow: false },
};

export default function TestSeitePage() {
  return (
    <div className="min-h-screen bg-[#050a18]">
      {/* Hero mit Hintergrundbild */}
      <section className="relative min-h-screen flex flex-col">
        {/* Hintergrundbild */}
        <Image
          src="/images/test-hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dunkler Overlay für Text-Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a18]/80 via-[#050a18]/40 to-transparent" />

        {/* Header / Navigation */}
        <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
          <div className="text-white font-black text-2xl tracking-tight">
            Timm<span className="text-[#00bc7d]">.</span>
          </div>
          <a
            href={PHONE_URL}
            className="bg-[#00bc7d] hover:bg-[#00bc7d]/90 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Jetzt anrufen
          </a>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 pb-24">
          <div className="max-w-2xl">
            <p className="text-[#00bc7d] font-bold text-sm uppercase tracking-widest mb-6">
              Webdesign · SEO · GEO
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
              Websites,<br />
              die <span className="text-[#00bc7d]">performen.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              Strategisch. Sichtbar. Zukunftssicher. Ich baue dir eine Website,
              die nicht nur gut aussieht – sondern Kunden bringt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center bg-[#00bc7d] hover:bg-[#00bc7d]/90 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
              >
                Projekt starten →
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center border border-white/20 hover:border-[#00bc7d]/50 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </div>

        {/* Scroll-Indikator */}
        <div className="relative z-10 flex justify-center pb-8">
          <div className="flex flex-col items-center gap-2 text-white/40 text-xs">
            <span>Scroll</span>
            <div className="w-px h-8 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Leistungen Sektion */}
      <section id="leistungen" className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🖥️",
                title: "Web Design",
                desc: "Ästhetisch. Nutzerfreundlich. Conversion-stark.",
              },
              {
                icon: "📈",
                title: "SEO",
                desc: "Sichtbarkeit steigern. Rankings verbessern.",
              },
              {
                icon: "🌐",
                title: "GEO",
                desc: "Generative Engine Optimization für KI-Suchen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00bc7d]/30 hover:bg-white/8 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
