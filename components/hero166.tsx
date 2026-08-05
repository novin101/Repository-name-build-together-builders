import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero166 = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTpVVerBAxYlsQA4bi1agnPfLdtTuO2h3CVHUk"
          alt="Modern Southern California home entrance with decorative gate, desert landscaping, and palm trees"
          fill
          className="object-cover object-bottom"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80 md:text-base">
            Build Together Builders
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl lg:text-8xl xl:text-[6.5rem]">
            Building Trust,
            <br />
            Building Together.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
            Professional construction, remodeling, hardscaping, landscaping,
            patio covers, and outdoor living solutions throughout Southern
            California.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-fit w-fit rounded-lg bg-green-700 px-8 py-4 text-lg font-medium shadow-xl shadow-black/30 hover:bg-green-800"
            >
              <a href="#contact">Get a Free Estimate</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-fit w-fit rounded-lg border-white/70 bg-black/10 px-8 py-4 text-lg text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              <a href="/service-areas">Explore Our Services</a>
            </Button>
          </div>

          <p className="mt-6 text-sm tracking-wide text-white/60">
            Southern California · Quality Craftsmanship · Clear Communication
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export { Hero166 };
