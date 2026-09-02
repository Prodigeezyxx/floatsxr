"use client";

import { useEffect, useRef } from "react";

// Minimal Cloudflare Turnstile wrapper (explicit rendering).
// Injects the widget script once, renders a widget into a div,
// and reports tokens up via onToken.

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${TURNSTILE_SCRIPT}"]`,
      );
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("turnstile script failed")), { once: true });
        if (window.turnstile) resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = TURNSTILE_SCRIPT;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        scriptPromise = null;
        reject(new Error("turnstile script failed"));
      };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

export function TurnstileWidget({
  siteKey,
  onToken,
  nonce,
}: {
  siteKey: string;
  onToken: (token: string | null) => void;
  nonce: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous widget left in the container.
    container.innerHTML = "";

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !container || !window.turnstile) return;
        widgetIdRef.current = window.turnstile.render(container, {
          sitekey: siteKey,
          theme: "light",
          action: "quote",
          callback: (token: string) => {
            if (!cancelled) onToken(token);
          },
          "expired-callback": () => {
            if (!cancelled) onToken(null);
          },
          "error-callback": () => {
            if (!cancelled) onToken(null);
          },
        });
      })
      .catch(() => {
        // Widget failed to load — leave onToken(null) so the form
        // degrades to the manual mailto fallback rather than blocking.
        if (!cancelled) onToken(null);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* noop */
        }
        widgetIdRef.current = null;
      }
    };
    // nonce bump intentionally remounts the widget (fresh challenge).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey, nonce]);

  return <div ref={containerRef} className="flex justify-center" />;
}