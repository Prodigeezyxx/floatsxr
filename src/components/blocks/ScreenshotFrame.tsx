"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onImageError?: () => void;
}

export function ScreenshotFrame({
  src,
  alt,
  className,
  fallbackSrc,
  onImageError,
}: ScreenshotFrameProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    onImageError?.();
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-mist/40 bg-white p-1.5 shadow-elevated overflow-hidden",
        className
      )}
    >
      <div className="rounded-lg overflow-hidden bg-ecru/40">
        <Image
          src={imgSrc}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto object-contain"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          onError={handleError}
        />
      </div>
    </div>
  );
}
