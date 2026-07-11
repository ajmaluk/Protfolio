"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  const rafRef = useRef<number | null>(null);

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
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    function handleParallax() {
      const scrollY = lenis.scroll;
      const heroHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 767;

      // Cache DOM queries for performance
      const bgMainWrap = document.querySelector(".home__hero-bg-main-wrap") as HTMLElement | null;
      const innerBg = document.querySelector(".home__hero-bg-main-inner-bg") as HTMLElement | null;
      const characterWrap = document.querySelector(".home__hero-bg-main-inner-man") as HTMLElement | null;

      if (!isMobile) {
        // Hero scroll progress: 0 at top of hero, 1 at top of next section
        const heroProgress = Math.min(scrollY / heroHeight, 1);
        
        // Extended fade progress: continues into the intro section
        const fadeEnd = heroHeight * 1.8;
        const extendedProgress = Math.min(scrollY / fadeEnd, 1);

        // ---- Background layer ----
        // Zoom the background (subtle): 1 → 1.35 over the hero scroll
        const bgScale = 1 + heroProgress * 0.35;
        
        // ---- Character layer ----
        // Subtle character zoom: 1 → 1.08 over the hero scroll
        const charScale = 1 + heroProgress * 0.08;
        // Parallax shift: character moves up slightly as you scroll
        const charTranslateY = -heroProgress * 40;

        // ---- Fade: after zoom peaks, fade everything out smoothly ----
        // Full opacity during the hero zoom phase (progress 0 → 0.55)
        // Start fading at progress 0.55, complete by progress 1.0
        let fadeOpacity = 1;
        if (extendedProgress > 0.55) {
          const fadeProgress = (extendedProgress - 0.55) / 0.45;
          // Cubic ease-out for smooth fade
          fadeOpacity = Math.max(0, 1 - Math.pow(fadeProgress, 1.8));
        }

        if (bgMainWrap) {
          bgMainWrap.style.transform = `scale(${bgScale})`;
          bgMainWrap.style.opacity = `${fadeOpacity}`;
        }
        if (innerBg) {
          innerBg.style.transform = `scale(${1 + heroProgress * 0.2})`;
          innerBg.style.opacity = `${Math.max(0.1, fadeOpacity)}`;
        }
        if (characterWrap) {
          characterWrap.style.transform = `translate3d(0, ${charTranslateY}px, 0) scale(${charScale})`;
          characterWrap.style.opacity = `${fadeOpacity}`;
        }
      } else {
        // On mobile, reset any inline transforms so CSS static layout applies cleanly
        if (bgMainWrap) {
          bgMainWrap.style.transform = '';
          bgMainWrap.style.opacity = '';
        }
        if (innerBg) {
          innerBg.style.transform = '';
          innerBg.style.opacity = '';
        }
        if (characterWrap) {
          characterWrap.style.transform = '';
          characterWrap.style.opacity = '';
        }
      }

      // ---- Intro section title parallax ----
      const introTitle = document.querySelector(".home__intro-main-txt") as HTMLElement | null;
      if (introTitle) {
        const rect = introTitle.getBoundingClientRect();
        const viewCenter = window.innerHeight * 0.5;
        const dist = viewCenter - rect.top;
        const range = window.innerHeight;
        const normalizedDist = Math.max(0, Math.min(1, dist / range));
        // Subtle translateY from 30px to 0 as it enters view
        const translateY = 30 * (1 - normalizedDist);
        introTitle.style.transform = `translateY(${translateY}px)`;
      }

      // ---- Footer Background Light/Glow Parallax ----
      const footer = document.querySelector(".footer-wrap") as HTMLElement | null;
      const footerBgImg = document.querySelector(".footer__bg-img") as HTMLElement | null;
      if (footer && footerBgImg) {
        const rect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const total = viewportHeight + rect.height;
        const current = viewportHeight - rect.top;
        const progressVal = Math.max(0, Math.min(1, current / total));
        
        const translateY = (progressVal - 0.5) * -120;
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(initialRaf);
    };
  }, []);

  return null;
}