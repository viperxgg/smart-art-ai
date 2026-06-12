import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/om-oss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteConfig.url}/integritetspolicy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cookies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/kategorier`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.55,
    },
    {
      url: `${siteConfig.url}/elins-val`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.65,
    },
    {
      url: `${siteConfig.url}/traning`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/traning/traningsband-naturlatex`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/halsa`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/halsa/massagepistol`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/halsa/massagepistol/beurer-mg-99`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/halsa/massagepistol/kraftfull`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/skonhet/plattang`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/skonhet/plattang/remington-s8540`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/plattang/remington-mini-s2880`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/epilator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/skonhet/epilator/panasonic-es-ey30`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/epilator/braun-silk-epil-9`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/hartork`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/skonhet/hartork/remington-proluxe-ac9140`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/hartork/beurer-hc-25`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/locktang`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/skonhet/locktang/babyliss-c325e`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/skonhet/locktang/tymo-curlpro`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.82,
    },
  ];
}
