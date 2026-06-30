import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  MessageSquare,
  BarChart3,
  BellOff,
  LayoutGrid,
  Users,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { FadeUp } from "@/components/ui/FadeUp";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { ParticleField } from "@/components/ui/ParticleField";
import { TiltCard } from "@/components/ui/TiltCard";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aureon Bridge — AI Automation for Independent Businesses",
  description:
    "Aureon Bridge builds custom AI automation systems for independent businesses. Booking, follow-up, reviews, and reporting — integrated and automated.",
  openGraph: {
    title: "Aureon Bridge — Bridge the Gap. Automate the Rest.",
    description:
      "Custom AI automation for businesses that want to run leaner without hiring more people.",
  },
};

// ─── Homepage ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DiagonalDivider from="#1A1A2E" to="#FAF7F0" />
      <ProblemSection />
      <DiagonalDivider from="#FAF7F0" to="#ffffff" flip />
      <HowItWorksSection />
      <DiagonalDivider from="#ffffff" to="#FAF7F0" />
      <ServicesSection />
      <DiagonalDivider from="#FAF7F0" to="#ffffff" flip />
      {/* <ProofSection /> — hidden until Morgatech quote is confirmed */}
      <DiagonalDivider from="#ffffff" to="#FAF7F0" />
      <PricingSection />
      <DiagonalDivider from="#FAF7F0" to="#1A1A2E" flip />
      <FinalCTASection />
    </>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <ParticleField />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Staggered entrance — each child delayed 150ms */}
          <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            We automate. You scale.
          </h1>
          <p
            className="hero-anim text-base sm:text-lg text-goldlight font-medium tracking-wide mb-10 max-w-2xl"
            style={{ animationDelay: "100ms" }}
          >
            One system. Booking, follow-up, and customer communication — all connected, all automated.
          </p>
          <div
            className="hero-anim flex flex-wrap items-center gap-4 mb-10"
            style={{ animationDelay: "300ms" }}
          >
            <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Book a Free Consultation
            </CTAButton>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors flex items-center gap-1.5"
            >
              See How It Works <ArrowRight size={15} />
            </a>
          </div>
          <p
            className="hero-anim text-xs text-cream/40 tracking-wide"
            style={{ animationDelay: "420ms" }}
          >
            Working with businesses in the DMV.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 2. The Problem ───────────────────────────────────────────────────────────
