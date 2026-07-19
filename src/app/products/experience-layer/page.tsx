import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience Layer",
  description: "The physical activation itself — booths, kiosks, digital surfaces, immersive zones, and branded touchpoints. Designed, built, and deployed by Floats.",
};

export default function ExperienceLayerPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Products</p>
        <h1 className="heading-1 text-inkwell">Experience Layer</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          The physical activation itself — booths, kiosks, digital surfaces, immersive zones,
          and branded touchpoints. Designed, built, and deployed by Floats. Every element is
          instrumented to feed behavioural data into realmspace, so you know exactly what worked.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Designed with measurement in mind</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Define meaningful zones and interactions during experience planning.</li>
            <li>Coordinate the physical, digital, and measurement requirements together.</li>
            <li>Preserve a clear connection between the design decision and reported outcome.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss an experience</Link>
          <Link href="/products" className="text-cobalt text-sm font-medium hover:underline">All products</Link>
        </div>
      </div>
    </section>
  );
}
