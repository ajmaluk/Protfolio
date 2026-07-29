"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any leftover overflow lock on body upon page transition
    document.body.style.overflow = "";

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

    // Reset scroll position on route change
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    let bgMainWrap = document.querySelector(".home__hero-bg-main-wrap") as HTMLElement | null;
    let innerBg = document.querySelector(".home__hero-bg-main-inner-bg") as HTMLElement | null;
    let characterWrap = document.querySelector(".home__hero-bg-main-inner-man") as HTMLElement | null;
    let introTitle = document.querySelector(".home__intro-main-txt") as HTMLElement | null;
    let footer = document.querySelector(".footer-wrap") as HTMLElement | null;
    let footerBgImg = document.querySelector(".footer__bg-img") as HTMLElement | null;

    let introTitleTop = 0;
    let footerTop = 0;
    let footerHeight = 0;
    let vh = typeof window !== "undefined" ? window.innerHeight : 800;

    function updateOffsets() {
      vh = window.innerHeight;
      bgMainWrap = document.querySelector(".home__hero-bg-main-wrap");
      innerBg = document.querySelector(".home__hero-bg-main-inner-bg");
      characterWrap = document.querySelector(".home__hero-bg-main-inner-man");
      introTitle = document.querySelector(".home__intro-main-txt");
      footer = document.querySelector(".footer-wrap");
      footerBgImg = document.querySelector(".footer__bg-img");

      if (introTitle) {
        introTitleTop = window.scrollY + introTitle.getBoundingClientRect().top;
      }
      if (footer) {
        const rect = footer.getBoundingClientRect();
        footerTop = window.scrollY + rect.top;
        footerHeight = rect.height;
      }
    }

    updateOffsets();
    window.addEventListener("resize", updateOffsets, { passive: true });

    function handleParallax() {
      const scrollY = lenis.scroll;
      const heroHeight = vh;

      // Only run Home hero parallax effect when on home page
      if (pathname === "/") {
        const heroProgress = Math.min(scrollY / heroHeight, 1);
        const fadeEnd = heroHeight * 1.8;
        const extendedProgress = Math.min(scrollY / fadeEnd, 1);

        const bgScale = 1 + heroProgress * 0.35;
        const charScale = 1 + heroProgress * 0.08;
        const charTranslateY = heroProgress * 65;

        let fadeOpacity = 1;
        if (extendedProgress > 0.55) {
          const fadeProgress = (extendedProgress - 0.55) / 0.45;
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

        if (introTitle) {
          const currentTop = introTitleTop - scrollY;
          const viewCenter = vh * 0.5;
          const dist = viewCenter - currentTop;
          const normalizedDist = Math.max(0, Math.min(1, dist / vh));
          const translateY = 30 * (1 - normalizedDist);
          introTitle.style.transform = `translateY(${translateY}px)`;
        }
      }

      // Footer Background Parallax
      if (footer && footerBgImg) {
        const currentFooterTop = footerTop - scrollY;
        const total = vh + footerHeight;
        const current = vh - currentFooterTop;
        const progressVal = Math.max(0, Math.min(1, current / total));
        
        const translateY = (progressVal - 0.5) * -120;
        footerBgImg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.15)`;
      }
    }

    lenis.on("scroll", handleParallax);

    const initialRaf = requestAnimationFrame(() => {
      updateOffsets();
      handleParallax();
    });

    window.dispatchEvent(new CustomEvent("lenis-ready", { detail: { lenis } }));

    return () => {
      window.removeEventListener("resize", updateOffsets);
      lenis.off("scroll", handleParallax);
      lenis.destroy();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(initialRaf);
    };
  }, [pathname]);

  return null;
}