function ProblemSection() {
  const pains = [
    {
      icon: <BellOff size={22} />,
      title: "Every Lead Followed Up",
      body: "Automated follow-up sequences that reach every customer on time, every time. No job lost to a message that slipped through.",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Internal Ops on Autopilot",
      body: "Intake, onboarding, and daily task workflows — standardized and automated so your team runs consistently, whether you're there or not. Train once. Run forever.",
    },
    {
      icon: <Users size={22} />,
      title: "Scale Without Adding Headcount",
      body: "Let automation handle the work your team shouldn't be doing. Your people focus on what moves the business — not on keeping up with admin.",
    },
  ];

  return (
    <section className="relative bg-cream overflow-hidden">
      <ParticleField id="particles-reality" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6 max-w-2xl">
            Every growing business hits the same ceiling.
          </h2>
          <p className="text-grey text-base leading-relaxed mb-14 max-w-2xl">
            62% of small business calls go unanswered — and 85% of those callers
            never try back. Meanwhile, the average owner loses 24 working days a
            year just to admin overhead. At Aureon Bridge, we say automate the
            admin so you can focus on scaling your business.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <FadeUp key={pain.title} delay={i * 100}>
              <div className="bg-white/65 backdrop-blur-sm border-l-4 border-gold pl-6 pr-6 py-7 h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="text-gold mb-4">{pain.icon}</div>
                <h3 className="text-base font-bold text-navy mb-3">{pain.title}</h3>
                <p className="text-sm text-grey leading-relaxed">{pain.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. How It Works ──────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Audit",
      body: "We map your tools, your gaps, and where your time actually goes.",
    },
    {
      number: "02",
      title: "Map",
      body: "We identify exactly which automations will move the needle for your operation.",
    },
    {
      number: "03",
      title: "Build",
      body: "We build and integrate your automation stack around how you actually run.",
    },
    {
      number: "04",
      title: "Run & Optimize",
      body: "We manage, monitor, and improve your system on an ongoing basis.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-3 max-w-2xl">
            How we get you past the ceiling.
          </h2>
          <p className="text-grey text-base mb-14">
            Four steps. No guesswork. A system that works.
          </p>
        </FadeUp>

        <div className="relative max-w-lg">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-5 bottom-5 w-px bg-gold/30"
          />

          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 80}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                {/* Number circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-white text-sm font-bold flex items-center justify-center z-10 ring-4 ring-white">
                  {i + 1}
                </div>
                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="text-base font-bold text-navy mb-1.5">{step.title}</h3>
                  <p className="text-sm text-grey leading-relaxed">{step.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400} className="mt-12">
          <div className="flex items-center gap-2 text-sm text-grey">
            <span>Start with a free audit.</span>
            <Link
              href="/contact"
              className="text-gold font-semibold hover:text-goldlight transition-colors flex items-center gap-1"
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── 4. Services Preview ──────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      icon: <CalendarCheck size={22} />,
      title: "Booking Automation",
      body: "Handles inbound requests, confirms appointments, and sends reminders — no manual touchpoints required.",
    },
    {
      icon: <Mail size={22} />,
      title: "Automated Follow-Up",
      body: "Email sequences that nurture customers post-visit, request reviews, and re-engage lapsed clients — set once, running in the background.",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Customer Communication",
      body: "AI-assisted responses to customer inquiries and reviews — fast, consistent, and on-brand.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Reporting & Visibility",
      body: "One dashboard. Booking rate, follow-up performance, review scores, and revenue trends — all in real time.",
    },
    {
      icon: <Phone size={22} />,
      title: "AI Phone Receptionist",
      body: "Answers calls, qualifies leads, and books appointments automatically — so no call goes unanswered.",
    },
  ];

  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>What We Build</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight max-w-xl">
              One integrated system. Not five separate subscriptions.
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-gold hover:text-goldlight transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              See all services <ArrowRight size={14} />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.title} delay={i * 80}>
              <TiltCard className="h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white p-7 h-full">
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="text-base font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-grey leading-relaxed">{service.body}</p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Proof ─────────────────────────────────────────────────────────────────
function ProofSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>Proof</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-12 max-w-2xl">
            Built for real operations, not demo environments.
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <CalloutBlock className="mb-8 max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
              Morgatech Auto Repair — DMV Area
            </p>
            <h3 className="text-base font-bold text-navy mb-3">
              What we built for Morgatech Auto Repair
            </h3>
            <p className="text-sm text-grey leading-relaxed">
              We built Morgatech Auto Repair a full automation stack from the
              ground up: AI-powered booking intake, Google Ads campaign
              management, social media content automation, email follow-up
              sequences, and a real-time operational dashboard. Every tool
              connected. Nothing requiring manual handoff between systems.
            </p>
          </CalloutBlock>
        </FadeUp>

        <FadeUp delay={200}>
          {/* Owner quote placeholder */}
          <div className="border border-dashed border-gold/40 bg-gold/5 p-5 max-w-2xl mb-12">
            <p className="text-xs font-bold tracking-wider uppercase text-gold/70 mb-2">
              Placeholder — Owner Quote Needed Before Launch
            </p>
            <p className="text-sm text-grey/70 italic">
              Ask Edwin&apos;s dad for one sentence. Even casual. &ldquo;Before
              this, I was spending X hours on...&rdquo; This placeholder will be
              replaced before the site goes live.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={300}>
          <p className="text-sm text-grey max-w-xl">
            We&apos;re actively onboarding pilot clients in the DMV. If you want
            to see what this looks like for your operation,{" "}
            <Link
              href="/contact"
              className="text-gold font-semibold hover:text-goldlight transition-colors"
            >
              book a free audit →
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── 6. Pricing Anchor ────────────────────────────────────────────────────────
function PricingSection() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <ParticleField id="particles-pricing" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>Pricing</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight max-w-xl">
              Affordable automation. No enterprise pricing.
            </h2>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-gold hover:text-goldlight transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              See full pricing <ArrowRight size={14} />
            </Link>
          </div>
          <p className="text-grey text-base leading-relaxed mb-12 max-w-2xl">
            A one-time setup fee to build your system. A monthly retainer to
            run and optimize it. Simple service agreement — easy to exit if
            it&apos;s ever not working for you.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier, i) => (
            <FadeUp key={tier.id} delay={i * 80}>
              <TiltCard
                className={cn(
                  "relative h-full",
                  tier.highlighted
                    ? "bg-navy/75 text-white backdrop-blur-sm"
                    : "bg-white/65 shadow-sm hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm"
                )}
              >
              <div className="p-7 h-full">
                {tier.highlighted && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-sm font-bold mb-1 ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </p>
                <div className="mb-1">
                  <span
                    className={`text-3xl font-bold ${
                      tier.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    ${tier.monthly.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      tier.highlighted ? "text-cream/70" : "text-grey"
                    }`}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    tier.highlighted ? "text-cream/70" : "text-grey"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-7">
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
                <Link
                  href="/contact"
                  className={`block text-center text-xs font-semibold px-4 py-2.5 transition-colors ${
                    tier.highlighted
                      ? "bg-gold hover:bg-goldlight text-white"
                      : "border border-gold text-gold hover:bg-gold hover:text-white"
                  }`}
                >
                  Get started →
                </Link>
              </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Final CTA ─────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
            Ready to automate and scale?
          </h2>
          <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            A 30-minute call. We&apos;ll map your operation and show you exactly
            what we&apos;d build — no commitment required.
          </p>
          <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
            Book a Free Consultation →
          </CTAButton>
        </FadeUp>
      </div>
    </section>
  );
}
