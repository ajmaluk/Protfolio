"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const isDesktop = window.innerWidth > 767;
    const isInfinite = window.innerWidth > 991 && document.querySelector("[data-infinite]") !== null;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      infinite: isInfinite,
      content: isDesktop ? document.documentElement : (document.querySelector(".main") as HTMLElement || undefined),
      wrapper: isDesktop ? window : (document.querySelector(".wrapper") as HTMLElement || undefined),
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

      // Bottom Clone Hero Parallax
      const cloneBg = document.querySelector(".home__hero-clone-bg") as HTMLElement | null;
      const cloneBgUnderImg = document.querySelector(".home__hero-clone-bg-under img") as HTMLElement | null;
      if (lenis.limit > 0) {
        const cloneScroll = scrollY - (lenis.limit - heroHeight);
        const cloneProgress = Math.max(0, Math.min(cloneScroll / heroHeight, 1));
        const cloneScale = 1.15 - cloneProgress * 0.15;
        const cloneScaleInner = 1.08 - cloneProgress * 0.08;

        const cloneFadeScroll = scrollY - (lenis.limit - heroHeight * 1.5);
        const cloneOpacity = Math.max(0, Math.min(cloneFadeScroll / (heroHeight * 1.5), 1));

        if (cloneBg) {
          cloneBg.style.transform = `scale(${cloneScale})`;
          cloneBg.style.opacity = `${cloneOpacity}`;
        }
        if (cloneBgUnderImg) {
          cloneBgUnderImg.style.transform = `scale(${1.05 * cloneScaleInner})`;
        }
      }
    }

    function handleHeaderClasses() {
      const header = document.querySelector("header");
      if (!header) return;

      header.classList.add("on-scroll");

      const isHome = document.querySelector('[data-namespace="home"]') !== null;
      if (isHome) {
        header.classList.add("on-home");

        const heroName = document.querySelector(".home__hero-main .home__hero-name") as HTMLElement | null;
        const footerHero = document.querySelector(".home-footer-hero") as HTMLElement | null;

        const e = heroName ? heroName.offsetTop : window.innerHeight * 0.5;
        const i = footerHero ? footerHero.offsetTop : document.documentElement.scrollHeight - window.innerHeight;

        const scrollY = lenis.scroll;

        if (window.innerWidth <= 767) {
          header.classList.toggle("on-home-hero", scrollY < e);
        } else {
          header.classList.toggle("on-home-hero", scrollY < e || scrollY > i);
        }
      } else {
        header.classList.remove("on-home");
      }
    }

    function onScroll() {
      handleParallax();
      handleHeaderClasses();
    }

    lenis.on("scroll", onScroll);

    // Initial run
    setTimeout(() => {
      onScroll();
    }, 100);

    window.dispatchEvent(new CustomEvent("lenis-ready", { detail: { lenis } }));

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
