import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Floats — Spatial Intelligence for Physical Experiences",
    template: "%s | Floats",
  },
  description:
    "realmspace helps brands and venue operators see what happened in a physical experience, prove what worked, and improve what happens next.",
  openGraph: {
    title: "Floats — Spatial Intelligence for Physical Experiences",
    description:
      "realmspace captures, measures, and improves every physical experience.",
    type: "website",
    siteName: "Floats",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ecru text-inkwell font-sans overflow-x-hidden">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
