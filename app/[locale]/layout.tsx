import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LocaleShell from "@/components/layout/LocaleShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Smart Art AI",
    template: "%s | Smart Art AI",
  },
  description:
    "Smart Art Ai utvecklar hållbara och intelligenta SaaS-lösningar för att optimera framtidens verksamheter.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    languages: {
      sv: siteConfig.url,
      en: `${siteConfig.url}/en`,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: "Smart Art AI",
    description:
      "Hållbara och intelligenta SaaS-lösningar för framtidens digitala operationer.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Art AI",
    description:
      "Svensk innovation, driven av AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[getOrganizationSchema(), getWebsiteSchema()]} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleShell>{children}</LocaleShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
