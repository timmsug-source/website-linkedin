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
  "landingpage-erstellung": {
    id: "landingpage-erstellung",
    title: "Landingpage Erstellung",
    badge: "Landingpage Fitness Coach erstellen lassen",
    floatingBadge: "Live in 1–2 Wochen",
    metaTitle:
      "Landingpage Fitness Coach erstellen lassen – Hochkonvertierend & SEO-optimiert",
    metaDescription:
      "Professionelle Landingpage für Fitness- und Ernährungscoaches. 100% PageSpeed, Mobile-First, SEO-ready – für maximale Lead-Generierung über LinkedIn. Jetzt Erstgespräch buchen.",
    keyword: "Landingpage Fitness Coach erstellen lassen",
    additionalKeywords: [
      "Landingpage Personal Trainer",
      "Landingpage Ernährungscoach",
      "Personal Trainer Website erstellen lassen",
    ],
    heroHeadline: "Deine Landingpage, die LinkedIn-Besucher in Kunden verwandelt.",
    heroSubline:
      "Psychologisch optimierte Seiten mit 100 % PageSpeed, Mobile-First Design und SEO-Grundoptimierung – maßgeschneidert für dein Coaching-Business.",
    heroChecklist: [
      "100 % PageSpeed Score garantiert",
      "Mobile-First & DSGVO-konform",
      "SEO-Grundoptimierung inklusive",
      "Copywriting speziell für Coaches",
      "CRM- & Calendly-Integration",
    ],
    heroStat: [
      { value: "1–2 Wo.", label: "bis sie live ist" },
      { value: "100 %", label: "PageSpeed Score" },
    ],
    problemHeadline: "Dein LinkedIn-Profil bringt Klicks – aber keine Buchungen.",
    problemSubline:
      "Du investierst Zeit in Content und Netzwerken, aber die Besucher landen auf einer Seite, die nicht überzeugt. Das kostet dich täglich potenzielle Kunden.",
    problemPoints: [
      "Deine Webseite lädt zu langsam – Interessenten springen ab, bevor sie lesen.",
      "Kein klarer CTA: Besucher wissen nicht, was sie als Nächstes tun sollen.",
      "Kein Vertrauensaufbau – keine Testimonials, keine Ergebnisse, keine Persönlichkeit.",
      "Nicht mobil optimiert, obwohl 70 % der Besucher vom Smartphone kommen.",
      "Kein SEO-Setup – Google findet dich nicht, auch nicht lokal.",
    ],
    solutionHeadline: "Eine Landingpage, die rund um die Uhr für dich verkauft.",
    solution:
      "Ich baue dir eine hochkonvertierende Landingpage, die Vertrauen aufbaut, deine Expertise zeigt und Besucher gezielt zur Terminbuchung führt – technisch einwandfrei, schnell und suchmaschinenoptimiert.",
    solutionPoints: [
      "Strategie-Gespräch zur Zielgruppen- und USP-Analyse",
      "Individuelles Design – kein Template, keine Vorlage",
      "Conversion-optimiertes Copywriting inklusive",
      "Integration mit Calendly, WhatsApp und deinem CRM",
      "Google Analytics & Search Console Setup",
    ],
    process: [
      { title: "Analyse & Strategie", desc: "Zielgruppe, USP und Conversion-Ziele definieren." },
      { title: "Konzept & Texte", desc: "Wireframe und Copywriting speziell für deine Nische." },
      { title: "Design & Entwicklung", desc: "Pixel-perfekte Umsetzung mit Next.js – blitzschnell." },
      { title: "Testing & Launch", desc: "Cross-Browser, Mobile-Test und Analytics-Setup." },
    ],
    ctaHeadline: "Bereit für eine Landingpage, die wirklich konvertiert?",
    ctaSubline:
      "Im kostenlosen 30-Minuten-Gespräch analysieren wir deine aktuelle Situation und ich zeige dir, wie deine neue Landingpage aussehen könnte.",
    features: [
      { title: "100 % PageSpeed Score", desc: "Maximale Ladegeschwindigkeit für besseres Google-Ranking und weniger Absprünge." },
      { title: "Mobile-First Design", desc: "Über 70 % deiner Besucher kommen vom Smartphone – perfekt optimiert." },
      { title: "SEO-Grundoptimierung", desc: "Meta-Tags, strukturierte Daten, Canonical URLs – von Tag 1 sichtbar." },
      { title: "DSGVO-konform", desc: "Cookie-Banner, datenschutzkonforme Formulare nach deutschem Recht." },
      { title: "CRM-Integration", desc: "Direkte Anbindung an dein CRM für automatische Lead-Erfassung." },
      { title: "Conversion-Copywriting", desc: "Texte, die deine Zielgruppe ansprechen und zum Handeln motivieren." },
    ],
    faq: [
      {
        q: "Wie lange dauert die Erstellung einer Landingpage?",
        a: "In der Regel 1–2 Wochen von der Konzeption bis zum Launch. Bei besonders umfangreichen Projekten kann es 3 Wochen dauern.",
      },
      {
        q: "Bekomme ich auch Texte (Copywriting)?",
        a: "Ja, ich schreibe die Texte für deine Landingpage – zielgruppenspezifisch für Fitness- oder Ernährungscoaches und conversion-optimiert.",
      },
      {
        q: "Kann ich die Seite danach selbst bearbeiten?",
        a: "Ja, je nach Setup bekommst du entweder Zugang zu einem CMS oder ich zeige dir, wie du Texte und Bilder einfach ändern kannst.",
      },
    ],
    relatedServices: [
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Verbinde deine Landingpage mit deinen Tools – vollautomatisch." },
      { id: "ki-chatbot", title: "KI-Chatbot", teaser: "Lass einen KI-Chatbot Fragen beantworten und Termine buchen." },
      { id: "whatsapp-marketing", title: "WhatsApp Marketing", teaser: "Nurture deine Leads automatisch per WhatsApp-Sequenz." },
    ],
  },

  automatisierungen: {
    id: "automatisierungen",
    title: "Automatisierungen",
    badge: "Automatisierung Fitness Coach",
    floatingBadge: "10h+ Ersparnis pro Woche",
    metaTitle: "Automatisierung Fitness Coach – Workflows, Zapier & Make Setup",
    metaDescription:
      "Spare 10+ Stunden pro Woche durch smarte Workflow-Automatisierungen. Zapier, Make, CRM-Integration für Fitness- und Ernährungscoaches. Jetzt Erstgespräch buchen.",
    keyword: "Automatisierung Fitness Coach",
    additionalKeywords: [
      "Workflow Automatisierung Personal Trainer",
      "Zapier Make Coach",
      "Fitness Coach Prozesse automatisieren",
    ],
    heroHeadline: "Lass deine Tools für dich arbeiten – nicht umgekehrt.",
    heroSubline:
      "Smarte Workflow-Automatisierungen, die dir mindestens 10 Stunden pro Woche zurückgeben und manuelle Fehler dauerhaft eliminieren.",
    heroChecklist: [
      "Follow-ups laufen automatisch ab",
      "Terminbuchung ohne manuellen Aufwand",
      "Rechnungen werden automatisch erstellt",
      "CRM-Daten synchronisieren sich in Echtzeit",
      "Fehler-Monitoring – nichts geht verloren",
    ],
    heroStat: [
      { value: "10h+", label: "Ersparnis pro Woche" },
      { value: "0", label: "manuelle Fehler" },
    ],
    problemHeadline: "Du verbringst Stunden mit Aufgaben, die dein System erledigen könnte.",
    problemSubline:
      "Copy-Paste, manuelle Follow-ups, händische Terminbestätigungen – jede dieser Aufgaben frisst Zeit, die du für deine Kunden brauchst.",
    problemPoints: [
      "Leads fallen durchs Raster, weil kein automatisches Follow-up existiert.",
      "Du trägst Termine manuell ein, statt dich aufs Coaching zu konzentrieren.",
      "Rechnungen werden händisch erstellt – fehleranfällig und zeitraubend.",
      "Deine Tools kommunizieren nicht miteinander – du bist die Schnittstelle.",
      "Onboarding neuer Kunden kostet jedes Mal 2–3 Stunden deiner Zeit.",
    ],
    solutionHeadline: "Dein Business läuft – auch wenn du schläfst.",
    solution:
      "Ich verbinde deine Tools (Zapier, Make, CRM, Calendly etc.) zu einem nahtlosen System, das im Hintergrund für dich arbeitet. Du legst die Regeln fest – die Automatisierung erledigt den Rest.",
    solutionPoints: [
      "Audit aller manuellen Prozesse und Zeitfresser",
      "Auswahl der richtigen Tools für dein Budget",
      "Aufbau aller Workflows – du musst nichts selbst konfigurieren",
      "Fehler-Monitoring und Benachrichtigung bei Problemen",
      "Einweisung und Dokumentation aller Abläufe",
    ],
    process: [
      { title: "Workflow-Audit", desc: "Welche Prozesse kosten dich die meiste Zeit?" },
      { title: "Tool-Auswahl & Architektur", desc: "Passgenaue Lösung für dein Setup und Budget." },
      { title: "Implementierung & Testing", desc: "Alle Automationen werden aufgebaut und getestet." },
      { title: "Monitoring & Übergabe", desc: "Fehler-Alerts, Dokumentation, Einweisung." },
    ],
    ctaHeadline: "Hör auf, Zeit mit manuellen Aufgaben zu verschwenden.",
    ctaSubline:
      "Im kostenlosen Erstgespräch identifizieren wir gemeinsam deine größten Zeitfresser und ich zeige dir, wie Automatisierung deinen Alltag verändert.",
    features: [
      { title: "Zapier & Make Experten-Setup", desc: "Professionelle Konfiguration der führenden Automatisierungs-Plattformen." },
      { title: "Follow-up Sequenzen", desc: "Automatische Nachfass-E-Mails und WhatsApp-Nachrichten nach Ereignissen." },
      { title: "CRM-Synchronisation", desc: "Daten fließen automatisch zwischen allen deinen Tools." },
      { title: "Fehler-Monitoring", desc: "Alerts wenn eine Automation fehlschlägt – damit nichts verloren geht." },
      { title: "Terminbuchungs-Automation", desc: "Vom Klick bis zur Bestätigung läuft alles ohne dein Zutun." },
      { title: "Skalierbare Infrastruktur", desc: "Gebaut für Wachstum – deine Automationen wachsen mit dir." },
    ],
    faq: [
      {
        q: "Welche Tools können automatisiert werden?",
        a: "Praktisch alle gängigen Tools: Calendly, HubSpot, ActiveCampaign, Stripe, Notion, Google Workspace, CoachVox und viele mehr.",
      },
      {
        q: "Ich habe noch keine Tools – was brauche ich?",
        a: "Im Erstgespräch analysieren wir deinen aktuellen Stand und ich empfehle dir die Tools, die am besten zu deinem Business und Budget passen.",
      },
    ],
    relatedServices: [
      { id: "automatisiertes-onboarding", title: "Automatisiertes Onboarding", teaser: "Den kompletten Onboarding-Prozess neuer Kunden automatisieren." },
      { id: "whatsapp-marketing", title: "WhatsApp Marketing", teaser: "Automatisierte Follow-up-Sequenzen per WhatsApp." },
      { id: "ki-chatbot", title: "KI-Chatbot", teaser: "KI übernimmt die Erstkommunikation mit Interessenten." },
    ],
  },

  "whatsapp-marketing": {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    badge: "WhatsApp Marketing Fitness Coach",
    floatingBadge: "Höchste Öffnungsrate aller Kanäle",
    metaTitle:
      "WhatsApp Marketing Fitness Coach – Automatisierte Sequenzen & Lead-Nurturing",
    metaDescription:
      "WhatsApp Marketing für Fitness- und Ernährungscoaches: Automatisierte Sequenzen, Lead-Nurturing und Follow-ups. Direkte Kommunikation für maximale Conversion.",
    keyword: "WhatsApp Marketing Fitness Coach",
    additionalKeywords: [
      "WhatsApp Chatbot Ernährungscoach",
      "WhatsApp Funnel Personal Trainer",
      "WhatsApp Business API Coach",
    ],
    heroHeadline: "WhatsApp Marketing, das Leads in zahlende Kunden verwandelt.",
    heroSubline:
      "Automatisierte Sequenzen, die deine Interessenten warmhalten, Vertrauen aufbauen und sie gezielt zur Buchung führen – der direkteste Kanal zu deiner Zielgruppe.",
    heroChecklist: [
      "Öffnungsraten von bis zu 98 % (vs. 20 % bei E-Mail)",
      "Vollautomatische Nurture-Sequenzen",
      "DSGVO-konform über WhatsApp Business API",
      "Nahtlose Integration in dein CRM",
      "Kein Lead geht mehr verloren",
    ],
    heroStat: [
      { value: "98 %", label: "Öffnungsrate" },
      { value: "0 min", label: "manueller Aufwand" },
    ],
    problemHeadline: "Deine Leads kühlen ab – weil niemand nachfasst.",
    problemSubline:
      "Du hast Interessenten, die sich gemeldet haben – aber ohne schnelle, kontinuierliche Kommunikation verlierst du sie an die Konkurrenz.",
    problemPoints: [
      "Interessenten melden sich, aber du antwortest zu spät – der Moment ist vorbei.",
      "Manuelles Nachfassen kostet Zeit, die du nicht hast.",
      "Deine Leads kühlen ab, weil kein System sie warm hält.",
      "Du verlierst potenzielle Kunden an Coaches, die schneller reagieren.",
      "Keine Möglichkeit, Leads automatisch zu segmentieren und gezielt anzusprechen.",
    ],
    solutionHeadline: "Automatisierte WhatsApp-Sequenzen, die für dich arbeiten.",
    solution:
      "Ich baue dir vollautomatische WhatsApp-Sequenzen, die innerhalb von Sekunden auf neue Leads reagieren, Vertrauen aufbauen und sie systematisch zur Buchung führen – ohne deinen Eingriff.",
    solutionPoints: [
      "Sofort-Antwort auf neue Anfragen – auch um 2 Uhr nachts",
      "Personalisierte Sequenzen für verschiedene Zielgruppen",
      "Integration mit deiner Landingpage und deinem CRM",
      "Automatisches Opt-in Management (DSGVO-konform)",
      "Klare Metriken: Öffnungsraten, Klicks, Conversions",
    ],
    process: [
      { title: "Strategie & Zielgruppe", desc: "Welche Sequenzen braucht dein Business?" },
      { title: "Texterstellung", desc: "Alle Nachrichten werden conversion-optimiert geschrieben." },
      { title: "Technisches Setup", desc: "WhatsApp Business API, CRM-Integration, Opt-in." },
      { title: "Testing & Launch", desc: "Ausführliches Testing bevor die erste Sequenz startet." },
    ],
    ctaHeadline: "Bereit, den direktesten Kanal zu deinen Kunden zu nutzen?",
    ctaSubline:
      "Im Erstgespräch zeige ich dir, wie WhatsApp-Sequenzen speziell für dein Coaching-Business aussehen könnten.",
    features: [
      { title: "WhatsApp Business API", desc: "Professionelle, DSGVO-konforme Kommunikation auf großer Skala." },
      { title: "Personalisierte Sequenzen", desc: "Automatische Nachrichten, die sich anfühlen wie persönliche Kommunikation." },
      { title: "Lead-Nurturing Flows", desc: "Gezielte Inhalte, die deine Leads durch den Entscheidungsprozess führen." },
      { title: "Automatisierte Follow-ups", desc: "Kein Lead fällt mehr durchs Raster – alles wird automatisch nachgefasst." },
      { title: "Opt-in Management", desc: "DSGVO-konformes Einverständnis-Management für alle Kontakte." },
      { title: "Analytics & Reporting", desc: "Klare Zahlen: Öffnungsraten, Klicks, Conversions." },
    ],
    faq: [
      {
        q: "Ist WhatsApp Marketing DSGVO-konform?",
        a: "Ja, mit der richtigen technischen Implementierung über die WhatsApp Business API ist die Kommunikation vollständig DSGVO-konform. Ich sorge für das notwendige Opt-in-Management.",
      },
      {
        q: "Brauche ich eine WhatsApp Business API?",
        a: "Für professionelle Automatisierungen ja. Ich kümmere mich um die Einrichtung und Verifizierung deines Business-Kontos.",
      },
    ],
    relatedServices: [
      { id: "email-marketing", title: "E-Mail Marketing", teaser: "Ergänze WhatsApp mit automatisierten E-Mail-Funnels." },
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Verbinde WhatsApp mit deinen anderen Tools." },
      { id: "ki-chatbot", title: "KI-Chatbot", teaser: "KI-Chatbot direkt in WhatsApp integrieren." },
    ],
  },

  "email-marketing": {
    id: "email-marketing",
    title: "E-Mail Marketing",
    badge: "E-Mail Marketing Personal Trainer",
    floatingBadge: "Vollautomatische Funnels",
    metaTitle:
      "E-Mail Marketing Personal Trainer – Funnels & Automatisierte Sequenzen",
    metaDescription:
      "Vollautomatische E-Mail-Funnels für Personal Trainer und Ernährungscoaches. Willkommens-Sequenzen, Nurture-Flows, Reaktivierungskampagnen für mehr Buchungen.",
    keyword: "E-Mail Marketing Personal Trainer",
    additionalKeywords: [
      "E-Mail Automatisierung Fitness Coach",
      "E-Mail Funnel Ernährungscoach",
      "Newsletter Fitness Coach",
    ],
    heroHeadline: "E-Mail Funnels, die automatisch Kunden gewinnen.",
    heroSubline:
      "Vollautomatische E-Mail-Sequenzen, die deine Leads durch den Kaufprozess führen – vom ersten Kontakt bis zur Buchung deines Premium-Coachings.",
    heroChecklist: [
      "Willkommens-Sequenzen, die sofort Vertrauen aufbauen",
      "Nurture-Flows für jeden Funnel-Schritt",
      "Reaktivierung inaktiver Leads",
      "Segmentierung nach Interessen und Verhalten",
      "DSGVO-konformes Double-Opt-in Setup",
    ],
    heroStat: [
      { value: "5–7×", label: "Touchpoints bis zur Buchung" },
      { value: "0 min", label: "manueller Aufwand nach Setup" },
    ],
    problemHeadline: "Deine Leads landen in deiner Liste – und hören nie wieder von dir.",
    problemSubline:
      "Ohne ein durchdachtes E-Mail-System verlierst du Interessenten, die eigentlich kaufbereit wären – weil der entscheidende Kontaktpunkt fehlt.",
    problemPoints: [
      "Neue Abonnenten bekommen keine Willkommens-Mail – der erste Eindruck fehlt.",
      "Leads, die sich für deinen Freebie angemeldet haben, kaufen nie.",
      "Du versendest E-Mails nur, wenn du Zeit hast – also selten.",
      "Inaktive Leads werden nie reaktiviert, obwohl einige kaufbereit wären.",
      "Kein Tracking: Du weißt nicht, wer was öffnet und klickt.",
    ],
    solutionHeadline: "Ein E-Mail-System, das rund um die Uhr für dich verkauft.",
    solution:
      "Ich baue vollautomatische E-Mail-Funnels, die genau im richtigen Moment kommunizieren – mit professionellem Copywriting und technisch einwandfreiem Setup in deinem E-Mail-Tool.",
    solutionPoints: [
      "Vollständiges Funnel-Mapping deiner Customer Journey",
      "Conversion-optimiertes Copywriting aller Sequenzen",
      "Technisches Setup in ActiveCampaign, Mailchimp oder Brevo",
      "Segmentierung nach Fitness Coach / Ernährungscoach / Interessen",
      "A/B-Testing für kontinuierliche Verbesserung",
    ],
    process: [
      { title: "Funnel-Strategie", desc: "Customer Journey und Sequenz-Planung." },
      { title: "Texterstellung", desc: "Alle E-Mails werden conversion-optimiert geschrieben." },
      { title: "Technisches Setup", desc: "Konfiguration im gewählten E-Mail-Tool." },
      { title: "Testing & Optimierung", desc: "A/B-Tests und Öffnungsraten-Analyse." },
    ],
    ctaHeadline: "Lass deine E-Mail-Liste endlich für dich arbeiten.",
    ctaSubline:
      "Im Erstgespräch schauen wir, welche Sequenzen für dein Coaching-Business den größten Impact haben.",
    features: [
      { title: "Willkommens-Sequenzen", desc: "Der perfekte erste Eindruck – automatisch für jeden neuen Lead." },
      { title: "Nurture-Flows", desc: "Wertvolle Inhalte, die Vertrauen aufbauen und Expertise demonstrieren." },
      { title: "Reaktivierungs-Kampagnen", desc: "Hole inaktive Leads zurück, bevor sie verloren sind." },
      { title: "Segmentierung", desc: "Fitness- und Ernährungscoaches erhalten unterschiedliche, relevante Inhalte." },
      { title: "A/B-Testing", desc: "Kontinuierliche Optimierung von Betreffzeilen, Inhalten und CTAs." },
      { title: "DSGVO-konformes Setup", desc: "Double-Opt-in, Abmeldelinks, Datenschutz – alles rechtssicher." },
    ],
    faq: [
      {
        q: "Welches E-Mail-Tool nutzt du?",
        a: "Ich arbeite mit ActiveCampaign, Mailchimp, Brevo, Klaviyo und weiteren. Die Auswahl treffen wir gemeinsam basierend auf deinen Anforderungen.",
      },
      {
        q: "Schreibst du auch die Texte?",
        a: "Ja, Copywriting ist Teil des Leistungsumfangs. Ich schreibe alle E-Mail-Sequenzen zielgruppenspezifisch und conversion-optimiert.",
      },
    ],
    relatedServices: [
      { id: "whatsapp-marketing", title: "WhatsApp Marketing", teaser: "Kombiniere E-Mail mit WhatsApp für maximale Reichweite." },
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Verbinde dein E-Mail-Tool mit allen anderen Systemen." },
      { id: "landingpage-erstellung", title: "Landingpage Erstellung", teaser: "Die perfekte Landingpage für deinen E-Mail-Funnel." },
    ],
  },

  "ki-chatbot": {
    id: "ki-chatbot",
    title: "KI-Chatbots",
    badge: "KI Chatbot Fitness Coach",
    floatingBadge: "24/7 verfügbar",
    metaTitle:
      "KI Chatbot Fitness Coach – Leads qualifizieren & Termine buchen 24/7",
    metaDescription:
      "KI-Chatbot für Fitness- und Ernährungscoaches: Beantwortet Fragen, qualifiziert Leads und bucht Termine automatisch – auf Website und WhatsApp. GPT-4 basiert.",
    keyword: "KI Chatbot Fitness Coach",
    additionalKeywords: [
      "KI Chatbot Ernährungscoach",
      "Chatbot Personal Trainer einrichten",
      "AI Chatbot Coach Website",
    ],
    heroHeadline: "Dein KI-Assistent – 24/7 für deine Interessenten da.",
    heroSubline:
      "Ein auf dein Wissen trainierter KI-Chatbot, der Fragen sofort beantwortet, Leads qualifiziert und Termine bucht – während du coachst oder schläfst.",
    heroChecklist: [
      "Antwortet sofort – auch um 3 Uhr nachts",
      "Auf dein Coaching-Wissen trainiert",
      "Bucht direkt Erstgespräche in deinem Kalender",
      "Qualifiziert Leads, bevor sie zu dir kommen",
      "Auf Website und WhatsApp einsetzbar",
    ],
    heroStat: [
      { value: "24/7", label: "automatische Verfügbarkeit" },
      { value: "<5s", label: "Antwortzeit" },
    ],
    problemHeadline: "Du verlierst Kunden, weil niemand sofort antwortet.",
    problemSubline:
      "Interessenten stellen Fragen – um 22 Uhr, am Wochenende, während du coachst. Wer nicht sofort antwortet, verliert sie an jemanden, der es tut.",
    problemPoints: [
      "Du beantwortest täglich dieselben 10 Fragen – wieder und wieder.",
      "Interessenten, die außerhalb deiner Arbeitszeiten schreiben, hören nichts.",
      "Unqualifizierte Leads nehmen dir Zeit in Erstgesprächen, die nichts bringen.",
      "Kein System, das Termine automatisch bucht – alles läuft über dich.",
      "Potenzielle Kunden entscheiden sich für einen anderen Coach, der schneller reagiert.",
    ],
    solutionHeadline: "Ein KI-Chatbot, der denkt und handelt wie du.",
    solution:
      "Ich trainiere einen KI-Chatbot auf deinem spezifischen Coaching-Wissen – er beantwortet Fragen, qualifiziert Interessenten und bucht Termine direkt in deinen Kalender. Rund um die Uhr.",
    solutionPoints: [
      "Training auf deinen FAQs, Programmen und deiner Zielgruppe",
      "Integration auf deiner Website und/oder in WhatsApp",
      "Direkte Calendly-Integration für automatische Terminbuchung",
      "Lead-Qualifizierung: Nur passende Interessenten kommen zu dir",
      "Laufende Optimierung basierend auf echten Gesprächen",
    ],
    process: [
      { title: "Wissensdatenbank-Aufbau", desc: "Deine FAQs, Programme und USPs fließen in den Bot." },
      { title: "Bot-Training & Persona", desc: "Der Chatbot spricht in deiner Stimme und deinem Stil." },
      { title: "Integration & Testing", desc: "Einbindung auf Website und/oder WhatsApp, ausführliches Testing." },
      { title: "Launch & Optimierung", desc: "Live-Gang und kontinuierliche Verbesserung durch echte Daten." },
    ],
    ctaHeadline: "Nie wieder einen Lead verlieren, weil du gerade coachst.",
    ctaSubline:
      "Im Erstgespräch zeige ich dir, wie ein auf dein Business trainierter KI-Chatbot aussehen würde.",
    features: [
      { title: "GPT-4 basierte KI", desc: "State-of-the-Art KI für natürliche, hilfreiche Gespräche." },
      { title: "Direkte Terminbuchung", desc: "Integration mit Calendly für sofortige Buchungen im Chat." },
      { title: "Lead-Qualifizierung", desc: "Der Bot filtert Interessenten vor – nur passende Leads kommen zu dir." },
      { title: "24/7 Verfügbarkeit", desc: "Dein Chatbot schläft nicht – er antwortet auch um 2 Uhr nachts." },
      { title: "Website & WhatsApp", desc: "Flexibel einsetzbar auf deiner Website und/oder in WhatsApp." },
      { title: "Nahtlose Übergabe", desc: "Bei komplexen Anfragen leitet der Bot direkt zu dir weiter." },
    ],
    faq: [
      {
        q: "Wie wird der Chatbot auf mein Business trainiert?",
        a: "Ich erstelle gemeinsam mit dir eine Wissensdatenbank aus deinen FAQs, Leistungsbeschreibungen und Zielgruppeninformationen. Der Bot lernt, wie du antwortest.",
      },
      {
        q: "Auf welchen Plattformen kann der Chatbot eingesetzt werden?",
        a: "Primär auf deiner Website und in WhatsApp. Auf Wunsch auch in Instagram DMs oder anderen Plattformen.",
      },
    ],
    relatedServices: [
      { id: "landingpage-erstellung", title: "Landingpage Erstellung", teaser: "Den Chatbot direkt in deine Landingpage integrieren." },
      { id: "whatsapp-marketing", title: "WhatsApp Marketing", teaser: "Chatbot und WhatsApp-Sequenzen kombinieren." },
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Chatbot-Leads automatisch ins CRM übertragen." },
    ],
  },

  "automatisiertes-onboarding": {
    id: "automatisiertes-onboarding",
    title: "Automatisiertes Onboarding",
    badge: "Onboarding automatisieren Coach",
    floatingBadge: "3h → 20 Min. pro Klient",
    metaTitle:
      "Onboarding automatisieren Coach – Professionelles Kunden-Onboarding ohne Aufwand",
    metaDescription:
      "Vollautomatisches Onboarding für Coaching-Kunden: Vertrag, Zahlung, Zugang, Willkommen – alles automatisch. Spare 3+ Stunden pro Neukunde.",
    keyword: "Onboarding automatisieren Coach",
    additionalKeywords: [
      "automatisiertes Onboarding Personal Trainer",
      "Kunden Onboarding Fitness Coach",
      "Coach Onboarding System",
    ],
    heroHeadline: "Professionelles Onboarding für jeden neuen Kunden – vollautomatisch.",
    heroSubline:
      "Vom ersten Kauf bis zum laufenden Coaching: Ein nahtloses, vollautomatisches Onboarding-Erlebnis, das deine Kunden begeistert – und dir Stunden spart.",
    heroChecklist: [
      "Verträge werden automatisch erstellt und verschickt",
      "Zahlungen und Rechnungen laufen automatisch",
      "Sofortiger Zugang zur Coaching-Plattform",
      "Automatische Willkommens-Sequenz per E-Mail & WhatsApp",
      "Keine manuelle Betreuung beim Einstieg nötig",
    ],
    heroStat: [
      { value: "20 Min.", label: "statt 3 Stunden pro Klient" },
      { value: "100 %", label: "automatisiert" },
    ],
    problemHeadline: "Jeder neue Klient kostet dich Stunden – noch bevor das Coaching beginnt.",
    problemSubline:
      "Vertrag schicken, Zahlung prüfen, Zugang einrichten, alles erklären – das wiederholst du für jeden neuen Kunden von Hand. Das ist weder skalierbar noch professionell.",
    problemPoints: [
      "Du verbringst 2–3 Stunden pro neuem Klient mit Onboarding-Aufgaben.",
      "Verträge werden manuell verschickt – fehleranfällig und zeitraubend.",
      "Neue Kunden warten auf ihren Zugang, weil du gerade coachst.",
      "Kein einheitliches Erlebnis – jeder Klient bekommt etwas anderes.",
      "Du vergisst einzelne Schritte, was zu unprofessionellen Situationen führt.",
    ],
    solutionHeadline: "Einmal einrichten – dann läuft es von selbst.",
    solution:
      "Ich baue dir ein vollautomatisches Onboarding-System: Nach der Buchung laufen Vertrag, Zahlung, Plattform-Zugang und Willkommens-Sequenz automatisch ab – ohne deinen Eingriff.",
    solutionPoints: [
      "Mapping der gesamten Kunden-Journey vom Kauf bis zum Start",
      "Automatisierung von Vertrag, Zahlung und Plattform-Zugang",
      "Integration mit deiner Coaching-Plattform (Kajabi, Teachable etc.)",
      "Professionelle Willkommens-Sequenz per E-Mail und WhatsApp",
      "Automatische Check-ins nach Woche 1, 4 und 12",
    ],
    process: [
      { title: "Journey-Mapping", desc: "Alle Schritte vom Kauf bis zum laufenden Coaching definieren." },
      { title: "Dokumenten-Automation", desc: "Verträge, Rechnungen und Zugänge automatisieren." },
      { title: "Plattform-Integration", desc: "Anbindung an dein LMS, CRM und Zahlungssystem." },
      { title: "Willkommens-Erlebnis", desc: "E-Mail- und WhatsApp-Sequenz für neue Kunden." },
    ],
    ctaHeadline: "Gib dir und deinen Kunden das Onboarding-Erlebnis, das beide verdienen.",
    ctaSubline:
      "Im kostenlosen Erstgespräch analysieren wir deinen aktuellen Onboarding-Prozess und ich zeige dir, wie er vollautomatisch werden kann.",
    features: [
      { title: "Digitale Signaturen", desc: "Verträge werden automatisch verschickt und digital signiert." },
      { title: "Automatische Rechnungsstellung", desc: "Rechnung wird direkt nach Buchung generiert und versendet." },
      { title: "Sofortiger Plattform-Zugang", desc: "Der Kunde bekommt sofort Zugang zu deiner Coaching-Plattform." },
      { title: "Willkommens-Sequenz", desc: "Automatische E-Mail/WhatsApp-Sequenz, die den Kunden onboardet." },
      { title: "Feedback-Automation", desc: "Automatische Check-ins nach Woche 1, 4 und 12." },
      { title: "CRM-Integration", desc: "Alle Kundendaten fließen automatisch in dein CRM." },
    ],
    faq: [
      {
        q: "Welche Coaching-Plattformen werden unterstützt?",
        a: "Ich arbeite mit allen gängigen Plattformen: Kajabi, Teachable, Thinkific, CoachVox sowie individuellen Lösungen.",
      },
      {
        q: "Was passiert, wenn ein Kunde bezahlt aber das Onboarding fehlschlägt?",
        a: "Ich richte Fehler-Monitoring und manuelle Fallback-Prozesse ein, damit kein Kunde jemals in einer Warteschleife steckt.",
      },
    ],
    relatedServices: [
      { id: "automatisierungen", title: "Automatisierungen", teaser: "Alle weiteren Prozesse in deinem Business automatisieren." },
      { id: "ki-chatbot", title: "KI-Chatbot", teaser: "KI beantwortet Onboarding-Fragen neuer Kunden automatisch." },
      { id: "email-marketing", title: "E-Mail Marketing", teaser: "Professionelle E-Mail-Sequenzen für den gesamten Kunden-Lifecycle." },
    ],
  },
};
