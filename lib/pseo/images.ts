/**
 * Curated image pools sourced from existing site pages.
 * Used by PSEO templates with seeded randomization so each page gets
 * a deterministic but varied selection.
 */

export type PseoImage = { src: string; baseAlt: string };

function getImageBySrc(src: string): PseoImage | undefined {
  return [...LANDSCAPING_IMAGES, ...HARDSCAPING_IMAGES, ...PROJECT_IMAGES].find((img) => img.src === src);
}

/** Landscaping-oriented images */
export const LANDSCAPING_IMAGES: PseoImage[] = [
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv50fGRToUJKSbIGHcin30lkxCt5QujOdhXPD",
    baseAlt: "Landscaped yard with patio and planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTv0gfV9ToUJKSbIGHcin30lkxCt5QujOdhXPD",
    baseAlt: "Garden beds with lawn and planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAzGxmND4WGYBhr65flpyvsK9z7FxZTRD0L2E",
    baseAlt: "Turf lawn installation",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZrUq6DFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
    baseAlt: "Xeriscape landscape with native plants",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTzPvvqsno1SE29aK3MzVjXmAZC8Bx5D6wYfyN",
    baseAlt: "Native drought-tolerant planting bed",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTwVQ73oJs2SQp10JvUOVZ8ILNxBedEj9XFbwD",
    baseAlt: "Permeable gravel path and patio surface",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHeuN4MBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
    baseAlt: "Drip irrigation system for planting beds",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTLF9hA0grTAPvkbWq06ReO3lGMhtBjo8pzIS5",
    baseAlt: "Rainwater swale and basin for runoff capture",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTlvxM1YXGHRg735V9a1xXIpOyi6fwthTYDGSl",
    baseAlt: "Low-water lawn and garden planting",
  },
];

/** Hardscaping-oriented images */
export const HARDSCAPING_IMAGES: PseoImage[] = [
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTVlmB9SXYpPtuzO2ZS60I1U73diaF8BJGHlMw",
    baseAlt: "Paver patio with clean edges and walkway",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT1J5WjSmkFyLOmHIuwgepErKR3jVoBC6vcNYS",
    baseAlt: "Retaining wall and hardscape masonry",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAX3RTwID4WGYBhr65flpyvsK9z7FxZTRD0L2",
    baseAlt: "Paver driveway and walkway installation",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTUZQ2g0w7h9SXgKzmfP1B82WHvkQI3VGFwJ4N",
    baseAlt: "Backyard patio with seating area",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHw9s2MBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
    baseAlt: "Outdoor kitchen with fire feature and seating",
  },
];

/** General project / hero images */
export const PROJECT_IMAGES: PseoImage[] = [
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWQ7yw58AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
    baseAlt: "Modern backyard xeriscape with patio",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKpv1DM9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
    baseAlt: "Modern backyard with patio and xeriscape planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTFYpctOIPIHBCyzuKAW0ejUXG7fNw1OvSDgp9",
    baseAlt: "Hillside stairway with xeriscape planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTziY88Zno1SE29aK3MzVjXmAZC8Bx5D6wYfyN",
    baseAlt: "Modern patio with turf lawn and seating",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTpjFwfgAxYlsQA4bi1agnPfLdtTuO2h3CVHUk",
    baseAlt: "Hillside paver driveway with stone steps",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZXyp2AFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
    baseAlt: "Xeriscape planting with modern paver patio",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTqQybhPuh7XvK80N26m4iGckwxtVEf1bDslRJ",
    baseAlt: "Redesigned courtyard with central fountain",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWLPpJO8AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
    baseAlt: "Pool area with outdoor kitchen and seating",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTm5DAP0bwPg1yCdZhscAXL6t4YTENkO7mWnuR",
    baseAlt: "Backyard hardscape and planting transformation",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgLIkfeMBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
    baseAlt: "Outdoor living space with hardscape and planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTrksdKdTq5dgn8JWqosAzNPLaYXVcCSyH74xi",
    baseAlt: "Patio with surrounding landscape planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTJNij0s50BRg5vyD9PsnCaZpWlTSh6OKzdEoQ",
    baseAlt: "Family-friendly backyard with lawn and hardscape",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTKPWant9h7oQtTiaq2AxVS6rz9eflgkYXRZ5v",
    baseAlt: "Modern landscape design with clean lines",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTfVKqKZeO6uThzNiCA5qWslKYydGeQvBr1aSZ",
    baseAlt: "Residential landscape with planting and hardscape",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTrWcitAq5dgn8JWqosAzNPLaYXVcCSyH74xit",
    baseAlt: "Garden walkway with planting beds",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTjKGQEvWoatOnVQbKvxpjBGLD3mZilJq4z6wW",
    baseAlt: "Outdoor entertaining space with seating and hardscape",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT5UUI4lROtRFEPH3Takn2vIWDly7pQ49cKboi",
    baseAlt: "Backyard landscape with patio and planting",
  },
  {
    src: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTtKkC2G3v9ZPwcTrN8ElDRUGY7ysjiAfnp2CM",
    baseAlt: "Contemporary yard with hardscape and planting",
  },
];

