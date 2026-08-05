import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PpcLeadForm } from "@/components/regions/ppc/PpcLeadForm";

type ProjectImage = { src: string; alt: string; title: string };

type RegionPpcLandingProps = {
  region: string;
  headline: string;
  subheadline: string;
  heroImage: { src: string; alt: string };
  trustStats: { label: string; value: string }[];
  projects: ProjectImage[];
  benefits: { title: string; description: string }[];
  testimonials: { quote: string; name: string; location: string }[];
  faq: { question: string; answer: string }[];
};

const processSteps = [
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

export function RegionPpcLanding({
  region,
  headline,
  subheadline,
  heroImage,
  trustStats,
  projects,
  benefits,
  testimonials,
  faq,
}: RegionPpcLandingProps) {
  return (
    <main>
      {/* ── HERO: bg image + overlay + form ── */}
      <section className="relative overflow-hidden bg-neutral-900">
        {/* Background image */}
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />

        <div className="container relative z-10 py-14 md:py-20">
          {/* Logo wordmark */}
          <div className="mb-8 flex items-center gap-2">
            <Image
              src="/xenoscapers-cactus.svg"
              alt="Xenoscapers logo"
              width={32}
              height={32}
              className="max-h-8 w-auto invert"
            />
            <span className="text-lg font-semibold tracking-tighter text-white">XENOSCAPERS</span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            {/* Left: copy — visible first on mobile */}
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/80">{subheadline}</p>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="size-4 shrink-0 text-green-400" />
                    <span>
                      <span className="font-semibold">{stat.value}</span> {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Phone CTA (secondary, below trust bar) */}
              <div className="flex items-center gap-2 pt-1 text-white/70">
                <Phone className="size-4" />
                <span className="text-sm">
                  Prefer to talk?{" "}
                  <a href="tel:+13105646057" className="font-medium text-white underline underline-offset-2">
                    (310) 564-6057
                  </a>
                </span>
              </div>
            </div>

            {/* Right: lead form — immediately after copy on mobile */}
            <div>
              <PpcLeadForm region={region} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">WHY XENOSCAPERS</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why {region} homeowners choose us
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

      {/* ── PROJECT GALLERY ── */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">OUR WORK</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Recent {region} projects
          </h2>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => (
              <figure key={project.src} className="group relative overflow-hidden rounded-xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                  <span className="text-sm font-medium text-white">{project.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-STEP PROCESS ── */}
      <section className="bg-background py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">HOW IT WORKS</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Three steps to your new outdoor space
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
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

      {/* ── TESTIMONIALS ── */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container">
          <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">REAL RESULTS</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Hear from {region} homeowners
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border bg-muted/40 py-0">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1 text-green-600">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="size-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-4 text-base leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-background py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Common questions</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="rounded-xl border bg-background p-5">
                <h3 className="mb-2 font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to start your {region} project?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/70">
            Get a free, no-pressure quote. We&apos;ll respond within one business day.
          </p>
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

      <section className="bg-neutral-950 py-5">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/60 md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Xenoscapers. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
              <a href="tel:+13105646057" className="hover:text-white">
                (310) 564-6057
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
