import React from "react";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    featured: boolean;
    keyword: string;
    headerImage: string;
    contentImage: string;
    contentTop: string;
    contentBottom: string;
}

// Helper to generate dummy content block for placeholder posts
const generateContentTop = (keyword: string) => `
<h2>Einführung: Das Wichtigste über ${keyword}</h2>
<p>Wenn du als Fitness- oder Ernährungscoach planbar neue Kunden gewinnen willst, dann führt kein Weg an einem systematischen Prozess vorbei. In diesem Artikel schauen wir uns an, warum <strong class="text-slate-900">${keyword}</strong> ein entscheidender Hebel für dein Business ist und worauf du bei der Umsetzung zwingend achten solltest.</p>

<h3>Die aktuellen Herausforderungen</h3>
<p>Viele Coaches verbringen Stunden mit Content-Erstellung auf Social Media, aber die erhofften Anfragen bleiben aus. Woran liegt das? Oft scheitert es nicht an mangelnder Fachkompetenz, sondern an einem fehlenden System, das die Besucher abholt und Vertrauen aufbaut.</p>
<ul>
  <li>Keine klare Positionierung auf dem Profil</li>
  <li>Interessenten wissen nicht, was sie als Nächstes tun sollen</li>
  <li>Der organische Content wird nicht in messbare Leads umgewandelt</li>
</ul>
`;

const generateContentBottom = (keyword: string) => `
<h3>Die 3 wichtigsten Schritte zur Optimierung</h3>
<p>Werfen wir einen genauen Blick auf die Schritte, die du heute noch implementieren solltest, um spürbare Ergebnisse zu sehen.</p>

<h4>Schritt 1: Das Fundament legen</h4>
<p>Zuerst musst du sicherstellen, dass deine Zielgruppe genau versteht, welches Problem du löst. Vermeide generische Aussagen wie "Ich verhelfe dir zu einem gesunden Leben". Werde spezifisch: "Ich helfe Unternehmern, trotz 50-Stunden-Woche 10 Kilo abzunehmen".</p>

<h4>Schritt 2: Automatisierung nutzen</h4>
<p>Du kannst nicht rund um die Uhr online sein. Hier kommen Automatisierungen und Tools wie KI-Chatbots ins Spiel. Sie beantworten Fragen und qualifizieren Interessenten, während du im Coaching-Call bist.</p>

<h4>Schritt 3: Vertrauen aufbauen</h4>
<p>Vertrauen ist die Währung im Coaching-Markt. Beweise deine Expertise durch Testimonials, Fallstudien und tiefergehende Ratgeber-Artikel in kurzen E-Mail-Follow-up Sequenzen.</p>

<h2>Fazit</h2>
<p>Die Implementierung von <strong class="text-slate-900">${keyword}</strong> muss nicht kompliziert sein, aber sie muss systematisch erfolgen. Starte mit einem Kanal, optimiere ihn, bis er Ergebnisse liefert, und erweitere dann dein System.</p>
`;

