import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Services — Floats",
  description: "Dedicated account management, strategic planning, custom dashboard development, and priority support for enterprise clients.",
};

export default function EnterpriseServicesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Enterprise</p>
        <h1 className="heading-1 text-inkwell">Enterprise Services</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Dedicated account management, strategic planning sessions, custom dashboard
          development, and priority support. Enterprise services ensure your multi-activation
          programme runs smoothly at scale.
        </p>
        <div className="mt-8">
          <Link href="/enterprise" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Enterprise
          </Link>
        </div>
      </div>
    </section>
  );
}
