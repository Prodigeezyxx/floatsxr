import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "Where Floats will be next. Conferences, trade shows, and meetups featuring realmspace.",
};

export default function EventsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Meet the Floats team</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          We do not have a public event schedule posted right now. If you are planning an
          industry event, partner session, or product demonstration, contact us to coordinate
          a conversation with the right person.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=Floats%20event%20enquiry" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Ask about events</a>
          <Link href="/resources/case-studies" className="text-cobalt text-sm font-medium hover:underline">See realmspace in action</Link>
        </div>
      </div>
    </section>
  );
}
