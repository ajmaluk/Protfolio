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
          <div className="projects-detail__nav-side">
            <Link href="/" className="projects-detail__nav-link" aria-label="Back to home">
              <span className="projects-detail__nav-direction" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10H18M10 2L2 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="projects-detail__nav-meta">
                <span className="projects-detail__nav-label">Home</span>
              </span>
            </Link>
          </div>

          <div className="projects-detail__nav-side projects-detail__nav-side--prev">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="projects-detail__nav-link" aria-label={`Previous project: ${prev.name}`}>
                <span className="projects-detail__nav-direction" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.4 8.00003H2M9.79997 3.80005L14 8.00003L9.79997 12.2" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
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
              <div className="projects-detail__nav-link projects-detail__nav-link--disabled" aria-hidden="true">
                <span className="projects-detail__nav-direction" />
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">No more projects</span>
                </span>
              </div>
            )}
          </div>

          <div className="projects-detail__nav-counter">
            <span className="projects-detail__nav-counter-current">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="projects-detail__nav-counter-total">
              / {String(count).padStart(2, "0")}
            </span>
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
                    <path d="M6.6 8.00003H18M10.2 3.80005L6 8.00003L10.2 12.2" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ) : (
              <div className="projects-detail__nav-link projects-detail__nav-link--right projects-detail__nav-link--disabled" aria-hidden="true">
                <span className="projects-detail__nav-meta">
                  <span className="projects-detail__nav-label">End of projects</span>
                </span>
                <span className="projects-detail__nav-direction" />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
