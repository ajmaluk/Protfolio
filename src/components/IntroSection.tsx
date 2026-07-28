"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Company {
  src: string;
  alt: string;
  description: string;
  url: string;
  tags: string[];
  thumbnail?: string;
}

const companies: Company[] = [
  {
    src: "/images/toolpix.svg",
    alt: "ToolPix AI",
    description: "AI-powered image editing, design & creative tools platform built for seamless productivity.",
    url: "https://toolpix.com",
    tags: ["AI Platform", "Next.js", "Design"],
    thumbnail: "/images/toolpix.png",
  },
  {
    src: "/images/wpadmission.svg",
    alt: "WP Admission",
    description: "WordPress admission and online application portal for academic institutions.",
    url: "https://wpadmissions.cet.ac.in/",
    tags: ["WordPress", "Web App", "Portal"],
  },
  {
    src: "/images/explore-together.svg",
    alt: "Explore Together",
    description: "Interactive travel community platform for discovering and sharing explorer journeys.",
    url: "https://explore-together.pages.dev/",
    tags: ["React", "Community", "Travel"],
    thumbnail: "/images/explore-together.png",
  },
  {
    src: "/images/lbs.svg",
    alt: "LBS Course Portal",
    description: "Government-accredited technical training portal offering skill acquisition courses.",
    url: "https://lbs.kerala.gov.in/",
    tags: ["EdTech", "Government", "Skill Portal"],
  },
  {
    src: "/images/styushi.svg",
    alt: "Styushi Clothing",
    description: "Modern fashion & apparel e-commerce store with custom street fashion experience.",
    url: "https://styushi.com/",
    tags: ["E-Commerce", "UI/UX", "Brand"],
  },
  {
    src: "/images/dvma.svg",
    alt: "DVMA - Dementia Assistant",
    description: "Assistive Virtual Memory Assistant application supporting dementia patients.",
    url: "https://dvma-dementia-assistant.pages.dev/",
    tags: ["Healthcare", "AI Assistant", "Mobile App"],
    thumbnail: "/images/dvma.png",
  },
  {
    src: "/images/incepta.svg",
    alt: "Incepta",
    description: "Digital technology & software agency engineering scalable web architectures.",
    url: "https://incepta.pages.dev/",
    tags: ["Software Agency", "Full Stack"],
  },
  {
    src: "/images/codepix.svg",
    alt: "CodePix",
    description: "Developer tools and code snippet generation platform for modern software engineers.",
    url: "https://codepix.uthakkan.in/",
    tags: ["DevTools", "AI Code", "Web App"],
  },
  {
    src: "/images/uthakkan.svg",
    alt: "Uthakkan",
    description: "Central digital ecosystem and showcase for creative web application products.",
    url: "https://www.uthakkan.in/",
    tags: ["Ecosystem", "Portfolio", "Web Apps"],
  },
];

const educationData = [
  {
    institution: "College of Engineering, Trivandrum",
    degree: "Master of Computer Applications (MCA) – APJ Abdul Kalam Technological University",
    years: "2025 – 2027",
    score: "90.9%",
    src: "/images/cet.svg",
  },
  {
    institution: "Mahatma Gandhi College, Iritty",
    degree: "Bachelor of Computer Science – Kannur University",
    years: "2023 – 2026",
    score: "89.7%",
    src: "/images/mgc.svg",
  },
  {
    institution: "GHSS Ulikkal",
    degree: "Higher Secondary Education – Kerala Board of Public Examination",
    years: "2020 – 2022",
    score: "90.8%",
    src: "/images/ghss.svg",
  },
];

const introMainText = "I build production-ready digital products that solve real-world problems. By combining AI API integrations, full-stack web architectures, mobile development, and clean user-focused design, I create scalable tools and platforms that deliver seamless digital experiences. My goal is to develop impactful software that makes technology simple, practical, and accessible for everyone.";

