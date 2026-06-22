import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { BookingChat } from "@/components/features/BookingChat";

export const metadata: Metadata = {
  title: "AI Automation for Auto Repair Shops",
  description:
    "We build custom AI automation for independent auto repair shops in the DMV and beyond. Booking, follow-up, review management. Free 45-minute audit. Simple exit terms.",
  robots: { index: true, follow: true },
};

export default function ForShopsPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="bg-navy text-white dot-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1
              className="hero-anim text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ animationDelay: "0ms" }}
            >
              Thanks for taking my call. Here&apos;s what I meant.
            </h1>
            <p
              className="hero-anim text-base sm:text-lg text-cream/80 leading-relaxed mb-8"
              style={{ animationDelay: "150ms" }}
            >
              I build custom AI automation for auto repair shops. No bloat, no
              enterprise pricing. Just tools that handle the admin work your
              operation runs on — without needing a person to run them.
            </p>
            <a
              href="#what-it-looks-like"
              className="hero-anim inline-flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-cream transition-colors"
              style={{ animationDelay: "280ms" }}
            >
              See what this looks like <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#1A1A2E" to="#ffffff" />

      {/* ── Section 2: What working with us looks like ───────────────────── */}
      <section id="what-it-looks-like" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight mb-8 max-w-xl">
              Here&apos;s what working with us actually looks like.
            </h2>
          </FadeUp>

          <FadeUp delay={80} className="max-w-2xl space-y-5 mb-10">
            <p className="text-base text-grey leading-relaxed">
              We start with a free 45-minute audit — no pitch deck, no slide
              show. Just questions. We want to understand your booking process,
              how you handle follow-up after a visit, what you do with estimates
              that go quiet, and how you manage reviews.
            </p>
            <p className="text-base text-grey leading-relaxed">
              Then we map it. We&apos;ll show you exactly which parts of your
              operation we&apos;d automate, what the system would look like, and
              what it would cost — before you commit to anything.
            </p>
            <p className="text-base text-grey leading-relaxed">
              If it makes sense for your shop, we build it. If it doesn&apos;t,
              you&apos;ll still know more about your options than when we started.
              That&apos;s the deal.
            </p>
          </FadeUp>

          <FadeUp delay={160}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight text-white text-sm font-semibold px-6 py-3 transition-colors"
            >
              Book a free audit →
            </Link>
          </FadeUp>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#FAF7F0" flip />

      {/* ── Section 3: Morgatech proof ───────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>In Practice</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight mb-8 max-w-xl">
              What we&apos;ve already done for a shop like yours.
            </h2>
          </FadeUp>

          <FadeUp delay={80}>
            <CalloutBlock className="mb-6 max-w-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
                Morgatech Auto Repair — DMV Area
              </p>
              <p className="text-sm text-grey leading-relaxed">
                We built Morgatech Auto Repair a full automation stack: AI
                booking intake, Google Ads management, automated email
                follow-up sequences, social media content, and a single
                dashboard showing all of it in real time. One system.
                Everything connected.
              </p>
            </CalloutBlock>
          </FadeUp>

          <FadeUp delay={160}>
            {/* Owner quote placeholder */}
            <div className="border border-dashed border-gold/40 bg-gold/5 p-4 max-w-2xl">
              <p className="text-xs font-bold tracking-wider uppercase text-gold/70 mb-1">
                Placeholder — Owner Quote Before Launch
              </p>
              <p className="text-xs text-grey/60 italic">
                Replace with one sentence from Edwin&apos;s dad before go-live.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#1A1A2E" flip />

      {/* ── Section 4: CTA + BookingChat ─────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel light>One Step. No Risk.</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 max-w-xl">
              Book 45 minutes. Get a free audit of your operation.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-10 max-w-xl">
              Walk away with a clear picture of what we&apos;d build for you —
              and what it would cost.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <BookingChat />
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-6 text-xs text-cream/40 max-w-md">
              Simple service agreement — easy to exit if it&apos;s ever not right
              for you. You keep your data no matter what.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
