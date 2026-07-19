import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Overview",
  description: "realmspace API overview. RESTful endpoints for spatial telemetry and insight data.",
};

export default function ApiOverviewPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">API overview</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          The realmspace API is designed to make measured activation data available to
          approved customer and partner systems. Access is scoped to the deployment and
          provisioned as part of implementation.
        </p>
        <div className="mt-10 space-y-4">
          {[
            ["Use measured data", "Work with activation, zone, and engagement outputs in reporting workflows."],
            ["Connect existing systems", "Coordinate exports and integrations with analytics, CRM, or business-intelligence tools."],
            ["Operate with clear scope", "Agree environments, permissions, and data handling before credentials are issued."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5 md:flex md:items-start md:gap-8">
              <h2 className="text-base font-medium text-inkwell md:w-1/3">{title}</h2>
              <p className="caption mt-2 text-inkwell/60 md:mt-0 md:w-2/3">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20API%20access" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">
            Discuss an integration
          </a>
          <Link href="/developers/documentation" className="text-cobalt text-sm font-medium hover:underline">
            Documentation access
          </Link>
        </div>
      </div>
    </section>
  );
}
