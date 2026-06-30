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
    default: "Floats — Trade Show ROI & Brand Activation Measurement Platform",
    template: "%s | Floats",
  },
  description:
    "Measure trade show ROI, brand activation performance, and experiential marketing impact. realmspace by Floats turns physical events into attributable reports your CFO will approve.",
  openGraph: {
    title: "Floats — Trade Show ROI & Brand Activation Measurement",
    description:
      "Measure, prove, and improve every physical activation with attribution-ready analytics. Book a pilot.",
    type: "website",
    siteName: "Floats",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-ecru text-inkwell font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
