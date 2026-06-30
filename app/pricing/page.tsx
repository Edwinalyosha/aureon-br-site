import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { PRICING_TIERS } from "@/lib/constants";
import { ParticleField } from "@/components/ui/ParticleField";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for custom AI automation. Plans from $300/month. No setup fees. Simple service agreement with easy exit.",
};

const FAQ = [
  {
    q: "What happens if I cancel?",
    a: "You keep your data. Always. If you cancel, we export everything — customer records, campaign history, booking data — and hand it over in a format you can use. The automations are built on tools that would need to be maintained or rebuilt elsewhere, but your data is yours from day one.",
  },
  {
    q: "Is there a long-term contract?",
    a: "We use a simple service agreement. It's easy to exit — 30 days written notice is all we need for Starter tiers; 60 days for Enterprise. No penalties, no long-term lock-in.",
  },
  {
    q: "How long does setup take?",
    a: "Setup takes between 3 and 14 working days depending on the scope of your system and how quickly we can access your existing tools. We scope it before we start so you know exactly what to expect.",
  },
  {
    q: "Do you work with the software I'm already using?",
    a: "Usually, yes. We've built around the most common booking platforms and business management tools. If you're using something niche, we'll tell you in the consultation whether we can integrate it cleanly.",
  },
  {
    q: "What exactly is the setup fee?",
    a: "It's a fixed, one-time fee based on scope. We give you the exact number during your consultation — before you sign anything. No hourly billing, no scope creep without your approval.",
  },
  {
    q: "Can I upgrade my tier later?",
    a: "Yes. Most clients start at Starter or Starter Complete and move up once they see what's possible. Upgrading means we expand your automation coverage and adjust the monthly retainer. No full rebuild required.",
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
              Transparent pricing. No surprises.
            </h1>
            <p className="text-grey text-base leading-relaxed mb-5">
              A monthly retainer. No setup fees. Pick the tier that matches
              where your operation is today — upgrade when you&apos;re ready for more.
            </p>
            <div className="border-l-4 border-gold bg-cream px-5 py-4">
              <p className="text-sm text-grey leading-relaxed">
                Not sure which tier fits? Book a free consultation and
                we&apos;ll scope it for you — no commitment required.
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
                <div
                  className={`relative p-7 h-full flex flex-col hover:-translate-y-1.5 transition-transform duration-200 backdrop-blur-sm ${
                    tier.highlighted ? "bg-navy/75 text-white" : "bg-white/65"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-auto">
                    <p
                      className={`text-sm font-bold mb-0.5 ${
                        tier.highlighted ? "text-white" : "text-navy"
                      }`}
                    >
                      {tier.name}
                    </p>
                    <p className={`text-xs mb-3 ${tier.highlighted ? "text-cream/60" : "text-grey/70"}`}>
                      {tier.tagline}
                    </p>
                    <div className="mb-1">
                      <span className={`text-xs line-through ${tier.highlighted ? "text-cream/50" : "text-grey/50"}`}>
                        ${tier.regularPrice.toLocaleString()}/mo
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span
                        className={`text-3xl font-bold ${
                          tier.highlighted ? "text-white" : "text-navy"
                        }`}
                      >
                        ${tier.monthly.toLocaleString()}
                      </span>
                      <span
                        className={`text-sm ${
                          tier.highlighted ? "text-cream/70" : "text-grey"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                    <p className={`text-[10px] font-semibold tracking-wider uppercase mb-4 ${tier.highlighted ? "text-goldlight" : "text-gold"}`}>
                      Launch price
                    </p>
                    <p
                      className={`text-xs leading-relaxed mb-6 ${
                        tier.highlighted ? "text-cream/70" : "text-grey"
                      }`}
                    >
                      {tier.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2
                            size={13}
                            className={`flex-shrink-0 mt-0.5 ${
                              tier.highlighted ? "text-goldlight" : "text-gold"
                            }`}
                          />
                          <span
                            className={`text-xs leading-relaxed ${
                              tier.highlighted ? "text-cream/80" : "text-grey"
                            }`}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center text-xs font-semibold px-4 py-3 transition-colors mt-auto ${
                      tier.highlighted
                        ? "bg-gold hover:bg-goldlight text-white"
                        : "border border-gold text-gold hover:bg-gold hover:text-white"
                    }`}
                  >
                    Get started →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
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
              Not sure which tier fits?
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-md mx-auto">
              Start with a free consultation. We&apos;ll scope your system and
              recommend the tier that makes sense — not the most expensive one,
              the right one.
            </p>
            <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Book a Free Consultation <ArrowRight size={16} className="ml-1" />
            </CTAButton>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
