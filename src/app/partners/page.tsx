import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with Floats. Join our partner programme and grow your business with realmspace.",
};

export default function PartnersPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[880px]">
        <p className="micro text-cobalt mb-4">Partners</p>
        <h1 className="heading-1 text-inkwell">Deliver measurable experiences together</h1>
        <p className="body-lg text-inkwell/70 mt-6 max-w-[700px]">
          Floats works with agencies, implementation specialists, and technology teams whose
          clients need a clearer view of physical experience performance.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Agencies", "Add a measurement layer to strategy, creative, and activation delivery."],
            ["Integrators", "Connect realmspace outputs with a client’s data and reporting environment."],
            ["Technology teams", "Coordinate complementary tools around one activation workflow."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-mist/40 p-5">
              <h2 className="text-base font-medium text-inkwell">{title}</h2>
              <p className="caption mt-2 text-inkwell/60">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/partners/become-a-partner" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a partnership</Link>
          <Link href="/partners/login" className="text-cobalt text-sm font-medium hover:underline">Existing partner access</Link>
        </div>
      </div>
    </section>
  );
}


