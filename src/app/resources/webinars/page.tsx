import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars",
  description: "Live and on-demand sessions covering realmspace features, best practices, and industry insights.",
};

export default function WebinarsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Webinars and walkthroughs</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          There are no public webinar recordings available here yet. For a live, relevant
          walkthrough, book time with the Floats team and bring an activation or measurement
          question you are working through.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 p-6">
          <h2 className="text-lg font-medium text-inkwell">A walkthrough can cover</h2>
          <ul className="mt-4 grid gap-2 text-sm text-inkwell/70 md:grid-cols-2">
            <li>Activation and zone setup</li>
            <li>Engagement reporting</li>
            <li>Privacy-first measurement</li>
            <li>Cross-activation comparison</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Book a walkthrough</Link>
          <Link href="/resources" className="text-cobalt text-sm font-medium hover:underline">All resources</Link>
        </div>
      </div>
    </section>
  );
}
