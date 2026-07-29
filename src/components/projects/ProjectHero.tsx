import Image from "next/image";
import Link from "next/link";
import type { ProjectDetail } from "@/data/projects";

interface ProjectHeroProps {
  project: ProjectDetail;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="projects-detail__hero">
      <div className="projects-detail__hero-img-wrap" style={{ viewTransitionName: `project-img-${project.slug}` } as React.CSSProperties}>
        <Image
          src={project.cover}
          alt={`${project.name} cover`}
          width={1920}
          height={1080}
          className="projects-detail__hero-img"
          priority
        />
      </div>

      <div className="projects-detail__hero-overlay" aria-hidden="true" />

      <div className="container projects-detail__hero-content">
        <Link href="/projects" className="projects-detail__back-link">
          <span className="projects-detail__back-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 8H2M8 2L2 8L8 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="projects-detail__back-text">All projects</span>
        </Link>

        <div className="projects-detail__hero-title-wrap">
          <p className="projects-detail__hero-category">{project.category}</p>
          <h1
            className="heading display-1 upper fw-bold projects-detail__hero-title cl-txt-title"
            style={{ viewTransitionName: `project-title-${project.slug}` } as React.CSSProperties}
          >
            {project.name}
          </h1>
          <p className="projects-detail__hero-summary">{project.summary}</p>
        </div>
      </div>
    </header>
  );
}