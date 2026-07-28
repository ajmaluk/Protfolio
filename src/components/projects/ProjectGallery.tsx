import Image from "next/image";

interface ProjectGalleryProps {
  images: { src: string; alt: string; caption?: string }[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="projects-detail__gallery-section" aria-label={`${projectName} gallery`}>
      <h2 className="heading h4 upper fw-bold projects-detail__gallery-title cl-txt-title">
        Gallery
      </h2>
      <div className="projects-detail__gallery">
        {images.map((image, i) => (
          <figure
            key={`${image.src}-${i}`}
            className="projects-detail__gallery-item"
            data-cursor-text="View"
          >
            <div className="projects-detail__gallery-img-wrap">
              <Image
                src={image.src}
                alt={image.alt}
                width={1280}
                height={800}
                loading="lazy"
                className="projects-detail__gallery-img"
              />
            </div>
            {image.caption && (
              <figcaption className="projects-detail__gallery-caption">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}