import Link from "next/link";
import { FormInput } from "@/components/blocks/FormInput";
import { Calendar, FileText, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Demo — Floats",
  description: "See realmspace in action. Book a personalised walkthrough of the intelligence layer for physical experiences.",
};

export default function GetADemoPage() {
  return (
    <section className="bg-ecru py-20 md:py-28 flex-1">
      <div className="grid-container">
        <div className="grid md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
          <div>
            <h1 className="heading-1 text-inkwell mb-2">Get a Demo</h1>
            <p className="body-lg text-inkwell/60 mb-8">
              See realmspace in action. We&apos;ll walk you through a real activation dashboard.
            </p>
            <form className="space-y-5">
              <FormInput label="Full name" id="name" placeholder="Your name" />
              <FormInput label="Work email" id="email" type="email" placeholder="you@company.com" />
              <FormInput label="Company" id="company" placeholder="Your company" />
              <FormInput label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                Book a Walkthrough
              </button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-mist/30">
              <Calendar className="size-5 text-cobalt mb-3" />
              <h3 className="text-sm font-medium text-inkwell mb-1">What to expect</h3>
              <p className="caption text-inkwell/60">
                A 30-minute personalised walkthrough of realmspace, tailored to your activation type. You&apos;ll see a live dashboard, ask questions in plain English, and leave with a clear picture of what realmspace can do for you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-mist/30">
              <FileText className="size-5 text-cobalt mb-3" />
              <h3 className="text-sm font-medium text-inkwell mb-1">Prefer to explore on your own?</h3>
              <p className="caption text-inkwell/60 mb-3">
                Check out our guides and case studies.
              </p>
              <Link
                href="/resources/guides"
                className="text-cobalt text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                Browse resources &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
