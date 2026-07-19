import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Measurable ROI",
  description: "For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data from realmspace.",
};

export default function MeasurableRoiPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Measurable ROI</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Give decision-makers a defensible view of activation spend. realmspace connects
          agreed measures of spatial behaviour with the outcome framework your team defines,
          making results easier to explain and compare.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Define", "Agree what success means and which observed behaviours support it."],
            ["Contextualise", "Compare results with zones, timings, objectives, and relevant benchmarks."],
            ["Decide", "Turn the evidence into an investment, design, or operational action."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">See the reporting approach</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
