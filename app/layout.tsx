import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";

import { BottomNav } from "@/components/BottomNav";
import { ElinProvider } from "@/components/elin/ElinProvider";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { defaultOgImage } from "@/lib/metadata";
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
  interactiveWidget: "resizes-content",
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
        {/*
          Site-wide framer-motion gate: reducedMotion="user" makes every
          motion.* animation (count-up, bar fill, header entrance, …) collapse
          to its end state whenever the OS/browser signals
          prefers-reduced-motion. This is the one place that wires it up —
          components don't each need to check it themselves.
        */}
        <MotionConfig reducedMotion="user">
          <a className="skip-link" href="#content">
            Hoppa till innehåll
          </a>
          <ElinProvider>
            <Header />
            <JsonLd data={websiteSchema} />
            {children}
            <SiteFooter />
            <BottomNav />
          </ElinProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
