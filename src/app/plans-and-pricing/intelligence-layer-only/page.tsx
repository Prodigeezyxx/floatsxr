import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intelligence Layer — Floats",
  description: "realmspace intelligence layer standalone. Sensors, dashboard, and natural-language query for activation measurement.",
};

export default function IntelligenceLayerOnlyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">Intelligence Layer</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          The realmspace intelligence layer standalone. Includes spatial telemetry sensors,
          real-time dashboard, natural-language query, session replay, and engagement
          analytics — with our architecture.
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
