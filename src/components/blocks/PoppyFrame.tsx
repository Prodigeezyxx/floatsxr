"use client";

interface PoppyFrameProps {
  className?: string;
}

/**
 * PoppyFrame — the signature graphic device.
 * A thin (2.5px) Poppy-red hand-drawn-feeling rounded rectangle
 * with ONE corner clipped at ~45 degrees.
 * ONE per layout, never two.
 */
export function PoppyFrame({ className = "" }: PoppyFrameProps) {
  return (
    <svg
      className={`absolute -inset-3 pointer-events-none ${className}`}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(1deg)" }}
    >
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="8"
        stroke="#FF5252"
        strokeWidth="2.5"
        strokeLinecap="round"
        clipPath="url(#poppyClip)"
      />
      <defs>
        <clipPath id="poppyClip">
          <path d="M 2 2 L 98 2 L 98 60 L 82 76 L 82 98 L 2 98 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
