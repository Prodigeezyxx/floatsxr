import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community",
  description: "Connect with the Floats team and ask about customer and partner learning sessions.",
};

export default function CommunityPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Customer and partner learning</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Floats does not currently operate a public community forum. Customer and partner
          conversations are coordinated directly so questions can be answered in the context
          of each activation and implementation.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20customer%20community" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Ask about learning sessions</a>
          <Link href="/support" className="text-cobalt text-sm font-medium hover:underline">&larr; Back to Support</Link>
        </div>
      </div>
    </section>
  );
}
