import type { ProjectDetail } from "@/data/projects";

// Re-export for convenience so existing consumers can keep importing from "@/types".
export type { ProjectDetail };

/**
 * @deprecated Prefer `ProjectDetail` from `@/data/projects`. Kept for backward
 * compatibility with components that still import `Project`.
 */
export interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  description: string;
  thumbnail: string;
  cover: string;
}

export interface Testimonial {
  id: string;
  index: number;
  name: string;
  position: string;
  image: string;
  content?: string;
}

export interface Scope {
  title: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Award {
  name: string;
  year: string;
  category: string;
  logo: string;
  logoWhite: string;
  width: number;
  height: number;
}

export interface Company {
  name: string;
  logo: string;
}