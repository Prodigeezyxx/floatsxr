import type { Metadata } from "next";
import { LegalDocument } from "@/components/blocks/LegalDocument";

export const metadata: Metadata = {
  title: "Intellectual Property",
  description: "How Floats protects and permits use of its website, brand, product, and customer materials.",
};

const sections = [
  {
    title: "Floats materials",
    paragraphs: [
      "Unless stated otherwise, Floats Anywhere Ltd owns or is licensed to use the website design, written content, graphics, videos, software, documentation, product interfaces, and other materials published by Floats. Those materials are protected by intellectual-property and related laws.",
    ],
  },
  {
    title: "Floats and realmspace names",
    paragraphs: [
      "Floats, realmspace, associated logos, product names, and visual identifiers may be trademarks or brand assets of Floats. Do not imply sponsorship, certification, partnership, or endorsement without written permission.",
    ],
  },
  {
    title: "Permitted website use",
    items: [
      "View public pages and share links to them.",
      "Quote short extracts for legitimate commentary when Floats is clearly credited.",
      "Download a resource only where the page expressly offers that function and follow any terms shown with it.",
    ],
  },
  {
    title: "Uses requiring permission",
    items: [
      "Republishing substantial content, imagery, interfaces, or documentation.",
      "Using Floats branding in advertising, domains, products, or promotional materials.",
      "Modifying, reverse engineering, or creating derivative works from non-public software or product materials except where law expressly permits it.",
      "Using customer project materials, case-study assets, or results outside the permission granted for that material.",
    ],
  },
  {
    title: "Customer and partner materials",
    paragraphs: [
      "Ownership and permitted use of materials created, supplied, or configured for a customer or partner are set out in the relevant written agreement. Public case studies or logos are used with permission appropriate to the published context and should not be copied for unrelated use.",
    ],
  },
  {
    title: "Reporting a concern",
    paragraphs: [
      "If you believe material on this site infringes your rights, email hello@floatsanywhere.com with the page URL, the work concerned, your connection to the rights, and a clear explanation of the issue. Floats will review credible notices and respond appropriately.",
    ],
  },
];

export default function IntellectualPropertyPage() {
  return (
    <LegalDocument
      title="Intellectual Property"
      summary="Guidance on using Floats content, product materials, names, and brand assets responsibly."
      sections={sections}
    />
  );
}
