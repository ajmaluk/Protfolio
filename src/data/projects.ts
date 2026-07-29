import projectsData from "./projects.json";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export type ProjectCategory = "Full-Stack" | "AI Tools" | "Mobile & Games" | "Web Apps";

export interface ProjectDetail {
  id: string;
  slug: string;
  name: string;
  client: string;
  year: string;
  category: ProjectCategory;
  services: string[];
  summary: string;
  description: string;
  thumbnail: string;
  cover: string;
  gallery: { src: string; alt: string; caption?: string }[];
  content: ContentBlock[];
  liveUrl?: string | null;
  featured?: boolean;
  publishedAt: string;
  accentColor?: string;
}

export const projects: ProjectDetail[] = projectsData as ProjectDetail[];

export function getAllProjects(): ProjectDetail[] {
  return [...projects].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getHomeProjects(): ProjectDetail[] {
  const featured = projects.filter((p) => p.featured);
  return (featured.length > 0 ? featured : projects).slice(0, 3);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getNextProject(slug: string): ProjectDetail | undefined {
  const list = getAllProjects();
  const idx = list.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return list[idx + 1];
}

export function getPrevProject(slug: string): ProjectDetail | undefined {
  const list = getAllProjects();
  const idx = list.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return list[idx - 1];
}

export function getProjectsByCategory(category: ProjectCategory): ProjectDetail[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getFeaturedProjects(): ProjectDetail[] {
  return getAllProjects().filter((p) => p.featured);
}