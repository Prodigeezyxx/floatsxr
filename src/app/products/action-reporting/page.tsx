import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Action & Reporting",
  description: "Post-activation insight reports, benchmark comparisons, CRM integrations, and structured recommendations powered by realmspace intelligence.",
};

export default function ActionReportingPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Products</p>
        <h1 className="heading-1 text-inkwell">Action &amp; Reporting</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Post-activation insight reports, benchmark comparisons, CRM integrations, and
          structured recommendations — all powered by realmspace. Every activation makes
          the next one smarter.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["What happened", "Summarise measured behaviour against the activation plan."],
            ["Why it matters", "Add zone, timing, benchmark, and business context."],
            ["What happens next", "Turn the evidence into a specific design or operational action."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">See the reporting approach</Link>
          <Link href="/products" className="text-cobalt text-sm font-medium hover:underline">All products</Link>
        </div>
      </div>
    </section>
  );
}
