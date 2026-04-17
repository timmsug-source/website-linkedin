import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";

export function WebdesignAbout() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Über Timm Schurig">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Portrait */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl">
              <Image
                src="/images/timm-portrait.jpg"
                alt="Timm Schurig – Webdesigner und SEO-Experte aus Langenfeld"
                fill
                className="object-cover object-top"
              />
              {/* Subtle overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating info badge */}
            <div className="absolute -bottom-6 left-6 lg:left-0 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Standort</p>
                <p className="font-bold text-slate-900 text-sm">Langenfeld, NRW</p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="pt-8 lg:pt-0">
            <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Dein Ansprechpartner
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 leading-tight mb-8">
              Hi, ich bin{" "}
              <span className="text-accent">Timm Schurig.</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-lg text-slate-600 leading-relaxed">
                Seit über 5 Jahren brenne ich für alles, was im Web nicht nur gut aussieht, sondern auch funktioniert. Als Webdesigner und SEO-Experte aus Langenfeld helfe ich Unternehmen dabei, aus der Masse herauszustechen und bei Google dort zu landen, wo sie hingehören: ganz nach oben.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Für mich ist eine Website weit mehr als ein digitales Aushängeschild. Sie ist dein wichtigster Mitarbeiter. Mit der Erfahrung aus einem halben Jahrzehnt kombiniere ich kreatives Design mit technischer Präzision, um digitale Erlebnisse zu schaffen, die deine Kunden begeistern und dein Business voranbringen.
              </p>
            </div>

            {/* Key facts */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Clock, label: "5+ Jahre Erfahrung" },
                { icon: Star, label: "100% PageSpeed Standard" },
                { icon: MapPin, label: "Lokal & remote" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  <Icon size={15} className="text-accent" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>

            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-7 py-3.5 font-bold transition-[background-color] shadow-lg text-sm"
            >
              Mehr über mich erfahren <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
