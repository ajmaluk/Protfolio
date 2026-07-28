import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Projects | Ajmal U K",
  description:
    "Projects and case studies by Muhammed Ajmal U K — AI tools, full-stack web apps, mobile games, and developer platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="wrapper">
      <main id="swup" className="page transition-fade" data-namespace="projects" data-infinite>
        <ProjectsSection isProjectsPage={true} />
        <FooterSection />
      </main>
    </div>
  );
}