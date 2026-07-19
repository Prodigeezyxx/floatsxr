import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government & Cultural",
  description: "Museums, public installations, and civic experiences measured with realmspace.",
};

export default function GovernmentAndCulturalPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Government &amp; Cultural</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Museums, public installations, and civic experiences. realmspace helps teams
          understand traffic patterns, exhibit engagement, and dwell while planning the
          measurement approach around each venue&apos;s context and privacy requirements.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which exhibits or public zones invite deeper engagement?</li>
            <li>Where do visitor flow and dwell indicate an operational issue?</li>
            <li>How can future programming respond to observed behaviour?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a cultural experience</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
