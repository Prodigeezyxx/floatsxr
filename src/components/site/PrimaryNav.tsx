"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      {
        column: "What we build",
        links: [
          { label: "All products", href: "/products" },
          { label: "Immersive Booths", href: "/products/immersive-booths" },
          { label: "Digital Activation Zones", href: "/products/digital-activation-zones" },
          { label: "Integrations", href: "/products/integrations" },
        ],
      },
      {
        column: "The intelligence layer",
        links: [
          { label: "realmspace", href: "/products/realmspace" },
          { label: "Booths & Zones", href: "/products/realmspace/booths-and-zones" },
          { label: "Insight Reports", href: "/products/realmspace/insight-reports" },
          { label: "Natural-Language Query", href: "/products/realmspace/natural-language-query" },
          { label: "Predictive ROI", href: "/products/realmspace/predictive-roi" },
          { label: "Privacy", href: "/products/realmspace/privacy" },
          { label: "API", href: "/products/realmspace/api" },
        ],
      },
      {
        column: "Featured",
        links: [
          { label: "→ How realmspace works", href: "/products/realmspace" },
          { label: "→ See it in action", href: "/get-a-demo" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        column: "By use case",
        links: [
          { label: "Brand Activations", href: "/solutions/brand-activations" },
          { label: "Sponsor Measurement", href: "/solutions/sponsor-measurement" },
          { label: "Trade Shows & Conferences", href: "/solutions/trade-shows-and-conferences" },
          { label: "Retail Flagship", href: "/solutions/retail-flagship" },
          { label: "Venue Operations", href: "/solutions/venue-operations" },
          { label: "Measurable ROI", href: "/solutions/measurable-roi" },
        ],
      },
      {
        column: "By industry",
        links: [
          { label: "Automotive", href: "/industries/automotive" },
          { label: "Luxury Retail", href: "/industries/luxury-retail" },
          { label: "Sports & Entertainment", href: "/industries/sports-and-entertainment" },
          { label: "Financial Services", href: "/industries/financial-services" },
          { label: "Technology", href: "/industries/technology" },
          { label: "Government & Cultural", href: "/industries/government-and-cultural" },
        ],
      },
      {
        column: "Featured resource",
        links: [
          { label: "→ Case Studies", href: "/resources/case-studies" },
          { label: "→ Benchmark Report", href: "/resources/benchmarks" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        column: "Industries",
        links: [
          { label: "Automotive", href: "/industries/automotive" },
          { label: "Luxury Retail", href: "/industries/luxury-retail" },
          { label: "Sports & Entertainment", href: "/industries/sports-and-entertainment" },
          { label: "Financial Services", href: "/industries/financial-services" },
          { label: "Technology", href: "/industries/technology" },
          { label: "Government & Cultural", href: "/industries/government-and-cultural" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        column: "Content",
        links: [
          { label: "Resource Center", href: "/resources" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Blog", href: "/resources/blog" },
          { label: "Webinars", href: "/resources/webinars" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Benchmarks", href: "/resources/benchmarks" },
        ],
      },
      {
        column: "More",
        links: [
          { label: "Glossary", href: "/resources/glossary" },
          { label: "Research", href: "/resources/research" },
          { label: "Events", href: "/resources/events" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/plans-and-pricing",
    children: [
      {
        column: "Plans",
        links: [
          { label: "Overview", href: "/plans-and-pricing" },
          { label: "Intelligence Layer Only", href: "/plans-and-pricing/intelligence-layer-only" },
          { label: "Bundled Activation", href: "/plans-and-pricing/bundled-activation" },
          { label: "Retainer", href: "/plans-and-pricing/retainer" },
          { label: "API Plans", href: "/plans-and-pricing/api-plans" },
        ],
      },
    ],
  },
];

export function PrimaryNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-mist/40 shadow-card"
          : "bg-white border-mist/30"
      )}
    >
      <div className="grid-container flex items-center justify-between h-[72px]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img src="/images/floats-transparent.png" alt="Floats" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setOpenMega(link.label)}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium text-inkwell/80 hover:text-inkwell transition-colors rounded-md"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="size-3.5" />}
              </Link>
              {link.children && openMega === link.label && (
                <div className="absolute top-full left-0 w-[720px] bg-white/95 backdrop-blur-xl border border-mist/40 rounded-xl shadow-elevated p-6 grid grid-cols-3 gap-8">
                  {link.children.map((col) => (
                    <div key={col.column}>
                      <p className="micro text-cobalt mb-3">{col.column}</p>
                      <ul className="space-y-2.5">
                        {col.links.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-sm text-inkwell/70 hover:text-cobalt transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact-sales"
            className="text-sm font-medium text-inkwell/60 hover:text-inkwell transition-colors"
          >
            Contact sales
          </Link>
          <Link
            href="/get-a-demo"
            className="inline-flex items-center px-5 py-2 rounded-lg border border-cobalt/30 text-cobalt text-sm font-medium hover:bg-cobalt/5 hover:border-cobalt/50 transition-all"
          >
            Book a demo
          </Link>
          <Link
            href="/try-realmspace"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 hover:shadow-glow transition-all"
          >
            Try realmspace
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-3 -mr-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-mist/30 px-6 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium text-inkwell/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact-sales"
              className="block text-sm font-medium text-inkwell/70 text-center py-2"
            >
              CONTACT SALES
            </Link>
            <Link
              href="/get-a-demo"
              className="block text-center px-5 py-2.5 rounded-lg border border-cobalt text-cobalt text-sm font-medium"
            >
              BOOK A DEMO
            </Link>
            <Link
              href="/try-realmspace"
              className="block text-center px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium"
            >
              Try realmspace
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