export function IntroSection() {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<Company | null>(null);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const serviceWrapRef = useRef<HTMLDivElement>(null);
  const awardsVisualRef = useRef<HTMLDivElement>(null);
  const awardsListingRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (company: Company) => {
    touchTimerRef.current = setTimeout(() => {
      setActiveProject(company);
    }, 350);
  };

  const handleTouchEnd = () => {
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current);
    }
  };

  useEffect(() => {
    const visualElement = awardsVisualRef.current;
    const textElement = textRef.current;
    const serviceWrap = serviceWrapRef.current;
    const listing = awardsListingRef.current;

    const words = textElement ? textElement.querySelectorAll<HTMLSpanElement>(".reveal-word") : [];
    const awardItems = listing ? listing.querySelectorAll<HTMLElement>(".home__intro-award") : [];
    const totalWords = words.length;

    let vh = typeof window !== "undefined" ? window.innerHeight : 800;
    let visualTop = 0, visualHeight = 0;
    let textTop = 0, textHeight = 0;
    let serviceTop = 0, serviceHeight = 0;
    let awardTops: number[] = [];

    function updateOffsets() {
      vh = window.innerHeight;
      const scrollY = window.scrollY;

      if (visualElement) {
        const r = visualElement.getBoundingClientRect();
        visualTop = scrollY + r.top;
        visualHeight = r.height;
      }
      if (textElement) {
        const r = textElement.getBoundingClientRect();
        textTop = scrollY + r.top;
        textHeight = r.height;
      }
      if (serviceWrap) {
        const r = serviceWrap.getBoundingClientRect();
        serviceTop = scrollY + r.top;
        serviceHeight = r.height;
      }
      if (awardItems.length > 0) {
        awardTops = Array.from(awardItems).map(item => scrollY + item.getBoundingClientRect().top);
      }
    }

    updateOffsets();
    window.addEventListener("resize", updateOffsets, { passive: true });

    const handleScroll = () => {
      const scrollY = (window as unknown as Record<string, unknown>).__lenis
        ? ((window as unknown as Record<string, unknown>).__lenis as { scroll: number }).scroll
        : window.scrollY;

      if (visualElement) {
        const current = vh - (visualTop - scrollY);
        const total = vh + visualHeight;
        const progress = Math.max(0, Math.min(1, current / total));
        const scale = 0.5 + progress * 1.0;
        visualElement.style.setProperty("--awards-scale", scale.toString());
      }

      if (words.length > 0) {
        const revealStart = vh * 0.22;
        const revealDistance = Math.max(textHeight * 0.68, vh * 0.34);
        const currentTextTop = textTop - scrollY;
        const progress = Math.max(0, Math.min(1, (revealStart - currentTextTop) / revealDistance));

        words.forEach((word, i) => {
          const normalizedProgress = i / totalWords;
          const distance = Math.abs(progress - normalizedProgress);
          const opacity = Math.max(0.15, Math.min(1, 1 - distance * 4.8));
          word.style.opacity = opacity.toString();
        });
      }

      if (serviceWrap) {
        const current = vh - (serviceTop - scrollY);
        const total = vh + serviceHeight;
        const progress = Math.max(0, Math.min(1, current / total));
        const diff = Math.abs(progress - 0.5);
        const scale = 1.15 - diff * 0.4;
        const translateXOrange = (progress - 0.5) * -200;
        const translateXBlack = (progress - 0.5) * 200;

        serviceWrap.style.setProperty("--service-scale", scale.toString());
        serviceWrap.style.setProperty("--service-trans-orange", `${translateXOrange}px`);
        serviceWrap.style.setProperty("--service-trans-black", `${translateXBlack}px`);
      }

      if (awardItems.length > 0) {
        const revealStart = vh * 0.85;
        const revealEnd = vh * 0.15;
        const total = revealStart - revealEnd;

        awardItems.forEach((item, idx) => {
          const itemTop = awardTops[idx] || (scrollY + item.getBoundingClientRect().top);
          const current = revealStart - (itemTop - scrollY);
          const progress = Math.max(0, Math.min(1, current / total));
          const eased = 1 - Math.pow(1 - progress, 1.5);
          item.style.opacity = eased.toString();
          item.style.transform = `translateY(${30 * (1 - eased)}px)`;
        });
      }
    };

    const lenis = (window as unknown as Record<string, unknown>).__lenis as { on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void } | undefined;
    if (lenis) {
      lenis.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateOffsets);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const words = introMainText.match(/\S+/g) ?? [];

  return (
    <div className="home__intro-wrap">
      {/* Project Detail Modal Overlay */}
      {activeProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setActiveProject(null)}
        >
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "2.4rem",
              padding: "3.6rem 3rem",
              maxWidth: "48rem",
              width: "100%",
              boxShadow: "0 25px 60px -10px rgba(0, 0, 0, 0.8)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: "absolute",
                top: "1.8rem",
                right: "1.8rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                color: "#ffffff",
                width: "3.6rem",
                height: "3.6rem",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <div style={{ height: "5.5rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", width: "100%" }}>
              <Image src={activeProject.src} alt={activeProject.alt} width={150} height={50} style={{ objectFit: "contain", maxHeight: "4.5rem" }} unoptimized />
            </div>

            {activeProject.thumbnail && (
              <div style={{ width: "100%", borderRadius: "1.6rem", overflow: "hidden", marginBottom: "2rem", border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                <Image src={activeProject.thumbnail} alt={activeProject.alt} width={420} height={220} style={{ width: "100%", height: "auto", display: "block" }} unoptimized />
              </div>
            )}

            <h3 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#ffffff", marginBottom: "1.2rem" }}>
              {activeProject.alt}
            </h3>

            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
              {activeProject.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "1.2rem", padding: "0.4rem 1.2rem", borderRadius: "100px", backgroundColor: "rgba(255, 61, 0, 0.18)", color: "#FF3D00", fontWeight: "600" }}>
                  {tag}
                </span>
              ))}
            </div>

            <p style={{ fontSize: "1.5rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.8)", marginBottom: "3rem" }}>
              {activeProject.description}
            </p>

            <a
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                backgroundColor: "#FF3D00",
                color: "#ffffff",
                padding: "1.4rem 3.2rem",
                borderRadius: "100px",
                fontWeight: "700",
                fontSize: "1.5rem",
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(255, 61, 0, 0.4)",
              }}
            >
              Visit Project ↗
            </a>
          </div>
        </div>
      )}

      <section className="home__intro">
        <div className="container grid">
          <div className="home__intro-companies">
            <div className="line" />
            <h4 className="heading h5 cl-txt-title home__intro-companies-title">
              Projects I worked for
            </h4>
            <div className="home__intro-companies-listing">
              {companies.map((company) => (
                <div
                  key={company.src}
                  className="home__intro-company"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveProject(company)}
                  onTouchStart={() => handleTouchStart(company)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="ic home__intro-company-ic">
                    <Image src={company.src} alt={company.alt} width={120} height={40} className="img img-fit" loading="lazy" unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home__intro-main">
            <div
              ref={textRef}
              className="heading h4 home__intro-main-txt"
            >
              <span className="home__intro-main-label">(Intro)</span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className="reveal-word"
                >
                  {word}{" "}
                </span>
              ))}
            </div>
            <Link href="/about" className="btn-circle arrow-hover home__intro-btn">
              <div className="ic-arr-wrap" style={{ "--size": 3.2 } as React.CSSProperties}>
                <div className="arr-main ic" style={{ "--size": 3.2 } as React.CSSProperties}>
                  <svg width="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
                <div className="arr-clone ic" style={{ "--size": 3.2 } as React.CSSProperties}>
                  <svg width="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
              <svg className="btn-circle-svg" width="100%" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="49" stroke="white" strokeOpacity=".1" strokeWidth="2" />
              </svg>
            </Link>
          </div>

          {/* Education Visual display in the middle column */}
          <div ref={awardsVisualRef} className="home__intro-awards-visual visible">
            <div className="awards-visual-inner">
              <Image
                src={educationData[activeAwardIndex]?.src || "/images/awards-sphere.png"}
                alt={educationData[activeAwardIndex]?.institution || ""}
                width={200}
                height={200}
                className="awards-visual-img"
                unoptimized
              />
            </div>
          </div>

          <div
            className="home__intro-awards"
            style={{ "--itemLength": educationData.length } as React.CSSProperties}
          >
            <h3 className="heading h4 cl-txt-title upper home__intro-awards-title">Education</h3>
            <div ref={awardsListingRef} className="home__intro-awards-listing">
              {educationData.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`home__intro-award ${index === activeAwardIndex ? "active" : ""}`}
                  onMouseEnter={() => setActiveAwardIndex(index)}
                  onFocus={() => setActiveAwardIndex(index)}
                  onClick={() => setActiveAwardIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="home__intro-award-line" />
                  <div className="home__intro-award-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                    <div style={{ flex: 1, paddingRight: "1.5rem" }}>
                      <p className="home__intro-award-name" style={{ fontWeight: "700", color: "#ffffff", fontSize: "1.7rem", lineHeight: "1.3", textTransform: "none" }}>
                        {edu.institution}
                      </p>
                      <p style={{ fontSize: "1.3rem", fontStyle: "italic", color: "rgba(255, 255, 255, 0.65)", marginTop: "0.4rem", textTransform: "none" }}>
                        {edu.degree}
                      </p>
                    </div>
                    <div style={{ textAlign: "right", minWidth: "10rem", flexShrink: 0 }}>
                      <p className="home__intro-award-year" style={{ fontSize: "1.4rem", color: "rgba(255, 255, 255, 0.75)", fontWeight: "600" }}>
                        {edu.years}
                        {index === activeAwardIndex && <span className="home__intro-award-dot" />}
                      </p>
                      <p style={{ fontSize: "1.6rem", fontWeight: "800", color: "#ffffff", marginTop: "0.3rem" }}>
                        {edu.score}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={serviceWrapRef} className="home__intro-service-wrap">
          <div className="home__intro-service">
            {/* Black Marquee: scrolls right (reverse) */}
            <div className="home__intro-service-marquee-wrap black">
              <div className="marquee">
                <div
                  className="marquee-inner"
                  style={{ display: "flex", animation: "marquee-reverse 20s linear infinite" }}
                >
                  {[0, 1].map((dupIdx) => (
                    <div key={dupIdx} className="marquee-inner-item" aria-hidden={dupIdx === 1}>
                      <div className="home__intro-service-marquee">
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">AI &amp; Full-Stack Dev</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Python &amp; JavaScript</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Flutter &amp; Cloud</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Orange Marquee: scrolls left (normal) */}
            <div className="home__intro-service-marquee-wrap orange">
              <div className="marquee">
                <div
                  className="marquee-inner"
                  style={{ display: "flex", animation: "marquee 20s linear infinite" }}
                >
                  {[0, 1].map((dupIdx) => (
                    <div key={dupIdx} className="marquee-inner-item" aria-hidden={dupIdx === 1}>
                      <div className="home__intro-service-marquee">
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Full-Stack Web Apps</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">AI Tools &amp; Automation</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                        <div className="home__intro-service-marquee-item">
                          <h3 className="fw-semi heading h3 upper">Mobile &amp; Cloud Dev</h3>
                          <div className="ic ic-32 anim-rot" aria-hidden="true">
                            <Image src="/images/asterisk.svg" alt="" width={32} height={32} className="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="home__intro-service-blur">
            <div className="home__intro-service-blur-inner">
              <Image
                src="/images/intro-service-blur.png"
                alt=""
                aria-hidden="true"
                width={1400}
                height={1400}
                className="img img-fit"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
