import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base — Floats",
  description: "Search the realmspace knowledge base for articles, tutorials, and troubleshooting guides.",
};

export default function KnowledgeBasePage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Knowledge Base</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Browse the realmspace knowledge base for in-depth articles, tutorials, and
          troubleshooting guides. Find answers to common questions and learn advanced
          techniques.
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
