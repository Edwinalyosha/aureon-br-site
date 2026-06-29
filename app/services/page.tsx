import type { Metadata } from "next";
import {
  Phone,
  CalendarCheck,
  Mail,
  Star,
  BarChart3,
  Plug,
  Megaphone,
  MousePointer,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ParticleField } from "@/components/ui/ParticleField";
import { CTAButton } from "@/components/ui/CTAButton";
import { DiagonalDivider } from "@/components/ui/DiagonalDivider";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI voice receptionist, booking intake, automated follow-up, review management, operational dashboards, CRM integration, social media, and Google Ads — built custom for your operation.",
};

const SERVICES = [
  {
    icon: <Phone size={26} />,
    tag: "NEVER MISS A CALL",
    title: "AI Voice Receptionist",
    headline: "Your phone gets answered. Every time.",
    body: [
      "When your team is on a job, in a meeting, or off the clock, calls go to voicemail — and most customers don't leave one. They call your competitor instead.",
      "The AI Voice Receptionist answers every missed call, collects the caller's name, number, and reason for calling, and sends you a full summary by email within seconds. You wake up with a list of who called and what they need. Nothing falls through.",
    ],
    gets: [
      "24/7 call coverage with no additional staff",
      "Immediate email notification after every call — name, callback number, and AI-generated summary",
      "Full call transcript stored and logged automatically",
      "Urgency detection — emergency calls flagged separately",
    ],
    tier: "All plans",
  },
  {
    icon: <CalendarCheck size={26} />,
    tag: "INBOUND BOOKING",
    title: "AI Booking Intake",
    headline: "Customers book themselves. You show up.",
    body: [
      "A conversational AI intake handles inbound booking requests around the clock. Customers answer a few questions, get placed on your calendar, and receive confirmation — without a phone call or a manual scheduling step on your end.",
      "No more voicemail tag. No more missed estimates. No more scheduling callbacks that never happen.",
    ],
    gets: [
      "Bookings confirmed while you sleep",
      "Qualifier questions built in — you only get the calls worth taking",
      "Calendar integration so there's no double-booking",
      "Confirmation sent to the customer automatically",
    ],
    tier: "Starter Complete and above",
  },
  {
    icon: <Mail size={26} />,
    tag: "FOLLOW-UP & RETENTION",
    title: "Automated Follow-Up Sequences",
    headline: "Every estimate gets followed up. Every customer gets a reason to come back.",
    body: [
      "Most revenue leaks happen after the first contact. An estimate that doesn't get a follow-up. A satisfied customer who never hears from you again. A job that closes but never turns into a referral.",
      "We build email sequences that fire automatically after a visit, an estimate, or an inquiry. You approve the content once. It runs.",
    ],
    gets: [
      "Estimate follow-up sequences that close more work",
      "Post-job sequences that generate reviews and referrals",
      "Re-engagement campaigns for lapsed customers",
      "Timing and messaging designed for your specific workflow",
    ],
    tier: "Starter Complete and above",
  },
  {
    icon: <Star size={26} />,
    tag: "REPUTATION",
    title: "Review Management",
    headline: "Your Google rating is a sales tool. Treat it like one.",
    body: [
      "Most businesses don't respond to reviews — or respond inconsistently. Both hurt you. Search algorithms reward engagement. Customers read how you handle criticism before they call.",
      "We handle AI-assisted responses to your Google reviews — positive and negative — drafted in your voice. Review before posting, or set it to run automatically.",
    ],
    gets: [
      "Consistent, professional responses to every review",
      "Negative reviews handled with tone and care — not defensiveness",
      "Review request automation woven into your post-job follow-up",
      "Google ranking signals improved through active engagement",
    ],
    tier: "Professional and above",
  },
  {
    icon: <BarChart3 size={26} />,
    tag: "REPORTING",
    title: "Operational Dashboard",
    headline: "One number for each metric that matters.",
    body: [
      "Most business owners manage by gut feel. They know roughly how busy they are, roughly what campaigns are running, and roughly whether last month was better or worse. Roughly isn't a strategy.",
      "The Operational Dashboard gives you a single view of your business — booking volume, follow-up performance, review scores, and revenue trends — updated automatically, no spreadsheets required.",
    ],
    gets: [
      "Live view of bookings, follow-up performance, and review scores",
      "Week-over-week trends that surface problems early",
      "Campaign-level data so you know what's working and what isn't",
      "Built to your metrics — not a generic template",
    ],
    tier: "Professional and above",
  },
  {
    icon: <Plug size={26} />,
    tag: "INTEGRATION",
    title: "CRM & Tool Integration",
    headline: "Your tools should work together. Most of them don't.",
    body: [
      "The average small business runs 4–8 separate tools. A booking platform. A CRM. An email tool. A payment processor. Each works fine in isolation. None of them talk to each other. So data gets re-entered, touchpoints get missed, and things fall through the cracks.",
      "We connect your existing tools — or recommend and configure new ones — so customer data flows between systems without manual entry.",
    ],
    gets: [
      "Single source of truth for every customer relationship",
      "Data flowing automatically between booking, CRM, email, and billing",
      "No more copy-pasting between platforms",
      "Reduced tool count — most clients end up with fewer subscriptions, not more",
    ],
    tier: "Professional and above",
  },
  {
    icon: <Megaphone size={26} />,
    tag: "CONTENT",
    title: "Social Media Content",
    headline: "Content that sounds like you. Posted without thinking about it.",
    body: [
      "You know you should be posting. You don't have time to post. What goes up is inconsistent, and you're not sure it's doing anything anyway.",
      "We build a content system for your business — AI-assisted drafting in your voice, platform-specific formatting, and a publishing schedule that runs without your involvement beyond an initial approval pass.",
    ],
    gets: [
      "Platform-specific content (Google Business, Facebook, Instagram)",
      "Posting on a consistent schedule — no gap weeks",
      "Content tied to your actual business (seasonal demand, service promotions, team highlights)",
      "Voice guidelines set once, maintained automatically",
    ],
    tier: "Starter Complete and above",
  },
  {
    icon: <MousePointer size={26} />,
    tag: "PAID TRAFFIC",
    title: "Google Ads Management",
    headline: "Ads that target the right customer at the right moment.",
    body: [
      "Google Ads for service businesses isn't complicated — but it is specific. The wrong keyword match type wastes budget. The wrong landing page loses the click you paid for. Most agencies set it and forget it.",
      "We build and manage campaigns around your actual service area, your actual margins, and your actual capacity. Monthly reporting included.",
    ],
    gets: [
      "Campaign setup built for local service targeting",
      "Ongoing bid and budget management",
      "Monthly performance report — spend, clicks, calls generated",
      "Landing page recommendations to improve conversion rate",
    ],
    tier: "Professional and above",
  },
];

