import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal information, privacy materials, and website policies for Floats and realmspace.",
};

const policyGroups = [
  {
    title: "Using Floats",
    description: "The rules for this website, our materials, and authorised service access.",
    links: [
      ["Terms of Use", "/legal/terms-of-use"],
      ["Intellectual Property", "/legal/intellectual-property"],
      ["Reasonable Use Policy", "/legal/reasonable-use-policy"],
    ],
  },
  {
    title: "Privacy and data",
    description: "How information is handled and how project data responsibilities are documented.",
    links: [
      ["Privacy Notice", "/legal/privacy-notice"],
      ["GDPR", "/legal/gdpr"],
      ["Data Processing Attachment", "/legal/data-processing-attachment"],
    ],
  },
  {
    title: "Cookies and preferences",
    description: "Understand browser storage and control optional website technologies.",
    links: [
      ["Cookie Policy", "/legal/cookie-policy"],
      ["Cookie Settings", "/legal/cookie-settings"],
    ],
  },
  {
    title: "Responsible business",
    description: "Our current statement on preventing exploitation in operations and supply relationships.",
    links: [
      ["Modern Slavery Statement", "/legal/modern-slavery-statement"],
      ["Accessibility", "/about/accessibility"],
    ],
  },
];

export default function LegalPage() {
  return (
    <section className="legal-page py-20 md:py-28">
      <div className="grid-container">
        <header className="max-w-[760px]">
          <p className="micro text-cobalt mb-4">Trust centre</p>
          <h1 className="display-md text-inkwell">Legal, privacy, and responsible use</h1>
          <p className="body-lg mt-6 text-inkwell/68">
            Clear information about using Floats, managing privacy choices, and understanding
            the documents available for a realmspace engagement.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {policyGroups.map((group, index) => (
            <section key={group.title} className="surface-card group p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated md:p-8">
              <span className="text-xs font-medium tabular-nums text-cobalt/50">0{index + 1}</span>
              <h2 className="heading-4 mt-4 text-inkwell">{group.title}</h2>
              <p className="caption mt-2 max-w-[520px] text-inkwell/58">{group.description}</p>
              <ul className="mt-6 divide-y divide-mist/25 border-t border-mist/25">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="group/link flex items-center justify-between gap-4 py-3.5 text-sm font-medium text-inkwell/72 transition-colors hover:text-cobalt">
                      <span>{label}</span>
                      <span aria-hidden="true" className="shrink-0 leading-none text-cobalt/55 transition-transform group-hover/link:translate-x-0.5">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-inkwell px-6 py-7 text-white md:flex md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-xl font-medium">Need a project-specific document?</h2>
            <p className="mt-2 text-sm leading-6 text-white/58">Customer security, privacy, and contract materials are shared through the review process.</p>
          </div>
          <a href="mailto:hello@floatsanywhere.com?subject=Legal%20document%20request" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-white px-5 text-sm font-medium text-inkwell transition-transform hover:-translate-y-0.5 md:mt-0">
            Request a document
          </a>
        </div>
      </div>
    </section>
  );
}
