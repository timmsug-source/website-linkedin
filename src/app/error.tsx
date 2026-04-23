"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PHONE_URL } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-8xl font-black text-slate-100 mb-6">500</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut
          oder kontaktiere mich direkt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="border border-slate-200 text-slate-700 hover:border-accent hover:text-accent font-bold px-6 py-3 rounded-xl transition-all"
          >
            Zur Startseite
          </Link>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-100">
          <a
            href={PHONE_URL}
            className="text-accent font-semibold text-sm hover:underline"
          >
            Direkt anrufen →
          </a>
        </div>
      </div>
    </div>
  );
}
