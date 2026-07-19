import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalDocumentProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  updated?: string;
  sections: LegalSection[];
  note?: string;
};

export function LegalDocument({
  eyebrow = "Legal",
  title,
  summary,
  updated = "19 July 2026",
  sections,
  note,
}: LegalDocumentProps) {
  return (
    <section className="legal-page py-20 md:py-28">
      <div className="grid-container">
        <header className="max-w-[820px] border-b border-mist/35 pb-10 md:pb-14">
          <p className="micro text-cobalt mb-4">{eyebrow}</p>
          <h1 className="display-md text-inkwell">{title}</h1>
          <p className="body-lg mt-6 max-w-[720px] text-inkwell/68">{summary}</p>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.08em] text-inkwell/40">
            Last updated {updated}
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="micro text-inkwell/45">On this page</p>
            <nav aria-label={`${title} sections`} className="mt-4">
              <ol className="space-y-2 border-l border-mist/45 pl-4">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-sm leading-5 text-inkwell/58 transition-colors hover:text-cobalt"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="legal-prose">
            {note && (
              <div className="mb-10 rounded-2xl border border-cobalt/15 bg-cobalt/[0.045] p-5 text-sm leading-6 text-inkwell/68">
                {note}
              </div>
            )}
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index + 1}`}
                className="scroll-mt-28 border-b border-mist/30 pb-9 last:border-0"
              >
                <div className="flex items-baseline gap-4">
                  <span aria-hidden="true" className="text-xs font-medium tabular-nums text-cobalt/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title}</h2>
                </div>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>

        <footer className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-mist/35 pt-8">
          <Link href="/legal" className="link-arrow">&larr; Legal centre</Link>
          <a href="mailto:hello@floatsanywhere.com?subject=Legal%20enquiry" className="link-arrow">
            Ask a legal question
          </a>
        </footer>
      </div>
    </section>
  );
}
