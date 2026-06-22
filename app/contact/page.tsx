import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookingChat } from "@/components/features/BookingChat";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 45-minute audit. Tell us about your operation and we'll map out exactly what we'd automate and what it would cost — no obligation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-[70dvh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Book a Consultation</SectionLabel>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Let&apos;s figure out if this is the right fit.
          </h1>
          <p className="text-grey text-base leading-relaxed">
            The intake below takes about 3 minutes. Edwin reviews your answers
            before the call — so you don&apos;t have to repeat yourself.
          </p>
        </div>

        <BookingChat />

        <div className="mt-10 pt-8 border-t border-gray-100 max-w-2xl">
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
  );
}
