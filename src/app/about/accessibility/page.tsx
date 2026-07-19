import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Floats accessibility approach, current website support, and how to report a barrier.",
};

const commitments = [
  ["Structure", "Use meaningful headings, landmarks, labels, and page titles so content is easier to navigate."],
  ["Keyboard access", "Keep core navigation, forms, preference controls, tabs, and accordions usable without a pointer."],
  ["Readability", "Maintain clear hierarchy, responsive text, visible focus states, and sufficient colour contrast."],
  ["Motion and media", "Respect reduced-motion preferences and provide useful text alternatives for meaningful imagery."],
];

export default function AccessibilityPage() {
  return (
    <section className="legal-page py-20 md:py-28">
      <div className="grid-container">
        <header className="max-w-[800px] border-b border-mist/35 pb-10 md:pb-14">
          <p className="micro text-cobalt mb-4">About Floats</p>
          <h1 className="display-md text-inkwell">Accessibility is part of the build</h1>
          <p className="body-lg mt-6 max-w-[720px] text-inkwell/68">
            We want the Floats website and realmspace materials to be usable by as many people
            as possible. Accessibility is an ongoing practice, not a one-time claim.
          </p>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.08em] text-inkwell/40">Last updated 19 July 2026</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,720px)_300px] lg:gap-16">
          <div>
            <h2 className="heading-2 text-inkwell">What we currently prioritise</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {commitments.map(([title, description]) => (
                <div key={title} className="surface-card p-5 shadow-card">
                  <h3 className="text-base font-medium text-inkwell">{title}</h3>
                  <p className="caption mt-2 text-inkwell/60">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-8 text-base leading-7 text-inkwell/68">
              <section>
                <h2 className="heading-4 text-inkwell">Standards and testing</h2>
                <p className="mt-3">We use WCAG 2.2 Level AA as a reference point when reviewing the public website. Automated checks are useful, but they do not prove conformance, so we also review keyboard behaviour, focus order, content structure, zoom, and representative screen-reader semantics.</p>
              </section>
              <section>
                <h2 className="heading-4 text-inkwell">Known limitations</h2>
                <p className="mt-3">Some third-party services opened from this site, such as an external scheduling page, are operated by their providers. We cannot directly control every part of those experiences, but we welcome reports and can offer an alternative contact route.</p>
              </section>
              <section>
                <h2 className="heading-4 text-inkwell">Alternative formats</h2>
                <p className="mt-3">If a Floats document, demonstration, or support interaction is not accessible to you, ask for a practical alternative. Where possible, we can provide information in plain text, arrange a different meeting format, or work through the content directly.</p>
              </section>
            </div>
          </div>

          <aside className="self-start rounded-2xl bg-inkwell p-6 text-white shadow-elevated lg:sticky lg:top-28">
            <p className="micro text-mist">Report a barrier</p>
            <h2 className="mt-4 text-xl font-medium">Tell us what did not work</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">Include the page, device or browser, what you were trying to do, and your preferred response format. Do not send sensitive personal information.</p>
            <a href="mailto:hello@floatsanywhere.com?subject=Accessibility%20feedback" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-4 text-sm font-medium text-inkwell hover:bg-white/90">Email accessibility feedback</a>
            <p className="mt-4 text-xs leading-5 text-white/42">We aim to acknowledge accessibility feedback within five working days.</p>
          </aside>
        </div>

        <div className="mt-12 border-t border-mist/35 pt-8">
          <Link href="/about" className="link-arrow">&larr; Back to About</Link>
        </div>
      </div>
    </section>
  );
}
