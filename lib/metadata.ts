import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type SeoImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type SeoMetadataInput = {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: SeoImage;
  robots?: Metadata["robots"];
};

export const defaultOgImage: SeoImage = {
  url: `${siteConfig.url}/og/elin-og.jpg`,
  width: 1200,
  height: 630,
  alt: "Elin från Elins val",
};

export function createSeoMetadata({
  title,
  description,
  url,
  type = "article",
  image = defaultOgImage,
  robots,
}: SeoMetadataInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    robots,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "sv_SE",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
