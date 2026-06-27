import Link from "next/link";
import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Floats",
  description: "Case studies, blog, webinars, guides, benchmarks, and research from Floats and realmspace.",
};

const resourceLinks = [
  { label: "Case Studies", href: "/resources/case-studies", desc: "Real activations, real results." },
  { label: "Blog", href: "/resources/blog", desc: "Thoughts on spatial intelligence and measurable experiences." },
  { label: "Webinars", href: "/resources/webinars", desc: "Live and on-demand sessions." },
  { label: "Guides", href: "/resources/guides", desc: "The Measurable Activation Playbook and more." },
  { label: "Benchmarks", href: "/resources/benchmarks", desc: "Activation benchmark data by industry." },
  { label: "Glossary", href: "/resources/glossary", desc: "Spatial telemetry, attribution, session-scoped — defined." },
  { label: "Research", href: "/resources/research", desc: "Original research reports on physical experience measurement." },
  { label: "Events", href: "/resources/events", desc: "Where Floats will be next." },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroGradient
        headline="Resources to help you measure better."
        subhead="Case studies, guides, benchmarks, and research from the team building privacy-first spatial intelligence."
        ctaLabel="Explore resources"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="grid-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceLinks.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="bg-ecru rounded-lg p-6 hover:shadow-card transition-shadow group"
              >
                <h3 className="text-sm font-medium text-inkwell mb-1 group-hover:text-cobalt transition-colors">
                  {r.label}
                </h3>
                <p className="caption text-inkwell/60">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ConversionPanel
        headline="Want the latest resources delivered to your inbox?"
        ctaLabel="Subscribe"
        imageSrc="/images/studio-workspace.jpg"
        imageAlt="Resources"
      />
    </>
  );
}
