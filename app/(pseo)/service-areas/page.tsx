import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCitiesByRegion } from "@/lib/pseo/cities";
import { PSEO_SERVICES } from "@/lib/pseo/services";
import { getPrimaryServiceImage, getServiceImages, pickImages, PROJECT_IMAGES } from "@/lib/pseo/images";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Service Areas | Xenoscapers",
  description:
    "Explore landscaping and hardscaping service areas across Southern California. Find localized pages by city or service.",
  alternates: { canonical: "https://xenoscapers.com/service-areas" },
};

export default function ServiceAreasHubPage() {
  const ocCities = getCitiesByRegion("Orange County");
  const laCities = getCitiesByRegion("Los Angeles");
  const heroImages = pickImages(PROJECT_IMAGES, 4, "service-areas-hub", "Southern California");

  return (
    <main>
      {/* Hero with image grid */}
      <section className="bg-background py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">XENOSCAPERS</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Landscaping &amp; Hardscaping Across Southern California
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Find localized service pages for your city or neighborhood. Each page is tailored to local climate, permitting, and project needs.
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
                    alt={img.alt}
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

      {/* Browse by service — with images */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">SERVICES</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Browse by Service
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PSEO_SERVICES.map((service) => {
              const primary = getPrimaryServiceImage(service.slug, "Southern California");
              const [fallback] = getServiceImages(service.category, 1, `hub-svc-${service.slug}`, "Southern California");
              const cardImage = primary ?? fallback;
              return (
                <Link
                  key={service.slug}
                  href={`/service-areas/services/${service.slug}`}
                  className="group overflow-hidden rounded-xl border bg-background transition-colors hover:border-green-700/30"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={cardImage.src}
                      alt={`${service.name} — ${cardImage.alt}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="mb-1 inline-block rounded-full bg-green-700/10 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                      {service.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-green-700">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      View all {service.name.toLowerCase()} locations →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse by region */}
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">LOCATIONS</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Browse by City
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* OC */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Orange County</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {ocCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-areas/cities/${city.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                    {city.type === "neighborhood" && (
                      <span className="ml-1.5 text-xs text-muted-foreground">(neighborhood)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* LA */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Los Angeles</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {laCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-areas/cities/${city.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {city.name}
                    </Link>
                    {city.type === "neighborhood" && (
                      <span className="ml-1.5 text-xs text-muted-foreground">(neighborhood)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
