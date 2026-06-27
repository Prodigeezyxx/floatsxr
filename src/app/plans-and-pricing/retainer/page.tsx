import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retainer — Floats",
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
        <div className="mt-8">
          <Link href="/plans-and-pricing" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Plans &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
