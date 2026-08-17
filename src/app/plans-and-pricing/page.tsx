"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// The tiered plans page has been replaced by the 2-minute /quote flow.
export default function PlansAndPricingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/quote");
  }, [router]);

  return (
    <div className="grid-container py-24 text-center">
      <p className="body-default text-inkwell/60">
        Redirecting to our new quote flow&hellip;
      </p>
    </div>
  );
}
