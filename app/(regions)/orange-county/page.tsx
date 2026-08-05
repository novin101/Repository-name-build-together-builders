import type { Metadata } from "next";
import { RegionHero } from "@/components/regions/RegionHero";
import { RegionServicesGrid } from "@/components/regions/RegionServicesGrid";
import { RegionAbout } from "@/components/regions/RegionAbout";
import { RegionProjects } from "@/components/regions/RegionProjects";
import { RegionTestimonials } from "@/components/regions/RegionTestimonials";
import { Contact14 } from "@/components/contact14";

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping in Orange County | Xenoscapers",
  description:
    "Modern, drought‑friendly landscaping and hardscaping for Orange County homes — garden design, xeriscaping, patios, outdoor kitchens, and more.",
  alternates: { canonical: "https://xenoscapers.com/orange-county" },
};

export default function OrangeCountyPage() {
  const region = "Orange County";

  return (
    <main>
      <RegionHero
        eyebrow="XENOSCAPERS"
        title={`Landscaping & Hardscaping Services in ${region}`}
        description={`Elevate your ${region} property with native plants, efficient irrigation, and durable hardscapes made for coastal SoCal.`}
        cta={{ label: "Get a Free Quote", href: "#contact" }}
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKpv1DM9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
          alt: "Orange County modern backyard with xeriscape and patio",
        }}
      />

      <section className="pt-2">
        <div className="container max-w-3xl text-muted-foreground">
          <p>
            We design and build <strong>landscapes in Orange County</strong> that balance water savings and everyday livability — from family‑friendly lawns to entertainer patios.
          </p>
        </div>
      </section>

      <RegionServicesGrid
        heading="Popular Services in Orange County"
        blurb="Handpicked for OC’s coastal climate and neighborhood styles."
        services={[
          {
            title: "Garden Design",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv0gfV9ToUJKSbIGHcin30lkxCt5QujOdhXPD",
            href: "/landscaping",
            ariaLabel: "Garden Design in Orange County",
          },
          {
            title: "Xeriscaping",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTwVQ73oJs2SQp10JvUOVZ8ILNxBedEj9XFbwD",
            href: "/landscaping/xeriscaping",
            ariaLabel: "Xeriscaping in Orange County",
          },
          {
            title: "Patios",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTUZQ2g0w7h9SXgKzmfP1B82WHvkQI3VGFwJ4N",
            href: "/hardscaping",
            ariaLabel: "Patio construction in Orange County",
          },
          {
            title: "Outdoor Kitchens",
            image:
              "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHw9s2MBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
            href: "/hardscaping",
            ariaLabel: "Outdoor kitchens in Orange County",
          },
        ]}
      />

      <RegionAbout
        heading="We Know Orange County"
        paragraphs={[
          "Serving homeowners across Orange County — Newport Beach, Irvine, Tustin, Mission Viejo, Laguna Niguel, and beyond.",
          "From coastal breezes to inland heat, we design for microclimates, smart irrigation, and materials that hold up to sun and salt air.",
        ]}
      />

      <RegionProjects
        title="Featured OC Projects"
        description="Recent work designed for Orange County lifestyles."
        items={[
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZXyp2AFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
              alt: "Costa Mesa Xeriscape + Patio",
            },
            title: "Costa Mesa Xeriscape + Patio",
            description: "Low‑water planting with modern pavers.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTqQybhPuh7XvK80N26m4iGckwxtVEf1bDslRJ",
              alt: "Redesigned Courtyard",
            },
            title: "Redesigned Courtyard",
            description: "Serenity layout with center fountain.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKpv1DM9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
              alt: "Laguna Hills Pool Area",
            },
            title: "Pool Area & Outdoor Kitchen",
            description: "Pool area with outdoor kitchen and seating.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWLPpJO8AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
              alt: "Mission Viejo Pool Area",
            },
            title: "Mission Viejo Pool Area",
            description: "Sleek geometric pool, raised spa, and vibrant turf lawn.",
          },
        ]}
      />

      <RegionTestimonials
        heading="OC Clients, Happy Results"
        quotes={[
          { quote: "Our patio and outdoor kitchen made weekends at home incredible — highly recommend!" },
          { quote: "Smart irrigation cut our water bill and the yard still looks amazing." },
        ]}
      />

      <Contact14 />
    </main>
  );
}
