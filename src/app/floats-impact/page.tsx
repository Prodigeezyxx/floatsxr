import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Floats Impact — Floats",
  description: "See the measurable impact of realmspace across 500+ activations in 12 countries.",
};

export default function FloatsImpactPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Floats Impact</p>
        <h1 className="heading-1 text-inkwell">Floats Impact</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          realmspace has measured over 500 activations across 12 countries, helping brands
          prove what worked and improve what comes next. From one-day pop-ups to permanent
          flagship installations, our clients see a 94% satisfaction rate and sponsors
          renew at 2.4x the rate when they receive a realmspace insight report.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
