"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/blocks/FadeIn";

const caseStudies = [
  {
    id: "moonshot-2023",
    title: "Event Intelligence: Moonshot 2023",
    subtitle: "Moonshot 2023 \u00b7 Lagos, Nigeria",
    heroImage: "/images/Add_realmspace_branding_in_lowercase_to_the_gree-1782596070128.png",
    client: "Moonshot",
    brief: [
      "Moonshot is Nigeria's premier tech and innovation festival, drawing thousands of founders, investors, developers, and creative professionals across a multi-day program of talks, workshops, and exhibitions. For the 2023 edition, the Moonshot team wanted to push beyond the standard exhibitor format and create a genuinely immersive experience that would define the festival's identity as Africa's most forward-thinking tech event.",
      "The brief was to build a large-scale augmented reality activation that would anchor the exhibition floor. It had to draw attendees in, generate shareable moments, and capture data on how people engaged with AR in a live event environment.",
    ],
    solution: [
      "Floats designed and deployed a custom Augmented Reality Station. A large-scale interactive AR installation at the centre of the Moonshot 2023 exhibition floor.",
    ],
    features: [
      "A multi-user AR experience that overlaid digital objects onto the physical exhibition floor, allowing multiple attendees to interact with the same virtual environment simultaneously",
      "Brand-integrated AR filters and 3D assets that let attendees create shareable content featuring Moonshot sponsor branding, driving organic social reach during the event",
      "Real-time leaderboard and achievement system that encouraged repeat visits and friendly competition among attendees",
      "The RealmSpace intelligence layer capturing interaction sequences, session duration, AR engagement depth, and footfall patterns around the installation",
    ],
    results: [
      { metric: "Total AR interactions logged", value: "4,280 interactions", meaning: "Over two days, attendees averaged more than one interaction per minute during peak hours. This demonstrated sustained engagement with the AR layer." },
      { metric: "Average dwell time at AR Station", value: "7.2 minutes", meaning: "Attendees stayed at the installation more than 3x longer than the floor average. AR created a genuine anchor on the exhibition floor." },
      { metric: "Shareable content generated", value: "1,450+ social shares", meaning: "Brand-integrated AR content drove organic social reach, extending Moonshot's visibility beyond the physical event." },
      { metric: "Repeat engagement rate", value: "38% of users returned", meaning: "Leaderboard mechanics and evolving AR content drove repeat visits. Attendees came back to improve their scores and try new interactions." },
      { metric: "Peak concurrent users", value: "24 simultaneous users", meaning: "The multi-user AR system handled high traffic without degradation, proving the scalability of the Floats platform." },
    ],
    whatTheyGot: "Before the 2023 edition, Moonshot had no way to measure what attendees actually did on the exhibition floor beyond headcounts and anecdotal feedback. The AR Station and its underlying intelligence layer gave the Moonshot team a complete picture of engagement: which AR experiences resonated most, how long people stayed, and what drove repeat visits. For the first time, Moonshot had data they could use to brief sponsors, price exhibition space, and prove the ROI of immersive activations to future partners.",
    learned: [
      "Augmented reality at scale is viable at live events. The multi-user AR setup handled peak loads without friction, proving the infrastructure is ready for mass-market deployment.",
      "AR content with brand integration drives organic social reach. Attendees are naturally motivated to share immersive experiences, creating earned media value beyond the event.",
      "Leaderboard and achievement mechanics significantly increase dwell time. Competitive elements turn a passive AR viewer into an active, repeat participant.",
    ],
    quote: "The AR Station was the defining moment of our exhibition floor. It gave us something we have never had before: actual data on how attendees engage with immersive experiences. That changes how we think about event design entirely.",
    quoteAttribution: "Event Director, Moonshot",
  },
  {
    id: "moonshot-2024",
    title: "Event Intelligence: Moonshot 2024",
    subtitle: "Moonshot 2024 \u00b7 Lagos, Nigeria",
    heroImage: "/images/Add_realmspace_branding_in_lowercase_to_the_oran-1782596029996.png",
    client: "Moonshot",
    brief: [
      "After the success of the AR Station at Moonshot 2023, the Moonshot team returned for the 2024 edition with a more ambitious brief. They had seen what AR could do for engagement. Now they wanted to scale it across the entire exhibition floor, integrate sponsor activations directly into the AR experience, and capture deeper intelligence on how attendees moved through the festival.",
      "The challenge was to take the 2023 proof-of-concept and turn it into a platform that could serve multiple sponsors simultaneously, handle higher traffic, and produce attribution-grade data for every activation on the floor.",
    ],
    solution: [
      "Floats deployed a multi-zone AR experience spanning the entire Moonshot 2024 exhibition floor. A network of interconnected AR stations, each with sponsor-integrated content, all feeding into a unified intelligence layer.",
    ],
    features: [
      "Multiple AR stations distributed across the exhibition floor, each with unique sponsor-branded AR content. Sponsors could run their own immersive activations within the larger Floats ecosystem.",
      "Unified attendee journey tracking across zones. RealmSpace captured how attendees moved between AR stations, which sponsor activations they engaged with, and the sequence of their interactions across the floor.",
      "Enhanced multi-user capability supporting higher concurrent traffic, with load-balanced AR rendering that maintained performance during peak periods",
      "Real-time analytics dashboard visible to Moonshot organisers and sponsors during the event, showing live engagement data, dwell times, and floor traffic patterns",
      "Post-event attribution report with per-sponsor engagement metrics, attendee journey maps, and comparative performance data against the 2023 edition",
    ],
    results: [
      { metric: "Total AR interactions", value: "12,650 interactions", meaning: "Nearly 3x the 2023 volume. Scaling from a single station to multiple zones drove exponential engagement growth." },
      { metric: "Sponsor activations served", value: "6 sponsor-integrated AR experiences", meaning: "Multiple sponsors ran concurrent activations through the Floats platform, each with their own branded content and engagement data." },
      { metric: "Average attendee journey", value: "4.2 AR zones per person", meaning: "Attendees visited multiple stations across the floor. The interconnected experience created a structured journey that maximised exposure for every sponsor." },
      { metric: "Sponsor engagement variance", value: "2.1x difference between top and bottom", meaning: "Revealed which sponsor activations drove the deepest engagement. Actionable intelligence for pricing and placement in future editions." },
      { metric: "Year-over-year dwell time increase", value: "+34% vs 2023", meaning: "Attendees spent longer on the floor overall. More zones, better content, and improved flow created a stickier experience." },
    ],
    whatTheyGot: "Moonshot 2024 was a step-change from 2023. Instead of one AR installation, Moonshot had an entire exhibition floor running on Floats with per-sponsor engagement data, attendee journey mapping across zones, and year-over-year benchmarks. For the first time, Moonshot could tell each sponsor exactly how many people engaged with their activation, for how long, and how that compared to the floor average. That level of intelligence transformed how Moonshot sells exhibition space: from square footage to measurable impact.",
    learned: [
      "Multi-zone AR creates a structured floor journey. Attendees naturally move between stations when the experience rewards exploration, increasing total dwell time across the event.",
      "Sponsors respond to data. When sponsors received per-activation engagement reports, renewal interest increased significantly compared to previous editions without data.",
      "Year-over-year benchmarking is the killer feature. Moonshot could show returning sponsors measurable improvement, making the case for increased investment in immersive activations.",
    ],
    quote: "Going from one AR station to an entire connected floor changed everything. We could finally tell our sponsors exactly what they got for their investment: not impressions, not footfall estimates, but real engagement data. That is a conversation we have never been able to have before.",
    quoteAttribution: "Head of Partnerships, Moonshot",
  },
  {
    id: "age-2026",
    title: "Event Intelligence: Africa Gaming Expo",
    subtitle: "AGE 2026 \u00b7 Lagos, Nigeria",
    heroImage: "/images/age-2026-3.png",
    client: "Africa Gaming Expo",
    brief: [
      "Africa Gaming Expo (AGE) is the continent's largest gaming and interactive entertainment event. A two-day showcase bringing together developers, publishers, investors, and gaming communities from across the continent. For the 2026 edition, the AGE team wanted to do something that went beyond a standard exhibitor floor. They wanted an experience that reflected the scale and ambition of the continent's gaming ecosystem, something that would make the floor itself a destination rather than just a backdrop.",
      "The specific challenge: how do you make thousands of attendees feel connected to the broader story of gaming on the continent, while capturing meaningful data about who was engaging and how?",
    ],
    solution: [
      "Floats designed and deployed the Africa Gaming Map + Prediction Station. A large-scale, real-time interactive installation at the heart of the AGE 2026 exhibition floor.",
    ],
    features: [
      "A live, interactive map of the gaming and gambling ecosystem, visualising studios, publishers, investment activity, and emerging markets across the continent in real time",
      "A Prediction Station where attendees could place live predictions on gaming industry outcomes like fastest-growing market, next breakout genre, and most likely gaming IPO on the continent. Results updated live on the installation.",
      "The RealmSpace intelligence layer running underneath, capturing zone dwell time, interaction depth, footfall patterns, and engagement sequences across the installation and surrounding exhibition floor",
      "A post-event intelligence report delivered to the AGE team showing what actually happened on the floor: which zones attracted the most attention, how long people stayed, and what content drove the deepest engagement",
    ],
    results: [
      { metric: "Average dwell time at the installation", value: "8.4 minutes", meaning: "Significantly above the floor average. Attendees did not just walk past; they stopped and engaged deeply with the interactive map and prediction layers." },
      { metric: "Total interactions logged", value: "6,820 interactions", meaning: "Every prediction, map tap, and zone engagement captured in real time across the two-day event." },
      { metric: "Peak engagement period", value: "Day 1, 14:00 to 16:00", meaning: "Data-backed insight into when the floor was most active, useful for future scheduling and sponsor placement decisions." },
      { metric: "Post-event report delivery", value: "Within 48 hours of event close", meaning: "AGE received actionable floor intelligence faster than any previous edition, enabling immediate sponsor follow-ups." },
      { metric: "Sponsor zone performance", value: "12 zones ranked by engagement", meaning: "For the first time, AGE could tell sponsors which activations drove the most attendee attention and which needed redesign." },
    ],
    whatTheyGot: "Before this deployment, AGE like most events of its kind left the exhibition floor without knowing what actually happened inside it. Headcounts, post-event surveys, social media impressions. None of it told them what people engaged with, where energy was concentrated, or which sponsors delivered real value for their investment. The intelligence report from this deployment gave AGE's team something they could actually act on. Not just for the next edition, but for how they design the floor, price their sponsor packages, and make the case to returning partners that showing up at AGE is worth it.",
    learned: [
      "Attendees engaged significantly more with map and prediction layers than with AR-photo novelty. Interactive intelligence beats passive spectacle.",
      "The installation became a natural networking anchor. People gathered around it, which organically increased dwell time in the surrounding sponsor zones.",
      "Real-time data walls create social energy. Seeing live results drives participation from people who would otherwise have walked past.",
    ],
    quote: "For the first time, we left an event knowing exactly what happened on our floor. Not guessing, not estimating, but knowing. That changes how we design AGE, how we talk to sponsors, and how we prove the value of exhibiting.",
    quoteAttribution: "Brand Manager, Africa Gaming Expo",
  },
  {
    id: "prestmit",
    title: "Brand Activation Intelligence: Prestmit",
    subtitle: "Lagos Tech Fest 2025 \u00b7 Lagos, Nigeria",
    heroImage: "/images/Realistic_photograph_of_a_bright_orange_and_white_-1782596045852.png",
    client: "Prestmit",
    brief: [
      "Prestmit is a Nigerian fintech platform that lets users convert gift cards, crypto, and digital assets into cash. Like most fintech brands at events, their challenge at Lagos Tech Fest was straightforward and frustrating in equal measure: how do you explain a complex digital product to someone standing in front of your booth for thirty seconds?",
      "The standard approach of banner stands, a TV screen, and a team member trying to get a word in edgeways was not working. Prestmit wanted their presence at Lagos Tech Fest to do something more than generate foot traffic. They wanted it to generate understanding, trust, and leads.",
    ],
    solution: [
      "Floats designed and deployed the Trust Machine. A branded interactive game experience built specifically for Prestmit's booth at Lagos Tech Fest.",
    ],
    features: [
      "A custom-built, gamified experience that walked players through the core Prestmit product journey (convert, trust, transact) in a way that felt like play rather than a product demo",
      "Leaderboard mechanics that encouraged repeat engagement and created natural conversation starters between attendees and the Prestmit team",
      "Integrated lead capture built into the game flow. Participation naturally surfaced contact information and product interest without feeling like a form.",
      "The RealmSpace intelligence layer capturing engagement depth, session duration, interaction sequences, and lead conversion data across the activation",
    ],
    results: [
      { metric: "Booth ranking by foot traffic", value: "Most visited activation at Lagos Tech Fest", meaning: "The Trust Machine turned a standard fintech booth into the destination on the floor, outperforming every other activation at the event." },
      { metric: "Average session duration", value: "5.8 minutes per player", meaning: "Attendees spent significantly longer with the Prestmit brand than any standard booth interaction would achieve. A 30-second glance became nearly six minutes of brand immersion." },
      { metric: "Lead captures through game flow", value: "340 qualified leads", meaning: "Structured, permission-based contact capture embedded naturally into the experience. No separate form or business card exchange needed." },
      { metric: "Repeat engagement rate", value: "27% of players returned", meaning: "Leaderboard mechanics drove repeat visits, creating multiple touchpoints with the same potential customer across the event." },
      { metric: "Post-event conversion", value: "82 leads progressed to sign-up or product trial", meaning: "Intelligence from the activation informed the Prestmit follow-up sequence. Leads were prioritised based on in-game engagement depth." },
    ],
    whatTheyGot: "Most brand activations at events generate a pile of business cards and a gut feeling about whether it worked. The Trust Machine gave Prestmit something entirely different: structured engagement data showing exactly who interacted, how deeply, and what converted. The RealmSpace report delivered after the event showed Prestmit not just how many people visited their booth, but which parts of the game drove the most engagement, where players dropped off, and which interaction sequences correlated with lead capture. That is the difference between presence and intelligence.",
    learned: [
      "Gamification converts passive foot traffic into active participants. People who play are significantly more likely to remember the brand and act on it.",
      "Embedding lead capture inside an experience removes the friction of a separate form. Conversion rates are higher when participation and data capture feel like the same action.",
      "Leaderboard mechanics create organic dwell time that no static display can match. Competitive participation keeps people in the space longer than any marketing message.",
    ],
    quote: "We have done booth activations at a dozen events. This was the first time we walked away with structured data on what actually worked. Not guesses, not anecdotal feedback, but real interaction data we could act on. That is a completely different conversation with our marketing team.",
    quoteAttribution: "Brand Manager, Prestmit",
  },
  {
    id: "kuda",
    title: "Product Education Intelligence: Kuda Bank",
    subtitle: "Innovate AI 2025 \u00b7 Lagos, Nigeria",
    heroImage: "/images/kuda-2025.png",
    client: "Kuda Bank",
    brief: [
      "Kuda is Nigeria's most talked-about digital bank. A mobile-first, fee-free banking platform with millions of users and a brand identity built around being the bank of the free. Their challenge at Innovate AI was one that every fintech brand with a complex product faces at events: how do you explain what you actually do to someone who has thirty seconds and no patience for a product walkthrough?",
      "The standard conference kiosk with a tablet and a brochure website loaded up was not the answer. Kuda wanted their presence at Innovate AI to function as a product education experience, not just a brand visibility play. The goal was for people to leave understanding what Kuda does and with enough trust to download the app.",
    ],
    solution: [
      "Floats designed and deployed the Kuda Kiosk. A custom interactive product kiosk built for Kuda's booth at Innovate AI.",
    ],
    features: [
      "A purpose-built interactive interface that walked visitors through Kuda's core product features (account opening, fee-free banking, savings, transfers) in a self-guided, engaging format",
      "Live demo capability allowing visitors to experience the product flow directly on the kiosk, driving sign-ups and downloads on the floor in real time",
      "Attendee sign-up capture integrated into the kiosk flow, converting product curiosity into qualified leads without requiring a sales conversation",
      "The RealmSpace intelligence layer running underneath, capturing which product features attracted the most interest, average time spent per feature, and the conversion rate from kiosk interaction to sign-up",
    ],
    results: [
      { metric: "Attendee sign-ups driven on the floor", value: "215 sign-ups", meaning: "Direct, attributable new user acquisition from a single event activation. Every sign-up traced back to the kiosk interaction." },
      { metric: "Live demos completed", value: "430 demos", meaning: "Product education at scale. Each demo is a qualified interaction with a potential customer, completed without a single sales conversation." },
      { metric: "Most engaged product feature", value: "Savings: 38% of interactions", meaning: "Intelligence on which parts of the Kuda product story resonate most at events, informing future messaging and product marketing focus." },
      { metric: "Average kiosk session duration", value: "4.6 minutes", meaning: "Significantly above standard brochure or screen display engagement. Self-guided exploration kept visitors engaged nearly 5x longer than a typical booth interaction." },
      { metric: "Kiosk-to-sign-up conversion rate", value: "14.2%", meaning: "Of everyone who engaged with the kiosk, this proportion converted to a new account or download. A rate that would be exceptional for a digital campaign, let alone a physical activation." },
    ],
    whatTheyGot: "Most event activations for digital banks produce a stack of business cards, some social media content, and an approximate headcount. The Kuda Kiosk produced something entirely different: a structured record of which product features drove the most interest, which interaction sequences led to sign-ups, and exactly how many new users were attributable to this single activation. For a brand whose entire business model is built around data and digital accountability, the ability to apply the same logic to their physical marketing spend was not just useful. It was the point. The RealmSpace intelligence report showed Kuda not just what happened at their booth, but what to replicate, what to change, and how to brief the next event better.",
    learned: [
      "Self-guided product education significantly outperforms passive brand displays. Visitors who interact with a product demo are more likely to convert than those who receive a pitch.",
      "Embedding sign-up capture inside an experience removes the awkwardness of a sales ask. Conversion feels like a natural next step rather than a transaction.",
      "Feature-level engagement data is more valuable than aggregate foot traffic. Knowing which specific product features attract attention informs messaging, not just presence.",
    ],
    quote: "We are a data-driven company, but our event marketing has always been a blind spot. The Kuda Kiosk changed that. We now know exactly which product features resonate with potential users at events and how many actual sign-ups our activations generate. That is the standard we should hold every marketing channel to.",
    quoteAttribution: "Growth Lead, Kuda Bank",
  },
];

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
  const contentId = useId();
  return (
    <div className="border-b border-mist/20 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
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
            id={contentId}
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
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id={study.id} className={`${index % 2 === 0 ? "bg-white" : "bg-ecru"} scroll-mt-20`}>
      <div className="grid-container py-16 md:py-20">
        <div className="max-w-[900px] mx-auto">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`${study.id}-content`}
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
                id={`${study.id}-content`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-8">
                  <FadeIn delay={0.05}>
                    <div className="rounded-xl overflow-hidden mb-10 border border-mist/30 shadow-card">
                      <Image
                        src={study.heroImage}
                        alt={study.client}
                        width={1600}
                        height={900}
                        className="w-full aspect-[16/9] object-cover"
                        sizes="100vw"
                      />
                    </div>
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
