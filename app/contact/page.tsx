import type { Metadata } from "next";
import { Hero100 } from "@/components/hero100";
import { Contact14 } from "@/components/contact14";

export const metadata: Metadata = {
  title: "Contact Xenoscapers | Get a Free Quote",
  description:
    "Get in touch with Xenoscapers. Share your project details and we’ll follow up with a free quote.",
  alternates: { canonical: "https://xenoscapers.com/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Hero100
        eyebrow="XENOSCAPERS"
        title="Contact Xenoscapers"
        description="Tell us about your project. We serve Southern California with modern, water‑wise landscape design and build."
        cta={{ label: "Get a Free Quote", href: "#contact" }}
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWQ7yw58AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
          alt: "Modern Southern California xeriscape with patio seating",
        }}
      />

      <section className="pt-2">
        <div className="container max-w-3xl text-muted-foreground">
          <p>
            Reach us at <strong>+1 (310) 564-6057</strong> or
            {" "}
            <strong>xenoscapers@gmail.com</strong>. We typically respond within one business day.
          </p>
        </div>
      </section>

      <Contact14 />
    </main>
  );
}


