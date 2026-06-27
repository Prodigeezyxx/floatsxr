import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bundled Activation — Floats",
  description: "Experience + Measurement + Reporting together. Best value for end-to-end activations with realmspace.",
};

export default function BundledActivationPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">Bundled Activation</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Experience Layer + Measurement &amp; Insight + Action &amp; Reporting together.
          The complete package for end-to-end activations, including post-activation insight
          reports, benchmark comparisons, CRM integration, and a dedicated account manager.
        </p>
        <div className="mt-8">
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Plans &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
