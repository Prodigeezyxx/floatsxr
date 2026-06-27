import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developers — Floats",
  description: "Build on realmspace. Explore our API, documentation, and developer tools for spatial intelligence.",
};

export default function DevelopersPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Developers</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Build on realmspace. Explore our API, documentation, and developer tools to
          integrate spatial intelligence into your own applications and workflows.
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
