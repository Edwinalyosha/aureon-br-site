import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LeadForm } from "@/components/features/LeadForm";
import { CONTACT, CTA, TRIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Tell us about your shop and we'll call you within one business day to set up a free 30-minute consultation. No commitment.",
};

const CALL_TOPICS = [
  "Your current tools and where the gaps are",
  "Which automations would move the needle most for your operation",
  "What a custom system would look like and what it costs",
  "Timeline and next steps if it's a fit",
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-xl">
          <SectionLabel>Book a Consultation</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Let&apos;s figure out if this is the right fit.
          </h1>
          <p className="text-grey text-base leading-relaxed mb-10">
            Tell us a little about your shop and we&apos;ll call you within one
            business day to set up a free 30-minute consultation. No pitch, no
            pressure, just an honest look at what would help.
          </p>

          {/* What we'll cover */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-5">
              What we&apos;ll cover
            </p>
            <ul className="space-y-4">
              {CALL_TOPICS.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-grey leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <LeadForm campaign="contact-page" />

          <p className="mt-8 text-sm text-grey">
            Rather pick a time yourself?{" "}
            <a
              href={CONTACT.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:text-goldlight transition-colors"
            >
              Book a 30-minute call on our calendar →
            </a>
          </p>

          <p className="mt-3 text-sm text-grey">
            Rather see it work first?{" "}
            <Link
              href={CTA.primary.href}
              className="text-gold font-semibold hover:text-goldlight transition-colors"
            >
              {CTA.primary.label} →
            </Link>{" "}
            <span className="text-grey/70">({TRIAL.minutes} minutes of calls, no credit card.)</span>
          </p>

          <div className="mt-8 pt-8 border-t border-gray-100 space-y-2">
            <p className="text-sm text-grey">
              Prefer email?{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-gold font-medium hover:text-goldlight transition-colors"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="text-sm text-grey">
              Or call us:{" "}
              <a
                href={CONTACT.phoneHref}
                className="text-gold font-medium hover:text-goldlight transition-colors"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <address className="not-italic text-sm text-grey pt-2">
              {CONTACT.streetAddress}
              {CONTACT.addressLocality && <>, {CONTACT.addressLocality}</>}
            </address>
            <ul className="text-sm text-grey">
              {CONTACT.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
