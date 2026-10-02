import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://rippletrend.co.ke";
  return [
    { url, lastModified: new Date() },
    { url: `${url}/about`, lastModified: new Date() },
    { url: `${url}/portfolio`, lastModified: new Date() },
    ...projects.map(({ slug }) => ({ url: `${url}/portfolio/${slug}`, lastModified: new Date() })),
  ];
}
