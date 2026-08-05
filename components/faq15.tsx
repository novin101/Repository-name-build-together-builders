import type { LucideIcon } from "lucide-react";
import { Map, Calendar, Pencil, Shovel } from "lucide-react";

interface FaqItem {
  icon: LucideIcon;
  heading: string;
  description: string;
}

interface Faq15Props {
  title?: string;
  items?: FaqItem[];
}

const defaultItems: FaqItem[] = [
  {
    icon: Map,
    heading: "What regions do you serve?",
    description:
      "We serve the entire Southern California region, including Los Angeles, Orange, Riverside, San Bernardino, and San Diego counties.",
  },
  {
    icon: Calendar,
    heading: "Do you offer free consultations?",
    description:
      "Yes, we offer free consultations to discuss your landscaping needs and provide a quote.",
  },
  {
    icon: Pencil,
    heading: "Do you do landscape design?",
    description:
      "Yes, we offer landscape design services to create custom outdoor spaces that enhance your property's beauty and functionality.",
  },
  {
    icon: Shovel,
    heading: "Do you offer maintenance services?",
    description:
      "Yes, we offer maintenance services to keep your landscape looking its best.",
  },
];

const Faq15 = ({
  title = "Frequently asked questions",
  items = defaultItems,
}: Faq15Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold md:text-5xl lg:mx-14">
            {title}
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {items.map((item, idx) => (
              <li className="flex flex-col gap-2.5" key={idx}>
                <div className="flex items-center gap-2 md:gap-2.5">
                  <item.icon className="size-5 shrink-0 md:size-6" />
                  <h3 className="font-semibold md:text-lg">{item.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Faq15 };
