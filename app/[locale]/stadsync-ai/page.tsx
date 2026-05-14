import StadSyncAI from "@/components/stadsync_ai";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";
import {
  getStadSyncServiceSchema,
  getStadSyncSoftwareSchema,
  getStadSyncKeywordItemListSchema,
  getStadSyncWebPageSchema,
  stadSyncFaqItems,
} from "@/lib/stadsync-seo";
import { getAbsoluteUrl, type AppLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return buildMetadata({
    locale,
    pathname: "/stadsync-ai",
    title:
      locale === "sv"
        ? "StädSync AI | RUT-automation och driftplattform för städföretag"
        : "StädSync AI | RUT Automation Platform for Cleaning Companies",
    description:
      locale === "sv"
        ? "Automatisera RUT, AI-översättning, arbetsflöden och GDPR-säker drift för svenska städföretag. Paket från 999 kr/mån."
        : "Automate RUT, AI translation, workflows, and GDPR-ready operations for Swedish cleaning companies. Packages from 999 kr/month.",
    keywords: [
      "StädSync AI",
      "RUT automation",
      "RUT XML Skatteverket",
      "städföretag system",
      "affärssystem för städföretag",
      "programvara för städföretag",
      "schemaläggning städföretag",
      "tidrapportering städföretag",
      "RUT export Skatteverket",
      "personnummer GDPR RUT",
      "AI översättning städpersonal",
      "AI arbetsledning",
      "Smart Art Ai",
    ],
    noIndex: true,
  });
}

export default async function StadSyncAIPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd
        data={[
          getStadSyncSoftwareSchema(locale),
          getStadSyncServiceSchema(locale),
          getStadSyncWebPageSchema(locale),
          getStadSyncKeywordItemListSchema(locale),
          getFaqSchema(stadSyncFaqItems[locale]),
          getBreadcrumbSchema([
            {
              name: locale === "sv" ? "Start" : "Home",
              url: getAbsoluteUrl("/", locale),
            },
            {
              name: "StädSync AI",
              url: getAbsoluteUrl("/stadsync-ai", locale),
            },
          ]),
        ]}
      />
      <StadSyncAI locale={locale} />
    </>
  );
}
