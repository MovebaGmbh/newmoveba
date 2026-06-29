import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/components/siteConfig";
import { getServiceHref, SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle MOVEBA Leistungen im Überblick: Umzüge, Entrümpelungen, Möbellieferung, Möbelmontage und Verkehrszeichenaufstellung.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <main id="main" className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                MOVEBA GmbH · Berlin
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Leistungen mit Struktur, Tempo und sauberem Ergebnis
              </h1>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Von Umzügen bis zur Verkehrszeichenaufstellung: Hier finden Sie alle Leistungen mit direktem Weg zur passenden Detailseite.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${SITE.phones[0].value}`}>Jetzt anrufen</Button>
                <Button href="/" variant="secondary">
                  Zur Startseite
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delayMs={120}>
              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-[0_20px_60px_rgba(24,24,27,0.12)]">
                <Image
                  src="/images/hero-bg-1280.jpg"
                  alt="MOVEBA Transporter im Einsatz"
                  width={1200}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={72}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-zinc-950/10 to-transparent" />
                <div className="absolute left-5 top-5 max-w-sm rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                    Saubere Abwicklung
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Kurze Wege, klare Abläufe und direktes Feedback für jede Anfrage.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="mt-16 space-y-20">
        <section>
          <SectionHeading
            eyebrow="Übersicht"
            title="Alle Leistungen auf einen Blick"
            description="Wählen Sie die gewünschte Dienstleistung und springen Sie direkt zur passenden Detailseite."
          />

          <Container className="mt-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {SERVICE_PAGES.map((service, idx) => (
                <Reveal key={service.slug} delayMs={idx * 60}>
                  <Link
                    href={getServiceHref(service.slug)}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_12px_36px_rgba(24,24,27,0.06)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_18px_48px_rgba(24,24,27,0.1)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                      <Image
                        src={service.heroImage}
                        alt={service.heroAlt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-zinc-950/5 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {service.intro}
                      </p>
                      <p className="mt-auto pt-6 text-sm font-medium text-zinc-900">
                        Zur Detailseite →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}