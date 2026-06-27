import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "realmspace API — Floats",
  description: "Programmatic access to realmspace spatial telemetry, dashboards, and insight data. Build custom experiences with the realmspace API.",
};

export default function RealmspaceApiPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">realmspace</p>
        <h1 className="heading-1 text-inkwell">realmspace API</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Programmatic access to realmspace spatial telemetry, dashboard data, and insight
          reports. Build custom visualisations, integrate with internal tools, or create
          automated reporting workflows.
        </p>
        <div className="mt-8">
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to realmspace
          </Link>
        </div>
      </div>
    </section>
  );
}
