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
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTAButton } from "@/components/ui/CTAButton";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { FadeUp } from "@/components/ui/FadeUp";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { ParticleField } from "@/components/ui/ParticleField";
import { TiltCard } from "@/components/ui/TiltCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_TIERS, CTA, DEMO_PHONE, TRIAL } from "@/lib/constants";

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
      <UseCasesSection />
      {DEMO_PHONE && <DemoLineSection demo={DEMO_PHONE} />}
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
    <section className="relative bg-navy text-white overflow-hidden">
      <ParticleField />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Staggered entrance — each child delayed 150ms */}
          <h1 className="hero-anim text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Never miss another call, booking, or follow-up again.
          </h1>
          <p
            className="hero-anim text-base sm:text-lg text-goldlight font-medium tracking-wide mb-10 max-w-2xl"
            style={{ animationDelay: "100ms" }}
          >
            Aureon Bridge builds you a tireless digital employee — one that answers calls, books appointments, and follows up with customers around the clock. Your team stops doing busywork and starts doing the work that actually pays.
          </p>
          <div
            className="hero-anim flex flex-wrap items-center gap-4 mb-10"
            style={{ animationDelay: "300ms" }}
          >
            <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
              {CTA.primary.label}
            </CTAButton>
            <Link
              href={CTA.secondary.href}
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors flex items-center gap-1.5"
            >
              {CTA.secondary.label} <ArrowRight size={15} />
            </Link>
          </div>
          <p
            className="hero-anim text-xs text-cream/40 tracking-wide"
            style={{ animationDelay: "420ms" }}
          >
            No credit card. No setup fees. Month-to-month.
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
      title: "No Customer Falls Through the Cracks",
      body: "Every call, text, and inquiry gets a reply and a follow-up, on time, automatically. Nothing gets missed because someone forgot to get back to them.",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Your Business Runs the Same Way Every Day",
      body: "Booking, reminders, and intake happen the same way whether you're in the shop or not. Set it up once, and it keeps working.",
    },
    {
      icon: <Users size={22} />,
      title: "Grow Without Hiring More People",
      body: "The busywork that used to eat up an employee's day now runs itself — so your people spend their time on the work that actually makes you money.",
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
            When you&apos;re under a car, on a roof or in a crawlspace, the phone
            keeps ringing. Answering it, chasing follow-ups and juggling
            reminders eats into the hours you&apos;d rather spend on paid work.
            Aureon Bridge takes that off your plate so you can focus on running
            the business.
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
      body: "We look at how your business actually runs today and find out where time and money are slipping away.",
    },
    {
      number: "02",
      title: "Map",
      body: "We figure out exactly which parts of your day-to-day should run automatically — and which shouldn't.",
    },
    {
      number: "03",
      title: "Build",
      body: "We build it around your business as it already runs. No ripping out what works, no starting over.",
    },
    {
      number: "04",
      title: "Run & Optimize",
      body: "It runs in the background. We keep an eye on it and fine-tune it as your business changes.",
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
            <span>See it working on your own calls.</span>
            <Link
              href={CTA.primary.href}
              className="text-gold font-semibold hover:text-goldlight transition-colors flex items-center gap-1"
            >
              {CTA.primary.label} <ArrowRight size={14} />
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
      body: "Checks in with customers after their visit, asks for reviews, and reaches back out to ones you haven't heard from in a while — set once, running in the background.",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Customer Communication",
      body: "Replies to customer questions and reviews for you — fast, consistent, and in your voice.",
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
              One system that does it all. Not five apps that don&apos;t talk to each other.
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

// ─── 5. Use cases ─────────────────────────────────────────────────────────────
function UseCasesSection() {
  const cases = [
    {
      trade: "Auto repair",
      body: "Answers \"is my car ready?\" and \"can you fit me in Thursday?\" while your techs stay under the hood, and books the appointment.",
    },
    {
      trade: "HVAC",
      body: "Picks up when the AC dies on the hottest day, captures the address and the problem, and flags no-heat or no-cool calls as urgent.",
    },
    {
      trade: "Plumbing",
      body: "Takes the burst-pipe call at 9 pm, gets the details you need to quote, and books the visit instead of sending it to voicemail.",
    },
    {
      trade: "Electrical",
      body: "Sorts emergencies from estimate requests, collects the job details you need, and keeps your schedule full without you on the phone.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>Who It&apos;s For</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4 max-w-2xl">
            Built for businesses that can&apos;t stop to answer the phone.
          </h2>
          <p className="text-grey text-base leading-relaxed mb-12 max-w-2xl">
            Any independent business that runs on calls and appointments. A few
            examples:
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <FadeUp key={c.trade} delay={i * 80}>
              <div className="border-l-4 border-gold bg-cream px-6 py-6 h-full">
                <h3 className="text-base font-bold text-navy mb-2">{c.trade}</h3>
                <p className="text-sm text-grey leading-relaxed">{c.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Demo line (shown only once DEMO_PHONE is set) ─────────────────────────
function DemoLineSection({ demo }: { demo: { display: string; href: string } }) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <FadeUp>
          <div className="bg-navy text-white px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-goldlight mb-2">
                Hear it for yourself
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Call our AI receptionist.
              </h2>
            </div>
            <a
              href={demo.href}
              className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight text-white text-lg font-semibold px-8 py-4 transition-colors self-start md:self-auto"
            >
              <Phone size={18} /> {demo.display}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── 7. Proof ─────────────────────────────────────────────────────────────────
// Case study placeholder: describe what was built, no numbers until real data exists.
function ProofSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <FadeUp>
          <SectionLabel>Case Study</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-10 max-w-2xl">
            Built for real operations, not demo environments.
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <CalloutBlock className="mb-6 max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
              Morgatech Auto Repair, Beltsville MD
            </p>
            <p className="text-sm text-grey leading-relaxed">
              Morgatech is our first auto repair client. Its calls are answered by
              the same AI receptionist you get on Catch, and we built the shop a
              website assistant that answers questions and books appointments,
              email follow-up and a dashboard that shows it all in one place.
            </p>
          </CalloutBlock>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="text-sm text-grey max-w-xl">
            The full case study, with results, is coming soon.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── 8. Pricing Anchor ────────────────────────────────────────────────────────
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
            Start with Catch at $99 a month. It answers the calls you miss, on
            the number you already have. The bigger plans go on sale as each one
            is ready. No setup fees, month-to-month. {TRIAL.headline}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier, i) => (
            <FadeUp key={tier.id} delay={i * 80}>
              <TiltCard className="relative h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                <PricingCard tier={tier} />
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. Final CTA ─────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
            Ready for your business to run itself?
          </h2>
          <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Try it free for {TRIAL.days} days, no credit card. Or book a free
            30-minute call and we&apos;ll show you exactly what we&apos;d build.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
              {CTA.primary.label} →
            </CTAButton>
            <CTAButton href={CTA.secondary.href} variant="secondary" className="text-base px-8 py-4">
              {CTA.secondary.label}
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
