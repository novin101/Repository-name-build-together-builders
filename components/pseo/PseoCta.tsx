import { Button } from "@/components/ui/button";

type PseoCtaProps = {
  heading: string;
  subheading?: string;
};

export function PseoCta({ heading, subheading }: PseoCtaProps) {
  return (
    <section className="bg-neutral-900 py-16 md:py-20">
      <div className="container text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="mx-auto mt-3 max-w-lg text-white/70">{subheading}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="h-fit rounded-lg bg-green-600 px-8 py-3.5 text-lg font-medium hover:bg-green-700"
          >
            <a href="#contact">Get My Free Quote</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-fit rounded-lg border-white/30 bg-transparent px-8 py-3.5 text-lg !text-white hover:bg-white/10"
          >
            <a href="tel:+13105646057">Call (310) 564-6057</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
