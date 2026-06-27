import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations — Floats",
  description: "realmspace integrates with your existing tech stack — CRM, marketing automation, analytics tools, and data warehouses.",
};

export default function IntegrationsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Products</p>
        <h1 className="heading-1 text-inkwell">Integrations</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          realmspace connects directly to your existing tech stack. Sync activation data to
          your CRM, push engagement metrics to your analytics platform, and feed structured
          insights into your data warehouse.
        </p>
        <div className="mt-8">
          <Link href="/products" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
