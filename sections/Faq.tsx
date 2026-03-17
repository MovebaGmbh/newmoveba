import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { I18N, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function Faq({ lang }: Props) {
  const t = I18N[lang];
  const faqs = t.faq.items;

  return (
    <section id="faq" className="scroll-mt-24">
      <SectionHeading
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        description={t.faq.description}
      />

      <Container className="mt-10">
        <div className="grid gap-4">
          {faqs.map((f, idx) => (
            <Reveal key={f.q} delayMs={idx * 60}>
              <details className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-zinc-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
