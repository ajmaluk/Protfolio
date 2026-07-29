import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";

export const dynamic = "force-static";

const BASE_URL = "https://ajmal.uthakkan.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const allProjects = getAllProjects();

  const projectEntries: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projectEntries,
  ];
}