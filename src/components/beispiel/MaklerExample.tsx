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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
            <Home size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 leading-none">Dr. HeRo</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Dein Experte für Finanzen & Immobilien</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button key={item.name} className="flex items-center gap-1 text-slate-700 font-semibold hover:text-orange-600 transition-colors">
              {item.name}
              {item.hasDropdown && <ChevronDown size={16} />}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button className="text-slate-700 hover:text-orange-600 transition-colors">
            <Search size={22} />
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-200">
            Jetzt kontaktieren &gt;
          </button>
        </div>
      </div>
    </header>
  );
}

export function MaklerExampleHero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/makler_example_hero.png"
          alt="Modernes Luxus-Interieur"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <p className="text-orange-600 font-black text-sm tracking-[0.2em] mb-4">
              PERSÖNLICH. REGIONAL. KOMPETENT.
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-slate-900 leading-[1.1] mb-6">
              Ihr Immobilienziel.<br />
              <span className="text-orange-600">Unsere Mission.</span>
            </h1>
            <p className="text-xl text-slate-700 font-medium mb-10 max-w-lg">
              Ob Kauf, Verkauf oder Bewertung – wir begleiten Sie mit Erfahrung, Leidenschaft und einem starken Netzwerk.
            </p>

            {/* Search Box */}
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-white max-w-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Standort</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Stadt, Region...</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Typ</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Kaufen</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Preis</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Preis bis</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <button className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-orange-200">
                <Search size={20} />
                Immobilien finden
              </button>
            </div>
          </div>

          {/* Right: Floating Elements */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white max-w-xs relative animate-bounce-slow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Star size={24} fill="currentColor" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Ausgezeichnete Qualität</h3>
              <p className="text-sm text-slate-500 font-bold mb-4">Top bewertet von unseren Kunden</p>
              <div className="flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <span className="ml-2 text-slate-900 font-black">4,9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">150+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Zufriedene Kunden</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center">
                <Home size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">250+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Erfolgreich vermittelt</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 leading-none">15+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Jahre Erfahrung</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center">
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
    <section className="bg-slate-900 pt-32 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center text-orange-500">
                <Euro size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white mb-2">Sie möchten verkaufen?</h2>
                <p className="text-slate-400 font-bold">Wir erzielen den besten Preis für Ihre Immobilie.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white font-bold">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                  <Check size={12} strokeWidth={4} />
                </div>
                Kostenlose Wertermittlung
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                  <Check size={12} strokeWidth={4} />
                </div>
                Persönliche Beratung
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center">
                  <Check size={12} strokeWidth={4} />
                </div>
                Diskrete & schnelle Abwicklung
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 lg:flex justify-end">
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-5 rounded-2xl font-black transition-all shadow-xl">
              Kostenlose Bewertung starten &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
