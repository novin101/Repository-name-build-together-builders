import type { City } from "@/lib/pseo/cities";
import type { PseoService } from "@/lib/pseo/services";

type FaqItem = { question: string; answer: string };

type BreadcrumbItem = { label: string; href: string };

type PseoJsonLdProps = {
  service: PseoService;
  city: City;
  faqItems: FaqItem[];
  breadcrumbs: BreadcrumbItem[];
  canonicalUrl: string;
};

export function PseoJsonLd({ service, city, faqItems, breadcrumbs, canonicalUrl }: PseoJsonLdProps) {
  const baseUrl = "https://xenoscapers.com";

  const localBusiness = {
    "@type": "LocalBusiness",
    name: "Xenoscapers",
    url: baseUrl,
    telephone: "+1-310-564-6057",
    email: "hello@xenoscapers.com",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    priceRange: "$$",
  };

  const serviceSchema = {
    "@type": "Service",
    name: `${service.name} in ${city.name}, CA`,
    provider: localBusiness,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, California by Xenoscapers.`,
  };

  const faqSchema =
    faqItems.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  };

  const graph = [localBusiness, serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key={canonicalUrl}
    />
  );
}
