import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getNearbyCities } from "@/lib/pseo/cities";
import { getContentOverride, PSEO_SEED_COMBOS } from "@/lib/pseo/content";
import { buildPseoMetadata } from "@/lib/pseo/seo";
import { getServiceBySlug } from "@/lib/pseo/services";
import { Contact14 } from "@/components/contact14";
import { PseoHero } from "@/components/pseo/PseoHero";
import { PseoOverview } from "@/components/pseo/PseoOverview";
import { PseoBenefits } from "@/components/pseo/PseoBenefits";
import { PseoProcess } from "@/components/pseo/PseoProcess";
import { PseoFaq } from "@/components/pseo/PseoFaq";
import { PseoServiceArea } from "@/components/pseo/PseoServiceArea";
import { PseoCta } from "@/components/pseo/PseoCta";
import { PseoGallery } from "@/components/pseo/PseoGallery";
import { PseoJsonLd } from "@/components/pseo/PseoJsonLd";
import { getPrimaryServiceImage, getServiceImages } from "@/lib/pseo/images";

type MoneyPageProps = {
  params: Promise<{ service: string; city: string }>;
};

export async function generateStaticParams() {
  return PSEO_SEED_COMBOS.map((combo) => ({
    service: combo.serviceSlug,
    city: combo.citySlug,
  }));
}

export async function generateMetadata({ params }: MoneyPageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  return buildPseoMetadata(service.name, city.name, `/service-areas/${service.slug}/${city.slug}`);
}

export default async function MoneyPage({ params }: MoneyPageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) notFound();

  const override = getContentOverride(service.slug, city.slug);
  const nearbyCities = getNearbyCities(city);
  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const heroIntro =
    override?.heroIntro ??
    `${city.localFlavor}, professional ${service.name.toLowerCase()} designed for durability, local climate, and long-term value. ${city.climate}.`;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: service.name, href: `/service-areas/services/${service.slug}` },
    { label: city.name, href: `/service-areas/${service.slug}/${city.slug}` },
  ];

  const defaultFaq = [
    {
      question: `How long does ${service.name.toLowerCase()} take in ${city.name}?`,
      answer: `Most ${service.name.toLowerCase()} projects take one to three weeks depending on project scope, site conditions, and material lead times.`,
    },
    {
      question: `Do I need a permit for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: city.permitNotes,
    },
    {
      question: `What materials work best for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `${city.climate}. We select materials rated for these conditions to ensure long-term performance.`,
    },
    {
      question: `What types of homes do you work with in ${city.name}?`,
      answer: `${city.typicalHomes}. We adapt our approach to match each property's layout and style.`,
    },
  ];

  const faqItems = override?.faq ?? defaultFaq;

  const primaryImage = getPrimaryServiceImage(service.slug, `${city.name}, CA`);
  const galleryImages = (() => {
    const picked = getServiceImages(service.category, 12, `${service.slug}-${city.slug}`, `${city.name}, CA`);
    const combined = primaryImage ? [primaryImage, ...picked.filter((img) => img.src !== primaryImage.src)] : picked;
    return combined.slice(0, 8);
  })();

  return (
    <main>
      <PseoJsonLd
        service={service}
        city={city}
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
        canonicalUrl={`/service-areas/${service.slug}/${city.slug}`}
      />

      <PseoHero
        breadcrumbs={breadcrumbs}
        title={`${service.name} in ${city.name}, CA`}
        subtitle={heroIntro}
        trustStats={[
          { value: "4+", label: "rated on Google & Yelp" },
          { value: "700+", label: "projects completed" },
          { value: "20+", label: "years in business" },
        ]}
        heroImage={{
          src: galleryImages[0].src,
          alt: `${service.name} project in ${city.name}, CA`,
        }}
      />

      <PseoOverview
        heading={`Professional ${service.name} for ${city.name} Homes`}
        paragraphs={[
          `${city.localFlavor}, homeowners invest in ${service.name.toLowerCase()} that holds up to local conditions and enhances everyday outdoor living. ${city.climate}.`,
          `${city.typicalHomes}. Whether you're upgrading an existing space or building from scratch, we plan around your property's layout, drainage, and aesthetic goals.`,
          city.permitNotes,
        ]}
        highlights={[
          "Free on-site consultation and detailed project plan",
          "Material selection suited to local climate",
          "Proper grading, drainage, and base preparation",
          "Licensed, insured, and locally experienced crew",
          "Written scope and transparent pricing before work begins",
        ]}
      />

      <PseoGallery
        heading={`Our ${service.name} Work Near ${city.name}`}
        images={galleryImages}
      />

      <PseoBenefits
        heading={`Why ${city.name} Homeowners Choose Xenoscapers`}
        benefits={[
          {
            title: `Built for ${city.region} Conditions`,
            description: `${city.climate}. We choose materials and techniques proven for these conditions.`,
          },
          {
            title: "One Team, Start to Finish",
            description: "No juggling subcontractors. Our in-house crew handles design, permitting, and installation.",
          },
          {
            title: "Local Permitting Knowledge",
            description: city.permitNotes,
          },
          {
            title: "Transparent Scope & Pricing",
            description: "You get a written plan with clear deliverables and pricing before any work begins.",
          },
          {
            title: "Drought-Friendly by Default",
            description: "Every project uses water-wise design principles — smart irrigation, native-friendly plantings, and durable hardscape materials.",
          },
          {
            title: "Built to Last",
            description: "Commercial-grade pavers, proper drainage, and quality plantings selected to hold up to sun, use, and time.",
          },
        ]}
      />

      <PseoProcess
        heading={`How ${service.name} Works in ${city.name}`}
      />

      <PseoFaq
        heading={`${service.name} FAQ for ${city.name} Homeowners`}
        items={faqItems}
      />

      <PseoServiceArea
        city={city}
        service={service}
        nearbyCities={nearbyCities}
        relatedServices={relatedServices}
      />

      <PseoCta
        heading={`Ready to Start Your ${city.name} Project?`}
        subheading="Get a free, no-pressure quote. We'll respond within one business day."
      />

      <Contact14 />
    </main>
  );
}
