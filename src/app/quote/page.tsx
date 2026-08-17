import type { Metadata } from "next";
import { QuoteWizard } from "@/components/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Get a Quote — Floats",
  description:
    "Get your event experience quote in 2 minutes. Tell us the type of experience and scale, and we'll send a tailored proposal — concept direction, production scope and pricing.",
};

export default function QuotePage() {
  return (
    <section className="bg-ecru py-16 md:py-24">
      <div className="grid-container max-w-[900px]">
        <header className="text-center mb-12">
          <h1 className="heading-1 text-inkwell">
            Get your event experience quote in just 2 minutes
          </h1>
          <p className="body-lg text-inkwell/60 mt-5 max-w-[640px] mx-auto">
            Answer a few short questions and we&apos;ll send you a tailored proposal — concept
            direction, production scope and pricing — for your next immersive activation with
            Realmspace by Floats.
          </p>
        </header>

        <QuoteWizard />
      </div>
    </section>
  );
}
