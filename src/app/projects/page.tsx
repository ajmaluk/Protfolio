import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Projects | Valentin Cheval",
  description:
    "Case studies of product design, branding, and strategy work for financial, crypto, and Web3 clients.",
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