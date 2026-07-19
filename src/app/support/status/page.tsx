import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Support",
  description: "Report a realmspace service issue or request operational support from Floats.",
};

export default function StatusPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Service Support</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Floats does not currently publish a public real-time status dashboard. If you are
          experiencing an issue with realmspace or an active deployment, contact the support
          team with the affected workspace, deployment, and approximate start time.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:hello@floatsanywhere.com?subject=Service%20support"
            className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90"
          >
            Report an issue
          </a>
          <Link
            href="/support/knowledge-base"
            className="inline-flex min-h-11 items-center rounded-lg border border-cobalt px-5 text-sm font-medium text-cobalt hover:bg-cobalt/5"
          >
            Browse support topics
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/support" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Support
          </Link>
        </div>
      </div>
    </section>
  );
}
