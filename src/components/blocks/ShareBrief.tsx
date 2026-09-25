"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, Link2, Mail, MessageCircle, Share2 } from "lucide-react";

interface ShareBriefProps {
  /** Title of the brief, used as the share text and share-sheet title. */
  title: string;
  /** Site-relative route of the brief, e.g. `/resources/case-studies/kuda/`. */
  path: string;
  /** Optional supporting line (event, city), appended to the share text. */
  description?: string;
  /** Absolute URL rendered into the static HTML before the live origin is known. */
  canonicalUrl?: string;
  className?: string;
}

const subscribe = () => () => {};

const secondaryButtonClass =
  "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-mist/40 bg-white text-sm font-medium text-inkwell/70 hover:text-cobalt hover:border-cobalt/40 transition-colors";

const iconLinkClass =
  "inline-flex size-10 items-center justify-center rounded-lg border border-mist/40 bg-white text-inkwell/60 hover:text-cobalt hover:border-cobalt/40 transition-colors";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

/**
 * Share controls for a single case study brief: copies the brief's own URL,
 * opens the native share sheet where available, and links out everywhere else.
 */
export function ShareBrief({
  title,
  path,
  description,
  canonicalUrl,
  className = "",
}: ShareBriefProps) {
  const [copied, setCopied] = useState(false);

  // The live origin and share-sheet support are browser-only values, so they are
  // read through useSyncExternalStore (same pattern as AnnouncementBar) instead
  // of an effect. The static HTML keeps the canonical URL until hydration.
  const origin = useSyncExternalStore(
    subscribe,
    () => window.location.origin,
    () => "",
  );
  const nativeShareAvailable = useSyncExternalStore(
    subscribe,
    () => typeof navigator.share === "function",
    () => false,
  );

  const url = origin ? `${origin}${path}` : (canonicalUrl ?? path);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const shareText = description ? `${title} - ${description}` : title;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);
  const encodedTitle = encodeURIComponent(title);

  const shareTargets = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      icon: <XIcon />,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <LinkedInIcon />,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`,
      icon: <MessageCircle className="size-4" aria-hidden="true" />,
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(`${shareText}\n\n${url}`)}`,
      icon: <Mail className="size-4" aria-hidden="true" />,
    },
  ];

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
    } catch {
      /* Clipboard access denied - the URL is still shown for manual copying. */
    }
  }

  async function openNativeShare() {
    try {
      await navigator.share({ title, text: shareText, url });
    } catch {
      /* The visitor dismissed the share sheet. */
    }
  }

  return (
    <div
      className={`rounded-xl border border-mist/40 bg-white/90 backdrop-blur-sm shadow-card p-5 md:p-6 ${className}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="micro text-cobalt mb-1">Shareable brief</p>
          <p className="caption font-mono text-inkwell/60 break-all">{path}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={copyLink}
            aria-live="polite"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cobalt text-white text-sm font-medium hover:bg-cobalt/90 transition-colors"
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Link2 className="size-4" aria-hidden="true" />}
            {copied ? "Link copied" : "Copy link"}
          </button>
          {nativeShareAvailable && (
            <button type="button" onClick={openNativeShare} className={secondaryButtonClass}>
              <Share2 className="size-4" aria-hidden="true" />
              Share
            </button>
          )}
          {shareTargets.map((target) => (
            <a
              key={target.label}
              href={target.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={target.label}
              title={target.label}
              className={iconLinkClass}
            >
              {target.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
