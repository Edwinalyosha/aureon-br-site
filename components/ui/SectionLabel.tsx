import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs tracking-[0.2em] uppercase mb-4",
        "font-[family-name:var(--font-michroma)]",
        light ? "text-goldlight" : "text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}
