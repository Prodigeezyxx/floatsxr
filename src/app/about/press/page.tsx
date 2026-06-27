import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press — Floats",
  description: "Press releases, media coverage, and brand assets for Floats and realmspace.",
};

export default function PressPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">Press</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Press releases, media coverage, and brand assets for Floats and realmspace.
          For press inquiries, please contact our communications team.
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
