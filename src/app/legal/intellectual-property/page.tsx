import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intellectual Property — Floats",
  description: "Information about intellectual property rights related to realmspace and Floats services.",
};

export default function IntellectualPropertyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Intellectual Property</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
            porta.
          </p>
          <p>
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula
            in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
          </p>
          <p>
            Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique
            sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa.
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
