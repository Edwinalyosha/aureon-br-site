import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "You're Booked",
  description: "Booking confirmed. Edwin will review your intake before your call.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 md:py-32">

        <div className="flex items-center gap-3 mb-8">
          <CheckCircle2 size={32} className="text-gold flex-shrink-0" />
          <h1 className="text-2xl sm:text-3xl font-bold text-navy">
            You&apos;re on the calendar.
          </h1>
        </div>

        <p className="text-grey text-base leading-relaxed mb-3">
          Edwin will review your intake before the call — so come ready to
          talk shop. No fluff.
        </p>
        <p className="text-grey text-base leading-relaxed mb-12">
          A calendar confirmation is on its way to your inbox. If you need
          to reschedule, use the link in that email.
        </p>

        <div className="border-l-4 border-gold bg-cream pl-6 pr-6 py-6">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            While you wait
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services"
                className="text-sm text-navy font-medium hover:text-gold transition-colors"
              >
                → See how the automation system works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-sm text-navy font-medium hover:text-gold transition-colors"
              >
                → Review our pricing tiers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
