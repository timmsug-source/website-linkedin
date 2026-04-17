export interface ServiceStep {
  title: string;
  desc?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface RelatedService {
  id: string;
  title: string;
  teaser: string;
}

export interface ServiceFeature {
  number: string;
  title: string;
  body: string;
}

export interface ServiceEntry {
  id: string;
  title: string;
  badge: string;
  floatingBadge: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  additionalKeywords: string[];
  // Hero
  heroHeadline: string;
  heroSubline: string;
  heroChecklist: string[];
  heroFeatures?: ServiceFeature[];
  heroStat: ServiceStat[];
  // Problem
  problemHeadline: string;
  problemSubline: string;
  problemPoints: string[];
  // Solution
  solutionHeadline: string;
  solution: string;
  solutionPoints: string[];
  process: ServiceStep[];
  // CTA
  ctaHeadline: string;
  ctaSubline: string;
  // Info
  features: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedServices: RelatedService[];
}

export const serviceData: Record<string, ServiceEntry> = {
  webdesign: {
    id: "webdesign",
    title: "Webdesign",
    badge: "Professionelle Website erstellen lassen",
    floatingBadge: "Live in 1–2 Wochen",
    metaTitle: "Webdesign & Website erstellen lassen – Modern, Schnell & SEO-optimiert",
    metaDescription:
      "Professionelles Webdesign für Unternehmen. 100% PageSpeed, Mobile-First, SEO-ready – individuelle Websites, die Besucher in Kunden verwandeln. Jetzt Erstgespräch buchen.",
    keyword: "Website erstellen lassen",
    additionalKeywords: [
      "Webdesign Agentur",
      "Landingpage erstellen lassen",
      "Homepage erstellen lassen",
    ],
    heroHeadline: "Deine Website, die Besucher in Kunden verwandelt.",
    heroSubline:
      "Individuelles Webdesign mit 100 % PageSpeed, Mobile-First Design und SEO-Grundoptimierung – maßgeschneidert für dein Unternehmen.",
    heroChecklist: [
      "100 % PageSpeed Score garantiert",
      "Mobile-First & DSGVO-konform",
      "SEO-Grundoptimierung inklusive",
      "Conversion-optimiertes Copywriting",
      "CRM- & Calendly-Integration",
    ],
    heroFeatures: [
      {
        number: "01",
        title: "High-End Performance",
        body: "Du erhältst eine Website, die in Millisekunden lädt. Durch sauberen Code und modernste Optimierung erreichen wir Bestwerte bei den Google Core Web Vitals. Das sorgt für eine erstklassige User Experience und ist dein Ticket für Top-Rankings.",
      },
      {
        number: "02",
        title: "KI-Ready Architektur",
        body: "Deine Website wird so strukturiert, dass sie nicht nur von Menschen, sondern auch von KI-Systemen (wie ChatGPT oder Google Gemini) perfekt ausgelesen werden kann. Damit bist du technologisch ganz vorne mit dabei und wirst als Experten-Quelle zitiert.",
      },
      {
        number: "03",
        title: "Conversion-Optimiertes Design",
        body: "Keine digitale Visitenkarte, sondern ein echtes Verkaufstool. Ich gestalte ein Interface, das Besucher gezielt führt und psychologisch so aufgebaut ist, dass aus Interessenten zahlende Kunden werden – optimiert auf jedem Endgerät.",
      },
      {
        number: "04",
        title: "Konsequentes Mobile-First",
        body: "Über 70 % der Nutzer sind mobil unterwegs. Ich entwickle deine Website konsequent nach dem Mobile-First-Prinzip. Das bedeutet: Perfekte Darstellung, intuitive Bedienung und blitzschnelle Ladezeiten auf dem Smartphone – ohne Kompromisse bei der Desktop-Version.",
      },
      {
        number: "05",
        title: "Strategisches SEO & Sichtbarkeit",
        body: "Deine Website wird von Grund auf für Suchmaschinen optimiert. Wir setzen nicht nur auf Keywords, sondern auf eine saubere technische Struktur und semantische Inhalte. Das Ziel: Top-Platzierungen bei Google, damit deine Zielgruppe dich genau dann findet, wenn sie nach deiner Lösung sucht.",
      },
      {
        number: "06",
        title: "Lebenslange technische Partnerschaft",
        body: "Mit dem Livegang beginnt unser Service erst richtig. Du bekommst ein \"Rundum-Sorglos-Paket\": Ich übernehme die komplette Wartung, die Sicherheits-Updates und die laufende technische Anpassung. Du hast den Kopf frei für dein Business.",
      },
    ],
    heroStat: [
      { value: "1–2 Wo.", label: "bis sie live ist" },
      { value: "100 %", label: "PageSpeed Score" },
    ],
    problemHeadline: "Deine aktuelle Website kostet dich jeden Tag Kunden.",
    problemSubline:
      "Die meisten Unternehmenswebsites sind zu langsam, nicht mobil optimiert und haben keinen klaren Call-to-Action. Das kostet dich täglich potenzielle Kunden.",
    problemPoints: [
      "Deine Website lädt zu langsam – Besucher springen ab, bevor sie lesen.",
      "Kein klarer CTA: Besucher wissen nicht, was sie als Nächstes tun sollen.",
      "Kein Vertrauensaufbau – keine Referenzen, keine Persönlichkeit.",
      "Nicht mobil optimiert, obwohl 70 % der Besucher vom Smartphone kommen.",
      "Kein SEO-Setup – Google findet dich nicht, auch nicht lokal.",
    ],
    solutionHeadline: "Eine Website, die rund um die Uhr für dich arbeitet.",
    solution:
      "Ich baue dir eine hochkonvertierende Website, die Vertrauen aufbaut, deine Expertise zeigt und Besucher gezielt zur Kontaktaufnahme führt – technisch einwandfrei, schnell und suchmaschinenoptimiert.",
    solutionPoints: [
      "Strategie-Gespräch zur Zielgruppen- und USP-Analyse",
      "Individuelles Design – kein Template, keine Vorlage",
      "Conversion-optimiertes Copywriting inklusive",
      "Integration mit Calendly, WhatsApp und deinem CRM",
      "Google Analytics & Search Console Setup",
    ],
    process: [
      { title: "Analyse & Strategie", desc: "Zielgruppe, USP und Conversion-Ziele definieren." },
      { title: "Design & Konzept", desc: "Individuelles Design nach deinem Branding." },
      { title: "Entwicklung", desc: "Technisch saubere Umsetzung mit Next.js." },
      { title: "Launch & SEO", desc: "Live-Schaltung und Grundoptimierung für Google." },
    ],
    ctaHeadline: "Bereit für eine Website, die wirklich verkauft?",
    ctaSubline: "Vereinbare jetzt ein kostenloses Erstgespräch und lass uns deine neue Website planen.",
    features: [
      { title: "100 % PageSpeed", desc: "Maximale Ladegeschwindigkeit für beste User Experience und Google-Rankings." },
      { title: "Mobile-First Design", desc: "Über 70 % deiner Besucher kommen vom Smartphone – deine Seite ist dafür gebaut." },
      { title: "DSGVO-konform", desc: "Cookie-Banner, Datenschutzerklärung und Impressum – alles rechtskonform." },
      { title: "SEO-Grundoptimierung", desc: "Meta-Tags, strukturierte Daten und semantisches HTML für bessere Rankings." },
    ],
    faq: [
      {
        q: "Was kostet eine professionelle Website?",
        a: "Die Preise variieren je nach Umfang. Eine einfache Landingpage startet bei ca. 500€, eine mehrseitige Unternehmenswebsite liegt in der Regel zwischen 1.200€ und 3.500€. Im Erstgespräch machen wir dir ein transparentes Angebot.",
      },
      {
        q: "Wie lange dauert die Erstellung?",
        a: "Eine Landingpage ist in 1–2 Wochen live. Eine vollständige Unternehmenswebsite dauert in der Regel 2–4 Wochen, abhängig von Umfang und Feedbackrunden.",
      },
      {
        q: "Kann ich die Website danach selbst bearbeiten?",
        a: "Ja. Ich kann auf Wunsch ein einfaches CMS (z.B. Sanity oder Notion-basiert) integrieren, sodass du Texte und Bilder selbst pflegen kannst.",
      },
      {
        q: "Wird die Website bei Google gefunden?",
        a: "Jede Website wird mit einer SEO-Grundoptimierung ausgeliefert. Für nachhaltige Rankings empfehle ich zusätzlich unsere SEO & GEO-Leistung.",
      },
    ],
    relatedServices: [
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Spare Zeit mit automatisierten Workflows." },
      { id: "seo-geo", title: "SEO & GEO", teaser: "Werde bei Google und KI-Suchen gefunden." },
    ],
  },

  automatisierungen: {
    id: "automatisierungen",
    title: "Automatisierungen",
    badge: "Workflows automatisieren lassen",
    floatingBadge: "Spare 10h+ pro Woche",
    metaTitle: "Marketing & Business Automatisierung – Zapier, Make & CRM-Anbindung",
    metaDescription:
      "Automatisiere deine Geschäftsprozesse mit Zapier, Make & Co. Spare mindestens 10 Stunden pro Woche durch intelligente Workflow-Automatisierung. Jetzt Erstgespräch buchen.",
    keyword: "Business Automatisierung",
    additionalKeywords: [
      "Zapier Experte",
      "Make Automatisierung",
      "CRM Automatisierung",
    ],
    heroHeadline: "Dein Business, das im Hintergrund für dich läuft.",
    heroSubline:
      "Verbinde deine Tools zu einem nahtlosen System. Zapier, Make, CRM und mehr – vollautomatisch und fehlerfrei.",
    heroChecklist: [
      "Zapier & Make Experten-Setup",
      "CRM-Synchronisation",
      "Automatische Follow-up Sequenzen",
      "Fehler-Monitoring & Alerting",
      "Terminbuchungs-Automation",
    ],
    heroStat: [
      { value: "10h+", label: "Ersparnis pro Woche" },
      { value: "24/7", label: "läuft dein System" },
    ],
    problemHeadline: "Manuelle Prozesse kosten dich Zeit und Geld.",
    problemSubline:
      "Jedes Mal wenn du Copy-Paste machst, eine E-Mail manuell weiterleitest oder vergisst, jemandem zu antworten, verlierst du Geld. Automatisierung löst das dauerhaft.",
    problemPoints: [
      "Manuelle Follow-ups werden vergessen oder kommen zu spät.",
      "Daten müssen händisch zwischen Tools übertragen werden.",
      "Neue Kunden erhalten kein professionelles Onboarding.",
      "Termine werden nicht automatisch bestätigt oder erinnert.",
      "Du verbringst Stunden mit Admin-Arbeit statt mit deinen Kunden.",
    ],
    solutionHeadline: "Ein System, das dich nie vergisst.",
    solution:
      "Ich analysiere deine aktuellen Prozesse und baue dir ein Automatisierungssystem, das deine Tools verbindet, Aufgaben selbstständig erledigt und Fehler automatisch meldet.",
    solutionPoints: [
      "Prozessanalyse & Automatisierungsstrategie",
      "Setup in Zapier, Make oder n8n",
      "CRM-Anbindung (HubSpot, Pipedrive, Notion, etc.)",
      "Automatische E-Mail- und WhatsApp-Sequenzen",
      "Dokumentation & Schulung für dein Team",
    ],
    process: [
      { title: "Prozessanalyse", desc: "Identifikation der größten Zeitfresser in deinem Business." },
      { title: "Automatisierungsstrategie", desc: "Welche Tools, welche Flows, welche Priorität." },
      { title: "Umsetzung", desc: "Aufbau und Test aller Automatisierungen." },
      { title: "Übergabe & Schulung", desc: "Du verstehst dein System und kannst es selbst verwalten." },
    ],
    ctaHeadline: "Bereit, 10+ Stunden pro Woche einzusparen?",
    ctaSubline: "Lass uns gemeinsam herausfinden, was in deinem Business automatisiert werden kann.",
    features: [
      { title: "Zapier & Make", desc: "Die führenden No-Code Automatisierungsplattformen – wir kennen sie in- und auswendig." },
      { title: "CRM-Integration", desc: "HubSpot, Pipedrive, Notion, Airtable – wir verbinden dein CRM mit allem." },
      { title: "Fehler-Monitoring", desc: "Automatische Alerts wenn etwas schiefläuft – damit nichts durchs Raster fällt." },
      { title: "Skalierbar", desc: "Einmal aufgebaut, wächst dein System mit deinem Unternehmen mit." },
    ],
    faq: [
      {
        q: "Muss ich technisch versiert sein?",
        a: "Nein. Ich übernehme den kompletten Aufbau. Du bekommst ein fertiges System mit einer verständlichen Dokumentation.",
      },
      {
        q: "Welche Tools können automatisiert werden?",
        a: "Fast alle gängigen Tools: Gmail, Outlook, HubSpot, Pipedrive, Notion, Airtable, Calendly, WhatsApp, Telegram, Stripe und hunderte mehr.",
      },
      {
        q: "Was kostet eine Automatisierung?",
        a: "Das hängt vom Umfang ab. Einfache Flows starten bei ca. 300€. Komplexe Systeme mit mehreren Integrationen liegen zwischen 800€ und 2.500€.",
      },
      {
        q: "Was passiert, wenn eine Automatisierung fehlschlägt?",
        a: "Ich richte ein Monitoring ein, das dich sofort benachrichtigt, wenn etwas schiefläuft. Im laufenden Betrieb stehe ich für Support zur Verfügung.",
      },
    ],
    relatedServices: [
      { id: "webdesign", title: "Webdesign", teaser: "Die perfekte Website als Basis für dein System." },
      { id: "seo-geo", title: "SEO & GEO", teaser: "Sorge dafür, dass deine Website gefunden wird." },
    ],
  },

  "seo-geo": {
    id: "seo-geo",
    title: "SEO & GEO",
    badge: "Sichtbarkeit bei Google & KI-Suchen",
    floatingBadge: "Nachhaltige Rankings",
    metaTitle: "SEO & GEO – Lokale Suchmaschinenoptimierung & Generative Engine Optimization",
    metaDescription:
      "Werde bei Google und KI-basierten Suchen (ChatGPT, Perplexity, Gemini) gefunden. Nachhaltige SEO-Strategien für lokale Unternehmen. Jetzt Erstgespräch buchen.",
    keyword: "SEO Agentur lokal",
    additionalKeywords: [
      "Lokale SEO",
      "Generative Engine Optimization",
      "Google Ranking verbessern",
    ],
    heroHeadline: "Werde gefunden – bei Google und bei KI.",
    heroSubline:
      "SEO für nachhaltige Google-Rankings. GEO (Generative Engine Optimization) damit ChatGPT, Perplexity & Gemini dich empfehlen.",
    heroChecklist: [
      "Technische SEO-Analyse & Umsetzung",
      "Lokale SEO (Google Business Profile)",
      "Content-Strategie & Texterstellung",
      "GEO – Sichtbarkeit in KI-Suchen",
      "Monatliches Reporting",
    ],
    heroStat: [
      { value: "Top 3", label: "Ziel bei Google" },
      { value: "GEO", label: "KI-Suchoptimierung" },
    ],
    problemHeadline: "Du wirst online nicht gefunden – obwohl du die beste Lösung bietest.",
    problemSubline:
      "95 % aller Klicks gehen an die ersten 3 Suchergebnisse. Wenn du dort nicht stehst, existierst du für deinen Kunden nicht.",
    problemPoints: [
      "Deine Website hat kaum organischen Traffic.",
      "Wettbewerber ranken für deine Keywords – du nicht.",
      "Dein Google Business Profil ist unvollständig oder inaktiv.",
      "KI-Suchen wie ChatGPT empfehlen dich nicht.",
      "Du hast keine Ahnung, wie du bei Google besser ranken kannst.",
    ],
    solutionHeadline: "SEO, das nachhaltig funktioniert – und GEO für die Zukunft.",
    solution:
      "Ich analysiere deine aktuelle Sichtbarkeit, identifiziere die besten Keywords und baue eine Strategie auf, die dich bei Google nach oben bringt und dich in KI-Suchen sichtbar macht.",
    solutionPoints: [
      "Technisches SEO-Audit deiner Website",
      "Keyword-Recherche & Wettbewerbsanalyse",
      "Lokale SEO & Google Business Profile Optimierung",
      "Content-Erstellung für zielgerichtete Keywords",
      "GEO: Strukturierung deiner Inhalte für KI-Suchen",
    ],
    process: [
      { title: "SEO-Audit", desc: "Analyse deiner aktuellen Sichtbarkeit und technischer Fehler." },
      { title: "Strategie", desc: "Keywords, Wettbewerber und Content-Plan festlegen." },
      { title: "Umsetzung", desc: "Technische Optimierungen, Content und Backlinks." },
      { title: "Reporting", desc: "Monatliche Reports mit Rankings, Traffic und Handlungsempfehlungen." },
    ],
    ctaHeadline: "Bereit, auf Seite 1 von Google zu erscheinen?",
    ctaSubline: "Lass uns gemeinsam deine aktuelle Sichtbarkeit analysieren – kostenlos.",
    features: [
      { title: "Technische SEO", desc: "Ladezeit, Core Web Vitals, strukturierte Daten – technisch einwandfrei." },
      { title: "Lokale SEO", desc: "Google Business Profile, lokale Keywords und Bewertungsmanagement." },
      { title: "Content-Strategie", desc: "Texte, die Menschen lesen wollen und Google belohnt." },
      { title: "GEO", desc: "Generative Engine Optimization – damit KI-Tools wie ChatGPT dich empfehlen." },
    ],
    faq: [
      {
        q: "Wie lange dauert es, bis ich Ergebnisse sehe?",
        a: "SEO braucht Zeit. Erste Verbesserungen sind oft nach 4–8 Wochen sichtbar. Nachhaltige Top-Rankings entstehen in der Regel nach 3–6 Monaten.",
      },
      {
        q: "Was ist GEO und warum ist es wichtig?",
        a: "GEO (Generative Engine Optimization) optimiert deine Inhalte so, dass KI-basierte Suchen wie ChatGPT, Perplexity oder Google Gemini dich als Experten empfehlen. Das ist die Zukunft der Suche.",
      },
      {
        q: "Brauche ich eine neue Website für gutes SEO?",
        a: "Nicht unbedingt. Oft können bestehende Websites technisch optimiert werden. Wenn die Website aber veraltet oder sehr langsam ist, empfehle ich eine Kombination mit unserem Webdesign-Service.",
      },
      {
        q: "Was kostet SEO?",
        a: "Einmalige Optimierungen (Audit + Umsetzung) starten bei 800€. Laufende SEO-Betreuung beginnt bei 400€/Monat, abhängig von Umfang und Wettbewerb.",
      },
    ],
    relatedServices: [
      { id: "webdesign", title: "Webdesign", teaser: "Die perfekte technische Basis für gutes SEO." },
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Spare Zeit mit automatisierten Workflows." },
    ],
  },
};
