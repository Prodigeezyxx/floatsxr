import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Action & Reporting — Floats",
  description: "Post-activation insight reports, benchmark comparisons, CRM integrations, and structured recommendations powered by realmspace intelligence.",
};

export default function ActionReportingPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Products</p>
        <h1 className="heading-1 text-inkwell">Action &amp; Reporting</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Post-activation insight reports, benchmark comparisons, CRM integrations, and
          structured recommendations — all powered by realmspace. Every activation makes
          the next one smarter.
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
