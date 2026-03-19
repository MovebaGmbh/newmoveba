import type { Metadata } from "next";

import Container from "@/components/Container";
import { SITE } from "@/components/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${SITE.legalName}.`,
  alternates: { canonical: "/datenschutzerklaerung" },
};

export default function DatenschutzerklaerungPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-sm text-zinc-600">Stand: März 2026</p>

          <p className="mt-6 text-sm leading-relaxed text-zinc-700">
            Diese Website ist eine statische Informationsseite. Wir verwenden kein
            Tracking und keine Marketing-Cookies. Personenbezogene Daten fallen im
            Wesentlichen nur durch das Hosting (Server-Logfiles) sowie bei einer
            Kontaktaufnahme an.
          </p>

          <div className="mt-10 space-y-10">
            <section aria-labelledby="verantwortlicher">
              <h2
                id="verantwortlicher"
                className="text-lg font-semibold text-zinc-900"
              >
                1. Verantwortlicher
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                {SITE.legalName}
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
                <br />
                E-Mail:{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </section>

            <section aria-labelledby="hosting">
              <h2 id="hosting" className="text-lg font-semibold text-zinc-900">
                2. Hosting
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Die Website wird über GitHub bereitgestellt (z.&nbsp;B. GitHub
                Pages). Beim Aufruf verarbeitet GitHub aus technischen Gründen
                Verbindungsdaten (Server-Logfiles), insbesondere IP-Adresse, Datum
                und Uhrzeit, aufgerufene Seite sowie Browser-/Systeminformationen.
                Zweck ist die Auslieferung der Website sowie IT-Sicherheit.
                Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Dabei kann eine Verarbeitung in Drittländern (z.&nbsp;B. USA) nicht
                ausgeschlossen werden. Weitere Informationen finden Sie in der
                <a
                  className="underline"
                  href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noreferrer"
                >
                  Datenschutzerklärung von GitHub
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="kontakt">
              <h2 id="kontakt" className="text-lg font-semibold text-zinc-900">
                3. Kontaktaufnahme
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten
                wir die von Ihnen übermittelten Daten (z.&nbsp;B. Name,
                Kontaktdaten, Inhalt), um Ihre Anfrage zu beantworten.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Anbahnung
                oder Durchführung eines Vertrags) und/oder Art.&nbsp;6 Abs.&nbsp;1
                lit.&nbsp;f DSGVO (Beantwortung von Anfragen).
              </p>
            </section>

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="text-lg font-semibold text-zinc-900">
                4. Cookies &amp; Tracking
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wir setzen keine Analyse-/Marketing-Cookies ein und nutzen keine
                Tracking-Tools.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Optional speichern wir Ihre Sprachwahl lokal in einem funktionalen
                Cookie (<span className="font-medium">lang</span>, Speicherdauer:
                12 Monate), damit die Auswahl beim nächsten Besuch erhalten bleibt.
              </p>
            </section>

            <section aria-labelledby="sicherheit">
              <h2 id="sicherheit" className="text-lg font-semibold text-zinc-900">
                5. Sicherheit
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Die Übertragung erfolgt in der Regel verschlüsselt (HTTPS).
              </p>
            </section>

            <section aria-labelledby="rechte">
              <h2 id="rechte" className="text-lg font-semibold text-zinc-900">
                6. Ihre Rechte
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Sie haben insbesondere die Rechte auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                sowie Widerspruch. Außerdem besteht ein Beschwerderecht bei einer
                Datenschutz-Aufsichtsbehörde.
              </p>
            </section>

            <section aria-labelledby="aenderungen">
              <h2 id="aenderungen" className="text-lg font-semibold text-zinc-900">
                7. Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wir passen diese Datenschutzerklärung an, wenn sich die
                Datenverarbeitung oder rechtliche Anforderungen ändern.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
