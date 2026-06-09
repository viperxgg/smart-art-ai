import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.brand,
  authors: [{ name: siteConfig.brand, url: siteConfig.url }],
  keywords: [
    "Elins val",
    "Elins TikTok val",
    "TikTok produkter Sverige",
    "Amazon fynd Sverige",
    "ärliga produktkommentarer",
    "personliga produktval",
    "Smart Art AI",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "aTHN509IdCtzET1SonsjMoBtepa8D7q2BZbQ6NEEFaY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#151412" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "sv-SE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
