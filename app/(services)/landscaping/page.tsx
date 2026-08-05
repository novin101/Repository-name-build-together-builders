import type { Metadata } from "next";
import { Hero100 } from "@/components/hero100";
import { Contact14 } from "@/components/contact14";
import { Feature187 } from "@/components/feature187";
import { Feature23 } from "@/components/feature23";
import { Faq3 } from "@/components/faq3";

export const metadata: Metadata = {
  title: "Landscaping Services | Xenoscapers",
  description:
    "Refreshing, beautiful landscaping — lawns, gardens, turf, xeriscaping, and more designed for long‑lasting outdoor spaces.",
  alternates: { canonical: "https://xenoscapers.com/landscaping" },
};


export default function LandscapingPage() {
  return (
    <main>
      <Hero100
        eyebrow="Landscaping Services"
        title="Refreshing, beautiful outdoor spaces"
        description="From lawns to garden beds, we build long-lasting landscaping features."
        cta={{ label: "Get a Free Quote", href: "#contact" }}
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv50fGRToUJKSbIGHcin30lkxCt5QujOdhXPD",
          alt: "Stone patio and paver walkway",
        }}
        accent={true}
      />
      <Feature187
        heading="Our Landscaping Process"
        subheading="We follow a proven, transparent process to ensure your project is built to last."
        steps={[
          {
            id: 1,
            title: "Consultation & Design",
            description: "Align on vision, materials, and scope.",
          },
          {
            id: 2,
            title: "Site Prep & Base",
            description: "Prepare the ground and foundation for longevity.",
          },
          {
            id: 3,
            title: "Bring It To Life",
            description: "Build, refine, and reveal your new space.",
          },
        ]}
      />
      <Feature23
        badge={{ text: "Landscaping Services", variant: "outline" }}
        title="Designed for beauty and longevity"
        description="Thoughtful details that make your outdoor space work and last."
        items={[
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv0gfV9ToUJKSbIGHcin30lkxCt5QujOdhXPD",
              alt: "Lawns and gardens",
            },
            title: "Lawns & Gardens",
            description: "Beautiful, long‑lasting lawns and garden beds that require minimal maintenance.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAzGxmND4WGYBhr65flpyvsK9z7FxZTRD0L2E",
              alt: "Turf installation",
            },
            title: "Turf Installation",
            description: "Long‑lasting turf installations that require minimal maintenance.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZrUq6DFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
              alt: "Xeriscaping",
            },
            title: "Xeriscaping",
            description: "Low-maintenance landscaping solutions that conserve water and reduce maintenance costs.",
            href: "/landscaping/xeriscaping",
            linkLabel: "Learn more",
          },
        ]}
      />
      <Faq3
        heading="Frequently asked questions"
        description="Answers to common questions about our landscaping services."
        faqItems={[
          {
            id: "faq-1",
            question: "How long does a typical landscaping project take?",
            answer: "Most projects take 1–3 weeks depending on size, site access, and weather.",
          },
          {
            id: "faq-2",
            question: "What materials do you recommend for durability?",
            answer: "We commonly use concrete pavers, natural stone, and engineered blocks based on your goals.",
          },
          {
            id: "faq-3",
            question: "Do you handle drainage?",
            answer: "Yes. We plan for proper grading, base prep, and edge restraints to manage water and prevent shifting.",
          },
          {
            id: "faq-4",
            question: "Do you offer maintenance services?",
            answer: "We offer sealing, polymeric sand refresh, and repairs as needed after installation.",
          },
        ]}
      />
      <Contact14 />
    </main>
  );
}


