import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners — Floats",
  description: "Partner with Floats. Join our partner programme and grow your business with realmspace.",
};

export default function PartnersPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Partners</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Partner with Floats and join a network of agencies, integrators, and technology
          partners. We&apos;ll help you deliver measurable physical experiences to your clients.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}


