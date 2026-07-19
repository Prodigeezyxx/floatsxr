import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Data Processing Attachment",
  description: "An overview of the data-processing terms available for eligible Floats customer agreements.",
};

const sections = [
  {
    title: "Purpose of the attachment",
    paragraphs: [
      "A Data Processing Attachment, often called a DPA, sets out the parties’ obligations when Floats processes personal data on a customer’s behalf. It supplements the relevant customer agreement and is tailored to the approved service scope.",
    ],
  },
  {
    title: "What the signed DPA covers",
    items: [
      "The subject, duration, nature, and purpose of processing.",
      "The categories of data and people concerned.",
      "Documented customer instructions and confidentiality duties.",
      "Security measures, incident cooperation, and deletion or return at the end of service.",
      "Subprocessor governance, international transfers, and audit information.",
      "Support for data-subject requests and regulatory obligations where applicable.",
    ],
  },
  {
    title: "Project details",
    paragraphs: [
      "The final attachment reflects the actual realmspace deployment, including the customer’s role, the data approved for processing, locations, retention expectations, access model, and relevant service providers. Public product descriptions do not replace those project details.",
    ],
  },
  {
    title: "Subprocessors and transfers",
    paragraphs: [
      "Where subprocessors are needed to deliver an agreed service, their role and location are handled through the contractual process. Appropriate safeguards are used for restricted international transfers where required.",
    ],
  },
  {
    title: "Security information",
    paragraphs: [
      "Security documentation is shared through the customer review process at an appropriate level of detail. Controls and responsibilities depend on the service architecture and deployment scope, so they are confirmed rather than inferred from this website.",
    ],
  },
  {
    title: "Requesting a DPA",
    paragraphs: [
      "Customers and prospective customers can request the current Data Processing Attachment through their Floats contact or by emailing hello@floatsanywhere.com with “DPA request” in the subject line. The signed document, not this overview page, is the binding attachment.",
    ],
  },
];

export default function DataProcessingAttachmentPage() {
  return (
    <LegalDocument
      title="Data Processing Attachment"
      summary="What to expect from the contractual data-processing terms used for an eligible Floats customer engagement."
      sections={sections}
      note="This page is an overview only. Request the current agreement for review and signature."
    />
  );
}
