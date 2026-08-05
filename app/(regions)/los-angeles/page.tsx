import type { Metadata } from "next";
import { RegionHero } from "@/components/regions/RegionHero";
import { RegionServicesGrid } from "@/components/regions/RegionServicesGrid";
import { RegionAbout } from "@/components/regions/RegionAbout";
import { RegionProjects } from "@/components/regions/RegionProjects";
import { RegionTestimonials } from "@/components/regions/RegionTestimonials";
import { Contact14 } from "@/components/contact14";

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping Services in Los Angeles | Xenoscapers",
  description:
    "Xenoscapers provides modern, drought‑friendly landscaping and hardscaping in Los Angeles. Garden design, xeriscaping, patios, outdoor kitchens, and more.",
  alternates: { canonical: "https://xenoscapers.com/los-angeles" },
};

export default function LosAngelesPage() {
  const region = "Los Angeles";

  return (
    <main>
      <RegionHero
        eyebrow="XENOSCAPERS"
        title={`Landscaping & Hardscaping Services in ${region}`}
        description={`Transform your ${region} property with modern, drought‑friendly design. From garden design and xeriscaping to patios and outdoor kitchens, we build spaces made for SoCal living.`}
        cta={{ label: "Get a Free Quote", href: "#contact" }}
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWQ7yw58AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
          alt: "Modern Los Angeles backyard xeriscape with patio",
        }}
      />

      <section className="pt-2">
        <div className="container max-w-3xl text-muted-foreground">
          <p>
            We offer <strong>landscaping in Los Angeles</strong> with a focus on low‑water, native plant design and
            durable hardscapes that thrive in LA’s climate.
          </p>
        </div>
      </section>

      <RegionServicesGrid
        heading="Services for Los Angeles Homes"
        blurb="Explore popular services tailored to LA’s mild climate and water-wise goals."
        services={[
          {
            title: "Garden Design",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv0gfV9ToUJKSbIGHcin30lkxCt5QujOdhXPD",
            href: "/landscaping",
            ariaLabel: "Garden Design in Los Angeles",
          },
          {
            title: "Xeriscaping",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTwVQ73oJs2SQp10JvUOVZ8ILNxBedEj9XFbwD",
            href: "/landscaping/xeriscaping",
            ariaLabel: "Xeriscaping in Los Angeles",
          },
          {
            title: "Patios",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTUZQ2g0w7h9SXgKzmfP1B82WHvkQI3VGFwJ4N",
            href: "/hardscaping",
            ariaLabel: "Patio construction in Los Angeles",
          },
          {
            title: "Outdoor Kitchens",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHw9s2MBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
            href: "/hardscaping",
            ariaLabel: "Outdoor kitchens in Los Angeles",
          },
        ]}
      />

      <RegionAbout
        heading="Serving Neighborhoods Across Los Angeles"
        paragraphs={[
          "Serving homeowners across Los Angeles — from Hollywood Hills and Beverly Hills to Silver Lake, Santa Monica, and Pasadena.",
          "Our team understands LA’s unique microclimates, hillside grading, and water‑wise regulations. We plan for sun exposure, soil conditions, and efficient irrigation so your landscape stays beautiful year‑round.",
        ]}
      />

      <RegionProjects
        title="Featured Los Angeles Projects"
        description="A few recent builds designed for LA living."
        items={[
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTFYpctOIPIHBCyzuKAW0ejUXG7fNw1OvSDgp9",
              alt: "Hollywood Hills Stairway Xeriscape",
            },
            title: "Hollywood Hills Stairway Xeriscape",
            description: "Low‑water yard with native grasses and stone stairway.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTziY88Zno1SE29aK3MzVjXmAZC8Bx5D6wYfyN",
              alt: "Beverly Hills Modern Patio",
            },
            title: "Beverly Hills Modern Patio",
            description: "Turf lawn with modern paver patio and seating.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTpjFwfgAxYlsQA4bi1agnPfLdtTuO2h3CVHUk",
              alt: "Hillside Paver Driveway",
            },
            title: "Hillside Paver Driveway",
            description: "Paver driveway with stone stairway.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTlvxM1YXGHRg735V9a1xXIpOyi6fwthTYDGSl",
              alt: "Pasadena Lawn & Garden",
            },
            title: "Pasadena Lawn & Garden",
            description: "Low‑water lawn with native shrubs and trees.",
          },
        ]}
      />

      <RegionTestimonials
        heading="What Los Angeles Clients Are Saying"
        quotes={[
          { quote: "They turned our Hollywood Hills yard into an oasis — we barely water anymore!" },
          { quote: "Professional crew, thoughtful design, and the patio made our space usable year‑round." },
        ]}
      />

      <Contact14 />
    </main>
  );
}
