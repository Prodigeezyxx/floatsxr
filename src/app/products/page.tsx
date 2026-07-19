import Link from "next/link";
import { HeroGradient } from "@/components/blocks/HeroGradient";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Floats builds immersive booths, digital activation zones, and realmspace — the sensing AI that measures every physical experience.",
};

export default function ProductsPage() {
  return (
    <>
      <HeroGradient
        headline="Booths, zones, and the AI that measures them."
        subhead="Floats builds the physical experience. realmspace captures what happens inside it."
        ctaLabel="Explore realmspace"
        ctaHref="/products/realmspace"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="grid-container">
          <p className="micro text-cobalt mb-2 text-center">Everything we build</p>
          <h2 className="heading-1 text-inkwell text-center max-w-[600px] mx-auto">
            Floats builds the experience. realmspace measures it.
          </h2>
        </div>
      </section>
      <ThreeColumnFeatures
        features={[
          {
            title: "Immersive Booths",
            body: "Custom-designed booths for brand activations, trade shows, and flagship retail. Built to captivate. Pre-instrumented with realmspace.",
            linkLabel: "Learn more",
            linkHref: "/products/immersive-booths",
          },
          {
            title: "Digital Activation Zones",
            body: "Kiosks, interactive surfaces, branded digital touchpoints, and immersive projections. Every zone is a measurable engagement surface.",
            linkLabel: "Learn more",
            linkHref: "/products/digital-activation-zones",
          },
          {
            title: "realmspace",
            body: "sensing AI that captures engagement signals across every touchpoint. Deployed inside every Floats booth and zone.",
            linkLabel: "Explore realmspace",
            linkHref: "/products/realmspace",
          },
        ]}
      />
      <section className="bg-white pb-16 md:pb-20">
        <div className="grid-container flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <Link href="/products/experience-layer" className="text-cobalt hover:underline">Experience layer</Link>
          <Link href="/products/action-reporting" className="text-cobalt hover:underline">Action & reporting</Link>
          <Link href="/products/integrations" className="text-cobalt hover:underline">Integrations</Link>
          <Link href="/products/realmspace/api" className="text-cobalt hover:underline">realmspace API</Link>
        </div>
      </section>
      <section className="bg-ecru py-20 md:py-28">
        <div className="grid-container text-center">
          <h2 className="heading-1 text-inkwell max-w-[700px] mx-auto">
            Built together. Priced to fit.
          </h2>
          <p className="body-lg text-inkwell/60 mt-4 max-w-[600px] mx-auto">
            Get the booth, the zones, and the AI — or just the pieces you need. Every product works with every other product.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/plans-and-pricing" className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">View Plans & Pricing</Link>
            <Link href="/contact-sales" className="inline-flex items-center px-6 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">Contact Sales</Link>
          </div>
        </div>
      </section>
      <ConversionPanel
        headline="Not sure where to start?"
        ctaLabel="Talk to our team"
        ctaHref="/contact-sales"
        imageSrc="/images/placeholders/studio-workspace.svg"
        imageAlt="Floats team"
      />
    </>
  );
}
