import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossary — Floats",
  description: "Spatial telemetry, attribution, session-scoped — defined. The realmspace glossary of terms.",
};

export default function GlossaryPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Glossary</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Spatial telemetry, engagement attribution, session-scoped data — defined. The
          realmspace glossary helps you speak the language of physical experience measurement.
        </p>
        <div className="mt-8">
          <Link href="/resources" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
