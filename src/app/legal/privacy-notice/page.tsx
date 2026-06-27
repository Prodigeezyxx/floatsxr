import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice — Floats",
  description: "How Floats collects, uses, and protects your personal data when using realmspace and related services.",
};

export default function PrivacyNoticePage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Privacy Notice</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum metus
            at turpis consectetur, vel dignissim nunc ultrices. Fusce vitae erat at nulla
            tincidunt gravida. Quisque id augue ut urna facilisis lacinia vel in odio.
          </p>
          <p>
            Curabitur convallis, nunc at cursus tristique, felis odio ullamcorper risus, nec
            dapibus mauris tortor non leo. Nulla facilisi. Sed vel nibh ut lectus efficitur
            porttitor. Integer vitae tortor sed nisi convallis fringilla.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Proin maximus, nisi vitae vulputate euismod, odio neque commodo
            nulla, eget aliquam purus justo nec mauris.
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
