import Link from "next/link";

const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "realmspace", href: "/products/realmspace" },
      { label: "Immersive Booths", href: "/products/immersive-booths" },
      { label: "Digital Activation Zones", href: "/products/digital-activation-zones" },
      { label: "Integrations", href: "/products/integrations" },
      { label: "API", href: "/products/realmspace/api" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Brand Activations", href: "/solutions/brand-activations" },
      { label: "Sponsor Measurement", href: "/solutions/sponsor-measurement" },
      { label: "Trade Shows", href: "/solutions/trade-shows-and-conferences" },
      { label: "Retail Flagship", href: "/solutions/retail-flagship" },
      { label: "Venue Operations", href: "/solutions/venue-operations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Webinars", href: "/resources/webinars" },
      { label: "Guides", href: "/resources/guides" },
      { label: "Benchmarks", href: "/resources/benchmarks" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Floats", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Getting Started", href: "/support/getting-started" },
      { label: "Knowledge Base", href: "/support/knowledge-base" },
      { label: "Status", href: "/support/status" },
      { label: "Community", href: "/support/community" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Developer Center", href: "/developers" },
      { label: "API Overview", href: "/developers/api-overview" },
      { label: "Free Developer Account", href: "/developers/free-developer-account" },
      { label: "Documentation", href: "/developers/documentation" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ecru border-t border-mist/30">
      <div className="grid-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="micro text-cobalt mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-inkwell/60 hover:text-cobalt transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-mist/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[13px] text-inkwell/50">
            <span>United States (English)</span>
            <span className="w-px h-3 bg-mist" />
            <span>USD $</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Social icons placeholder */}
            <a href="#" className="text-inkwell/40 hover:text-inkwell transition-colors" aria-label="X / Twitter">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-inkwell/40 hover:text-inkwell transition-colors" aria-label="LinkedIn">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-inkwell/40 hover:text-inkwell transition-colors" aria-label="GitHub">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-mist/30 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-inkwell/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/legal/terms-of-use" className="hover:text-inkwell transition-colors">Terms of Use</Link>
            <Link href="/legal/privacy-notice" className="hover:text-inkwell transition-colors">Privacy Notice</Link>
            <Link href="/legal/cookie-policy" className="hover:text-inkwell transition-colors">Cookie Policy</Link>
            <Link href="/legal/cookie-settings" className="hover:text-inkwell transition-colors">Cookie Settings</Link>
            <Link href="/legal/intellectual-property" className="hover:text-inkwell transition-colors">Intellectual Property</Link>
            <Link href="/accessibility" className="hover:text-inkwell transition-colors">Accessibility</Link>
          </div>
          <span>&copy; Floats Anywhere Ltd, {year}</span>
        </div>
      </div>
    </footer>
  );
}
