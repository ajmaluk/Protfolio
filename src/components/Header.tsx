"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHomeHero, setIsOnHomeHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning!" : hour < 17 ? "Good afternoon!" : "Good evening!";

  useEffect(() => {
    let attachedLenis:
      | { scroll: number; on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void }
      | undefined;

    function updateScrollState() {
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number } | undefined;
      if (!lenis) return;
      const scrollY = lenis.scroll;
      setIsScrolled(scrollY > 50);
      // Only apply hero-state logic on the home page
      const isHome = window.location.pathname === '/';
      if (isHome) {
        const heroHeight = window.innerHeight;
        setIsOnHomeHero(scrollY < heroHeight * 0.5);
      }
    }

    function onLenisReady(e: CustomEvent) {
      const lenis = e.detail.lenis;
      attachedLenis = lenis;
      updateScrollState();
      lenis.on("scroll", updateScrollState);
    }

    window.addEventListener("lenis-ready", onLenisReady as EventListener);

    const existingLenis = (window as unknown as Record<string, unknown>).__lenis as { scroll: number; on: (e: string, fn: () => void) => void; off: (e: string, fn: () => void) => void } | undefined;
    if (existingLenis) {
      attachedLenis = existingLenis;
      updateScrollState();
      existingLenis.on("scroll", updateScrollState);
    }

    return () => {
      window.removeEventListener("lenis-ready", onLenisReady as EventListener);
      if (attachedLenis) {
        attachedLenis.off("scroll", updateScrollState);
      }
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

  // Reset hero state whenever route changes
  useEffect(() => {
    setIsOnHomeHero(pathname === '/');
  }, [pathname]);

  // Close overlay on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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
        <div className="header__logo">
          <p className="header__greating fs-16" aria-hidden={!isOnHomeHero}>
            {greeting}
          </p>
          <Link href="/" transitionTypes={['page-transition']} className="heading h5 fw-med header__name" aria-label="Valentin Cheval — Home">
            <div className="header__name-wrap">
              <div className="cl-txt-title">Valentin</div>
              <div>Product</div>
            </div>
            <div className="header__name-wrap header__name-wrap-second">
              <div>Designer</div>
              <div>Cheval</div>
            </div>
          </Link>
        </div>

        <div className="header__socials hide-mb">
          <span className="cl-txt-title fs-14 fw-med header__socials-label">
            Socials
          </span>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="https://linkedin.com/in/valentinchevaldesign" className="txt-link hover-un header__social fs-14" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">li</a>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="https://dribbble.com/ValentinChevalDesign" className="txt-link hover-un header__social fs-14" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">dr</a>
          <span className="cl-txt-disable fs-14">/</span>
          <a href="https://x.com/valentin_cheval" className="txt-link hover-un header__social fs-14" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">tw</a>
        </div>

        <div className="header__menu hide-mb">
          <Link href="/" transitionTypes={['page-transition']} className={cn("txt-link hover-un fs-14", pathname === '/' && "active")}>Index</Link>
          <span className="splash cl-txt-disable fs-14">/</span>
          <Link href="/about" transitionTypes={['page-transition']} className={cn("txt-link hover-un fs-14", pathname === '/about' && "active")}>About</Link>
          <span className="splash cl-txt-disable fs-14">/</span>
          <Link href="/projects" transitionTypes={['page-transition']} className={cn("txt-link hover-un fs-14", (pathname === '/projects' || pathname.startsWith('/projects/')) && "active")}>Projects</Link>
          <a
            href="mailto:hello@valentincheval.design"
            className="cl-txt-orange header__act fs-14 fw-med"
          >
            Let&apos;s talk!
          </a>
        </div>

        <button
          className={cn("header__toggle hide-dk cl-txt-title fs-16 fw-med", menuOpen && "open")}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="header__toggle-open">Menu</span>
          <span className="header__toggle-close">Close</span>
        </button>
      </div>

      {menuOpen && (
        <div
          className="header__menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onClick={closeMenu}
        >
          <div className="header__menu-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <div className="container">
              <div className="header__menu-overlay-nav">
                <Link href="/" transitionTypes={['page-transition']} className={`header__menu-overlay-link${pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>Index</Link>
                <Link href="/about" transitionTypes={['page-transition']} className={`header__menu-overlay-link${pathname === '/about' ? ' active' : ''}`} onClick={closeMenu}>About</Link>
                <Link href="/projects" transitionTypes={['page-transition']} className={`header__menu-overlay-link${pathname === '/projects' || pathname.startsWith('/projects/') ? ' active' : ''}`} onClick={closeMenu}>Projects</Link>
              </div>
              <div className="header__menu-overlay-socials">
                <p className="header__menu-overlay-label">Socials</p>
                <a href="https://linkedin.com/in/valentinchevaldesign" className="header__menu-overlay-social-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LinkedIn</a>
                <a href="https://dribbble.com/ValentinChevalDesign" className="header__menu-overlay-social-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Dribbble</a>
                <a href="https://x.com/valentin_cheval" className="header__menu-overlay-social-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Twitter/X</a>
              </div>
              <div className="header__menu-overlay-contact">
                <p className="header__menu-overlay-label">Text me</p>
                <a href="mailto:hello@valentincheval.design" className="header__menu-overlay-contact-link" onClick={closeMenu}>Email</a>
                <a href="https://wa.me/84822235564" className="header__menu-overlay-contact-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>WhatsApp</a>
                <a href="https://t.me/84822235564" className="header__menu-overlay-contact-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Telegram</a>
              </div>
              <div className="header__menu-overlay-cta">
                <a
                  href="mailto:hello@valentincheval.design"
                  className="header__menu-overlay-cta-link"
                  onClick={closeMenu}
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
