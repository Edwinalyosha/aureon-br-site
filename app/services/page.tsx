import type { Metadata } from "next";
import {
  Phone,
  BarChart3,
  Smartphone,
  CalendarCheck,
  BellRing,
  Star,
  Mail,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ParticleField } from "@/components/ui/ParticleField";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";
import { CTA, TRIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "An AI receptionist for auto repair shops that answers your missed calls on your current number, from $99/month. Coming next: the Aureon Phone app, service reminders, reviews and marketing done for you.",
};

// Ordered by plan. "tier" names the cheapest plan that includes the service; only Catch is on sale today.
const SERVICES = [
  {
    icon: <Phone size={26} />,
    tag: "NEVER MISS A CALL",
    title: "AI Voice Receptionist",
    headline: "The calls you can't get to still get answered.",
    body: [
      "When everyone's busy with a customer or under a car, the phone rings out. Most callers don't leave a voicemail. They call the next shop.",
      "The AI answers only the calls you don't pick up, on the number you already have. It takes the caller's name, number, vehicle and reason, tells them the shop will call back, and emails you a summary.",
    ],
    gets: [
      "Missed and after-hours calls answered, day or night",
      "Works through call forwarding, so your number and phones stay the same",
      "Summary and full transcript emailed after every call",
      "A callback list of everyone waiting to hear back",
    ],
    tier: "All plans, from Catch",
  },
  {
    icon: <BarChart3 size={26} />,
    tag: "REPORTING",
    title: "Monthly Missed-Call Report",
    headline: "See what the AI caught for you.",
    body: [
      "Once a month you get a short report: how many calls the AI answered, what callers wanted, and who's still waiting for a call back.",
      "It's the simplest way to see whether the phone is costing you work, without digging through anything.",
    ],
    gets: [
      "Calls answered by the AI that month",
      "What people were calling about",
      "Callbacks still open",
    ],
    tier: "All plans, from Catch",
  },
  {
    icon: <Smartphone size={26} />,
    tag: "YOUR BUSINESS PHONE",
    title: "Aureon Phone App",
    headline: "Your business line, on your cell.",
    body: [
      "The shop's line rings in the Aureon Phone app like a normal call, even when your phone is locked. If you don't pick up, the AI does.",
      "Call customers back from the business number instead of your personal cell, and see your calls and the AI's in one history.",
    ],
    gets: [
      "The business line rings on your phone, wherever you are",
      "Unanswered calls go to the AI automatically",
      "Call back from the business number",
      "Texting from the business number, once carrier registration is approved",
    ],
    tier: "Presence and above · coming soon (Android first)",
  },
  {
    icon: <CalendarCheck size={26} />,
    tag: "BOOKING",
    title: "Booking by Phone and Chat",
    headline: "Customers book themselves.",
    body: [
      "Callers and website visitors can pick a time without waiting for someone at the counter. The appointment lands on your calendar.",
      "Call summaries go to your technician as well as you, so they know what's coming in.",
    ],
    gets: [
      "Booking through the AI on the phone",
      "Booking through a chat assistant on your website",
      "Call summaries sent to your technician",
    ],
    tier: "Presence and above · coming soon",
  },
  {
    icon: <BellRing size={26} />,
    tag: "BRING CUSTOMERS BACK",
    title: "Service Reminders",
    headline: "Reminders that go out without anyone remembering to send them.",
    body: [
      "We sync with your shop management system and send service reminders by date and mileage.",
      "They're on from day one. You don't have to log in and build anything.",
    ],
    gets: [
      "Reminders by service date and mileage",
      "Your customer and vehicle history, synced",
      "Works without anyone at the shop setting it up",
    ],
    tier: "Pipeline and above · coming soon",
  },
  {
    icon: <Star size={26} />,
    tag: "REPUTATION",
    title: "Review Requests and Replies",
    headline: "More reviews, and every one answered.",
    body: [
      "When a repair order closes, the customer gets a review request. When a review comes in, a reply is drafted in your voice.",
      "You approve replies with one tap. Nothing gets posted without you.",
    ],
    gets: [
      "Review request after each closed repair",
      "Reply drafts for every Google review",
      "One-tap approval before anything posts",
    ],
    tier: "Pipeline and above · coming soon",
  },
  {
    icon: <Mail size={26} />,
    tag: "FOLLOW-UP",
    title: "Follow-Up and Campaigns",
    headline: "Price shoppers and past customers hear from you again.",
    body: [
      "Callers who asked about a price and said yes to a follow-up get one. Past customers get a text or email campaign twice a month, written for you.",
      "You approve each campaign before it goes out.",
    ],
    gets: [
      "Follow-up with price shoppers who asked for it",
      "2 text and email campaigns a month, written for you",
      "A report linking AI-handled calls to repair orders",
    ],
    tier: "Pipeline and above · coming soon",
  },
  {
    icon: <Megaphone size={26} />,
    tag: "DONE FOR YOU",
    title: "Hands-On Marketing",
    headline: "Marketing from someone who knows your shop.",
    body: [
      "For shops that want more new customers, not only returning ones. We run your Google Ads, write your campaigns and personally follow up on pricing inquiries.",
      "Limited to a few shops at a time so each one gets real attention.",
    ],
    gets: [
      "Google Ads management and social media posts",
      "Personal phone follow-up on up to 15 pricing inquiries a month",
      "4 campaigns a month and a monthly call with you",
    ],
    tier: "Momentum · coming soon",
  },
];

