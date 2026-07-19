import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Security",
  description: "Review privacy, access, data handling, and deployment requirements for an enterprise realmspace implementation.",
};

export default function EnterpriseSecurityPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Enterprise</p>
        <h1 className="heading-1 text-inkwell">Security and privacy review</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Enterprise requirements are reviewed during solution design. Floats works with
          customer security, privacy, and procurement teams to document the proposed
          deployment before an activation goes live.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Data handling", "Define the data collected, purpose, retention expectations, and approved outputs."],
            ["Access", "Agree who needs platform or report access and how responsibilities are separated."],
            ["Deployment", "Review activation environments, operational ownership, and implementation controls."],
            ["Documentation", "Coordinate the privacy and security material required for customer review."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Start a security review</Link>
          <Link href="/products/realmspace/privacy" className="text-cobalt text-sm font-medium hover:underline">Privacy approach</Link>
        </div>
      </div>
    </section>
  );
}
