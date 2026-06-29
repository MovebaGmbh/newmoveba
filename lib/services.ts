export type ServiceSlug =
  | "umzuege"
  | "entruempelungen"
  | "moebellieferung"
  | "moebelmontage"
  | "verkehrszeichenaufstellung";

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  description: string;
  benefits: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  faq: ServiceFaq[];
  ctaTitle: string;
  ctaText: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "umzuege",
    title: "Umzüge",
    metaTitle: "Umzüge in Berlin | MOVEBA GmbH",
    metaDescription:
      "Professionelle Umzüge in Berlin und Umgebung mit Planung, Transport, Montage und sauberer Übergabe.",
    heroImage: "/images/hero-bg-1280.jpg",
    heroAlt: "MOVEBA Umzugsfahrzeug vor einem modernen Wohnhaus",
    intro:
      "MOVEBA organisiert private und gewerbliche Umzüge strukturiert, termintreu und mit einem Team, das mitdenkt.",
    description:
      "Ob Wohnung, Haus oder Büro: Wir übernehmen die komplette Umzugslogistik von der Vorbereitung über den sicheren Transport bis zur Montage am neuen Standort. Auf Wunsch kümmern wir uns auch um Verpackung, Tragewege, Demontage und die saubere Übergabe der alten Räume.",
    benefits: [
      "Feste Ansprechpartner und klare Abläufe",
      "Sorgfältiger Transport von Möbeln, Technik und Kartons",
      "Montage- und Trageservice aus einer Hand",
      "Planung für enge Treppenhäuser, Halteverbotszonen und Zeitfenster",
    ],
    process: [
      {
        title: "1. Anfrage und Besichtigung",
        description:
          "Wir erfassen Umfang, Laufwege und besondere Anforderungen und kalkulieren Ihren Umzug realistisch.",
      },
      {
        title: "2. Vorbereitung und Schutz",
        description:
          "Möbel, empfindliche Oberflächen und Wege werden geschützt, damit beim Umzug nichts beschädigt wird.",
      },
      {
        title: "3. Transport und Aufbau",
        description:
          "Wir transportieren alles zügig an den neuen Ort und bauen auf Wunsch direkt wieder auf.",
      },
    ],
    faq: [
      {
        q: "Übernehmt ihr auch Teilumzüge?",
        a: "Ja, wir unterstützen sowohl komplette Umzüge als auch einzelne Transporte oder Etappenumzüge.",
      },
      {
        q: "Könnt ihr Möbel abbauen und wieder aufbauen?",
        a: "Ja. Montage und Demontage gehören auf Wunsch zum Umzugsservice dazu.",
      },
      {
        q: "Arbeitet ihr nur in Berlin?",
        a: "Berlin ist unser Schwerpunkt. Umzüge in das Umland oder weitere Strecken sind nach Absprache möglich.",
      },
    ],
    ctaTitle: "Umzug professionell planen",
    ctaText:
      "Sagen Sie uns kurz, was transportiert werden soll. Wir melden uns mit einer passenden Einschätzung zurück.",
  },
  {
    slug: "entruempelungen",
    title: "Entrümpelungen",
    metaTitle: "Entrümpelungen in Berlin | MOVEBA GmbH",
    metaDescription:
      "Schnelle Entrümpelungen von Wohnung, Keller, Dachboden oder Gewerbefläche mit sauberer Übergabe.",
    heroImage: "/images/service-visual-1.jpg",
    heroAlt: "Aufgeräumte Transport- und Entrümpelungssituation mit MOVEBA-Team",
    intro:
      "Wir schaffen Platz, ohne Ihnen zusätzlichen Aufwand zu machen. Schnell, diskret und sauber.",
    description:
      "Von der Wohnungsauflösung bis zur Kellerentrümpelung übernehmen wir Räumung, Sortierung, Abtransport und die besenreine Übergabe. Dabei arbeiten wir strukturiert, achten auf verwertbare Gegenstände und halten unnötige Belastungen für Sie gering.",
    benefits: [
      "Schnelle Terminvergabe und klare Abstimmung",
      "Räumung auch von schwierigen oder engen Objekten",
      "Saubere Abwicklung mit diskreter Arbeitsweise",
      "Besenreine Übergabe als Ziel",
    ],
    process: [
      {
        title: "1. Einschätzung",
        description:
          "Wir besprechen Umfang, Zugänge und besondere Gegenstände, damit der Aufwand realistisch eingeschätzt werden kann.",
      },
      {
        title: "2. Räumung",
        description:
          "Das Team sortiert, trägt ab und transportiert alles geordnet aus dem Objekt.",
      },
      {
        title: "3. Übergabe",
        description:
          "Nach der Entrümpelung hinterlassen wir die Fläche so, dass Sie direkt weiterplanen können.",
      },
    ],
    faq: [
      {
        q: "Räumt ihr auch Keller und Dachböden?",
        a: "Ja, auch kleine und schlecht zugängliche Bereiche übernehmen wir regelmäßig.",
      },
      {
        q: "Wie kurzfristig seid ihr verfügbar?",
        a: "Je nach Auslastung sind auch kurzfristige Entrümpelungen möglich.",
      },
      {
        q: "Übernehmt ihr auch die besenreine Übergabe?",
        a: "Ja, das ist auf Wunsch Teil des Auftrags.",
      },
    ],
    ctaTitle: "Mehr Platz schaffen",
    ctaText:
      "Beschreiben Sie kurz, was geräumt werden soll. Wir melden uns mit einer passenden Lösung zurück.",
  },
  {
    slug: "moebellieferung",
    title: "Möbellieferung",
    metaTitle: "Möbellieferung in Berlin | MOVEBA GmbH",
    metaDescription:
      "Zuverlässige Möbellieferung in Berlin inklusive Tragen, Termintreue und schonendem Umgang mit Ihrem Mobiliar.",
    heroImage: "/images/moebellieferung-stock-pexels-7464406.jpg",
    heroAlt: "Zwei Möbelträger transportieren ein Sofa in ein neues Zuhause",
    intro:
      "Wenn Möbel pünktlich und sicher ankommen sollen, sorgen wir für den reibungslosen Transport bis in die Wohnung.",
    description:
      "Wir holen Möbel beim Händler, im Lager oder bei Privatpersonen ab und liefern sie termingerecht an die gewünschte Adresse. Auf Wunsch tragen wir bis in die Etage, stellen die Möbel an den richtigen Ort und kümmern uns um einen schonenden Umgang auf allen Wegen.",
    benefits: [
      "Abholung, Transport und Zustellung aus einer Hand",
      "Sicheres Tragen bis in Wohnung oder Büro",
      "Sorgfältiger Umgang mit empfindlichen Oberflächen",
      "Flexible Zeitfenster für Liefertermine",
    ],
    process: [
      {
        title: "1. Lieferdaten klären",
        description:
          "Adresse, Maße und gewünschte Uhrzeit werden vorab abgestimmt, damit die Lieferung planbar bleibt.",
      },
      {
        title: "2. Transport",
        description:
          "Wir übernehmen die Abholung und fahren die Möbel sicher zum Zielort.",
      },
      {
        title: "3. Zustellung",
        description:
          "Auf Wunsch tragen wir die Möbel in die Wohnung und platzieren sie dort, wo sie gebraucht werden.",
      },
    ],
    faq: [
      {
        q: "Lieferst du auch einzelne Möbelstücke?",
        a: "Ja, auch Einzelstücke oder kleinere Lieferungen übernehmen wir.",
      },
      {
        q: "Könnt ihr bis in die Wohnung tragen?",
        a: "Ja, das gehört bei Bedarf zum Lieferumfang.",
      },
      {
        q: "Arbeitet ihr mit festen Lieferfenstern?",
        a: "Wenn gewünscht, stimmen wir Lieferfenster und Erreichbarkeit klar ab.",
      },
    ],
    ctaTitle: "Lieferung zuverlässig planen",
    ctaText:
      "Schicken Sie uns Abhol- und Zieladresse sowie die Maße. Wir kümmern uns um den Rest.",
  },
  {
    slug: "moebelmontage",
    title: "Möbelmontage",
    metaTitle: "Möbelmontage in Berlin | MOVEBA GmbH",
    metaDescription:
      "Fachgerechte Möbelmontage in Berlin für Schränke, Betten, Regale und weitere Einrichtungsstücke.",
    heroImage: "/images/moebelmontage-stock-pexels-4554420.jpg",
    heroAlt: "Person montiert einen Tisch in einer Wohnung mit Umzugskartons",
    intro:
      "Wir bauen Möbel sauber auf, damit Sie sich nicht mit Schrauben, Anleitungen und Zeitverlust beschäftigen müssen.",
    description:
      "Unsere Möbelmontage umfasst den Aufbau von Schränken, Betten, Regalen, Küchen-Elementen und weiteren Einrichtungsgegenständen. Wir arbeiten sorgfältig, prüfen die Stabilität und sorgen dafür, dass alles am Ende ordentlich und nutzbar ist.",
    benefits: [
      "Sauberer, fachgerechter Aufbau",
      "Schnelle Montage auch bei mehreren Möbelstücken",
      "Sicherer Umgang mit Marken- und Systemmöbeln",
      "Auf Wunsch Verbindung mit Lieferung oder Umzug",
    ],
    process: [
      {
        title: "1. Bedarf abstimmen",
        description:
          "Wir klären vorab, welche Möbel aufgebaut werden sollen und ob besondere Teile vorhanden sind.",
      },
      {
        title: "2. Aufbau",
        description:
          "Das Team montiert die Möbel sauber, kontrolliert die Passgenauigkeit und richtet alles aus.",
      },
      {
        title: "3. Kontrolle",
        description:
          "Zum Abschluss prüfen wir die Stabilität und übergeben die Möbel sauber und einsatzbereit.",
      },
    ],
    faq: [
      {
        q: "Montiert ihr auch Möbel von großen Möbelhäusern?",
        a: "Ja, wir übernehmen auch Serien- und Paketmöbel.",
      },
      {
        q: "Könnt ihr mehrere Möbelstücke an einem Termin aufbauen?",
        a: "Ja, wenn der Umfang bekannt ist, planen wir den Termin entsprechend ein.",
      },
      {
        q: "Macht ihr auch Demontagen?",
        a: "Ja, Demontagen vor Umzug oder Transport sind ebenfalls möglich.",
      },
    ],
    ctaTitle: "Montage stressfrei erledigen",
    ctaText:
      "Senden Sie uns die Möbelnamen oder Fotos. Wir prüfen den Aufwand und melden uns zurück.",
  },
  {
    slug: "verkehrszeichenaufstellung",
    title: "Verkehrszeichenaufstellung",
    metaTitle: "Verkehrszeichenaufstellung in Berlin | MOVEBA GmbH",
    metaDescription:
      "Fachgerechte Verkehrszeichenaufstellung für Baustellen, Umzüge und Sondernutzungen in Berlin.",
    heroImage: "/images/service-visual-traffic-signs.svg",
    heroAlt: "Verkehrszeichen, Absperrung und Markierung für eine sichere Aufstellung",
    intro:
      "Für sichere Abläufe auf Baustellen, bei Umzügen oder Veranstaltungen stellen wir Verkehrszeichen und Absperrungen fachgerecht auf.",
    description:
      "Wir übernehmen die Aufstellung von Verkehrszeichen, Absperrmaterial und temporären Sicherungen nach Vorgabe und Abstimmung. Dabei achten wir auf klare Sichtbarkeit, ordentliche Positionierung und einen reibungslosen Ablauf vor Ort.",
    benefits: [
      "Sichere und nachvollziehbare Aufstellung vor Ort",
      "Klare Abstimmung mit Auftraggeber und Zeitplan",
      "Geeignet für Baustellen, Halteverbotszonen und Veranstaltungen",
      "Verlässliche Umsetzung mit Blick auf Sicherheit",
    ],
    process: [
      {
        title: "1. Vorgaben prüfen",
        description:
          "Wir klären, welche Schilder, Zonen oder Absicherungen benötigt werden.",
      },
      {
        title: "2. Aufstellung",
        description:
          "Das Team bringt die Materialien an den vorgesehenen Stellen an und richtet sie sauber aus.",
      },
      {
        title: "3. Kontrolle",
        description:
          "Zum Schluss prüfen wir Sichtbarkeit, Position und Vollständigkeit der Aufstellung.",
      },
    ],
    faq: [
      {
        q: "Übernehmt ihr auch kurzfristige Sicherungen?",
        a: "Je nach Verfügbarkeit sind auch kurzfristige Einsätze möglich.",
      },
      {
        q: "Arbeitet ihr nach Abstimmung mit Baustellen oder Behörden?",
        a: "Ja, wir richten uns nach den vereinbarten Vorgaben und dem jeweiligen Einsatzort.",
      },
      {
        q: "Könnt ihr auch die Rückholung organisieren?",
        a: "Ja, die spätere Demontage oder Rückholung kann mit eingeplant werden.",
      },
    ],
    ctaTitle: "Sichere Aufstellung anfragen",
    ctaText:
      "Schildern Sie uns den Einsatzort und die benötigten Verkehrszeichen. Wir stimmen den Ablauf mit Ihnen ab.",
  },
] as const;

export const SERVICE_OPTIONS = SERVICE_PAGES.map(({ slug, title }) => ({
  value: slug,
  label: title,
}));

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}

export function getServiceHref(slug: ServiceSlug) {
  return `/leistungen/${slug}`;
}