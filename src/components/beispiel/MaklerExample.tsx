"use client";

import Image from "next/image";
import { Search, ChevronDown, Star, Home, Users, Euro, BarChart3, ShieldCheck, Check } from "lucide-react";

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
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <Home size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 leading-none">Dr. HeRo</span>
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">Dein Experte für Finanzen & Immobilien</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/40 backdrop-blur-md px-8 h-14 rounded-full border border-white/40 shadow-sm">
          {menuItems.map((item) => (
            <button key={item.name} className="flex items-center gap-1 text-slate-900 font-bold hover:text-orange-600 transition-colors text-sm uppercase tracking-wider">
              {item.name}
              {item.hasDropdown && <ChevronDown size={14} />}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button className="w-12 h-12 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full border border-white/40 text-slate-900 hover:text-orange-600 transition-colors shadow-sm">
            <Search size={20} />
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 h-14 rounded-full font-black transition-all shadow-xl shadow-orange-600/20 active:scale-95">
            Jetzt kontaktieren &gt;
          </button>
        </div>
      </div>
    </header>
  );
}

export function MaklerExampleHero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col justify-between">
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
