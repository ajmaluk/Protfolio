"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, closeModal]);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="projects-detail__gallery-section" aria-label={`${projectName} gallery`}>
      <div className="projects-detail__gallery-header">
        <h2 className="heading h4 upper fw-bold projects-detail__gallery-title cl-txt-title">
          Gallery ({images.length})
        </h2>
        {images.length > 1 && (
          <div className="projects-detail__gallery-controls">
            <button
              type="button"
              className="projects-detail__gallery-arrow"
              onClick={() => scrollSlider("left")}
              aria-label="Scroll gallery left"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M18 10H2M10 2L2 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="projects-detail__gallery-arrow"
              onClick={() => scrollSlider("right")}
              aria-label="Scroll gallery right"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M2 10H18M10 2L18 10L10 18" stroke="currentColor" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="projects-detail__gallery-slider-wrap">
        <div ref={sliderRef} className="projects-detail__gallery-slider">
          {images.map((image, i) => (
            <figure
              key={`${image.src}-${i}`}
              className="projects-detail__gallery-card"
              onClick={() => setSelectedImage(image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(image);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View full size image for ${image.alt}`}
              data-cursor-text="Expand"
            >
              <div className="projects-detail__gallery-card-img-wrap">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  unoptimized={image.src.startsWith("http")}
                  className="projects-detail__gallery-card-img"
                />
                <div className="projects-detail__gallery-card-overlay">
                  <span className="projects-detail__gallery-card-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </span>
                  <span className="projects-detail__gallery-card-label">Expand</span>
                </div>
              </div>
              {image.caption && (
                <figcaption className="projects-detail__gallery-card-caption">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedImage && (
        <div
          className="projects-detail__lightbox"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Full size image viewer"
        >
          <button
            type="button"
            className="projects-detail__lightbox-close"
            onClick={closeModal}
            aria-label="Close image preview"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div
            className="projects-detail__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="projects-detail__lightbox-img-wrap">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1920}
                height={1200}
                priority
                unoptimized={selectedImage.src.startsWith("http")}
                className="projects-detail__lightbox-img"
              />
            </div>
            {selectedImage.caption || selectedImage.alt ? (
              <p className="projects-detail__lightbox-caption">
                {selectedImage.caption || selectedImage.alt}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}