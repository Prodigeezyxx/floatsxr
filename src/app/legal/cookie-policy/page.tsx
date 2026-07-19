import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Floats uses essential browser storage and optional website technologies.",
};

const sections = [
  {
    title: "What cookies and browser storage are",
    paragraphs: [
      "Cookies and similar browser technologies store or read small pieces of information on your device. They can support essential features, remember preferences, or help a site understand how it is used.",
    ],
  },
  {
    title: "Essential storage",
    paragraphs: [
      "Floats uses essential browser storage where it is necessary to operate the website or remember a choice you requested. For example, this site stores your cookie preferences under the key “floats-cookie-preferences”. Essential storage cannot be disabled through the preference panel because the panel needs it to remember your selection.",
    ],
  },
  {
    title: "Functional preferences",
    paragraphs: [
      "Functional technologies may remember optional choices that make future visits more convenient. They are disabled by default in the preference panel unless you choose to enable them.",
    ],
  },
  {
    title: "Analytics",
    paragraphs: [
      "Analytics technologies may help Floats understand website performance, page use, and technical issues. Optional analytics are disabled by default in the preference panel unless you choose to enable them. The technologies actually deployed may change, and this policy will be updated when material changes are made.",
    ],
  },
  {
    title: "Third-party pages",
    paragraphs: [
      "Links from this site may open third-party services, such as a scheduling provider. Those services may set their own cookies under their own policies. Your Floats preference does not automatically control storage on a separate third-party domain.",
    ],
  },
  {
    title: "Managing your choice",
    paragraphs: [
      "Use Cookie Settings to accept, reject, or change optional categories on this device. You can also clear site data through your browser. Clearing browser data may remove your saved preference, so the default settings will apply again.",
    ],
  },
  {
    title: "Questions and updates",
    paragraphs: [
      "We may update this policy when website technologies or legal requirements change. Questions can be sent to hello@floatsanywhere.com.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <LegalDocument
        title="Cookie Policy"
        summary="What this site stores in your browser, what is optional, and how to stay in control of your preferences."
        sections={sections}
      />
      <div className="fixed bottom-5 right-5 z-40 hidden sm:block">
        <Link href="/legal/cookie-settings" className="rounded-full border border-cobalt/20 bg-white/90 px-4 py-2 text-xs font-medium text-cobalt shadow-elevated backdrop-blur-xl hover:border-cobalt/40">
          Manage cookie settings
        </Link>
      </div>
    </>
  );
}
