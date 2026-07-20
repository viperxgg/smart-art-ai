import { ProductDiscoveryLanding } from "@/components/ProductDiscoveryLanding";
import { createSeoMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createSeoMetadata({
  title: "Preview | Elins val",
  description: siteConfig.description,
  url: `${siteConfig.url}/preview/elin-simple`,
  robots: {
    index: false,
    follow: false,
  },
});

export default function ElinSimplePreviewPage() {
  return <ProductDiscoveryLanding showAffiliateCtas={false} />;
}
