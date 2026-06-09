"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHomeHero, setIsOnHomeHero] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number } | undefined;
      if (!lenis) return;
      const scrollY = lenis.scroll;
      setIsScrolled(scrollY > 50);
      const heroHeight = window.innerHeight;
      setIsOnHomeHero(scrollY < heroHeight * 0.5);
    }

    function onLenisReady(e: CustomEvent) {
      const lenis = e.detail.lenis;
      handleScroll();
      lenis.on("scroll", handleScroll);
    }

    window.addEventListener("lenis-ready", onLenisReady as EventListener);
    // Try once in case already ready
    const existingLenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number; on: (e: string, fn: () => void) => void } | undefined;
    if (existingLenis) {
      handleScroll();
      existingLenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("lenis-ready", onLenisReady as EventListener);
    };
  }, []);

  return (
    <header
      id="header"
      className={cn(
        "header",
        "on-home",
        isScrolled && "on-scroll",
        isOnHomeHero && "on-home-hero"
      )}
    >
      <div className="header__blur" />
      <div className="container grid">
        <div
          className="header__logo"
          style={{ gridColumn: "1 / 4", gridRow: "1 / 2" }}
        >
          <p className="header__greating heading fw-med h5">
            Good evening!
          </p>
          <h2 className="heading h5 fw-med header__name">
            <div className="header__name-wrap">
              <div className="cl-txt-title">Valentin</div>
              <div>Product</div>
            </div>
            <div className="header__name-wrap header__name-wrap-second">
              <div>Designer</div>
              <div>Cheval</div>
            </div>
          </h2>
        </div>

        <div
          className="header__socials hide-mb"
          style={{ gridColumn: "9 / 11" }}
        >
          <span className="cl-txt-title fs-14 fw-med upper" style={{ marginRight: "3.2rem" }}>
            Socials
          </span>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="#" className="txt-link hover-un header__social fs-14"> li </a>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="#" className="txt-link hover-un header__social fs-14"> dr </a>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="#" className="txt-link hover-un header__social fs-14"> tw </a>
        </div>

        <div
          className="header__menu hide-mb"
          style={{ gridColumn: "13 / 16", display: "flex", alignItems: "center", gap: "0", justifyContent: "flex-end" }}
        >
          <a href="#" className="txt-link hover-un fs-14">Index</a>
          <span className="splash cl-txt-disable fs-14" style={{ margin: "0 .6rem" }}>/</span>
          <a href="#" className="txt-link hover-un fs-14">About</a>
          <span className="splash cl-txt-disable fs-14" style={{ margin: "0 .6rem" }}>/</span>
          <a href="#" className="txt-link hover-un fs-14">Projects</a>
          <a
            href="mailto:hello@valentincheval.design"
            className="cl-txt-orange header__act fs-14 fw-med"
            style={{ marginLeft: "2rem" }}
          >
            Let&apos;s talk!
          </a>
        </div>

        <button
          className="header__toggle hide-dk cl-txt-title fs-16 fw-med"
          style={{ gridColumn: "4 / 5", justifySelf: "end" }}
        >
          <span className="header__toggle-open">Menu</span>
          <span className="header__toggle-close">Close</span>
        </button>
      </div>
    </header>
  );
}
