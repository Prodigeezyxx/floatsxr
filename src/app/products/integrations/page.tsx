import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Plan realmspace data exports and approved integrations around your reporting and operational workflow.",
};

export default function IntegrationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Products</p>
        <h1 className="heading-1 text-inkwell">Fit realmspace into your data workflow</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Integration design starts with the decision your team needs to make and the system
          where that decision happens. Floats then scopes an appropriate export or API workflow
          for the deployment.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Reporting", "Bring agreed metrics into existing business-intelligence or reporting processes."],
            ["Operations", "Use activation outputs in the workflows teams already follow after an event."],
            ["Data teams", "Coordinate structured access, permissions, and definitions with technical stakeholders."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss an integration</Link>
          <Link href="/developers/api-overview" className="text-cobalt text-sm font-medium hover:underline">API overview</Link>
        </div>
      </div>
    </section>
  );
}
