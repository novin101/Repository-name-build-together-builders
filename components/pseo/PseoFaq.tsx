type FaqItem = { question: string; answer: string };

type PseoFaqProps = {
  heading: string;
  items: FaqItem[];
};

export function PseoFaq({ heading, items }: PseoFaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.question} className="rounded-xl border bg-background p-5">
              <h3 className="mb-2 font-semibold text-foreground">{item.question}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
