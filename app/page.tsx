import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  MessageSquare,
  BarChart3,
  GitMerge,
  BellOff,
  LayoutGrid,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { FadeUp } from "@/components/ui/FadeUp";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { PRICING_TIERS } from "@/lib/constants";

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
      <ProofSection />
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
    <section className="bg-navy text-white dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Staggered entrance — each child delayed 150ms */}
          <h1
            className="hero-anim text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ animationDelay: "0ms" }}
          >
            Your admin process is bleeding your profits.
          </h1>
          <p
            className="hero-anim text-lg sm:text-xl text-cream/80 leading-relaxed mb-10 max-w-2xl"
            style={{ animationDelay: "150ms" }}
          >
            Aureon Bridge builds custom AI automation systems that handle
            booking, follow-up, and customer communication — so your team stops
            doing admin and starts doing the work that actually pays.
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
      title: "Missed Follow-Ups",
      body: "Customers who called and never heard back. Estimates that sat in someone's inbox. Reviews you meant to respond to. Every gap costs you a job.",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Fragmented Systems",
      body: "Your booking tool doesn't talk to your CRM. Your CRM doesn't talk to your review platform. You're paying for tools that make you work harder, not smarter.",
    },
    {
      icon: <Users size={22} />,
      title: "Hiring to Patch the Problem",
      body: "Bringing on admin staff to manage what software should handle automatically. Good people spending time on work that shouldn't require a person.",
    },
  ];

  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6 max-w-2xl">
            You&apos;re running a great operation. Your tools aren&apos;t.
          </h2>
          <p className="text-grey text-base leading-relaxed mb-14 max-w-2xl">
            Most independent business owners are managing four to seven separate
            tools that don&apos;t communicate with each other. A booking system here,
            a follow-up spreadsheet there, a review platform somewhere else.
            Every gap between those tools is time your team spends on admin
            instead of actual work. That&apos;s margin walking out the door.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <FadeUp key={pain.title} delay={i * 100}>
              <div className="bg-white border-l-4 border-gold pl-6 pr-6 py-7 h-full hover:-translate-y-1 transition-transform duration-200">
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
      body: "We spend 60–90 minutes understanding your operation: the tools you use, the gaps you've noticed, and where time disappears. No assumptions, no generic recommendations.",
    },
    {
      number: "02",
      title: "Map",
      body: "We identify which automations will deliver the most impact for your specific setup — not a cookie-cutter package, a custom solution built around how you actually run.",
    },
    {
      number: "03",
      title: "Build",
      body: "We build your automation stack and integrate it with your existing tools. You get a system that works the way your business works — not the other way around.",
    },
    {
      number: "04",
      title: "Run",
      body: "We manage and monitor your automations on an ongoing basis. When something breaks or needs updating, we handle it. You don't have to think about it.",
    },
    {
      number: "05",
      title: "Optimize",
      body: "Monthly reviews to measure what's working, refine what isn't, and expand your automation coverage as your business grows.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-3 max-w-2xl">
            We bridge the gap between your operation and what AI can actually do
            for it.
          </h2>
          <p className="text-grey text-base mb-14">
            Five steps. No guesswork. A system that works.
          </p>
        </FadeUp>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 80}>
              {/* overflow-hidden keeps the decorative number from breaking layout */}
              <div className="relative flex gap-8 py-9 border-b border-gray-100 last:border-b-0 overflow-hidden">
                {/* Decorative large background number */}
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[160px] font-black leading-none select-none pointer-events-none text-navy/[0.04]"
                >
                  {step.number}
                </span>

                {/* Step number (visible) */}
                <div className="flex-shrink-0 w-10">
                  <span className="text-2xl font-bold text-gold">{step.number}</span>
                </div>

                {/* Step content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-grey leading-relaxed max-w-2xl">{step.body}</p>
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
      body: "AI-powered scheduling that handles inbound requests, confirms appointments, and sends reminders — without a single manual touchpoint.",
    },
    {
      icon: <Mail size={22} />,
      title: "Automated Follow-Up",
      body: "Email and SMS sequences that nurture customers post-visit, request reviews, and re-engage lapsed clients on a schedule you set once and forget.",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Customer Communication",
      body: "AI-assisted responses to inquiries and reviews, plus a conversational booking intake that feels human even when it's not.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Reporting & Visibility",
      body: "A single dashboard showing your booking rate, follow-up performance, review scores, and revenue trends — updated in real time.",
    },
    {
      icon: <GitMerge size={22} />,
      title: "CRM Integration",
      body: "Your customer data in one place, connected to every other tool we build. No more copying and pasting between systems.",
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
              <div className="bg-white p-7 h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-base font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-grey leading-relaxed">{service.body}</p>
              </div>
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
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
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
              <div
                className={
                  tier.highlighted
                    ? "bg-navy text-white p-7 relative h-full hover:-translate-y-1.5 transition-transform duration-200"
                    : "bg-white p-7 relative h-full hover:-translate-y-1.5 transition-transform duration-200"
                }
              >
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
                  className={`text-xs mb-5 ${
                    tier.highlighted ? "text-goldlight" : "text-gold"
                  }`}
                >
                  ${tier.setupFee.toLocaleString()} setup
                </p>
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
            Ready to bridge the gap?
          </h2>
          <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free 45-minute consultation. We&apos;ll audit your operation,
            identify where AI can make the biggest difference, and give you a
            custom proposal — no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Book Your Free Consultation →
            </CTAButton>
            <Link
              href="/services"
              className="text-sm text-cream/50 hover:text-cream/80 transition-colors"
            >
              See how it works →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
