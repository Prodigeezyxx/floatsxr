import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Settings — Floats",
  description: "Manage your cookie preferences for Floats and realmspace websites.",
};

export default function CookieSettingsPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">Cookie Settings</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper, justo id
            varius consequat, dui justo tincidunt lacus, eu sodales risus lorem nec neque.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
          </p>
          <p>
            Curabitur eget erat vitae purus tempor gravida. Aliquam erat volutpat. Integer
            vitae mi vitae eros tincidunt imperdiet. Sed ultricies purus vitae pharetra
            varius. Nulla facilisi. Fusce gravida tellus vitae sem ornare fringilla.
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
