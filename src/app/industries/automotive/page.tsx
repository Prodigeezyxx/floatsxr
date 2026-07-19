import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automotive",
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
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which vehicles and displays sustained visitor attention?</li>
            <li>How did engagement differ by zone, day, or launch moment?</li>
            <li>Where did the experience lose momentum or create congestion?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss an automotive activation</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
