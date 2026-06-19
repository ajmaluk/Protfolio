"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper") as HTMLElement | null;

    const lenis = new Lenis({
      wrapper: wrapper ?? window,
      content: wrapper ?? document.documentElement,
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
      const scale = 1 + progress * 0.45;
      
      // Keep background fully visible during hero scroll, and fade it out during the intro text scroll
      let topOpacity = 1;
      if (scrollY > heroHeight) {
        const fadeProgress = Math.min((scrollY - heroHeight) / (heroHeight * 0.8), 1);
        topOpacity = Math.max(0, 1 - Math.pow(fadeProgress, 2));
      }

      if (bgMainWrap) {
        bgMainWrap.style.transform = `scale(${scale})`;
        bgMainWrap.style.opacity = `${topOpacity}`;
      }
      if (innerBg) {
        innerBg.style.transform = `scale(${1 + progress * 0.25})`;
      }

      // Footer Background Light/Glow Parallax
      const footer = document.querySelector(".footer-wrap") as HTMLElement | null;
      const footerBgImg = document.querySelector(".footer__bg-img") as HTMLElement | null;
      if (footer && footerBgImg) {
        const rect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const total = viewportHeight + rect.height;
        const current = viewportHeight - rect.top;
        const progressVal = Math.max(0, Math.min(1, current / total));
        
        const translateY = (progressVal - 0.5) * -120; // moves background up/down by 60px
        footerBgImg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.15)`;
      }
    }

    lenis.on("scroll", handleParallax);

    // Run an initial pass after the next animation frame to ensure layout is ready
    const initialRaf = requestAnimationFrame(() => {
      handleParallax();
    });

    window.dispatchEvent(new CustomEvent("lenis-ready", { detail: { lenis } }));

    return () => {
      lenis.off("scroll", handleParallax);
      lenis.destroy();
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(initialRaf);
    };
  }, []);

  return null;
}