import type { MetadataRoute } from 'next'
import { PSEO_CITIES } from "@/lib/pseo/cities";
import { PSEO_SEED_COMBOS } from "@/lib/pseo/content";
import { PSEO_SERVICES } from "@/lib/pseo/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xenoscapers.com'
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified, priority: 0.3 },
    { url: `${baseUrl}/get-quote/los-angeles`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/get-quote/orange-county`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/los-angeles`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/orange-county`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/hardscaping`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/landscaping`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/landscaping/xeriscaping`, lastModified, priority: 0.6 },
  ];

  const pseoHubPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/service-areas`, lastModified, priority: 0.7 },
    ...PSEO_SERVICES.map((service) => ({
      url: `${baseUrl}/service-areas/services/${service.slug}`,
      lastModified,
      priority: 0.6,
    })),
    ...PSEO_CITIES.map((city) => ({
      url: `${baseUrl}/service-areas/cities/${city.slug}`,
      lastModified,
      priority: 0.6,
    })),
  ];

  const pseoMoneyPages: MetadataRoute.Sitemap = PSEO_SEED_COMBOS.map((combo) => ({
    url: `${baseUrl}/service-areas/${combo.serviceSlug}/${combo.citySlug}`,
    lastModified,
    priority: 0.7,
  }));

  return [...staticPages, ...pseoHubPages, ...pseoMoneyPages];
}


