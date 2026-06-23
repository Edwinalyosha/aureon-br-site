"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch   = window.matchMedia("(pointer: coarse)").matches;

    // No tilt on touch devices or when motion is reduced
    if (reduced || touch) return;

    VanillaTilt.init(el, {
      max:         7,
      speed:       500,
      scale:       1.025,
      perspective: 900,
      gyroscope:   false,
      // glare is intentionally off — enabling it forces overflow:hidden which
      // clips absolutely-positioned badges (e.g. "Most Popular" tag)
    });

    return () => {
      (el as HTMLElement & { vanillaTilt?: { destroy(): void } })
        .vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
