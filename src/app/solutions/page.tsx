import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { Store, Trophy, Building2, PackageSearch, BarChart3, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — Floats",
  description: "realmspace solutions for brand activations, sponsor measurement, trade shows, retail flagship, and venue operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <HeroGradient
        headline="Solutions built for how you activate."
        subhead="Whether it's a one-day pop-up or a permanent flagship installation, realmspace measures what matters."
        ctaLabel="Find your solution"
      />
      <ThreeColumnFeatures
        features={[
          {
            icon: <Store className="size-6" strokeWidth={1.5} />,
            title: "Brand Activations",
            body: "Measure dwell time, engagement depth, and content performance across every touchpoint. Prove the activation worked.",
            linkLabel: "Learn more",
            linkHref: "/solutions/brand-activations",
          },
          {
            icon: <Trophy className="size-6" strokeWidth={1.5} />,
            title: "Sponsor Measurement",
            body: "Give sponsors a reason to come back. Show them exactly what their investment delivered, with numbers not anecdotes.",
            linkLabel: "Learn more",
            linkHref: "/solutions/sponsor-measurement",
          },
          {
            icon: <Building2 className="size-6" strokeWidth={1.5} />,
            title: "Trade Shows & Conferences",
            body: "Multi-booth measurement across an entire show floor. Understand traffic patterns and which exhibits drove engagement.",
            linkLabel: "Learn more",
            linkHref: "/solutions/trade-shows-and-conferences",
          },
          {
            icon: <PackageSearch className="size-6" strokeWidth={1.5} />,
            title: "Retail Flagship",
            body: "Permanent installation measurement. Understand visitor movement, display conversion, and what drives repeat visits.",
            linkLabel: "Learn more",
            linkHref: "/solutions/retail-flagship",
          },
          {
            icon: <BarChart3 className="size-6" strokeWidth={1.5} />,
            title: "Venue Operations",
            body: "Ongoing telemetry for venue operators. Optimise traffic flow, reduce underutilised space, and improve exhibitor ROI.",
            linkLabel: "Learn more",
            linkHref: "/solutions/venue-operations",
          },
          {
            icon: <Target className="size-6" strokeWidth={1.5} />,
            title: "Measurable ROI",
            body: "For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data.",
            linkLabel: "Learn more",
            linkHref: "/solutions/measurable-roi",
          },
        ]}
      />
      <ConversionPanel
        headline="Not sure which solution fits your activation?"
        ctaLabel="Talk to our team"
        imageSrc="/images/spatial-tech-city.jpg"
        imageAlt="Activation solutions"
      />
    </>
  );
}
