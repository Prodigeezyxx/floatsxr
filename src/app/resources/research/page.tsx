import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description: "Original research reports on physical experience measurement and spatial intelligence trends from Floats.",
};

export default function ResearchPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Research and measurement</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Floats research focuses on how physical experiences can be measured consistently
          without losing sight of context or privacy. Formal reports are not yet published in
          this library.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link href="/resources/benchmarks" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Activation benchmarks</h2>
            <p className="caption mt-2 text-inkwell/60">See the comparison framework used to put individual outcomes in context.</p>
          </Link>
          <Link href="/resources/case-studies" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Case studies</h2>
            <p className="caption mt-2 text-inkwell/60">Review examples of questions, measured behaviours, and reported outcomes.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
