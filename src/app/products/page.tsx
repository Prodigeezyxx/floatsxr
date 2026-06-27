import Link from "next/link";
import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { Layers, Radar, FileBarChart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Floats",
  description: "Three integrated layers for measurable physical experiences: Experience Layer, realmspace intelligence, and Action & Reporting.",
};

export default function ProductsPage() {
  return (
    <>
      <HeroGradient
        headline="Three layers. One unified view of your activation."
        subhead="From the physical build to the insight report — everything you need to see, prove, and improve every experience."
        ctaLabel="Explore realmspace"
      />
      <ThreeColumnFeatures
        features={[
          {
            icon: <Layers className="size-6" strokeWidth={1.5} />,
            title: "Experience Layer",
            body: "The physical activation itself — booths, kiosks, digital surfaces, immersive zones, branded touchpoints. Designed, built, and deployed by Floats.",
            linkLabel: "Learn more",
            linkHref: "/products/experience-layer",
          },
          {
            icon: <Radar className="size-6" strokeWidth={1.5} />,
            title: "Measurement & Insight Layer",
            body: "realmspace sensors, telemetry, dashboard, session replay, and plain-English query surface. Captures what people actually do in a physical space.",
            linkLabel: "Explore realmspace",
            linkHref: "/products/realmspace",
          },
          {
            icon: <FileBarChart className="size-6" strokeWidth={1.5} />,
            title: "Action & Reporting Layer",
            body: "Post-activation reports, benchmark data, CRM integration, and structured recommendations. Every activation makes the next one smarter.",
            linkLabel: "Learn more",
            linkHref: "/products/action-reporting",
          },
        ]}
      />
      <section className="bg-ecru py-20 md:py-28">
        <div className="grid-container text-center">
          <h2 className="heading-1 text-inkwell max-w-[700px] mx-auto">
            Built to work together. Priced to buy separately.
          </h2>
          <p className="body-lg text-inkwell/60 mt-4 max-w-[600px] mx-auto">
            Each layer is available on its own or as a bundled activation package. Only pay for what you need.
          </p>
          <Link
            href="/plans-and-pricing"
            className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors mt-8"
          >
            View Plans & Pricing
          </Link>
        </div>
      </section>
      <ConversionPanel
        headline="Not sure which layer fits your activation?"
        ctaLabel="Talk to our team"
        imageSrc="/images/studio-workspace.jpg"
        imageAlt="Floats team"
      />
    </>
  );
}
