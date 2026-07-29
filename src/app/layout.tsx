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
  title: {
    default:
      "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
    template: "%s | Muhammed Ajmal U K | Uthakkan",
  },
  description:
    "Muhammed Ajmal U K (Ajmal U K / ajmaluk / Uthakkan) — MCA student at College of Engineering Trivandrum (CET) & Full-Stack AI Developer. Creator of ToolPix, KallanCop, DVMA, and Explore Together. Python, Flutter, Next.js expert.",
  keywords: [
    "Muhammed Ajmal U K",
    "Ajmal U K",
    "Ajmal UK",
    "Ajmal",
    "Uthakkan",
    "ajmal uthakkan",
    "ajmal uk",
    "ajmaluk",
    "ajmal.uthakkan.in",
    "Ajmal U K Portfolio",
    "Muhammed Ajmal",
    "MCA Student CET",
    "College of Engineering Trivandrum",
    "Full-Stack AI Developer Kerala",
    "Full Stack Developer India",
    "Python Developer India",
    "Flutter Developer",
    "Next.js Developer",
    "AI Developer Kerala",
    "Software Engineer Kannur",
    "ToolPix AI",
    "KallanCop Game",
    "Dementia Virtual Memory Assistant",
    "Explore Together App",
    "Uthakkan portfolio",
    "ajmal uk resume",
    "ajmal uk linkedin",
    "Muhammed Ajmal U K portfolio",
    "ajmal uk github",
  ],
  authors: [
    { name: "Muhammed Ajmal U K", url: "https://ajmal.uthakkan.in" },
    { name: "Ajmal U K", url: "https://ajmal.uthakkan.in" },
    { name: "Uthakkan", url: "https://ajmal.uthakkan.in" },
  ],
  creator: "Muhammed Ajmal U K (Uthakkan)",
  publisher: "Muhammed Ajmal U K",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
    description:
      "Muhammed Ajmal U K (Ajmal U K / ajmaluk / Uthakkan) is an MCA student & Full-Stack AI Developer building production-ready AI tools, web apps, mobile applications, and digital products in Kerala, India.",
    url: "https://ajmal.uthakkan.in/",
    siteName: "Muhammed Ajmal U K - Portfolio | Uthakkan",
    locale: "en_IN",
    countryName: "India",
    type: "website",
    images: [
      {
        url: "https://ajmal.uthakkan.in/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Ajmal U K - Full-Stack AI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ajmal U K | MCA Student & Full-Stack AI Developer | Uthakkan",
    description:
      "Official portfolio of Muhammed Ajmal U K (Ajmal U K / ajmaluk / Uthakkan) — MCA Student at CET & Full-Stack AI Developer building AI tools, web & mobile apps.",
    images: ["https://ajmal.uthakkan.in/seo/og-image.jpg"],
    creator: "@ajmaluk",
    site: "@ajmaluk",
  },
  alternates: {
    canonical: "https://ajmal.uthakkan.in",
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
  appleWebApp: {
    title: "Ajmal U K | Uthakkan",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  other: {
    "theme-color": "#07070a",
    "format-detection": "telephone=yes",
    "referrer": "origin-when-cross-origin",
    "geo.region": "IN-KL",
    "geo.placename": "Kannur, Kerala, India",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  category: "technology",
  classification: "Portfolio",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ajmal.uthakkan.in/#organization",
  name: "Uthakkan",
  alternateName: ["Muhammed Ajmal U K", "Ajmal Uthakkan"],
  url: "https://ajmal.uthakkan.in",
  logo: "https://ajmal.uthakkan.in/seo/favicon.png",
  sameAs: [
    "https://linkedin.com/in/ajmaluk",
    "https://github.com/ajmaluk",
    "https://instagram.com/ajmaluk.me",
    "https://play.google.com/store/apps/details?id=com.ajmal.kallancop",
    "https://toolpix.pythonanywhere.com",
    "https://dvma-dementia-assistant.pages.dev/",
  ],
  founder: {
    "@type": "Person",
    "@id": "https://ajmal.uthakkan.in/#person",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ajmal.uthakkan.in/#website",
  name: "Muhammed Ajmal U K Portfolio",
  alternateName: [
    "Ajmal U K Portfolio",
    "Ajmal Uthakkan Portfolio",
    "ajmal.uthakkan.in",
    "Uthakkan Portfolio",
  ],
  url: "https://ajmal.uthakkan.in/",
  publisher: { "@id": "https://ajmal.uthakkan.in/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ajmal.uthakkan.in/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ajmal.uthakkan.in/#person",
  name: "Muhammed Ajmal U K",
  alternateName: [
    "Ajmal U K",
    "Ajmal Uthakkan",
    "Ajmal",
    "ajmaluk",
    "Uthakkan",
    "Muhammed Ajmal",
  ],
  givenName: "Muhammed Ajmal",
  familyName: "U K",
  url: "https://ajmal.uthakkan.in",
  image: "https://ajmal.uthakkan.in/images/portrait.jpg",
  logo: "https://ajmal.uthakkan.in/seo/favicon.png",
  jobTitle: "MCA Student & Full-Stack AI Developer",
  worksFor: {
    "@type": "Organization",
    name: "ToolPix AI Platform",
  },
  sameAs: [
    "https://linkedin.com/in/ajmaluk",
    "https://github.com/ajmaluk",
    "https://instagram.com/ajmaluk.me",
    "https://play.google.com/store/apps/details?id=com.ajmal.kallancop",
    "https://toolpix.pythonanywhere.com",
    "https://dvma-dementia-assistant.pages.dev/",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "College of Engineering, Trivandrum (CET)",
      url: "https://www.cet.ac.in",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Mahatma Gandhi College, Iritty",
    },
  ],
  knowsLanguage: ["Malayalam", "English", "Hindi"],
  nationality: {
    "@type": "Country",
    name: "India",
  },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kannur",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
  },
  email: "ajmaluk.me@gmail.com",
  telephone: "+91-8547197122",
  knowsAbout: [
    "Artificial Intelligence",
    "Full-Stack Web Development",
    "Python & Flask",
    "JavaScript & React & Next.js",
    "Flutter & Mobile Development",
    "Firebase & Supabase",
    "LLM & AI API Integrations",
    "Software Architecture",
    "SEO Optimization",
    "AI Agents",
    "Prompt Engineering",
    "Cloud Computing",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    skills:
      "Python, JavaScript, TypeScript, Flutter, Next.js, React, Flask, Firebase, AI, Machine Learning",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ajmal.uthakkan.in" />
        <meta name="theme-color" content="#07070a" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kannur, Kerala, India" />
        <meta name="classification" content="Portfolio" />
        <meta name="twitter:creator" content="@ajmaluk" />
        <meta name="twitter:site" content="@ajmaluk" />
      </head>
      <body className={`${matter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
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