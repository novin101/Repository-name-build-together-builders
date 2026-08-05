import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCitiesByPriority } from "@/lib/pseo/cities";
import { getServiceBySlug, PSEO_SERVICES } from "@/lib/pseo/services";
import { getPrimaryServiceImage, getServiceImages } from "@/lib/pseo/images";
import { Button } from "@/components/ui/button";

type ServiceHubPageProps = {
  params: Promise<{ service: string }>;
};

export async function generateStaticParams() {
  return PSEO_SERVICES.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: ServiceHubPageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};

  return {
    title: `${service.name} Service Areas | Xenoscapers`,
    description: `Explore ${service.name.toLowerCase()} service pages by city across Southern California. Find local details, pricing, and project examples.`,
    alternates: { canonical: `https://xenoscapers.com/service-areas/services/${service.slug}` },
  };
}

export default async function ServiceHubPage({ params }: ServiceHubPageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const tier1 = getCitiesByPriority("tier1");
  const tier2 = getCitiesByPriority("tier2");
  const tier3 = getCitiesByPriority("tier3");

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const primaryHero = getPrimaryServiceImage(service.slug, "Southern California");
  const heroImages = (() => {
    const picked = getServiceImages(service.category, 6, `service-hub-${service.slug}`, "Southern California");
    const combined = primaryHero ? [primaryHero, ...picked.filter((img) => img.src !== primaryHero.src)] : picked;
    return combined.slice(0, 4);
  })();

  return (
    <main>
      {/* Hero with images */}
      <section className="bg-background py-14 md:py-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><span className="text-muted-foreground/50">/</span></li>
              <li><Link href="/service-areas" className="hover:text-foreground">Service Areas</Link></li>
              <li><span className="text-muted-foreground/50">/</span></li>
              <li className="text-foreground font-medium">{service.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-green-700/10 px-3 py-1 text-xs font-semibold text-green-700 mb-4">
                {service.category}
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                {service.name} Across Southern California
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Choose a city to see localized details, permitting notes, and project information for {service.name.toLowerCase()}.
              </p>
              <Button
                asChild
                className="mt-8 h-fit rounded-lg bg-green-700 px-7 py-3.5 text-lg font-medium hover:bg-green-800"
              >
                <a href="#contact">Get a Free Quote</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {heroImages.map((img, i) => (
                <div key={img.src} className={`relative overflow-hidden rounded-xl ${i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={`${service.name} project — ${img.alt}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City grid by tier */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container space-y-12">
          {[
            { label: "Top Markets", cities: tier1 },
            { label: "Growing Markets", cities: tier2 },
            { label: "Emerging Markets", cities: tier3 },
          ].map(({ label, cities }) => (
            <div key={label}>
              <h2 className="mb-4 text-xl font-semibold text-foreground">{label}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${service.slug}/${city.slug}`}
                    className="group rounded-xl border bg-background p-4 transition-colors hover:border-green-700/30 hover:bg-green-700/5"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-green-700">
                      {service.name} in {city.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {city.region} · {city.county} County
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-background py-16 md:py-20">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/service-areas/services/${related.slug}`}
                  className="rounded-lg border px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-muted"
                >
                  {related.name} →
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="rounded-lg border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                All service areas →
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
