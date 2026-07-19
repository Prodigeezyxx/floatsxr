import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports & Entertainment",
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
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which fan zones and sponsor experiences held attention?</li>
            <li>How did traffic and engagement change across the event?</li>
            <li>What evidence can support the next sponsorship conversation?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a fan experience</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
