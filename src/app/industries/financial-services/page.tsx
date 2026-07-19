import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Services",
  description: "Branch experience, advisor zones, and branded financial touchpoints measured with realmspace intelligence.",
};

export default function FinancialServicesPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Industries</p>
        <h1 className="heading-1 text-inkwell">Financial Services</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Branch experience, advisor zones, and branded financial touchpoints. realmspace
          helps financial institutions understand how clients engage with physical spaces
          and identify opportunities to improve the in-person experience.
        </p>
        <div className="mt-10 rounded-xl border border-mist/40 bg-ecru p-6">
          <h2 className="text-lg font-medium text-inkwell">Questions realmspace can help answer</h2>
          <ul className="mt-4 space-y-2 text-sm text-inkwell/70">
            <li>Which service areas attract attention and which are overlooked?</li>
            <li>How does the branch or event layout shape visitor flow?</li>
            <li>Where can the in-person journey be made clearer and more useful?</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-sales" className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white hover:bg-cobalt/90">Discuss a financial-services experience</Link>
          <Link href="/industries" className="text-cobalt text-sm font-medium hover:underline">All industries</Link>
        </div>
      </div>
    </section>
  );
}
