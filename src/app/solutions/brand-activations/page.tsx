import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Activations",
  description: "Measure dwell time, engagement depth, and content performance across every touchpoint. Prove your activation worked with realmspace.",
};

export default function BrandActivationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Brand Activations</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Measure dwell time, engagement depth, and content performance across every
          touchpoint in your activation. realmspace gives you the data to prove what
          worked and what to do differently next time.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Plan", "Define the audience behaviours and business outcome before build begins."],
            ["Measure", "Compare movement, dwell, and interaction across meaningful zones."],
            ["Improve", "Turn results into clear recommendations for the next activation."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Walk through an activation</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
