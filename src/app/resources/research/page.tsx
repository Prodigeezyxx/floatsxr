import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research — Floats",
  description: "Original research reports on physical experience measurement and spatial intelligence trends from Floats.",
};

export default function ResearchPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Research</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Original research reports on physical experience measurement, spatial intelligence
          trends, and the future of brand activations. Data-driven insights from the Floats
          research team.
        </p>
        <div className="mt-8">
          <Link href="/resources" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
