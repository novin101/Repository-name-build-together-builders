"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
});

// Extend Window interface for Google Ads conversion tracking
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const Contact14 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const [submitted, setSubmitted] = React.useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const pageUrl =
        typeof window !== "undefined" ? window.location.href : "";
      const referrer =
        typeof document !== "undefined" ? document.referrer || "" : "";
      const res = await fetch("/api/cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, pageUrl, referrer }),
      });
      if (res.ok) {
        setSubmitted(true);
        // Track Google Ads conversion
        if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion();
        }
      }
    } catch {
      // noop: keep form visible on failure
    }
  }
  return (
    <section id="contact" className="bg-background py-32">
      <div className="container">
        <Card className="rounded-4xl bg-muted w-full border-none overflow-hidden py-0">
          <CardContent className="relative p-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left: Text + CTA */}
              <div className="col-span-1 md:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="flex w-fit items-center gap-1.5 opacity-70 dark:opacity-60">
                  <img
                    src="/x-badge.svg"
                    alt=""
                    className="max-h-5 w-auto shrink-0 dark:invert"
                  />
                  <img
                    src="/x-word-logo.svg"
                    alt="Xenoscapers"
                    className="h-3 w-auto max-w-[7.5rem] shrink-0 dark:invert sm:h-3.5"
                  />
                </div>
                <h2 className="text-foreground text-5xl font-bold tracking-tighter">
                  Design & Build Your Dream Yard
                </h2>

                <ul className="max-w-lg space-y-2 tracking-tight">
                  <li className="flex items-center">
                    <span className="mr-2 font-bold">Email:</span>{" "}
                    <a
                      href="mailto:hello@xenoscapers.com"
                      className="text-foreground/80 underline"
                    >
                      hello@xenoscapers.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 font-bold">Phone:</span>{" "}
                    <a
                      href="tel:+13105646057"
                      className="text-foreground/80"
                    >
                      +1 (310) 564-6057
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 font-bold">Service Area:</span>
                    <span className="text-foreground/80">
                      Southern California
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 font-bold">Hours:</span>{" "}
                    <span className="text-foreground/80">
                      Mon-Fri, 8am-5pm PST
                    </span>
                  </li>
                </ul>

                {submitted ? (
                  <div className="mt-6 flex h-auto flex-col gap-3 md:max-w-sm">
                    <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-900">
                      <p className="text-lg font-semibold">Thanks! Your request has been received.</p>
                      <p className="mt-1 text-sm text-green-900/80">We&apos;ll reach out shortly.</p>
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="mt-6 flex h-auto flex-col gap-3 md:max-w-sm"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Name"
                                className="bg-background p-6"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Email"
                                className="bg-background p-6"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Phone"
                                className="bg-background p-6"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="h-10 w-fit bg-green-700 hover:bg-green-800"
                      >
                        {form.formState.isSubmitting ? "Submitting..." : "Get a Free Quote"}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>

              {/* Right: Landscape drawing */}
              <div className="relative col-span-1 md:col-span-7 h-72 md:h-auto min-h-[320px]">
                <Image
                  src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT8InsbEfk0oGTwBHYWuPU8CEV1ASJLXrvjZht"
                  alt="Landscape design sketch"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 55vw, (min-width: 768px) 60vw, 100vw"
                  priority
                />
                {/* Soft gradient: top-down on mobile, left-edge on desktop */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-2/5 md:top-0 md:bottom-0 md:left-0 md:right-auto md:w-2/5 md:h-auto bg-gradient-to-b from-muted via-muted/30 to-transparent md:bg-gradient-to-l md:from-transparent md:via-muted/30 md:to-muted" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Contact14 };
