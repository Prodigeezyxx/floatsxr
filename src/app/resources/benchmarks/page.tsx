import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benchmarks — Floats",
  description: "Activation benchmark data by industry. See how your activation compares with realmspace.",
};

export default function BenchmarksPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Benchmarks</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Activation benchmark data by industry. Compare dwell times, engagement rates, and
          traffic patterns against aggregated, anonymised data from hundreds of realmspace
          deployments.
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
