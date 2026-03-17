import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/components/siteConfig";
import { I18N, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function Contact({ lang }: Props) {
  const t = I18N[lang];

  return (
    <section id="kontakt" className="scroll-mt-24">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <Container className="mt-10">
        <Reveal>
          <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-zinc-900">{t.contact.directContact}</p>
            <p className="mt-2 text-sm text-zinc-600">
              {t.contact.management.ceo}: {SITE.management.ceo}
              <br />
              {t.contact.management.deputy}: {SITE.management.deputyCeo}
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <div>
                <p className="text-xs font-medium text-zinc-500">{t.contact.addressLabel}</p>
                <p className="mt-1 text-zinc-700">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500">{t.contact.phoneLabel}</p>
                <div className="mt-1 flex flex-col gap-1">
                  {SITE.phones.map((p) => (
                    <a
                      key={p.value}
                      className="text-zinc-700 hover:text-zinc-900"
                      href={`tel:${p.value}`}
                    >
                      {p.display} – {p.role === "ceo" ? t.contact.management.ceo : t.contact.management.deputyShort}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Button href={`tel:${SITE.phones[0].value}`} variant="primary">
                {t.cta.callNow}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
