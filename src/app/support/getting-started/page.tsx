import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started — Floats",
  description: "New to realmspace? Start here for setup guides, best practices, and onboarding resources.",
};

export default function GettingStartedPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Getting Started</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          New to realmspace? Start here. Our getting-started guides walk you through sensor
          setup, dashboard configuration, and best practices for your first activation.
        </p>
        <div className="mt-8">
          <Link href="/support" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Support
          </Link>
        </div>
      </div>
    </section>
  );
}
