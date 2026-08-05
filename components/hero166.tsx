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

      {/* Gradient overlays for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content anchored to bottom */}
      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 md:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <p className="font-cursive text-xl text-white/85 md:text-2xl lg:text-3xl">
            Step into something extraordinary
          </p>
          <h1 className="mt-2 text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl xl:text-[6.5rem]">
            Your Outdoor
            <br />
            Paradise Awaits
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg lg:text-xl">
            We craft breathtaking landscapes that transform your home into a
            sanctuary where every sunrise feels like a private retreat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              className="block h-fit w-fit rounded-lg bg-green-700 px-8 py-4 text-lg font-medium shadow-xl shadow-green-950/40 hover:bg-green-800"
            >
              <a href="#contact">Get a Free Quote</a>
            </Button>
            <span className="text-sm tracking-wide text-white/50">
              Southern California &middot; 20+ Years &middot; 700+ Projects
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export { Hero166 };
