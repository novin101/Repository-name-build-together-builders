import { CircleCheckBig } from "lucide-react";

const Feature227 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-5xl font-medium text-balance lg:text-7xl">
              Designing Spaces Where Families & Pets Thrive
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
            Your yard should be a place everyone loves — a safe, welcoming space for family gatherings, kids at play, and pets to explore freely.
            </p>
            <ul className="grid max-w-xl gap-5 sm:grid-cols-2">
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Pet-Safe Plant Selection</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Family-Centric Design</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Durable, Kid-Friendly Materials</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Safe, Secure Outdoor Living</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Eco-Friendly Practices</p>
              </li>
              <li className="flex items-center gap-1.5">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Tailored to Your Family&apos;s Needs</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent to-30%" />
            <div className="absolute inset-0 bg-linear-to-l from-background to-transparent to-30%" />
            <img
              src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTJNij0s50BRg5vyD9PsnCaZpWlTSh6OKzdEoQ"
              alt="Yard with family and pets"
              className="max-h-[500px] w-full rounded-2xl border border-border object-cover lg:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature227 };
