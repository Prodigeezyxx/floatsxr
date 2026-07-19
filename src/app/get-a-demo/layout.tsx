import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo",
  description:
    "Book a personalised realmspace walkthrough and see how Floats measures physical activations.",
};

export default function GetADemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
