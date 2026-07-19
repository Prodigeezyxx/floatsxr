import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferences } from "@/components/blocks/CookiePreferences";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Manage optional cookie and browser-storage preferences for the Floats website.",
};

export default function CookieSettingsPage() {
  return (
    <section className="legal-page py-20 md:py-28">
      <div className="grid-container">
        <header className="max-w-[780px] border-b border-mist/35 pb-10">
          <p className="micro text-cobalt mb-4">Your preferences</p>
          <h1 className="display-md text-inkwell">Cookie Settings</h1>
          <p className="body-lg mt-6 max-w-[700px] text-inkwell/68">
            Control optional browser technologies on this device. The privacy-conscious default
            keeps optional functional and analytics categories off until you choose otherwise.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,720px)_280px] lg:gap-16">
          <div>
            <CookiePreferences />
          </div>
          <aside className="self-start rounded-2xl border border-mist/35 bg-white/75 p-5 shadow-card backdrop-blur-sm lg:sticky lg:top-28">
            <h2 className="text-base font-medium text-inkwell">About your choice</h2>
            <p className="caption mt-3 text-inkwell/60">Preferences are saved in this browser. Clearing site data or using another browser or device will reset them.</p>
            <div className="mt-5 flex flex-col items-start gap-3 border-t border-mist/30 pt-5">
              <Link href="/legal/cookie-policy" className="link-arrow">Cookie Policy</Link>
              <Link href="/legal/privacy-notice" className="link-arrow">Privacy Notice</Link>
            </div>
          </aside>
        </div>

        <div className="mt-12 border-t border-mist/35 pt-8">
          <Link href="/legal" className="link-arrow">&larr; Legal centre</Link>
        </div>
      </div>
    </section>
  );
}
