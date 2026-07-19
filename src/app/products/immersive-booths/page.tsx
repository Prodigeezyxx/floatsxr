import type { Metadata } from "next";
import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";

export const metadata: Metadata = {
  title: "Immersive Booths",
  description: "Floats designs and builds immersive booths for brand activations, trade shows, and flagship retail experiences.",
};

export default function ImmersiveBoothsPage() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="grid-container max-w-[700px]">
          <p className="micro text-cobalt mb-4">What we build</p>
          <h1 className="display-md text-inkwell">Immersive Booths</h1>
          <p className="body-lg text-inkwell/70 mt-6">
            Floats designs and builds immersive booths that stop people in their tracks. From
            auto shows to trade exhibits to flagship retail installations — every booth is
            built to capture attention and instrumented to capture data.
          </p>
          <p className="body-lg text-inkwell/70 mt-4">
            Every Floats booth ships with realmspace-ready sensors, so you start measuring
            engagement from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-demo" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">Book a consultation</Link>
            <Link href="/products" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">All products</Link>
          </div>
        </div>
      </section>
      <ConversionPanel headline="Ready to build a booth that measures what matters?" ctaLabel="Talk to our team" imageSrc="/images/placeholders/immersive-booth-exhibition.svg" imageAlt="Floats immersive booth" />
    </>
  );
}
