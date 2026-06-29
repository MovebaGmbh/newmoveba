export type ServiceSlug =
  | "umzuege"
  | "entruempelungen"
  | "moebellieferung"
  | "moebelmontage"
  | "verkehrszeichenaufstellung";

import type { Lang } from "@/lib/i18n";

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

const SERVICES_BY_LANG: Record<Lang, ServicePage[]> = {
  de: [
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
  ],
  en: [
    {
      slug: "umzuege",
      title: "Relocation",
      metaTitle: "Relocation in Berlin | MOVEBA GmbH",
      metaDescription:
        "Professional relocation in Berlin and the surrounding area with planning, transport, assembly and a tidy handover.",
      heroImage: "/images/hero-bg-1280.jpg",
      heroAlt: "MOVEBA moving vehicle in front of a modern residential building",
      intro:
        "MOVEBA organizes private and commercial relocations in a structured, punctual way with a team that thinks ahead.",
      description:
        "Whether apartment, house or office: we handle the complete moving logistics from preparation and safe transport to assembly at the new location. If requested, we also take care of packing, carrying routes, dismantling and the tidy handover of the old premises.",
      benefits: [
        "Dedicated contacts and clear processes",
        "Careful transport of furniture, equipment and boxes",
        "Assembly and carrying service from one source",
        "Planning for narrow staircases, no-parking zones and time windows",
      ],
      process: [
        {
          title: "Request and inspection",
          description:
            "We assess scope, access routes and special requirements to calculate your move realistically.",
        },
        {
          title: "Preparation and protection",
          description:
            "Furniture, sensitive surfaces and pathways are protected so nothing is damaged during the move.",
        },
        {
          title: "Transport and setup",
          description:
            "We transport everything efficiently to the new location and, if requested, assemble it again right away.",
        },
      ],
      faq: [
        {
          q: "Do you also handle partial moves?",
          a: "Yes, we support complete relocations as well as individual transports or phased moves.",
        },
        {
          q: "Can you dismantle and reassemble furniture?",
          a: "Yes. Assembly and disassembly can be part of the moving service on request.",
        },
        {
          q: "Do you only work in Berlin?",
          a: "Berlin is our focus. Moves to the surrounding area or longer distances are possible by arrangement.",
        },
      ],
      ctaTitle: "Plan your move professionally",
      ctaText:
        "Tell us briefly what needs to be transported. We will get back to you with a suitable assessment.",
    },
    {
      slug: "entruempelungen",
      title: "Clear-outs",
      metaTitle: "Clear-outs in Berlin | MOVEBA GmbH",
      metaDescription:
        "Fast clear-outs of apartments, basements, attics or commercial spaces with a tidy handover.",
      heroImage: "/images/service-visual-1.jpg",
      heroAlt: "Organized clear-out and transport situation with the MOVEBA team",
      intro:
        "We create space without creating extra work for you. Fast, discreet and clean.",
      description:
        "From apartment clearances to basement clear-outs, we take care of emptying, sorting, transport and broom-clean handover. We work in a structured way, pay attention to reusable items and keep unnecessary effort for you to a minimum.",
      benefits: [
        "Fast appointments and clear coordination",
        "Clear-outs even in difficult or narrow properties",
        "Clean execution with discreet working methods",
        "Broom-clean handover as the goal",
      ],
      process: [
        {
          title: "Assessment",
          description:
            "We discuss scope, access and special items so the effort can be estimated realistically.",
        },
        {
          title: "Clearing",
          description:
            "The team sorts, carries out and transports everything out of the property in an orderly way.",
        },
        {
          title: "Handover",
          description:
            "After the clear-out, we leave the space in a condition that lets you proceed directly.",
        },
      ],
      faq: [
        {
          q: "Do you also clear basements and attics?",
          a: "Yes, we regularly handle small and difficult-to-access areas as well.",
        },
        {
          q: "How quickly are you available?",
          a: "Depending on capacity, short-notice clear-outs are also possible.",
        },
        {
          q: "Do you also handle broom-clean handover?",
          a: "Yes, that can be included on request.",
        },
      ],
      ctaTitle: "Create more space",
      ctaText:
        "Briefly describe what needs to be cleared. We will get back to you with a suitable solution.",
    },
    {
      slug: "moebellieferung",
      title: "Furniture delivery",
      metaTitle: "Furniture delivery in Berlin | MOVEBA GmbH",
      metaDescription:
        "Reliable furniture delivery in Berlin including carrying service, punctuality and careful handling of your furniture.",
      heroImage: "/images/moebellieferung-stock-pexels-7464406.jpg",
      heroAlt: "Two movers carrying a sofa into a new home",
      intro:
        "When furniture needs to arrive safely and on time, we ensure smooth transport right into your home.",
      description:
        "We collect furniture from retailers, storage facilities or private sellers and deliver it on schedule to the desired address. If requested, we carry it up to the floor, place it where it belongs and handle it carefully along the entire route.",
      benefits: [
        "Pickup, transport and delivery from one source",
        "Safe carrying into apartment or office",
        "Careful handling of sensitive surfaces",
        "Flexible time windows for delivery appointments",
      ],
      process: [
        {
          title: "Clarify delivery details",
          description:
            "Address, dimensions and preferred time are agreed in advance so the delivery remains plannable.",
        },
        {
          title: "Transport",
          description:
            "We handle pickup and drive the furniture safely to the destination.",
        },
        {
          title: "Delivery",
          description:
            "If requested, we carry the furniture into the home and place it where it is needed.",
        },
      ],
      faq: [
        {
          q: "Do you also deliver single pieces of furniture?",
          a: "Yes, we also handle individual items or smaller deliveries.",
        },
        {
          q: "Can you carry items into the apartment?",
          a: "Yes, if needed that is part of the service.",
        },
        {
          q: "Do you work with fixed delivery windows?",
          a: "If desired, we coordinate delivery windows and availability clearly in advance.",
        },
      ],
      ctaTitle: "Plan delivery reliably",
      ctaText:
        "Send us the pickup and destination address as well as the dimensions. We take care of the rest.",
    },
    {
      slug: "moebelmontage",
      title: "Furniture assembly",
      metaTitle: "Furniture assembly in Berlin | MOVEBA GmbH",
      metaDescription:
        "Professional furniture assembly in Berlin for wardrobes, beds, shelves and other furnishings.",
      heroImage: "/images/moebelmontage-stock-pexels-4554420.jpg",
      heroAlt: "Person assembling a table in an apartment with moving boxes",
      intro:
        "We assemble furniture cleanly so you do not have to deal with screws, manuals and wasted time.",
      description:
        "Our furniture assembly service includes wardrobes, beds, shelves, kitchen elements and other furnishings. We work carefully, check stability and make sure everything is tidy and ready to use at the end.",
      benefits: [
        "Clean, professional assembly",
        "Fast setup even for multiple pieces of furniture",
        "Safe handling of branded and system furniture",
        "Can be combined with delivery or relocation on request",
      ],
      process: [
        {
          title: "Coordinate requirements",
          description:
            "We clarify in advance which furniture needs to be assembled and whether there are any special parts.",
        },
        {
          title: "Assembly",
          description:
            "The team assembles the furniture cleanly, checks the fit and aligns everything properly.",
        },
        {
          title: "Final check",
          description:
            "At the end, we check stability and hand over the furniture clean and ready for use.",
        },
      ],
      faq: [
        {
          q: "Do you assemble furniture from major furniture stores?",
          a: "Yes, we also handle flat-pack and series furniture.",
        },
        {
          q: "Can you assemble multiple pieces in one appointment?",
          a: "Yes, if we know the scope in advance, we schedule the appointment accordingly.",
        },
        {
          q: "Do you also do disassembly?",
          a: "Yes, disassembly before a move or transport is also possible.",
        },
      ],
      ctaTitle: "Get assembly done without stress",
      ctaText:
        "Send us the furniture names or photos. We will review the effort and get back to you.",
    },
    {
      slug: "verkehrszeichenaufstellung",
      title: "Traffic sign setup",
      metaTitle: "Traffic sign setup in Berlin | MOVEBA GmbH",
      metaDescription:
        "Professional traffic sign setup for construction sites, relocations and special uses in Berlin.",
      heroImage: "/images/service-visual-traffic-signs.svg",
      heroAlt: "Traffic signs, barriers and markings for a safe setup",
      intro:
        "For safe operations on construction sites, during relocations or events, we professionally set up traffic signs and barriers.",
      description:
        "We handle the setup of traffic signs, barrier material and temporary safety measures according to specifications and coordination. We make sure everything is clearly visible, properly positioned and runs smoothly on site.",
      benefits: [
        "Safe and traceable setup on site",
        "Clear coordination with client and schedule",
        "Suitable for construction sites, no-parking zones and events",
        "Reliable execution with a focus on safety",
      ],
      process: [
        {
          title: "Review requirements",
          description:
            "We clarify which signs, zones or safety measures are needed.",
        },
        {
          title: "Setup",
          description:
            "The team places the materials in the designated locations and aligns them properly.",
        },
        {
          title: "Inspection",
          description:
            "At the end, we check visibility, position and completeness of the setup.",
        },
      ],
      faq: [
        {
          q: "Do you also handle short-notice safety setups?",
          a: "Depending on availability, short-notice jobs are possible.",
        },
        {
          q: "Do you work according to coordination with construction sites or authorities?",
          a: "Yes, we follow the agreed requirements and the respective site conditions.",
        },
        {
          q: "Can you also organize the removal afterward?",
          a: "Yes, later dismantling or pickup can be planned as well.",
        },
      ],
      ctaTitle: "Request a safe setup",
      ctaText:
        "Tell us the site and the traffic signs required. We will coordinate the process with you.",
    },
  ],
  ru: [
    {
      slug: "umzuege",
      title: "Переезды",
      metaTitle: "Переезды в Берлине | MOVEBA GmbH",
      metaDescription:
        "Профессиональные переезды в Берлине и окрестностях с планированием, перевозкой, сборкой и аккуратной сдачей.",
      heroImage: "/images/hero-bg-1280.jpg",
      heroAlt: "Фургон MOVEBA перед современным жилым домом",
      intro:
        "MOVEBA организует частные и коммерческие переезды структурированно, точно в срок и с командой, которая думает наперёд.",
      description:
        "Будь то квартира, дом или офис: мы берём на себя всю логистику переезда от подготовки и безопасной перевозки до сборки на новом месте. По запросу мы также занимаемся упаковкой, переносом, разборкой и аккуратной сдачей старого помещения.",
      benefits: [
        "Постоянные контактные лица и понятные процессы",
        "Бережная перевозка мебели, техники и коробок",
        "Сборка и переноска из одних рук",
        "Планирование для узких лестниц, зон остановки и временных окон",
      ],
      process: [
        {
          title: "Заявка и осмотр",
          description:
            "Мы оцениваем объём, проходы и особые требования, чтобы реалистично рассчитать переезд.",
        },
        {
          title: "Подготовка и защита",
          description:
            "Мебель, чувствительные поверхности и пути защищаются, чтобы при переезде ничего не повредилось.",
        },
        {
          title: "Перевозка и сборка",
          description:
            "Мы быстро перевозим всё на новое место и при необходимости сразу собираем обратно.",
        },
      ],
      faq: [
        {
          q: "Вы выполняете и частичные переезды?",
          a: "Да, мы помогаем как с полными переездами, так и с отдельными перевозками или этапными переездами.",
        },
        {
          q: "Можете разобрать и снова собрать мебель?",
          a: "Да. Сборка и разборка могут входить в услугу переезда по запросу.",
        },
        {
          q: "Вы работаете только в Берлине?",
          a: "Берлин — наш основной регион. Переезды в окрестности или на более дальние расстояния возможны по договорённости.",
        },
      ],
      ctaTitle: "Планируйте переезд профессионально",
      ctaText:
        "Коротко сообщите, что нужно перевезти. Мы вернёмся к вам с подходящей оценкой.",
    },
    {
      slug: "entruempelungen",
      title: "Вывоз и расчистка",
      metaTitle: "Расчистка помещений в Берлине | MOVEBA GmbH",
      metaDescription:
        "Быстрая расчистка квартир, подвалов, чердаков или коммерческих помещений с аккуратной сдачей.",
      heroImage: "/images/service-visual-1.jpg",
      heroAlt: "Организованная расчистка и транспортировка с командой MOVEBA",
      intro:
        "Мы освобождаем пространство без лишней нагрузки для вас. Быстро, деликатно и чисто.",
      description:
        "От освобождения квартиры до расчистки подвала мы берём на себя вынос, сортировку, вывоз и сдачу в чистом состоянии. Мы работаем структурированно, учитываем пригодные вещи и сводим лишние хлопоты для вас к минимуму.",
      benefits: [
        "Быстрое назначение сроков и чёткое согласование",
        "Расчистка даже сложных и тесных объектов",
        "Чистое выполнение с деликатным подходом",
        "Цель — сдача в подметённом состоянии",
      ],
      process: [
        {
          title: "Оценка",
          description:
            "Мы обсуждаем объём, доступ и особые предметы, чтобы реалистично оценить затраты.",
        },
        {
          title: "Расчистка",
          description:
            "Команда сортирует, выносит и организованно вывозит всё из объекта.",
        },
        {
          title: "Сдача",
          description:
            "После расчистки мы оставляем помещение в состоянии, позволяющем сразу двигаться дальше.",
        },
      ],
      faq: [
        {
          q: "Вы расчищаете подвалы и чердаки?",
          a: "Да, мы регулярно работаем и с небольшими, и с труднодоступными помещениями.",
        },
        {
          q: "Как быстро вы можете приехать?",
          a: "В зависимости от загрузки возможны и срочные расчистки.",
        },
        {
          q: "Вы обеспечиваете сдачу в чистом состоянии?",
          a: "Да, при необходимости это может быть частью заказа.",
        },
      ],
      ctaTitle: "Освободите больше места",
      ctaText:
        "Коротко опишите, что нужно расчистить. Мы предложим подходящее решение.",
    },
    {
      slug: "moebellieferung",
      title: "Доставка мебели",
      metaTitle: "Доставка мебели в Берлине | MOVEBA GmbH",
      metaDescription:
        "Надёжная доставка мебели в Берлине с подъёмом, точным временем и бережным обращением.",
      heroImage: "/images/moebellieferung-stock-pexels-7464406.jpg",
      heroAlt: "Два грузчика заносят диван в новый дом",
      intro:
        "Если мебель должна прибыть вовремя и безопасно, мы обеспечим спокойную доставку прямо до квартиры.",
      description:
        "Мы забираем мебель у продавца, со склада или у частных лиц и доставляем её точно по адресу в согласованное время. По запросу поднимем на этаж, поставим в нужное место и аккуратно обработаем на всём пути.",
      benefits: [
        "Забор, перевозка и доставка из одних рук",
        "Безопасный подъём в квартиру или офис",
        "Бережное отношение к чувствительным поверхностям",
        "Гибкие временные окна для доставки",
      ],
      process: [
        {
          title: "Уточнение данных доставки",
          description:
            "Адрес, размеры и желаемое время согласуются заранее, чтобы доставка была предсказуемой.",
        },
        {
          title: "Перевозка",
          description:
            "Мы берём на себя забор и безопасно доставляем мебель к месту назначения.",
        },
        {
          title: "Доставка",
          description:
            "При необходимости мы занесём мебель в квартиру и разместим там, где она нужна.",
        },
      ],
      faq: [
        {
          q: "Вы доставляете и отдельные предметы мебели?",
          a: "Да, мы выполняем и доставку отдельных предметов или небольших заказов.",
        },
        {
          q: "Можете занести мебель в квартиру?",
          a: "Да, при необходимости это входит в услугу.",
        },
        {
          q: "Вы работаете с фиксированными окнами доставки?",
          a: "Если нужно, мы заранее чётко согласуем окна доставки и доступность.",
        },
      ],
      ctaTitle: "Планируйте доставку надёжно",
      ctaText:
        "Пришлите адрес забора, адрес доставки и размеры. Остальное мы возьмём на себя.",
    },
    {
      slug: "moebelmontage",
      title: "Сборка мебели",
      metaTitle: "Сборка мебели в Берлине | MOVEBA GmbH",
      metaDescription:
        "Профессиональная сборка мебели в Берлине для шкафов, кроватей, стеллажей и других предметов интерьера.",
      heroImage: "/images/moebelmontage-stock-pexels-4554420.jpg",
      heroAlt: "Человек собирает стол в квартире с коробками для переезда",
      intro:
        "Мы аккуратно собираем мебель, чтобы вам не пришлось тратить время на винты, инструкции и лишние усилия.",
      description:
        "Наша услуга сборки мебели включает шкафы, кровати, стеллажи, кухонные элементы и другие предметы интерьера. Мы работаем тщательно, проверяем устойчивость и следим за тем, чтобы в конце всё было аккуратно и готово к использованию.",
      benefits: [
        "Чистая и профессиональная сборка",
        "Быстрый монтаж даже нескольких предметов",
        "Надёжная работа с брендовой и модульной мебелью",
        "По запросу можно совместить с доставкой или переездом",
      ],
      process: [
        {
          title: "Согласование задачи",
          description:
            "Мы заранее уточняем, какую мебель нужно собрать и есть ли особые детали.",
        },
        {
          title: "Сборка",
          description:
            "Команда аккуратно собирает мебель, проверяет подгонку и выравнивает всё как нужно.",
        },
        {
          title: "Финальная проверка",
          description:
            "В конце мы проверяем устойчивость и передаём мебель чистой и готовой к использованию.",
        },
      ],
      faq: [
        {
          q: "Вы собираете мебель из крупных мебельных магазинов?",
          a: "Да, мы также работаем с серийной и коробочной мебелью.",
        },
        {
          q: "Можно собрать несколько предметов за один визит?",
          a: "Да, если объём известен заранее, мы соответствующим образом планируем время.",
        },
        {
          q: "Вы делаете и разборку?",
          a: "Да, разборка перед переездом или перевозкой также возможна.",
        },
      ],
      ctaTitle: "Сборка без стресса",
      ctaText:
        "Отправьте нам названия мебели или фотографии. Мы оценим объём и свяжемся с вами.",
    },
    {
      slug: "verkehrszeichenaufstellung",
      title: "Установка дорожных знаков",
      metaTitle: "Установка дорожных знаков в Берлине | MOVEBA GmbH",
      metaDescription:
        "Профессиональная установка дорожных знаков для стройплощадок, переездов и специальных зон в Берлине.",
      heroImage: "/images/service-visual-traffic-signs.svg",
      heroAlt: "Дорожные знаки, ограждения и разметка для безопасной установки",
      intro:
        "Для безопасной работы на стройке, при переездах или мероприятиях мы профессионально устанавливаем дорожные знаки и ограждения.",
      description:
        "Мы берём на себя установку дорожных знаков, ограждений и временных мер безопасности по заданию и согласованию. Мы следим за хорошей видимостью, правильным расположением и слаженной работой на месте.",
      benefits: [
        "Безопасная и понятная установка на месте",
        "Чёткое согласование с заказчиком и графиком",
        "Подходит для стройплощадок, зон запрета остановки и мероприятий",
        "Надёжное выполнение с акцентом на безопасность",
      ],
      process: [
        {
          title: "Проверка требований",
          description:
            "Мы уточняем, какие знаки, зоны или меры безопасности требуются.",
        },
        {
          title: "Установка",
          description:
            "Команда размещает материалы в нужных точках и аккуратно выравнивает их.",
        },
        {
          title: "Проверка",
          description:
            "В конце мы проверяем видимость, расположение и полноту установки.",
        },
      ],
      faq: [
        {
          q: "Вы выполняете и срочные установки?",
          a: "В зависимости от доступности возможны и срочные выезды.",
        },
        {
          q: "Вы работаете по согласованию со стройплощадками или ведомствами?",
          a: "Да, мы придерживаемся согласованных требований и условий конкретного места.",
        },
        {
          q: "Можете организовать и последующий демонтаж?",
          a: "Да, демонтаж или вывоз после завершения также можно запланировать.",
        },
      ],
      ctaTitle: "Запросить безопасную установку",
      ctaText:
        "Сообщите нам место и нужные дорожные знаки. Мы согласуем процесс вместе с вами.",
    },
  ],
} as const;

export const SERVICE_PAGES: ServicePage[] = SERVICES_BY_LANG.de;

export function getServicePages(lang: Lang) {
  return SERVICES_BY_LANG[lang];
}

export function getServiceOptions(lang: Lang) {
  return getServicePages(lang).map(({ slug, title }) => ({
    value: slug,
    label: title,
  }));
}

export function getServiceBySlug(slug: string, lang: Lang = "de") {
  return getServicePages(lang).find((service) => service.slug === slug);
}

export function getServiceHref(slug: ServiceSlug) {
  return `/leistungen/${slug}`;
}