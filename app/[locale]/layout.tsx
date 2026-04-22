import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LocaleShell from "@/components/layout/LocaleShell";
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
  title: "SmartArt AI — Automatisera din verksamhet | AI-lösningar för Sverige",
  description: "SmartArt AI bygger intelligenta webbplatser, AI-chatbotar och automationssystem som sparar upp till 70% av din administrativa tid. Boka en gratis demo idag.",
  metadataBase: new URL("https://smartartai.se"),
  openGraph: {
    title: "SmartArt AI — Automatisera din verksamhet",
    description: "Vi bygger intelligenta system som eliminerar manuellt arbete och maximerar produktivitet.",
    url: "https://smartartai.se",
    siteName: "SmartArt AI",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartArt AI — Automatisera din verksamhet",
    description: "AI-lösningar för moderna svenska företag. Spara tid, skala snabbare.",
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
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleShell>{children}</LocaleShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
