// Using native fetch from Node.js 18+

const SUPABASE_URL = 'https://tonsbtvpgbcrdnionbul.supabase.co';
const SUPABASE_KEY = 'sb_publishable_YW6Q4Zr39MSA5CBiXeqsJw_8b66dLHI';

const post = {
  slug: 'lokales-seo-fuer-handwerker',
  title: 'Lokales SEO für Handwerker: Der ultimative Guide für mehr Aufträge aus deiner Region',
  excerpt: 'Du möchtest, dass Kunden in deiner Stadt dich sofort finden, wenn sie nach einem Experten suchen? In diesem Guide lernst du, wie du mit lokalem SEO dein Handwerk ganz nach vorne bringst – von Google Business bis zu regionalen Backlinks.',
  category: 'SEO',
  date: '2026-05-01',
  author: 'Timm Schurig',
  read_time: '8 Min.',
  featured: true,
  published: true,
  header_image: '/images/blog/lokales-seo-handwerker.png',
  content_top: `Stell dir vor, bei jemandem in deiner Nachbarschaft bricht ein Rohrbruch aus oder die Heizung fällt im tiefsten Winter aus. Was ist der erste Reflex? Der Griff zum Smartphone. Es wird nicht mehr im Branchenbuch geblättert; es wird gegoogelt. Suchbegriffe wie „Sanitärnotdienst in der Nähe“ oder „Elektriker [Stadtname]“ dominieren den Markt.\n\nWenn du mit deinem Handwerksbetrieb bei diesen Suchanfragen nicht auf der ersten Seite – und am besten im sogenannten „Local Pack“ (der Kartenansicht von Google) – erscheinst, existierst du für diese potenziellen Kunden schlichtweg nicht.\n\nIn diesem Beitrag zeige ich dir Schritt für Schritt, wie du Lokales SEO für Handwerker meisterst, deine Online-Sichtbarkeit massiv steigerst und am Ende mehr qualifizierte Anfragen aus deinem direkten Einzugsgebiet erhältst.`,
  content_bottom: `## Warum Lokales SEO für das Handwerk die wichtigste Marketing-Maßnahme ist\nDas Nutzerverhalten hat sich fundamental gewandelt. Lokale Suchanfragen haben eine extrem hohe Kaufintention. Jemand, der nach einem „Dachdecker in der Nähe“ sucht, möchte in der Regel zeitnah eine Dienstleistung in Anspruch nehmen.\n\nDie Vorteile von lokalem SEO auf einen Blick:\n- **Höhere Konversionsrate**: Lokale Suche führt oft direkt zu einem Anruf oder einer Mail.\n- **Geringere Streuverluste**: Du erreichst genau die Menschen in deinem Liefergebiet.\n- **Vertrauensvorschuss**: Ein gut gepflegtes Google-Profil mit positiven Bewertungen wirkt wie eine digitale Empfehlung.\n- **Wettbewerbsvorteil**: Viele deiner Kollegen vernachlässigen ihre Online-Präsenz noch immer – das ist deine Chance.\n\n### 1. Das Herzstück: Dein Google Business Profil optimieren\nFrüher hieß es „Google My Business“, heute ist es das Google Business Profil. Es ist das digitale Aushängeschild deines Betriebs.\n\n- **Vollständigkeit**: Fülle jedes Feld aus. Name, Adresse, Telefonnummer (NAP) müssen zu 100 % korrekt sein.\n- **Kategorien wählen**: Wähle deine Primärkategorie so präzise wie möglich.\n- **Fotos und Videos**: Handwerk ist visuell. Lade regelmäßig Vorher-Nachher-Bilder hoch.\n\n### 2. On-Page SEO: Deine Website als regionale Autorität\nDeine Website muss Google unmissverständlich mitteilen, wo du tätig bist.\n- **Keyword-Recherche**: Konzentriere dich auf Begriffe wie „Schreiner Köln“ oder „Malerbetrieb Hamburg“.\n- **Lokale Landingpages**: Erstelle für jedes wichtige Gebiet eine eigene Unterseite.\n\n### 3. Bewertungen: Das digitale Gold des Handwerks\nNichts überzeugt einen Neukunden mehr als die Meinung eines anderen Kunden.\n- **Aktiv nachfragen**: Bitte nach jedem Auftrag um eine Google-Bewertung.\n- **Auf Bewertungen reagieren**: Antworte auf jede Rezension.\n\n### 4. Lokale Citations und Branchenverzeichnisse\nEinträge in Gelben Seiten, Das Örtliche oder Meistersuche.de stärken deine lokale Relevanz.\n\n### 5. Content Marketing: Wissen schafft Vertrauen\nEin Blog hilft dir, als Experte wahrgenommen zu werden. Schreibe über Themen wie „5 Tipps zum Heizkosten sparen“.\n\n### 6. Lokale Backlinks: Netzwerken im digitalen Raum\nLinks von lokalen Vereinen oder Partnerbetrieben sind extrem wertvoll.\n\n### 7. Mobile Optimierung und Technik\nDie meisten Suchen passieren auf dem Smartphone. Deine Seite muss blitzschnell und „Mobile-First“ sein.\n\n## Fazit: Schritt für Schritt zum regionalen Marktführer\nLokales SEO für Handwerker ist ein Marathon, kein Sprint. Aber es zahlt sich aus. Fange heute an, dein Profil zu pflegen und aktiv Bewertungen zu sammeln.\n\n---\n\n## FAQ: Häufig gestellte Fragen\n**1. Wie lange dauert es, bis ich bei Google oben stehe?**\nErste Ergebnisse siehst du oft nach 2–4 Wochen, volle Sichtbarkeit dauert 3–6 Monate.\n\n**2. Kostet ein Google Business Profil Geld?**\nNein, es ist komplett kostenlos.\n\n**3. Reicht Facebook oder Instagram nicht aus?**\nSocial Media ist gut für die Bindung, aber bei akuten Problemen suchen Menschen bei Google.`
};

async function run() {
  console.log('Sending post to Supabase...');
  const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(post)
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Error inserting post:', err);
    process.exit(1);
  }

  const data = await res.json();
  console.log('Successfully inserted post:', data[0].slug);
}

run();
