import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

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
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com`,
  "frame-src 'self' https://challenges.cloudflare.com",
  `connect-src 'self' https://challenges.cloudflare.com${isDev ? " ws:" : ""}`,
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
