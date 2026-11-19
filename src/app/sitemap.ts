import { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aradhy-jain-portfolio.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: "2026-11-19T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/freelance`,
      lastModified: "2026-11-19T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2026-10-18T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: "2026-10-18T00:00:00.000Z",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PORTFOLIO_DATA.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified
      ? `${project.lastModified}T00:00:00.000Z`
      : "2026-11-19T00:00:00.000Z",
    changeFrequency: "monthly",
    priority: project.featured ? 0.85 : 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
