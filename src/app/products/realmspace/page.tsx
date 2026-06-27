import Link from "next/link";
import { HeroSplit } from "@/components/blocks/HeroSplit";
import { ProductCard } from "@/components/blocks/ProductCard";
import { StatCard } from "@/components/blocks/StatCard";
import { Highlight } from "@/components/blocks/Highlight";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { Eye, Target, TrendingUp, Shield, MessageSquare, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "realmspace — See, Prove, and Improve Every Activation",
  description:
    "realmspace captures what people actually do in a physical space. intelligence for brand activations, trade shows, and retail flagship experiences.",
};

export default function RealmspacePage() {
  return (
    <>
      {/* Sub-nav strip */}
      <div className="bg-white border-b border-mist/30 sticky top-[72px] z-40 overflow-x-auto">
        <div className="grid-container flex items-center gap-6 h-10 text-[13px] text-inkwell/60">
          {["Overview", "Booths & Zones", "Insight Reports", "Natural-Language Query", "Predictive ROI", "Privacy"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="shrink-0 hover:text-cobalt transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      {/* HeroSplit */}
      <HeroSplit
        eyebrow="Floats realmspace"
        headline="See, prove, and improve every activation."
        body="realmspace captures what people actually do in a physical space: where they go, what they engage with, how long they stay, and what drives action. always."
        primaryCta={{ label: "Book a Walkthrough", href: "/get-a-demo" }}
        secondaryCta={{ label: "See how it works", href: "/get-a-demo" }}
        imageSrc="/images/placeholders/hero-vr-professional.svg"
        imageAlt="realmspace activation dashboard"
        floatingCard={
          <ProductCard
            lines={["Zone 3 · 247 engagements · avg dwell 1m 42s"]}
          />
        }
      />

      {/* What is realmspace */}
      <section className="bg-ecru py-20 md:py-28" id="overview">
        <div className="grid-container">
          <div className="bg-white border border-mist/30 rounded-lg p-8 md:p-12 max-w-[900px] mx-auto">
            <h2 className="heading-2 text-inkwell mb-4">What is realmspace?</h2>
            <p className="body-lg text-inkwell/70 leading-relaxed">
              realmspace is a intelligence layer for physical experiences. It uses
              spatial telemetry — not cameras, not facial recognition — to capture engagement
              signals across booths, zones, kiosks, and branded touchpoints. The output is a
              clear, plain-English read on what happened, what worked, and what to do next.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center px-5 py-2 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                Try realmspace
              </Link>
              <Link
                href="/resources/guides"
                className="inline-flex items-center px-5 py-2 rounded-lg border border-cobalt text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors"
              >
                Read the guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* See it in action */}
      <section className="bg-white py-20 md:py-28" id="booths-and-zones">
        <div className="grid-container text-center mb-12">
          <h2 className="heading-1 text-inkwell">See it in action</h2>
          <p className="body-lg text-inkwell/60 mt-3 max-w-[600px] mx-auto">
            Three layers. One unified view of your activation.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/placeholders/immersive-booth-exhibition.svg", label: "Zone mapping" },
              { src: "/images/placeholders/spatial-tech-city.svg", label: "Heat maps & traffic" },
              { src: "/images/placeholders/3d-ai-workspace.svg", label: "Insight reports" },
            ].map((item, i) => (
              <div key={i} className="bg-ecru rounded-lg overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm font-medium text-inkwell">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-ecru py-20 md:py-28" id="insight-reports">
        <div className="grid-container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="micro text-cobalt mb-3">realmspace by the numbers</p>
              <h2 className="heading-1 text-inkwell">
                Intelligence that speaks for itself.
              </h2>
              <p className="body-lg text-inkwell/60 mt-4">
                Every number is drawn from real activations across 12 countries and 500+ deployments.
              </p>
            </div>
            <div className="space-y-4">
              <StatCard>
                Clients who use realmspace report an average <Highlight>86% reduction</Highlight> in post-event reporting time.
              </StatCard>
              <StatCard variant="mist">
                Sponsors who received a realmspace insight report renewed at <Highlight>2.4× the rate</Highlight> of those who didn&apos;t.
              </StatCard>
              <StatCard>
                <Highlight>94% of activation managers</Highlight> said realmspace changed how they plan their next deployment.
              </StatCard>
            </div>
          </div>
        </div>
      </section>

      {/* Feature deep-dive */}
      <section className="bg-white py-20 md:py-28" id="natural-language-query">
        <div className="grid-container space-y-20">
          {[
            {
              icon: <Eye className="size-6" strokeWidth={1.5} />,
              title: "Know exactly what happened",
              body: "Not footfall estimates. Not anecdotal feedback. Real behavioural data mapped to every touchpoint in your activation. See which zones drew the most engagement, how long people stayed, and what drove action.",
              image: "/images/placeholders/tech-abstract.svg",
              reversed: false,
            },
            {
              icon: <MessageSquare className="size-6" strokeWidth={1.5} />,
              title: "Ask your data in plain English",
              body: "No dashboard training required. Type natural-language questions like 'How many people visited the demo zone between 2-4pm?' or 'Which content drove the highest completion rate?' and get instant answers.",
              image: "/images/placeholders/ar-vr-split.svg",
              reversed: true,
            },
            {
              icon: <BarChart3 className="size-6" strokeWidth={1.5} />,
              title: "Turn insights into action",
              body: "Every activation generates a clear read on what to do differently next time. Structured recommendations, benchmark comparisons, and ready-to-share reports that make your next activation smarter.",
              image: "/images/placeholders/hero-xr.svg",
              reversed: false,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              {feature.reversed ? (
                <>
                  <div className="order-2 md:order-1">
                    <div className="mb-4 text-cobalt">{feature.icon}</div>
                    <h2 className="heading-2 text-inkwell mb-4">{feature.title}</h2>
                    <p className="body-lg text-inkwell/70 max-w-[65ch]">{feature.body}</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-lg object-cover aspect-video"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-lg object-cover aspect-video"
                    />
                  </div>
                  <div>
                    <div className="mb-4 text-cobalt">{feature.icon}</div>
                    <h2 className="heading-2 text-inkwell mb-4">{feature.title}</h2>
                    <p className="body-lg text-inkwell/70 max-w-[65ch]">{feature.body}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Privacy section */}
      <section className="bg-deep-violet py-20 md:py-28" id="privacy">
        <div className="grid-container text-center">
          <Shield className="size-10 text-mist mx-auto mb-6" />
          <h2 className="display-sm text-white max-w-[700px] mx-auto">
            No identities. No compromise.
          </h2>
          <p className="body-lg text-mist mt-5 max-w-[600px] mx-auto">
            No facial recognition. No cross-session re-identification. No personal data collected.
            realmspace captures engagement signals, not identities. Session-scoped telemetry that
            respects every visitor.
          </p>
          <Link
            href="/products/realmspace/privacy"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-inkwell text-sm font-medium hover:bg-white/90 transition-colors mt-8"
          >
            Read our privacy commitment
          </Link>
        </div>
      </section>

      {/* ConversionPanel */}
      <ConversionPanel
        headline="Ready to see what your activation actually did?"
        ctaLabel="Book a Walkthrough"
        imageSrc="/images/placeholders/studio-workspace.svg"
        imageAlt="Team reviewing realmspace data"
      />
    </>
  );
}
