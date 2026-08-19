import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://portfolio-blue-three-92.vercel.app";
const SITE_TITLE = "Ian Vazquez — Full Stack / Backend Developer";
const SITE_DESCRIPTION =
  "Full Stack / Backend Developer. Sistemas de producción reales con seguridad (OWASP Top 10), tests y decisiones técnicas defensivas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Ian Vazquez",
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ian Vazquez — Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/01-hero-homepage.webp",
        width: 1283,
        height: 647,
        alt: "Ian Vazquez — Full Stack / Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/01-hero-homepage.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
