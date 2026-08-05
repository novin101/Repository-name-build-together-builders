import { CheckCircle2 } from "lucide-react";

type PseoBenefitsProps = {
  heading: string;
  benefits: { title: string; description: string }[];
};

export function PseoBenefits({ heading, benefits }: PseoBenefitsProps) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="container">
        <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">WHY XENOSCAPERS</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-700/10">
                <CheckCircle2 className="size-4 text-green-700" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
