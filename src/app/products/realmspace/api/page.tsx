import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "realmspace API",
  description: "Scoped programmatic access to approved realmspace activation and reporting data.",
};

export default function RealmspaceApiPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">realmspace</p>
        <h1 className="heading-1 text-inkwell">realmspace API</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Scoped programmatic access to approved realmspace activation and reporting data.
          Coordinate exports, internal reporting, or automation under an agreed implementation
          and access model.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Integration starts with scope</h2>
          <p className="mt-3 text-sm leading-6 text-inkwell/70">Floats reviews the data needed, the receiving system, environment boundaries, and security requirements before access is provisioned.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/developers/api-overview" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Read the API overview</Link>
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium hover:underline">Back to realmspace</Link>
        </div>
      </div>
    </section>
  );
}
