import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Predictive ROI — Floats",
  description: "Forecast activation performance before you build. realmspace predictive models help you plan better activations.",
};

export default function PredictiveRoiPage() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="grid-container max-w-[700px]">
        <p className="micro text-cobalt mb-4">realmspace</p>
        <h1 className="heading-1 text-inkwell">Predictive ROI</h1>
        <p className="body-lg text-inkwell/70 mt-6">
          Before you build, know what to expect. realmspace predictive models analyse past
          activation data to forecast dwell time, engagement depth, and overall performance.
          Plan smarter activations with confidence.
        </p>
        <div className="mt-8">
          <Link href="/products/realmspace" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to realmspace
          </Link>
        </div>
      </div>
    </section>
  );
}
