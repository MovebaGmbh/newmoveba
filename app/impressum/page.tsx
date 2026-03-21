import type { Metadata } from "next";

import Container from "@/components/Container";
import { SITE } from "@/components/siteConfig";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${SITE.legalName}.`,
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-10">
            <section aria-labelledby="angaben">
              <h2 id="angaben" className="text-lg font-semibold text-zinc-900">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                {SITE.legalName}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </p>
            </section>

            <section aria-labelledby="vertretung">
              <h2
                id="vertretung"
                className="text-lg font-semibold text-zinc-900"
              >
                Vertretungsberechtigt
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Geschäftsführer: {SITE.management.ceo}
                <br />
                Stellvertretender Geschäftsführer: {SITE.management.deputyCeo}
              </p>
            </section>

            <section aria-labelledby="kontakt">
              <h2 id="kontakt" className="text-lg font-semibold text-zinc-900">
                Kontakt
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                E-Mail:{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <br />
                Telefon:{" "}
                {SITE.phones.map((p, idx) => (
                  <span key={p.value}>
                    <a className="underline" href={`tel:${p.value}`}>
                      {p.display} ({p.role === "ceo" ? "Geschäftsführer" : "Stellv. Geschäftsführer"})
                    </a>
                    {idx === SITE.phones.length - 1 ? "" : " · "}
                  </span>
                ))}
              </p>
            </section>


          </div>
        </div>
      </Container>
    </main>
  );
}
