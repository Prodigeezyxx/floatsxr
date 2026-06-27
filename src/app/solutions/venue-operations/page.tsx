import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Venue Operations — Floats",
  description: "Ongoing telemetry for venue operators. Optimise traffic flow, reduce underutilised space, and improve exhibitor ROI with realmspace.",
};

export default function VenueOperationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Venue Operations</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Ongoing telemetry for venue operators. realmspace helps you optimise traffic
          flow, reduce underutilised space, and give exhibitors clear ROI data that
          makes them rebook year after year.
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
