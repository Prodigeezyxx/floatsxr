import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description: "realmspace developer documentation. Guides, API references, and code examples.",
};

export default function DocumentationPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Implementation documentation</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          realmspace documentation is currently shared directly with customers and approved
          partners so examples can match each deployment, data model, and security setup.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Getting started", "Credentials, environments, and a first authenticated request."],
            ["Data reference", "Activation, zone, interaction, and reporting concepts."],
            ["Integration guides", "Patterns for exports, dashboards, and operational workflows."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20documentation%20request" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">
            Request documentation
          </a>
          <Link href="/developers/api-overview" className="text-cobalt text-sm font-medium hover:underline">
            Read the API overview
          </Link>
        </div>
      </div>
    </section>
  );
}
