import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "New to realmspace? Start here for setup guides, best practices, and onboarding resources.",
};

export default function GettingStartedPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Getting started with realmspace</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Every activation has a tailored implementation plan. These three steps help your
          team prepare before the project-specific onboarding begins.
        </p>
        <ol className="mt-10 space-y-4">
          {[
            ["1. Align on the question", "Define the outcome, comparison, or operational decision the activation needs to support."],
            ["2. Map the experience", "Share the floor plan, zones, interactions, dates, and on-site constraints with your implementation contact."],
            ["3. Confirm access", "Identify the people who need reporting access and the systems that may receive an export or integration."],
          ].map(([title, description]) => (
            <li key={title} className="rounded-xl border border-mist/40 p-5 md:flex md:gap-8">
              <h2 className="text-base font-medium text-inkwell md:w-1/3">{title}</h2>
              <p className="caption mt-2 text-inkwell/60 md:mt-0 md:w-2/3">{description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20onboarding%20support" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Contact onboarding support</a>
          <Link href="/support" className="text-cobalt text-sm font-medium hover:underline">&larr; Back to Support</Link>
        </div>
      </div>
    </section>
  );
}
