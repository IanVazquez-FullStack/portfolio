import type { MetadataRoute } from "next";

const SITE_URL = "https://portfolio-blue-three-92.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