export const blogPosts: BlogPost[] = [
    {
        slug: "linkedin-fuer-fitness-coaches",
        title: "LinkedIn für Fitness Coaches: Schritt-für-Schritt zur ersten Anfrage",
        excerpt:
            "Wie du dein LinkedIn-Profil optimierst, regelmäßig postest und planbar Erstgespräche generierst – ohne bezahlte Werbung.",
        category: "LinkedIn & Kundengewinnung",
        date: "10. April 2026",
        author: "Timm Schurig",
        readTime: "8 Min.",
        featured: true,
        keyword: "LinkedIn für Fitness Coaches",
        headerImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?fm=webp&q=60&w=800",
        contentTop: generateContentTop("LinkedIn für Fitness Coaches"),
        contentBottom: generateContentBottom("LinkedIn für Fitness Coaches"),
    },
    {
        slug: "landingpage-leads-verliert",
        title: "Warum deine Landingpage Leads verliert (und wie du es fixst)",
        excerpt:
            "Die häufigsten Fehler auf Coaching-Webseiten und wie du eine Seite baust, die echtes Vertrauen aufbaut und konvertiert.",
        category: "Marketing",
        date: "07. April 2026",
        author: "Timm Schurig",
        readTime: "6 Min.",
        featured: true,
        keyword: "Personal Trainer Landingpage",
        headerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?fm=webp&q=60&w=800",
        contentTop: generateContentTop("Personal Trainer Landingpages"),
        contentBottom: generateContentBottom("Personal Trainer Landingpages"),
    },
    {
        slug: "whatsapp-coaching-funnel",
        title: "WhatsApp im Coaching: So baust du einen funktionierenden Funnel",
        excerpt:
            "Schritt-für-Schritt Guide: Wie du WhatsApp-Sequenzen erstellst, die Leads in zahlende Kunden umwandeln.",
        category: "Marketing",
        date: "03. April 2026",
        author: "Timm Schurig",
        readTime: "7 Min.",
        featured: false,
        keyword: "WhatsApp im Coaching nutzen",
        headerImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=webp&q=60&w=800",
        contentTop: generateContentTop("WhatsApp im Coaching"),
        contentBottom: generateContentBottom("WhatsApp im Coaching"),
    },
    {
        slug: "ki-chatbot-personal-trainer",
        title: "KI-Chatbot für Personal Trainer: Was er kann – und was nicht",
        excerpt:
            "Ein realistischer Blick auf KI-Chatbots: Welche Aufgaben sie übernehmen können und wo du als Coach unverzichtbar bleibst.",
        category: "KI & Chatbots",
        date: "29. März 2026",
        author: "Timm Schurig",
        readTime: "5 Min.",
        featured: false,
        keyword: "KI Chatbot Personal Trainer",
        headerImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1485694212953-eb3eabfd63cc?fm=webp&q=60&w=800",
        contentTop: generateContentTop("KI-Chatbot für Personal Trainer"),
        contentBottom: generateContentBottom("KI-Chatbot für Personal Trainer"),
    },
    {
        slug: "automatisiertes-onboarding-coach",
        title: "Automatisiertes Onboarding: So sparst du als Coach 5h pro Woche",
        excerpt:
            "Von der manuellen Einzel-Betreuung zum vollautomatischen Onboarding-Prozess – Schritt für Schritt erklärt.",
        category: "Onboarding",
        date: "25. März 2026",
        author: "Timm Schurig",
        readTime: "6 Min.",
        featured: false,
        keyword: "automatisiertes Onboarding Coach",
        headerImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fm=webp&q=60&w=800",
        contentTop: generateContentTop("Automatisiertes Onboarding"),
        contentBottom: generateContentBottom("Automatisiertes Onboarding"),
    },
    {
        slug: "email-funnel-fitness-coaches",
        title: "E-Mail Funnel für Fitness Coaches – der komplette Guide",
        excerpt:
            "Wie du einen E-Mail-Funnel aufbaust, der deine Leads warmhält und automatisch zu Erstgesprächen führt.",
        category: "Marketing",
        date: "20. März 2026",
        author: "Timm Schurig",
        readTime: "9 Min.",
        featured: false,
        keyword: "E-Mail Funnel für Coaches",
        headerImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1588196749597-9ff0468925b1?fm=webp&q=60&w=800",
        contentTop: generateContentTop("E-Mail Funnel Setup"),
        contentBottom: generateContentBottom("E-Mail Funnel Setup"),
    },
    {
        slug: "linkedin-organisch-kunden",
        title: "LinkedIn-Profil optimieren für Ernährungscoaches – der vollständige Guide",
        excerpt:
            "Spezifisch für Ernährungscoaches: Welche Profiloptimierungen wirklich zu Anfragen führen.",
        category: "LinkedIn & Kundengewinnung",
        date: "15. März 2026",
        author: "Timm Schurig",
        readTime: "7 Min.",
        featured: false,
        keyword: "LinkedIn Profil Ernährungscoach",
        headerImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1498837167922-41c012202392?fm=webp&q=60&w=800",
        contentTop: generateContentTop("LinkedIn für Ernährungscoaches"),
        contentBottom: generateContentBottom("LinkedIn für Ernährungscoaches"),
    },
    {
        slug: "was-kostet-marketing-fitness-coaches",
        title: "Was kostet Marketing für Fitness Coaches wirklich?",
        excerpt:
            "Transparenter Überblick über realistische Kosten für Landingpages, Automatisierungen und KI-Chatbots.",
        category: "Marketing",
        date: "10. März 2026",
        author: "Timm Schurig",
        readTime: "5 Min.",
        featured: false,
        keyword: "Was kostet Marketing für Fitness Coaches",
        headerImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?fm=webp&q=60&w=800",
        contentImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?fm=webp&q=60&w=800",
        contentTop: generateContentTop("Marketing Budgets für Fitness Coaches"),
        contentBottom: generateContentBottom("Marketing Budgets für Fitness Coaches"),
    },
];
