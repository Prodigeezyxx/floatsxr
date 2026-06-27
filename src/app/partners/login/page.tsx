import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Login — Floats",
  description: "Partner portal login for Floats partners and resellers.",
};

export default function PartnerLoginPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Partner Login</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Sign in to the Floats partner portal to access resources, track deals, manage
          referrals, and view programme performance.
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
