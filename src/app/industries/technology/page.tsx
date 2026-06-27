import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology — Floats",
  description: "Product launches, developer events, and partner summits powered by realmspace intelligence.",
};

export default function TechnologyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Technology</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Product launches, developer events, and partner summits. realmspace gives
          technology brands real-time data on how attendees engage with demos, keynotes,
          and interactive installations.
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
