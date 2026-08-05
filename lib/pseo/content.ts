export type PseoContentOverride = {
  serviceSlug: string;
  citySlug: string;
  heroIntro: string;
  faq: { question: string; answer: string }[];
};

export type PseoSeedCombo = {
  serviceSlug: string;
  citySlug: string;
};

/**
 * Generate all valid service x city combinations.
 * To limit published pages, filter this list by tier or manually curate.
 */
function buildAllCombos(): PseoSeedCombo[] {
  // Lazy import to avoid circular deps at module level
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PSEO_CITIES } = require("@/lib/pseo/cities");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PSEO_SERVICES } = require("@/lib/pseo/services");
  const combos: PseoSeedCombo[] = [];
  for (const service of PSEO_SERVICES) {
    for (const city of PSEO_CITIES) {
      combos.push({ serviceSlug: service.slug, citySlug: city.slug });
    }
  }
  return combos;
}

export const PSEO_SEED_COMBOS: PseoSeedCombo[] = buildAllCombos();

export const PSEO_CONTENT_OVERRIDES: PseoContentOverride[] = [
  {
    serviceSlug: "patio-installation",
    citySlug: "beverly-hills",
    heroIntro:
      "Build a clean, durable patio in Beverly Hills with materials selected for sun exposure, drainage, and long-term use.",
    faq: [
      {
        question: "How long does a patio installation take in Beverly Hills?",
        answer:
          "Most patio builds take one to three weeks depending on access, site prep, and material selection.",
      },
      {
        question: "Do I need permits for patio work in Beverly Hills?",
        answer:
          "Beverly Hills has its own building department with premium standards - expect thorough plan review and inspections. We handle permitting as part of our process.",
      },
    ],
  },
];

export function getContentOverride(serviceSlug: string, citySlug: string): PseoContentOverride | undefined {
  return PSEO_CONTENT_OVERRIDES.find(
    (entry) => entry.serviceSlug === serviceSlug && entry.citySlug === citySlug,
  );
}

