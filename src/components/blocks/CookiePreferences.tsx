"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "floats-cookie-preferences";
const PREFERENCES_EVENT = "floats-cookie-preferences-change";

type Preferences = {
  analytics: boolean;
  functional: boolean;
};

const defaultPreferences: Preferences = {
  analytics: false,
  functional: false,
};

function subscribeToPreferences(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(PREFERENCES_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(PREFERENCES_EVENT, onStoreChange);
  };
}

function getPreferencesSnapshot() {
  return localStorage.getItem(STORAGE_KEY) ?? "";
}

function parsePreferences(snapshot: string): Preferences {
  if (!snapshot) return defaultPreferences;

  try {
    const stored = JSON.parse(snapshot) as Partial<Preferences>;
    return {
      analytics: stored.analytics === true,
      functional: stored.functional === true,
    };
  } catch {
    return defaultPreferences;
  }
}

export function CookiePreferences() {
  const storedPreferences = useSyncExternalStore(
    subscribeToPreferences,
    getPreferencesSnapshot,
    () => "",
  );

  return (
    <PreferencesForm
      key={storedPreferences || "default"}
      initialPreferences={parsePreferences(storedPreferences)}
    />
  );
}

function PreferencesForm({ initialPreferences }: { initialPreferences: Preferences }) {
  const [preferences, setPreferences] = useState<Preferences>(initialPreferences);
  const [saved, setSaved] = useState(false);

  const persist = (nextPreferences: Preferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
    window.dispatchEvent(new Event(PREFERENCES_EVENT));
    setPreferences(nextPreferences);
    setSaved(true);
  };

  return (
    <div className="mt-10 space-y-4">
      <div className="rounded-2xl border border-mist/30 bg-ecru/75 p-5 md:p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-base font-medium text-inkwell">Essential storage</h2>
            <p className="caption text-inkwell/60 mt-1">
              Required for preferences and core site behaviour. This cannot be disabled.
            </p>
          </div>
          <span className="rounded-full bg-cobalt/8 px-3 py-1 text-xs font-medium text-cobalt">Always on</span>
        </div>
      </div>

      {([
        {
          key: "functional" as const,
          title: "Functional preferences",
          description: "Remembers optional choices that make future visits more convenient.",
        },
        {
          key: "analytics" as const,
          title: "Analytics",
          description: "Allows privacy-conscious measurement of site performance and usage.",
        },
      ]).map((item) => (
        <label
          key={item.key}
          className="group flex cursor-pointer items-start justify-between gap-6 rounded-2xl border border-mist/30 bg-white p-5 shadow-card transition-all hover:border-cobalt/25 hover:shadow-elevated md:p-6"
        >
          <span>
            <span className="block text-base font-medium text-inkwell">{item.title}</span>
            <span className="caption mt-1 block text-inkwell/60">{item.description}</span>
          </span>
          <span className="relative mt-0.5 shrink-0">
            <input
              type="checkbox"
              name={item.key}
              checked={preferences[item.key]}
              onChange={(event) => {
                setSaved(false);
                setPreferences((current) => ({ ...current, [item.key]: event.target.checked }));
              }}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="block h-7 w-12 rounded-full bg-inkwell/12 transition-colors after:absolute after:left-1 after:top-1 after:size-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-cobalt peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-cobalt/45 peer-focus-visible:ring-offset-2"
            />
          </span>
        </label>
      ))}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => persist(preferences)}
          className="inline-flex min-h-11 items-center rounded-lg bg-cobalt px-5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-cobalt/90 hover:shadow-glow"
        >
          Save preferences
        </button>
        <button
          type="button"
          onClick={() => persist({ analytics: false, functional: false })}
          className="inline-flex min-h-11 items-center rounded-lg border border-mist bg-white px-5 text-sm font-medium text-inkwell transition-colors hover:border-cobalt/40 hover:bg-ecru/50"
        >
          Reject optional
        </button>
        <button
          type="button"
          onClick={() => persist({ analytics: true, functional: true })}
          className="inline-flex min-h-11 items-center rounded-lg border border-mist bg-white px-5 text-sm font-medium text-inkwell transition-colors hover:border-cobalt/40 hover:bg-ecru/50"
        >
          Accept all
        </button>
        {saved && <span className="text-sm text-cobalt" role="status">Preferences saved.</span>}
      </div>
    </div>
  );
}
