import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  PhoneMissed,
  UserRound,
  Moon,
  ListChecks,
  Smartphone,
  BellRing,
  Megaphone,
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
import { PRICING_TIERS, CTA, DEMO_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aureon Bridge | AI Receptionist for Auto Repair Shops",
  description:
    "Catch answers the calls your shop misses, on the number you already have. The AI takes the customer's name, number, vehicle and reason and emails you a summary. $99/month, no setup fees.",
  openGraph: {
    title: "Aureon Bridge | Never lose a missed call",
    description:
      "An AI receptionist for independent auto repair shops. Answers the calls you can't, on your current number. $99/month.",
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
            Your phone rings while you&apos;re under a car. We answer it.
          </h1>
          <p
            className="hero-anim text-base sm:text-lg text-goldlight font-medium tracking-wide mb-10 max-w-2xl"
            style={{ animationDelay: "100ms" }}
          >
            Catch puts an AI receptionist on the shop number you already have.
            When nobody can pick up, it answers, takes the customer&apos;s name,
            number, vehicle and what&apos;s wrong, and emails you the summary.
            $99 a month.
          </p>
          <div
            className="hero-anim flex flex-wrap items-center gap-4 mb-10"
            style={{ animationDelay: "300ms" }}
          >
            <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
              {CTA.primary.label}
            </CTAButton>
            <a
              href={CTA.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors flex items-center gap-1.5"
            >
              {CTA.secondary.label} <ArrowRight size={15} />
            </a>
          </div>
          <p
            className="hero-anim text-xs text-cream/40 tracking-wide"
            style={{ animationDelay: "420ms" }}
          >
            Keeps your number. No setup fees. Month-to-month.
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
      icon: <PhoneMissed size={22} />,
      title: "A missed call goes to the next shop",
      body: "Most people don't leave a voicemail. They go back to Google and call the next shop on the list, and that job is gone.",
    },
    {
      icon: <UserRound size={22} />,
      title: "Your advisor can't be in three places",
      body: "Someone's at the counter, a tech needs an answer, and the phone rings again. Something gets dropped, and it's usually the phone.",
    },
    {
      icon: <Moon size={22} />,
      title: "After hours, the phone just rings",
      body: "Evenings and weekends are when people notice the noise or the warning light. If nobody answers, they book with whoever does.",
    },
  ];

  return (
    <section className="relative bg-cream overflow-hidden">
      <ParticleField id="particles-reality" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6 max-w-2xl">
            Up to 1 in 5 calls to auto shops go unanswered.
          </h2>
          <p className="text-grey text-base leading-relaxed mb-14 max-w-2xl">
            That&apos;s from call-tracking data across auto service businesses
            (Marchex). At a busy independent shop it&apos;s easy to see why: the
            people who could answer the phone are the same people doing the work.
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
      title: "We set it up at your counter",
      body: "About 20 minutes. We turn on forwarding for the calls you don't answer, so your number and your phones stay the same.",
    },
    {
      number: "02",
      title: "The AI answers what you can't",
      body: "When a call isn't picked up, the AI answers, takes the caller's name, number, vehicle and reason, and tells them the shop will call back.",
    },
    {
      number: "03",
      title: "You get the summary",
      body: "A summary and the full transcript land in your inbox after every call, and the caller goes on your callback list.",
    },
    {
      number: "04",
      title: "You call them back",
      body: "Work through the list when you have a minute. Each month you see how many calls the AI caught that would have gone to voicemail.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-3 max-w-2xl">
            Nothing changes at your shop, except the calls stop getting lost.
          </h2>
          <p className="text-grey text-base mb-14">
            Turn it off any time by switching your forwarding back.
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
            <span>Want to know what it would catch at your shop?</span>
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

// ─── 4. What you get ──────────────────────────────────────────────────────────
// "plan" names the cheapest plan that includes it; coming-soon items are marked as such.
function ServicesSection() {
  const services = [
    {
      icon: <Phone size={22} />,
      title: "AI Phone Receptionist",
      body: "Answers the calls your shop misses, day or night, on the number you already have.",
      plan: "Catch",
      soon: false,
    },
    {
      icon: <Mail size={22} />,
      title: "Call Summaries & Transcripts",
      body: "Who called, their number, their vehicle and what they need, in your inbox after every call.",
      plan: "Catch",
      soon: false,
    },
    {
      icon: <ListChecks size={22} />,
      title: "Callback List",
      body: "Everyone waiting to hear back, in one list, so nobody slips through between jobs.",
      plan: "Catch",
      soon: false,
    },
    {
      icon: <Smartphone size={22} />,
      title: "Aureon Phone App",
      body: "Your business line rings on your cell. Answer from anywhere and call back from the shop number.",
      plan: "Presence",
      soon: true,
    },
    {
      icon: <BellRing size={22} />,
      title: "Reminders & Reviews",
      body: "Service reminders and review requests that go out on their own. You approve with one tap.",
      plan: "Pipeline",
      soon: true,
    },
    {
      icon: <Megaphone size={22} />,
      title: "Hands-On Marketing",
      body: "Google Ads, campaigns and personal follow-up on price shoppers, done for you.",
      plan: "Momentum",
      soon: true,
    },
  ];

  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>What You Get</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight max-w-xl">
              Start with the calls. Add more when it&apos;s ready.
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
                  <p className="text-sm text-grey leading-relaxed mb-4">{service.body}</p>
                  <p
                    className={`text-[10px] font-semibold tracking-wider uppercase ${
                      service.soon ? "text-grey/70" : "text-gold"
                    }`}
                  >
                    {service.soon ? `${service.plan} · coming soon` : `Included in ${service.plan}`}
                  </p>
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
      trade: "The lunch rush",
      body: "Customers call on their own lunch break, right when your counter is busiest. The AI takes the calls nobody can get to.",
    },
    {
      trade: "Under the car",
      body: "\"Is my car ready?\" and \"Can you fit me in Thursday?\" get answered and written down while your techs stay on the job.",
    },
    {
      trade: "After closing",
      body: "The check-engine light comes on at 7 pm. Instead of voicemail, the caller gets an answer and you get their details in the morning.",
    },
    {
      trade: "Saturdays",
      body: "Short-staffed or closed, the phone still gets answered, and Monday starts with a list of people to call back.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeUp>
          <SectionLabel>When It Helps</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4 max-w-2xl">
            Built for shops that can&apos;t stop to answer the phone.
          </h2>
          <p className="text-grey text-base leading-relaxed mb-12 max-w-2xl">
            Independent auto repair shops, from one bay to ten. The moments
            calls get missed most:
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
              $99 a month to stop losing calls.
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
            is ready. No setup fees, month-to-month.
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
            Stop sending customers to voicemail.
          </h2>
          <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free 30-minute consultation. We&apos;ll look at how your shop
            handles calls today and show you what Catch would pick up.
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
