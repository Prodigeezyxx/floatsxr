"use client";

import { cn } from "@/lib/utils";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * FormInput — 48px tall, white background, 1px Mist border,
 * 8px radius, 16px Inkwell text. On focus: 2px Cobalt ring, no glow.
 */
export function FormInput({ className, label, id, ...props }: FormInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="micro text-inkwell/60 mb-2 block">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "h-12 w-full px-4 rounded-lg bg-white border border-mist text-inkwell",
          "placeholder:text-inkwell/50 text-base",
          "outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20",
          "transition-all",
          className
        )}
        {...props}
      />
    </div>
  );
}
