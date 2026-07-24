"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

interface ProjectsSectionProps {
  isProjectsPage?: boolean
}

export function ProjectsSection({ isProjectsPage = false }: ProjectsSectionProps) {
  const router = useRouter()
  const mainRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [nameGridStyle, setNameGridStyle] = useState<React.CSSProperties>({})
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = mainRef.current || document.querySelector(".home__project-main")
      if (!mainSection) return

      const rect = mainSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const totalScrollable = rect.height - viewportHeight
      
      if (totalScrollable <= 0) return

      const progress = Math.max(0, Math.min(-rect.top / totalScrollable, 1))
      const n = projects.length
      
      // Snapping trigger points — equal segments per project
      const activeIdx = Math.min(Math.floor(progress * n), n - 1)

      // Update active state in React
      setActiveIndex(activeIdx)

      // --- Thumbnail clip-path transitions ---
      const segSize = n > 1 ? 1 / (n - 1) : 1
      const transPhase = n > 1 ? progress / segSize : 0
      const transFloor = Math.floor(transPhase)
      const localT = transPhase - transFloor
      const inTransition = localT > 0 && n > 1

      const thumbnailImgs = document.querySelectorAll(".home__project-thumbnail-img")
      thumbnailImgs.forEach((imgEl, idx) => {
        const el = imgEl as HTMLElement
        let clipIn, clipOut, imgTrans, imgScale, imgDirection

        if (inTransition) {
          if (idx === transFloor) {
            clipIn = "0%"
            clipOut = `${100 * (1 - localT)}%`
            imgTrans = `${100 * localT}%`
            imgScale = `${1 - 0.4 * localT}`
            imgDirection = "-1"
          } else if (idx === transFloor + 1) {
            clipIn = `${100 * (1 - localT)}%`
            clipOut = "100%"
            imgTrans = `${100 * (1 - localT)}%`
            imgScale = `${1.4 - 0.4 * localT}`
            imgDirection = "1"
          } else if (idx < transFloor) {
            clipIn = "0%"
            clipOut = "0%"
            imgTrans = "100%"
            imgScale = "0.6"
            imgDirection = "-1"
          } else {
            clipIn = "100%"
            clipOut = "100%"
            imgTrans = "100%"
            imgScale = "1.4"
            imgDirection = "1"
          }
        } else {
          if (idx === transFloor) {
            clipIn = "0%"
            clipOut = "100%"
            imgTrans = "0%"
            imgScale = "1"
            imgDirection = "-1"
          } else if (idx < transFloor) {
            clipIn = "0%"
            clipOut = "0%"
            imgTrans = "100%"
            imgScale = "0.6"
            imgDirection = "-1"
          } else {
            clipIn = "100%"
            clipOut = "100%"
            imgTrans = "100%"
            imgScale = "1.4"
            imgDirection = "1"
          }
        }

        el.style.setProperty("--clipIn", clipIn)
        el.style.setProperty("--clipOut", clipOut)
        el.style.setProperty("--imgTrans", imgTrans)
        el.style.setProperty("--imgScale", imgScale)
        el.style.setProperty("--imgDirection", imgDirection)
      })

      // --- Loader circle angles ---
      const dotWraps = document.querySelectorAll(".home__project-slide-item-progress-inner")
      const loaderSegSize = n > 0 ? 1 / n : 1
      dotWraps.forEach((dotEl, idx) => {
        const el = dotEl as HTMLElement
        let angle = 0
        if (progress >= (idx + 1) * loaderSegSize) {
          angle = 360
        } else if (progress >= idx * loaderSegSize) {
          angle = ((progress - idx * loaderSegSize) / loaderSegSize) * 360
        }
        el.style.setProperty("--angle", `${angle}deg`)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    let lenisObj: { on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void } | undefined

    function attachLenis(lenisInstance: typeof lenisObj) {
      if (lenisInstance) {
        if (lenisObj && lenisObj !== lenisInstance) {
          lenisObj.off("scroll", handleScroll)
        }
        lenisObj = lenisInstance
        lenisObj.on("scroll", handleScroll)
      }
    }

    const existingLenis = (window as unknown as Record<string, unknown>).__lenis as typeof lenisObj
    if (existingLenis) {
      attachLenis(existingLenis)
    }

    const onLenisReady = (e: CustomEvent) => {
      attachLenis(e.detail?.lenis)
    }

    window.addEventListener("lenis-ready", onLenisReady as EventListener)

    // Initial run
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("lenis-ready", onLenisReady as EventListener)
      if (lenisObj) {
        lenisObj.off("scroll", handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    setNameGridStyle({})
  }, [activeIndex])

  const handleDotClick = (index: number) => {
    if (window.innerWidth <= 767) {
      setActiveIndex(index)
      return
    }

    const mainSection = mainRef.current || document.querySelector(".home__project-main")
    if (!mainSection) return
    const rect = mainSection.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const totalScrollable = rect.height - viewportHeight
    
    // Snap to the point where this project is fully visible (no transition in progress)
    const snapRatio = projects.length > 1 ? index / (projects.length - 1) : 0
    const targetProgress = snapRatio
    
    const absoluteTop = window.scrollY + rect.top
    const targetScrollY = absoluteTop + targetProgress * totalScrollable

    const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo: (y: number, opts: { duration: number }) => void } | undefined
    if (lenis) {
      lenis.scrollTo(targetScrollY, { duration: 1.4 })
    } else {
      window.scrollTo({ top: targetScrollY, behavior: "smooth" })
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return
    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = touchStartX - currentX
    const diffY = touchStartY - currentY

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0) {
        if (activeIndex < projects.length - 1) {
          handleDotClick(activeIndex + 1)
        }
      } else {
        if (activeIndex > 0) {
          handleDotClick(activeIndex - 1)
        }
      }
      setTouchStartX(null)
      setTouchStartY(null)
    }
  }

  return (
    <div className="home__project-wrap">
      <section className="home__project">
        <div className="container">
          <h2 className="fix-font home__project-title grid">
            <div className="heading h2 upper fw-bold home__project-title-txt"><span>Projects I</span></div>
            <div className="heading h2 upper fw-bold home__project-title-txt"><span>worked on</span></div>
            <div className="heading h2 upper fw-bold cl-txt-disable home__project-title-txt">
              <span>16-25</span>
              <div className="heading h3 fw-semi cl-txt-orange copyright">®</div>
            </div>
            <div className="fs-20 cl-txt-desc fw-reg home__project-title-label">(Portfolio)</div>
          </h2>

          <div ref={mainRef} className="home__project-main" style={{ "--totalHeight": `${projects.length * 100}vh` } as React.CSSProperties}>
            <div className="home__project-main-stick">
              <div 
                className="home__project-listing grid"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                {/* Desktop Left Side Navigation Indicator Panel */}
                <div className="home__project-slide">
                  {projects.map((proj, idx) => (
                    <div
                      key={proj.id}
                      className={cn("home__project-slide-item-wrap", idx === activeIndex && "active")}
                      onClick={() => handleDotClick(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Jump to ${proj.name}`}
                      aria-pressed={idx === activeIndex}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleDotClick(idx);
                        }
                      }}
                    >
                      <div className="home__project-slide-item">
                        <div className="home__project-slide-item-img">
                          <img src={proj.thumbnail} alt={`${proj.name} cover`} width={132} height={200} loading="lazy" />
                        </div>
                        <div className="home__project-slide-item-progress">
                          <div className="home__project-slide-item-progress-bg" />
                          <div className="home__project-slide-item-progress-inner" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left Side Content & Mobile/Tablet Layouts */}
                <div className="home__project-name">
                  <div className="home__project-name-wrap">
                    <div className="home__project-header-bar">
                      <div className="fs-20 fw-med home__project-pagination">
                        <div className="cl-txt-title home__project-pagination-current">
                          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                        </div>
                        <span className="cl-txt-disable">/{String(projects.length).padStart(2, "0")}</span>
                        <div className="line home__project-pagination-progress">
                          <div 
                            className="home__project-pagination-progress-inner"
                            style={{
                              width: `${100 / projects.length}%`,
                              transform: `translateX(${activeIndex * 100}%)`,
                              transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                            }}
                          />
                        </div>
                      </div>

                      <Link
                        href={isProjectsPage ? `/projects/${projects[activeIndex].slug}` : "/projects"}
                        transitionTypes={['page-transition']}
                        className="cl-txt-orange fs-20 fw-med arrow-hover home__project-link mod-mb"
                      >
                        <span className="txt-link cl-txt-orange">
                          {isProjectsPage ? "View case study" : "All projects"}
                        </span>
                        <div className="ic-arr-wrap ic-20" style={{ "--size": 1.6 } as React.CSSProperties}>
                          <div className="arr-main ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                            <svg width="100%" viewBox="0 0 20 20" fill="none">
                              <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                              <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                            </svg>
                          </div>
                          <div className="arr-clone ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                            <svg width="100%" viewBox="0 0 20 20" fill="none">
                              <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                              <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <h3 className="visually-hidden">
                      Viewing project: {projects[activeIndex].name}
                    </h3>

                    <div className="grid-1-1 home__project-name-grid" style={nameGridStyle}>
                      {projects.map((proj, idx) => (
                        <button
                          key={proj.id}
                          type="button"
                          className={cn(
                            "heading h3 fw-med upper home__project-name-txt",
                            idx === activeIndex ? "cl-txt-title active" : "cl-txt-desc"
                          )}
                          onClick={() => {
                            if (idx === activeIndex) {
                              router.push(`/projects/${proj.slug}`)
                            } else {
                              handleDotClick(idx)
                            }
                          }}
                          data-cursor-text="View"
                          aria-label={`View ${proj.name} project`}
                          aria-pressed={idx === activeIndex}
                        >
                          {proj.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Year block on tablet */}
                  <div className="home__project-year is-tablet">
                    <p className="cl-txt-desc fw-med home__project-label">Year</p>
                    <div className="heading h5 fw-med cl-txt-title home__project-year-current">
                      {projects.map((proj, idx) => (
                        <div key={idx} className={cn("home__project-year-txt", idx === activeIndex && "active")}>
                          {proj.year}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Image Gallery */}
                <div className="home__project-thumbnail">
                  <div className="home__project-thumbnail-wrap">
                    <div className="home__project-thumbnail-listing">
                      {projects.map((proj, idx) => (
                        <div
                          key={proj.id}
                          className="home__project-thumbnail-img"
                          data-cursor-text="View"
                          style={{
                            zIndex: projects.length - idx,
                            // Mobile fallback styles
                            "--clipIn": idx === activeIndex ? "0%" : (idx < activeIndex ? "0%" : "100%"),
                            "--clipOut": idx === activeIndex ? "100%" : (idx < activeIndex ? "0%" : "100%"),
                            "--imgTrans": idx === activeIndex ? "0%" : "100%",
                            "--imgScale": idx === activeIndex ? "1" : (idx < activeIndex ? "0.6" : "1.4"),
                            "--imgDirection": idx === activeIndex ? "-1" : "1",
                          } as React.CSSProperties}
                        >
                          <Link
                            href={`/projects/${proj.slug}`}
                            transitionTypes={['page-transition']}
                            className="home__project-thumbnail-img-wrap"
                            tabIndex={idx === activeIndex ? 0 : -1}
                            aria-label={`View ${proj.name} case study`}
                          >
                            <div className="home__project-thumbnail-img-inner">
                              <img
                                src={proj.thumbnail}
                                alt={idx === activeIndex ? `${proj.name} project preview` : ""}
                                aria-hidden={idx !== activeIndex}
                                width={1280}
                                height={800}
                                loading="lazy"
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Content & Info */}
                <div className="home__project-sub-info">
                  {/* Year block on desktop & mobile */}
                  <div className="home__project-year is-desk is-mb">
                    <p className="cl-txt-desc fw-med home__project-label">Year</p>
                    <div className="heading h5 fw-med cl-txt-title home__project-year-current">
                      {projects.map((proj, idx) => (
                        <div key={idx} className={cn("home__project-year-txt", idx === activeIndex && "active")}>
                          {proj.year}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Role listing block */}
                  <div className="home__project-role">
                    <p className="cl-txt-desc fw-med home__project-label">Role</p>
                    <div className="home__project-role-listing">
                      {projects.map((proj, idx) => (
                        <div key={proj.id} className={cn("home__project-role-listing-inner", idx === activeIndex && "active")}>
                          {proj.services.map((role, rIdx) => (
                            <h4 key={rIdx} className="fs-20 cl-txt-sub">{role}</h4>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description & Link */}
                <div className="home__project-desc">
                  <p className="cl-txt-desc fw-med home__project-label">Description</p>
                  <div style={{ position: "relative" }}>
                    {projects.map((proj, idx) => (
                      <p key={idx} className={cn("fs-20 cl-txt-sub home__project-desc-txt", idx === activeIndex && "active")}>
                        {proj.description}
                      </p>
                    ))}
                  </div>

                  <Link
                    href={isProjectsPage ? `/projects/${projects[activeIndex].slug}` : "/projects"}
                    transitionTypes={['page-transition']}
                    className="cl-txt-orange fs-20 fw-med arrow-hover home__project-link"
                  >
                    <span className="txt-link cl-txt-orange">
                      {isProjectsPage ? "View case study" : "All projects"}
                    </span>
                    <div className="ic-arr-wrap ic-20" style={{ "--size": 1.6 } as React.CSSProperties}>
                      <div className="arr-main ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none">
                          <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                          <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </div>
                      <div className="arr-clone ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none">
                          <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                          <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Arrows visible only on mobile/tablet */}
                <div className="home__project-navigation">
                  <div
                    className={cn("home__project-navigation-arrow prev", activeIndex === 0 && "disable")}
                    onClick={() => activeIndex > 0 && handleDotClick(activeIndex - 1)}
                    role="button"
                    tabIndex={activeIndex === 0 ? -1 : 0}
                    aria-label="Previous project"
                    aria-disabled={activeIndex === 0}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && activeIndex > 0) {
                        e.preventDefault();
                        handleDotClick(activeIndex - 1);
                      }
                    }}
                  >
                    <div className="ic ic-20">
                      <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M2.6 8.00003H14M6.19998 3.80005L2 8.00003L6.19998 12.2" stroke="currentColor" strokeWidth="1.13137" strokeMiterlimit="10" strokeLinecap="square"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={cn("home__project-navigation-arrow next", activeIndex === projects.length - 1 && "disable")}
                    onClick={() => activeIndex < projects.length - 1 && handleDotClick(activeIndex + 1)}
                    role="button"
                    tabIndex={activeIndex === projects.length - 1 ? -1 : 0}
                    aria-label="Next project"
                    aria-disabled={activeIndex === projects.length - 1}
                    onKeyDown={(e) => {
                      if ((e.key === "Enter" || e.key === " ") && activeIndex < projects.length - 1) {
                        e.preventDefault();
                        handleDotClick(activeIndex + 1);
                      }
                    }}
                  >
                    <div className="ic ic-20">
                      <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M13.4 8.00003H2M9.79997 3.80005L14 8.00003L9.79997 12.2" stroke="currentColor" strokeWidth="1.13137" strokeMiterlimit="10" strokeLinecap="square"></path>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
