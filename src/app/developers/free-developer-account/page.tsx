import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Developer Account — Floats",
  description: "Get a free realmspace developer account and start building with spatial intelligence today.",
};

export default function FreeDeveloperAccountPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Free Developer Account</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Get a free realmspace developer account and start building today. Access API
          endpoints, test data, and documentation — no credit card required.
        </p>
        <div className="mt-8">
          <Link href="/developers" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Developers
          </Link>
        </div>
      </div>
    </section>
  );
}
