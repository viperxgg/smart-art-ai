import HomePageV2 from "@/components/home_page_v2";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, getServiceSchema } from "@/lib/seo";
import type { AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/",
    title:
      locale === "sv"
        ? "Smart Art Ai | Hållbara AI-lösningar för digital drift"
        : "Smart Art Ai | Sustainable AI solutions for digital operations",
    description:
      locale === "sv"
        ? "Smart Art Ai utvecklar hållbara och intelligenta SaaS-lösningar för att optimera framtidens verksamheter."
        : "Smart Art Ai develops sustainable and intelligent SaaS solutions that optimize the businesses of tomorrow.",
    keywords: [
      "Smart Art Ai",
      "AI-lösningar Sverige",
      "SaaS automation",
      "hållbar digital drift",
    ],
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd
        data={getServiceSchema({
          locale,
          name: "Smart Art Ai",
          description:
            locale === "sv"
              ? "Hållbara och intelligenta SaaS-lösningar för digitala operationer."
              : "Sustainable and intelligent SaaS solutions for digital operations.",
          serviceType: locale === "sv" ? "AI och SaaS-lösningar" : "AI and SaaS solutions",
          pathname: "/",
        })}
      />
      <HomePageV2 />
    </>
  );
}
