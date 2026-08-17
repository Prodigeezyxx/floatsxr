"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ExperienceHotspot } from "@/lib/experiences";

interface ExperienceViewerProps {
  poster: string;
  alt: string;
  hotspots: ExperienceHotspot[];
  launchUrl?: string | null;
  launchLabel?: string;
}

// Interactive case-study viewer (Brief 1).
//
// Ships in "render" mode: a poster/render still with clickable hotspots that
// reveal captions on what each element does and the tech behind it, plus the
// "Launch experience" CTA. This is also the graceful fallback the brief asks
// for on low-power / mobile devices where full 3D isn't performant.
//
// 3D UPGRADE PATH (when the Blender GLB assets land from miracle.otugo@gmail.com):
//   1. Export each booth from Blender as glTF/GLB (draco-compressed, < 5 MB).
//   2. Drop the file in /public/models/<id>.glb and set `glbSrc` in
//      src/lib/experiences.ts.
//   3. `npm i @google/model-viewer`, add its JSX types, and swap the <img> below
//      for a <model-viewer> element (orbit/pan/zoom is native; hotspots map to
//      data-position/data-normal). The poster stays as the loading fallback.
export function ExperienceViewer({
  poster,
  alt,
  hotspots,
  launchUrl,
  launchLabel = "Launch the live experience",
}: ExperienceViewerProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeHotspot = hotspots.find((h) => h.id === activeId) ?? null;

  // Track launch as a distinct analytics event per brand (no-op if gtag isn't
  // installed yet; also emits a custom DOM event for future listeners).
  const trackLaunch = useCallback((label: string) => {
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "launch_experience", { brand: label });
      }
    } catch {
      /* analytics is best-effort */
    }
    window.dispatchEvent(
      new CustomEvent("floats:launch-experience", { detail: { brand: label } }),
    );
  }, []);

  const resetView = useCallback(() => setActiveId(null), []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void el.requestFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  return (
    <div
      ref={containerRef}
      className="group/viewer relative rounded-xl overflow-hidden border border-mist/30 shadow-card bg-inkwell"
    >
      {/* Scene / poster */}
      <div className="relative aspect-[16/9] w-full">
        <img
          src={poster}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/viewer:scale-[1.02]"
        />

        {/* vignette for legibility of overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-inkwell/60 via-transparent to-inkwell/10" />

        {/* Hotspots */}
        {hotspots.map((h) => {
          const active = activeId === h.id;
          return (
            <button
              key={h.id}
              onClick={() => setActiveId(active ? null : h.id)}
              aria-label={h.title}
              aria-pressed={active}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="relative flex size-5">
                <span className="absolute inline-flex size-full rounded-full bg-cobalt opacity-75 animate-ping" />
                <span
                  className={`relative inline-flex size-5 rounded-full border-2 transition-colors ${
                    active ? "bg-cobalt border-white scale-125" : "bg-white/90 border-cobalt"
                  }`}
                />
              </span>
            </button>
          );
        })}

        {/* Caption card */}
        {activeHotspot && (
          <div className="absolute left-4 bottom-4 z-20 max-w-[min(340px,calc(100%-2rem))] rounded-xl bg-white/95 backdrop-blur p-4 shadow-lg border border-mist/40">
            <div className="flex items-start justify-between gap-3">
              <h4 className="heading-4 text-inkwell">{activeHotspot.title}</h4>
              <button
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="text-inkwell/40 hover:text-inkwell transition-colors"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="caption text-inkwell/70 mt-1.5 leading-relaxed">
              {activeHotspot.description}
            </p>
            <p className="micro text-cobalt mt-2">{activeHotspot.tech}</p>
          </div>
        )}

        {/* Launch experience CTA */}
        {launchUrl && (
          <a
            href={launchUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLaunch(launchLabel)}
            className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full bg-inkwell text-white pl-4 pr-3 py-2 text-sm font-medium shadow-lg hover:bg-inkwell/90 transition-colors"
          >
            {launchLabel}
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-inkwell/5">
        <button
          onClick={resetView}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-inkwell/70 hover:text-inkwell hover:bg-inkwell/10 transition-colors"
        >
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v5h5" />
          </svg>
          Reset view
        </button>
        <span className="text-[11px] text-inkwell/40">Tap a dot to explore each element</span>
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-inkwell/70 hover:text-inkwell hover:bg-inkwell/10 transition-colors"
        >
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
          </svg>
          {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}
