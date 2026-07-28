import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SiteLoader } from "@/components/SiteLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { Header } from "@/components/Header";
import "./globals.css";

const matter = localFont({
  src: [
    { path: "../../public/fonts/MatterRegular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/MatterMedium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/MatterSemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/MatterBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-matter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajmal.uthakkan.in"),
  title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer",
  description:
    "Muhammed Ajmal U K is an MCA student, AI enthusiast, and full-stack developer focused on building production-ready web applications, AI tools, mobile apps, and digital products.",
  openGraph: {
    title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer",
    type: "website",
    url: "https://ajmal.uthakkan.in/",
    images: [
      {
        url: "/seo/og-image.jpg",
        alt: "Muhammed Ajmal U K Portfolio",
      },
    ],
  },
  icons: {
    icon: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammed Ajmal U K",
    url: "https://ajmal.uthakkan.in",
    image: "https://ajmal.uthakkan.in/images/portrait.jpg",
    jobTitle: "MCA Student & Full-Stack AI Developer",
    description:
      "Muhammed Ajmal U K is an MCA student, AI enthusiast, and full-stack developer from Kerala, India. Building production-ready AI tools, web applications, mobile apps, and digital products.",
    sameAs: [
      "https://linkedin.com/in/ajmaluk",
      "https://github.com/ajmaluk",
      "https://instagram.com/ajmaluk.me",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Flutter",
      "Cloud Computing",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${matter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <NoiseOverlay />
        <Header />
        <CustomCursor />
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}

