"use client";

import Link from "next/link";
import { FormInput } from "@/components/blocks/FormInput";
import { Calendar, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

const CALENDLY_BASE = "https://calendly.com/hello-floatsanywhere/start?month=2025-07";

export default function GetADemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const calendlyUrl = `${CALENDLY_BASE}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(company)}&a2=${encodeURIComponent(phone)}`;

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
              <FormInput label="Full name" id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <FormInput label="Work email" id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <FormInput label="Company" id="company" placeholder="Your company" value={company} onChange={(e) => setCompany(e.target.value)} />
              <FormInput label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <div className="space-y-3">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors w-full justify-center"
                >
                  Book a Walkthrough
                </button>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cobalt/30 text-cobalt text-sm font-medium hover:bg-cobalt/5 transition-colors w-full"
                >
                  <ExternalLink className="size-4" />
                  Pick a time on Calendly
                </a>
              </div>
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
