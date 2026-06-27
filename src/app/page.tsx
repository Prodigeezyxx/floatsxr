import Link from "next/link";
import { HomeHero } from "@/components/blocks/HomeHero";
import { ThreeColumnFeatures } from "@/components/blocks/ThreeColumnFeatures";
import { FilterPills } from "@/components/blocks/FilterPills";
import { StatCard } from "@/components/blocks/StatCard";
import { Highlight } from "@/components/blocks/Highlight";
import { ProductCard } from "@/components/blocks/ProductCard";
import { PoppyFrame } from "@/components/blocks/PoppyFrame";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import { FadeIn } from "@/components/blocks/FadeIn";
import { TrustBar } from "@/components/blocks/TrustBar";
import { FeatureCallout } from "@/components/blocks/FeatureCallout";
import { IntegrationSection } from "@/components/blocks/IntegrationSection";
import { BlogCards } from "@/components/blocks/BlogCards";
import { ScreenshotFrame } from "@/components/blocks/ScreenshotFrame";

export default function Home() {
  return (
    <>
      <HomeHero />

      <ThreeColumnFeatures
        features={[
          {
            title: "realmspace",
            body: "spatial intelligence that captures engagement signals across every physical touchpoint. No cameras. No facial recognition. Real behavioural data.",
            linkLabel: "Explore realmspace",
            linkHref: "/products/realmspace",
          },
          {
            title: "Insight Reports",
            body: "Clear, plain-English reports on what happened at your activation. Not a data dump — structured intelligence that tells you what worked and what to change.",
            linkLabel: "See sample reports",
            linkHref: "/products/realmspace/insight-reports",
          },
          {
            title: "Natural-Language Query",
            body: "Ask your activation data in plain English. 'How many people visited the demo zone between 2-4pm?' Get instant answers. No dashboard training required.",
            linkLabel: "Try it yourself",
            linkHref: "/products/realmspace/natural-language-query",
          },
        ]}
      />

      {/* SECTION 2: Gradient section opener — "AI-powered" equivalent */}
      <FadeIn>
        <section className="gradient-haze py-20 md:py-28">
          <div className="grid-container text-center">
            <h2 className="display-md text-white max-w-[800px] mx-auto">
              Intelligence for physical experiences.
            </h2>
            <p className="body-lg text-mist mt-5 max-w-[600px] mx-auto">
              No facial recognition. No cross-session re-identification.
              Session-scoped telemetry that respects every visitor.
            </p>
            <Link
              href="/products/realmspace"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-inkwell text-sm font-medium hover:bg-white/90 hover:shadow-elevated transition-all mt-8 min-h-[44px]"
            >
              Explore realmspace
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* SECTION 3: Filter pills with solution cards */}
      <FilterPills
        eyebrow="View solutions"
        pills={[
          {
            label: "Brand Activations",
            content: (
              <>
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Brand Activations</h3>
                  <p className="caption text-inkwell/70">Measure dwell time, engagement depth, and content performance across every touchpoint. Know which moments drove the most meaningful interaction.</p>
                  <Link href="/solutions/brand-activations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Trade Shows & Conferences</h3>
                  <p className="caption text-inkwell/70">Multi-booth measurement across an entire show floor. Understand traffic patterns, peak hours, and which exhibits drove the most engagement.</p>
                  <Link href="/solutions/trade-shows-and-conferences" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Retail Flagship</h3>
                  <p className="caption text-inkwell/70">Permanent installation measurement for flagship stores. Understand how visitors move through your space, which displays convert, and what drives repeat visits.</p>
                  <Link href="/solutions/retail-flagship" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Sponsor Measurement</h3>
                  <p className="caption text-inkwell/70">Give your sponsors a reason to come back. Show them exactly how many people engaged with their activation, for how long, and what action they took.</p>
                  <Link href="/solutions/sponsor-measurement" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Venue Operations</h3>
                  <p className="caption text-inkwell/70">Ongoing telemetry for venue operators. Understand traffic flow, bottleneck zones, and how to optimise your space for both visitors and exhibitors.</p>
                  <Link href="/solutions/venue-operations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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
                <div className="surface-card p-6 md:p-7 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                  <h3 className="heading-3 text-inkwell mb-2">Measurable ROI</h3>
                  <p className="caption text-inkwell/70">For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data. No anecdotes. No estimates.</p>
                  <Link href="/solutions/measurable-roi" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
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

      {/* SECTION 4: "Do (much) more" feature callout */}
      <FeatureCallout
        headline="Do (much) more with realmspace."
        body="Save time and unlock value from your activation data. With realmspace, you can automate insight reports, query your data in plain English, and connect engagement signals across every activation in your programme."
        primaryCta={{ label: "View plans and pricing", href: "/plans-and-pricing" }}
        secondaryCta={{ label: "Explore all products", href: "/products" }}
        imageSrc="/images/Add_realmspace_branding_in_lowercase_to_the_gree-1782596070128.png"
        imageAlt="realmspace intelligence layer"
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

      {/* SECTION 7: Trust stats + compliance badges */}
      <TrustBar
        stats={[
          { number: "500+", label: "Activations measured" },
          { number: "12", label: "Countries deployed" },
          { number: "94%", label: "Client satisfaction" },
          { number: "2.4×", label: "Sponsor renewal rate" },
        ]}
        badges={[
          { name: "GDPR Compliant" },
          { name: "ISO 27001" },
          { name: "Anonymised by Design" },
          { name: "SOC 2 Type II" },
          { name: "No Facial Recognition" },
          { name: "Session-Scoped Data" },
        ]}
      />

      {/* SECTION 8: Customer story */}
      <FadeIn>
        <section className="bg-white py-20 md:py-28">
          <div className="grid-container">
            <div className="text-center mb-12">
              <h2 className="heading-1 text-inkwell">Companies do better with realmspace</h2>
              <p className="body-lg text-inkwell/60 mt-3">
                Learn how brands and venues use realmspace to measure what matters.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  logo: "DLA Piper",
                  story: "They transformed their sponsor reporting from anecdotes to auditable data. Renewal rates went from 60% to 92% in one year.",
                  href: "/resources/case-studies",
                },
                {
                  logo: "Celonis",
                  story: "Multi-booth measurement across a 50,000 sq ft exhibition. Real-time engagement data for every sponsor, every hour.",
                  href: "/resources/case-studies",
                },
                {
                  logo: "UCLan",
                  story: "Flagship retail installation with 12 touchpoints. Reduced underutilised space by 34% in the first quarter.",
                  href: "/resources/case-studies",
                },
              ].map((item) => (
                <Link
                  key={item.logo}
                  href={item.href}
                  className="bg-white rounded-xl p-8 border border-mist/30 shadow-card group hover:shadow-elevated hover:border-cobalt/15 transition-all duration-300 h-full flex flex-col"
                >
                  <p className="text-sm font-semibold text-inkwell/30 mb-4 tracking-tight">{item.logo}</p>
                  <p className="caption text-inkwell/70 leading-relaxed mb-6 flex-1">&ldquo;{item.story}&rdquo;</p>
                  <span className="link-arrow group-hover:underline">
                    Read the full story
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
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
              Over <Highlight>500 activations</Highlight> measured across 12 countries. From pop-up retail to multi-day conference deployments.
            </StatCard>
            <StatCard variant="mist" delay={0.1}>
              <Highlight>94% of clients</Highlight> said realmspace changed how they brief their next activation. Every campaign improves.
            </StatCard>
            <StatCard delay={0.2}>
              <Highlight>2.4× sponsor renewal rate</Highlight> for event organisers who share realmspace insight reports with their partners.
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
            imageSrc: "/images/Realistic_photograph_of_an_emerald_green_interacti-1782596058924.png",
          },
          {
            category: "Customer Story",
            title: "How a Fortune 500 Auto Brand Measured ROI Across 12 Simultaneous Launch Events",
            href: "/resources/case-studies",
            imageSrc: "/images/Realistic_photograph_of_a_bright_orange_and_white_-1782596045852.png",
          },
          {
            category: "Research",
            title: "2026 Benchmark Report: Engagement Signals Across Retail, Trade Shows, and Brand Activations",
            href: "/resources/benchmarks",
            imageSrc: "/images/Realistic_photograph_of_a_dark_charcoal_grey_angul-1782596012937.png",
          },
        ]}
      />

      {/* SECTION 11: Bottom CTA */}
      <ConversionPanel
        headline="realmspace is the intelligence layer your activations need."
        ctaLabel="Get a Live Demo"
        imageSrc="/images/dd221adb-b6e3-46dd-8111-9bdfbb196676-scaled.jpg"
        imageAlt="Team reviewing realmspace data"
      />
    </>
  );
}
