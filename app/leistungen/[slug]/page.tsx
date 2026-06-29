import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { SITE } from "@/components/siteConfig";
import { getServiceBySlug, getServiceHref, SERVICE_PAGES } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: getServiceHref(service.slug) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}${getServiceHref(service.slug)}`,
      type: "article",
      images: [
        {
          url: `${SITE.url}${service.heroImage}`,
          width: 1400,
          height: 1000,
          alt: service.heroAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICE_PAGES.filter((entry) => entry.slug !== service.slug).slice(0, 3);

  return (
    <main id="main" className="pb-20 pt-10 sm:pb-28 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: SITE.legalName,
              url: SITE.url,
              telephone: SITE.phones.map((item) => item.value),
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                postalCode: SITE.address.postalCode,
                addressLocality: SITE.address.city,
                addressCountry: "DE",
              },
            },
            areaServed: "Berlin und Umgebung",
          }),
        }}
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                MOVEBA Leistung
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                {service.intro}
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${SITE.phones[0].value}`}>Jetzt Angebot anfordern</Button>
                <Button href="/leistungen" variant="secondary">
                  Weitere Leistungen
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delayMs={120}>
              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-[0_20px_60px_rgba(24,24,27,0.12)]">
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  width={1400}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={76}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-zinc-950/15 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <div className="mt-16 space-y-20">
        <section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  Beschreibung
                </h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-600">
                  {service.description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, idx) => (
                    <Reveal key={benefit} delayMs={idx * 40}>
                      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-zinc-900">{benefit}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm">
                  <p className="text-sm font-medium text-white/70">Ihr Vorteil</p>
                  <p className="mt-3 text-lg font-semibold tracking-tight">{service.ctaTitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {service.ctaText}
                  </p>
                  <Button href={`tel:${SITE.phones[0].value}`} variant="secondary" className="mt-6 bg-white text-zinc-950 hover:bg-zinc-100">
                    Jetzt Angebot anfordern
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Ablauf
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {service.process.map((step, idx) => (
                <Reveal key={step.title} delayMs={idx * 60}>
                  <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                      Schritt {idx + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-zinc-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-8 text-white shadow-[0_20px_60px_rgba(24,24,27,0.14)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Jetzt Angebot anfordern
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
                    Schicken Sie uns Ihre Anfrage direkt über das Formular oder rufen Sie uns an. Wir melden uns schnellstmöglich zurück.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                  <Button href={`tel:${SITE.phones[0].value}`} variant="secondary" className="bg-white text-zinc-950 hover:bg-zinc-100">
                    Jetzt anrufen
                  </Button>
                  <Button href="/#kontakt" variant="secondary" className="border border-white/20 bg-white/10 text-white hover:bg-white/15">
                    Zum Kontaktformular
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Weitere Leistungen
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedServices.map((entry) => (
                <Link
                  key={entry.slug}
                  href={getServiceHref(entry.slug)}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}