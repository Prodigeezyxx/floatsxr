import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal — Floats",
  description: "Legal information, policies, and notices for Floats and realmspace.",
};

export default function LegalPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Legal</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Browse our legal policies, terms, and notices governing the use of realmspace
          and Floats services.
        </p>
      </div>
    </section>
  );
}
