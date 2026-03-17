export type Lang = "de" | "ru" | "en";

type CookiesLike = {
  get(name: string): { value: string } | undefined;
};

export function normalizeLang(value: string | undefined | null): Lang {
  if (value === "ru" || value === "en" || value === "de") return value;
  return "de";
}

export function getLangFromCookies(cookiesStore: CookiesLike): Lang {
  return normalizeLang(cookiesStore.get("lang")?.value);
}

export const I18N = {
  de: {
    skipToContent: "Zum Inhalt springen",
    nav: {
      services: "Dienstleistungen",
      faq: "FAQ",
      contact: "Kontakt",
    },
    language: {
      label: "Sprache",
      de: "Deutsch",
      ru: "Русский",
      en: "English",
    },
    cta: {
      callNow: "Jetzt anrufen",
    },
    hero: {
      bgAlt: "MOVEBA Transporter",
      pill: "Berlin · Umzüge · Entrümpelungen · Montage",
      title: "Umziehen ohne Stress – mit einem Team, das mitdenkt.",
      description:
        "MOVEBA unterstützt Sie bei Umzügen, Entrümpelungen, Möbellieferung und Möbelmontage – effizient, sauber und zuverlässig.",
      stats: {
        fastLabel: "Schnell",
        fastValue: "Termintreu",
        safeLabel: "Sicher",
        safeValue: "Schonender Transport",
        cleanLabel: "Sauber",
        cleanValue: "Ordentliche Übergabe",
        clearLabel: "Transparent",
        clearValue: "Klare Absprachen",
      },
    },
    services: {
      eyebrow: "Dienstleistungen",
      title: "Alles aus einer Hand – schnell, sauber, zuverlässig",
      description:
        "Von Umzug bis Verkehrszeichen: Wir planen, organisieren und packen an – zuverlässig in Berlin und Umgebung.",
      cards: [
        {
          title: "Umzüge",
          description:
            "Stressfrei umziehen: sicherer Transport, zügige Abläufe und professionelle Montage – für einen reibungslosen Start im neuen Zuhause.",
        },
        {
          title: "Entrümpelungen",
          description:
            "Mehr Platz, weniger Chaos: Wohnung, Keller oder Garage schnell und sauber räumen – zuverlässig bis zur besenreinen Übergabe.",
        },
        {
          title: "Möbellieferung",
          description:
            "Schnell und pünktlich: Wir liefern Möbel sicher bis in die Wohnung – inklusive Trage-Service und sorgfältigem Umgang.",
        },
        {
          title: "Möbelmontage",
          description:
            "Aufbau ohne Kopfzerbrechen: Unser Team montiert Ihre Möbel fachgerecht – damit Sie sofort einziehen und nutzen können.",
        },
        {
          title: "Verkehrszeichenaufstellung",
          description:
            "Für Baustelle oder Veranstaltung: Fachgerechte Absicherung, damit alles sicher läuft – inklusive Abstimmung und Aufbau.",
        },
      ],
      visuals: {
        movingTruckAlt: "Beladener Umzugswagen mit Umzugskartons",
        trafficSignsAlt:
          "Verkehrszeichenaufstellung: Absicherung mit Schildern und Pylonen",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen",
      description: "Kurz beantwortet – damit Sie schnell planen können.",
      items: [
        {
          q: "Wie schnell bekomme ich ein Angebot?",
          a: "In der Regel sehr kurzfristig – am besten rufen Sie direkt an. Je genauer die Infos, desto schneller das Angebot.",
        },
        {
          q: "Übernehmt ihr auch Montage und Verpackung?",
          a: "Ja. Wir unterstützen bei Möbelmontage und können je nach Bedarf auch beim sicheren Verpacken helfen – bitte im Kontakt kurz erwähnen.",
        },
        {
          q: "Macht ihr auch kurzfristige Termine?",
          a: "Wenn Kapazitäten frei sind, ja. Rufen Sie am besten direkt an, damit wir die Möglichkeiten besprechen können.",
        },
        {
          q: "Arbeitet ihr nur in Berlin?",
          a: "Schwerpunkt ist Berlin und Umgebung. Weitere Strecken sind nach Absprache möglich.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Einfach anrufen",
      description: "Am schnellsten geht’s telefonisch – wir klären alles direkt persönlich.",
      directContact: "Direktkontakt",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      management: {
        ceo: "Geschäftsführer",
        deputy: "Stellvertretender Geschäftsführer",
        deputyShort: "Stellv. Geschäftsführer",
      },
    },
    footer: {
      contact: "Kontakt",
      legal: "Rechtliches",
      privacy: "Datenschutzerklärung",
      imprint: "Impressum",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
    },
    language: {
      label: "Language",
      de: "Deutsch",
      ru: "Русский",
      en: "English",
    },
    cta: {
      callNow: "Call now",
    },
    hero: {
      bgAlt: "MOVEBA van",
      pill: "Berlin · Relocation · Clear-outs · Assembly",
      title: "Move without stress — with a team that thinks ahead.",
      description:
        "MOVEBA supports you with moves, clear-outs, furniture delivery and assembly — efficient, clean and reliable.",
      stats: {
        fastLabel: "Fast",
        fastValue: "On time",
        safeLabel: "Safe",
        safeValue: "Careful transport",
        cleanLabel: "Clean",
        cleanValue: "Tidy handover",
        clearLabel: "Transparent",
        clearValue: "Clear agreements",
      },
    },
    services: {
      eyebrow: "Services",
      title: "Everything from one source — fast, clean, reliable",
      description:
        "From moving to traffic signs: we plan, organize and get it done — reliably in Berlin and the surrounding area.",
      cards: [
        {
          title: "Relocation",
          description:
            "Move without stress: safe transport, efficient process and professional assembly — for a smooth start in your new home.",
        },
        {
          title: "Clear-outs",
          description:
            "More space, less clutter: clear apartments, basements or garages quickly and cleanly — reliably up to broom-clean handover.",
        },
        {
          title: "Furniture delivery",
          description:
            "Fast and punctual: we deliver furniture safely into your home — including carrying service and careful handling.",
        },
        {
          title: "Furniture assembly",
          description:
            "No headache: our team assembles your furniture professionally — so you can move in and use it right away.",
        },
        {
          title: "Traffic sign setup",
          description:
            "For construction sites or events: professional securing so everything runs safely — including coordination and setup.",
        },
      ],
      visuals: {
        movingTruckAlt: "Loaded moving truck with moving boxes",
        trafficSignsAlt: "Traffic sign setup with cones and signage",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description: "Quick answers — so you can plan faster.",
      items: [
        {
          q: "How quickly can I get a quote?",
          a: "Usually very quickly — best to call us directly. The more precise the details, the faster we can quote.",
        },
        {
          q: "Do you also do assembly and packing?",
          a: "Yes. We can help with furniture assembly and, if needed, safe packing — just mention it briefly when you contact us.",
        },
        {
          q: "Do you offer short-notice appointments?",
          a: "If we have capacity, yes. Please call us so we can discuss what’s possible.",
        },
        {
          q: "Do you only work in Berlin?",
          a: "Our focus is Berlin and the surrounding area. Longer distances are possible by arrangement.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Just call",
      description: "Calling is fastest — we clarify everything directly.",
      directContact: "Direct contact",
      addressLabel: "Address",
      phoneLabel: "Phone",
      management: {
        ceo: "Managing Director",
        deputy: "Deputy Managing Director",
        deputyShort: "Deputy MD",
      },
    },
    footer: {
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy policy",
      imprint: "Imprint",
    },
  },
  ru: {
    skipToContent: "Перейти к содержанию",
    nav: {
      services: "Услуги",
      faq: "Вопросы",
      contact: "Контакты",
    },
    language: {
      label: "Язык",
      de: "Deutsch",
      ru: "Русский",
      en: "English",
    },
    cta: {
      callNow: "Позвонить",
    },
    hero: {
      bgAlt: "Фургон MOVEBA",
      pill: "Берлин · Переезды · Вывоз старой мебели · Сборка",
      title: "Переезд без стресса — с командой, которая думает наперёд.",
      description:
        "MOVEBA помогает с переездами, вывозом старой мебели, доставкой и сборкой мебели — быстро, аккуратно и надёжно.",
      stats: {
        fastLabel: "Быстро",
        fastValue: "Точно в срок",
        safeLabel: "Надёжно",
        safeValue: "Бережная перевозка",
        cleanLabel: "Аккуратно",
        cleanValue: "Чистая сдача",
        clearLabel: "Прозрачно",
        clearValue: "Чёткие договорённости",
      },
    },
    services: {
      eyebrow: "Услуги",
      title: "Всё под ключ — быстро, аккуратно, надёжно",
      description:
        "От переезда до дорожных знаков: планируем, организуем и делаем — по Берлину и окрестностям.",
      cards: [
        {
          title: "Переезды",
          description:
            "Переезд без стресса: безопасная перевозка, быстрый процесс и профессиональная сборка — для лёгкого старта в новом доме.",
        },
        {
          title: "Вывоз старой мебели",
          description:
            "Вывоз старой мебели и крупногабаритных вещей: быстро, аккуратно и с выносом из квартиры, подвала или гаража — по договорённости.",
        },
        {
          title: "Доставка мебели",
          description:
            "Быстро и вовремя: доставим мебель безопасно прямо в квартиру — с подъёмом и аккуратным обращением.",
        },
        {
          title: "Сборка мебели",
          description:
            "Без лишних забот: профессионально соберём мебель — чтобы вы могли сразу пользоваться.",
        },
        {
          title: "Установка дорожных знаков",
          description:
            "Для стройки или мероприятия: профессиональная организация и ограждение — включая согласование и монтаж.",
        },
      ],
      visuals: {
        movingTruckAlt: "Загруженный грузовик с коробками для переезда",
        trafficSignsAlt: "Установка дорожных знаков с конусами и табличками",
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы",
      description: "Коротко и по делу — чтобы было проще планировать.",
      items: [
        {
          q: "Как быстро вы сможете назвать цену?",
          a: "Обычно очень быстро — лучше всего сразу позвонить. Чем точнее данные, тем быстрее расчёт.",
        },
        {
          q: "Вы делаете сборку и упаковку?",
          a: "Да. Поможем со сборкой мебели и при необходимости с безопасной упаковкой — просто сообщите при обращении.",
        },
        {
          q: "Есть ли срочные даты?",
          a: "Если есть свободные ресурсы — да. Позвоните, и обсудим возможные варианты.",
        },
        {
          q: "Вы работаете только в Берлине?",
          a: "Основной регион — Берлин и окрестности. Дальние расстояния возможны по договорённости.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Проще всего позвонить",
      description: "Быстрее всего по телефону — обсудим всё сразу.",
      directContact: "Прямой контакт",
      addressLabel: "Адрес",
      phoneLabel: "Телефон",
      management: {
        ceo: "Генеральный директор",
        deputy: "Заместитель директора",
        deputyShort: "Зам. директора",
      },
    },
    footer: {
      contact: "Контакты",
      legal: "Правовая информация",
      privacy: "Политика конфиденциальности",
      imprint: "Реквизиты",
    },
  },
} as const;
