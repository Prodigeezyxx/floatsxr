import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how organisations use Floats and realmspace to measure engagement, prove outcomes, and improve physical activations.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
