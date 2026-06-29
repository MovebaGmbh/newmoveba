import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getServiceHref, SERVICE_PAGES } from "@/lib/services";
import { I18N, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

const serviceIcons = [
  "/images/icon-umzug.svg",
  "/images/icon-entruempelung.svg",
  "/images/icon-lieferung.svg",
  "/images/icon-montage.svg",
  "/images/icon-verkehr.svg",
] as const;

export default function Services({ lang }: Props) {
  const t = I18N[lang];
  const services = t.services.cards.map((card, idx) => ({
    ...card,
    icon: serviceIcons[idx] ?? serviceIcons[0],
    href: getServiceHref(SERVICE_PAGES[idx]?.slug ?? SERVICE_PAGES[0].slug),
  }));

  return (
    <section id="services" className="scroll-mt-24">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
      />

      <Container className="mt-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {services.map((service, idx) => (
              <Reveal
                key={service.title}
                delayMs={idx * 60}
                className={
                  service.title === services[4]?.title
                    ? "sm:col-span-2"
                    : undefined
                }
              >
                <Link
                  href={service.href}
                  className="group flex h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_12px_40px_rgba(24,24,27,0.06)] transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_18px_50px_rgba(24,24,27,0.1)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/90 ring-1 ring-zinc-900/10 transition-transform duration-300 group-hover:scale-[1.03]">
                      <Image
                        src={service.icon}
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-14 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-zinc-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {service.description}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-900">
                        Mehr erfahren
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-6">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src="/images/moebellieferung-stock-pexels-7464406.jpg"
                    alt={t.services.visuals.deliveryAlt}
                    width={900}
                    height={700}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={70}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delayMs={100}>
                <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src="/images/service-visual-traffic-signs.svg"
                    alt={t.services.visuals.trafficSignsAlt}
                    width={900}
                    height={700}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delayMs={160}>
                <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm">
                  <p className="text-sm font-medium text-white/70">Schneller Einstieg</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    Leistungen im Detail ansehen
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Jede Dienstleistung hat eine eigene Seite mit Ablauf, Vorteilen und häufigen Fragen.
                  </p>
                  <Button href="/leistungen" variant="secondary" className="mt-5 bg-white text-zinc-950 hover:bg-zinc-100">
                    Alle Leistungen
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
