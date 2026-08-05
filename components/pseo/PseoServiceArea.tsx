import Link from "next/link";
import type { City } from "@/lib/pseo/cities";
import type { PseoService } from "@/lib/pseo/services";

type PseoServiceAreaProps = {
  city: City;
  service: PseoService;
  nearbyCities: City[];
  relatedServices: PseoService[];
};

export function PseoServiceArea({ city, service, nearbyCities, relatedServices }: PseoServiceAreaProps) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container">
        <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">SERVICE AREA</p>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Serving {city.name} &amp; Surrounding Areas
        </h2>
        <p className="mb-10 max-w-xl text-muted-foreground">
          {city.county} County, {city.region}. We also serve nearby neighborhoods and cities.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Nearby cities */}
          {nearbyCities.length > 0 && (
            <div className="rounded-xl border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {service.name} in Nearby Areas
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {nearbyCities.map((nearby) => (
                  <li key={nearby.slug}>
                    <Link
                      href={`/service-areas/${service.slug}/${nearby.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {service.name} in {nearby.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related services */}
          {relatedServices.length > 0 && (
            <div className="rounded-xl border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Other Services in {city.name}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/service-areas/${related.slug}/${city.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {related.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Hub links */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href={`/service-areas/services/${service.slug}`} className="text-primary hover:underline">
            All {service.name} locations →
          </Link>
          <Link href={`/service-areas/cities/${city.slug}`} className="text-primary hover:underline">
            All services in {city.name} →
          </Link>
          <Link href="/service-areas" className="text-primary hover:underline">
            All service areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
