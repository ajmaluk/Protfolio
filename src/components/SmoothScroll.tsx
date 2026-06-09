"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    (window as unknown as Record<string, unknown>).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    function handleParallax() {
      const scrollY = lenis.scroll;
      const heroHeight = window.innerHeight;

      // Top Hero Parallax
      const bgMainWrap = document.querySelector(".home__hero-bg-main-wrap") as HTMLElement | null;
      const innerBg = document.querySelector(".home__hero-bg-main-inner-bg") as HTMLElement | null;
      const progress = Math.min(scrollY / heroHeight, 1);
      const scale = 1 + progress * 0.15;
      const topOpacity = Math.max(0, 1 - scrollY / (heroHeight * 1.5));

      if (bgMainWrap) {
        bgMainWrap.style.transform = `scale(${scale})`;
        bgMainWrap.style.opacity = `${topOpacity}`;
      }
      if (innerBg) {
        innerBg.style.transform = `scale(${1 + progress * 0.08})`;
      }

      // Bottom Clone Hero Parallax using Bounding Rect
      const footerHeroSec = document.querySelector(".home-footer-hero") as HTMLElement | null;
      const cloneBgMainInner = document.querySelector(".home__hero-clone .home__hero-clone-bg-main-inner") as HTMLElement | null;
      const cloneBgUnderImg = document.querySelector(".home__hero-clone .home__hero-clone-bg-under img") as HTMLElement | null;
      const cloneBgMain = document.querySelector(".home__hero-clone .home__hero-clone-bg-main") as HTMLElement | null;

      if (footerHeroSec) {
        const rect = footerHeroSec.getBoundingClientRect();
        const emptyHeight = window.innerHeight * 1.2; // height of the empty block (120svh)
        
        // Calculate progress: 0 when top of footer section enters viewport, 1 when empty block has scrolled past
        const progress = Math.max(0, Math.min((window.innerHeight - rect.top) / emptyHeight, 1));
        const cloneScaleInner = 1 + progress * 0.08;
        const cloneOpacity = progress;

        if (cloneBgMainInner) {
          cloneBgMainInner.style.transform = `scale(${cloneScaleInner})`;
          cloneBgMainInner.style.opacity = `${cloneOpacity}`;
        }
        if (cloneBgMain) {
          cloneBgMain.style.opacity = `${cloneOpacity}`;
        }
        if (cloneBgUnderImg) {
          cloneBgUnderImg.style.transform = `scale(${1.05 * cloneScaleInner})`;
          cloneBgUnderImg.style.opacity = `${cloneOpacity}`;
        }
      }
    }

    lenis.on("scroll", handleParallax);

    // Initial run
    setTimeout(() => {
      handleParallax();
    }, 100);

    window.dispatchEvent(new CustomEvent("lenis-ready", { detail: { lenis } }));

    return () => {
      lenis.off("scroll", handleParallax);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}