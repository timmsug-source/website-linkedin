"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn, WHATSAPP_URL } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Für Coaches", href: "/fuer-fitness-coaches" },
  { name: "Ergebnisse", href: "/ergebnisse" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/lp/")) {
    return null;
  }

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
          {navLinks.map((link) => (
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
          aria-label={isOpen ? "Navigation schließen" : "Navigation öffnen"}
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
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-accent" : "text-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-6 py-3 font-bold transition-all"
            >
              <MessageCircle size={20} fill="currentColor" />
              WhatsApp Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
