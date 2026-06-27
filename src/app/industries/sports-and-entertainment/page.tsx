import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports & Entertainment — Floats",
  description: "Stadiums, fan zones, and sponsor activations — measured and optimised with realmspace spatial intelligence.",
};

export default function SportsAndEntertainmentPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Sports &amp; Entertainment</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Stadiums, fan zones, and sponsor activations — measured and optimised. realmspace
          captures foot traffic, dwell time, and engagement across every zone, giving
          venues and sponsors the data they need to improve the fan experience.
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
