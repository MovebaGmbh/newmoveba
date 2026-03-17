import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Sehr professionell, pünktlich und vorsichtig mit den Möbeln. Der Umzug lief schneller als gedacht.",
    name: "Kundin aus Berlin",
  },
  {
    quote:
      "Entrümpelung inklusive Abtransport – sauber erledigt und super Kommunikation. Klare Empfehlung.",
    name: "Kunde aus Marzahn",
  },
  {
    quote:
      "Möbelmontage top: freundlich, schnell, ordentlich. Genau so wünscht man sich das.",
    name: "Kundin aus Lichtenberg",
  },
] as const;

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Vertrauen"
        title="Ergebnisse, die man merkt"
        description="Unsere Kunden bestätigen: Mit uns läuft es einfach besser. Hier ein paar Stimmen aus Berlin."
      />

      <Container className="mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delayMs={idx * 80}>
              <figure className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-zinc-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-medium text-zinc-500">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
