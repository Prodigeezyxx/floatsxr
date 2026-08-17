// On-page assistant knowledge base (Brief 2) — front-end "harness" only.
//
// In the full build this content lives in a versioned markdown repo, is embedded
// and stored as vectors in Postgres (pgvector via Lovable Cloud), and is
// retrieved on every turn through the Lovable AI Gateway (Gemini). For this pass
// we ship a deterministic harness: the visitor's question is matched against
// these entries by keyword scoring and confident answers are returned inline.
// Questions the harness can't match fall through to a graceful hand-off.
//
// Deliberately out of scope this pass (the "insight backend"):
//   - nightly re-tag/re-cluster job + question_insights table
//   - visitor experience scoring (time-to-answer, sentiment, drop-off)
//   - /_authenticated/insights dashboard + suggested-content backlog
//   - PII scrubbing (no backend storage yet, so nothing persists)

export interface AssistantEntry {
  id: string;
  topic: string; // pricing | capability | timeline | technical | comparison | logistics | origin | current-work | faq
  question: string; // canonical phrasing (doubles as a starter prompt)
  keywords: string[]; // matching tokens — synonyms and multi-word phrases
  answer: string;
}

export const KNOWLEDGE_BASE: AssistantEntry[] = [
  {
    id: "who-is-floats",
    topic: "origin",
    question: "Who is Floats?",
    keywords: ["who is floats", "who are you", "what is floats", "about floats", "company"],
    answer:
      "Floats is a spatial intelligence company. We started as an immersive experience studio — building activations, exhibits and branded environments for major brands — then built realmspace to answer the question every client asked: \u201cthat was amazing, but how do I prove it worked?\u201d Today we build the activations and measure everything they do.",
  },
  {
    id: "where-started",
    topic: "origin",
    question: "Where did Floats start?",
    keywords: ["where did floats start", "floats origin", "started", "founded", "history", "where you started"],
    answer:
      "Floats grew out of an immersive studio in Lagos. In 2023 we made a deliberate pivot from \u201cthe immersive experience company\u201d to a spatial intelligence company. The trigger was the recurring question \u201chow do I prove it worked?\u201d — and the answer became realmspace.",
  },
  {
    id: "what-is-realmspace",
    topic: "capability",
    question: "What is realmspace?",
    keywords: ["realmspace", "what is realmspace", "intelligence layer", "measurement", "spatial intelligence"],
    answer:
      "realmspace is the intelligence layer for physical experiences. It captures what people actually do in a space — where they go, how long they stay, what they engage with — and turns it into attributable reports. It's how we prove an activation worked rather than guessing.",
  },
  {
    id: "who-serve",
    topic: "faq",
    question: "Who do you work with?",
    keywords: ["who do you work with", "clients", "industries", "who do you serve", "target market", "audience"],
    answer:
      "Brands, agencies, event organisers and cultural institutions. We work across automotive, financial services, luxury retail, sports & entertainment, technology, and government & cultural sectors — anywhere a physical experience needs to be measured, not just staged.",
  },
  {
    id: "capabilities",
    topic: "capability",
    question: "What can you build?",
    keywords: ["what can you build", "capabilities", "services", "offer", "do you do", "can you do"],
    answer:
      "Immersive booths, XR/VR activations, interactive and gamified experiences, projection / 360° spaces, hybrid physical + digital experiences, and digital twins. Everything ships on top of realmspace, so every build includes the measurement layer.",
  },
  {
    id: "xr-cost",
    topic: "pricing",
    question: "How much does an XR activation cost?",
    keywords: ["how much", "cost", "price", "pricing", "budget", "xr activation", "vr cost", "what does it cost"],
    answer:
      "The type of experience drives roughly 70% of scope — build complexity, hardware, and the creative team shape. Scale (expected footfall × run length) then determines production volume, on-site staffing and hardware quantities. That's why our quote flow asks exactly those two questions first. For a tailored range, get a quote — it takes about two minutes.",
  },
  {
    id: "pricing-model",
    topic: "pricing",
    question: "What's your pricing model?",
    keywords: ["pricing model", "how do you price", "what drives cost", "pricing posture", "ranges", "quote"],
    answer:
      "Pricing is scoped per activation and driven by two inputs: the type of experience (immersive booth, XR/VR, gamified, projection, or hybrid) and scale (footfall bucket × duration). Lead capture, brand and date don't move the price — build complexity, hardware and staffing do. We'll send a tailored proposal with concept direction, production scope and pricing.",
  },
  {
    id: "turnaround",
    topic: "timeline",
    question: "What's your turnaround time?",
    keywords: ["turnaround", "how long", "lead time", "timeline", "how fast", "delivery", "deadline"],
    answer:
      "It depends on scope. A focused single-zone activation can go from brief to floor in a few weeks; a full multi-zone build with custom 3D content typically runs four to six weeks. Tell us your event date in the quote flow and we'll work backwards from it.",
  },
  {
    id: "build-game",
    topic: "capability",
    question: "Can you build a game for our launch?",
    keywords: ["game", "gamified", "gamification", "build a game", "launch game", "interactive game"],
    answer:
      "Yes — that's core to what we do. The Prestmit \u201cTrust Machine\u201d was a custom-built gamified experience for their Lagos Tech Fest booth: a playable journey through their product with leaderboard mechanics and embedded lead capture. See it on the case studies page.",
  },
  {
    id: "how-measurement-works",
    topic: "technical",
    question: "How does the measurement actually work?",
    keywords: ["how does measurement work", "tracking", "how do you measure", "data capture", "sensors", "cameras", "footfall"],
    answer:
      "We use computer-vision footfall tracking (no wearables, no app required) plus an append-only event bus that logs every interaction, zone enter/exit, dwell and engagement sequence. It's consent-gated and scrubbed of personal data, then projected into a relational graph for attribution and ROI scoring.",
  },
  {
    id: "privacy",
    topic: "technical",
    question: "What about privacy?",
    keywords: ["privacy", "gdpr", "personal data", "pii", "consent", "data protection", "compliant"],
    answer:
      "realmspace is privacy-first: measurement is consent-gated, identities are resolved only with consent, and no PII is required for the intelligence layer. Raw transcripts and contact details are scrubbed before any storage. See our privacy notice for the full picture.",
  },
  {
    id: "api",
    topic: "technical",
    question: "Do you have an API?",
    keywords: ["api", "integrate", "integration", "developer", "sdk", "webhook", "export"],
    answer:
      "Yes — realmspace has a developer API and integrations layer so you can pipe measurement events into your own stack, CRM, or dashboard. There's a free developer account and documentation in the developer center.",
  },
  {
    id: "differentiation",
    topic: "comparison",
    question: "How are you different from other agencies?",
    keywords: ["different", "vs", "versus", "compare", "competitor", "why floats", "other agencies", "advantage"],
    answer:
      "Most activation agencies ship the experience and a PDF deck. We ship the experience plus the intelligence layer underneath it — so you leave knowing what actually happened on the floor: which zones, features and interactions drove engagement, and what that's worth. We can prove ROI, not just describe it.",
  },
  {
    id: "locations",
    topic: "logistics",
    question: "Do you deploy internationally?",
    keywords: ["international", "countries", "locations", "where do you deploy", "abroad", "travel", "global"],
    answer:
      "Yes — we've deployed across 12 countries. Activation hardware and the intelligence layer are designed to travel; we handle staging, on-site staffing and the post-event report wherever the event runs.",
  },
  {
    id: "process",
    topic: "faq",
    question: "What does a typical project look like?",
    keywords: ["process", "how does it work", "typical project", "workflow", "engagement", "steps", "kickoff"],
    answer:
      "Brief → concept & scope → build → deploy → measure → report. You tell us the experience type and scale, we send a tailored proposal with concept direction, production scope and pricing, then build, ship and hand you the insight report afterwards.",
  },
  {
    id: "proposal",
    topic: "faq",
    question: "How do I get a proposal?",
    keywords: ["proposal", "get a quote", "get a proposal", "quote", "how do i start", "contact", "enquiry", "inquiry"],
    answer:
      "The fastest route is our quote flow — two short questions (experience type + scale) and we'll send a tailored proposal with concept direction, production scope and pricing. You can also book a call and talk to the team directly.",
  },
  {
    id: "post-event",
    topic: "faq",
    question: "What happens after the event?",
    keywords: ["after the event", "post-event", "report", "what do i get", "deliverable", "results", "follow up"],
    answer:
      "You get an insight report — typically within 48 hours of close — showing dwell time, interaction depth, footfall patterns, and per-zone or per-sponsor engagement. Plus the learnings that tell you what to replicate and what to change next time.",
  },
  {
    id: "current-work",
    topic: "current-work",
    question: "What are you working on now?",
    keywords: ["what are you working on", "recent work", "current work", "case studies", "portfolio", "projects"],
    answer:
      "Recent flagship work includes the Africa Gaming Expo map + prediction station (AGE 2026), the Prestmit \u201cTrust Machine\u201d at Lagos Tech Fest, the Kuda Kiosk at Innovate AI, and the Moonshot 2023/24 AR floors. All three flagship builds are on the case studies page with interactive views.",
  },
  {
    id: "book-call",
    topic: "faq",
    question: "How do I book a call?",
    keywords: ["book a call", "book a demo", "schedule", "meeting", "call", "demo", "talk to someone", "sales"],
    answer:
      "You can book a call directly — we'll walk through your brief, show you what's possible, and get you a tailored proposal. Use the \u201cBook a call\u201d option below or the get-a-demo page.",
  },
];

