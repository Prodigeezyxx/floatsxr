import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Measurable ROI — Floats",
  description: "For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data from realmspace.",
};

export default function MeasurableRoiPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Measurable ROI</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          For the C-suite who needs defensible spend. realmspace connects spatial
          behaviour to business outcomes, giving you clear, auditable data that proves
          the value of every activation investment.
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
