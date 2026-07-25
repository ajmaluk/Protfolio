"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Add is-loading class to body to prevent default scroll
    document.documentElement.classList.add("is-loading");
    document.body.classList.add("is-loading");

    let interval: NodeJS.Timeout | undefined;

    const checkLenis = () => {
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { stop: () => void; start: () => void } | undefined;
      if (lenis) {
        lenis.stop();
      }
    };
    checkLenis();
    interval = setInterval(checkLenis, 50);

    const animTimeout = setTimeout(() => {
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }
      setIsLoaded(true);
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { stop: () => void; start: () => void } | undefined;
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
      clearTimeout(animTimeout);
      clearTimeout(destroyTimeout);
      if (interval) {
        clearInterval(interval);
      }
      document.documentElement.classList.remove("is-loading");
      document.body.classList.remove("is-loading");
      const lenis = (window as unknown as Record<string, unknown>).__lenis as { stop: () => void; start: () => void } | undefined;
      if (lenis) {
        lenis.start();
      }
    };
  }, []);
  if (!visible) return null;

  return (
    <div className={`site-loader ${isLoaded ? "is-loaded" : ""}`}>
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
