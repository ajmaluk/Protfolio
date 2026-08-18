import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist on the portfolio of Muhammed Ajmal U K (Ajmal U K / Uthakkan).",
  robots: { index: false },
  alternates: {
    canonical: "https://ajmal.uthakkan.in/",
  },
};

export default function NotFound() {
  return (
    <div className="wrapper">
      <main
        id="main-content"
        tabIndex={-1}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          gap: "1.6rem",
        }}
      >
        <p className="fs-14 upper fw-med cl-txt-orange">Error 404</p>
        <h1 className="heading display-2 upper fw-bold cl-txt-title">
          Page not found
        </h1>
        <p className="heading h5 cl-txt-sub" style={{ maxWidth: "56rem" }}>
          The page you are looking for doesn&apos;t exist or has been moved.
          Explore the portfolio of Muhammed Ajmal U K instead.
        </p>
        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1.2rem" }}>
          <Link href="/" className="about__cta-btn">
            <span className="about__cta-btn-text">Go Home</span>
          </Link>
          <Link
            href="/projects"
            className="about__cta-btn"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "var(--cl-dm-border)" }}
          >
            <span className="about__cta-btn-text">View Projects</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
