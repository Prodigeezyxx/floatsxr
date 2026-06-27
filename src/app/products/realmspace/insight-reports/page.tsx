import type { Metadata } from "next";
import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";

export const metadata: Metadata = {
  title: "Insight Reports — realmspace",
  description: "Post-activation insight reports from realmspace. Clear, plain-English read on what happened, what worked, and what to do next.",
};

export default function InsightReportsPage() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="grid-container max-w-[700px]">
          <p className="micro text-cobalt mb-4">realmspace feature</p>
          <h1 className="display-md text-inkwell">Insight Reports</h1>
          <p className="body-lg text-inkwell/70 mt-6">
            Every activation generates a clear, plain-English report. Not a data dump — a structured
            read on what happened, what worked, and what to do differently next time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-demo" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">See a sample report</Link>
            <Link href="/products/realmspace" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">Back to realmspace</Link>
          </div>
        </div>
      </section>
      <ConversionPanel headline="Ready to see your first insight report?" ctaLabel="Book a Walkthrough" imageSrc="/images/placeholders/tech-abstract.svg" imageAlt="Insight report" />
    </>
  );
}
