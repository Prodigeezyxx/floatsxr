import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
}

/**
 * Inline Cobalt highlight for numbers/phrases within body text.
 * Distinctive Docusign pattern: Cobalt-highlight-on-Inkwell-text.
 */
export function Highlight({ children }: HighlightProps) {
  return <span className="text-cobalt font-medium">{children}</span>;
}
