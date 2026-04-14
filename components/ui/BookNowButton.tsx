"use client";

import Link from "next/link";
import { CreditCard } from "lucide-react";

interface BookNowButtonProps {
  packageSlug?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export default function BookNowButton({
  packageSlug,
  className = "",
  size = "sm",
  label = "Book & Pay",
}: BookNowButtonProps) {
  const href = packageSlug ? `/pay?package=${packageSlug}` : "/pay";

  const sizeClasses = {
    sm: "py-2.5 text-sm gap-2",
    md: "py-3 text-base gap-2",
    lg: "py-4 text-base gap-3",
  };

  return (
    <Link
      href={href}
      className={`flex items-center justify-center bg-gold text-dark font-semibold rounded-xl hover:bg-gold/90 transition-colors ${sizeClasses[size]} ${className}`}
    >
      <CreditCard size={size === "sm" ? 14 : 18} />
      {label}
    </Link>
  );
}
