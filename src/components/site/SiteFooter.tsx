import Image from "next/image";
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
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/about/careers" },
      { label: "Press", href: "/about/press" },
      { label: "Contact", href: "/about/contact" },
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
      { label: "Developer Access", href: "/developers/free-developer-account" },
      { label: "Documentation", href: "/developers/documentation" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inkwell text-white">
      <div className="grid-container py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-[320px]">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image src="/images/floats-transparent.png" alt="Floats" width={300} height={80} className="h-7 w-auto brightness-0 invert md:h-8" />
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Spatial intelligence for physical experiences. Measure what matters,
              prove what worked, improve what happens next.
            </p>
          </div>
          <Link
            href="/get-a-demo"
            className="inline-flex min-h-11 items-center self-start rounded-lg bg-cobalt px-6 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-cobalt/90 hover:shadow-glow"
          >
            Book a live demo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="micro text-mist/80 mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[13px] text-white/40">
            <span>United States (English)</span>
            <span className="w-px h-3 bg-white/20" />
            <span>USD $</span>
          </div>
          <a
            href="mailto:hello@floatsanywhere.com"
            className="text-[13px] text-white/40 hover:text-white transition-colors"
          >
            hello@floatsanywhere.com
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
            <Link href="/legal/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/legal/privacy-notice" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/legal/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link>
            <Link href="/legal/intellectual-property" className="hover:text-white transition-colors">Intellectual Property</Link>
            <Link href="/about/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <span>&copy; Floats Anywhere Ltd, {year}</span>
        </div>
      </div>
    </footer>
  );
}
