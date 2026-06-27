import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community — Floats",
  description: "Join the realmspace community. Connect with other users, share insights, and get help.",
};

export default function CommunityPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Support</p>
        <h1 className="heading-1 text-inkwell">Community</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Join the realmspace community. Connect with other users, share best practices,
          ask questions, and help shape the future of physical experience measurement.
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
