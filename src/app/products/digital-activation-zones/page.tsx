import type { Metadata } from "next";
import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";

export const metadata: Metadata = {
  title: "Digital Activation Zones — Floats",
  description: "Floats builds digital activation zones — kiosks, interactive surfaces, branded digital touchpoints — instrumented with realmspace.",
};

export default function DigitalActivationZonesPage() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="grid-container max-w-[700px]">
          <p className="micro text-cobalt mb-4">What we build</p>
          <h1 className="display-md text-inkwell">Digital Activation Zones</h1>
          <p className="body-lg text-inkwell/70 mt-6">
            Kiosks, interactive surfaces, branded digital touchpoints, immersive projections —
            Floats builds the digital layer of your physical activation. Every zone is a
            measurable engagement surface.
          </p>
          <p className="body-lg text-inkwell/70 mt-4">
            Each zone is pre-instrumented with realmspace, so you know exactly how visitors
            interact, what they engage with, and what drives action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-demo" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">Explore digital zones</Link>
            <Link href="/products" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">All products</Link>
          </div>
        </div>
      </section>
      <ConversionPanel headline="Ready to create a digital activation zone?" ctaLabel="Talk to our team" imageSrc="/images/spatial-tech-city.jpg" imageAlt="Digital activation zone" />
    </>
  );
}
