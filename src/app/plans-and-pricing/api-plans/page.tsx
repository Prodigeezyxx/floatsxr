import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Plans",
  description: "Scoped realmspace API access for approved customer and partner integrations.",
};

export default function ApiPlansPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">API Plans</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Scoped API access for approved customer and partner integrations. Build reporting
          workflows or connect realmspace outputs with internal tools under an agreed data,
          environment, and support model.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Plan scope depends on</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>The activation data and reporting outputs required</li>
            <li>The connected systems, environments, and access model</li>
            <li>Expected implementation and ongoing support needs</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Scope API access</Link>
          <Link href="/developers/api-overview" className="text-cobalt text-sm font-medium hover:underline">API overview</Link>
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium hover:underline">All plans</Link>
        </div>
      </div>
    </section>
  );
}
