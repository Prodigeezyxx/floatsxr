import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description: "Product launches, developer events, and partner summits powered by realmspace intelligence.",
};

export default function TechnologyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Technology</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Product launches, developer events, and partner summits. realmspace helps
          technology brands understand how attendees engage with demos, keynotes, and
          interactive installations across the experience.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which demos translated curiosity into sustained interaction?</li>
            <li>How did audiences move between stages, stands, and partner zones?</li>
            <li>What should product and event teams repeat next time?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a technology event</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
