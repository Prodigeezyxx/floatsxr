import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Natural-Language Query — Floats",
  description: "Ask your realmspace data plain-English questions and get instant answers. No dashboard training required.",
};

export default function NaturalLanguageQueryPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">realmspace</p>
        <h1 className="heading-1 text-inkwell">Natural-Language Query</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Type questions like &ldquo;How many people visited the demo zone between 2 and 4pm?&rdquo;
          or &ldquo;Which content drove the highest completion rate?&rdquo; and get instant answers.
          No dashboard training. No complex queries. Just plain English.
        </p>
        <div className="mt-8">
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to realmspace
          </Link>
        </div>
      </div>
    </section>
  );
}
