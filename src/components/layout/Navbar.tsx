"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown, Globe, Zap, Search } from "lucide-react";
import { cn, WHATSAPP_URL } from "@/lib/utils";

const services = [
  {
    name: "Webdesign",
    href: "/leistungen/webdesign",
    icon: Globe,
    desc: "Individuelle Websites, die Kunden bringen.",
  },
  {
    name: "Automatisierungen",
    href: "/leistungen/automatisierungen",
    icon: Zap,
    desc: "Wiederkehrende Aufgaben auf Autopilot.",
  },
  {
    name: "SEO & GEO",
    href: "/leistungen/seo-geo",
    icon: Search,
    desc: "Sichtbar in Google und KI-Systemen.",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname?.startsWith("/lp/")) {
    return null;
  }

  const isLeistungenActive = pathname?.startsWith("/leistungen");

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-display font-extrabold tracking-tight text-slate-900"
          aria-label="Timm Schurig – Startseite"
        >
          TIMM<span className="text-accent">SCHURIG</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/"
                ? "text-accent"
                : "text-slate-600 hover:text-accent"
            )}
          >
            Home
          </Link>

          {/* Leistungen Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                isLeistungenActive
                  ? "text-accent"
                  : "text-slate-600 hover:text-accent"
              )}
            >
              Leistungen
              <ChevronDown
                size={15}
                className={cn(
                  "transition-transform duration-200",
                  dropdownOpen ? "rotate-180" : ""
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  {/* Overview link */}
                  <div className="px-4 pt-4 pb-2">
                    <Link
                      href="/leistungen"
                      className="block text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      Alle Leistungen →
                    </Link>
                  </div>
                  <div className="p-2">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={cn(
                            "flex items-start gap-3 px-3 py-3 rounded-xl transition-colors group",
                            pathname === s.href
                              ? "bg-accent/10"
                              : "hover:bg-slate-50"
                          )}
                        >
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                            <Icon size={16} className="text-accent" aria-hidden="true" />
                          </div>
                          <div>
                            <p className={cn(
                              "text-sm font-bold leading-tight",
                              pathname === s.href ? "text-accent" : "text-slate-900 group-hover:text-accent"
                            )}>
                              {s.name}
                            </p>
                            <p className="text-xs text-slate-500 leading-snug mt-0.5">
                              {s.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-accent"
                  : "text-slate-600 hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-5 py-2 text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20"
            aria-label="WhatsApp Chat mit Timm Schurig starten"
          >
            <MessageCircle size={18} fill="currentColor" />
            WhatsApp Chat
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Navigation schlie\u00dfen" : "Navigation \u00f6ffnen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-1 md:hidden shadow-xl"
          >
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "text-lg font-medium px-2 py-2",
                pathname === "/" ? "text-accent" : "text-slate-900"
              )}
            >
              Home
            </Link>

            {/* Leistungen accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={cn(
                  "w-full flex items-center justify-between px-2 py-2 text-lg font-medium",
                  isLeistungenActive ? "text-accent" : "text-slate-900"
                )}
                aria-expanded={mobileServicesOpen}
              >
                Leistungen
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    mobileServicesOpen ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      <Link
                        href="/leistungen"
                        className="text-sm font-bold text-accent py-1.5 px-2"
                      >
                        Alle Leistungen →
                      </Link>
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={cn(
                              "flex items-center gap-3 px-2 py-2 rounded-xl",
                              pathname === s.href ? "text-accent" : "text-slate-700"
                            )}
                          >
                            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                              <Icon size={14} className="text-accent" aria-hidden="true" />
                            </div>
                            <span className="text-base font-medium">{s.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium px-2 py-2",
                  pathname === link.href ? "text-accent" : "text-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-6 py-3 font-bold transition-all"
              >
                <MessageCircle size={20} fill="currentColor" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
