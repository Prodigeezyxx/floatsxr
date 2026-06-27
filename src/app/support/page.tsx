import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Floats",
  description: "Welcome to realmspace support. Find help articles, get started guides, and contact our team.",
};

export default function SupportPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Support</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Welcome to realmspace support. Find getting-started guides, browse the knowledge
          base, check system status, or connect with the community.
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
