import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "GDPR",
  description: "How Floats approaches GDPR responsibilities, individual rights, and realmspace project governance.",
};

const sections = [
  {
    title: "Our GDPR approach",
    paragraphs: [
      "Floats applies data-protection principles to personal information within the scope of the UK GDPR, EU GDPR, and other applicable requirements. The exact legal role of Floats depends on the activity: Floats may act as a controller for its own business contacts and website, and as a processor when handling personal data solely on a customer’s documented instructions.",
    ],
  },
  {
    title: "Core principles",
    items: [
      "Use personal information lawfully, fairly, and transparently.",
      "Collect it for specified purposes and avoid incompatible reuse.",
      "Limit collection to what is relevant and proportionate.",
      "Keep information accurate, appropriately protected, and no longer than needed.",
      "Document responsibility for privacy and data-handling decisions.",
    ],
  },
  {
    title: "Privacy by design",
    paragraphs: [
      "realmspace deployments are reviewed before launch to define the purpose, measurement approach, data categories, access, retention, and notices appropriate to the project. Floats seeks to avoid identity-based visitor profiles and unnecessary collection when designing measurement workflows.",
    ],
  },
  {
    title: "Controller and processor responsibilities",
    paragraphs: [
      "Where a customer determines why and how personal data is processed, the customer remains responsible for its lawful basis, required notices, and instructions. Floats supports those obligations as agreed in the contract and data-processing terms. Floats remains responsible for processing it undertakes for its own purposes.",
    ],
  },
  {
    title: "Individual rights",
    paragraphs: [
      "Applicable rights may include access, correction, deletion, restriction, objection, portability, and withdrawal of consent. Requests relating to a customer-controlled deployment may need to be handled with that customer. Floats will help route a request and support customers where contractually required.",
    ],
  },
  {
    title: "Security, suppliers, and transfers",
    paragraphs: [
      "Floats uses proportionate technical and organisational safeguards and reviews service providers that handle relevant information. Where international transfers occur, appropriate legal and contractual safeguards are used for the circumstances.",
    ],
  },
  {
    title: "Questions and requests",
    paragraphs: [
      "Contact hello@floatsanywhere.com with “Data protection” in the subject line. Include the relevant customer, project, or interaction where possible so the request can be directed correctly.",
    ],
  },
];

export default function GdprPage() {
  return (
    <LegalDocument
      title="GDPR"
      summary="How data-protection roles, principles, and individual rights are handled across the Floats website and realmspace projects."
      sections={sections}
      note="This page is an operational summary, not a replacement for a project-specific privacy notice, contract, or data-processing attachment."
    />
  );
}
