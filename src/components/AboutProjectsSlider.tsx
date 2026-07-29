"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export function AboutProjectsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -510 : 510;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="about__projects-slider-section">
      <div className="container">
        <div className="about__projects-slider-header">
          <div>
            <p className="about__section-label heading h5 upper fw-med cl-txt-disable">
              Featured Projects &amp; Work
            </p>
            <h2 className="heading h3 upper fw-bold cl-txt-title">
              Crafted Products
            </h2>
          </div>
          <div className="about__projects-slider-controls">
            <button
              type="button"
              className="about__projects-slider-arrow"
              onClick={() => scroll("left")}
              aria-label="Scroll projects left"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 10H2M10 2L2 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="about__projects-slider-arrow"
              onClick={() => scroll("right")}
              aria-label="Scroll projects right"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 10H18M10 2L18 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="about__projects-slider-wrap">
          <div ref={sliderRef} className="about__projects-slider">
            {projectsData.map((project) => (
              <div key={project.id} className="about__project-card">
                <div className="about__project-card-img-wrap">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="about__project-card-img"
                  />
                  <span className="about__project-card-badge">{project.category}</span>
                </div>
                <div className="about__project-card-body">
                  <div className="about__project-card-meta">
                    <span className="cl-txt-orange fs-12 fw-med upper">{project.year}</span>
                    <span className="cl-txt-disable fs-12">•</span>
                    <span className="cl-txt-desc fs-12">{project.client}</span>
                  </div>
                  <h3 className="about__project-card-title heading h5 fw-bold cl-txt-title">
                    {project.name}
                  </h3>
                  <p className="about__project-card-desc cl-txt-sub fs-14">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="about__project-card-link"
                  >
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
