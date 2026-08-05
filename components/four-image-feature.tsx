import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type FourImageItem = {
  image: { src: string; alt: string };
  title: string;
  description?: string;
};

type FourImageFeatureProps = {
  badge?: { text: string; variant?: "default" | "secondary" | "destructive" | "outline" };
  title: string;
  description?: string;
  items: [FourImageItem, FourImageItem, FourImageItem, FourImageItem];
  className?: string;
};

const FourImageFeature = ({ badge, title, description, items, className }: FourImageFeatureProps) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          {badge?.text ? (
            <Badge variant={badge.variant ?? "outline"}>{badge.text}</Badge>
          ) : null}
          <h2 className="text-4xl font-medium text-balance">{title}</h2>
          {description ? (
            <p className="text-lg text-muted-foreground">{description}</p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, index) => (
            <figure key={index} className="group relative overflow-hidden rounded-xl border bg-muted">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
              </AspectRatio>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-base font-semibold leading-tight">{item.title}</span>
                {item.description ? (
                  <span className="text-sm text-white/80">{item.description}</span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FourImageFeature };
export type { FourImageFeatureProps, FourImageItem };


