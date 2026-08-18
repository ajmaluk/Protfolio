"use client";

import { useState } from "react";

interface BlogShareProps {
  url: string;
  title: string;
}

export function BlogShare({ url, title }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}&via=ajmaluk`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="blog-share">
      <span className="blog-share__label">Share</span>
      <div className="blog-share__buttons">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-share__btn"
          aria-label="Share on X (Twitter)"
          title="Share on X (Twitter)"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-share__btn"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className={`blog-share__btn ${copied ? "blog-share__btn--copied" : ""}`}
          aria-label="Copy link"
          title={copied ? "Link Copied!" : "Copy link"}
        >
          {copied ? (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 4.5L6.5 11.5L3 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M9.33333 6.66667C10.5 7.83333 10.5 9.66667 9.33333 10.8333L6.83333 13.3333C5.66667 14.5 3.83333 14.5 2.66667 13.3333C1.5 12.1667 1.5 10.3333 2.66667 9.16667L4.16667 7.66667M6.66667 9.33333C5.5 8.16667 5.5 6.33333 6.66667 5.16667L9.16667 2.66667C10.3333 1.5 12.1667 1.5 13.3333 2.66667C14.5 3.83333 14.5 5.66667 13.3333 6.83333L11.8333 8.33333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      {copied && <span className="blog-share__toast">Copied!</span>}
    </div>
  );
}
