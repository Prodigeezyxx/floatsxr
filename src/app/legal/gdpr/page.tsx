import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR — Floats",
  description: "How Floats complies with the General Data Protection Regulation (GDPR) for realmspace services.",
};

export default function GdprPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">Legal</p>
        <h1 className="heading-1 text-inkwell">GDPR</h1>
        <div className="mt-6 space-y-4 text-inkwell/70 body-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel turpis ut
            lorem convallis dignissim. Phasellus vitae purus nunc. Donec euismod leo ut diam
            ullamcorper, vitae eleifend odio ultrices. Integer sed nisl nec mi varius eleifend.
          </p>
          <p>
            Suspendisse potenti. Nam nec quam sed risus ultricies blandit. Proin ac ligula
            vitae odio tincidunt vestibulum. Sed euismod, nunc nec condimentum aliquet, nunc
            sapien vulputate elit, ac ultricies nunc justo id odio.
          </p>
          <p>
            Cras feugiat, nulla nec dictum ornare, arcu odio luctus justo, non tristique nunc
            lectus ut nisi. Nulla facilisi. Nulla facilisi. Sed tincidunt faucibus enim, nec
            vehicula nulla dapibus ut. Donec vitae mi urna.
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
