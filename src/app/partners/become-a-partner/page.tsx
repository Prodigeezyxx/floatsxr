import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Partner — Floats",
  description: "Apply to become a Floats partner and join our network of agencies, integrators, and resellers.",
};

export default function BecomeAPartnerPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Become a Partner</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Apply to join the Floats partner programme. Agencies, integrators, and resellers
          who bring realmspace to their clients benefit from training, support, and
          preferred pricing.
        </p>
        <div className="mt-8">
          <Link href="/partners" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
