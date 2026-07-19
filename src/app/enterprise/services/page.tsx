import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Services",
  description: "Dedicated account management, strategic planning, custom dashboard development, and priority support for enterprise clients.",
};

export default function EnterpriseServicesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Enterprise</p>
        <h1 className="heading-1 text-inkwell">Services for programmes at scale</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Build a repeatable measurement approach across teams, venues, and activations with
          implementation support shaped around your programme.
        </p>
        <div className="mt-10 space-y-4">
          {[
            ["Programme design", "Align business questions, activation taxonomy, and reporting expectations across stakeholders."],
            ["Implementation coordination", "Plan each activation with clear ownership, dates, locations, and operational requirements."],
            ["Reporting enablement", "Help teams interpret outputs consistently and carry learning into the next activation."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5 md:flex md:gap-8">
              <h2 className="text-base font-medium text-inkwell md:w-1/3">{title}</h2>
              <p className="caption mt-2 text-inkwell/60 md:mt-0 md:w-2/3">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss your programme</Link>
          <Link href="/enterprise" className="text-cobalt text-sm font-medium hover:underline">Back to Enterprise</Link>
        </div>
      </div>
    </section>
  );
}
