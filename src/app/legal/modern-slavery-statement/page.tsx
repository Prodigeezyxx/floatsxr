import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Modern Slavery Statement",
  description: "Floats principles for preventing modern slavery and human trafficking in its operations and supply relationships.",
};

const sections = [
  {
    title: "Our position",
    paragraphs: [
      "Floats Anywhere Ltd does not tolerate slavery, servitude, forced or compulsory labour, or human trafficking in its operations or supply relationships. We expect people working with Floats to be treated lawfully, safely, and with dignity.",
    ],
  },
  {
    title: "Our business and supply relationships",
    paragraphs: [
      "Floats develops and supports physical-experience technology and related professional services. Our supply relationships may include software and cloud providers, professional advisers, production specialists, hardware suppliers, logistics providers, venues, agencies, and independent contractors.",
    ],
  },
  {
    title: "Risk-based due diligence",
    items: [
      "Consider the nature, location, and labour profile of a supplier or project.",
      "Seek clear ownership and accountability for work delivered on Floats projects.",
      "Use written terms appropriate to the relationship and raise concerns where practices are unclear.",
      "Prioritise closer review where production, logistics, temporary labour, or subcontracting may increase risk.",
    ],
  },
  {
    title: "Expectations and reporting",
    paragraphs: [
      "Employees, contractors, and suppliers should raise concerns about exploitation, coercion, unsafe labour, withheld identity documents, recruitment fees, or other indicators of modern slavery. Reports made in good faith should be handled sensitively and escalated appropriately.",
    ],
  },
  {
    title: "Responding to issues",
    paragraphs: [
      "If a credible concern is identified, Floats will seek to understand the facts, protect affected people, and take proportionate action. That may include requiring corrective steps, pausing work, ending a supplier relationship, or contacting appropriate authorities or specialist organisations.",
    ],
  },
  {
    title: "Continuous improvement",
    paragraphs: [
      "Floats will review this statement and its supplier practices as the business and risk profile develop. Priorities include improving procurement records, supplier communication, and awareness of warning signs in higher-risk project activities.",
    ],
  },
  {
    title: "Raise a concern",
    paragraphs: [
      "Concerns relating to Floats operations or suppliers can be sent to hello@floatsanywhere.com with “Modern slavery concern” in the subject line. If someone is in immediate danger, contact the relevant emergency or law-enforcement service.",
    ],
  },
];

export default function ModernSlaveryStatementPage() {
  return (
    <LegalDocument
      title="Modern Slavery Statement"
      summary="Our position, expectations, and risk-based approach to preventing exploitation in Floats operations and supply relationships."
      sections={sections}
      note="This statement describes Floats’ current principles and improvement approach. It should be reviewed alongside any statutory reporting requirements that apply to the business."
    />
  );
}
