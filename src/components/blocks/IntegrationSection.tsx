"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";

const integrations = [
  { name: "Salesforce", src: "/images/Salesforce-logo.webp" },
  { name: "HubSpot", src: "/images/logomarks/hubspot.svg" },
  { name: "Apollo", src: "/images/logomarks/apollo.svg" },
  { name: "Power BI", src: "/images/logomarks/powerbi.svg" },
  { name: "Google Analytics", src: "/images/Google_analytics-1024x576.png" },
  { name: "Slack", src: "/images/Slack-logo.png" },
];

const fallbackLogo = (name: string) => (
  <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
    <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <text x="24" y="30" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="600" opacity="0.4">
      {name.charAt(0)}
    </text>
  </svg>
);

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
          <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {integrations.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 text-inkwell/40 group"
              >
                {tool.src ? (
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-8 w-auto opacity-40 group-hover:opacity-70 transition-opacity"
                  />
                ) : (
                  <div className="group-hover:text-inkwell/70 transition-colors">
                    {fallbackLogo(tool.name)}
                  </div>
                )}
                <span className="text-[11px] font-medium tracking-wider">{tool.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
