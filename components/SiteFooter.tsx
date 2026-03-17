import Link from "next/link";

import Container from "@/components/Container";
import { SITE } from "@/components/siteConfig";
import { I18N, type Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function SiteFooter({ lang }: Props) {
  const t = I18N[lang];

  return (
    <footer className="border-t border-zinc-100 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-tight text-zinc-900">
              {SITE.name}
            </p>
            <p className="text-sm text-zinc-600">{SITE.description}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-900">{t.footer.contact}</p>
            <div className="space-y-1 text-sm text-zinc-600">
              <p>
                {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
              </p>
              <div className="flex flex-col gap-1">
                {SITE.phones.map((p) => (
                  <a
                    key={p.value}
                    className="hover:text-zinc-900"
                    href={`tel:${p.value}`}
                  >
                    {p.display} – {p.role === "ceo" ? t.contact.management.ceo : t.contact.management.deputyShort}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-zinc-900">{t.footer.legal}</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/datenschutzerklaerung"
                className="text-zinc-600 hover:text-zinc-900"
              >
                {t.footer.privacy}
              </Link>
              <Link
                href="/impressum"
                className="text-zinc-600 hover:text-zinc-900"
              >
                {t.footer.imprint}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-100 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}.
          </p>
          <p>
            {t.contact.management.ceo}: {SITE.management.ceo} · {t.contact.management.deputyShort}: {SITE.management.deputyCeo}
          </p>
        </div>
      </Container>
    </footer>
  );
}
