import type { MetadataRoute } from "next";

const BASE = "https://kashish-portfolio-v2.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,              lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
