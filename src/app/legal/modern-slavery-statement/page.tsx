import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Slavery Statement — Floats",
  description: "Floats commitment to preventing modern slavery and human trafficking in our operations and supply chain.",
};

export default function ModernSlaveryStatementPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Modern Slavery Statement</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci
            porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>
          <p>
            Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
            Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae.
          </p>
          <p>
            Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet
            quam id dui posuere blandit.
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
