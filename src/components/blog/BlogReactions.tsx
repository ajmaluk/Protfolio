"use client";

import { useSyncExternalStore, useState, useCallback } from "react";

interface BlogReactionsProps {
  slug: string;
}

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage-change", callback);
  };
};

export function BlogReactions({ slug }: BlogReactionsProps) {
  const [extraClaps, setExtraClaps] = useState(0);
  const [animatingEmoji, setAnimatingEmoji] = useState<string | null>(null);

  const baseClaps = useSyncExternalStore(
    subscribe,
    () => {
      try {
        const saved = localStorage.getItem(`blog_claps_${slug}`);
        return saved ? parseInt(saved, 10) : 12;
      } catch {
        return 12;
      }
    },
    () => 12
  );

  const hasInsightful = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(`blog_react_insightful_${slug}`) === "true";
      } catch {
        return false;
      }
    },
    () => false
  );

  const hasInspiring = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(`blog_react_inspiring_${slug}`) === "true";
      } catch {
        return false;
      }
    },
    () => false
  );

  const totalClaps = baseClaps + extraClaps;
  const hasClapped = totalClaps > 12;

  const handleClap = useCallback(() => {
    const next = totalClaps + 1;
    setExtraClaps((prev) => prev + 1);
    setAnimatingEmoji("👏");
    setTimeout(() => setAnimatingEmoji(null), 800);

    try {
      localStorage.setItem(`blog_claps_${slug}`, String(next));
      window.dispatchEvent(new Event("local-storage-change"));
    } catch {
      // Ignore
    }
  }, [slug, totalClaps]);

  const handleToggleReaction = useCallback(
    (type: "insightful" | "inspiring", emoji: string) => {
      const isCurrentlyActive = type === "insightful" ? hasInsightful : hasInspiring;
      const nextState = !isCurrentlyActive;

      if (nextState) {
        setAnimatingEmoji(emoji);
        setTimeout(() => setAnimatingEmoji(null), 800);
      }

      try {
        if (nextState) {
          localStorage.setItem(`blog_react_${type}_${slug}`, "true");
        } else {
          localStorage.removeItem(`blog_react_${type}_${slug}`);
        }
        window.dispatchEvent(new Event("local-storage-change"));
      } catch {
        // Ignore
      }
    },
    [slug, hasInsightful, hasInspiring]
  );

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
          <span className="blog-reactions__count">{totalClaps}</span>
        </button>

        <button
          type="button"
          onClick={() => handleToggleReaction("insightful", "💡")}
          className={`blog-reactions__btn ${
            hasInsightful ? "blog-reactions__btn--active" : ""
          }`}
          aria-label="Mark as insightful"
        >
          <span className="blog-reactions__emoji">💡</span>
          <span className="blog-reactions__label">Insightful</span>
          <span className="blog-reactions__count">
            {8 + (hasInsightful ? 1 : 0)}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleToggleReaction("inspiring", "🚀")}
          className={`blog-reactions__btn ${
            hasInspiring ? "blog-reactions__btn--active" : ""
          }`}
          aria-label="Mark as inspiring"
        >
          <span className="blog-reactions__emoji">🚀</span>
          <span className="blog-reactions__label">Inspiring</span>
          <span className="blog-reactions__count">
            {5 + (hasInspiring ? 1 : 0)}
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
