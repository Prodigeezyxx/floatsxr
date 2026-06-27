import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Processing Attachment — Floats",
  description: "Data processing agreement for customers using realmspace and Floats services.",
};

export default function DataProcessingAttachmentPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Data Processing Attachment</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue,
            suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
            aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
          </p>
          <p>
            Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed
            posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna
            vulputate arcu, vel tempus metus leo non est.
          </p>
          <p>
            Etiam sit amet lectus. Vivamus vel leo at nunc ullamcorper tempus. Sed lacinia,
            urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
            turpis. Nulla facilisi. Ut fringilla.
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
