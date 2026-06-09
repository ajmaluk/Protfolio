"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "bitmex",
    name: "Bitmex",
    thumbnail: "/images/bitmex-cover.jpg",
    year: "20",
    role: "Head of Design & Brand",
    description:
      "BitMEX is one of the key leader in centralized exchange, founded in 2014. As head of Design, I helped reposition their brand strategy.",
  },
  {
    id: "defichain",
    name: "Defichain",
    thumbnail: "/images/define-hero.jpg",
    year: "20",
    role: "Lead Product Designer",
    description:
      "DefiScan is an ERC-20 explorer solution for DefiMetachain the ethereum blockchain solution for Defichain.",
  },
  {
    id: "tymebank",
    name: "Tyme Bank",
    thumbnail: "/images/gotymebank.jpg",
    year: "20",
    role: "Lead Product Designer",
    description:
      "One of the fastest digital bank in SEA and Africa, Tyme Bank is an ambitious young bank. I worked as a lead product designer, focusing on their investment product suite and branding",
  },
]

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = projects[activeIndex]

  return (
    <section className="home__project">
      <div className="container">
        <h2 className="fix-font home__project-title grid">
          <span>Projects I</span>
          <span>worked on</span>
          <span>
            16-25<sup>®</sup>
          </span>
          <span className="home__project-title-label">(Portfolio)</span>
        </h2>

        <div className="home__project-pagination" style={{ display: "flex", gap: "0.4rem", alignItems: "baseline" }}>
          {[0, 1, 2, 3].map((num) => (
            <span
              key={num}
              className={num === 0 ? "home__project-pagination-num active" : "home__project-pagination-txt"}
            >
              {num}
            </span>
          ))}
          <span className="cl-txt-disable">/ 03</span>
        </div>

        <div className="home__project-card" style={{ display: "grid", gap: "4rem" }}>
          <div className="home__project-thumb" style={{ position: "relative", overflow: "hidden" }}>
            <div className="home__project-thumbnail-img-inner" style={{ position: "absolute", inset: 0 }}>
              <img
                src={project.thumbnail}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="home__project-info">
            <h3 className="heading h3 fw-med">{project.name}</h3>

            <p className="cl-txt-desc fw-med home__project-label">Year</p>
            <span className="home__project-year-value">{project.year}</span>

            <p className="cl-txt-desc fw-med home__project-label">Role</p>
            <span className="fs-20 cl-txt-sub">{project.role}</span>

            <p className="cl-txt-desc fw-med home__project-label">Description</p>
            <p className="fs-20 cl-txt-sub home__project-desc-txt">{project.description}</p>

            <a
              href="#"
              className="cl-txt-orange fs-20 fw-med home__project-link"
              style={{ display: "inline-flex", alignItems: "center", gap: ".8rem" }}
            >
              All projects
              <svg width="16" viewBox="0 0 20 20" fill="none">
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
            </a>
          </div>
        </div>

        <div className="home__project-dots" style={{ display: "flex", gap: "1rem" }}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={cn("home__project-dot", index === activeIndex && "home__project-dot--active")}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex && (
                <div
                  className="home__project-slide-item-progress-inner"
                  style={{
                    background:
                      "conic-gradient(var(--cl-orange) 0deg, var(--cl-orange) 0deg, rgba(255,61,0,0) 0deg, rgba(255,61,0,0) 360deg)",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
