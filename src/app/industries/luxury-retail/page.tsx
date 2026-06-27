import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Retail — Floats",
  description: "Boutique experience measurement for flagship stores and pop-up activations powered by realmspace.",
};

export default function LuxuryRetailPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Luxury Retail</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Boutique experience measurement for flagship stores and pop-up activations.
          realmspace helps luxury retailers understand how visitors move through the
          space, which displays capture attention, and what drives conversion.
        </p>
        <div className="mt-8">
          <Link href="/industries" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
