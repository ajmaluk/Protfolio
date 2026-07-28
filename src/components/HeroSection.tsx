"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WORDS = ["STARTUPS", "FOUNDERS", "DEVELOPERS", "CREATORS"];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const charEl = characterRef.current;
    if (!charEl) return;

    let targetRotateX = 0;
    let targetRotateY = 0;
    let targetTranslateX = 0;
    let targetTranslateY = 0;

    let currentRotateX = 0;
    let currentRotateY = 0;
    let currentTranslateX = 0;
    let currentTranslateY = 0;

    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      targetRotateY = normX * 3.5;
      targetRotateX = -normY * 2.5;
      targetTranslateX = normX * 8;
      targetTranslateY = normY * 6;
    };

    const onMouseLeave = () => {
      targetRotateX = 0;
      targetRotateY = 0;
      targetTranslateX = 0;
      targetTranslateY = 0;
    };

    const render = () => {
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;
      currentTranslateX += (targetTranslateX - currentTranslateX) * 0.08;
      currentTranslateY += (targetTranslateY - currentTranslateY) * 0.08;

      if (charEl) {
        charEl.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translate3d(${currentTranslateX.toFixed(2)}px, ${currentTranslateY.toFixed(2)}px, 0px)`;
      }

      const converged =
        Math.abs(currentRotateX - targetRotateX) < 0.01 &&
        Math.abs(currentRotateY - targetRotateY) < 0.01 &&
        Math.abs(currentTranslateX - targetTranslateX) < 0.01 &&
        Math.abs(currentTranslateY - targetTranslateY) < 0.01;

      if (!converged || targetRotateX !== 0 || targetRotateY !== 0 || targetTranslateX !== 0 || targetTranslateY !== 0) {
        animFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="home__hero-wrap">
      <section className="home__hero">
        <div className="home__hero-main">
          <div className="container grid calc-h">
            <div className="home__hero-scope-wrap">
              <div className="home__hero-scope" role="list">
                <span className="line" role="none" />
                <div role="listitem">AI &amp; Full-Stack Dev</div>
                <div role="listitem">Python &amp; JavaScript</div>
                <div role="listitem">Flutter &amp; Cloud</div>
                <span className="line" role="none" />
              </div>
              <a
                href="mailto:ajmaluk.me@gmail.com"
                className="arrow-hover home__hero-scope-cta"
              >
                <span className="txt-link">How can I help?</span>
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
              </a>
            </div>

            <div className="home__hero-intro-wrap">
              <div className="cl-txt-sub home__hero-intro">
                MCA Student &amp; Full-Stack AI Developer specialized in building AI tools, web applications, mobile apps, and scalable digital products.
              </div>
              <span className="line" />
            </div>

            <div className="home__hero-title-wrap">
              <div className="home__hero-greating-wrap">
                <div className="home__hero-greating-inner">
                  <p className="home__hero-greating">Hi there! this is</p>
                  <p className="heading h5 fw-med home__hero-name">
                    <span className="cl-txt-title">Ajmal</span>{" "}
                    <span>U K</span>
                  </p>
                </div>
              </div>
              <h1 className="heading h1 fw-bold fix-font upper home__hero-title">
                <div className="home__hero-title-txt">BUILD</div>
                <div className="home__hero-title-txt home__hero-title-sub">PRODUCTS FOR</div>
                <div className="cl-txt-orange home__hero-title-slide">
                  <div className="home__hero-title-slide-inner">
                    <div className="grid-1-1 slide-txt-wrap">
                      {WORDS.map((word, index) => {
                        const diff = index - currentIndex
                        const isActive = index === currentIndex
                        let rotateX = -91
                        let translateY = 19
                        let translateZ = -19
                        if (diff === 0) {
                          rotateX = 0
                          translateY = 0
                          translateZ = 0
                        } else if (diff === 1 || diff === -3) {
                          rotateX = 91
                          translateY = -19
                          translateZ = 19
                        }
                        return (
                          <div
                            key={word}
                            className="slide-txt-item heading upper"
                            style={{
                              transform: `rotateX(${rotateX}deg) translate3d(0, ${translateY}px, ${translateZ}px)`,
                              opacity: isActive ? 1 : 0,
                              visibility: isActive ? "inherit" : "hidden",
                            }}
                            aria-hidden={!isActive}
                          >
                            {word}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </h1>
              <span className="home__hero-scrolldown cl-txt-sub">(Scroll down)</span>
            </div>
          </div>
        </div>

        <div className="home__hero-bg">
          <div className="home__hero-bg-main">
            <div className="home__hero-bg-main-wrap">
              <div className="home__hero-bg-main-inner-bg">
                <Image
                  src="/images/home-hero-bg.jpg"
                  alt=""
                  role="presentation"
                  width={1920}
                  height={1080}
                  priority
                />
              </div>
              <div className="home__hero-bg-main-inner-man" data-canvas-wrap>
                <div className="home__hero-bg-main-inner-man-ratio" />
                <div className="home__hero-bg-main-inner placeholder" ref={characterRef}>
                  <Image
                    src="/images/home-hero-trans.png"
                    alt=""
                    role="presentation"
                    width={800}
                    height={1000}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="home__hero-gradient-mb" />
          </div>
        </div>
      </section>
    </div>
  );
}
