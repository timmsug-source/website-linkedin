"use client";

import { useRef } from "react";
import Image from "next/image";
import { Search, ChevronDown, Star, Home, Users, Euro, BarChart3, ShieldCheck, Check, Info, ChevronLeft, ChevronRight, Camera, RotateCw, LayoutDashboard, Key } from "lucide-react";

export function MaklerExampleHeader() {
  const menuItems = [
    { name: "Immobilien", hasDropdown: true },
    { name: "Verkaufen", hasDropdown: true },
    { name: "Bewerten", hasDropdown: false },
    { name: "Finanzieren", hasDropdown: false },
    { name: "Über uns", hasDropdown: true },
    { name: "Wissen", hasDropdown: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top Banner - Single Line */}
      <div className="bg-[#0f172a] py-3 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Showcase: Branchen-Lösung</span>
            <div className="w-[1px] h-3 bg-slate-700 hidden md:block" />
            <p className="text-[11px] font-bold text-slate-300 hidden md:block">Portfolio-Referenz für Immobilienmakler</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] uppercase font-black tracking-widest text-slate-500">Live Demo</span>
          </div>
        </div>
      </div>

      {/* Navbar Row - Single Line Content */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <nav className="bg-white/95 backdrop-blur-md rounded-full h-20 flex items-center justify-between px-8 border border-white/20 shadow-2xl">
          {/* Logo - Single Line */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Home size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">Beispiel Immo</span>
          </div>

          {/* Menu - Single Line */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button key={item.name} className="flex items-center gap-1 text-slate-700 font-bold hover:text-orange-600 transition-colors text-[11px] uppercase tracking-widest whitespace-nowrap">
                {item.name}
                {item.hasDropdown && <ChevronDown size={12} />}
              </button>
            ))}
          </div>

          {/* CTA - Single Line */}
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 rounded-full font-black text-[11px] uppercase tracking-widest transition-all shadow-lg shadow-orange-600/20 active:scale-95 whitespace-nowrap">
            Jetzt kontaktieren &gt;
          </button>
        </nav>
      </div>
    </header>
  );
}