/**
 * Primary images for service cards (more accurate than category-level random picks).
 * Keep these aligned with core service/region page imagery.
 */
const PRIMARY_SERVICE_IMAGE_SRC: Record<string, string> = {
  "patio-installation": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTUZQ2g0w7h9SXgKzmfP1B82WHvkQI3VGFwJ4N",
  "retaining-walls": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGT1J5WjSmkFyLOmHIuwgepErKR3jVoBC6vcNYS",
  "driveways": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAX3RTwID4WGYBhr65flpyvsK9z7FxZTRD0L2",
  "xeriscaping": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZrUq6DFWF96uocbM7gaz0wAiqE5y8hDPJkLX",
  "artificial-turf": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTAzGxmND4WGYBhr65flpyvsK9z7FxZTRD0L2E",
  "irrigation-systems": "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTgHeuN4MBYQxTZWhOUK1n2NbPf70cDm4y5VEA",
};

export function getPrimaryServiceImage(
  serviceSlug: string,
  altSuffix: string,
): { src: string; alt: string } | undefined {
  const src = PRIMARY_SERVICE_IMAGE_SRC[serviceSlug];
  if (!src) return undefined;

  const img = getImageBySrc(src);
  const baseAlt = img?.baseAlt ?? "Outdoor project";
  return { src, alt: `${baseAlt} in ${altSuffix}` };
}

/**
 * Simple seeded shuffle so the same slug always gets the same image order,
 * but different slugs get different arrangements.
 */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const copy = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  for (let i = copy.length - 1; i > 0; i--) {
    hash = (hash * 16807 + 1) | 0;
    const j = ((hash >>> 0) % (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick N images from a pool, seeded by slug, with contextual alt text. */
export function pickImages(
  pool: PseoImage[],
  count: number,
  seed: string,
  altSuffix: string,
): { src: string; alt: string }[] {
  const shuffled = seededShuffle(pool, seed);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((img) => ({
    src: img.src,
    alt: `${img.baseAlt} in ${altSuffix}`,
  }));
}

/** Get images appropriate for a service category. */
export function getServiceImages(
  category: "hardscaping" | "landscaping" | "specialty",
  count: number,
  seed: string,
  altSuffix: string,
) {
  const pool = category === "hardscaping"
    ? [...HARDSCAPING_IMAGES, ...PROJECT_IMAGES]
    : category === "landscaping"
      ? [...LANDSCAPING_IMAGES, ...PROJECT_IMAGES]
      : [...PROJECT_IMAGES, ...LANDSCAPING_IMAGES, ...HARDSCAPING_IMAGES];
  return pickImages(pool, count, seed, altSuffix);
}
