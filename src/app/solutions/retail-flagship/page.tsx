import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retail Flagship — Floats",
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
        <div className="mt-8">
          <Link href="/solutions" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
