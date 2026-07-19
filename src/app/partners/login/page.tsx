import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Access",
  description: "Request access to Floats partner resources and programme support.",
};

export default function PartnerLoginPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Partner Access</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Partner resources are currently provisioned directly by the Floats team. Existing
          partners can request access or support by email. New partners can start with the
          programme overview and application route.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:hello@floatsanywhere.com?subject=Partner%20access"
            className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90"
          >
            Request partner access
          </a>
          <Link
            href="/partners/become-a-partner"
            className="inline-flex min-h-11 items-center rounded-lg border border-cobalt px-5 text-sm font-medium text-cobalt hover:bg-cobalt/5"
          >
            Become a partner
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/partners" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
