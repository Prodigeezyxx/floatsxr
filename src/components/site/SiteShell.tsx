import { AnnouncementBar } from "./AnnouncementBar";
import { UtilityBar } from "./UtilityBar";
import { PrimaryNav } from "./PrimaryNav";
import { SiteFooter } from "./SiteFooter";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <AnnouncementBar />
      <UtilityBar />
      <PrimaryNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
