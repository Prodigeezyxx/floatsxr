import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Floats team. Sales inquiries, support requests, and general questions welcome.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">About Floats</p>
        <h1 className="heading-1 text-inkwell">Contact</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Get in touch with the Floats team. Whether you&apos;re interested in realmspace,
          need support, or want to explore partnership opportunities — we&apos;d love to
          hear from you.
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
