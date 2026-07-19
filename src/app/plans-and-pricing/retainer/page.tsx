import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retainer",
  description: "Ongoing strategic retainer services for multi-activation programmes and enterprise clients using realmspace.",
};

export default function RetainerPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Plans &amp; Pricing</p>
        <h1 className="heading-1 text-inkwell">Retainer</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Ongoing strategic retainer services for organisations running multiple activations
          per year. Includes dedicated account management, priority support, strategic planning,
          and preferred pricing on all layers.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Designed for continuity</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Maintain a consistent measurement framework across activations.</li>
            <li>Plan implementation and reporting with a shared programme view.</li>
            <li>Carry findings forward instead of restarting after each event.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a retainer</Link>
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium hover:underline">All plans</Link>
        </div>
      </div>
    </section>
  );
}
