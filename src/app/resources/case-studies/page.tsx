import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Floats",
  description: "Real activations, real results. Browse case studies from realmspace deployments across industries.",
};

export default function CaseStudiesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Case Studies</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Real activations, real results. Explore how brands across industries use realmspace
          to measure, prove, and improve their physical experiences.
        </p>
        <div className="mt-8">
          <Link href="/resources" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
