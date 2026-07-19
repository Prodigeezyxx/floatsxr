import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides",
  description: "The Measurable Activation Playbook and other guides to planning, measuring, and improving activations with realmspace.",
};

export default function GuidesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">A practical activation framework</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Our downloadable guide library is still being prepared. In the meantime, use this
          simple framework to plan measurement before an activation goes live.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["1. Define", "Choose the business question and the behaviour that will answer it."],
            ["2. Instrument", "Map zones, interactions, and privacy requirements before installation."],
            ["3. Improve", "Review results against the original question and carry learning forward."],
          ].map(([title, description]) => (
            <li key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Walk through your activation</Link>
          <Link href="/resources/benchmarks" className="text-cobalt text-sm font-medium hover:underline">Explore benchmarks</Link>
        </div>
      </div>
    </section>
  );
}
