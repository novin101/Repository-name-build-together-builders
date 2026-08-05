import type { Metadata } from "next";
import { RegionPpcLanding } from "@/components/regions/ppc/RegionPpcLanding";

export const metadata: Metadata = {
  title: "Los Angeles Landscaping & Hardscaping | Free Quote | Xenoscapers",
  description:
    "Get a free quote for modern, drought-friendly landscaping and hardscaping in Los Angeles. Design + build by Xenoscapers.",
  alternates: { canonical: "https://xenoscapers.com/get-quote/los-angeles" },
};

export default function LosAngelesPpcPage() {
  return (
    <RegionPpcLanding
      region="Los Angeles"
      headline="Modern Landscaping & Hardscaping for Your LA Home"
      subheadline="We design and build drought-friendly yards, patios, and outdoor living spaces tailored to the way you actually use your home. One team, start to finish."
      heroImage={{
        src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWQ7yw58AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
        alt: "Modern Los Angeles backyard with xeriscape and patio",
      }}
      trustStats={[
        { value: "4+", label: "rated on Google & Yelp" },
        { value: "700+", label: "projects completed" },
      ]}
      projects={[
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTFYpctOIPIHBCyzuKAW0ejUXG7fNw1OvSDgp9",
          alt: "Hollywood Hills Stairway Xeriscape",
          title: "Hollywood Hills Xeriscape",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTziY88Zno1SE29aK3MzVjXmAZC8Bx5D6wYfyN",
          alt: "Beverly Hills Modern Patio",
          title: "Beverly Hills Patio",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTpjFwfgAxYlsQA4bi1agnPfLdtTuO2h3CVHUk",
          alt: "Hillside Paver Driveway",
          title: "Hillside Paver Driveway",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTlvxM1YXGHRg735V9a1xXIpOyi6fwthTYDGSl",
          alt: "Pasadena Lawn & Garden",
          title: "Pasadena Lawn & Garden",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTm5DAP0bwPg1yCdZhscAXL6t4YTENkO7mWnuR",
          alt: "Modern backyard transformation",
          title: "Backyard Transformation",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgLIkfeMBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
          alt: "Outdoor living space build",
          title: "Outdoor Living Space",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTrksdKdTq5dgn8JWqosAzNPLaYXVcCSyH74xi",
          alt: "Patio and landscape project",
          title: "Patio & Landscape",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTJNij0s50BRg5vyD9PsnCaZpWlTSh6OKzdEoQ",
          alt: "Family-friendly yard design",
          title: "Family-Friendly Yard",
        },
      ]}
      benefits={[
        {
          title: "Designed for LA Microclimates",
          description:
            "We plan around sun exposure, hillside grading, and LADWP water-wise requirements so your yard performs year-round without wasted resources.",
        },
        {
          title: "One Team from Plan to Build",
          description:
            "No juggling subcontractors. Our in-house crew handles design, permitting, irrigation, planting, and hardscape installation.",
        },
        {
          title: "Drought-Friendly by Default",
          description:
            "Every project uses native and low-water plants, smart irrigation, and durable materials chosen for Southern California conditions.",
        },
        {
          title: "Outdoor Living That Works",
          description:
            "Patios, outdoor kitchens, fire features, and seating areas designed for how you actually entertain and relax.",
        },
        {
          title: "Transparent Scope & Pricing",
          description:
            "You get a written plan with clear deliverables and pricing before any work begins. No surprises.",
        },
        {
          title: "Built to Last",
          description:
            "We use commercial-grade pavers, proper drainage, and quality plantings that hold up to sun, use, and time.",
        },
      ]}
      testimonials={[
        {
          quote: "They turned our steep Hollywood Hills lot into an actual usable backyard. We barely water it and it still looks incredible.",
          name: "Sarah M.",
          location: "Hollywood Hills",
        },
        {
          quote: "The patio and outdoor kitchen completely changed how we use our home. We are outside every weekend now.",
          name: "David & Lisa R.",
          location: "Silver Lake",
        },
        {
          quote: "Professional from start to finish. The design phase alone was worth it — they thought of things we never would have.",
          name: "James T.",
          location: "Pasadena",
        },
      ]}
      faq={[
        {
          question: "What areas of Los Angeles do you serve?",
          answer:
            "We work across LA County including Hollywood Hills, Silver Lake, Pasadena, Santa Monica, Beverly Hills, and surrounding neighborhoods.",
        },
        {
          question: "Can I combine landscaping and hardscaping in one project?",
          answer:
            "Yes, most clients do. A typical project includes planting, irrigation, pavers, turf, and outdoor living features — all handled by our team.",
        },
        {
          question: "How quickly can we get started?",
          answer:
            "After your inquiry we schedule a consultation within a few days. Project timelines vary by scope and permitting, but we move quickly once the plan is approved.",
        },
        {
          question: "Do you design for water conservation?",
          answer:
            "Absolutely. Water-wise plant palettes and efficient drip irrigation are core to every design we do in Los Angeles.",
        },
      ]}
    />
  );
}
