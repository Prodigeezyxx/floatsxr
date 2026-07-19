import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Partner",
  description: "Apply to become a Floats partner and join our network of agencies, integrators, and resellers.",
};

export default function BecomeAPartnerPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Start a partner conversation</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Tell us how your team works, the clients or markets you serve, and where realmspace
          could complement your existing offer. Partner arrangements are reviewed directly
          rather than through an automated application.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Useful details to include</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Your organisation, location, and core services</li>
            <li>The type of physical experiences your team supports</li>
            <li>A current opportunity or integration you want to discuss</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=Floats%20partner%20enquiry" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Email the partnerships team</a>
          <Link href="/partners" className="text-cobalt text-sm font-medium hover:underline">Back to Partners</Link>
        </div>
      </div>
    </section>
  );
}
