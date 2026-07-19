import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Reasonable Use Policy",
  description: "Rules intended to keep Floats and realmspace services secure, reliable, and fair for authorised users.",
};

const sections = [
  {
    title: "Why this policy exists",
    paragraphs: [
      "This policy helps protect the reliability, security, and lawful use of Floats services. It applies to authorised users of customer, partner, developer, support, demonstration, and API services unless a signed agreement provides more specific rules.",
    ],
  },
  {
    title: "Use services as authorised",
    items: [
      "Use credentials only for the person, team, environment, and purpose approved by Floats or the customer administrator.",
      "Keep credentials and access links secure and report suspected compromise promptly.",
      "Follow documented limits, implementation guidance, and applicable laws.",
      "Use data only for the purpose and audience permitted by the relevant agreement.",
    ],
  },
  {
    title: "Prohibited activity",
    items: [
      "Attempting unauthorised access, security testing, scanning, or circumvention of controls.",
      "Introducing malware, harmful code, excessive automated traffic, or activity that disrupts service.",
      "Using the service to infringe rights, break the law, mislead people, or cause harm.",
      "Re-identifying, or attempting to re-identify, people from data not intended to identify them.",
      "Reselling, sublicensing, or exposing access unless expressly authorised in writing.",
    ],
  },
  {
    title: "Capacity and fair use",
    paragraphs: [
      "Plans, APIs, demonstrations, and shared environments may have documented capacity or request limits. Where use is unusually high, unsafe, or materially affects other users, Floats may ask the customer to reduce or reschedule activity, move to an appropriate plan, or agree technical safeguards.",
    ],
  },
  {
    title: "Responding to a concern",
    paragraphs: [
      "Floats may investigate suspected misuse and take proportionate action, including limiting access while a security or service risk is assessed. Where practical, Floats will work with the customer or user to resolve the issue. Serious or repeated misuse may lead to suspension or termination under the relevant agreement.",
    ],
  },
  {
    title: "Report misuse",
    paragraphs: [
      "Report a suspected security issue, compromised credential, or misuse to hello@floatsanywhere.com. Do not include secrets or sensitive personal information in the first message; the team can arrange an appropriate channel if needed.",
    ],
  },
];

export default function ReasonableUsePolicyPage() {
  return (
    <LegalDocument
      title="Reasonable Use Policy"
      summary="The practical rules that keep Floats services secure, reliable, and appropriately used."
      sections={sections}
    />
  );
}
