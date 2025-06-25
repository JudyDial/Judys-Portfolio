import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "secondary" | string
}

export function Badge({ className = "", variant = "", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  let variantClass = "";
  if (variant === "secondary") {
    variantClass = "bg-gray-100 text-gray-800 border-gray-200";
  }
  return (
    <div className={`${base} ${variantClass} ${className}`} {...props} />
  );
}
