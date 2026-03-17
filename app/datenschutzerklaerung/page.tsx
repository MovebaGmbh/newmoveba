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
            Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. In dieser
            Datenschutzerklärung informieren wir Sie darüber, welche Daten beim
            Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden
            und zu welchen Zwecken.
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
                Unsere Website wird bei einem Hosting-Dienstleister betrieben. Beim
                Aufruf der Website werden aus technischen Gründen Daten verarbeitet,
                die Ihr Browser an den Server übermittelt (sog.&nbsp;Server-Logfiles).
                Dazu können insbesondere gehören: IP-Adresse, Datum und Uhrzeit der
                Anfrage, aufgerufene Seite/Datei, Referrer-URL, Browsertyp/-version,
                Betriebssystem sowie der Zugriffsstatus.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Zweck der Verarbeitung ist die Auslieferung der Website,
                Gewährleistung der IT-Sicherheit (z.&nbsp;B. Abwehr von Angriffen)
                sowie die Fehleranalyse. Rechtsgrundlage ist Art.&nbsp;6
                Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an einem
                sicheren und funktionsfähigen Webauftritt).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Empfänger der Daten kann unser Hosting-Dienstleister als
                Auftragsverarbeiter sein. Eine Verarbeitung außerhalb der EU/des
                EWR kann je nach Hosting-Anbieter nicht ausgeschlossen werden. In
                diesem Fall stellen wir sicher, dass geeignete Garantien nach
                Art.&nbsp;44&nbsp;ff. DSGVO bestehen.
              </p>
            </section>

            <section aria-labelledby="kontakt">
              <h2 id="kontakt" className="text-lg font-semibold text-zinc-900">
                3. Kontaktaufnahme
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wenn Sie uns kontaktieren (z.&nbsp;B. per E-Mail oder telefonisch),
                verarbeiten wir die Daten, die Sie uns im Rahmen der Anfrage
                mitteilen (z.&nbsp;B. Name, Kontaktdaten und Inhalt der Nachricht),
                um Ihre Anfrage zu bearbeiten und mit Ihnen zu kommunizieren.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Rechtsgrundlage ist in der Regel Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b
                DSGVO (vorvertragliche Maßnahmen/Vertragserfüllung) bzw.
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an
                der Beantwortung von Anfragen).
              </p>

              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Speicherdauer: Wir löschen Anfragen grundsätzlich, sobald sie
                abschließend bearbeitet sind, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="text-lg font-semibold text-zinc-900">
                4. Cookies &amp; Tracking
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wir setzen keine Cookies zu Analyse- oder Marketingzwecken ein und
                verwenden keine Tracking- oder Profiling-Tools.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Technisch notwendige Verarbeitungen (z.&nbsp;B. zur Darstellung der
                Website) erfolgen ohne Cookies oder nur mit solchen, die für den
                Betrieb zwingend erforderlich wären.
              </p>
            </section>

            <section aria-labelledby="sicherheit">
              <h2 id="sicherheit" className="text-lg font-semibold text-zinc-900">
                5. Sicherheit
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Wir treffen angemessene technische und organisatorische Maßnahmen,
                um Ihre Daten zu schützen. Die Übertragung von Inhalten erfolgt in
                der Regel verschlüsselt (TLS/HTTPS).
              </p>
            </section>

            <section aria-labelledby="rechte">
              <h2 id="rechte" className="text-lg font-semibold text-zinc-900">
                6. Ihre Rechte
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Sie haben das Recht auf Auskunft über die Verarbeitung Ihrer
                personenbezogenen Daten sowie auf Berichtigung, Löschung,
                Einschränkung der Verarbeitung und Datenübertragbarkeit. Außerdem
                können Sie sich bei einer Aufsichtsbehörde beschweren.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Soweit wir Daten auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
                DSGVO verarbeiten, können Sie aus Gründen, die sich aus Ihrer
                besonderen Situation ergeben, Widerspruch gegen die Verarbeitung
                einlegen.
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
