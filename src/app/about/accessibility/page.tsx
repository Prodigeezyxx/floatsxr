import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility — Floats",
  description: "Floats is committed to making realmspace and our digital properties accessible to everyone.",
};

export default function AccessibilityPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">Accessibility</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Floats is committed to ensuring that realmspace and our digital properties are
          accessible to everyone, regardless of ability. We continuously work to meet
          WCAG 2.1 AA standards and welcome feedback on how we can improve.
        </p>
        <div className="mt-8">
          <Link href="/about" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to About
          </Link>
        </div>
      </div>
    </section>
  );
}
