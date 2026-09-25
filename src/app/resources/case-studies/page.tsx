"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShareBrief } from "@/components/blocks/ShareBrief";
import { FadeIn } from "@/components/blocks/FadeIn";
import { ExperienceViewer } from "@/components/experience/ExperienceViewer";
import { getExperience } from "@/lib/experiences";

import { caseStudies, caseStudyHref, caseStudyShareUrl, type CaseStudy } from "@/lib/caseStudies";

function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-mist/20 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <h3 className="heading-4 text-inkwell group-hover:text-cobalt transition-colors">
          {title}
        </h3>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="size-5 text-inkwell/40 shrink-0 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const exp = getExperience(study.id);

  return (
    <section id={study.id} className={`${index % 2 === 0 ? "bg-white" : "bg-ecru"} scroll-mt-20`}>
      <div className="grid-container py-16 md:py-20">
        <div className="max-w-[900px] mx-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left group"
          >
            <FadeIn>
              <p className="micro text-cobalt mb-3">
                Case Study {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="heading-2 text-inkwell mb-2 group-hover:text-cobalt transition-colors">
                    {study.title}
                  </h2>
                  <p className="body-default text-inkwell/60">{study.subtitle}</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-1 shrink-0"
                >
                  <div className="size-10 rounded-full bg-inkwell/5 flex items-center justify-center group-hover:bg-cobalt/10 transition-colors">
                    <svg
                      className="size-5 text-inkwell/40 group-hover:text-cobalt transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8">
                  <FadeIn delay={0.05}>
                    <div className="mb-10">
                      {exp ? (
                        <>
                          <p className="micro text-cobalt mb-3">
                            Interactive experience â€” explore the space we built
                          </p>
                          <ExperienceViewer
                            poster={exp.poster}
                            alt={study.client}
                            hotspots={exp.hotspots}
                            launchUrl={exp.launchUrl}
                            launchLabel={exp.launchLabel}
                          />
                        </>
                      ) : (
                        <div className="rounded-xl overflow-hidden border border-mist/30 shadow-card">
                          <img
                            src={study.heroImage}
                            alt={study.client}
                            className="w-full aspect-[16/9] object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <Link
                        href={caseStudyHref(study.id)}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
                      >
                        Read the full brief &rarr;
                      </Link>
                      <p className="caption text-inkwell/60">
                        Shareable link: /resources/case-studies/{study.id}/
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.15}>
                    <ShareBrief
                      title={study.title}
                      path={caseStudyHref(study.id)}
                      description={study.subtitle}
                      canonicalUrl={caseStudyShareUrl(study.id)}
                      className="mb-10"
                    />
                  </FadeIn>

                  <AccordionSection title="The Brief" defaultOpen>
                    {study.brief.map((p, i) => (
                      <p key={i} className="body-default text-inkwell/80 mb-4 last:mb-0 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </AccordionSection>

                  <AccordionSection title="What We Built">
                    {study.solution.map((p, i) => (
                      <p key={i} className="body-default text-inkwell/80 mb-4 leading-relaxed">
                        {p}
                      </p>
                    ))}
                    <ul className="space-y-3">
                      {study.features.map((f, i) => (
                        <li key={i} className="body-default text-inkwell/70 pl-6 relative leading-relaxed">
                          <span className="absolute left-0 top-0 text-cobalt font-medium">&rarr;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </AccordionSection>

                  <AccordionSection title="The Results">
                    <div className="grid gap-3">
                      {study.results.map((r, i) => (
                        <div
                          key={i}
                          className="bg-ecru rounded-xl p-4 md:p-5 border border-mist/20"
                        >
                          <div className="grid md:grid-cols-[1fr_1fr_2fr] gap-3 md:gap-5 items-start">
                            <div>
                              <p className="micro text-cobalt mb-1">Metric</p>
                              <p className="caption text-inkwell/70">{r.metric}</p>
                            </div>
                            <div>
                              <p className="micro text-cobalt mb-1">Result</p>
                              <p className="caption font-medium text-inkwell">{r.value}</p>
                            </div>
                            <div>
                              <p className="micro text-cobalt mb-1">What It Means</p>
                              <p className="caption text-inkwell/70">{r.meaning}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionSection>

                  <AccordionSection title={`What ${study.client} Got That They'd Never Had Before`}>
                    <p className="body-default text-inkwell/80 leading-relaxed">
                      {study.whatTheyGot}
                    </p>
                  </AccordionSection>

                  <AccordionSection title="What We Learned">
                    <ul className="space-y-3">
                      {study.learned.map((l, i) => (
                        <li key={i} className="body-default text-inkwell/70 pl-6 relative leading-relaxed">
                          <span className="absolute left-0 top-0 text-cobalt font-medium">&rarr;</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </AccordionSection>

                  <AccordionSection title="Client Quote">
                    <div className="p-5 md:p-6 rounded-xl bg-mist/30 border border-mist/40">
                      <p className="body-lg text-inkwell/60 italic leading-relaxed mb-3">
                        &ldquo;{study.quote}&rdquo;
                      </p>
                      <p className="caption text-inkwell/50 font-medium">
                        {study.quoteAttribution}
                      </p>
                    </div>
                  </AccordionSection>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="gradient-haze py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="grid-container text-center relative">
          <FadeIn>
            <p className="micro text-mist mb-4">Resources</p>
            <h1 className="display-md text-white max-w-[800px] mx-auto">
              Case Studies
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="body-lg text-mist mt-6 max-w-[600px] mx-auto">
              Real activations, real results. Explore how brands measure, prove, and improve their physical experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                &larr; Back to Resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {caseStudies.map((study, i) => (
        <CaseStudyCard key={study.id} study={study} index={i} />
      ))}

      <section className="gradient-pearl py-20 md:py-28">
        <div className="grid-container text-center">
          <FadeIn>
            <h2 className="heading-1 text-inkwell">Ready to measure your next activation?</h2>
            <p className="body-lg text-inkwell/60 mt-4 max-w-[500px] mx-auto">
              Book a pilot and get the same intelligence that transformed these events.
            </p>
            <div className="mt-8">
              <Link
                href="/get-a-demo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                Book a Pilot
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
