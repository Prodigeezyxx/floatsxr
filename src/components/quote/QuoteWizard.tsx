"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/assistant-knowledge";

const STEPS = ["Experience", "Scale", "Event", "You"] as const;

const EXPERIENCE_OPTIONS = [
  "Immersive brand booth",
  "XR / VR activation",
  "Interactive game or gamified experience",
  "Projection / 360° space",
  "Hybrid physical + digital experience",
];

const FOOTFALL_OPTIONS = ["Under 500", "500 – 2,000", "2,000 – 10,000", "10,000+"];
const DURATION_OPTIONS = ["1 day", "2 – 3 days", "1 week", "1 month +"];

function Pill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all border ${
        selected
          ? "bg-cobalt text-white border-cobalt shadow-glow"
          : "bg-white text-inkwell border-mist hover:border-cobalt hover:text-cobalt"
      }`}
    >
      {children}
    </button>
  );
}

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [experience, setExperience] = useState<string | null>(null);
  const [footfall, setFootfall] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canContinue = useMemo(() => {
    if (step === 0) return experience !== null;
    if (step === 1) return footfall !== null && duration !== null;
    if (step === 2) return true; // brand is optional lead capture
    return name.trim().length > 0 && email.includes("@");
  }, [step, experience, footfall, duration, name, email]);

  const submit = () => {
    // No backend yet — fire an analytics event and hand the summary over.
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "quote_submitted", {
          experience,
          footfall,
          duration,
          has_brand: Boolean(brand.trim()),
        });
      }
    } catch {
      /* analytics is best-effort */
    }
    setSubmitted(true);
  };

  const reset = () => {
    setStep(0);
    setExperience(null);
    setFootfall(null);
    setDuration(null);
    setBrand("");
    setName("");
    setEmail("");
    setSubmitted(false);
  };

  if (submitted) {
    const summary = [
      experience ? `Experience: ${experience}` : null,
      footfall ? `Scale: ${footfall}` : null,
      duration ? `Duration: ${duration}` : null,
      brand.trim() ? `Brand / event: ${brand.trim()}` : null,
    ].filter(Boolean) as string[];

    const mailtoBody = encodeURIComponent(
      `Hi Floats team,\n\nI'd like a tailored proposal.\n\n${summary.join("\n")}\n\nName: ${name}\nEmail: ${email}\n`,
    );

    return (
      <div className="text-center py-10">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-cobalt/10">
          <svg className="size-8 text-cobalt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="heading-2 text-inkwell">Thanks{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""} — your quote is on its way.</h2>
        <p className="body-default text-inkwell/60 mt-4 max-w-[520px] mx-auto">
          We&apos;ll send your tailored proposal — concept direction, production scope and pricing —
          to <span className="text-inkwell font-medium">{email}</span> within 24 hours.
        </p>

        <div className="mt-8 mx-auto max-w-[420px] rounded-xl border border-mist/40 bg-white p-5 text-left">
          <p className="micro text-cobalt mb-3">Your request</p>
          <ul className="space-y-2">
            {summary.map((s) => (
              <li key={s} className="caption text-inkwell/80">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <p className="caption text-inkwell/50 mt-6">
          Prefer to send it directly?{" "}
          <a
            href={`mailto:hello@floatsanywhere.com?subject=${encodeURIComponent("Quote request")}&body=${mailtoBody}`}
            className="text-cobalt hover:underline"
          >
            Email us your request
          </a>{" "}
          ·{" "}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-cobalt hover:underline">
            Book a call
          </a>
        </p>

        <button
          onClick={reset}
          className="mt-8 inline-flex items-center px-5 py-2.5 rounded-full border border-mist text-sm font-medium text-inkwell/70 hover:text-inkwell hover:border-cobalt transition-colors"
        >
          Start another quote
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            {i > 0 && <span className="hidden sm:block w-6 h-px bg-mist" aria-hidden />}
            <span
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                i < step
                  ? "bg-cobalt text-white"
                  : i === step
                    ? "bg-inkwell text-white"
                    : "border border-mist text-inkwell/40"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="mt-12 text-center">
        {step === 0 && (
          <>
            <h2 className="heading-2 text-inkwell">What kind of experience are you planning?</h2>
            <p className="body-default text-inkwell/60 mt-3">
              This is the single biggest driver of scope and price.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-[720px] mx-auto">
              {EXPERIENCE_OPTIONS.map((opt) => (
                <Pill key={opt} selected={experience === opt} onClick={() => setExperience(opt)}>
                  {opt}
                </Pill>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <div className="space-y-12">
            <div>
              <h2 className="heading-2 text-inkwell">How many people will experience it?</h2>
              <p className="body-default text-inkwell/60 mt-3">Expected footfall across the full run.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {FOOTFALL_OPTIONS.map((opt) => (
                  <Pill key={opt} selected={footfall === opt} onClick={() => setFootfall(opt)}>
                    {opt}
                  </Pill>
                ))}
              </div>
            </div>
            <div>
              <h2 className="heading-2 text-inkwell">How long is the activation live?</h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {DURATION_OPTIONS.map((opt) => (
                  <Pill key={opt} selected={duration === opt} onClick={() => setDuration(opt)}>
                    {opt}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <h2 className="heading-2 text-inkwell">Which brand or event is this for?</h2>
            <p className="body-default text-inkwell/60 mt-3">Optional — just helps us tailor the proposal.</p>
            <div className="mt-10 max-w-[420px] mx-auto">
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand or event name"
                className="w-full rounded-xl border border-mist bg-white px-5 py-4 text-inkwell placeholder:text-inkwell/40 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="heading-2 text-inkwell">Where should we send the quote?</h2>
            <div className="mt-10 max-w-[420px] mx-auto space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-mist bg-white px-5 py-4 text-inkwell placeholder:text-inkwell/40 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full rounded-xl border border-mist bg-white px-5 py-4 text-inkwell placeholder:text-inkwell/40 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
              />
            </div>
          </>
        )}
      </div>

      {/* Footer nav */}
      <div className="mt-14 flex items-center justify-between gap-4">
        <div className="flex-1">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-inkwell/60 hover:text-inkwell transition-colors"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              Back
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canContinue}
              className="inline-flex items-center px-8 py-3 rounded-full bg-inkwell text-white text-sm font-medium hover:bg-inkwell/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={!canContinue}
              className="inline-flex items-center px-8 py-3 rounded-full bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Get my quote
            </button>
          )}
        </div>
      </div>

      <p className="text-center caption text-inkwell/50 mt-8">
        Prefer to talk it through?{" "}
        <Link href="/get-a-demo" className="text-cobalt hover:underline">
          Book a call
        </Link>
      </p>
    </div>
  );
}
