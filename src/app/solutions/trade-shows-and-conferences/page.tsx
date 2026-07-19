import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trade Shows & Conferences",
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
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Create a comparable show-floor view</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Map booths, stages, and shared zones before doors open.</li>
            <li>Compare engagement using consistent definitions and time windows.</li>
            <li>Give organisers and exhibitors an actionable post-show view.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Plan show-floor measurement</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