// Hand-off constants (front-end only — no backend persistence).
export const CALENDLY_URL = "https://calendly.com/hello-floatsanywhere/start";
export const QUOTE_URL = "/quote"; // the on-site 2-minute quote flow
export const WHATSAPP_URL = "https://wa.me/447445000000"; // TODO: confirm business WhatsApp number
export const TEAM_EMAIL = "hello@floatsanywhere.com"; // TODO: confirm
export const KEMI_NAME = "Kemi";
export const KEMI_EMAIL = "hello@floatsanywhere.com"; // TODO: confirm Kemi's address

// Starter prompts — hardcoded for now; in the full build these are pulled from
// the top weekly questions surfaced by the insight backend.
export const STARTER_PROMPTS = [
  "How much does an XR activation cost?",
  "Can you build a game for our launch?",
  "What's your turnaround time?",
];

export interface MatchResult {
  answer: string;
  topic: string | null;
  confidence: number;
  handoff: "none" | "quote" | "unknown";
}

const BUYING_INTENT = [
  "quote",
  "price",
  "pricing",
  "cost",
  "budget",
  "book",
  "demo",
  "proposal",
  "hire",
  "work with",
  "get started",
  "sign up",
  "buy",
  "purchase",
  "partner",
  "commission",
  "request",
];

