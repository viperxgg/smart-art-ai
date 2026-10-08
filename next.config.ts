import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// GA4 is env-driven (see app/layout.tsx): only widen the CSP for Google's
// domains when a Measurement ID is actually configured, so the allow-list
// stays minimal while NEXT_PUBLIC_GA_ID is unset.
const hasGoogleAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID?.trim());

// Content-Security-Policy tuned for this app: Next.js (inline bootstrap
// scripts), framer-motion (inline styles), next/image (local images),
// same-origin Elin chat stream, and Cloudflare Turnstile. `script-src` keeps
// 'unsafe-inline' as a pragmatic baseline (no user-controlled HTML reaches the
// DOM — React escapes everything and JSON-LD is escaped); the hardened target
// is nonce-based script-src. 'unsafe-eval'/ws: are added only in dev for HMR.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com${hasGoogleAnalytics ? " https://www.googletagmanager.com" : ""}`,
  "frame-src 'self' https://challenges.cloudflare.com",
  `connect-src 'self' https://challenges.cloudflare.com${hasGoogleAnalytics ? " https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com" : ""}${isDev ? " ws:" : ""}`,
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.8.127"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [48, 64, 96, 160, 256, 384, 480],
    qualities: [66, 70, 72, 75],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Dated product URLs reported by Search Console on 2026-10-08.
      { source: "/halsa/eltandborste-2026-06-27", destination: "/halsa/eltandborste", permanent: true },
      { source: "/halsa/hygrometer-2026-06-27", destination: "/halsa/hygrometer", permanent: true },
      { source: "/halsa/luftrenare-2026-06-26", destination: "/halsa/luftrenare", permanent: true },
      { source: "/halsa/motiverande-vattenflaska-2026-06-27", destination: "/halsa/motiverande-vattenflaska", permanent: true },
      { source: "/halsa/termos-2026-06-27", destination: "/halsa/termos", permanent: true },
      { source: "/skonhet/bikinitrimmer-2026-06-27", destination: "/skonhet/bikinitrimmer", permanent: true },
      { source: "/skonhet/fotpuder-2026-06-27", destination: "/skonhet/fotpuder", permanent: true },
      { source: "/skonhet/rakgel-2026-06-27", destination: "/skonhet/rakgel", permanent: true },
      { source: "/skonhet/vaxremsor-2026-06-27", destination: "/skonhet/vaxremsor", permanent: true },
      { source: "/sommar/resa/frottehandduk-2026-07-07", destination: "/sommar/resa/frottehandduk", permanent: true },
      { source: "/sommar/resa/hangande-necessar-2026-07-05", destination: "/sommar/resa/hangande-necessar", permanent: true },
      { source: "/sommar/resa/kabinvaska-2026-07-07", destination: "/sommar/resa/kabinvaska", permanent: true },
      { source: "/sommar/resa/kylbox-2026-07-08", destination: "/sommar/resa/kylbox", permanent: true },
      { source: "/sommar/resa/mobilhallare-ventil-2026-07-08", destination: "/sommar/resa/mobilhallare-ventil", permanent: true },
      { source: "/sommar/resa/reseflaskor-2026-07-05", destination: "/sommar/resa/reseflaskor", permanent: true },
      { source: "/sommar/resa/resryggsack-2026-07-07", destination: "/sommar/resa/resryggsack", permanent: true },
      { source: "/sommar/resa/skopasar-2026-07-05", destination: "/sommar/resa/skopasar", permanent: true },
      { source: "/sommar/resa/tvattpase-2026-07-05", destination: "/sommar/resa/tvattpase", permanent: true },
      { source: "/traning/loparbalte-2026-07-08", destination: "/traning/loparbalte", permanent: true },
      {
        source: "/",
        has: [{ type: "host", value: "smartartai.se" }],
        destination: "https://www.smartartai.se/",
        statusCode: 308,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "smartartai.se" }],
        destination: "https://www.smartartai.se/:path*",
        statusCode: 308,
      },
      {
        source: "/",
        has: [
          { type: "host", value: "www.smartartai.se" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.smartartai.se/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.smartartai.se" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.smartartai.se/:path*",
        statusCode: 301,
      },
      {
        source: "/en",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/en/om-oss",
        destination: "/om-oss",
        statusCode: 301,
      },
      {
        source: "/product/traningsband-4-nivaer",
        destination: "/traning/traningsband-naturlatex",
        statusCode: 301,
      },
      {
        source: "/review/traningsband-4-nivaer",
        destination: "/traning/traningsband-naturlatex",
        statusCode: 301,
      },
      {
        source: "/product/traningsband-4-nivaer/ugc",
        destination: "/traning/traningsband-naturlatex",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
