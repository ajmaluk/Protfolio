"use client";

import Link from "next/link";
import type { ProjectDetail } from "@/data/projects";

interface ProjectNavProps {
  next?: ProjectDetail;
  prev?: ProjectDetail;
  count: number;
  currentIndex: number;
}

export function ProjectNav({ next, prev, count, currentIndex }: ProjectNavProps) {
  return (
    <nav className="projects-detail__nav" aria-label="Project navigation">
      <div className="container">
        <div className="projects-detail__nav-inner">
          <div className="projects-detail__nav-side projects-detail__nav-side--prev">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="projects-detail__nav-link" aria-label={`Previous project: ${prev.name}`}>
                <span className="projects-detail__nav-direction" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 10H2M10 2L2 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">Previous project</span>
                  <span className="projects-detail__nav-name heading h4 upper fw-bold">
                    {prev.name}
                  </span>
                </span>
              </Link>
            ) : (
              <Link href="/projects" className="projects-detail__nav-link" aria-label="View all projects">
                <span className="projects-detail__nav-direction" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 10H2M10 2L2 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">Portfolio</span>
                  <span className="projects-detail__nav-name heading h4 upper fw-bold">
                    All Projects
                  </span>
                </span>
              </Link>
            )}
          </div>

          <div className="projects-detail__nav-counter">
            <Link href="/projects" className="projects-detail__nav-counter-link" aria-label="View all projects">
              <span className="projects-detail__nav-counter-current">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="projects-detail__nav-counter-total">
                / {String(count).padStart(2, "0")}
              </span>
            </Link>
          </div>

          <div className="projects-detail__nav-side projects-detail__nav-side--next">
            {next ? (
              <Link href={`/projects/${next.slug}`} className="projects-detail__nav-link projects-detail__nav-link--right" aria-label={`Next project: ${next.name}`}>
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">Next project</span>
                  <span className="projects-detail__nav-name heading h4 upper fw-bold">
                    {next.name}
                  </span>
                </span>
                <span className="projects-detail__nav-direction" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10H18M10 2L18 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ) : (
              <Link href="/projects" className="projects-detail__nav-link projects-detail__nav-link--right" aria-label="View all projects">
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">Portfolio</span>
                  <span className="projects-detail__nav-name heading h4 upper fw-bold">
                    All Projects
                  </span>
                </span>
                <span className="projects-detail__nav-direction" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10H18M10 2L18 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
