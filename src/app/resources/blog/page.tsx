import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on spatial intelligence, measurable experiences, and the future of physical activations from the Floats team.",
};

export default function BlogPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Ideas for measurable experiences</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          We are preparing practical articles on spatial intelligence, activation design,
          and proving the value of physical experiences. There are no published posts in
          this library yet.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Start with the evidence</h2>
          <p className="mt-2 text-sm text-inkwell/65">Explore real measurement examples and the language used across realmspace.</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/resources/case-studies" className="text-cobalt text-sm font-medium hover:underline">View case studies</Link>
            <Link href="/resources/glossary" className="text-cobalt text-sm font-medium hover:underline">Browse the glossary</Link>
          </div>
        </div>
        <div className="mt-8">
          <a href="mailto:hello@floatsanywhere.com?subject=Floats%20resource%20updates" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Ask about new resources</a>
        </div>
      </div>
    </section>
  );
}
