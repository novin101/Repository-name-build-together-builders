"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(1, "Please enter your phone number."),
});

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function PpcLeadForm({ region }: { region: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  const [submitted, setSubmitted] = React.useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const referrer = typeof document !== "undefined" ? document.referrer || "" : "";

      const res = await fetch("/api/cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, pageUrl, referrer }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
          window.gtag_report_conversion();
        }
      }
    } catch {
      // noop
    }
  }

  return (
    <div id="contact" className="rounded-2xl border border-white/10 bg-white p-6 shadow-xl">
      {submitted ? (
        <div className="space-y-3 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="size-6 text-green-700" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">You&apos;re all set!</h3>
          <p className="text-sm text-neutral-600">
            We&apos;ll reach out within one business day to discuss your {region} project.
          </p>
          <p className="text-sm text-neutral-500">
            Want to talk sooner?{" "}
            <a className="font-medium text-green-700 underline" href="tel:+13105646057">
              Call (310) 564-6057
            </a>
          </p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900">
              Get your free {region} quote
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Tell us a little about your project. Get a 3D rendering of your project.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="h-11 border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400"
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
                        placeholder="Email address"
                        className="h-11 border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400"
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
                        placeholder="Phone number"
                        className="h-11 border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400"
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
                className="h-12 w-full rounded-lg bg-green-700 text-base font-semibold hover:bg-green-800"
              >
                {form.formState.isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </Button>
            </form>
          </Form>

          {/* Trust signals inside the form card */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-400">
            <span>No spam</span>
            <span className="text-neutral-300">|</span>
            <span>Free consultation</span>
            <span className="text-neutral-300">|</span>
            <span>No commitment required</span>
          </div>
        </>
      )}
    </div>
  );
}
