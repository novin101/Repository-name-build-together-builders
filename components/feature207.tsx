import { Separator } from "@/components/ui/separator";

type ExtraServiceItem = {
  title: string;
  description?: string;
};

type Feature207Props = {
  eyebrow?: string;
  heading: string;
  items: ExtraServiceItem[];
};

const Feature207 = ({ eyebrow, heading, items }: Feature207Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {eyebrow ? <p className="text-sm font-light">{eyebrow}</p> : null}
        <h2 className="mt-2 text-3xl font-medium md:text-5xl">{heading}</h2>
        <div className="mt-14">
          <Separator />
          {items.map((item, index) => (
            <div key={index}>
              <div className="py-8">
                <div className="flex gap-4 md:items-center">
                  
                  <div className="grid items-center gap-3 md:grid-cols-2 md:gap-8">
                    <h3 className="text-2xl">{item.title}</h3>
                    {item.description ? (
                      <p className="text-muted-foreground">{item.description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature207 };
