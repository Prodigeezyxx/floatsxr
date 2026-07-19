import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developers",
  description: "Build on realmspace. Explore our API, documentation, and developer tools for spatial intelligence.",
};

export default function DevelopersPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[900px]">
        <p className="micro text-cobalt mb-4">Developers</p>
        <h1 className="heading-1 text-inkwell">Build realmspace into your workflow</h1>
        <p className="body-lg text-inkwell/70 mt-6 max-w-[700px]">
          Connect measured activation data with the systems your team already uses. API
          access and implementation guidance are available for active Floats customers and
          approved integration partners.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link href="/developers/api-overview" className="rounded-xl border border-mist/40 p-6 transition-colors hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">API overview</h2>
            <p className="caption mt-2 text-inkwell/60">Review the integration model, common data flows, and access process.</p>
          </Link>
          <Link href="/developers/documentation" className="rounded-xl border border-mist/40 p-6 transition-colors hover:border-cobalt/40">
            <h2 className="text-lg font-medium text-inkwell">Implementation documentation</h2>
            <p className="caption mt-2 text-inkwell/60">See what is covered in customer and partner implementation guides.</p>
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@floatsanywhere.com?subject=realmspace%20developer%20access" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">
            Request developer access
          </a>
          <Link href="/products/realmspace/api" className="text-cobalt text-sm font-medium hover:underline">
            Explore the realmspace API
          </Link>
        </div>
      </div>
    </section>
  );
}
