import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trade Shows & Conferences — Floats",
  description: "Multi-booth measurement across an entire show floor. Understand traffic patterns and which exhibits drove engagement with realmspace.",
};

export default function TradeShowsAndConferencesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Trade Shows &amp; Conferences</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Multi-booth measurement across an entire show floor. realmspace helps you
          understand traffic patterns, compare exhibit performance, and identify which
          zones drove the deepest engagement.
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
