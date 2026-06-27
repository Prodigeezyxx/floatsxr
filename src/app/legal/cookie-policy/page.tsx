import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — Floats",
  description: "How Floats uses cookies and similar technologies on realmspace and related websites.",
};

export default function CookiePolicyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Cookie Policy</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
            Integer auctor, felis eget consectetur convallis, justo mauris aliquam nunc,
            vitae facilisis nulla elit at eros. Cras vestibulum odio at felis scelerisque.
          </p>
          <p>
            Vivamus vehicula, ex id mollis feugiat, justo lacus pulvinar erat, sed pharetra
            elit turpis vitae odio. Etiam vitae nunc id arcu porta tempor. Nulla facilisi.
            Donec sit amet metus nec eros iaculis aliquet.
          </p>
          <p>
            Maecenas auctor, purus at eleifend fringilla, nibh nunc tristique turpis, ac
            sollicitudin libero elit at neque. Phasellus tempus tellus vitae quam gravida,
            nec tincidunt odio dignissim.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/legal" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Legal
          </Link>
        </div>
      </div>
    </section>
  );
}
