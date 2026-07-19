import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intelligence Layer",
  description: "realmspace intelligence layer standalone. Sensors, dashboard, and natural-language query for activation measurement.",
};

export default function IntelligenceLayerOnlyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">Intelligence Layer</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Add the realmspace measurement layer to an experience your team or agency already
          operates. The deployment scope can cover spatial telemetry, dashboard access,
          natural-language query, and agreed engagement reporting.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">A good fit when</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>The physical experience is already designed or delivered.</li>
            <li>Your team needs consistent measurement across defined zones.</li>
            <li>Reporting and privacy requirements can be agreed before deployment.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">See the intelligence layer</Link>
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium hover:underline">All plans</Link>
        </div>
      </div>
    </section>
  );
}
