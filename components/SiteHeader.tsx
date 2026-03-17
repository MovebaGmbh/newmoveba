"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { SITE } from "@/components/siteConfig";
import { I18N, type Lang, normalizeLang } from "@/lib/i18n";

type Props = {
  lang: Lang;
};

export default function SiteHeader({ lang: initialLang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(initialLang);
  const pathname = usePathname();
  const router = useRouter();

  const t = I18N[lang];

  const nav = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#kontakt" },
  ];

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    // Keep local state in sync if cookie differs.
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    const cookieLang = normalizeLang(match?.[1]);
    if (cookieLang !== lang) setLang(cookieLang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onChangeLang = (next: Lang) => {
    setLang(next);
    document.cookie = `lang=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo subtitle={t.nav.services} />
        </div>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={resolveHref(item.href)}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
          <label className="sr-only" htmlFor="lang">
            {t.language.label}
          </label>
          <select
            id="lang"
            value={lang}
            onChange={(e) => onChangeLang(e.target.value as Lang)}
            className="h-10 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 hover:bg-zinc-50"
            aria-label={t.language.label}
          >
            <option value="de">{t.language.de}</option>
            <option value="ru">{t.language.ru}</option>
            <option value="en">{t.language.en}</option>
          </select>
          <Button
            href={`tel:${SITE.phones[0].value}`}
            variant="primary"
            size="md"
          >
            {t.cta.callNow}
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-50 md:hidden"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{isOpen ? "×" : "≡"}</span>
        </button>
      </Container>

      {isOpen ? (
        <div className="md:hidden">
          <div className="border-t border-zinc-100 bg-white">
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="px-3 pt-2">
                  <label
                    className="text-xs font-medium text-zinc-500"
                    htmlFor="lang-mobile"
                  >
                    {t.language.label}
                  </label>
                  <select
                    id="lang-mobile"
                    value={lang}
                    onChange={(e) => onChangeLang(e.target.value as Lang)}
                    className="mt-1 h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700"
                  >
                    <option value="de">{t.language.de}</option>
                    <option value="ru">{t.language.ru}</option>
                    <option value="en">{t.language.en}</option>
                  </select>
                </div>

                <Button
                  href={`tel:${SITE.phones[0].value}`}
                  onClick={() => setIsOpen(false)}
                >
                  {t.cta.callNow}
                </Button>
                <div className="pt-2">
                  <Link
                    href="/datenschutzerklaerung"
                    className="text-sm text-zinc-500 hover:text-zinc-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.footer.privacy}
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
