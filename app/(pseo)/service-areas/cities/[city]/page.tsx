import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, getNearbyCities, PSEO_CITIES } from "@/lib/pseo/cities";
import { PSEO_SERVICES } from "@/lib/pseo/services";
import { getPrimaryServiceImage, getServiceImages, pickImages, PROJECT_IMAGES } from "@/lib/pseo/images";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type CityHubPageProps = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return PSEO_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityHubPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: `Landscaping & Hardscaping in ${city.name}, CA | Xenoscapers`,
    description: `Explore landscaping and hardscaping services available in ${city.name}, ${city.county} County, California.`,
    alternates: { canonical: `https://xenoscapers.com/service-areas/cities/${city.slug}` },
  };
}

export default async function CityHubPage({ params }: CityHubPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const nearbyCities = getNearbyCities(city);

  const heroImages = pickImages(PROJECT_IMAGES, 3, `city-hub-${city.slug}`, `${city.name}, CA`);

  return (
    <main>
      {/* Hero with image collage */}
      <section className="bg-background py-14 md:py-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><span className="text-muted-foreground/50">/</span></li>
              <li><Link href="/service-areas" className="hover:text-foreground">Service Areas</Link></li>
              <li><span className="text-muted-foreground/50">/</span></li>
              <li className="text-foreground font-medium">{city.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Landscaping &amp; Hardscaping in {city.name}, CA
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {city.localFlavor}, we provide full-service outdoor design and build. Browse available services below.
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
                <div key={img.src} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={`Landscaping and hardscaping project — ${img.alt}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 80vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid with images */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">SERVICES</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Available Services in {city.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PSEO_SERVICES.map((service) => {
              const primary = getPrimaryServiceImage(service.slug, `${city.name}, CA`);
              const [fallback] = getServiceImages(
                service.category,
                1,
                `city-card-${city.slug}-${service.slug}`,
                `${city.name}, CA`,
              );
              const cardImage = primary ?? fallback;
              return (
                <Link
                  key={service.slug}
                  href={`/service-areas/${service.slug}/${city.slug}`}
                  className="group overflow-hidden rounded-xl border bg-background transition-colors hover:border-green-700/30 hover:bg-green-700/5"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={cardImage.src}
                      alt={`${service.name} in ${city.name}, CA`}
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
                      {service.name} in {city.name} →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local details */}
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">LOCAL DETAILS</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What to Know About {city.name}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Climate & Conditions", text: city.climate },
              { title: "Typical Homes", text: city.typicalHomes },
              { title: "Permitting Notes", text: city.permitNotes },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-700/10">
                  <CheckCircle2 className="size-4 text-green-700" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-muted py-16 md:py-20">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              Nearby Areas We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/cities/${nearby.slug}`}
                  className="rounded-lg border bg-background px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-green-700/5"
                >
                  {nearby.name} →
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="rounded-lg border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-green-700/5"
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
