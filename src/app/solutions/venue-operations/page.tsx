import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Venue Operations",
  description: "Ongoing telemetry for venue operators. Optimise traffic flow, reduce underutilised space, and improve exhibitor ROI with realmspace.",
};

export default function VenueOperationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Venue Operations</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Ongoing measurement for venue operators. realmspace helps teams understand traffic
          flow, identify underused space, and provide exhibitors with consistent engagement
          evidence for post-event decisions.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">A repeatable operational view</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Compare recurring events against consistent venue zones.</li>
            <li>Identify flow, dwell, and utilisation patterns.</li>
            <li>Share evidence with operations, commercial, and exhibitor teams.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss venue measurement</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
