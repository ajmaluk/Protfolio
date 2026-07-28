"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Add is-loading class to body to prevent default scroll
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");

    const stopLenis = (lenisInstance?: { stop: () => void }) => {
      const lenis = lenisInstance || ((window as unknown as Record<string, unknown>).__lenis as { stop: () => void } | undefined);
      if (lenis) lenis.stop();
    };

    stopLenis();

    const onLenisReady = (e: CustomEvent) => {
      stopLenis(e.detail?.lenis);
    };

    window.addEventListener("lenis-ready", onLenisReady as EventListener);

    const animTimeout = setTimeout(() => {
      window.removeEventListener("lenis-ready", onLenisReady as EventListener);
      setIsLoaded(true);
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { start: () => void } | undefined;
      if (lenis) {
        lenis.start();
      }
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
    }, 1500); // 1.5s display duration

    const destroyTimeout = setTimeout(() => {
      setVisible(false);
    }, 3100); // 1.5s + 1.6s animation exit

    return () => {
      window.removeEventListener("lenis-ready", onLenisReady as EventListener);
      clearTimeout(animTimeout);
      clearTimeout(destroyTimeout);
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { start: () => void } | undefined;
      if (lenis) {
        lenis.start();
      }
    };
  }, []);
  if (!visible) return null;

  return (
    <div className={`site-loader ${isLoaded ? "is-loaded" : ""}`} role="status" aria-live="polite">
      {/* Top-Right diagonal panel */}
      <div className="loader-panel loader-panel--top-right" />

      {/* Bottom-Left diagonal panel */}
      <div className="loader-panel loader-panel--bottom-left">
        {/* Loading text container inside the bottom-left panel */}
        <div className="loader-content">
          <div className="loader-status">Loading..</div>
          <h1 className="loader-name">
            <span className="loader-firstname">Ajmal</span>
            <span className="loader-lastname">U K</span>
          </h1>
        </div>
      </div>

      {/* Thin diagonal line divider */}
      <div className="loader-line">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.08" />
          <line className="loader-line-active" x1="0" y1="0" x2="100" y2="100" stroke="#ff3d00" strokeWidth="0.12" />
        </svg>
      </div>
    </div>
  );
}
