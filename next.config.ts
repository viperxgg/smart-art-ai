import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.8.127"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [48, 64, 96, 160, 256, 384, 480],
    qualities: [66, 70, 72, 75],
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
