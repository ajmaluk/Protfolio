"use client";

import { useEffect, useRef } from "react";

type Variant = "default" | "link" | "text" | "stroke" | "media";

const LINK_SELECTOR =
  "a, button, [role='button'], .home__testi-item, .home__project-name-txt, .home__project-thumbnail-img, .home__intro-company";

function detectVariant(el: Element | null): Variant {
  if (!el) return "default";
  const cursorText = el.closest<HTMLElement>("[data-cursor-text]");
  if (cursorText?.dataset.cursorText) return "text";
  if (el.closest("[data-cursor-stroke]")) return "stroke";
  if (el.closest("[data-cursor-media], img, picture, video")) return "media";
  if (el.closest(LINK_SELECTOR)) return "link";
  return "default";
}

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root: HTMLDivElement = rootRef.current!;
    const ring: HTMLDivElement = ringRef.current!;
    const dot: HTMLDivElement = dotRef.current!;
    const label: HTMLDivElement = labelRef.current!;

    let lastVariant: Variant = "default";
    let lastLabel: string | null = null;
    let lastPressed = false;
    let lastHidden = true;
    let needsClassUpdate = false;

    function applyClasses() {
      needsClassUpdate = false;
      const classes = ["mf-cursor", `is-${lastVariant}`];
      if (lastPressed) classes.push("is-pressed");
      if (lastHidden) classes.push("is-hidden");
      const newClass = classes.join(" ");
      if (root.className !== newClass) {
        root.className = newClass;
      }
      if (lastLabel) {
        if (label.textContent !== lastLabel) label.textContent = lastLabel;
        if (label.style.display !== "flex") label.style.display = "flex";
      } else {
        if (label.style.display !== "none") label.style.display = "none";
      }
    }

    function updateTarget(target: Element | null) {
      const variant = detectVariant(target);
      const cursorText = target?.closest<HTMLElement>("[data-cursor-text]");
      const newLabel = cursorText?.dataset.cursorText ?? null;
      if (variant !== lastVariant || newLabel !== lastLabel) {
        lastVariant = variant;
        lastLabel = newLabel;
        needsClassUpdate = true;
      }
    }

    let lastX = -100;
    let lastY = -100;
    let currentTarget: Element | null = null;
    let rafId = 0;

    function tick() {
      if (dot) {
        dot.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      }
      if (needsClassUpdate) {
        applyClasses();
      }
      rafId = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      lastX = e.clientX;
      lastY = e.clientY;
      if (lastHidden) {
        setHidden(false);
      }
      const target = e.target as Element | null;
      if (target && currentTarget !== target) {
        currentTarget = target;
        updateTarget(target);
      }
    }

    function onScroll() {
      if (currentTarget && lastX >= 0) {
        const el = document.elementFromPoint(lastX, lastY);
        if (el && el !== currentTarget) {
          currentTarget = el;
          updateTarget(el);
        }
      }
    }

    function setPressed(p: boolean) {
      if (p !== lastPressed) {
        lastPressed = p;
        needsClassUpdate = true;
      }
    }

    function setHidden(h: boolean) {
      if (h !== lastHidden) {
        lastHidden = h;
        needsClassUpdate = true;
      }
    }

    function onDown() {
      setPressed(true);
    }
    function onUp() {
      setPressed(false);
    }

    function onWindowLeave(e: MouseEvent) {
      // Hide cursor when leaving the window entirely
      if (e.relatedTarget === null) {
        setHidden(true);
      }
    }
    function onWindowEnter() {
      setHidden(false);
    }

    setHidden(false);
    applyClasses();
    rafId = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    window.addEventListener("mouseout", onWindowLeave);
    window.addEventListener("mouseover", onWindowEnter);
    document.addEventListener("mouseenter", onWindowEnter);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseout", onWindowLeave);
      window.removeEventListener("mouseover", onWindowEnter);
      document.removeEventListener("mouseenter", onWindowEnter);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="mf-cursor is-default"
      aria-hidden="true"
    >
      <div ref={ringRef} className="mf-cursor-ring" style={{ transform: "translate3d(-100px, -100px, 0)" }}>
        <div className="mf-cursor-ring-inner" />
        <div ref={labelRef} className="mf-cursor-label" style={{ display: "none" }} />
      </div>
      <div ref={dotRef} className="mf-cursor-dot" style={{ transform: "translate3d(-100px, -100px, 0)" }} />
    </div>
  );
}
