import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE } from "@/components/siteConfig";
import { getLangFromCookies, I18N } from "@/lib/i18n";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = getLangFromCookies(cookieStore);
  const t = I18N[lang];

  return (
    <html lang={lang} className="h-full">
      <body
        className={`${inter.className} min-h-screen bg-white text-zinc-900 antialiased`}
      >
        {/* JSON-LD: minimal, ohne erfundene Firmendaten (Adresse/Telefon kommen aus SITE). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              email: SITE.email,
              telephone: SITE.phones.map((p) => p.value),
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                postalCode: SITE.address.postalCode,
                addressLocality: SITE.address.city,
                addressCountry: "DE",
              },
            }),
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow"
        >
          {t.skipToContent}
        </a>

        <SiteHeader lang={lang} />
        {children}
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
