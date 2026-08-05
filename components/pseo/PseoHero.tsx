import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type BreadcrumbItem = { label: string; href: string };

type PseoHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle: string;
  trustStats?: { value: string; label: string }[];
  heroImage?: { src: string; alt: string };
};

export function PseoHero({ breadcrumbs, title, subtitle, trustStats, heroImage }: PseoHeroProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground/50">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={heroImage ? "grid gap-10 lg:grid-cols-2 lg:items-center" : "max-w-3xl"}>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>

            {/* Trust bar */}
            {trustStats && trustStats.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-green-700" />
                    <span>
                      <span className="font-semibold">{stat.value}</span> {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-fit rounded-lg bg-green-700 px-7 py-3.5 text-lg font-medium hover:bg-green-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-4" />
                <span className="text-sm">
                  or call{" "}
                  <a href="tel:+13105646057" className="font-medium text-foreground underline underline-offset-2">
                    (310) 564-6057
                  </a>
                </span>
              </div>
            </div>
          </div>

          {heroImage && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
