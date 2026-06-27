import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Security — Floats",
  description: "SOC 2-compliant infrastructure, data residency options, SSO/SAML, RBAC, and dedicated privacy reviews for enterprise realmspace deployments.",
};

export default function EnterpriseSecurityPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Enterprise</p>
        <h1 className="heading-1 text-inkwell">Enterprise Security</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          SOC 2-compliant infrastructure, data residency options, single sign-on (SSO/SAML),
          role-based access control, and dedicated privacy reviews. realmspace is built for
          enterprise security requirements from day one.
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
