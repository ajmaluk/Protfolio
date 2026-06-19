import type { ProjectDetail } from "@/data/projects";

interface ProjectMetaProps {
  project: ProjectDetail;
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <dl className="projects-detail__meta">
      <div className="projects-detail__meta-row">
        <dt className="projects-detail__meta-label">Client</dt>
        <dd className="projects-detail__meta-value">{project.client}</dd>
      </div>

      <div className="projects-detail__meta-row">
        <dt className="projects-detail__meta-label">Year</dt>
        <dd className="projects-detail__meta-value">{project.year}</dd>
      </div>

      <div className="projects-detail__meta-row">
        <dt className="projects-detail__meta-label">Category</dt>
        <dd className="projects-detail__meta-value">{project.category}</dd>
      </div>

      <div className="projects-detail__meta-row projects-detail__meta-row--block">
        <dt className="projects-detail__meta-label">Services</dt>
        <dd className="projects-detail__meta-value projects-detail__meta-services">
          {project.services.map((service) => (
            <span key={service} className="projects-detail__meta-tag">
              {service}
            </span>
          ))}
        </dd>
      </div>

      {project.liveUrl && (
        <div className="projects-detail__meta-row">
          <dt className="projects-detail__meta-label">Live</dt>
          <dd className="projects-detail__meta-value">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-detail__meta-link cl-txt-orange"
              aria-label={`Visit ${project.name} live site (opens in new tab)`}
            >
              {project.liveUrl.replace(/^https?:\/\//, "")}
              <span className="ic-arr-wrap ic-16" style={{ "--size": 1.2 } as React.CSSProperties} aria-hidden="true">
                <span className="arr-main ic" style={{ "--size": 1.2 } as React.CSSProperties}>
                  <svg width="100%" viewBox="0 0 20 20" fill="none">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round" />
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </span>
              </span>
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
}