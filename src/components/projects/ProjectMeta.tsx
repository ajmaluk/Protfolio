import type { ProjectDetail } from "@/data/projects";

interface ProjectMetaProps {
  project: ProjectDetail;
}

function getLiveLabel(url: string, projectName: string): string {
  if (url.includes("play.google.com")) return "View on Google Play";
  if (url.includes("mega.nz")) return "Download App Demo";
  try {
    const domain = new URL(url).hostname.replace(/^www\./, "");
    if (domain.length > 24) return `Visit ${projectName}`;
    return domain;
  } catch {
    return "Visit Live Project";
  }
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
        <div className="projects-detail__meta-row projects-detail__meta-row--block">
          <dt className="projects-detail__meta-label">Live Link</dt>
          <dd className="projects-detail__meta-value" style={{ width: "100%", marginTop: "0.8rem" }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-detail__live-btn"
              aria-label={`Open ${project.name} live demo (opens in new tab)`}
            >
              <span>{getLiveLabel(project.liveUrl, project.name)}</span>
              <span className="projects-detail__live-btn-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
}