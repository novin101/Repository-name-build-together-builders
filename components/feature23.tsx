import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Feature23Item = {
  image: { src: string; alt: string };
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

type Feature23Props = {
  badge?: { text: string; variant?: "default" | "secondary" | "destructive" | "outline" };
  title: string;
  description?: string;
  items: Feature23Item[];
};

const Feature23 = ({ badge, title, description, items }: Feature23Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          {badge?.text ? (
            <Badge variant={badge.variant ?? "outline"}>{badge.text}</Badge>
          ) : null}
          <h2 className="text-4xl font-medium">{title}</h2>
          {description ? (
            <p className="text-lg text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-3 xl:gap-20">
          {items.map((item, index) => (
            <div className="flex flex-col lg:block" key={index}>
              <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-1 font-semibold">{item.title}</div>
                {item.description ? (
                  <p className="text-muted-foreground">{item.description}</p>
                ) : null}
                {item.href ? (
                  <a href={item.href} className="mt-4 flex items-center gap-2 font-medium">
                    {item.linkLabel ?? "Learn more"}
                    <ChevronRight className="w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature23 };
