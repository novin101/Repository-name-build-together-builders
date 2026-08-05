"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export type RegionService = {
  title: string;
  image: string;
  href: string;
  ariaLabel?: string;
};

export function RegionServicesGrid({ services, heading, blurb }: { services: RegionService[]; heading: string; blurb?: string }) {
  return (
    <section className="py-24">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-foreground mb-4 text-4xl font-medium md:text-5xl">{heading}</h2>
            {blurb ? <p className="text-muted-foreground w-80 text-base tracking-tight">{blurb}</p> : null}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {services.map((service, idx) => (
            <motion.a key={idx} href={service.href} aria-label={service.ariaLabel ?? service.title} whileHover={{ opacity: 0.9 }} className="group block overflow-hidden rounded-xl">
              <Card className="bg-muted relative aspect-[3/4] overflow-hidden border-none p-0">
                <Image src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" fill />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
                <CardContent className="absolute inset-0 z-20 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white">{service.title}</div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
