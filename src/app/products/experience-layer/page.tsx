import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience Layer — Floats",
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
        <div className="mt-8">
          <Link href="/products" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
