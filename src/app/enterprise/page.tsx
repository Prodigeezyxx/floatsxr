import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Custom deployments, multi-activation programmes, and strategic retainer services for enterprise clients.",
};

export default function EnterprisePage() {
  return (
    <>
      <HeroGradient
        headline="Enterprise-grade activation intelligence."
        subhead="Custom deployments, multi-activation programmes, dedicated infrastructure, and strategic services for large organisations."
        ctaLabel="Talk to Enterprise Sales"
      />
      <ThreeColumnFeatures
        features={[
          {
            title: "Custom Deployments",
            body: "Dedicated infrastructure, custom integrations, white-label reporting, and SLA-backed uptime for mission-critical activations.",
            linkLabel: "Learn more",
            linkHref: "/enterprise/services",
          },
          {
            title: "Enterprise Security",
            body: "Enterprise-grade infrastructure with data residency options, SSO/SAML, role-based access control, and dedicated privacy reviews.",
            linkLabel: "View security",
            linkHref: "/enterprise/security",
          },
          {
            title: "Strategic Services",
            body: "Dedicated account management, strategic planning sessions, custom dashboard development, and priority support.",
            linkLabel: "Learn more",
            linkHref: "/enterprise/services",
          },
        ]}
      />
      <ConversionPanel
        headline="Ready to scale your activation programme?"
        ctaLabel="Talk to Enterprise Sales"
        imageSrc="/images/placeholders/spatial-tech-city.svg"
        imageAlt="Enterprise deployment"
      />
    </>
  );
}
