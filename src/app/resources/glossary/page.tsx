import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Spatial telemetry, attribution, session-scoped — defined. The realmspace glossary of terms.",
};

export default function GlossaryPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[820px]">
        <p className="micro text-cobalt mb-4">Resources</p>
        <h1 className="heading-1 text-inkwell">Measurement glossary</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          A short guide to the language used across realmspace and physical-experience measurement.
        </p>
        <dl className="mt-10 divide-y divide-mist/30 border-y border-mist/30">
          {[
            ["Activation", "A defined physical experience, installation, venue programme, or event measured as one reporting unit."],
            ["Zone", "A named area within an activation used to compare movement, dwell, or interaction patterns."],
            ["Engagement", "An observed action or threshold that indicates meaningful participation in the experience."],
            ["Dwell", "The amount of time a measured session spends within a defined zone or experience."],
            ["Session-scoped data", "Measurement connected only for the duration and purpose of an activation session, rather than a persistent personal profile."],
            ["Attribution", "The method used to connect a measured behaviour with an activation, zone, or outcome."],
          ].map(([term, definition]) => (
            <div key={term} className="py-5 md:grid md:grid-cols-3 md:gap-8">
              <dt className="font-medium text-inkwell">{term}</dt>
              <dd className="mt-2 text-sm leading-6 text-inkwell/65 md:col-span-2 md:mt-0">{definition}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium hover:underline">Explore realmspace</Link>
        </div>
      </div>
    </section>
  );
}
