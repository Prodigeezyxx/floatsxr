import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Overview — Floats",
  description: "realmspace API overview. RESTful endpoints for spatial telemetry and insight data.",
};

export default function ApiOverviewPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">API Overview</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          The realmspace API provides RESTful endpoints for accessing spatial telemetry
          data, dashboard metrics, and insight reports. Build custom integrations,
          visualisations, and automated workflows.
        </p>
        <div className="mt-8">
          <Link href="/developers" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Developers
          </Link>
        </div>
      </div>
    </section>
  );
}
