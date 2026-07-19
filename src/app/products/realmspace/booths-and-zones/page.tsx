import type { Metadata } from "next";
import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";

export const metadata: Metadata = {
  title: "Booths & Zones — realmspace",
  description: "realmspace instruments every physical touchpoint in your activation — booths, kiosks, zones, digital surfaces.",
};

export default function BoothsAndZonesPage() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="grid-container max-w-[700px]">
          <p className="micro text-cobalt mb-4">realmspace feature</p>
          <h1 className="display-md text-inkwell">Booths & Zones</h1>
          <p className="body-lg text-inkwell/70 mt-6">
            realmspace instruments every physical touchpoint in your activation — booths, kiosks,
            digital surfaces, immersive zones, and branded environments. Each zone becomes a
            measurable data source.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-demo" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">Book a Walkthrough</Link>
            <Link href="/products/realmspace" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">Back to realmspace</Link>
          </div>
        </div>
      </section>
      <ConversionPanel headline="Ready to instrument your activation?" ctaLabel="Get Started" imageSrc="/images/placeholders/immersive-booth-exhibition.svg" imageAlt="Booths and zones" />
    </>
  );
}
