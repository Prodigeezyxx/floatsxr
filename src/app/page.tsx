import Link from "next/link";
import { HomeHero } from "@/components/blocks/HomeHero";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { FilterPills } from "@/components/blocks/FilterPills";
import { StatCard } from "@/components/blocks/StatCard";
import { Highlight } from "@/components/blocks/Highlight";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { FadeIn } from "@/components/blocks/FadeIn";

import { FeatureCallout } from "@/components/blocks/FeatureCallout";
import { IntegrationSection } from "@/components/blocks/IntegrationSection";
import { BlogCards } from "@/components/blocks/BlogCards";
import { ScreenshotFrame } from "@/components/blocks/ScreenshotFrame";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="bg-white py-10 md:py-14 border-b border-mist/20">
        <div className="grid-container text-center">
          <p className="micro text-cobalt mb-3">How realmspace works</p>
          <h2 className="heading-1 text-inkwell mx-auto max-w-[880px]">
            Measurement and Attribution for Every Activation You Run
          </h2>
        </div>
      </section>

      <ThreeColumnFeatures
        features={[
          {
            title: "Measure",
            body: "Know exactly what happened. Every visitor, dwell time, interaction, and journey. Deploy realmspace and see your activation through data.",
            linkLabel: "How it works",
            linkHref: "/products/realmspace",
          },
          {
            title: "Prove",
            body: "Attribution-ready reports your marketing, sales, and finance teams actually use. Walk out with proof of engagement, reach, and ROI. Every metric your CFO needs.",
            linkLabel: "See sample reports",
            linkHref: "/products/realmspace/insight-reports",
          },
          {
            title: "Orchestrate",
            body: "Benchmark every activation against the last one. Compare dwell, traffic, and engagement across venues, booths, and campaigns. Every event gets better.",
            linkLabel: "Explore benchmarks",
            linkHref: "/resources/benchmarks",
          },
        ]}
      />

      {/* SECTION 3: Filter pills with solution cards */}
      <FilterPills
        eyebrow="View solutions"
        pills={[
          {
            label: "Brand Activations",
            content: (
              <>
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/Add_realmspace_branding_in_lowercase_to_the_gree-1782596070128.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Brand Activations</h3>
                    <p className="caption text-inkwell/70">Measure dwell time, engagement depth, and content performance across every touchpoint. Know which moments drove the most meaningful interaction.</p>
                    <Link href="/solutions/brand-activations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
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
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/Realistic_photograph_of_a_bright_orange_and_white_-1782596045852.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Trade Shows & Conferences</h3>
                    <p className="caption text-inkwell/70">Multi-booth measurement across an entire show floor. Understand traffic patterns, peak hours, and which exhibits drove the most engagement.</p>
                    <Link href="/solutions/trade-shows-and-conferences" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
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
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/Realistic_photograph_of_an_emerald_green_interacti-1782596058924.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Retail Flagship</h3>
                    <p className="caption text-inkwell/70">Permanent installation measurement for flagship stores. Understand how visitors move through your space, which displays convert, and what drives repeat visits.</p>
                    <Link href="/solutions/retail-flagship" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
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
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/Add_realmspace_branding_in_lowercase_to_the_oran-1782596029996.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Sponsor Measurement</h3>
                    <p className="caption text-inkwell/70">Give your sponsors a reason to come back. Show them exactly how many people engaged with their activation, for how long, and what action they took.</p>
                    <Link href="/solutions/sponsor-measurement" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
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
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/Realistic_photograph_of_a_dark_charcoal_grey_angul-1782596012937.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Venue Operations</h3>
                    <p className="caption text-inkwell/70">Ongoing telemetry for venue operators. Understand traffic flow, bottleneck zones, and how to optimise your space for both visitors and exhibitors.</p>
                    <Link href="/solutions/venue-operations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <StatCard variant="mist">
                    Venues using realmspace reduced <Highlight>underutilised space by 34%</Highlight> in the first quarter.
                  </StatCard>
                </div>
              </>
            ),
          },
          {
            label: "Measurable ROI",
            content: (
              <>
                <div className="surface-card p-0 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <img src="/images/realmspace-kit-1.png" alt="" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-7">
                    <h3 className="heading-3 text-inkwell mb-2">Measurable ROI</h3>
                    <p className="caption text-inkwell/70">For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data your finance team can defend.</p>
                    <Link href="/solutions/measurable-roi" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                  </div>
                </div>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <StatCard variant="mist">
                    Organisations using realmspace achieved <Highlight>3.4× ROI</Highlight> on their activation spend within the first two quarters.
                  </StatCard>
                </div>
              </>
            ),
          },
        ]}
      />

      {/* SECTION 4: Feature callout — outcome-driven */}
      <FeatureCallout
        headline="One platform to measure every activation you run."
        body="realmspace captures, attributes, and benchmarks every activation, showroom, and event. Automate insight reports, query your data in plain English, and connect signals across your entire programme."
        primaryCta={{ label: "View plans and pricing", href: "/plans-and-pricing" }}
        secondaryCta={{ label: "Explore realmspace", href: "/products/realmspace" }}
        imageSrc="/images/Add_realmspace_branding_in_lowercase_to_the_gree-1782596070128.png"
        imageAlt="realmspace measurement platform"
      />

      {/* SECTION 5: See realmspace in action — dashboards */}
      <section className="bg-white py-20 md:py-28">
        <div className="grid-container">
          <FadeIn className="text-center mb-14">
            <p className="micro text-cobalt mb-4">Product tour</p>
            <h2 className="heading-1 text-inkwell">
              See realmspace in action
            </h2>
            <p className="body-lg text-inkwell/60 mt-3 max-w-[600px] mx-auto">
              Real dashboards, real data, real activations.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { src: "/images/Benchmark_intelligence_dashboard_matching_realmspa-1782596159088.png", label: "Benchmark intelligence" },
              { src: "/images/Zone_comparison_dashboard_with_realmspace_design_c-1782596167806.png", label: "Zone comparison" },
              { src: "/images/Zone_performance_comparison_dashboard_for_realmspa-1782596258231.png", label: "Zone performance" },
              { src: "/images/Add_realmspace_branding_in_lowercase_to_the_wall-1782596319532.png", label: "Activation overview" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group">
                  <ScreenshotFrame
                    src={item.src}
                    alt={item.label}
                    className="group-hover:shadow-glow transition-shadow duration-300"
                  />
                  <p className="text-sm font-medium text-inkwell mt-4">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Integration section */}
      <IntegrationSection />

      {/* SECTION 8: Customer teases — real deployments */}
      <FadeIn>
        <section className="bg-white py-20 md:py-28">
          <div className="grid-container">
            <div className="text-center mb-12">
              <h2 className="heading-1 text-inkwell">Built for real activations</h2>
              <p className="body-lg text-inkwell/60 mt-3">
                From Lagos launch events to international trade shows. realmspace measures what matters across every deployment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Brand activations",
                  story: "Full-funnel measurement from awareness to conversion. Know which moments drove the deepest engagement — and which touchpoints need work.",
                  cta: "See how it works",
                  href: "/solutions/brand-activations",
                  img: "/images/Realistic_photograph_of_an_emerald_green_interacti-1782596058924.png",
                },
                {
                  title: "Trade shows & conferences",
                  story: "Multi-booth measurement across an entire show floor. Real-time traffic, dwell, and engagement data for every sponsor, every hour.",
                  cta: "Explore trade show ROI",
                  href: "/solutions/trade-shows-and-conferences",
                  img: "/images/Realistic_photograph_of_a_bright_orange_and_white_-1782596045852.png",
                },
                {
                  title: "Retail & flagship stores",
                  story: "Permanent installation measurement for showrooms and retail. Understand foot traffic, display conversion, and what drives repeat visits.",
                  cta: "See retail analytics",
                  href: "/solutions/retail-flagship",
                  img: "/images/Realistic_photograph_of_a_dark_charcoal_grey_angul-1782596012937.png",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white rounded-xl border border-mist/30 shadow-card group hover:shadow-elevated hover:border-cobalt/15 transition-all duration-300 h-full flex flex-col overflow-hidden"
                >
                  <img src={item.img} alt="" className="w-full aspect-video object-cover" />
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <p className="text-sm font-semibold text-inkwell/30 mb-3 tracking-tight">{item.title}</p>
                    <p className="caption text-inkwell/70 leading-relaxed mb-6 flex-1">{item.story}</p>
                    <span className="link-arrow group-hover:underline">
                      {item.cta}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SECTION 9: Stat row */}
      <section className="bg-ecru py-16 md:py-20">
        <div className="grid-container">
          <div className="grid md:grid-cols-3 gap-6">
            <StatCard delay={0}>
              Deployed across <Highlight>16+ live environments</Highlight> — from pop-up retail activations to multi-day conference deployments. Every installation produces measurable data.
            </StatCard>
            <StatCard variant="mist" delay={0.1}>
              <Highlight>94% of clients</Highlight> said realmspace changed how they brief their next activation. Every campaign improves with real data.
            </StatCard>
            <StatCard delay={0.2}>
              <Highlight>2.4× sponsor renewal rate</Highlight> for event organisers who share realmspace insight reports with their partners. Data drives retention.
            </StatCard>
          </div>
        </div>
      </section>

      {/* SECTION 10: Blog cards */}
      <BlogCards
        posts={[
          {
            category: "Guide",
            title: "The Measurable Activation Playbook: How to Plan, Measure, and Improve Every Brand Experience",
            href: "/resources/guides",
            imageSrc: "/images/age-2026-3.png",
          },
          {
            category: "Customer Story",
            title: "How a Global Retailer Uses realmspace to Measure Foot Traffic and In-Store Engagement",
            href: "/resources/case-studies",
            imageSrc: "/images/kuda-2025.png",
          },
          {
            category: "Research",
            title: "2026 Benchmark Report: Engagement Signals Across Retail, Trade Shows, and Brand Activations",
            href: "/resources/benchmarks",
            imageSrc: "/images/Automation_dashboard_with_consistent_realmspace_br-1782596152361.png",
          },
        ]}
      />

      {/* SECTION 11: Bottom CTA */}
      <ConversionPanel
        headline="Stop guessing what your physical spend returned. Run one pilot. Keep the data forever."
        ctaLabel="Book a Pilot"
        imageSrc="/images/dd221adb-b6e3-46dd-8111-9bdfbb196676-scaled.jpg"
        imageAlt="Team reviewing realmspace data"
      />
    </>
  );
}
