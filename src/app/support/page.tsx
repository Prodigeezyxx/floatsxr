import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Welcome to realmspace support. Find help articles, get started guides, and contact our team.",
};

export default function SupportPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[900px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">How can we help?</h1>
        <p className="body-lg text-inkwell/70 mt-6 max-w-[700px]">
          Find the right starting point for onboarding, troubleshooting, or service questions.
          Customer-specific setup material is shared directly with each implementation team.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Getting started", "/support/getting-started", "Prepare your team, activation plan, and setup information."],
            ["Knowledge base", "/support/knowledge-base", "Find answers and the right route for common questions."],
            ["Service status", "/support/status", "Learn how to report an issue and receive updates."],
          ].map(([title, href, description]) => (
            <Link key={title} href={href} className="rounded-xl border border-mist/40 p-6 transition-colors hover:border-cobalt/40">
              <h2 className="text-lg font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20support" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Contact support</a>
        </div>
      </div>
    </section>
  );
}
