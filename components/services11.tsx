"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Hardscaping",
    image: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT8lBdJCZfk0oGTwBHYWuPU8CEV1ASJLXrvjZh",
    url: "/hardscaping",
  },
  {
    title: "Landscaping",
    image: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv50fGRToUJKSbIGHcin30lkxCt5QujOdhXPD",
    url: "/landscaping",
  },
];

const Services11 = () => {
  return (
    <section className="py-32">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
              Our Services
            </h2>
            <p className="text-muted-foreground w-72 text-base tracking-tight">
              We do landscaping and hardscaping for homes and local businesses in Southern California.
              From fresh lawns and garden beds to patios and walkways, we bring out the
              best in every yard—refreshing, easy to maintain, and ready for everyday life.
            </p>
          </div>
          <Button variant="default" className="mt-8 w-fit bg-green-700 hover:bg-green-800">
            <a href="#contact">Get a Free Quote</a>
            <ArrowDown className="size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.8 }}
              className="group block overflow-hidden rounded-xl"
            >
              <Card className="bg-muted relative aspect-[3/4] overflow-hidden border-none p-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
                <CardContent className="absolute inset-0 z-20 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute right-6 top-6 z-20 h-6 w-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services11 };
