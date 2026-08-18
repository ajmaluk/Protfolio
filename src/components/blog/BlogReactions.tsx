"use client";

import { useState } from "react";

interface BlogReactionsProps {
  slug: string;
}

export function BlogReactions({ slug }: BlogReactionsProps) {
  const [claps, setClaps] = useState<number>(() => {
    if (typeof window === "undefined") return 12;
    try {
      const saved = localStorage.getItem(`blog_claps_${slug}`);
      return saved ? parseInt(saved, 10) : 12;
    } catch {
      return 12;
    }
  });

  const [hasClapped, setHasClapped] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return Boolean(localStorage.getItem(`blog_claps_${slug}`));
    } catch {
      return false;
    }
  });

  const [reactions, setReactions] = useState<{ [key: string]: boolean }>(() => {
    if (typeof window === "undefined") return { insightful: false, inspiring: false };
    try {
      return {
        insightful: Boolean(localStorage.getItem(`blog_react_insight_${slug}`)),
        inspiring: Boolean(localStorage.getItem(`blog_react_inspire_${slug}`)),
      };
    } catch {
      return { insightful: false, inspiring: false };
    }
  });

  const [counts, setCounts] = useState<{ insightful: number; inspiring: number }>({
    insightful: 8,
    inspiring: 5,
  });

  const [animatingEmoji, setAnimatingEmoji] = useState<string | null>(null);

  const handleClap = () => {
    const newClaps = claps + 1;
    setClaps(newClaps);
    setHasClapped(true);
    setAnimatingEmoji("👏");
    setTimeout(() => setAnimatingEmoji(null), 800);

    try {
      localStorage.setItem(`blog_claps_${slug}`, String(newClaps));
    } catch {
      // Ignore
    }
  };

  const handleToggleReaction = (type: "insightful" | "inspiring", emoji: string) => {
    const isCurrentlyActive = reactions[type];
    const newActive = !isCurrentlyActive;

    setReactions((prev) => ({ ...prev, [type]: newActive }));
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + (newActive ? 1 : -1),
    }));

    if (newActive) {
      setAnimatingEmoji(emoji);
      setTimeout(() => setAnimatingEmoji(null), 800);
    }

    try {
      if (newActive) {
        localStorage.setItem(`blog_react_${type}_${slug}`, "true");
      } else {
        localStorage.removeItem(`blog_react_${type}_${slug}`);
      }
    } catch {
      // Ignore
    }
  };

  return (
    <div className="blog-reactions">
      <div className="blog-reactions__header">
        <p className="blog-reactions__title">Enjoyed this article?</p>
        <p className="blog-reactions__subtitle">
          Leave a reaction or share your appreciation
        </p>
      </div>

      <div className="blog-reactions__buttons">
        <button
          type="button"
          onClick={handleClap}
          className={`blog-reactions__btn ${
            hasClapped ? "blog-reactions__btn--active" : ""
          }`}
          aria-label="Clap for this article"
        >
          <span className="blog-reactions__emoji">👏</span>
          <span className="blog-reactions__label">Clap</span>
          <span className="blog-reactions__count">{claps}</span>
        </button>

        <button
          type="button"
          onClick={() => handleToggleReaction("insightful", "💡")}
          className={`blog-reactions__btn ${
            reactions.insightful ? "blog-reactions__btn--active" : ""
          }`}
          aria-label="Mark as insightful"
        >
          <span className="blog-reactions__emoji">💡</span>
          <span className="blog-reactions__label">Insightful</span>
          <span className="blog-reactions__count">
            {counts.insightful + (reactions.insightful ? 1 : 0)}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleToggleReaction("inspiring", "🚀")}
          className={`blog-reactions__btn ${
            reactions.inspiring ? "blog-reactions__btn--active" : ""
          }`}
          aria-label="Mark as inspiring"
        >
          <span className="blog-reactions__emoji">🚀</span>
          <span className="blog-reactions__label">Inspiring</span>
          <span className="blog-reactions__count">
            {counts.inspiring + (reactions.inspiring ? 1 : 0)}
          </span>
        </button>
      </div>

      {animatingEmoji && (
        <div className="blog-reactions__float-emoji" aria-hidden="true">
          {animatingEmoji}
        </div>
      )}
    </div>
  );
}
