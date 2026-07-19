import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Access",
  description: "Request realmspace developer access for an approved customer or partner integration.",
};

export default function FreeDeveloperAccountPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[760px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Request developer access</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          realmspace does not currently offer an open self-service developer account.
          Customer teams and approved partners can request scoped API and documentation
          access for a defined integration.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Include in your request</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Your organisation and realmspace project</li>
            <li>The system or workflow you want to connect</li>
            <li>The data and environment your team needs</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20developer%20access" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">
            Email the developer team
          </a>
          <Link href="/developers" className="text-cobalt text-sm font-medium hover:underline">
            Back to Developers
          </Link>
        </div>
      </div>
    </section>
  );
}
