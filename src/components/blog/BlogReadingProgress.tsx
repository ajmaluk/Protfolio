"use client";

import { useEffect, useState } from "react";

export function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const progressPercent = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="blog-reading-progress"
      style={{
        transform: `scaleX(${progress / 100})`,
      }}
      aria-hidden="true"
    />
  );
}
