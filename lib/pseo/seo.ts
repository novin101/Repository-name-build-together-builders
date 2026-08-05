import type { Metadata } from "next";

const SITE_URL = "https://xenoscapers.com";

function toAbsoluteCanonical(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function buildPseoTitle(serviceName: string, cityName: string): string {
  return `${serviceName} in ${cityName}, CA | Xenoscapers`;
}

export function buildPseoDescription(serviceName: string, cityName: string): string {
  return `Professional ${serviceName.toLowerCase()} in ${cityName}, CA. Request a free quote from Xenoscapers for design and build services.`;
}

export function buildPseoMetadata(serviceName: string, cityName: string, canonicalPath: string): Metadata {
  return {
    title: buildPseoTitle(serviceName, cityName),
    description: buildPseoDescription(serviceName, cityName),
    alternates: { canonical: toAbsoluteCanonical(canonicalPath) },
  };
}

