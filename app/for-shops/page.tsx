import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, PhoneMissed, Wrench, DollarSign } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CalloutBlock } from "@/components/ui/CalloutBlock";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { ParticleField } from "@/components/ui/ParticleField";
import { CONTACT, CTA, TRIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Receptionist for Auto Repair Shops",
  description:
    "An AI receptionist for independent auto repair shops. Answers the calls you miss on your current number and emails you a summary. $99/month, free for 7 days.",
  robots: { index: true, follow: true },
};

// The 60-second version: three short columns a manager can read on a phone.
const SUMMARY = [
  {
    icon: <PhoneMissed size={22} />,
    title: "The problem",
    points: [
      "Calls come in while everyone's busy with customers or cars",
      "Most callers don't leave a voicemail",
      "They call the next shop instead",
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: "What I set up",
    points: [
      "An AI that answers only the calls you don't pick up",
      "Takes name, number, vehicle and what's wrong",
      "Emails you a summary and transcript after every call",
      "Keeps a callback list so nobody gets forgotten",
    ],
  },
  {
    icon: <DollarSign size={22} />,
    title: "What it costs",
    points: [
      "$99 a month. No setup fee",
      `Free for ${TRIAL.days} days, no credit card`,
      "Keeps your number and your phones",
      "Month-to-month, 30 days' notice to cancel",
    ],
  },
];

export default function ForShopsPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white overflow-hidden">
        <ParticleField />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
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
              I set up an AI receptionist for auto repair shops. When nobody can
              get to the phone, it answers on your current number, takes the
              customer&apos;s details and emails you a summary. It&apos;s $99 a
              month, and you can try it free for a week.
            </p>
            <a
              href="#the-short-version"
              className="hero-anim inline-flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-cream transition-colors"
              style={{ animationDelay: "280ms" }}
            >
              See the 60-second version <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#1A1A2E" to="#ffffff" />

      {/* ── Section 2: The 60-second version ─────────────────────────────── */}
      <section id="the-short-version" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>The 60-Second Version</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight mb-10 max-w-xl">
              Your phones stay the same. The missed calls stop getting lost.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SUMMARY.map((col, i) => (
              <FadeUp key={col.title} delay={i * 80}>
                <div className="border-l-4 border-gold bg-cream px-6 py-6 h-full">
                  <div className="text-gold mb-3">{col.icon}</div>
                  <h3 className="text-base font-bold text-navy mb-3">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-sm text-grey leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={240}>
            <p className="text-sm text-grey max-w-2xl">
              Setup takes about 20 minutes. We turn on forwarding for unanswered
              calls and make a test call together. To stop it, switch the
              forwarding back.
            </p>
          </FadeUp>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#FAF7F0" flip />

      {/* ── Section 3: One proof point ───────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel>In Practice</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight mb-8 max-w-xl">
              Already running at a shop like yours.
            </h2>
          </FadeUp>

          <FadeUp delay={80}>
            <CalloutBlock className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">
                Morgatech Auto Repair, Beltsville MD
              </p>
              <p className="text-sm text-grey leading-relaxed">
                Morgatech is our first auto repair client. The AI answers the
                calls the shop can&apos;t get to, and we built the shop a website
                assistant that books appointments, email follow-up, Google Ads
                and a dashboard that shows it all in one place.
              </p>
            </CalloutBlock>
          </FadeUp>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#1A1A2E" flip />

      {/* ── Section 4: Single CTA ────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <FadeUp>
            <SectionLabel light>Next Step</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 max-w-xl">
              Ready to show your owner?
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-10 max-w-xl">
              Start the free {TRIAL.days}-day trial on your shop&apos;s number, or
              book a call and we&apos;ll walk through it together.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={CTA.primary.href}
                className="inline-flex items-center gap-2 bg-gold hover:bg-goldlight text-white text-sm font-semibold px-8 py-4 transition-colors"
              >
                {CTA.primary.label} →
              </Link>
              <a
                href={CONTACT.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white text-sm font-semibold px-8 py-4 transition-colors"
              >
                Book a call →
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-8 text-xs text-cream/40 max-w-md">
              Or call me directly at{" "}
              <a href={CONTACT.phoneHref} className="text-cream/60 hover:text-cream underline">
                {CONTACT.phoneDisplay}
              </a>
              . Month-to-month, and you keep your data no matter what.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
