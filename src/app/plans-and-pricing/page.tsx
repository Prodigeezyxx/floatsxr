import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing — Floats",
  description: "Three layers, priced separately. Experience Layer, realmspace Intelligence, and Action & Reporting. Only pay for what you need.",
};

const plans = [
  {
    name: "Experience Layer",
    price: "From $5,000",
    description: "The physical activation — designed, built, and deployed.",
    cta: { label: "Contact Sales", href: "/contact-sales", variant: "outline" as const },
    features: [
      "Booth & zone design and build",
      "Hardware deployment and on-site support",
      "Digital surface integration",
      "Branded touchpoint configuration",
      "On-site technical staff",
    ],
  },
  {
    name: "Measurement & Insight",
    price: "From $2,500/mo",
    description: "realmspace intelligence layer — sensors, dashboard, query surface.",
    cta: { label: "Try realmspace", href: "/try-realmspace", variant: "primary" as const },
    features: [
      "Spatial telemetry sensors",
      "Real-time dashboard",
      "Natural-language query",
      "Session replay",
      "Engagement analytics",
      "Privacy-first architecture",
    ],
  },
  {
    name: "Bundled Activation",
    price: "From $12,000",
    description: "Experience + Measurement + Reporting together. Best value.",
    cta: { label: "Book a Walkthrough", href: "/get-a-demo", variant: "primary" as const },
    features: [
      "Everything in Experience Layer",
      "Everything in Measurement & Insight",
      "Post-activation insight report",
      "Benchmark comparison",
      "CRM & marketing stack integration",
      "Dedicated account manager",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-ecru py-24 md:py-32">
        <div className="grid-container text-center mb-16">
          <h1 className="heading-1 text-inkwell">Plans & Pricing</h1>
          <p className="body-lg text-inkwell/60 mt-4 max-w-[600px] mx-auto">
            Three layers. Priced separately. Only pay for what you need.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-lg p-8 flex flex-col h-full"
              >
                <h3 className="heading-3 text-inkwell">{plan.name}</h3>
                <p className="display-sm text-cobalt mt-3">{plan.price}</p>
                <p className="caption text-inkwell/60 mt-2">{plan.description}</p>
                <Link
                  href={plan.cta.href}
                  className={`inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium mt-6 w-full transition-colors ${
                    plan.cta.variant === "primary"
                      ? "bg-cobalt text-white hover:bg-cobalt/90"
                      : "border border-cobalt text-cobalt hover:bg-cobalt/5"
                  }`}
                >
                  {plan.cta.label}
                </Link>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-inkwell/70">
                      <Check className="size-4 text-cobalt shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-inkwell py-20 md:py-28">
        <div className="grid-container text-center">
          <h2 className="heading-1 text-white max-w-[700px] mx-auto">
            Need a custom deployment?
          </h2>
          <p className="body-lg text-mist mt-4 max-w-[550px] mx-auto">
            Multi-activation programmes, custom integrations, dedicated infrastructure, and strategic retainer services for enterprise clients.
          </p>
          <Link
            href="/enterprise"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-inkwell text-sm font-medium hover:bg-white/90 transition-colors mt-8"
          >
            Talk to Enterprise Sales
          </Link>
        </div>
      </section>

      <ConversionPanel
        headline="Still not sure? Let's find the right plan together."
        ctaLabel="Contact Sales"
        imageSrc="/images/tech-abstract.jpg"
        imageAlt="Floats team"
      />
    </>
  );
}
