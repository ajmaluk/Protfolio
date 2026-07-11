import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";

export const metadata: Metadata = {
  title: "Projects | Valentin Cheval",
  description:
    "Case studies of product design, branding, and strategy work for financial, crypto, and Web3 clients.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="wrapper">
      <main>
        <ProjectCarousel projects={projects} />
      </main>
    </div>
  );
}