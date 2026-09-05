import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import { AmazonClickTracker } from "@/components/AmazonClickTracker";
import { BottomNav } from "@/components/BottomNav";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { ElinProvider } from "@/components/elin/ElinProvider";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { GA_CONSENT_STORAGE_KEY } from "@/lib/consent";
import { defaultOgImage } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/site-schema";
import "./globals.css";

/**
 * Google Analytics 4 is entirely env-driven: unset NEXT_PUBLIC_GA_ID (the
 * default until the CEO hands over a real Measurement ID) and every piece
 * below — the consent-default script, gtag.js, the cookie banner, and the
 * amazon_click listener — simply doesn't render. Zero footprint until set.
 */
const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() || undefined;

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
  // NOTE: no `alternates.canonical` here on purpose. A root-layout canonical
  // pointing at the homepage silently canonicalizes any page that forgets its
  // own metadata to "/". Every public page sets its own canonical via
  // createSeoMetadata; the home canonical lives in app/page.tsx.
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {gaId ? (
          // Google Consent Mode v2 default — MUST run before gtag.js's own
          // config call so GA starts in denied mode for first-time visitors.
          // beforeInteractive is hoisted into <head> and runs pre-hydration,
          // guaranteed to execute before @next/third-parties' afterInteractive
          // scripts below. Also defines a global gtag()/dataLayer shim early
          // so amazon_click events queue correctly even if a click happens
          // before gtag.js has finished downloading.
          <Script
            id="ga-consent-default"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var granted = false;
  try {
    var raw = window.localStorage.getItem(${JSON.stringify(GA_CONSENT_STORAGE_KEY)});
    if (raw) {
      var parsed = JSON.parse(raw);
      granted = parsed && parsed.analytics === "granted";
    }
  } catch (e) {}

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: granted ? "granted" : "denied",
    wait_for_update: 500
  });
})();`,
            }}
          />
        ) : null}

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
            {/*
              WebSite + Organization (with FRAMFORM as parentOrganization and
              the responsible editor as Person) on every page — see
              lib/site-schema.ts. Content pages add their own WebPage node.
            */}
            <JsonLd data={[websiteSchema, organizationSchema]} />
            {children}
            <SiteFooter />
            <BottomNav />
          </ElinProvider>
          {gaId ? (
            <>
              <AmazonClickTracker />
              <CookieConsentBanner />
            </>
          ) : null}
        </MotionConfig>

        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
