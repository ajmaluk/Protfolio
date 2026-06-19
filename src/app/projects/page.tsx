import type { Metadata } from "next";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { getAllProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Valentin Cheval",
  description:
    "Case studies of product design, branding, and strategy work for financial, crypto, and Web3 clients.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="projects-list-page">
      <section className="projects-list-intro">
        <div className="container">
          <h2 className="fix-font projects-list-intro__title grid">
            <div className="heading h2 upper fw-bold projects-list-intro__title-txt">
              <span>Projects I</span>
            </div>
            <div className="heading h2 upper fw-bold projects-list-intro__title-txt">
              <span>worked on</span>
            </div>
            <div className="heading h2 upper fw-bold cl-txt-disable projects-list-intro__title-txt">
              <span>16-25</span>
              <div className="heading h3 fw-semi cl-txt-orange copyright">&reg;</div>
            </div>
            <div className="fs-20 cl-txt-desc fw-reg projects-list-intro__title-label">
              (All projects)
            </div>
          </h2>
          <p className="projects-list-intro__lede">
            A selection of product, brand, and strategy engagements across banking,
            crypto, and Web3. Tap any project to read the case study.
          </p>
        </div>
      </section>

      <ProjectsList projects={projects} />
    </div>
  );
}