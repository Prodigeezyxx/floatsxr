import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsor Measurement — Floats",
  description: "Give sponsors a reason to come back. Show them exactly what their investment delivered using realmspace engagement data.",
};

export default function SponsorMeasurementPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Sponsor Measurement</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Give sponsors a reason to come back. realmspace captures engagement data across
          every sponsored touchpoint, so you can show exactly what their investment
          delivered.
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
