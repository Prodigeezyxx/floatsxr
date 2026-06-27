import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation — Floats",
  description: "realmspace developer documentation. Guides, API references, and code examples.",
};

export default function DocumentationPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Documentation</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Comprehensive realmspace developer documentation. Guides, API references, code
          examples, and best practices for building on our spatial intelligence platform.
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
