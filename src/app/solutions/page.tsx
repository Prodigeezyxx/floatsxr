import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
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
            title: "Brand Activations",
            body: "Measure dwell time, engagement depth, and content performance across every touchpoint. Prove the activation worked.",
            linkLabel: "Learn more",
            linkHref: "/solutions/brand-activations",
          },
          {
            title: "Sponsor Measurement",
            body: "Give sponsors a reason to come back. Show them exactly what their investment delivered, with numbers not anecdotes.",
            linkLabel: "Learn more",
            linkHref: "/solutions/sponsor-measurement",
          },
          {
            title: "Trade Shows & Conferences",
            body: "Multi-booth measurement across an entire show floor. Understand traffic patterns and which exhibits drove engagement.",
            linkLabel: "Learn more",
            linkHref: "/solutions/trade-shows-and-conferences",
          },
          {
            title: "Retail Flagship",
            body: "Permanent installation measurement. Understand visitor movement, display conversion, and what drives repeat visits.",
            linkLabel: "Learn more",
            linkHref: "/solutions/retail-flagship",
          },
          {
            title: "Venue Operations",
            body: "Ongoing telemetry for venue operators. Optimise traffic flow, reduce underutilised space, and improve exhibitor ROI.",
            linkLabel: "Learn more",
            linkHref: "/solutions/venue-operations",
          },
          {
            title: "Measurable ROI",
            body: "For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data.",
            linkLabel: "Learn more",
            linkHref: "/solutions/measurable-roi",
          },
        ]}
      />
      <section className="bg-white py-20 md:py-28 border-y border-mist/20">
        <div className="grid-container">
          <div className="text-center mb-14">
            <p className="micro text-cobalt mb-4">Capabilities</p>
            <h2 className="heading-1 text-inkwell">Built on spatial intelligence</h2>
            <p className="body-lg text-inkwell/60 mt-3 max-w-[600px] mx-auto">
              Every realmspace deployment runs on a stack designed for real-world activations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "AR/VR Technologies",
                tags: "WebAR · Object Recognition · Geolocated AR",
                body: "WebAR experiences, product try-ons and spatial mapping for augmented reality. Immersive training, virtual showrooms and branded environments for virtual reality.",
              },
              {
                title: "3D/AI Integration",
                tags: "Training Sims · Virtual Tours · Custom Environments",
                body: "3D design built with AI integration: architectural walkthroughs, product renders and explainer animations powered by intelligent systems.",
              },
              {
                title: "Spatial Tech",
                tags: "Mixed Reality · Gesture Control · Spatial Awareness",
                body: "Spatial computing interfaces that blend physical and digital space: mixed reality, gesture control and spatial awareness systems.",
              },
              {
                title: "Real-time Rendering",
                tags: "120fps · Real-time · Optimisation",
                body: "Photorealistic rendering with advanced lighting, materials and physics, optimised for 120fps and ultra-low latency.",
              },
              {
                title: "Immersive Booths",
                tags: "Exhibition · Interactive · Brand Experience",
                body: "Custom AR/VR booths for trade shows, museums and retail. Interactive exhibition spaces built for brand experiences people remember.",
              },
            ].map((item) => (
              <div key={item.title} className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300">
                <p className="text-sm font-semibold text-inkwell/30 mb-2 tracking-tight">{item.title}</p>
                <p className="micro text-cobalt mb-3">{item.tags}</p>
                <p className="caption text-inkwell/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ConversionPanel
        headline="Not sure which solution fits your activation?"
        ctaLabel="Talk to our team"
        imageSrc="/images/placeholders/spatial-tech-city.svg"
        imageAlt="Activation solutions"
      />
    </>
  );
}
