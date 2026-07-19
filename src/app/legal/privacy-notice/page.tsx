import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Floats handles personal information submitted through its website and business services.",
};

const sections = [
  {
    title: "Who this notice covers",
    paragraphs: [
      "This notice explains how Floats Anywhere Ltd handles personal information relating to website visitors, prospective customers, customers, suppliers, partners, and people who contact us. A deployment-specific notice or customer agreement may provide additional detail for a particular realmspace project.",
    ],
  },
  {
    title: "Information we receive",
    items: [
      "Contact details and business information you submit through a form, email, meeting request, or support enquiry.",
      "Correspondence, meeting notes, and information needed to understand or deliver a requested service.",
      "Basic technical and preference information created when you use the website, subject to your cookie choices.",
      "Contract, billing, supplier, and account-administration information where relevant to a business relationship.",
    ],
  },
  {
    title: "How we use information",
    items: [
      "Respond to enquiries and arrange demonstrations or meetings.",
      "Plan, provide, secure, and support agreed services.",
      "Manage customer, partner, supplier, and commercial relationships.",
      "Improve website performance and understand demand where optional analytics are permitted.",
      "Meet legal, regulatory, security, and record-keeping obligations.",
    ],
  },
  {
    title: "Our reasons for processing",
    paragraphs: [
      "Depending on the context, we process information to take steps you request before a contract, perform a contract, comply with a legal obligation, pursue legitimate business interests that do not override your rights, or act with your consent. Where consent applies, you can withdraw it for future processing.",
    ],
  },
  {
    title: "Sharing and service providers",
    paragraphs: [
      "We may share relevant information with vetted providers that support hosting, communications, scheduling, professional advice, security, or service delivery. We may also disclose information where required by law, to protect rights or safety, or as part of a properly managed business transaction.",
      "We do not sell personal information submitted through this website.",
    ],
  },
  {
    title: "International handling",
    paragraphs: [
      "Some providers or project participants may operate in another country. Where personal information is transferred internationally, Floats uses the contractual, organisational, or legal safeguards appropriate to the circumstances.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "We keep personal information only for as long as reasonably needed for the purpose described, contractual requirements, dispute handling, or legal obligations. Retention periods vary by record type and relationship.",
      "Floats uses proportionate technical and organisational measures intended to protect information against unauthorised access, alteration, loss, or disclosure. No internet service can promise absolute security.",
    ],
  },
  {
    title: "Your choices and rights",
    items: [
      "Ask for access to, correction of, or deletion of personal information where applicable.",
      "Object to or request restriction of certain processing.",
      "Ask for portable data where the relevant legal conditions apply.",
      "Withdraw consent and change optional cookie settings.",
      "Raise a concern with Floats or an appropriate data-protection authority.",
    ],
  },
  {
    title: "realmspace deployments",
    paragraphs: [
      "realmspace projects are scoped with the customer before deployment. The roles of the parties, measurement design, approved data, retention, access, and required notices are documented for the project. Visit the realmspace privacy page for the product principles, or request project-specific information from your Floats contact.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "Send privacy questions or rights requests to hello@floatsanywhere.com with “Privacy” in the subject line. We may need to verify your identity before acting on a request.",
    ],
  },
];

export default function PrivacyNoticePage() {
  return (
    <LegalDocument
      title="Privacy Notice"
      summary="A plain-language explanation of the personal information Floats receives, why we use it, and the choices available to you."
      sections={sections}
      note="This notice covers the public website and Floats business relationships. Project-specific notices may also apply to a realmspace deployment."
    />
  );
}
