import Link from "next/link";
import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Floats",
  description: "realmspace works across automotive, luxury retail, sports & entertainment, financial services, technology, and government sectors.",
};

const industries = [
  { name: "Automotive", href: "/industries/automotive", desc: "Auto shows, dealership flagships, and launch events measured with spatial intelligence." },
  { name: "Luxury Retail", href: "/industries/luxury-retail", desc: "Boutique experience measurement for flagship stores and pop-up activations." },
  { name: "Sports & Entertainment", href: "/industries/sports-and-entertainment", desc: "Stadiums, fan zones, and sponsor activations — measured and optimised." },
  { name: "Financial Services", href: "/industries/financial-services", desc: "Branch experience, advisor zones, and branded financial touchpoints." },
  { name: "Technology", href: "/industries/technology", desc: "Product launches, developer events, and partner summits." },
  { name: "Government & Cultural", href: "/industries/government-and-cultural", desc: "Museums, public installations, and civic experiences." },
];

export default function IndustriesPage() {
  return (
    <>
      <HeroGradient
        headline="Industry-specific intelligence."
        subhead="realmspace adapts to how your industry activates. Same technology, tailored measurement."
        ctaLabel="Find your industry"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="grid-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="bg-ecru rounded-lg p-8 hover:shadow-card transition-shadow group"
              >
                <h3 className="heading-3 text-inkwell mb-2 group-hover:text-cobalt transition-colors">
                  {ind.name}
                </h3>
                <p className="caption text-inkwell/60">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ConversionPanel
        headline="Don't see your industry? Let's talk."
        ctaLabel="Contact Sales"
        imageSrc="/images/placeholders/tech-abstract.svg"
        imageAlt="Industries"
      />
    </>
  );
}
