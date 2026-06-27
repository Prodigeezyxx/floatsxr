import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Activations — Floats",
  description: "Measure dwell time, engagement depth, and content performance across every touchpoint. Prove your activation worked with realmspace.",
};

export default function BrandActivationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Brand Activations</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Measure dwell time, engagement depth, and content performance across every
          touchpoint in your activation. realmspace gives you the data to prove what
          worked and what to do differently next time.
        </p>
        <div className="mt-8">
          <Link href="/solutions" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
