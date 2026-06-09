import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.8.127"],
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "smartartai.se" }],
        destination: "https://www.smartartai.se/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "smartartai.se" }],
        destination: "https://www.smartartai.se/:path*",
        statusCode: 301,
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