const UNKNOWN_ANSWER =
  "I don't have a confident answer for that yet — it's exactly the kind of gap we want to close. In the meantime, here are the fastest ways to get what you need:";

export function isBuyingIntent(text: string): boolean {
  const t = text.toLowerCase();
  return BUYING_INTENT.some((kw) => t.includes(kw));
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s']/gu, " ").replace(/\s+/g, " ").trim();
}

// Score every entry against the visitor's question. Multi-word phrases score
// higher than single tokens, and a matching question phrase scores highest.
export function matchAnswer(raw: string): MatchResult {
  const q = normalize(raw);
  if (!q) {
    return {
      answer:
        "Ask me about what we build, what it costs, turnaround times, or how realmspace measures an activation.",
      topic: null,
      confidence: 0,
      handoff: "none",
    };
  }

  let best: AssistantEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    const qn = normalize(entry.question);
    if (qn.includes(q) || q.includes(qn)) score += 6;
    for (const kw of entry.keywords) {
      const k = normalize(kw);
      if (!k) continue;
      if (k.includes(" ")) {
        // Multi-word phrase — strong signal.
        if (q.includes(k)) score += 4;
      } else if (q.split(" ").includes(k) || q.includes(k)) {
        // Single token — weak signal on its own; needs company to pass.
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  const buyingIntent = isBuyingIntent(raw);

  // Require a phrase match, a question-phrase match, or several tokens before
  // we're confident enough to answer from the knowledge base.
  if (best && bestScore >= 3) {
    return {
      answer: best.answer,
      topic: best.topic,
      confidence: Math.min(1, bestScore / 10),
      handoff: buyingIntent ? "quote" : "none",
    };
  }

  if (buyingIntent) {
    return {
      answer:
        "Sounds like you're ready to talk specifics. The fastest way to a tailored number is our two-minute quote flow — or book a call and we'll scope it with you live.",
      topic: "pricing",
      confidence: 0.5,
      handoff: "quote",
    };
  }

  return {
    answer: UNKNOWN_ANSWER,
    topic: null,
    confidence: 0,
    handoff: "unknown",
  };
}
