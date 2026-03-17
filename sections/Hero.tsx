import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { SITE } from "@/components/siteConfig";
import { I18N, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function Hero({ lang }: Props) {
  const t = I18N[lang];

  return (
    <section aria-label="Einführung" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/moveba_van_blurred_stronger_1920x1080.png"
          alt={t.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-white/70" />
      </div>

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-4xl rounded-3xl border border-zinc-200/70 bg-white/55 p-6 backdrop-blur sm:p-8">
            <Reveal>
              <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
                {t.hero.pill}
              </p>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                {t.hero.title}
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-800 sm:text-lg">
                {t.hero.description}
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={`tel:${SITE.phones[0].value}`} size="lg">
                  {t.cta.callNow}
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-6 rounded-2xl border border-zinc-200 bg-white/70 p-6 backdrop-blur sm:grid-cols-4">
                <div>
                  <dt className="text-xs font-medium text-zinc-500">
                    {t.hero.stats.fastLabel}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-zinc-900">
                    {t.hero.stats.fastValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-zinc-500">
                    {t.hero.stats.safeLabel}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-zinc-900">
                    {t.hero.stats.safeValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-zinc-500">
                    {t.hero.stats.cleanLabel}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-zinc-900">
                    {t.hero.stats.cleanValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-zinc-500">
                    {t.hero.stats.clearLabel}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-zinc-900">
                    {t.hero.stats.clearValue}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
