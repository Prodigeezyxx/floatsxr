import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/blocks/FadeIn";
import { ShareBrief } from "@/components/blocks/ShareBrief";
import {
  caseStudies,
  caseStudyDescription,
  caseStudyHref,
  caseStudyShareUrl,
  getCaseStudy,
} from "@/lib/caseStudies";
import { SITE_URL } from "@/lib/site";

/** Every brief is exported as static HTML at build time. */
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  const description = caseStudyDescription(study);
  const shareImage = `${SITE_URL}${study.heroImage}`;

  return {
    // `absolute` keeps the brand suffix even though the parent
    // `case-studies/layout.tsx` sets its own title, which stops the root
    // layout's `title.template` from reaching this segment.
    title: { absolute: `${study.title} | Floats` },
    description,
    alternates: { canonical: caseStudyHref(study.id) },
    openGraph: {
      title: study.title,
      description,
      url: caseStudyShareUrl(study.id),
      type: "article",
      siteName: "Floats",
      images: [
        {
          url: shareImage,
          width: 1600,
          height: 900,
          alt: `${study.client} case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description,
      images: [shareImage],
    },
  };
}

function BriefSection({
  id,
  title,
  tone = "white",
  children,
}: {
  id: string;
  title: string;
  tone?: "white" | "ecru";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${tone === "white" ? "bg-white" : "bg-ecru"} py-14 md:py-20 scroll-mt-28`}
    >
      <div className="grid-container">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <h2 className="heading-2 text-inkwell mb-6">{title}</h2>
            {children}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyBriefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((item) => item.id === study.id);
  const previous = index > 0 ? caseStudies[index - 1] : undefined;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;
  const briefPath = caseStudyHref(study.id);

  const sections = [
    { label: "The Brief", href: "#the-brief" },
    { label: "What We Built", href: "#what-we-built" },
    { label: "The Results", href: "#the-results" },
    { label: "The Outcome", href: "#the-outcome" },
    { label: "What We Learned", href: "#what-we-learned" },
    { label: "Client Quote", href: "#client-quote" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-haze py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="grid-container relative">
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <p className="micro text-mist mb-4">
                Case Study {String(index + 1).padStart(2, "0")} &middot; {study.client}
              </p>
              <h1 className="display-md text-white">{study.title}</h1>
              <p className="body-lg text-mist mt-5">{study.subtitle}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ShareBrief
                title={study.title}
                path={briefPath}
                description={study.subtitle}
                canonicalUrl={caseStudyShareUrl(study.id)}
                className="mt-10"
              />
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/resources/case-studies/"
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  &larr; All Case Studies
                </Link>
                <Link
                  href="/get-a-demo"
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
                >
                  Book a Pilot
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section shortcuts */}
      <div className="bg-white border-b border-mist/30 sticky top-[72px] z-40 overflow-x-auto">
        <div className="grid-container flex items-center gap-6 h-10 text-[13px] text-inkwell/60">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="shrink-0 hover:text-cobalt transition-colors whitespace-nowrap"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <section className="bg-white pt-14 md:pt-20">
        <div className="grid-container">
          <div className="max-w-[1000px] mx-auto rounded-xl overflow-hidden border border-mist/30 shadow-card">
            <Image
              src={study.heroImage}
              alt={`${study.client} - ${study.title}`}
              width={1600}
              height={900}
              className="w-full aspect-[16/9] object-cover"
              sizes="(min-width: 1024px) 1000px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <BriefSection id="the-brief" title="The Brief" tone="white">
        {study.brief.map((paragraph, i) => (
          <p key={i} className="body-lg text-inkwell/80 mb-5 last:mb-0 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </BriefSection>

      <BriefSection id="what-we-built" title="What We Built" tone="ecru">
        {study.solution.map((paragraph, i) => (
          <p key={i} className="body-lg text-inkwell/80 mb-5 leading-relaxed">
            {paragraph}
          </p>
        ))}
        <ul className="space-y-3">
          {study.features.map((feature, i) => (
            <li key={i} className="body-default text-inkwell/70 pl-6 relative leading-relaxed">
              <span className="absolute left-0 top-0 text-cobalt font-medium">&rarr;</span>
              {feature}
            </li>
          ))}
        </ul>
      </BriefSection>

      <BriefSection id="the-results" title="The Results" tone="white">
        <div className="grid gap-3">
          {study.results.map((result, i) => (
            <div key={i} className="bg-ecru rounded-xl p-4 md:p-5 border border-mist/20">
              <div className="grid md:grid-cols-[1fr_1fr_2fr] gap-3 md:gap-5 items-start">
                <div>
                  <p className="micro text-cobalt mb-1">Metric</p>
                  <p className="caption text-inkwell/70">{result.metric}</p>
                </div>
                <div>
                  <p className="micro text-cobalt mb-1">Result</p>
                  <p className="caption font-medium text-inkwell">{result.value}</p>
                </div>
                <div>
                  <p className="micro text-cobalt mb-1">What It Means</p>
                  <p className="caption text-inkwell/70">{result.meaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BriefSection>

      <BriefSection
        id="the-outcome"
        title={`What ${study.client} Got That They'd Never Had Before`}
        tone="ecru"
      >
        <p className="body-lg text-inkwell/80 leading-relaxed">{study.whatTheyGot}</p>
      </BriefSection>

      <BriefSection id="what-we-learned" title="What We Learned" tone="white">
        <ul className="space-y-3">
          {study.learned.map((learning, i) => (
            <li key={i} className="body-default text-inkwell/70 pl-6 relative leading-relaxed">
              <span className="absolute left-0 top-0 text-cobalt font-medium">&rarr;</span>
              {learning}
            </li>
          ))}
        </ul>
      </BriefSection>

      <BriefSection id="client-quote" title="Client Quote" tone="ecru">
        <div className="p-5 md:p-6 rounded-xl bg-white border border-mist/40">
          <p className="body-lg text-inkwell/60 italic leading-relaxed mb-3">
            &ldquo;{study.quote}&rdquo;
          </p>
          <p className="caption text-inkwell/50 font-medium">{study.quoteAttribution}</p>
        </div>

        <ShareBrief
          title={study.title}
          path={briefPath}
          description={study.subtitle}
          canonicalUrl={caseStudyShareUrl(study.id)}
          className="mt-8"
        />
      </BriefSection>

      {/* Previous / next brief */}
      {(previous || next) && (
        <section className="bg-white py-14 border-t border-mist/20">
          <div className="grid-container">
            <div className="max-w-[900px] mx-auto grid gap-4 md:grid-cols-2">
              {previous ? (
                <Link
                  href={caseStudyHref(previous.id)}
                  className="group rounded-xl border border-mist/30 bg-white p-5 shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <p className="micro text-cobalt mb-2">&larr; Previous brief</p>
                  <p className="body-default font-medium text-inkwell group-hover:text-cobalt transition-colors">
                    {previous.title}
                  </p>
                  <p className="caption text-inkwell/50 mt-1">{previous.subtitle}</p>
                </Link>
              ) : (
                <span aria-hidden="true" />
              )}
              {next ? (
                <Link
                  href={caseStudyHref(next.id)}
                  className="group rounded-xl border border-mist/30 bg-white p-5 shadow-card hover:shadow-elevated transition-all duration-300 md:text-right"
                >
                  <p className="micro text-cobalt mb-2">Next brief &rarr;</p>
                  <p className="body-default font-medium text-inkwell group-hover:text-cobalt transition-colors">
                    {next.title}
                  </p>
                  <p className="caption text-inkwell/50 mt-1">{next.subtitle}</p>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      )}

      <section className="gradient-pearl py-20 md:py-28">
        <div className="grid-container text-center">
          <FadeIn>
            <h2 className="heading-1 text-inkwell">Ready to measure your next activation?</h2>
            <p className="body-lg text-inkwell/60 mt-4 max-w-[500px] mx-auto">
              Book a pilot and get the same intelligence behind this brief.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                Book a Pilot
              </Link>
              <Link
                href="/resources/case-studies/"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-mist/40 bg-white text-sm font-medium text-inkwell/70 hover:text-cobalt hover:border-cobalt/40 transition-colors"
              >
                Browse every brief
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
