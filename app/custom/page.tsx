import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Phone, Workflow, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ParticleField } from "@/components/ui/ParticleField";
import { CTAButton } from "@/components/ui/CTAButton";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { CTA, CUSTOM_BUILDS } from "@/lib/constants";

const buildFrom = `$${CUSTOM_BUILDS.buildFrom.toLocaleString("en-US")}`;
const careFrom = `$${CUSTOM_BUILDS.careFrom}`;

export const metadata: Metadata = {
  title: "Custom AI Builds",
  description: `Website assistants, voice agents and automations built around how your shop already works. Fixed price, builds from ${buildFrom}, care plans from ${careFrom}/month.`,
};

const BUILDS = [
  {
    icon: <MessageSquare size={26} />,
    title: "Website assistants",
    body: "An assistant on your website that answers customer questions, explains common jobs and books appointments.",
  },
  {
    icon: <Phone size={26} />,
    title: "Voice agents",
    body: "An AI that handles specific kinds of calls: repair status updates, new-customer intake, after-hours requests.",
  },
  {
    icon: <Workflow size={26} />,
    title: "Automations",
    body: "Information moves between your shop system, email, calendar and spreadsheets on its own, so nobody types the same thing twice.",
  },
];

const STEPS = [
  {
    title: "Free 30-minute call",
    body: "You show us the task that's eating your time. We tell you honestly whether it's worth automating.",
  },
  {
    title: "Fixed-price quote",
    body: "You get one price in writing before any work starts. It holds unless the job itself changes.",
  },
  {
    title: `Build, usually ${CUSTOM_BUILDS.typicalWeeks} weeks`,
    body: "You see it working and try it yourself before it goes live with customers.",
  },
  {
    title: "Optional care plan",
    body: "We host it, manage its security and updates, and watch that it keeps running, so you never have to think about it.",
  },
];

export default function CustomBuildsPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white overflow-hidden">
        <ParticleField id="particles-custom" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <SectionLabel light>Custom AI Builds</SectionLabel>
            <h1
              className="hero-anim text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ animationDelay: "0ms" }}
            >
              AI that fits how your business already works.
            </h1>
            <p
              className="hero-anim text-base sm:text-lg text-cream/80 leading-relaxed mb-8"
              style={{ animationDelay: "150ms" }}
            >
              Catch answers your phone. Some businesses need more: an assistant
              on your website, a voice agent that knows your services, or
              automations that move information between the tools you already
              use. We build them around your shop, at a fixed price.
            </p>
            <div className="hero-anim" style={{ animationDelay: "250ms" }}>
              <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
                Book a free call <ArrowRight size={16} className="ml-1" />
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#1A1A2E" to="#ffffff" />

      {/* ── Who it's for + what we build ──────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <FadeUp>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 max-w-xl">
              If you do it by hand every day, it can probably be automated.
            </h2>
            <p className="text-grey text-base leading-relaxed mb-12 max-w-2xl">
              For independent businesses, auto repair shops first. Every build
              starts from a job your team already does, not from a template.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BUILDS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 80}>
                <div className="border-t-2 border-gold pt-7 h-full">
                  <div className="text-gold mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold text-navy mb-2">{b.title}</h3>
                  <p className="text-sm text-grey leading-relaxed">{b.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#FAF7F0" />

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <FadeUp>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12 max-w-xl">
              You know the price before we start.
            </h2>
          </FadeUp>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <FadeUp key={step.title} delay={i * 80}>
                <li className="bg-white p-6 h-full border-l-4 border-gold">
                  <p className="text-3xl font-bold text-gold mb-3">{i + 1}</p>
                  <p className="text-sm font-bold text-navy mb-2">{step.title}</p>
                  <p className="text-xs text-grey leading-relaxed">{step.body}</p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#ffffff" flip />

      {/* ── Pricing + proof ───────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeUp>
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                Builds from {buildFrom}.
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-grey leading-relaxed">
                    <span className="font-semibold text-navy">Build:</span> from {buildFrom}, one fixed price, quoted after the free call.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm text-grey leading-relaxed">
                    <span className="font-semibold text-navy">Care plan:</span> from {careFrom}/month, optional. Hosting, security management, updates and monitoring.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-grey leading-relaxed">
                Only need your missed calls answered?{" "}
                <Link href="/pricing" className="text-gold font-semibold hover:text-navy transition-colors">
                  Catch does that for $99/month →
                </Link>
              </p>
            </FadeUp>

            {/* Only facts already published on the homepage. Edwin to supply the problem,
                results and any quote before this grows into a full case study. */}
            <FadeUp delay={100}>
              <SectionLabel>Built So Far</SectionLabel>
              <CalloutBlock>
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
                  Running live at a Maryland independent shop
                </p>
                <p className="text-sm text-grey leading-relaxed">
                  For our first auto repair client, we built a website assistant
                  that answers customer questions and books appointments.
                </p>
              </CalloutBlock>
            </FadeUp>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#1A1A2E" />

      {/* ── Page CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl mx-auto">
              Show us the task. We&apos;ll tell you what it takes.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              A free 30-minute call. You walk away with a fixed price, or an
              honest answer that it isn&apos;t worth building.
            </p>
            <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
              Book a free call <ArrowRight size={16} className="ml-1" />
            </CTAButton>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
