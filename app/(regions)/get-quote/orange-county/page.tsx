import type { Metadata } from "next";
import { RegionPpcLanding } from "@/components/regions/ppc/RegionPpcLanding";

export const metadata: Metadata = {
  title: "Orange County Landscaping & Hardscaping | Free Quote | Xenoscapers",
  description:
    "Get a free quote for modern, drought-friendly landscaping and hardscaping in Orange County. Design + build by Xenoscapers.",
  alternates: { canonical: "https://xenoscapers.com/get-quote/orange-county" },
};

export default function OrangeCountyPpcPage() {
  return (
    <RegionPpcLanding
      region="Orange County"
      headline="Landscaping & Hardscaping Built for Orange County Living"
      subheadline="From curb appeal to backyard entertaining, we design and build outdoor spaces that look high-end and stay low-maintenance. One team handles everything."
      heroImage={{
        src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKpv1DM9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
        alt: "Orange County modern backyard landscaping",
      }}
      trustStats={[
        { value: "4+", label: "rated on Google & Yelp" },
        { value: "700+", label: "projects completed" },
      ]}
      projects={[
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZXyp2AFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
          alt: "Costa Mesa Xeriscape + Patio",
          title: "Costa Mesa Xeriscape",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTqQybhPuh7XvK80N26m4iGckwxtVEf1bDslRJ",
          alt: "Redesigned Courtyard",
          title: "Redesigned Courtyard",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKpv1DM9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
          alt: "Laguna Hills Pool Area",
          title: "Pool & Outdoor Kitchen",
        },
        {
          src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWLPpJO8AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
          alt: "Mission Viejo Pool Area",
          title: "Mission Viejo Pool Area",
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
          title: "Coastal & Inland Ready",
          description:
            "We select materials and plants specifically for OC conditions — salt air near the coast, heat further inland, and everything in between.",
        },
        {
          title: "One Team from Plan to Build",
          description:
            "No juggling subcontractors. Our in-house crew handles design, permitting, irrigation, planting, and hardscape installation.",
        },
        {
          title: "Drought-Friendly by Default",
          description:
            "Smart irrigation, native plantings, and water-wise design are built into every project — not an afterthought.",
        },
        {
          title: "Outdoor Living That Works",
          description:
            "Patios, outdoor kitchens, fire pits, and turf areas designed around how you actually use your yard.",
        },
        {
          title: "Transparent Scope & Pricing",
          description:
            "You get a detailed plan with clear deliverables and pricing before work starts. No change-order surprises.",
        },
        {
          title: "Built to Last",
          description:
            "Commercial-grade pavers, proper drainage, and quality plantings selected to hold up to OC sun, use, and time.",
        },
      ]}
      testimonials={[
        {
          quote: "They transformed our backyard into a space we actually want to spend time in. The design is clean and the workmanship is solid.",
          name: "Karen & Steve L.",
          location: "Irvine",
        },
        {
          quote: "Smart irrigation cut our water bill significantly, and the yard looks better than we imagined. Organized process from day one.",
          name: "Mike P.",
          location: "Newport Beach",
        },
        {
          quote: "We got a complete front and back yard overhaul. The crew was respectful, on time, and the result speaks for itself.",
          name: "Jennifer W.",
          location: "Mission Viejo",
        },
      ]}
      faq={[
        {
          question: "What areas of Orange County do you serve?",
          answer:
            "We serve all of OC including Irvine, Newport Beach, Tustin, Costa Mesa, Laguna Niguel, Mission Viejo, and surrounding communities.",
        },
        {
          question: "Do you handle both front and back yard projects?",
          answer:
            "Yes. Most clients have us plan the full property — curb appeal up front, living space in the back, and connected hardscape throughout.",
        },
        {
          question: "Can I combine patio work with new planting?",
          answer:
            "Absolutely. Blended scopes are our specialty — hardscape surfaces, planting design, irrigation, lighting, and finishing details in one build.",
        },
        {
          question: "How do I get started?",
          answer:
            "Fill out the form above or call us. We follow up within one business day to discuss your goals and schedule your on-site consultation.",
        },
      ]}
    />
  );
}
