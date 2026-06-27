import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive — Floats",
  description: "realmspace for automotive brands. Auto shows, dealership flagships, and launch events measured with spatial intelligence.",
};

export default function AutomotivePage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Automotive</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Auto shows, dealership flagships, and launch events demand precision measurement.
          realmspace captures how visitors engage with every vehicle, display, and
          interactive element — so you know which models drove the most attention.
        </p>
        <div className="mt-8">
          <Link href="/industries" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
