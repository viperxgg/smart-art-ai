import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codex-2mpec9lbm-viperxggs-projects.vercel.app",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/home-page-v2", destination: "/", permanent: true },
      { source: "/en/home-page-v2", destination: "/en", permanent: true },
      { source: "/sv/home-page-v2", destination: "/", permanent: true },
      { source: "/om-oss", destination: "/nord-smart-menu", permanent: true },
      { source: "/en/about", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/sv/om-oss", destination: "/nord-smart-menu", permanent: true },
      { source: "/sv/nord-smart-menu", destination: "/nord-smart-menu", permanent: true },
      { source: "/smart-menu", destination: "/nord-smart-menu", permanent: true },
      { source: "/en/smart-menu", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/sv/smart-menu", destination: "/nord-smart-menu", permanent: true },
      { source: "/digital-meny-restaurang", destination: "/nord-smart-menu", permanent: true },
      { source: "/qr-meny-restaurang", destination: "/nord-smart-menu", permanent: true },
      { source: "/restaurang-bestallningssystem", destination: "/nord-smart-menu", permanent: true },
      { source: "/digital-meny-sverige", destination: "/nord-smart-menu", permanent: true },
      { source: "/restaurant-digital-menu", destination: "/nord-smart-menu", permanent: true },
      { source: "/restaurant-qr-menu", destination: "/nord-smart-menu", permanent: true },
      { source: "/restaurant-ordering-system", destination: "/nord-smart-menu", permanent: true },
      { source: "/restaurant-digital-menu-sweden", destination: "/nord-smart-menu", permanent: true },
      { source: "/en/digital-menu-restaurants", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/en/qr-menu-restaurant", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/en/restaurant-ordering-system", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/en/digital-menu-sweden", destination: "/en/nord-smart-menu", permanent: true },
      { source: "/sv/digital-meny-restaurang", destination: "/nord-smart-menu", permanent: true },
      { source: "/sv/qr-meny-restaurang", destination: "/nord-smart-menu", permanent: true },
      { source: "/sv/restaurang-bestallningssystem", destination: "/nord-smart-menu", permanent: true },
      { source: "/sv/digital-meny-sverige", destination: "/nord-smart-menu", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
