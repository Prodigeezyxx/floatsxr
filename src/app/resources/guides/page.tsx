import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — Floats",
  description: "The Measurable Activation Playbook and other guides to planning, measuring, and improving activations with realmspace.",
};

export default function GuidesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Guides</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          The Measurable Activation Playbook and other guides to planning, measuring, and
          improving physical experiences. Practical advice from the realmspace team.
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
