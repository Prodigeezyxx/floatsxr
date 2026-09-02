"use client";

import Link from "next/link";
import { FormInput } from "@/components/blocks/FormInput";
import { MessageSquare, FileText, HelpCircle, CalendarCheck } from "lucide-react";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/hello-floatsanywhere/start";

export default function ContactSalesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (name.trim()) params.set("name", name.trim());
    if (email.trim()) params.set("email", email.trim());
    if (company.trim()) params.set("a1", company.trim());
    if (role.trim()) params.set("a2", role.trim());
    if (timeline.trim()) params.set("a3", timeline.trim());
    if (message.trim()) params.set("a4", message.trim());
    const qs = params.toString();
    window.open(`${CALENDLY_URL}${qs ? `?${qs}` : ""}`, "_blank");
  };

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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <FormInput label="Full name" id="name" placeholder="Jamie Dobbs" value={name} onChange={(e) => setName(e.target.value)} />
              <FormInput label="Work email" id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <FormInput label="Company" id="company" placeholder="Your company" value={company} onChange={(e) => setCompany(e.target.value)} />
              <FormInput label="Role" id="role" placeholder="Head of Events" value={role} onChange={(e) => setRole(e.target.value)} />
              <FormInput
                label="Activation timeline"
                id="timeline"
                placeholder="Next quarter / 3-6 months / Just exploring"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
              >
                <CalendarCheck className="size-4" />
                Continue to Calendly
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