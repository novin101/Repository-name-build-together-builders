import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Feature206 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="outline" className="rounded-full">About XENOSCAPERS</Badge>
          <h2 className="text-4xl font-medium md:text-5xl">Elevating landscapes for over 20 years</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Family-run business crafting beautiful landscapes for over 20 years. Trusted by families and businesses in Southern California.
          </p>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-muted/80 p-6 border-green-800 border">
              <div className="text-4xl font-semibold">20+ yrs</div>
              <div className="text-sm text-muted-foreground">Family-run business</div>
            </div>
            <div className="rounded-2xl bg-muted/80 p-6 border-green-800 border">
              <div className="text-4xl font-semibold">200+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="rounded-2xl bg-muted/80 p-6 border-green-800 border">
              <div className="text-4xl font-semibold">700+</div>
              <div className="text-sm text-muted-foreground">Projects completed</div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden md:order-1 xl:order-1">
            <Image
              src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTm5DAP0bwPg1yCdZhscAXL6t4YTENkO7mWnuR"
              alt="placeholder"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-20 rounded-2xl bg-muted/80 p-8 md:order-2 md:gap-6 xl:order-2">
            <h3 className="text-lg">Mark J.</h3>
            <div className="">
              <p className="text-muted-foreground">
              One of the most professional companies ive ever dealt with. Novin and Orr have shown extreme skills of responsibility and were on top of everything throughout the whole. will definitely use these guys for my future projects.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden md:order-4 xl:order-3">
            <Image
              src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgLIkfeMBYQxTZWhOUK1n2NbPf70cDm4y5VEA"
              alt="placeholder"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-20 rounded-2xl bg-muted/80 p-8 md:order-3 md:gap-6 xl:order-4">
            <h3 className="text-lg">Negin N.</h3>
            <div className="">
              <p className="text-muted-foreground">
              Very responsive company that pays attention to exactly what you want and ask for and gives you exactly that. They do their best to make the imagine in your mind come to life. Great service and great price. Highly satisfied.
              </p>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden md:order-5 xl:order-6">
            <Image
              src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTrksdKdTq5dgn8JWqosAzNPLaYXVcCSyH74xi"
              alt="placeholder"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-20 rounded-2xl bg-muted/80 p-8 md:order-6 md:gap-6 xl:order-5">
            <h3 className="text-lg">Rotem Y.</h3>
            <div className="">
              <p className="text-muted-foreground">
              Xenoscapers were super organized and reliable. They really focused on putting the customer first. As I went through the process with Orr he really reassured me and informed me of everything I needed to know. They&apos;re as professional as it gets!
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden md:order-8">
            <Image
              src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKPWant9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v"
              alt="placeholder"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex h-full flex-col justify-between gap-20 rounded-2xl bg-muted/80 p-8 md:order-7 md:gap-6">
            <h3 className="text-lg">Paul H. M.</h3>
            <div className="">
              <p className="text-muted-foreground">
              What an amazing company to work with. Xenoscapers transformed by backyard from overgrown and barely useable to an absolute oasis that my dogs love! They charge very reasonable rates, made sure that every step of the I was happy with their work and outcome, and are genuinely such nice people that you want to invite them back for your next backyard BBQ!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature206 };
