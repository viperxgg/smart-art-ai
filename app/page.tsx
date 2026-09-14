import type { Metadata } from "next";

import { ConsumerHome } from "@/components/ConsumerHome";
import { defaultOgImage } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

// Re-evaluate time-bounded homepage offer eligibility without changing price timestamps.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "sv_SE",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
};

export default function Home() {
  return <ConsumerHome />;
}
