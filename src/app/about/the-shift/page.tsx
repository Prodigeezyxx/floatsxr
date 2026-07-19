import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Shift",
  description: "The story of how Floats evolved from an immersive experience studio to a spatial intelligence company building realmspace.",
};

export default function TheShiftPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">The Shift</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          In 2023, Floats made a deliberate decision to pivot from an immersive experience
          studio to a spatial intelligence company. It wasn&apos;t a change in what we do —
          it was a change in how we think about value. We realised the real impact we deliver
          isn&apos;t the wow factor of the activation. It&apos;s knowing, with certainty,
          that it worked. That realisation led to realmspace.
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
