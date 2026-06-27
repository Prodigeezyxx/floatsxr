"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function IntegrationSection() {
  return (
    <section className="bg-ecru py-20 md:py-28">
      <div className="grid-container">
        <FadeIn>
          <div className="text-center">
            <h2 className="heading-1 text-inkwell">
              Connect realmspace to your existing stack.
            </h2>
            <p className="body-lg text-inkwell/60 mt-4 max-w-[600px] mx-auto">
              Sync activation data with the tools you already use. CRM, marketing automation,
              BI platforms, and more.
            </p>
            <Link
              href="/products/integrations"
              className="inline-flex items-center px-6 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors mt-8"
            >
              Explore Integrations
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {["Salesforce", "HubSpot", "Tableau", "Power BI", "Google Analytics", "Slack"].map(
              (tool) => (
                <div
                  key={tool}
                  className="text-inkwell/25 font-medium text-sm tracking-wider"
                >
                  {tool}
                </div>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
