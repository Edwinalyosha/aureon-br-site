import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute call. We'll map out exactly what automation would look like for your operation — no commitment required.",
};

const CALL_TOPICS = [
  "Your current tools and where the gaps are",
  "Which automations would move the needle most for your operation",
  "What a custom system would look like and what it costs",
  "Timeline and next steps if it's a fit",
];

const calendarUrl = "https://cal.com/edwin-ssekyondwa-pfuhrv/30min";

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
            Book a free 30-minute call. No pitch, no pressure — just a honest
            look at your operation and what automation could do for it.
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

          {/* CTA */}
          {calendarUrl ? (
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight text-white text-sm font-semibold px-8 py-4 transition-colors"
            >
              Book a Free Consultation <ArrowRight size={15} />
            </a>
          ) : (
            <div className="border border-dashed border-gold/40 bg-gold/5 px-4 py-3 text-xs text-grey/70">
              <strong className="text-gold/80">Developer note:</strong> Set{" "}
              <code className="font-mono">NEXT_PUBLIC_GOOGLE_CALENDAR_URL</code> in{" "}
              <code className="font-mono">.env.local</code> to enable booking.
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-grey">
              Prefer email?{" "}
              <a
                href="mailto:hello@aureonbridge.com"
                className="text-gold font-medium hover:text-goldlight transition-colors"
              >
                hello@aureonbridge.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
