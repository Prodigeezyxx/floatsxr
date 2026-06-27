import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events — Floats",
  description: "Where Floats will be next. Conferences, trade shows, and meetups featuring realmspace.",
};

export default function EventsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Events</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Where Floats will be next. Conferences, trade shows, and meetups where you can
          see realmspace in action and meet the team.
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
