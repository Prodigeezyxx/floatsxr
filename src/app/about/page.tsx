import Link from "next/link";
import { ConversionPanel } from "@/components/blocks/ConversionPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Floats",
  description: "Floats is a spatial intelligence company. We build realmspace — the privacy-first intelligence layer for physical experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="grid-container">
          <div className="max-w-[700px]">
            <p className="micro text-cobalt mb-4">About Floats</p>
            <h1 className="display-md text-inkwell">
              From immersive studio to spatial intelligence company.
            </h1>
            <p className="body-lg text-inkwell/70 mt-6 leading-relaxed">
              Floats started as an immersive experience studio — building activations, exhibits,
              and branded environments for some of the world&apos;s biggest brands. Along the way,
              we noticed something: our clients kept asking the same question.
            </p>
            <p className="body-lg text-inkwell/70 mt-4 leading-relaxed">
              &ldquo;That was amazing — but how do I prove it worked?&rdquo;
            </p>
            <p className="body-lg text-inkwell/70 mt-4 leading-relaxed">
              That question led us to build realmspace: a privacy-first intelligence layer that
              captures what people actually do in a physical space. Today, Floats is a spatial
              intelligence company. We still build beautiful activations — but now we measure
              everything they do.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ecru py-20 md:py-28">
        <div className="grid-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Activations measured" },
              { number: "12", label: "Countries deployed" },
              { number: "94%", label: "Client satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="display-sm text-cobalt">{stat.number}</p>
                <p className="caption text-inkwell/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="grid-container max-w-[700px]">
          <h2 className="heading-1 text-inkwell mb-8">The shift</h2>
          <p className="body-lg text-inkwell/70 leading-relaxed">
            In 2023, we made a deliberate decision to pivot from &ldquo;the immersive experience
            company&rdquo; to a spatial intelligence company. It wasn&apos;t a change in what
            we do — it was a change in how we talk about it. We realised the real value we
            deliver isn&apos;t the wow factor of the activation. It&apos;s knowing, with
            certainty, that it worked.
          </p>
          <Link
            href="/about/the-shift"
            className="text-cobalt text-sm font-medium inline-flex items-center gap-1 mt-6 hover:underline"
          >
            Read the full story &rarr;
          </Link>
        </div>
      </section>

      <ConversionPanel
        headline="Want to know more about Floats?"
        ctaLabel="Talk to our team"
        imageSrc="/images/studio-workspace.jpg"
        imageAlt="Floats team"
      />
    </>
  );
}
