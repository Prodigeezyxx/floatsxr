import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benchmarks — Floats",
  description: "Activation benchmark data by industry. See how your activation compares with realmspace.",
};

const charts = [
  {
    src: "/images/benchmark-gfx-1.jpg",
    title: "Overall Engagement",
    description: "Aggregated dwell time, interaction rate, and traffic patterns across all measured activations.",
  },
  {
    src: "/images/benchmark-gfx-1-2.jpg",
    title: "Trade Shows & Conferences",
    description: "Booth traffic density, peak engagement hours, and lead capture rates from trade show deployments.",
  },
  {
    src: "/images/benchmark-gfx-1-3.jpg",
    title: "Retail & Flagship",
    description: "Foot traffic conversion, display interaction rates, and repeat visit patterns for retail environments.",
  },
  {
    src: "/images/benchmark-gfx-1-4.jpg",
    title: "Brand Activations",
    description: "Dwell time distribution, content interaction depth, and audience capture metrics from activation zones.",
  },
  {
    src: "/images/benchmark-gfx-1-5.jpg",
    title: "Sponsor Measurement",
    description: "Sponsor ROI benchmarks, audience reach, and engagement retention for sponsored activations.",
  },
  {
    src: "/images/benchmark-gfx-1-6.jpg",
    title: "Venue Operations",
    description: "Space utilisation rates, traffic flow patterns, and bottleneck analysis for venue operators.",
  },
];

export default function BenchmarksPage() {
  return (
    <>
      <section className="bg-ecru py-20 md:py-28">
        <div className="grid-container">
          <div className="max-w-[700px] mx-auto text-center">
            <p className="micro text-cobalt mb-4">Resources</p>
            <h1 className="heading-1 text-inkwell">Benchmarks</h1>
            <p className="body-lg text-inkwell/70 mt-6">
              Activation benchmark data by industry. Compare dwell times, engagement rates, and
              traffic patterns against aggregated, anonymised data from hundreds of realmspace
              deployments.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="grid-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {charts.map((chart) => (
              <div
                key={chart.title}
                className="surface-card shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden rounded-xl border border-mist/20"
              >
                <img
                  src={chart.src}
                  alt={chart.title}
                  className="w-full h-auto"
                />
                <div className="p-5 md:p-6">
                  <h3 className="text-sm font-semibold text-inkwell mb-1">{chart.title}</h3>
                  <p className="caption text-inkwell/60 leading-relaxed">{chart.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ecru py-12 border-t border-mist/20">
        <div className="grid-container flex items-center justify-between">
          <Link href="/resources" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline">
            &larr; Back to Resources
          </Link>
          <p className="caption text-inkwell/40">Data sourced from aggregated realmspace deployments (2024–2026)</p>
        </div>
      </section>
    </>
  );
}
