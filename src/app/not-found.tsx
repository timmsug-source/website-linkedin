import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 px-6 text-center bg-white">
      <div className="max-w-lg mx-auto">
        <p className="text-accent font-bold text-sm uppercase tracking-[0.2em] mb-4">
          404
        </p>
        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12 font-bold transition-all"
          >
            Zur Startseite <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center border border-slate-200 rounded-full px-8 h-12 font-semibold text-slate-700 hover:border-accent hover:text-accent transition-all"
          >
            Leistungen ansehen
          </Link>
        </div>
      </div>
    </div>
  );
}
