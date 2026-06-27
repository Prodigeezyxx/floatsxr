import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Plans — Floats",
  description: "Usage-based API access to realmspace data. Build custom experiences on our spatial intelligence layer.",
};

export default function ApiPlansPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">API Plans</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Usage-based API access to realmspace spatial telemetry and insight data. Build
          custom visualisations, integrate with internal tools, or create automated reporting
          workflows. Pay only for what you use.
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
