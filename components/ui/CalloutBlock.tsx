import { cn } from "@/lib/utils";

interface CalloutBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CalloutBlock({ children, className }: CalloutBlockProps) {
  return (
    <div
      className={cn(
        "border-l-4 border-gold pl-6 py-4 bg-cream",
        className,
      )}
    >
      {children}
    </div>
  );
}
