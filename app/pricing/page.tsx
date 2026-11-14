import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { PRICING_TIERS, PRICING_TERMS, OVERAGE_PER_MINUTE, CTA, CUSTOM_BUILDS } from "@/lib/constants";
import { ParticleField } from "@/components/ui/ParticleField";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Catch answers your missed calls on your current number for $99/month. No setup fees, month-to-month. Presence, Pipeline and Momentum are coming soon.",
};

const FAQ = [
  {
    q: "What can I buy today?",
    a: "Catch. It answers the calls you miss on the number you already have, emails you a summary and transcript of each one, and keeps a callback list. Presence, Pipeline and Momentum go on sale as each one is ready. Their prices are shown so you know where you can go next.",
  },
  {
    q: "What happens on the free consultation?",
    a: "We look at how your shop handles calls today and tell you straight whether Catch would help. If it's a fit, we set it up on your current number through call forwarding. If it isn't, you've lost half an hour and nothing else.",
  },
  {
    q: "Do I need a new phone number?",
    a: "Not for Catch. You turn on call forwarding for unanswered calls, so the AI only picks up when you don't. Turning forwarding off stops it within seconds.",
  },
  {
    q: "How long does setup take?",
    a: "About 20 minutes for Catch. We set it up with you, turn on forwarding and make a test call together.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. It's month-to-month, billed monthly in advance. Cancel with 30 days' notice, or 60 days' notice on Momentum. No penalties.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep your data. On request, we export your call history, transcripts and customer details in a format you can use. The AI stops answering when the plan ends.",
  },
  {
    q: "What if I use more call minutes than my plan includes?",
    a: `Each plan includes a monthly allowance of AI call minutes (150 on Catch). Minutes beyond that are billed at $${OVERAGE_PER_MINUTE.toFixed(2)} per minute.`,
  },
  {
    q: "Is there a setup fee?",
    a: "No. You pay the monthly price and nothing upfront.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
              Start at $99. Add more as it&apos;s ready.
            </h1>
            <p className="text-grey text-base leading-relaxed mb-5">
              Catch answers the calls you miss, on the number you already have.
              Each plan above it adds a bigger job, and goes on sale when that
              part is built and working. No setup fees. Month-to-month.
            </p>
            <div className="border-l-4 border-gold bg-cream px-5 py-4">
              <p className="text-sm text-grey leading-relaxed">
                Want to talk it through first? Book a free consultation and
                we&apos;ll walk you through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing tiers ─────────────────────────────────────────────────── */}
      <section className="relative bg-cream overflow-hidden">
        <ParticleField id="particles-pricing-page" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICING_TIERS.map((tier, i) => (
              <FadeUp key={tier.id} delay={i * 80}>
                <div className="h-full hover:-translate-y-1.5 transition-transform duration-200">
                  <PricingCard tier={tier} />
                </div>
              </FadeUp>
            ))}
          </div>

          <p className="mt-6 text-sm text-grey">
            Need something built around your shop?{" "}
            <Link href={CUSTOM_BUILDS.href} className="text-gold font-semibold hover:text-navy transition-colors">
              See custom builds →
            </Link>
          </p>

          <FadeUp delay={240}>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white/65 backdrop-blur-sm p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
                  The fine print, up front
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs text-grey leading-relaxed">
                    <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-gold" />
                    Calls beyond your included minutes: ${OVERAGE_PER_MINUTE.toFixed(2)} per minute, on every plan.
                  </li>
                  {PRICING_TERMS.map((term) => (
                    <li key={term} className="flex items-start gap-2 text-xs text-grey leading-relaxed">
                      <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-gold" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/90 text-white p-6 flex flex-col">
                <p className="text-xs font-bold tracking-widest uppercase text-goldlight mb-3">
                  Talk to us first
                </p>
                <p className="text-sm font-semibold leading-relaxed mb-2">
                  A free 30-minute consultation. No commitment.
                </p>
                <p className="text-xs text-cream/70 leading-relaxed mb-5">
                  Tell us how your shop handles calls today. We&apos;ll call you within one
                  business day, show you what Catch would do on your number, and give you a
                  straight answer on whether it&apos;s worth $99 a month.
                </p>
                <Link
                  href={CTA.primary.href}
                  className="mt-auto self-start bg-gold hover:bg-goldlight text-white text-xs font-semibold px-5 py-3 transition-colors"
                >
                  {CTA.primary.label} →
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#ffffff" flip />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <FadeUp>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12 max-w-xl">
              Common questions.
            </h2>
          </FadeUp>

          <div className="max-w-2xl space-y-0">
            {FAQ.map((item, i) => (
              <FadeUp key={item.q} delay={i * 60}>
                <details className="group border-b border-gray-100 py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="text-sm font-semibold text-navy">{item.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 border border-gold text-gold flex items-center justify-center text-xs font-bold group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-grey leading-relaxed mt-4 max-w-xl">
                    {item.a}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#1A1A2E" />

      {/* ── Page CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-xl mx-auto">
              Find out how many calls you&apos;re missing.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-md mx-auto">
              Book a free 30-minute consultation. If Catch is a fit, we set it up on
              your current number. If it&apos;s not, you&apos;ve lost nothing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
                {CTA.primary.label} <ArrowRight size={16} className="ml-1" />
              </CTAButton>
              <CTAButton href={CTA.secondary.href} variant="secondary" className="text-base px-8 py-4">
                {CTA.secondary.label}
              </CTAButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
