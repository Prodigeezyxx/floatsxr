import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy — realmspace",
  description: "Learn how realmspace approaches privacy, session-scoped measurement, and deployment-specific data review.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <Shield className="size-10 text-cobalt mb-6" />
        <p className="micro text-cobalt mb-4">realmspace commitment</p>
        <h1 className="display-md text-inkwell">Your data, your control</h1>
        <div className="mt-8 space-y-6 text-inkwell/70 body-lg leading-relaxed">
          <p>
            realmspace was built on a simple principle: you should be able to measure a physical
            experience without compromising anyone&apos;s privacy.
          </p>
          <p>
            We don&apos;t use facial recognition. We don&apos;t re-identify visitors across sessions.
            We don&apos;t collect names, email addresses, or any personally identifiable information
            through our sensors.
          </p>
          <p>
            What we capture: engagement signals. Where people go in a space, what they interact
            with, how long they engage. Session-scoped, anonymised, aggregated.
          </p>
          <p>
            What the measurement design avoids: identity-based visitor profiles and cross-session
            tracking. Data handling, retention, and approved outputs are reviewed for each deployment.
          </p>
        </div>
        <div className="mt-8 rounded-xl border border-mist/40 bg-ecru p-5 text-sm leading-6 text-inkwell/70">
          Privacy requirements vary by venue and activation. Floats documents the proposed measurement and data flow with the customer before deployment.
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/legal/privacy-notice" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors">Read Privacy Notice</Link>
          <Link href="/products/realmspace" className="inline-flex items-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors">Back to realmspace</Link>
        </div>
      </div>
    </section>
  );
}
