import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsor Measurement",
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
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Build the sponsor story around evidence</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Agree the behaviours that matter before the activation.</li>
            <li>Compare sponsor zones on consistent definitions.</li>
            <li>Report what happened, the context, and the next action.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss sponsor measurement</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
