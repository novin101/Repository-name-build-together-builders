import type { Metadata } from "next";
import { Contact14 } from "@/components/contact14";
import { Faq3 } from "@/components/faq3";
import { Hero100 } from "@/components/hero100";
import { FourImageFeature } from "@/components/four-image-feature";

export const metadata: Metadata = {
  title: "Xeriscaping Services | Xenoscapers",
  description:
    "Save water with low‑maintenance, climate‑smart xeriscapes — native plants, permeable hardscapes, and smart irrigation for resilient yards.",
  alternates: { canonical: "https://xenoscapers.com/landscaping/xeriscaping" },
};

export default function XeriscapingPage() {
  return (
    <main>
      <Hero100
        eyebrow="Xeriscaping Services"
        title="Save water with low-maintenance, climate-smart landscapes."
        description="Xeriscaping is a landscaping practice that uses native plants and water-efficient techniques to reduce water usage and maintenance costs."
        image={{
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZrUq6DFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
          alt: "Xeriscaping",
        }}
      />
      <FourImageFeature
        badge={{ text: "Xeriscaping essentials" }}
        title="Beautiful, water-wise ideas for your yard"
        description="See practical ways we combine native plants, permeable hardscapes, and smart irrigation."
        items={[
          {
            image: { src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTzPvvqsno1SE29aK3MzVjXmAZC8Bx5D6wYfyN", alt: "Native desert planting" },
            title: "Native, drought-tolerant planting",
            description: "Colorful, low-water species suited to Arizona climates.",
          },
          {
            image: { src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTwVQ73oJs2SQp10JvUOVZ8ILNxBedEj9XFbwD", alt: "Permeable path" },
            title: "Permeable paths & patios",
            description: "Stone and gravel surfaces that allow water to soak in.",
          },
          {
            image: { src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHeuN4MBYQxTZWhOUK1n2NbPf70cDm4y5VEA", alt: "Drip irrigation" },
            title: "Efficient drip irrigation",
            description: "Targeted watering to keep plants healthy with less waste.",
          },
          {
            image: { src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTLF9hA0grTAPvkbWq06ReO3lGMhtBjo8pzIS5", alt: "Rain harvesting basin" },
            title: "Rain capture & grading",
            description: "Swales and basins direct rainfall where it’s needed most.",
          },
        ]}
      />
      <Faq3
        heading="Frequently asked questions"
        description="Answers to common questions about our xeriscaping services."
        faqItems={[
          {
            id: "faq-1",
            question: "What is xeriscaping?",
            answer: "Xeriscaping is a landscaping practice that uses native plants and water-efficient techniques to reduce water usage and maintenance costs.",
          },
          {
            id: "faq-2",
            question: "What are the benefits of xeriscaping?",
            answer: "The benefits of xeriscaping include reducing water usage, maintenance costs, and the use of non-native plants.",
          },
        ]}
      />
      <Contact14 />
    </main>
  );
}