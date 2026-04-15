import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, EMAIL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Timm Schurig – Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/impressum` },
});

export default function ImpressumPage() {
  return (
    <div className="pt-36 pb-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-medium" aria-current="page">
              Impressum
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-10">
          Impressum
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="not-italic leading-relaxed">
              <strong>Timm Schurig</strong>
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              Deutschland
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              [Ihre USt-IdNr.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <address className="not-italic leading-relaxed">
              Timm Schurig
              <br />
              [Adresse wie oben]
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold text-slate-800 mb-2">
              Haftung für Inhalte
            </h3>
            <p className="mb-4 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">
              Haftung für Links
            </h3>
            <p className="leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Urheberrecht
            </h2>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
