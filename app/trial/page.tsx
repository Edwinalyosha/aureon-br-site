import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TrialForm } from "@/components/features/TrialForm";
import { CTA, TRIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free 7-Day Trial",
  description: `${TRIAL.headline} ${TRIAL.finePrint}`,
};

const INCLUDED = [
  "An AI receptionist that answers the calls you miss, day or night",
  "Works on your current number, through call forwarding",
  "Takes each caller's name, number, vehicle and reason",
  "A summary and transcript in your inbox after every call",
  "A callback list of everyone waiting to hear back",
];

export default function TrialPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <SectionLabel>Free Trial</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Free {TRIAL.days}-day trial.
          </h1>
          <p className="text-grey text-base leading-relaxed mb-8">
            Try {TRIAL.plan} on your own calls: up to {TRIAL.minutes} minutes, no credit card.
            Hear your AI receptionist handle real customers before you decide.
          </p>

          <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
            What&apos;s included
          </p>
          <ul className="space-y-3 mb-8">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5 text-gold" />
                <span className="text-sm text-grey leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-4 border-gold bg-cream px-5 py-4">
            <p className="text-sm text-grey leading-relaxed">{TRIAL.finePrint}</p>
          </div>

          <p className="mt-8 text-sm text-grey">
            Want to talk it through first?{" "}
            <Link href={CTA.secondary.href} className="text-gold font-semibold hover:text-goldlight">
              {CTA.secondary.label} →
            </Link>
          </p>
        </div>

        <div>
          <TrialForm />
        </div>
      </div>
    </div>
  );
}
