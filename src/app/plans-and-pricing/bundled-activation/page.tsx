import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bundled Activation",
  description: "Experience + Measurement + Reporting together. Best value for end-to-end activations with realmspace.",
};

export default function BundledActivationPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">Bundled Activation</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Experience Layer + Measurement &amp; Insight + Action &amp; Reporting together.
          The complete package for end-to-end activations, including post-activation insight
          reports, benchmark comparisons, CRM integration, and a dedicated account manager.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Experience", "Plan and deliver the physical touchpoints included in the activation scope."],
            ["Measurement", "Instrument agreed zones and interactions with realmspace."],
            ["Reporting", "Translate measured outcomes into a post-activation view and next steps."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a bundled activation</Link>
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium hover:underline">All plans</Link>
        </div>
      </div>
    </section>
  );
}
