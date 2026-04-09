import { MetadataRoute } from "next";
import { PACKAGES_DATA, DEPARTURE_CITIES } from "@/lib/constants";

const BASE_URL = "https://www.alhidaayahplatinumtravels.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/umrah-packages`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/hajj-packages`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/3-star-umrah-packages`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/5-star-umrah-packages`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/ramadan-umrah-packages`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/group-umrah-packages`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/hotels`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const packagePages = PACKAGES_DATA.map((pkg) => ({
    url: `${BASE_URL}/packages/${pkg.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityPages = DEPARTURE_CITIES.map((city) => ({
    url: `${BASE_URL}/umrah-packages-from-${city.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages.map(page => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...packagePages.map(page => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...cityPages.map(page => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ];
}
