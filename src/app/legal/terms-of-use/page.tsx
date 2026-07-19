import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing access to the Floats website, realmspace information, and related online services.",
};

const sections = [
  {
    title: "About these terms",
    paragraphs: [
      "These terms govern your use of the public Floats website and the information, demonstrations, and enquiry services made available through it. By using the site, you agree to use it lawfully and in line with these terms.",
      "Customer deployments, paid services, partner arrangements, and API access may be governed by separate written agreements. If those terms conflict with this page, the signed agreement controls for that service.",
    ],
  },
  {
    title: "Using the website",
    items: [
      "Use the site only for legitimate business or informational purposes.",
      "Do not interfere with site operation, security, availability, or another visitor’s access.",
      "Do not attempt to gain unauthorised access to systems, accounts, data, or non-public materials.",
      "Do not use automated methods to extract substantial site content without written permission.",
    ],
  },
  {
    title: "Information and availability",
    paragraphs: [
      "We aim to keep website information clear and current, but public materials are provided for general information and may change. Product capabilities, implementation scope, pricing, timelines, and availability are confirmed through a proposal or written agreement.",
      "We may update, suspend, or withdraw parts of the site when needed for maintenance, security, or business reasons.",
    ],
  },
  {
    title: "Accounts, demos, and enquiries",
    paragraphs: [
      "If you request a demo, documentation, support, or developer access, you are responsible for providing accurate contact information and for protecting any access details subsequently issued to you. Access may be limited, changed, or withdrawn where necessary to protect customers, visitors, Floats, or its systems.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The site, its design, copy, graphics, product names, software, and other materials are owned by Floats Anywhere Ltd or used with permission. You may view and share links to public pages, but you may not reproduce, modify, sell, or create derivative materials from substantial site content without permission.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The site may link to third-party scheduling, communication, or other services. Those services operate under their own terms and privacy practices. A link does not mean Floats controls or endorses every part of the third-party service.",
    ],
  },
  {
    title: "Disclaimers and liability",
    paragraphs: [
      "Nothing on this public site is legal, financial, investment, or professional advice. To the extent permitted by law, the site is provided without guarantees that it will always be uninterrupted, error-free, or suitable for a particular purpose.",
      "Floats does not exclude liability that cannot lawfully be excluded. Subject to that, Floats is not responsible for indirect or consequential loss arising solely from use of, or inability to use, the public website.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may revise these terms to reflect changes to the site, our practices, or applicable requirements. The date above shows when this page was last updated. Continued use after an update means the revised terms apply from that point.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms can be sent to hello@floatsanywhere.com. Include enough detail for us to direct your enquiry to the appropriate team.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalDocument
      title="Terms of Use"
      summary="The rules for using the public Floats website and its online enquiry, demonstration, and information services."
      sections={sections}
      note="These website terms are separate from any customer, partner, API, or data-processing agreement signed with Floats."
    />
  );
}
