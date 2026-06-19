"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProjectDetail } from "@/data/projects";

interface ProjectsListProps {
  projects: ProjectDetail[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="projects-list">
      <div className="container">
        <ul className="projects-list__items" role="list">
          {projects.map((project, idx) => (
            <li
              key={project.id}
              className="projects-list__row"
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex(null)}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="projects-list__row-link"
                data-cursor-text="View"
                aria-label={`View ${project.name} case study`}
              >
                <div className="projects-list__row-index">
                  <span className="projects-list__row-index-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="projects-list__row-index-total">
                    / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="projects-list__row-main">
                  <div className="projects-list__row-heading">
                    <h3 className="projects-list__row-name heading upper fw-bold">
                      {project.name}
                    </h3>
                    <span className="projects-list__row-category">
                      {project.category}
                    </span>
                  </div>

                  <p className="projects-list__row-summary">{project.summary}</p>

                  <div className="projects-list__row-tags" aria-label="Services">
                    {project.services.map((service) => (
                      <span key={service} className="projects-list__row-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects-list__row-media">
                  <div className="projects-list__row-thumb-wrap">
                    <img
                      src={project.cover}
                      alt={`${project.name} cover`}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="projects-list__row-thumb"
                    />
                  </div>

                  <div className="projects-list__row-meta">
                    <div className="projects-list__row-meta-row">
                      <span className="projects-list__row-meta-label">Year</span>
                      <span className="projects-list__row-meta-value">{project.year}</span>
                    </div>
                    <div className="projects-list__row-meta-row">
                      <span className="projects-list__row-meta-label">Client</span>
                      <span className="projects-list__row-meta-value">{project.client}</span>
                    </div>
                  </div>

                  <span className="projects-list__row-cta cl-txt-orange">
                    View case study
                    <span className="ic-arr-wrap ic-20" style={{ "--size": 1.6 } as React.CSSProperties}>
                      <span className="arr-main ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path
                            d="M14.375 5.625L5.625 14.375"
                            stroke="currentColor"
                            strokeWidth="1.875"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.25 5H15V13.75"
                            stroke="currentColor"
                            strokeWidth="1.875"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                      <span className="arr-clone ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path
                            d="M14.375 5.625L5.625 14.375"
                            stroke="currentColor"
                            strokeWidth="1.875"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.25 5H15V13.75"
                            stroke="currentColor"
                            strokeWidth="1.875"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}