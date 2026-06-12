import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { ProductDiscoveryLanding } from "@/components/ProductDiscoveryLanding";
import { featuredProduct } from "@/lib/products";
import { siteConfig } from "@/lib/site";

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
    images: [
      {
        url: `${siteConfig.url}${featuredProduct.image}`,
        width: 1024,
        height: 1024,
        alt: featuredProduct.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${featuredProduct.image}`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: featuredProduct.title,
  brand: featuredProduct.brand,
  sku: featuredProduct.asin,
  image: `${siteConfig.url}${featuredProduct.image}`,
  description: featuredProduct.summary,
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, productSchema]} />
      <ProductDiscoveryLanding />
    </>
  );
}
