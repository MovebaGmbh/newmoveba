import Image from "next/image";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-900">
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
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-6">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                  <Image
                    src="/images/service-visual-2.jpeg"
                    alt={t.services.visuals.movingTruckAlt}
                    width={900}
                    height={700}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delayMs={100}>
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                  <Image
                    src="/images/service-visual-traffic-signs.svg"
                    alt={t.services.visuals.trafficSignsAlt}
                    width={900}
                    height={700}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
