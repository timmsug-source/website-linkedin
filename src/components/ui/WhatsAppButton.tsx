"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setIsVisible(window.scrollY > 400);
      } else {
        setIsVisible(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white pl-4 pr-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:shadow-[#25D366]/40 transition-shadow"
          aria-label="WhatsApp Chat mit Timm Schurig starten"
        >
          <div className="relative">
            <MessageCircle size={28} fill="currentColor" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider font-bold opacity-80 leading-none">
              WhatsApp
            </span>
            <span className="text-sm font-extrabold leading-tight">
              Chatte mit mir
            </span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
