import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Retail",
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
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which collections and displays create meaningful dwell?</li>
            <li>How do visitors move between storytelling and product zones?</li>
            <li>What should change between a flagship, pop-up, and next campaign?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a retail experience</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
