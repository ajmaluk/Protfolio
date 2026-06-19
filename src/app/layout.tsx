import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SiteLoader } from "@/components/SiteLoader";
import { CustomCursor } from "@/components/CustomCursor";
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
  metadataBase: new URL("https://valentincheval.design"),
  title: "Valentin Cheval | UX/UI & Brand Design Leader",
  description:
    "I'm an award winning product designer specialized in financial products. I working for Financial Products in Fintech, crypto and Web3.",
  openGraph: {
    title: "Valentin Cheval | UX/UI & Brand Design Leader",
    type: "website",
    url: "https://valentincheval.design/",
    images: [
      {
        url: "/seo/og-image.jpg",
        alt: "Valentin Cheval Portfolio OpenGraph",
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
  return (
    <html lang="en">
      <body className={`${matter.variable}`}>
        <SmoothScroll />
        <NoiseOverlay />
        <CustomCursor />
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}

