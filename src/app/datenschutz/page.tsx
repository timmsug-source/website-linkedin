import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, EMAIL } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Timm Schurig gemäß DSGVO. Informationen zur Datenerhebung und -verarbeitung.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/datenschutz` },
});

export default function DatenschutzPage() {
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
              Datenschutz
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-slate-800 mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-semibold text-slate-800 mb-2">Datenschutz</h3>
            <p className="mb-4">
              Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">
              Verantwortliche Stelle
            </h3>
            <address className="not-italic mb-4">
              Timm Schurig
              <br />
              [Adresse]
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline"
              >
                {EMAIL}
              </a>
            </address>
            <h3 className="font-semibold text-slate-800 mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
              jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold text-slate-800 mb-2">
              Server-Log-Dateien
            </h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen
              in so genannten Server-Log-Dateien, die Ihr Browser automatisch
              übermittelt: Browsertyp, Browserversion, verwendetes Betriebssystem,
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der
              Serveranfrage, IP-Adresse.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">
              Kontaktformular & Anfragen
            </h3>
            <p className="mb-4">
              Wenn Sie uns per Formular oder E-Mail Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">WhatsApp</h3>
            <p>
              Wenn Sie uns über WhatsApp kontaktieren, unterliegt die Kommunikation
              den Datenschutzbestimmungen von Meta Platforms Ireland Limited. Wir
              verwenden WhatsApp Business ausschließlich für die direkte
              Kundenkommunikation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              4. Externe Dienste
            </h2>
            <h3 className="font-semibold text-slate-800 mb-2">
              Google Fonts
            </h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
              genannte Google Fonts. Die Google Fonts sind lokal installiert. Eine
              Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">
              Calendly (Terminbuchung)
            </h3>
            <p>
              Für die Terminbuchung nutzen wir Calendly. Wenn Sie einen Termin
              buchen, werden die notwendigen Daten an Calendly (Calendly LLC, 271
              17th St NW, Suite 1000, Atlanta, GA 30363, USA) übermittelt.
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Calendly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              5. Ihre Rechte
            </h2>
            <p className="mb-4">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
              <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen
                (Art. 77 DSGVO)
              </li>
            </ul>
            <p>
              Für Anfragen zu Ihren Datenschutzrechten wenden Sie sich an:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