const INDUSTRIES = [
  {
    name: "HVAC, Plumbing & Electrical",
    body: "Field-based operations where the tech in the field can't answer the phone — and missed calls mean missed revenue. The AI Voice Receptionist and Booking Intake were built for exactly this.",
    active: true,
  },
  {
    name: "Auto Repair",
    body: "High call volume, time-sensitive scheduling, and reputation that lives and dies on Google reviews. We've built a full automation stack for a DMV-area shop and it runs without a dedicated front-desk person.",
    active: true,
  },
  {
    name: "Engineering & Professional Services",
    body: "Client communication, follow-up, and reporting automation for firms where relationships are the product.",
    active: true,
  },
  {
    name: "Real Estate Operations",
    body: "Inquiry handling, follow-up sequences, and lead qualification automation.",
    active: false,
  },
  {
    name: "Other Small & Mid-Size Businesses",
    body: "If your team is spending time on admin that should be automated, we can map it. Book a consultation and we'll tell you what's worth building.",
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
              Every hour your team spends on admin is an hour they&apos;re not
              doing the work that pays.
            </h1>
            <p
              className="hero-anim text-base sm:text-lg text-cream/80 leading-relaxed mb-8"
              style={{ animationDelay: "150ms" }}
            >
              Aureon Bridge builds custom automation systems that handle the
              operational layer of your business — booking, follow-up, reviews,
              reporting, and tool integration — so your team can focus on
              delivering the work.
            </p>
            <div
              className="hero-anim"
              style={{ animationDelay: "250ms" }}
            >
              <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
                Book a Free Consultation <ArrowRight size={16} className="ml-1" />
              </CTAButton>
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
              Built for the businesses that keep things running.
            </h2>
            <p className="text-grey text-base leading-relaxed mb-10 max-w-2xl">
              The systems we build are custom — but the problems they solve are
              the same: missed calls, lost estimates, manual processes that eat
              time, and tools that don&apos;t talk to each other.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <SectionLabel light>Ready to See What This Looks Like?</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl mx-auto">
              Book a free 30-minute consultation.
            </h2>
            <p className="text-cream/70 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              We&apos;ll map your current workflow, identify where time and
              revenue are leaking, and show you what an automation system built
              for your operation would actually look like. No commitment. No
              generic pitch.
            </p>
            <CTAButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Book a Free Consultation <ArrowRight size={16} className="ml-1" />
            </CTAButton>
            <p className="mt-5 text-xs text-cream/40 tracking-wide">
              Working with businesses in the DMV and beyond.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
