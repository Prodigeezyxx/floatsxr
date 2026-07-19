import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "Browse realmspace onboarding, privacy, integration, and troubleshooting guidance.",
};

export default function KnowledgeBasePage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Knowledge base</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Public support articles are being prepared. Customer-specific configuration and
          troubleshooting material is provided through your Floats implementation contact.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link href="/support/getting-started" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Planning and onboarding</h2>
            <p className="caption mt-2 text-inkwell/60">Prepare the information needed for a smooth implementation.</p>
          </Link>
          <Link href="/products/realmspace/privacy" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Privacy approach</h2>
            <p className="caption mt-2 text-inkwell/60">Understand the principles behind realmspace measurement.</p>
          </Link>
          <Link href="/developers/api-overview" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">API and integrations</h2>
            <p className="caption mt-2 text-inkwell/60">Review access and integration expectations.</p>
          </Link>
          <Link href="/support/status" className="rounded-xl border border-mist/40 p-6 hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Service issue</h2>
            <p className="caption mt-2 text-inkwell/60">Report an issue with the details support needs.</p>
          </Link>
        </div>
        <div className="mt-8">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20support%20question" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Ask a support question</a>
        </div>
      </div>
    </section>
  );
}
