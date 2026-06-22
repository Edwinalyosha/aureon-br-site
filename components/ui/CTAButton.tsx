import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-gold hover:bg-goldlight text-white px-7 py-3.5 text-sm tracking-wide",
        variant === "secondary" &&
          "border border-gold text-gold hover:bg-gold hover:text-white px-7 py-3.5 text-sm tracking-wide",
        variant === "ghost" &&
          "text-gold hover:text-goldlight text-sm underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
