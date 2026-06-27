import Link from "next/link";
import { HeroGradient } from "@/components/blocks/HeroGradient";
import { LogoStrip } from "@/components/blocks/LogoStrip";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { FilterPills } from "@/components/blocks/FilterPills";
import { StatCard } from "@/components/blocks/StatCard";
import { Highlight } from "@/components/blocks/Highlight";
import { ProductCard } from "@/components/blocks/ProductCard";
import { PoppyFrame } from "@/components/blocks/PoppyFrame";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/blocks/FadeIn";
import { Eye, Target, TrendingUp, BarChart3, Activity, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroGradient
        headline="Spatial intelligence that connects the real world."
        subhead="Everything you need to prove your activation worked."
        ctaLabel="Get a Live Demo"
      />

      <LogoStrip />

      <ThreeColumnFeatures
        features={[
          {
            icon: <Eye className="size-6" strokeWidth={1.5} />,
            title: "See what happened",
            body: "realmspace captures what people actually do in a physical space: where they go, what they engage with, how long they stay, what drives action.",
            linkLabel: "Explore measurement",
            linkHref: "/products/realmspace",
          },
          {
            icon: <Target className="size-6" strokeWidth={1.5} />,
            title: "Prove what worked",
            body: "Connect spatial behaviour to business outcomes. Show your team — and your CFO — that the spend was worth it. With numbers, not anecdotes.",
            linkLabel: "Explore attribution",
            linkHref: "/products/realmspace/insight-reports",
          },
          {
            icon: <TrendingUp className="size-6" strokeWidth={1.5} />,
            title: "Improve what's next",
            body: "Translate insights into decisions. Know what to change, what to replicate, and how to brief better. Every activation makes the next one smarter.",
            linkLabel: "Explore action layer",
            linkHref: "/products/action-reporting",
          },
        ]}
      />

      <FadeIn>
        <section className="bg-ecru py-20 md:py-28">
          <div className="grid-container text-center">
            <h2 className="display-md text-cobalt max-w-[800px] mx-auto">
              A privacy-first intelligence layer for physical experiences.
            </h2>
            <p className="body-lg text-inkwell/60 mt-5 max-w-[600px] mx-auto">
              No facial recognition. No cross-session re-identification.
              Session-scoped telemetry that respects every visitor.
            </p>
            <Link
              href="/products/realmspace"
              className="inline-flex items-center gap-1 text-cobalt text-sm font-medium mt-8 hover:underline group"
            >
              <span>Explore realmspace</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </section>
      </FadeIn>

      <FilterPills
        eyebrow="View use cases"
        pills={[
          {
            label: "Brand Activations",
            content: (
              <>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="heading-3 text-inkwell mb-2">Brand Activations</h3>
                  <p className="caption text-inkwell/70">Measure dwell time, engagement depth, and content performance across every touchpoint in your activation. Know which moments drove the most meaningful interaction.</p>
                  <Link href="/solutions/brand-activations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <StatCard variant="mist">
                    Brands using realmspace see <Highlight>2.4× higher sponsor retention</Highlight> when they can show activation telemetry to stakeholders.
                  </StatCard>
                </div>
              </>
            ),
          },
          {
            label: "Trade Shows",
            content: (
              <>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="heading-3 text-inkwell mb-2">Trade Shows & Conferences</h3>
                  <p className="caption text-inkwell/70">Multi-booth measurement across an entire show floor. Understand traffic patterns, peak hours, and which exhibits drove the most engagement.</p>
                  <Link href="/solutions/trade-shows-and-conferences" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <StatCard variant="mist">
                    Exhibitors who used realmspace reported <Highlight>86% faster close times</Highlight> with leads from their booth.
                  </StatCard>
                </div>
              </>
            ),
          },
          {
            label: "Retail Flagship",
            content: (
              <>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="heading-3 text-inkwell mb-2">Retail Flagship</h3>
                  <p className="caption text-inkwell/70">Permanent installation measurement for flagship stores. Understand how visitors move through your space, which displays convert, and what drives repeat visits.</p>
                  <Link href="/solutions/retail-flagship" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <StatCard variant="mist">
                    Flagship stores using realmspace saw <Highlight>3.2× more engagement</Highlight> with interactive displays within the first month.
                  </StatCard>
                </div>
              </>
            ),
          },
          {
            label: "Sponsorship",
            content: (
              <>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="heading-3 text-inkwell mb-2">Sponsor Measurement</h3>
                  <p className="caption text-inkwell/70">Give your sponsors a reason to come back. Show them exactly how many people engaged with their activation, for how long, and what action they took.</p>
                  <Link href="/solutions/sponsor-measurement" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <StatCard variant="mist">
                    Sponsors who received realmspace reports renewed at <Highlight>2.4× the rate</Highlight> of those who didn&apos;t.
                  </StatCard>
                </div>
              </>
            ),
          },
          {
            label: "Venue Ops",
            content: (
              <>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="heading-3 text-inkwell mb-2">Venue Operations</h3>
                  <p className="caption text-inkwell/70">Ongoing telemetry for venue operators. Understand traffic flow, bottleneck zones, and how to optimise your space for both visitors and exhibitors.</p>
                  <Link href="/solutions/venue-operations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <StatCard variant="mist">
                    Venues using realmspace reduced <Highlight>underutilised space by 34%</Highlight> in the first quarter.
                  </StatCard>
                </div>
              </>
            ),
          },
        ]}
      />

      <FadeIn>
        <section className="bg-mist/30 py-20 md:py-28">
          <div className="grid-container">
            <h2 className="heading-1 text-inkwell text-center mb-4">
              See realmspace in action
            </h2>
            <p className="body-lg text-inkwell/60 text-center max-w-[600px] mx-auto mb-12">
              Real dashboards, real data, real activations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <FadeIn direction="left" delay={0.1}>
                <div className="relative">
                  <div className="bg-white rounded-md shadow-card p-4 md:p-6">
                    <img
                      src="/images/hero-xr.jpg"
                      alt="realmspace dashboard"
                      className="w-full h-auto rounded-md object-cover aspect-video"
                    />
                  </div>
                  <ProductCard
                    lines={["Zone 3 · 247 engagements · avg dwell 1m 42s"]}
                    className="absolute -bottom-3 -right-3"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative mt-8 md:mt-16">
                  <div className="bg-white rounded-md shadow-card p-4 md:p-6">
                    <img
                      src="/images/immersive-booth-exhibition.jpg"
                      alt="Activation analytics"
                      className="w-full h-auto rounded-md object-cover aspect-video"
                    />
                  </div>
                  <ProductCard
                    lines={[
                      "Insight: visitors who touched the demo unit",
                      "were 3.2× more likely to scan the QR",
                    ]}
                    className="absolute -bottom-3 -left-3"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="bg-white py-20 md:py-28">
        <div className="grid-container">
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard
              icon={<BarChart3 className="size-6 text-cobalt" strokeWidth={1.5} />}
              delay={0}
            >
              Over <Highlight>500 activations</Highlight> measured across 12 countries. From pop-up retail to multi-day conference deployments.
            </StatCard>
            <StatCard
              icon={<Activity className="size-6 text-cobalt" strokeWidth={1.5} />}
              variant="mist"
              delay={0.1}
            >
              <Highlight>94% of clients</Highlight> said realmspace changed how they brief their next activation. Every campaign improves.
            </StatCard>
            <StatCard
              icon={<Zap className="size-6 text-cobalt" strokeWidth={1.5} />}
              delay={0.2}
            >
              <Highlight>2.4× sponsor renewal rate</Highlight> for event organisers who share realmspace insight reports with their partners.
            </StatCard>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="bg-ecru py-20 md:py-28">
          <div className="grid-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/studio-workspace.jpg"
                  alt="Customer activation"
                  className="w-full h-auto rounded-md object-cover aspect-[4/3]"
                />
                <PoppyFrame />
              </div>
              <div>
                <p className="body-lg text-inkwell/80 leading-relaxed italic">
                  &ldquo;realmspace completely changed how we talk to our sponsors. Instead of vague footfall numbers, we showed them exactly how long people spent at each activation and what they engaged with. Our renewal rate went from 60% to 92% in one year.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="size-12 rounded-full bg-mist flex items-center justify-center text-inkwell font-medium">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium text-inkwell">Jamie Dobbs</p>
                    <p className="caption text-inkwell/50">Head of Events, GlobalTech Summit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <ConversionPanel
        headline="Ready to see what your activation actually did?"
        ctaLabel="Book a Walkthrough"
        imageSrc="/images/tech-abstract.jpg"
        imageAlt="Team reviewing activation data"
      />
    </>
  );
}
