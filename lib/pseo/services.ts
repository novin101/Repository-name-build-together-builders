export type PseoService = {
  slug: string;
  name: string;
  category: "hardscaping" | "landscaping" | "specialty";
  relatedServiceSlugs: string[];
};

export const PSEO_SERVICES: PseoService[] = [
  {
    slug: "patio-installation",
    name: "Patio Installation",
    category: "hardscaping",
    relatedServiceSlugs: ["retaining-walls", "driveways"],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    category: "hardscaping",
    relatedServiceSlugs: ["patio-installation", "driveways"],
  },
  {
    slug: "driveways",
    name: "Driveways",
    category: "hardscaping",
    relatedServiceSlugs: ["patio-installation", "retaining-walls"],
  },
  {
    slug: "xeriscaping",
    name: "Xeriscaping",
    category: "landscaping",
    relatedServiceSlugs: ["artificial-turf", "irrigation-systems"],
  },
  {
    slug: "artificial-turf",
    name: "Artificial Turf",
    category: "landscaping",
    relatedServiceSlugs: ["xeriscaping", "irrigation-systems"],
  },
  {
    slug: "irrigation-systems",
    name: "Irrigation Systems",
    category: "specialty",
    relatedServiceSlugs: ["xeriscaping", "artificial-turf"],
  },
];

export function getServiceBySlug(slug: string): PseoService | undefined {
  return PSEO_SERVICES.find((service) => service.slug === slug);
}

