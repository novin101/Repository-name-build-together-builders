import type { Metadata } from "next";
import { Hero100 } from "@/components/hero100";
import { Contact14 } from "@/components/contact14";
import { Feature187 } from "@/components/feature187";
import { Feature23 } from "@/components/feature23";
import { Faq3 } from "@/components/faq3";
import { Feature207 } from "@/components/feature207";

export const metadata: Metadata = {
  title: "Hardscaping Services | Xenoscapers",
  description:
    "Durable, beautiful hardscapes — patios, retaining walls, outdoor kitchens, fire pits, and more for lasting outdoor living.",
  alternates: { canonical: "https://xenoscapers.com/hardscaping" },
};

export default function Hardscaping() {
  return (
    <main>
      <Hero100
        eyebrow="Hardscaping Services"
        title="Durable, beautiful outdoor living spaces"
        description="From patios to retaining walls, we build long-lasting hardscape features."
        cta={{ label: "Get a Free Quote", href: "#contact" }}
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTVlmB9SXYpPtuzO2ZS60I1U73diaF8BJGHlMw",
          alt: "Stone patio and paver walkway",
        }}
        accent={true}
      />
      <Feature187
        heading="Our Hardscaping Process"
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
        badge={{ text: "Hardscaping Services", variant: "outline" }}
        title="Built for durability and style"
        description="Thoughtful details that make your outdoor space work and last."
        items={[
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT1J5WjSmkFyLOmHIuwgepErKR3jVoBC6vcNYS",
              alt: "Paver patterns and layout",
            },
            title: "Retaining Walls",
            description: "Block, stone, and boulder walls built to last.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAX3RTwID4WGYBhr65flpyvsK9z7FxZTRD0L2",
              alt: "Compacted base and drainage",
            },
            title: "Paver Driveway & Walkways",
            description: "Beautiful, long‑lasting paver driveway installations.",
          },
          {
            image: {
              src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTVlmB9SXYpPtuzO2ZS60I1U73diaF8BJGHlMw",
              alt: "Clean edges and finish",
            },
            title: "Patios & Decking",
            description: "Durable patios, paver walkways, and outdoor living.",
          },
        ]}
      />
      <Feature207
        eyebrow="Related Services"
        heading="Enhance your project with these options"
        items={[
          {
            title: "Steps & Stairs",
            description:
              "Safe, durable stone or paver steps, landings, and entryways that connect your outdoor spaces.",
          },
          {
            title: "Outdoor Kitchens & Fire Pits",
            description:
              "Built-in grills, countertops, and cozy fire features to make your patio the heart of the backyard.",
          },
          {
            title: "Drainage & Grading Systems",
            description:
              "Proper grading, base prep, and water management to protect pavers, walls, and foundations.",
          },
          {
            title: "Pools & Spas",
            description:
              "Custom pools and spas to enhance your outdoor living space. Built to last and designed to fit your space.",
          },
          {
            title: "Paver Repairs & Maintenance",
            description:
              "Lifting/settling fixes, polymeric sand refresh, joint repairs, and sealing to extend life and color.",
          },
        ]}
      />
      <Faq3
        heading="Frequently asked questions"
        description="Answers to common questions about our hardscaping services."
        faqItems={[
          {
            id: "faq-1",
            question: "How long does a typical hardscaping project take?",
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