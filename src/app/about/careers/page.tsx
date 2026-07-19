import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Floats and help build the future of physical experience measurement with realmspace.",
};

export default function CareersPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">Careers</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Join Floats and help build the future of physical experience measurement. We&apos;re
          looking for people who believe that every activation should be measurable, improvable,
          and accountable.
        </p>
        <div className="mt-8">
          <Link href="/about" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to About
          </Link>
        </div>
      </div>
    </section>
  );
}
