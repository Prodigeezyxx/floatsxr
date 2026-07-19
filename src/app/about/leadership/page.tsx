import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the team behind Floats and realmspace, the spatial intelligence layer for physical experiences.",
};

export default function LeadershipPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">Leadership</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Meet the team behind Floats and realmspace. Our leadership brings deep experience
          in immersive experiences, spatial intelligence, and enterprise technology — united
          by a mission to make every physical experience measurable.
        </p>
        <div className="mt-8">
          <Link href="/about" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to About
          </Link>
        </div>
      </div>
    </section>
  );
}
