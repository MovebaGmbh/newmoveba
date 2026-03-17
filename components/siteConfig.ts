export const SITE = {
  name: "MOVEBA",
  legalName: "MOVEBA GmbH",
  url: "https://www.moveba.de",
  description:
    "Umzüge, Entrümpelungen, Möbellieferung, Möbelmontage und Verkehrszeichenaufstellung – zuverlässig in Berlin und Umgebung.",
  email: "info@moveba-gmbh.de",
  phones: [
    { display: "0176 41607282", value: "017641607282", role: "ceo" },
    { display: "0170 8253438", value: "01708253438", role: "deputy" },
  ],
  address: {
    street: "Merseburger Straße 24",
    postalCode: "12689",
    city: "Berlin",
  },
  management: {
    ceo: "Yuriy Shishkin",
    deputyCeo: "Viktor Maier",
  },
} as const;
