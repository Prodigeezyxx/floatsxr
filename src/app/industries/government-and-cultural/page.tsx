import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government & Cultural — Floats",
  description: "Museums, public installations, and civic experiences measured with realmspace.",
};

export default function GovernmentAndCulturalPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Government &amp; Cultural</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Museums, public installations, and civic experiences. realmspace measures
          how visitors engage with cultural spaces — always. Understand
          traffic patterns, popular exhibits, and dwell times without compromise.
        </p>
        <div className="mt-8">
          <Link href="/industries" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