export function MaklerExampleHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-44">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/makler_example_hero.png"
          alt="Modernes Luxus-Interieur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-auto mb-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <p className="text-orange-600 font-black text-sm tracking-[0.3em] mb-6 inline-block bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full border border-white/80">
              PERSÖNLICH. REGIONAL. KOMPETENT.
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 leading-[1.05] mb-8">
              Ihr Immobilienziel.<br />
              <span className="text-orange-600">Unsere Mission.</span>
            </h1>
            <p className="text-xl text-slate-800 font-bold mb-12 max-w-lg leading-relaxed">
              Ob Kauf, Verkauf oder Bewertung – wir begleiten Sie mit Erfahrung, Leidenschaft und einem starken Netzwerk.
            </p>

            {/* Search Box */}
            <div className="bg-white/80 backdrop-blur-2xl p-3 rounded-[2.5rem] shadow-2xl border border-white max-w-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="p-4 bg-white/50 rounded-2xl border border-white/60 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-black text-slate-500 mb-1">Standort</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Stadt, Region...</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl border border-white/60 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-black text-slate-500 mb-1">Typ</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Kaufen</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl border border-white/60 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-black text-slate-500 mb-1">Preis</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Preis bis</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <button className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-600/30 active:scale-[0.98]">
                <Search size={22} />
                <span className="text-lg uppercase tracking-wider">Immobilien finden</span>
              </button>
            </div>
          </div>

          {/* Right: Floating Elements */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white max-w-xs relative animate-bounce-slow">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                <Star size={32} fill="currentColor" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Ausgezeichnete Qualität</h3>
              <p className="text-base text-slate-600 font-bold mb-6 leading-snug">Top bewertet von unseren Kunden</p>
              <div className="flex items-center gap-2 text-orange-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-slate-900 font-black text-lg">4,9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Integrated at the bottom of the hero section */}
      <div className="relative z-10 w-full mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/50 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">150+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Zufriedene Kunden</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                <Home size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">250+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Erfolgreich vermittelt</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">15+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Jahre Erfahrung</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Engagement für Sie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaklerExampleAbout() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Team Image */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/makler_team_portrait.png"
                alt="Das Team von Beispiel Immo"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-orange-600/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-10 w-24 h-24 bg-white shadow-xl rounded-2xl flex items-center justify-center p-4 z-20 animate-bounce">
              <div className="text-center">
                <span className="block text-2xl font-black text-orange-600">15+</span>
                <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest">Jahre Fokus</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-orange-600 font-black text-sm tracking-[0.3em] mb-6 uppercase">
              Wer wir sind
            </p>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 leading-tight mb-8">
              Expertise trifft auf<br />
              <span className="text-orange-600">persönliche Beratung.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Hinter Beispiel Immo steht ein Team aus passionierten Immobilien-Experten, die den regionalen Markt seit über 15 Jahren wie ihre Westentasche kennen. Wir glauben nicht an Standard-Lösungen, sondern an individuelle Strategien für jedes Objekt.
              </p>
              <p>
                Unser Ziel ist es, den oft komplexen Prozess des Immobilienkaufs oder -verkaufs für Sie so transparent und stressfrei wie möglich zu gestalten. Dabei setzen wir auf modernste Marketing-Tools und ein tiefes Verständnis für die Bedürfnisse unserer Kunden.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase mb-1">Vertrauen</h4>
                  <p className="text-xs text-slate-500 font-bold">Diskretion & Sicherheit bei jedem Schritt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase mb-1">Netzwerk</h4>
                  <p className="text-xs text-slate-500 font-bold">Direkter Zugang zu exklusiven Käufern.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              Mehr über unser Team erfahren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaklerExampleProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const properties = [
    {
      title: "Moderne Design-Villa mit Pool",
      location: "Haan, Musikantenviertel",
      price: "1.250.000 €",
      sqm: "285 m²",
      rooms: "6 Zimmer",
      image: "/images/property_villa.png",
      tag: "Exklusiv"
    },
    {
      title: "Luxus-Penthouse mit Fernblick",
      location: "Hilden, Stadtzentrum",
      price: "895.000 €",
      sqm: "145 m²",
      rooms: "3.5 Zimmer",
      image: "/images/property_penthouse.png",
      tag: "Neubau"
    },
    {
      title: "Charmantes Einfamilienhaus",
      location: "Solingen, Ohligs",
      price: "645.000 €",
      sqm: "165 m²",
      rooms: "5 Zimmer",
      image: "/images/property_house.png",
      tag: "Familienhit"
    },
    {
      title: "Modernes Industrie-Loft",
      location: "Düsseldorf, Medienhafen",
      price: "550.000 €",
      sqm: "95 m²",
      rooms: "2 Zimmer",
      image: "/images/property_loft.png",
      tag: "Urban Living"
    },
    {
      title: "Kernsanierter Gutshof",
      location: "Leichlingen, Umland",
      price: "720.000 €",
      sqm: "210 m²",
      rooms: "7 Zimmer",
      image: "/images/property_farmhouse.png",
      tag: "Landlust"
    },
    {
      title: "Helle Büroetage",
      location: "Langenfeld, Business-Park",
      price: "1.500.000 €",
      sqm: "400 m²",
      rooms: "12 Zimmer",
      image: "/images/property_office.png",
      tag: "Investment"
    },
    {
      title: "Penthouse-Atelier",
      location: "Haan, Zentrum",
      price: "420.000 €",
      sqm: "75 m²",
      rooms: "2 Zimmer",
      image: "/images/property_atelier.png",
      tag: "Künstler-Refugium"
    },
    {
      title: "Modernes Reihenhaus",
      location: "Solingen, Wald",
      price: "495.000 €",
      sqm: "120 m²",
      rooms: "4 Zimmer",
      image: "/images/property_rowhouse.png",
      tag: "Top-Lage"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.6 
        : scrollLeft + clientWidth * 0.6;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <p className="text-orange-600 font-black text-sm tracking-[0.3em] mb-4 uppercase">
              Aktuelle Angebote
            </p>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900 leading-tight">
              Exklusive <span className="text-orange-600">Immobilien</span><br />
              in Ihrer Region
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:border-orange-600 hover:text-orange-600 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:border-orange-600 hover:text-orange-600 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Property Slider */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-12 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {properties.map((prop, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[70vw] md:w-[35vw] lg:w-[22vw] snap-start group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {prop.tag}
                  </span>
                </div>
                {/* Image Placeholder Disclaimer */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-2 px-4">
                  <p className="text-[9px] text-white/90 font-bold uppercase tracking-widest text-center">
                    Beispielbild / Platzhalter
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-2">
                  {prop.location}
                </p>
                <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {prop.title}
                </h3>

                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <div className="text-center">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase mb-1">Fläche</span>
                    <span className="font-black text-slate-900 text-sm whitespace-nowrap">{prop.sqm}</span>
                  </div>
                  <div className="text-center border-x border-slate-100 px-2">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase mb-1">Zimmer</span>
                    <span className="font-black text-slate-900 text-sm whitespace-nowrap">{prop.rooms}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase mb-1">Kaufpreis</span>
                    <span className="font-black text-orange-600 text-sm whitespace-nowrap">{prop.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
            Alle Immobilien ansehen
          </button>
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export function MaklerExampleServices() {
  const services = [
    {
      title: "Was Ihre Immobilie Wert ist",
      description: "Erfahren Sie mit unserer datengestützten Immobilienbewertung den optimalen Preis für den Verkauf oder Vermietung.",
      icon: <BarChart3 className="text-orange-600" size={32} />
    },
    {
      title: "Professionelle Fotografie & Staging",
      description: "Wir rücken Ihre Immobilie ins beste Licht und erzielen so einen höheren Verkaufspreis.",
      icon: <Camera className="text-orange-600" size={32} />
    },
    {
      title: "Virtuelle 360°-Touren",
      description: "Modernste Präsentation und Besichtigung schaffen schnellere und präzise Ergebnisse.",
      icon: <RotateCw className="text-orange-600" size={32} />
    },
    {
      title: "Jederzeit alles im Blick",
      description: "Verfolgen Sie alle Vermarktungsaktivitäten in Echtzeit – transparent in Ihrem persönlichen Eigentümer-Cockpit.",
      icon: <LayoutDashboard className="text-orange-600" size={32} />
    },
    {
      title: "Sorgenfrei Verkaufen & Vermieten",
      description: "Zählen Sie auf unsere Expertise bei allen Fragen rund um den Immobilienverkauf und die Immobilienvermietung. Wir sorgen für einen sicheren Abschluss.",
      icon: <ShieldCheck className="text-orange-600" size={32} />
    },
    {
      title: "Die Vermietungs-Flat",
      description: "Exklusiv für unsere Vermieter: Zieht Ihr Mieter innerhalb des ersten Jahres aus, ist die Anschlussvermietung für Sie kostenfrei.",
      icon: <Key className="text-orange-600" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-600 font-black text-sm tracking-[0.3em] mb-4 uppercase">
            Mehrwert für Verkäufer
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-slate-900">
            Leistungen für <span className="text-orange-600">Eigentümer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 relative overflow-hidden">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium relative z-10">
                {service.description}
              </p>
              
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MaklerExampleSellBanner() {
  return (
    <section className="bg-slate-900 pt-24 pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-8 mb-4 lg:mb-0">
              <div className="w-20 h-20 rounded-3xl border-2 border-orange-500 flex items-center justify-center text-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/10">
                <Euro size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-white mb-3">Sie möchten verkaufen?</h2>
                <p className="text-slate-400 text-lg font-medium">Wir erzielen den besten Preis für Ihre Immobilie.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white text-lg font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                  <Check size={14} strokeWidth={4} />
                </div>
                Kostenlose Wertermittlung
              </li>
              <li className="flex items-center gap-4 text-white text-lg font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                  <Check size={14} strokeWidth={4} />
                </div>
                Persönliche Beratung
              </li>
              <li className="flex items-center gap-4 text-white text-lg font-bold">
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                  <Check size={14} strokeWidth={4} />
                </div>
                Diskrete & schnelle Abwicklung
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 lg:flex justify-end">
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-10 h-16 rounded-2xl font-black transition-all shadow-2xl active:scale-95 whitespace-nowrap">
              Kostenlose Bewertung starten &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
