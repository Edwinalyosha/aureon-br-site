import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { PricingTier } from "@/types";
import { CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * One plan card, shared by the homepage pricing section and /pricing.
 * An "available" plan links to the free trial; a "coming-soon" plan shows its price and
 * scope but links to a consultation, so nothing is sold before it exists.
 */
export function PricingCard({ tier }: { tier: PricingTier }) {
  const dark = tier.highlighted;
  const available = tier.status === "available";

  return (
    <div
      className={cn(
        "relative p-7 h-full flex flex-col backdrop-blur-sm",
        dark ? "bg-navy/75 text-white" : "bg-white/65"
      )}
    >
      <span
        className={cn(
          "absolute top-0 right-6 -translate-y-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1",
          available ? "bg-gold text-white" : "bg-gray-200 text-grey"
        )}
      >
        {available ? "Available now" : "Coming soon"}
      </span>

      <div className="mb-auto">
        <p className={cn("text-sm font-bold mb-0.5", dark ? "text-white" : "text-navy")}>{tier.name}</p>
        <p className={cn("text-xs mb-3", dark ? "text-cream/60" : "text-grey/70")}>{tier.tagline}</p>
        <div className="flex items-baseline gap-1 mb-1">
          <span className={cn("text-3xl font-bold", dark ? "text-white" : "text-navy")}>
            ${tier.monthly.toLocaleString()}
          </span>
          <span className={cn("text-sm", dark ? "text-cream/70" : "text-grey")}>/mo</span>
        </div>
        <p
          className={cn(
            "text-[10px] font-semibold tracking-wider uppercase mb-2",
            dark ? "text-goldlight" : available ? "text-gold" : "text-grey/70"
          )}
        >
          {tier.availability}
        </p>
        <p className={cn("text-xs font-semibold mb-4", dark ? "text-white" : "text-navy")}>
          {tier.includedMinutes.toLocaleString()} AI call minutes / month
        </p>
        <p className={cn("text-xs leading-relaxed mb-6", dark ? "text-cream/70" : "text-grey")}>
          {tier.description}
        </p>
        <ul className="space-y-2.5 mb-8">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <CheckCircle2
                size={13}
                className={cn("flex-shrink-0 mt-0.5", dark ? "text-goldlight" : "text-gold")}
              />
              <span className={cn("text-xs leading-relaxed", dark ? "text-cream/80" : "text-grey")}>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={available ? CTA.primary.href : CTA.secondary.href}
        className={cn(
          "block text-center text-xs font-semibold px-4 py-3 transition-colors mt-auto",
          available
            ? "bg-gold hover:bg-goldlight text-white"
            : "border border-gold text-gold hover:bg-gold hover:text-white"
        )}
      >
        {available ? `${CTA.primary.label} →` : "Ask about it →"}
      </Link>
    </div>
  );
}
