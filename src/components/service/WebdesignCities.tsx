import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const cities = [
  {
    name: "Langenfeld",
    href: "/webdesign/langenfeld",
    image: "/images/cities/langenfeld.png",
    teaser: "Webdesign für Unternehmen in Langenfeld, Monheim und Umgebung – individuell, schnell und bei Google gefunden.",
  },
  {
    name: "Haan",
    href: "/webdesign/haan",
    image: "/images/cities/haan.png",
    teaser: "Professionelle Websites für Betriebe in Haan, Solingen und Erkrath – modern gestaltet und technisch perfekt.",
  },
  {
    name: "Leichlingen",
    href: "/webdesign/leichlingen",
    image: "/images/cities/leichlingen.png",
    teaser: "Individuelle Webseiten für Unternehmen in Leichlingen, Leverkusen und Burscheid – die wirklich Kunden bringen.",
  },
];

export function WebdesignCities() {
  return (
    <section
      className="py-20 px-6 bg-white border-t border-slate-100"
      aria-label="Webdesign in deiner Stadt"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
            <MapPin size={14} aria-hidden="true" />
            Lokales Webdesign
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">
            Webdesign in deiner <span className="text-accent">Stadt.</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Als Webdesigner aus der Region kenne ich den lokalen Markt – und weiß, was Kunden in deiner Stadt wirklich überzeugt.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="group bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:border-accent/20 transition-[border-color,box-shadow] overflow-hidden flex flex-col"
            >
              {/* City Image */}
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <Image
                  src={city.image}
                  alt={`Webdesign ${city.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                  <MapPin size={12} className="text-accent" aria-hidden="true" />
                  <span className="text-white text-xs font-bold">{city.name}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-accent transition-colors">
                  Webdesign {city.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                  {city.teaser}
                </p>
                <div className="flex items-center text-accent text-sm font-bold gap-1 group-hover:gap-2 transition-[gap]">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
