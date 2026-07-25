import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Ian Vazquez — Full Stack / Backend Developer",
    template: "%s — Ian Vazquez",
  },
  description:
    "Full Stack / Backend Developer. Production-ready systems, real security, real results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
