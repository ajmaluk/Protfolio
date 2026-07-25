"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectDetail } from "@/data/projects";

interface ProjectCarouselProps {
  projects: ProjectDetail[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    try {
      const savedSlug = sessionStorage.getItem('carousel_active_slug');
      if (savedSlug !== null) {
        sessionStorage.removeItem('carousel_active_slug');
        const idx = projects.findIndex((p) => p.slug === savedSlug);
        if (idx !== -1) return idx;
      }
      const savedIdx = sessionStorage.getItem('carousel_active_idx');
      if (savedIdx !== null) {
        sessionStorage.removeItem('carousel_active_idx');
        const idx = parseInt(savedIdx, 10);
        if (!isNaN(idx) && idx >= 0 && idx < projects.length) return idx;
      }
    } catch {
      // sessionStorage may not be available
    }
    return 0;
  });

  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({ startX: 0, startY: 0, isDragging: false });
  const [isPaused, setIsPaused] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [autoProgress, setAutoProgress] = useState(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ===== DESKTOP: Sticky scroll effect =====
  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    if (!section) return;

    let sectionTop = 0;
    let totalScrollable = 0;
    let vh = typeof window !== "undefined" ? window.innerHeight : 800;
    let thumbs = section.querySelectorAll<HTMLElement>(".carousel__thumb-img");

    function updateOffsets() {
      if (!section) return;
      vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      sectionTop = window.scrollY + rect.top;
      totalScrollable = rect.height - vh;
      thumbs = section.querySelectorAll<HTMLElement>(".carousel__thumb-img");
    }

    updateOffsets();
    window.addEventListener("resize", updateOffsets, { passive: true });

    let currentIdx = -1;

    const handleScroll = () => {
      if (totalScrollable <= 0) return;

      const scrollY = (window as unknown as Record<string, unknown>).__lenis
        ? ((window as unknown as Record<string, unknown>).__lenis as { scroll: number }).scroll
        : window.scrollY;

      const currentRelativeTop = sectionTop - scrollY;
      const progress = Math.max(0, Math.min(-currentRelativeTop / totalScrollable, 1));
      const total = projects.length;
      const segmentSize = 1 / total;
      const idx = Math.min(total - 1, Math.floor(progress / segmentSize));
      
      if (idx !== currentIdx) {
        currentIdx = idx;
        setActiveIndex(idx);
      }

      // Calculate clip-path transitions on thumbnail images
      thumbs.forEach((el, i) => {
        const t = (progress - i * segmentSize) / segmentSize;
        const clamped = Math.max(0, Math.min(1, t));

        if (i === idx) {
          // Current project: revealing in
          if (t <= 0) {
            el.style.setProperty("--clipIn", "100%");
            el.style.setProperty("--clipOut", "100%");
          } else {
            const reveal = 100 * (1 - clamped);
            el.style.setProperty("--clipIn", "0%");
            el.style.setProperty("--clipOut", `${reveal}%`);
          }
        } else if (i < idx) {
          // Past projects: fully revealed, then hidden
          if (t < 0) {
            el.style.setProperty("--clipIn", "100%");
            el.style.setProperty("--clipOut", "100%");
          } else {
            el.style.setProperty("--clipIn", "0%");
            el.style.setProperty("--clipOut", "0%");
          }
        } else {
          // Future projects: hidden, then revealing
          if (t < 0) {
            el.style.setProperty("--clipIn", "100%");
            el.style.setProperty("--clipOut", "100%");
          } else {
            el.style.setProperty("--clipIn", `${100 * (1 - clamped)}%`);
            el.style.setProperty("--clipOut", "100%");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const lenis = (window as unknown as Record<string, unknown>).__lenis as
      | { on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void }
      | undefined;
    if (lenis) lenis.on("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateOffsets);
      window.removeEventListener("scroll", handleScroll);
      if (lenis) lenis.off("scroll", handleScroll);
    };
  }, [isMobile, projects.length]);

  // Persist activeIndex to sessionStorage before navigating to a project detail
  const saveActiveIndex = useCallback(() => {
    try {
      sessionStorage.setItem('carousel_active_idx', String(activeIndex));
    } catch {
      // sessionStorage may not be available
    }
  }, [activeIndex]);

  // ===== MOBILE: Auto-advance timer =====
  useEffect(() => {
    if (!isMobile || isPaused) return;
    const AUTO_ADVANCE_MS = 5000;
    const startTime = Date.now();

    const advanceTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
      setAutoProgress(0);
    }, AUTO_ADVANCE_MS);

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setAutoProgress(Math.min(elapsed / AUTO_ADVANCE_MS, 1));
    }, 50);

    return () => {
      clearInterval(advanceTimer);
      clearInterval(progressTimer);
    };
  }, [isMobile, activeIndex, isPaused, projects.length]);

  // ===== MOBILE: Touch/swipe handling =====
  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      isDragging: true,
    };
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchRef.current.isDragging) return;
    const diffX = touchRef.current.startX - e.touches[0].clientX;
    const diffY = Math.abs(touchRef.current.startY - e.touches[0].clientY);

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > diffY * 1.5) {
      if (diffX > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      touchRef.current.isDragging = false;
      setIsPaused(false);
    }
  };

  const handleTouchEnd = () => {
    touchRef.current.isDragging = false;
    setTimeout(() => setIsPaused(false), 2000);
  };

  const goTo = (idx: number) => {
    if (isMobile) {
      setActiveIndex(idx);
      setAutoProgress(0);
    } else {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScrollable = rect.height - vh;
      const snapRatio = idx / (projects.length - 1);
      const targetY = window.scrollY + rect.top + snapRatio * totalScrollable;

      const lenis = (window as unknown as Record<string, unknown>).__lenis as
        | { scrollTo: (y: number, opts: { duration: number }) => void }
        | undefined;
      if (lenis) {
        lenis.scrollTo(targetY, { duration: 1 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  // Total height for desktop: N * 100vh
  const totalHeight = `${projects.length * 100}vh`;

  return (
    <section
      ref={sectionRef}
      className="carousel"
      style={{ "--totalHeight": totalHeight } as React.CSSProperties}
    >
      <div className="carousel__stick">
        {/* Title section */}
        <div className="carousel__title">
          <div className="container">
            <div className="carousel__title-grid">
              <h2 className="carousel__title-label heading fs-14 upper fw-med cl-txt-disable">
                (Portfolio)
              </h2>
              <div className="carousel__title-texts">
                <span className="heading h2 upper fw-bold carousel__title-line">Projects I</span>
                <span className="heading h2 upper fw-bold carousel__title-line">worked on</span>
                <span className="heading h2 upper fw-bold cl-txt-disable carousel__title-line">
                  <span>16-25</span>
                  <span className="carousel__title-copy heading h3 fw-semi cl-txt-orange">®</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel__body"
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          <div className="container">
            <div className="carousel__layout">
              {/* Left: Project navigation and names */}
              <div className="carousel__left">
                {/* Pagination */}
                <div className="carousel__pagination">
                  <span className="cl-txt-title fw-med">{pad(activeIndex + 1)}</span>
                  <span className="cl-txt-disable fw-med"> / {pad(projects.length)}</span>
                  {/* Mobile progress bar */}
                  {isMobile && (
                    <div className="carousel__progress-track">
                      <div
                        ref={progressBarRef}
                        className="carousel__progress-fill"
                        style={{
                          transform: `scaleX(${autoProgress})`,
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Project names (vertical on desktop, horizontal on mobile) */}
                <div className="carousel__names">
                  <div
                    className={cn(
                      "carousel__names-track",
                      isMobile && "carousel__names-track--mobile"
                    )}
                    style={
                      isMobile
                        ? {
                            transform: `translateX(-${activeIndex * 100}%)`,
                            transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                          }
                        : undefined
                    }
                  >
                    {projects.map((proj, idx) => (
                      <button
                        key={proj.id}
                        type="button"
                        className={cn(
                          "carousel__name-btn heading h3 upper fw-med",
                          idx === activeIndex ? "carousel__name-btn--active" : "cl-txt-desc"
                        )}
                        onClick={() => goTo(idx)}
                        aria-label={`View ${proj.name} project`}
                        aria-pressed={idx === activeIndex}
                        style={
                          idx === activeIndex
                            ? { viewTransitionName: `project-title-${proj.slug}` } as React.CSSProperties
                            : undefined
                        }
                      >
                        {proj.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick info on mobile */}
                {isMobile && (
                  <div className="carousel__mobile-meta">
                    <div className="carousel__mobile-row">
                      <span className="carousel__mobile-label cl-txt-disable">Year</span>
                      <span className="carousel__mobile-value cl-txt-title">
                        {projects[activeIndex].year}
                      </span>
                    </div>
                    <div className="carousel__mobile-row">
                      <span className="carousel__mobile-label cl-txt-disable">Role</span>
                      <div className="carousel__mobile-tags">
                        {projects[activeIndex].services.map((s) => (
                          <span key={s} className="carousel__mobile-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Desktop dots */}
                {!isMobile && (
                  <div className="carousel__dots">
                    {projects.map((proj, idx) => (
                      <button
                        key={proj.id}
                        type="button"
                        className={cn(
                          "carousel__dot",
                          idx === activeIndex && "carousel__dot--active"
                        )}
                        onClick={() => goTo(idx)}
                        aria-label={`Go to ${proj.name}`}
                      >
                        <div className="carousel__dot-ring">
                          <div
                            className="carousel__dot-progress"
                            style={{
                              background: `conic-gradient(var(--cl-orange) ${idx <= activeIndex ? 360 : 0}deg, transparent ${idx <= activeIndex ? 360 : 0}deg)`,
                            }}
                          />
                        </div>
                        <div className="carousel__dot-img-wrap">
                          <img
                            src={proj.thumbnail}
                            alt=""
                            width={132}
                            height={200}
                            loading="lazy"
                            className="carousel__dot-img"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Center: Project thumbnails with clip-path */}
              <div className="carousel__center">
                <div className="carousel__thumbs">
                  {projects.map((proj, idx) => (
                    <Link
                      key={proj.id}
                      href={`/projects/${proj.slug}`}
                      transitionTypes={['page-transition']}
                      onClick={saveActiveIndex}
                      className={cn(
                        "carousel__thumb-img",
                        idx === activeIndex && "carousel__thumb-img--active"
                      )}
                      style={{
                        zIndex: projects.length - idx,
                        viewTransitionName: idx === activeIndex && !isMobile ? `project-img-${proj.slug}` : undefined,
                        "--clipIn": isMobile
                          ? idx === activeIndex
                            ? "0%"
                            : "100%"
                          : "100%",
                        "--clipOut": isMobile
                          ? idx === activeIndex
                            ? "100%"
                            : "100%"
                          : "100%",
                      } as React.CSSProperties}
                      aria-label={idx === activeIndex ? `View ${proj.name} case study` : undefined}
                      tabIndex={idx === activeIndex ? 0 : -1}
                      data-cursor-text="View"
                    >
                      <div className="carousel__thumb-wrap">
                        <img
                          src={proj.thumbnail}
                          alt={idx === activeIndex ? `${proj.name} preview` : ""}
                          aria-hidden={idx !== activeIndex}
                          width={1280}
                          height={800}
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Project info (desktop) */}
              {!isMobile && (
                <div className="carousel__right">
                  <div className="carousel__info-item">
                    <span className="carousel__info-label cl-txt-disable">Year</span>
                    <span className="carousel__info-value cl-txt-title heading h5 fw-med">
                      {projects[activeIndex].year}
                    </span>
                  </div>
                  <div className="carousel__info-item">
                    <span className="carousel__info-label cl-txt-disable">Role</span>
                    <div className="carousel__info-roles">
                      {projects[activeIndex].services.map((role) => (
                        <span key={role} className="carousel__info-role cl-txt-sub">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="carousel__info-item">
                    <span className="carousel__info-label cl-txt-disable">Description</span>
                    <p className="carousel__info-desc cl-txt-sub">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${projects[activeIndex].slug}`}
                    transitionTypes={['page-transition']}
                    onClick={saveActiveIndex}
                    className="carousel__cta arrow-hover cl-txt-orange"
                  >
                    <span className="txt-link cl-txt-orange">View case study</span>
                    <span className="ic-arr-wrap ic-20" style={{ "--size": 1.6 } as React.CSSProperties}>
                      <span className="arr-main ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none">
                          <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                          <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </span>
                      <span className="arr-clone ic" style={{ "--size": 1.6 } as React.CSSProperties}>
                        <svg width="100%" viewBox="0 0 20 20" fill="none">
                          <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                          <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              )}

              {/* Mobile navigation arrows */}
              {isMobile && (
                <div className="carousel__mobile-nav">
                  <button
                    type="button"
                    className={cn(
                      "carousel__mobile-arrow",
                      activeIndex === 0 && "carousel__mobile-arrow--disabled"
                    )}
                    onClick={() => goTo(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous project"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M2.6 8.00003H14M6.19998 3.80005L2 8.00003L6.19998 12.2" stroke="currentColor" strokeWidth="1.13137" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </button>
                  <div className="carousel__mobile-dots">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={cn(
                          "carousel__mobile-dot",
                          idx === activeIndex && "carousel__mobile-dot--active"
                        )}
                        onClick={() => goTo(idx)}
                        aria-label={`Go to project ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className={cn(
                      "carousel__mobile-arrow",
                      activeIndex === projects.length - 1 && "carousel__mobile-arrow--disabled"
                    )}
                    onClick={() => goTo(Math.min(projects.length - 1, activeIndex + 1))}
                    disabled={activeIndex === projects.length - 1}
                    aria-label="Next project"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M13.4 8.00003H2M9.79997 3.80005L14 8.00003L9.79997 12.2" stroke="currentColor" strokeWidth="1.13137" strokeMiterlimit="10" strokeLinecap="square" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
