import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "System Status — Floats",
  description: "Check the current status of realmspace services and infrastructure.",
};

export default function StatusPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">System Status</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Check the current status of realmspace services and infrastructure. Subscribe to
          updates for real-time notifications about incidents, maintenance, and performance.
        </p>
        <div className="mt-8">
          <Link href="/support" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Support
          </Link>
        </div>
      </div>
    </section>
  );
}
