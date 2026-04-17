"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Linkedin, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL } from "@/lib/utils";

const serviceLinks = [
  { name: "Webdesign", href: "/leistungen/webdesign" },
  { name: "Automatisierungen", href: "/leistungen/automatisierungen" },
  { name: "SEO & GEO", href: "/leistungen/seo-geo" },
];

const infoLinks = [
  { name: "Über mich", href: "/ueber-uns" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith("/lp/") || pathname?.startsWith("/webdesign/")) {
    return null;
  }

  return (
    <footer
      className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-4">
          <Link
            href="/"
            className="text-2xl font-display font-extrabold tracking-tight text-slate-900"
          >
            TIMM<span className="text-accent">SCHURIG</span>
          </Link>
          <p className="mt-4 text-slate-600 max-w-sm leading-relaxed text-sm">
            Professionelles Webdesign, intelligente Automatisierungen und nachhaltige SEO-Strategien – alles aus einer Hand für nachhaltiges Wachstum.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"
              aria-label="Timm Schurig auf LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="p-2 bg-white rounded-full shadow-sm hover:text-accent transition-colors"
              aria-label="E-Mail an Timm Schurig"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-1 md:col-span-3">
          <h3 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
            Leistungen
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Links */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
            Informationen
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-3">
          <h3 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
            Kontakt
          </h3>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Deutschland (DACH-Raum)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-accent transition-colors"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-medium hover:bg-accent/20 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Chat starten
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {currentYear} Timm Schurig. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-accent transition-colors">
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-accent transition-colors"
          >
            Datenschutz
          </Link>
          <Link href="/kontakt" className="hover:text-accent transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
