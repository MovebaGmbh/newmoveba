# MOVEBA – Website (Next.js + Tailwind)

Modernisierte, performance- und SEO-fokussierte Neuimplementation der bestehenden MOVEBA Website.
Die grundlegende Struktur bleibt (One‑Pager mit „Dienstleistungen“ + „Kontakt“), ergänzt um zusätzliche Bereiche (FAQ) sowie rechtliche Seiten.

## Development

```bash
npm run dev
```

## Build / Checks

```bash
npm run lint
npm run build
```

## Architektur (kurz)

- Routing (App Router):
	- `app/page.tsx` – One‑Pager
	- `app/datenschutzerklaerung/page.tsx`
	- `app/impressum/page.tsx`
	- `app/sitemap.ts` + `app/robots.ts` – SEO Basics

- UI/Sections:
	- `components/` – wiederverwendbare UI-Bausteine (Header/Footer, Button, Container, Reveal)
	- `sections/` – Landingpage-Sections (Hero, Services, FAQ, Contact)
	- `styles/globals.css` – globale Styles (Tailwind + minimale Defaults)

## Wichtige Hinweise
- Bilder: Bestehende Assets liegen unter `public/images/`.

