"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    index: 1,
    name: "Dr. Sreejith S.",
    position: "Professor, Department of Computer Science",
    content: "Ajmal consistently demonstrated strong technical aptitude and a genuine passion for software development throughout his MCA studies. His projects, particularly the AI-driven ToolPix platform, showcased his ability to independently architect and deploy production-grade applications.\n\nWhat sets Ajmal apart is his practical approach to problem-solving. He doesn't just learn concepts — he builds real products with them. His commitment to clean code, user experience, and staying current with modern tech stacks is commendable.\n\nI would highly recommend Ajmal for any full-stack or AI-focused development role.",
  },
  {
    index: 2,
    name: "Rahul K.",
    position: "Batchmate & Project Collaborator",
    content: "Working alongside Ajmal on several academic and side projects has been a fantastic experience. He has a rare combination of technical depth and product-minded thinking.\n\nAjmal led the development of Explore Together, our full-stack travel planning project, where he handled everything from database architecture to front-end implementation. His ability to break down complex requirements into deliverable features is impressive.\n\nBeyond code, Ajmal is a great team player — always ready to help debug an issue, review a pull request, or brainstorm a better approach. I've learned a lot from working with him.",
  },
  {
    index: 3,
    name: "Anoop Mathew",
    position: "Freelance Product Designer",
    content: "I collaborated with Ajmal on the UI/UX improvement of ToolPix. His understanding of user flows and accessibility considerations really stood out — he doesn't just build functional tools, he thinks deeply about who will use them and how.\n\nAjmal is proactive about feedback and always pushes for the best possible outcome. He bridges the gap between design and development naturally, which made our collaboration seamless.\n\nHis ability to iterate quickly while maintaining quality is rare. I'd happily work with him again.",
  },
  {
    index: 4,
    name: "Fathima N.",
    position: "MCA Student & Open Source Contributor",
    content: "Ajmal is one of the most driven developers I know. He's constantly exploring new technologies and building practical projects. What I admire most is his discipline — he ships consistently and maintains high code quality.\n\nI've seen him juggle MCA coursework while developing and publishing a complete mobile game (KallanCop) on the Google Play Store. That kind of dedication and execution ability is what sets him apart.\n\nHe's also generous with knowledge-sharing. Whenever someone in our cohort had a technical question, Ajmal would take the time to explain concepts clearly. He's going to be a fantastic engineer.",
  },
  {
    index: 5,
    name: "Vishnu P.",
    position: "Full-Stack Developer @ Techfirm",
    content: "I've followed Ajmal's work from his early Node.js projects to his current AI integrations. His growth trajectory has been remarkable.\n\nWhat stands out to me is his ability to work across the entire stack — from setting up cloud infrastructure to writing clean front-end components. His ToolPix platform handles everything from image processing to PDF manipulation with a polished UX.\n\nAjmal's understanding of SEO, deployment, and production optimization shows that he thinks beyond just writing code. He builds systems that work in the real world.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)

  const pad = (n: number) => String(n).padStart(2, "0")

  const handleClick = (idx: number) => {
    setActiveIndex(idx)
    setExpanded(expanded === idx ? null : idx)
  }

  return (
    <div className="home__testi-wrap">
      <section className="home__testi">
        <div className="container">
          <h2 className="home__testi-title">
            <span className="heading h2 upper fw-bold home__testi-title-row">
              What people say
            </span>
            <span className="home__testi-title-last-row">
              <span className="heading h2 upper fw-bold">About me</span>
              <span className="home__testi-title-dot">.</span>
            </span>
            <div className="home__testi-title-meta">
              <span className="home__testi-pagination">
                <span className="cl-txt-title">{pad(activeIndex + 1)}</span>
                <span className="cl-txt-disable"> / {pad(testimonials.length)}</span>
              </span>
              <span className="fs-20 fw-reg home__testi-title-label">(Testimonials)</span>
            </div>
          </h2>

          <div className="home__testi-listing">
            {testimonials.map((t, idx) => {
              const isExpanded = expanded === idx
              return (
                <div key={t.index} className="home__testi-item-wrap">
                  <span className="home__testi-item-line" />
                  <div
                    className={cn("home__testi-item", idx === activeIndex && "active", isExpanded && "is-open")}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleClick(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleClick(idx);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`Read ${t.name}'s testimonial`}
                    data-cursor-text={isExpanded ? "Close" : "Read"}
                  >
                    <div className="home__testi-item-inner">
                      <p className="home__testi-item-order heading">{pad(t.index)}.</p>
                      <div className="home__testi-item-info">
                        <p className="home__testi-item-name">{t.name}</p>
                        <p className="home__testi-item-position">{t.position}</p>
                      </div>
                      <div className="home__testi-item-quote-col">
                        <div className={cn("home__testi-item-quote-wrap", !isExpanded && "is-clamped")}>
                          {t.content.split("\n\n").map((paragraph, pIdx) => (
                            <p key={pIdx} className="home__testi-item-quote">{paragraph}</p>
                          ))}
                        </div>
                        <button
                          type="button"
                          className={cn("home__testi-item-toggle", isExpanded && "is-open")}
                          onClick={(e) => { e.stopPropagation(); handleClick(idx); }}
                          data-cursor-text={isExpanded ? "Close" : "Read"}
                        >
                          <span className="home__testi-item-toggle-text">
                            {isExpanded ? "Show less" : "Read more"}
                          </span>
                          <span className="home__testi-item-toggle-arrow" aria-hidden="true">
                            {isExpanded ? "↑" : "→"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <span className="home__testi-item-line" />
          </div>
        </div>
      </section>
    </div>
  )
}
