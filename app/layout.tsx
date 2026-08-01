import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ian Vazquez — Full Stack / Backend Developer",
    template: "%s — Ian Vazquez",
  },
  description:
    "Full Stack / Backend Developer. Sistemas de producción reales con seguridad (OWASP Top 10), tests y decisiones técnicas defensivas.",
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