const INDUSTRIES = [
  {
    name: "Auto Repair",
    body: "Our main focus. Independent shops with one to ten bays, where the people who could answer the phone are the same people doing the work.",
    active: true,
  },
  {
    name: "Engineering & Professional Services",
    body: "Call answering and client follow-up for firms where the phone rings while everyone is out on a job.",
    active: true,
  },
  {
    name: "Real Estate",
    body: "Inquiry handling and lead qualification for property businesses.",
    active: false,
  },
  {
    name: "Any Business That Misses Calls",
    body: "If your phone rings while you're busy doing the work, Catch can answer it. Book a call and we'll tell you whether it fits.",
    active: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white overflow-hidden">
        <ParticleField />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <SectionLabel light>What We Build</SectionLabel>
            <h1
              className="hero-anim text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ animationDelay: "0ms" }}
            >
              Every missed call is a job going to another shop.
            </h1>
            <p
              className="hero-anim text-base sm:text-lg text-cream/80 leading-relaxed mb-8"
              style={{ animationDelay: "150ms" }}
            >
              Start with Catch: an AI receptionist on the number you already
              have, $99 a month. As each next piece is ready, you can add your
              business phone in an app, reminders and reviews that run
              themselves, and marketing done for you.
            </p>
            <div
              className="hero-anim"
              style={{ animationDelay: "250ms" }}
            >
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
                  {CTA.primary.label} <ArrowRight size={16} className="ml-1" />
                </CTAButton>
                <CTAButton href={CTA.secondary.href} variant="secondary" className="text-base px-8 py-4">
                  {CTA.secondary.label}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagonalDivider from="#1A1A2E" to="#ffffff" />

      {/* ── Services grid ─────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 60}>
                <div className="border-t-2 border-gold pt-7">
                  {/* Tag */}
                  <p className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3">
                    {svc.tag}
                  </p>
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-gold flex-shrink-0 mt-0.5">{svc.icon}</div>
                    <h2 className="text-xl font-bold text-navy leading-snug">
                      {svc.headline}
                    </h2>
                  </div>
                  {/* Body */}
                  <div className="space-y-3 mb-6">
                    {svc.body.map((para, j) => (
                      <p key={j} className="text-sm text-grey leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                  {/* What you get */}
                  <p className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3">
                    What you get
                  </p>
                  <ul className="space-y-2 mb-5">
                    {svc.gets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-sm text-grey leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Available on */}
                  <p className="text-xs text-grey/60">
                    <span className="font-semibold text-grey/80">Available on:</span>{" "}
                    {svc.tier}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#ffffff" to="#FAF7F0" />

      {/* ── Industries ────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <FadeUp>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 max-w-xl">
              Built for auto repair shops first.
            </h2>
            <p className="text-grey text-base leading-relaxed mb-10 max-w-2xl">
              Auto repair is where we started and where we focus. The same
              problem, a phone that rings while everyone is working, shows up in
              other businesses too.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <FadeUp key={ind.name} delay={i * 80}>
                <div
                  className={`p-6 border-l-4 h-full ${
                    ind.active ? "border-gold bg-white" : "border-gray-200 bg-white/60"
                  }`}
                >
                  <p
                    className={`text-sm font-bold mb-2 ${
                      ind.active ? "text-navy" : "text-grey"
                    }`}
                  >
                    {ind.name}
                    {!ind.active && (
                      <span className="ml-2 text-[10px] font-medium tracking-widest text-grey/50 uppercase">
                        Coming soon
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-grey/70 leading-relaxed">{ind.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from="#FAF7F0" to="#1A1A2E" flip />

      {/* ── Page CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeUp>
            <SectionLabel light>See It on Your Own Calls</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl mx-auto">
              Try Catch free for {TRIAL.days} days.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              We set it up on your current number in about 20 minutes. No credit
              card, and if it&apos;s not for you, we switch your forwarding back.
              Prefer to talk first? Book a free 30-minute call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CTAButton href={CTA.primary.href} variant="primary" className="text-base px-8 py-4">
                {CTA.primary.label} <ArrowRight size={16} className="ml-1" />
              </CTAButton>
              <CTAButton href={CTA.secondary.href} variant="secondary" className="text-base px-8 py-4">
                {CTA.secondary.label}
              </CTAButton>
            </div>
            <p className="mt-5 text-xs text-cream/40 tracking-wide">
              Working with auto repair shops in the DMV.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
