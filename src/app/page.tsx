import Link from "next/link";
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
import {
  Eye, Target, TrendingUp,
  BarChart3, Activity, Zap,
  Radar, MessageSquare, Shield,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* SECTION 1: Feature cards — replaces gradient hero */}
      <section className="bg-white pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="grid-container">
          <FadeIn>
            <h1 className="heading-1 text-inkwell max-w-[800px]">
              Spatial intelligence that connects the real world.
            </h1>
            <p className="body-lg text-inkwell/60 mt-4 max-w-[600px]">
              Everything you need to prove your activation worked.
            </p>
          </FadeIn>
        </div>
      </section>

      <ThreeColumnFeatures
        features={[
          {
            icon: <Radar className="size-6" strokeWidth={1.5} />,
            title: "realmspace",
            body: "spatial intelligence that captures engagement signals across every physical touchpoint. No cameras. No facial recognition. Real behavioural data.",
            linkLabel: "Explore realmspace",
            linkHref: "/products/realmspace",
          },
          {
            icon: <Eye className="size-6" strokeWidth={1.5} />,
            title: "Insight Reports",
            body: "Clear, plain-English reports on what happened at your activation. Not a data dump — structured intelligence that tells you what worked and what to change.",
            linkLabel: "See sample reports",
            linkHref: "/products/realmspace/insight-reports",
          },
          {
            icon: <MessageSquare className="size-6" strokeWidth={1.5} />,
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-inkwell text-sm font-medium hover:bg-white/90 transition-colors mt-8"
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Brand Activations</h3>
                  <p className="caption text-inkwell/70">Measure dwell time, engagement depth, and content performance across every touchpoint. Know which moments drove the most meaningful interaction.</p>
                  <Link href="/solutions/brand-activations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Trade Shows & Conferences</h3>
                  <p className="caption text-inkwell/70">Multi-booth measurement across an entire show floor. Understand traffic patterns, peak hours, and which exhibits drove the most engagement.</p>
                  <Link href="/solutions/trade-shows-and-conferences" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Retail Flagship</h3>
                  <p className="caption text-inkwell/70">Permanent installation measurement for flagship stores. Understand how visitors move through your space, which displays convert, and what drives repeat visits.</p>
                  <Link href="/solutions/retail-flagship" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Sponsor Measurement</h3>
                  <p className="caption text-inkwell/70">Give your sponsors a reason to come back. Show them exactly how many people engaged with their activation, for how long, and what action they took.</p>
                  <Link href="/solutions/sponsor-measurement" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Venue Operations</h3>
                  <p className="caption text-inkwell/70">Ongoing telemetry for venue operators. Understand traffic flow, bottleneck zones, and how to optimise your space for both visitors and exhibitors.</p>
                  <Link href="/solutions/venue-operations" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
                <div className="bg-white rounded-lg p-6 border border-mist/20">
                  <h3 className="heading-3 text-inkwell mb-2">Measurable ROI</h3>
                  <p className="caption text-inkwell/70">For the C-suite who needs defensible spend. Connect spatial behaviour to business outcomes with clear, auditable data. No anecdotes. No estimates.</p>
                  <Link href="/solutions/measurable-roi" className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-4 group hover:underline">Learn more <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
                </div>
                <div className="bg-white rounded-lg p-6 border border-mist/20">
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
        imageSrc="/images/Add_realmspace_branding_in_lowercase_to_the_oran-1782596029996.png"
        imageAlt="realmspace dashboard"
      />

      {/* SECTION 5: See realmspace in action — dashboards */}
      <section className="bg-mist/30 py-20 md:py-28">
        <div className="grid-container">
          <FadeIn className="text-center mb-14">
            <h2 className="heading-1 text-inkwell">
              See realmspace in action
            </h2>
            <p className="body-lg text-inkwell/60 mt-3 max-w-[600px] mx-auto">
              Real dashboards, real data, real activations.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/Automation_dashboard_with_consistent_realmspace_br-1782596152361.png", label: "Automation dashboard" },
              { src: "/images/Benchmark_intelligence_dashboard_matching_realmspa-1782596159088.png", label: "Benchmark intelligence" },
              { src: "/images/Zone_comparison_dashboard_with_realmspace_design_c-1782596167806.png", label: "Zone comparison" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-card overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-medium text-inkwell">{item.label}</p>
                </div>
              </div>
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
                  className="bg-ecru rounded-lg p-8 group hover:shadow-card transition-shadow"
                >
                  <p className="text-sm font-medium text-inkwell/40 mb-4">{item.logo}</p>
                  <p className="caption text-inkwell/70 leading-relaxed mb-4">&ldquo;{item.story}&rdquo;</p>
                  <span className="text-cobalt text-sm font-medium inline-flex items-center gap-1 group-hover:underline">
                    Read the full story &rarr;
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

      {/* SECTION 10: Blog cards */}
      <BlogCards
        posts={[
          {
            category: "Guide",
            title: "The Measurable Activation Playbook: How to Plan, Measure, and Improve Every Brand Experience",
            href: "/resources/guides",
            imageSrc: "/images/placeholders/tech-abstract.svg",
          },
          {
            category: "Customer Story",
            title: "How a Fortune 500 Auto Brand Measured ROI Across 12 Simultaneous Launch Events",
            href: "/resources/case-studies",
            imageSrc: "/images/placeholders/spatial-tech-city.svg",
          },
          {
            category: "Research",
            title: "2026 Benchmark Report: Engagement Signals Across Retail, Trade Shows, and Brand Activations",
            href: "/resources/benchmarks",
            imageSrc: "/images/placeholders/studio-workspace.svg",
          },
        ]}
      />

      {/* SECTION 11: Bottom CTA */}
      <ConversionPanel
        headline="realmspace is the intelligence layer your activations need."
        ctaLabel="Get a Live Demo"
        imageSrc="/images/placeholders/tech-abstract.svg"
        imageAlt="Team reviewing realmspace data"
      />
    </>
  );
}
