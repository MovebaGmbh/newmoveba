import type { MetadataRoute } from "next";

import { SITE } from "@/components/siteConfig";
import { SERVICE_PAGES, getServiceHref } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/datenschutzerklaerung`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE.url}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE.url}/leistungen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...SERVICE_PAGES.map((service) => ({
      url: `${SITE.url}${getServiceHref(service.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
