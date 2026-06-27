import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reasonable Use Policy — Floats",
  description: "Acceptable use policy governing access to and use of realmspace services.",
};

export default function ReasonableUsePolicyPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Reasonable Use Policy</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam nunc, blandit
            vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
            tempus. Donec vitae sapien ut libero venenatis faucibus.
          </p>
          <p>
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
            leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
          </p>
          <p>
            Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis
            sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/legal" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Legal
          </Link>
        </div>
      </div>
    </section>
  );
}
