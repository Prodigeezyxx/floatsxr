import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Natural-Language Query",
  description: "Ask supported questions about realmspace activation data using plain language.",
};

export default function NaturalLanguageQueryPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">realmspace</p>
        <h1 className="heading-1 text-inkwell">Natural-Language Query</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Ask supported questions such as &ldquo;How did engagement change across the afternoon?&rdquo;
          or &ldquo;Which zone sustained the most dwell?&rdquo; using plain language. Answers remain
          grounded in the activation data and definitions available to the deployment.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">From question to context</h2>
          <p className="mt-3 text-sm leading-6 text-inkwell/70">Use natural-language query to explore a measured result, then review the relevant timing, zone, and activation context before acting on it.</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/get-a-demo" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">See query in a walkthrough</Link>
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium hover:underline">Back to realmspace</Link>
        </div>
      </div>
    </section>
  );
}
