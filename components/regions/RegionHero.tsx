import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type RegionHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  image: { src: string; alt: string };
  className?: string;
};

export function RegionHero({ eyebrow, title, description, cta, image, className }: RegionHeroProps) {
  return (
    <section className={cn("overflow-hidden font-sans", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="basis-2/4">
            <div className="mt-10 flex flex-col gap-2">
              {eyebrow ? (
                <p className="text-base font-semibold text-muted-foreground">{eyebrow}</p>
              ) : null}
              <h1 className="mb-2 text-4xl leading-snug! font-medium text-black lg:text-5xl">{title}</h1>
              {description ? (
                <p className="mb-2 text-lg text-black/80">{description}</p>
              ) : null}
              {cta ? (
                <Button asChild className="block h-fit w-fit rounded-lg px-7 py-3.5 text-lg font-medium transition-all duration-300 hover:-translate-y-1 bg-green-700 hover:bg-green-800">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ) : null}
            </div>
          </div>
          <div className="relative w-full md:basis-[42%] py-9 md:py-16">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-auto md:aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="relative z-20 object-cover object-center"
                sizes="(min-width: 768px) 42vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
