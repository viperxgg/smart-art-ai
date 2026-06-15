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
  url: `${siteConfig.url}/products/resistance-bands/elin-resistance-band-thumbnail.webp`,
  width: 1024,
  height: 1024,
  alt: "Person som tränar hemma med ett lila träningsband",
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
