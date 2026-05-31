import type { MetadataRoute } from "next";

const BASE = "https://livre-blanc-esport.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const anchors = [
    "",
    "#intro",
    "#chap-1",
    "#chap-2",
    "#chap-3",
    "#chap-4",
    "#chap-5",
    "#chap-6",
    "#conclusion",
  ];
  return anchors.map((a) => ({
    url: `${BASE}/${a}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: a === "" ? 1 : 0.7,
  }));
}
