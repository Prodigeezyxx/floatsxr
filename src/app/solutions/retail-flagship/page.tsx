import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retail Flagship",
  description: "Permanent installation measurement. Understand visitor movement, display conversion, and what drives repeat visits with realmspace.",
};

export default function RetailFlagshipPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Solutions</p>
        <h1 className="heading-1 text-inkwell">Retail Flagship</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Permanent installation measurement for flagship retail spaces. realmspace
          captures visitor movement, display conversion rates, and the behavioural
          patterns that drive repeat visits.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Learn across time, not just one launch</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Create a stable zone map for repeatable comparison.</li>
            <li>Review changes by campaign, collection, or store moment.</li>
            <li>Connect observed behaviour with operational and creative decisions.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a flagship programme</Link>
          <Link href="/solutions" className="text-cobalt text-sm font-medium hover:underline">All solutions</Link>
        </div>
      </div>
    </section>
  );
}
