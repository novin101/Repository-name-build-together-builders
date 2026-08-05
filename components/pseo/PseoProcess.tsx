const defaultSteps = [
  {
    num: "1",
    title: "Request a Quote",
    description: "Fill out the form or call us. We respond within one business day.",
  },
  {
    num: "2",
    title: "On-Site Consultation",
    description: "We visit your property, review your goals, and deliver a detailed plan with clear pricing.",
  },
  {
    num: "3",
    title: "Build & Enjoy",
    description: "Our crew builds your project on schedule. We walk the finished space with you before we leave.",
  },
];

type PseoProcessProps = {
  heading?: string;
  steps?: { num: string; title: string; description: string }[];
};

export function PseoProcess({ heading, steps = defaultSteps }: PseoProcessProps) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container">
        <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">HOW IT WORKS</p>
        <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {heading ?? "Three steps to your new outdoor space"}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                {step.num}
              </span>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
