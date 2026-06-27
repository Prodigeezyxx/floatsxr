import Link from "next/link";
import { FormInput } from "@/components/blocks/FormInput";
import { MessageSquare, FileText, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sales — Floats",
  description: "Talk to the Floats team about your activation. Get a personalised walkthrough of realmspace.",
};

export default function ContactSalesPage() {
  return (
    <section className="bg-ecru py-20 md:py-28 flex-1">
      <div className="grid-container">
        <div className="grid md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
          {/* Left: Form */}
          <div>
            <h1 className="heading-1 text-inkwell mb-2">Contact Sales</h1>
            <p className="body-lg text-inkwell/60 mb-8">
              Tell us about your activation. We&apos;ll show you what realmspace can do.
            </p>
            <form className="space-y-5">
              <FormInput label="Full name" id="name" placeholder="Jamie Dobbs" />
              <FormInput label="Company" id="company" placeholder="Your company" />
              <FormInput label="Role" id="role" placeholder="Head of Events" />
              <FormInput
                label="Activation timeline"
                id="timeline"
                placeholder="Next quarter / 3-6 months / Just exploring"
              />
              <div>
                <label htmlFor="message" className="micro text-inkwell/60 mb-2 block">
                  Tell us about your activation
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="h-auto w-full px-4 py-3 rounded-lg bg-white border border-mist text-inkwell placeholder:text-inkwell/50 text-base outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 transition-all resize-none"
                  placeholder="What kind of activation are you planning? How many touchpoints? What outcomes matter most?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-mist/30">
              <MessageSquare className="size-5 text-cobalt mb-3" />
              <h3 className="text-sm font-medium text-inkwell mb-1">Not enterprise?</h3>
              <p className="caption text-inkwell/60 mb-3">
                View our self-serve plans and pricing.
              </p>
              <Link
                href="/plans-and-pricing"
                className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                View Plans & Pricing &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-mist/30">
              <HelpCircle className="size-5 text-cobalt mb-3" />
              <h3 className="text-sm font-medium text-inkwell mb-1">Help & support?</h3>
              <p className="caption text-inkwell/60 mb-3">
                Visit our support centre for documentation and guides.
              </p>
              <Link
                href="/support"
                className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                Get Support &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
