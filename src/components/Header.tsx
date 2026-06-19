"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHomeHero, setIsOnHomeHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning!" : hour < 17 ? "Good afternoon!" : "Good evening!";

  useEffect(() => {
    function updateScrollState() {
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number } | undefined;
      if (!lenis) return;
      const scrollY = lenis.scroll;
      setIsScrolled(scrollY > 50);
      const heroHeight = window.innerHeight;
      setIsOnHomeHero(scrollY < heroHeight * 0.5);
    }

    function onLenisReady(e: CustomEvent) {
      const lenis = e.detail.lenis;
      updateScrollState();
      lenis.on("scroll", updateScrollState);
    }

    window.addEventListener("lenis-ready", onLenisReady as EventListener);

    const existingLenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number; on: (e: string, fn: () => void) => void } | undefined;
    if (existingLenis) {
      updateScrollState();
      existingLenis.on("scroll", updateScrollState);
    }

    return () => {
      window.removeEventListener("lenis-ready", onLenisReady as EventListener);
    };
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as Record<string, unknown>).__lenis as { stop: () => void; start: () => void } | undefined;
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      id="header"
      className={cn(
        "header",
        "on-home",
        isScrolled && "on-scroll",
        isOnHomeHero && "on-home-hero",
        menuOpen && "menu-open"
      )}
    >
      <div className="header__blur" />
      <div className="container grid">
        <div
          className="header__logo"
          style={{ gridColumn: "1 / 4", gridRow: "1 / 2" }}
        >
          <p className="header__greating fs-16">
            {greeting}
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
          <span className="cl-txt-title fs-14 fw-med" style={{ marginRight: "3.2rem" }}>
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
            style={{ marginLeft: "3.2rem" }}
          >
            Let&apos;s talk!
          </a>
        </div>

        <button
          className={cn("header__toggle hide-dk cl-txt-title fs-16 fw-med", menuOpen && "open")}
          style={{ gridColumn: "4 / 5", justifySelf: "end" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header__toggle-open">Menu</span>
          <span className="header__toggle-close">Close</span>
        </button>
      </div>

      {menuOpen && (
        <div className="header__menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="header__menu-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <div className="container">
              <div className="header__menu-overlay-nav">
                <a href="#" className="header__menu-overlay-link" onClick={() => setMenuOpen(false)}>Index</a>
                <a href="#" className="header__menu-overlay-link" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#" className="header__menu-overlay-link" onClick={() => setMenuOpen(false)}>Projects</a>
              </div>
              <div className="header__menu-overlay-socials">
                <p className="header__menu-overlay-label">Socials</p>
                <a href="#" className="header__menu-overlay-social-link">LinkedIn</a>
                <a href="#" className="header__menu-overlay-social-link">Dribbble</a>
                <a href="#" className="header__menu-overlay-social-link">Twitter/X</a>
              </div>
              <div className="header__menu-overlay-contact">
                <p className="header__menu-overlay-label">Text me</p>
                <a href="mailto:hello@valentincheval.design" className="header__menu-overlay-contact-link">Email</a>
                <a href="https://wa.me/84822235564" className="header__menu-overlay-contact-link">WhatsApp</a>
                <a href="https://t.me/84822235564" className="header__menu-overlay-contact-link">Telegram</a>
              </div>
              <div className="header__menu-overlay-cta">
                <a
                  href="mailto:hello@valentincheval.design"
                  className="header__menu-overlay-cta-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s talk!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
