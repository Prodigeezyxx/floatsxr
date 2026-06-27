import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services — Floats",
  description: "Branch experience, advisor zones, and branded financial touchpoints measured with realmspace intelligence.",
};

export default function FinancialServicesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Financial Services</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Branch experience, advisor zones, and branded financial touchpoints. realmspace
          helps financial institutions understand how clients engage with physical spaces
          and identify opportunities to improve the in-person experience.
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
